'use strict'

const test = require('ava')

const vinDecoder = require('../src')

test('Tesla Model S 85 2012', t => {
  t.snapshot(vinDecoder('5YJSA1DN6CFS00937'))
})

test('Tesla Model S 75D 2018', t => {
  t.snapshot(vinDecoder('5YJSA7E29JF250011'))
})

test('Tesla Model S 60 2013', t => {
  t.snapshot(vinDecoder('5YJSA1AC3DFP10148'))
})
