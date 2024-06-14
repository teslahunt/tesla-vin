'use strict'

const test = require('ava')

const vinDecoder = require('../src')

test('Tesla Model S 85 2012', t => {
  t.snapshot(vinDecoder('5YJSA1DN6CFS00937'))
})

test('Tesla Model S 60 2013', t => {
  t.snapshot(vinDecoder('5YJSA1AC3DFP10148'))
})

test('Tesla Model S P85+ 2014', t => {
  t.snapshot(vinDecoder('5YJSA6H11EFP53213'))
})

test('Tesla Model S P90D 2015', t => {
  t.snapshot(vinDecoder('5YJSA7E41FF104923'))
})

test('Tesla Model S P100D 2017', t => {
  t.snapshot(vinDecoder('5YJSA7E4XHF197251'))
})

test('Tesla Model S 75D 2018', t => {
  t.snapshot(vinDecoder('5YJSA7E29JF250011'))
})

test('Tesla Model S Plaid 2022', t => {
  t.snapshot(vinDecoder('5YJSA1E6XNF472157'))
})
