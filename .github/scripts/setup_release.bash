#!/bin/bash
set -euo pipefail

nvm use 12
# nvm use --delete-prefix v12.18.4
nvm use --delete-prefix v12.18.4
rm -rf node_modules/
rm -rf .cache/
rm -rf public/
rm package-lock.json
rm yarn.lock
git gc
npm install
yarn
yarn run lint
yarn run lint:fix
yarn run lint-staged
yarn run format-prettier
