'use strict'

const test = require('ava')

const vinDecoder = require('../src')

test('Tesla Model Y Standard Range 2024', t => {
  t.snapshot(vinDecoder('XP7YGCES4RB382301'))
})

test('Tesla Model Y Long Range AWD 2021', t => {
  t.snapshot(vinDecoder('5YJYGDEE4MF067850'))
})
