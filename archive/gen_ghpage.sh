#!/usr/bin/env bash
set -e

# Run from the root of the repository
REPO_DIR=${1:-$(pwd)}
DOCS_DIR=${REPO_DIR}/docs/.vitepress/dist
UPDATE_FLAG=""
if [ -z ${COMMIT_MESSAGE+x} ]; then
  COMMIT_MESSAGE=$(git log -1 --pretty=format:"%s")
fi
echo "var is unset";
if [[ $COMMIT_MESSAGE == *"[UPDATE]"* ]]; then
  echo -e "\e[1m\e[41m\e[97mMandatory Update\e[0m"
  UPDATE_FLAG="--update"
fi


# Step 1 : strip json database and add it to gh-pages
echo -e "\e[1m\e[44m\e[97mStep 1: rewrite and minimize database\e[0m"
DB=("${REPO_DIR}/dist/mydata.json")
cd ${REPO_DIR}/ci
for jsDB in ${DB[@]}; do
  if [ -f $jsDB ]; then
    DB_FILE=$(basename $jsDB)
    DB_DIR=$(dirname $jsDB)
    jdDBDetail="${DB_DIR}/${DB_FILE%.*}_detail.json"

    node rewrite_db.js $jsDB ${UPDATE_FLAG}

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
cp dist/Super_preloaderPlus_one_New.user.js ${DOCS_DIR}/ || true
curl http://wedata.net/databases/AutoPagerize/items_all.json -X GET -H 'Content-Type: application/json'  -o ${DOCS_DIR}/wedata.json
curl http://wedata.net/databases/AutoPagerize.json -X GET -H 'Content-Type: application/json' -o ${DOCS_DIR}/wedata_detail.json
