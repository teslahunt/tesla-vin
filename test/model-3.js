'use strict'

const test = require('ava')

const vinDecoder = require('../src')

test('Tesla Model 3 Standard Range Plus 2020', t => {
  t.snapshot(vinDecoder('5YJ3F7EA2LF656311'))
})

test('Tesla Model 3 Mid Range 2018', t => {
  t.snapshot(vinDecoder('5YJ3E1EA8JF169112'))
})

test('Tesla Model 3 Long Range RWD 2019', t => {
  t.snapshot(vinDecoder('5YJ3E1EAXKF313891'))
})

test('Tesla Model 3 Long Range AWD 2019', t => {
  t.snapshot(vinDecoder('5YJ3F7EB7KF490777'))
})

test('Tesla Model 3 Performance 2019', t => {
  t.snapshot(vinDecoder('5YJ3F7EB3KF438661'))
})

test('Tesla Model 3 Long Range AWD 2020', t => {
  t.snapshot(vinDecoder('5YJ3E1EB7LF788019'))
})
