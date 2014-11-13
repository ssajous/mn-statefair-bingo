#!/bin/sh

set -e
npm install
bower install
npm test
grunt build
tar -cvzf deploy.tar.gz ./dist

