'use strict'

const test = require('ava')

const vinDecoder = require('../src')

test('Tesla Model S 75D 2018', t => {
  t.snapshot(vinDecoder('5YJSA7E29JF250011'))
})