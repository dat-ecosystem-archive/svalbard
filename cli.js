#!/usr/bin/env node

var createNode = require('./index.js')

var key = 'f69a90011f3619b890e6c950111bdba93118e9e1bc2ed3906ccbe13eb5e20dc8'

createNode(key, {dht: false, dontShare: true})