#!/usr/bin/env node

var createNode = require('./index.js')

var key = process.argv[2]

createNode(key, {dht: false, dontShare: true})