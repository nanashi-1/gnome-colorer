#!/bin/bash

npm run compile

npm exec -- node build/index.js $@
