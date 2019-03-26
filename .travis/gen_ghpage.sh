#!/bin/bash -e
if [ ! -z `git diff --name-only HEAD~1 HEAD | grep -EZ 'mydata.json|docs/'` ]; then
    travis-sphinx build --source docs/source
    rm -rf doc/build/_downloads
    sed -i 's|_downloads/\w\+/||g' doc/build/super_preloader.html
    curl http://wedata.net/databases/AutoPagerize/items_all.json -X GET -H 'Content-Type: application/json'  -o doc/build/wedata.json
    cp mydata.json doc/build/mydata.json
    export DAY=`date --date='now' +'%F %X %Z'`
    travis-sphinx deploy -m "${TRAVIS_COMMIT}-${DAY}"
fi