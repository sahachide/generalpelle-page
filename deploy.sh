#!/usr/bin/env sh

set -e
npm run build
cd build
#echo 'demo.ch' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:sahachide/generalpelle-page.git master:gh-pages
cd -