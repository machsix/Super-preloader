#!/bin/bash -e
REPO_DIR=`pwd`
# updata mydata
cd ${REPO_DIR}/.travis
node write_mydata.js
echo -e "\e[1m\e[41m\e[97mFinish writing mydata_detail.json\e[0m"
if [ -f "../mydata_dev.json" ]; then
    node write_mydata.js mydata_dev.json
    echo -e "\e[1m\e[41m\e[97mFinish writing details for mydata_dev.json\e[0m"
fi
cd ${REPO_DIR}
git add mydata.json
if [ -f "mydata_dev.json" ]; then
    git add mydata_dev.json
fi
git commit -m "Temporary commit"

git fetch origin gh-pages:gh-pages
if [[ -n `git diff --name-status gh-pages..master -- mydata.json` ]] || [[ ${TRAVIS_COMMIT_MESSAGE} == *"[ci deploy]"* ]]; then
    pip install sphinx_rtd_theme
    pip install travis-sphinx
    echo "mydata.json is changed"
    travis-sphinx build --source docs/source
    rm -rf doc/build/_downloads
    sed -i 's|_downloads/\w\+/||g' doc/build/super_preloader.html

    # update json from wedata
    curl http://wedata.net/databases/AutoPagerize/items_all.json -X GET -H 'Content-Type: application/json'  -o doc/build/wedata.json
    curl http://wedata.net/databases/AutoPagerize.json -X GET -H 'Content-Type: application/json' -o doc/build/wedata_detail.json

    cp ${REPO_DIR}/mydata.json        ${REPO_DIR}/doc/build/mydata.json
    cp ${REPO_DIR}/mydata_detail.json ${REPO_DIR}/doc/build/mydata_detail.json
    echo -e "\e[1m\e[41m\e[97mMydata is deployed\e[0m"
    if [ -f ${REPO_DIR}/mydata_dev.json ]; then
        cp ${REPO_DIR}/mydata_dev.json        ${REPO_DIR}/doc/build/mydata_dev.json
        cp ${REPO_DIR}/mydata_dev_detail.json ${REPO_DIR}/doc/build/mydata_dev_detail.json
        echo -e "\e[1m\e[41m\e[97mMydata_dev is deployed\e[0m"
    fi

    export DAY=`date --date='now' +'%F %X %Z'`
    travis-sphinx deploy -m "${TRAVIS_COMMIT}-${DAY}"
    echo -e "\e[1mgh-pages is deployed\e[0m"
else
    echo -e "\e[1mmydata.json is not changed\e[0m"
fi