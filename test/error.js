'use strict'

const test = require('ava')

const vinDecoder = require('../src')

test('throw an errr if the VIN has more than 17 characters', t => {
  const error = t.throws(() => vinDecoder('5YJ3300_66a231d5904bac9ea439118675746d8f'))
  t.is(
    error.message,
    'The VIN must have 17 characters, got 40 (5YJ3300_66a231d5904bac9ea439118675746d8f)'
  )
})
