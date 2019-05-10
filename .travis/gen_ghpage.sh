#!/bin/bash
set +e

REPO_DIR=${1:-`pwd`}
DOCS_DIR=${REPO_DIR}/docs/.vuepress/dist

# build document
# cd ${REPO_DIR}
# yarn docs:build
# echo -e "\e[1m\e[41m\e[97mFinish building docs\e[0m"

# strip json database
DB=("${REPO_DIR}/database/mydata.json"
    "${REPO_DIR}/database/mydata_dev.json")
cd ${REPO_DIR}/.travis
for jsDB in ${DB[@]}; do
  if [ -f $jsDB ]; then
    DB_NAME=`basename $jsDB`
    node write_mydata.js $jsDB
    echo -e "\e[1m\e[41m\e[97mFinish writing ${DB_NAME}\e[0m"
  fi
done

# temporary commit to decide if database_detail.json is updated
cd ${REPO_DIR}
for jsDB in ${DB[@]}; do
  if [ -f $jsDB ]; then
    git add $jsDB
    DB_DIR=`dirname $jsDB`
    DB_FILENAME=`basename $jsDB`
    git add "${DB_DIR}/${DB_FILENAME%.*}_detail.json"
  fi
done
git commit -m "Temporary commit"
COMMIT_HASH=`git rev-parse HEAD`
echo -e "\e[1m\e[41m\e[97mTemporary Hash: ${COMMIT_HASH}\e[0m"
echo -e "\e[1m\e[41m\e[97mGit status\e[0m"
git status

# Fetch documents
git fetch origin gh-pages:gh-pages

# check if any json files were updated
# travis works in detached head mode, so we compare with commit hash instead of master
cd ${REPO_DIR}
for jsDB in ${DB[@]}; do
  DB_DIR=`dirname $jsDB`
  DB_FILENAME=`basename $jsDB`
  DETAIL_FILE="${DB_DIR}/${DB_FILENAME%.*}_detail.json"

  cp ${DETAIL_FILE}  ${DOCS_DIR}/
  git checkout gh-pages -- ${DB_FILENAME}
  git checkout gh-pages -- "${DB_FILENAME%.*}_detail.json"

  if [[ -n `diff ${jsDB} ${DB_FILENAME}` ]]; then
    echo -e "\e[1m${DB_FILENAME} is updated\e[0m"
    cp ${jsDB}         ${DOCS_DIR}/
    cp ${DETAIL_FILE}  ${DOCS_DIR}/
  else
    echo -e "\e[1m${DB_FILENAME} is not updated\e[0m"
    cp ${REPO_DIR}/${DB_FILENAME}                    ${DOCS_DIR}/
    cp "${REPO_DIR}/${DB_FILENAME%.*}_detail.json"   ${DOCS_DIR}/
  fi
done

# update json from wedata
curl http://wedata.net/databases/AutoPagerize/items_all.json -X GET -H 'Content-Type: application/json'  -o ${DOCS_DIR}/wedata.json
curl http://wedata.net/databases/AutoPagerize.json -X GET -H 'Content-Type: application/json' -o ${DOCS_DIR}/wedata_detail.json