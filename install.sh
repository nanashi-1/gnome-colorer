#!/bin/bash

echo 'Compiling script...'
tsc -p tsconfig.json

node build/index.js $@
