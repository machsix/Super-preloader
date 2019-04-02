#!/bin/bash -e
JSONFILE=mydata_dev
REPO_DIR=`pwd`
# updata mydata
cd ${REPO_DIR}/.travis
node write_mydata.js ${JSONFILE}.json
echo -e "\e[1m\e[41m\e[97mFinish writing details for ${JSONFILE}.json\e[0m"
cd ${REPO_DIR}
git add ${JSONFILE}.json
git commit -m "Temporary commit"

git remote set-url origin https://machsix:${GH_TOKEN}@github.com/machsix/Super-preloader.git
git fetch origin gh-pages:gh-pages
if [[ -n `git diff --name-status gh-pages..dev -- ${JSONFILE}.json` ]] || [[ ${TRAVIS_COMMIT_MESSAGE} == *"[ci deploy]"* ]]; then
    cp ${REPO_DIR}/${JSONFILE}.json        /tmp/${JSONFILE}.json
    cp ${REPO_DIR}/${JSONFILE}_detail.json /tmp/${JSONFILE}_detail.json
    git reset --hard
    git checkout gh-pages
    cp /tmp/${JSONFILE}.json           ${REPO_DIR}/
    cp /tmp/${JSONFILE}_detail.json    ${REPO_DIR}/


    export DAY=`date --date='now' +'%F %X %Z'`
    git config user.email "travis@example.org>"
    git config user.name  "Travis CI User"
    git add ${JSONFILE}.json
    git add ${JSONFILE}_detail.json
    git commit -m "${TRAVIS_COMMIT}-${DAY}-Deploy dev"
    git push origin gh-pages

    echo -e "\e[1m\e[41m\e[97mMydata is deployed\e[0m"
fi