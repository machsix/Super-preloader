#!/bin/bash -e
git fetch origin gh-pages:gh-pages
if [[ -n `git diff --name-status gh-pages..master -- mydata.json` ]]; then
    echo "mydata.json is changed"
    travis-sphinx build --source docs/source
    rm -rf doc/build/_downloads
    sed -i 's|_downloads/\w\+/||g' doc/build/super_preloader.html
    curl http://wedata.net/databases/AutoPagerize/items_all.json -X GET -H 'Content-Type: application/json'  -o doc/build/wedata.json
    cp mydata.json doc/build/mydata.json
    # remove space in mydata.json
    awk -i -v ORS= -v OFS= '{$1=$1}1' doc/build/mydata.json
    export DAY=`date --date='now' +'%F %X %Z'`
    travis-sphinx deploy -m "${TRAVIS_COMMIT}-${DAY}"
    echo "mydata.json is deployed"
else
    echo "mydata.json is not changed"
fi