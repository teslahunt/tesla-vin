'use strict'

const test = require('ava')

const vinDecoder = require('../src')

test('Tesla Model X P100D 2020', t => {
  t.snapshot(vinDecoder('5YJXCBE42LF243439'))
})

test('Tesla Model X 75D 2018', t => {
  t.snapshot(vinDecoder('5YJXCCE22JF117647'))
})

test('Tesla Model X P100D 2016', t => {
  t.snapshot(vinDecoder('5YJXCAE48GF028759'))
})

test('Tesla Model X 90D 2016', t => {
  t.snapshot(vinDecoder('5YJXCCE24GF009944'))
})

test('Tesla Model X Plaid 2023', t => {
  t.snapshot(vinDecoder('7SAXCCE67PF384216'))
})
