#!/bin/sh

set -e
npm install
bower install
grunt build
tar -cvzf deploy.tar.gz ./dist

