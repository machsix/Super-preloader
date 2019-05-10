#!/bin/bash
set +e

REPO_DIR=${1:-`pwd`}
DOCS_DIR=${REPO_DIR}/docs/.vuepress/dist

# strip json database and add it to gh-pages
DB=("${REPO_DIR}/dist/mydata.json"
    "${REPO_DIR}/dist/mydata_dev.json")

cd ${REPO_DIR}/.travis
for jsDB in ${DB[@]}; do
  if [ -f $jsDB ]; then
    DB_FILE=`basename $jsDB`
    DB_DIR=`dirname $jsDB`
    jdDBDetail="${DB_DIR}/${DB_FILE%.*}_detail.json"

    node write_mydata.js $jsDB

    cp ${jsDB}         ${DOCS_DIR}/
    cp ${jdDBDetail}   ${DOCS_DIR}/
    echo -e "\e[1m\e[41m\e[97mFinish adding ${DB_FILE}\e[0m"
  fi
done

# update json from wedata
git fetch origin gh-pages:gh-pages
cd ${REPO_DIR}
git checkout gh-pages -- wedata.json || true
git checkout gh-pages -- wedata_detail.json || true
cp wedata.json          ${DOCS_DIR}/wedata.json || true
cp wedata_detail.json   ${DOCS_DIR}/wedata_detail.json || true
curl http://wedata.net/databases/AutoPagerize/items_all.json -X GET -H 'Content-Type: application/json'  -o ${DOCS_DIR}/wedata.json
curl http://wedata.net/databases/AutoPagerize.json -X GET -H 'Content-Type: application/json' -o ${DOCS_DIR}/wedata_detail.json