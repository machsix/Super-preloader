#!/bin/bash -e
git fetch origin gh-pages:gh-pages
cp mydata_dev.json /tmp/
git checkout gh-pages
cp /tmp/mydata_dev.json ./
git add mydata_dev.json
export DAY=`date --date='now' +'%F %X %Z'`
git commit -m "${TRAVIS_COMMIT}-DEV-${DAY}"
git push origin gh-pages