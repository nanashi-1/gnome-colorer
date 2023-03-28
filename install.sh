#!/bin/bash

[ ! -d node_modules ] && echo 'Installing dependencies...' && npm install

[ ! -d build ] && echo 'Compiling typescript' && npm run compile

npm exec -- node build/index.js $@
