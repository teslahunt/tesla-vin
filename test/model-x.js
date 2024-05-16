'use strict'

const test = require('ava')

const vinDecoder = require('../src')

test('Tesla Model X 75D 2018', t => {
  t.snapshot(vinDecoder('5YJXCCE22JF117647'))
})
