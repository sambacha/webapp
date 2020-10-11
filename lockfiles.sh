#!/bin/bash
rm package-lock-only
rm yarn.lock 
rm -rf node_modules/
yarn install
npm install --package-lock-only
