'use strict'

const test = require('ava')

const vinDecoder = require('../src')

test.todo('Freemont')

test.todo('Freemont/Austin')

test.skip('Shangai', t => {
  // t.deepEqual(vinDecoder('LRWYGCEK9NC220895'), {
  //   model: 'Y',
  //   bodyType: 'MPV 5 DR / LHD',
  //   worldManufacturingIdentifier: 'Shanghai',
  //   restraintSystems:
  //     'Type 2 Manual seatbelts with front Airbags, PODS, side Inflatable restraints',
  //   fuelType:
  //     'Electric (Fremont-built vehicles), Ternary System Li-ion battery (Giga Shanghai-built vehicles)',
  //   motor: 'Dual Motor Standard',
  //   year: '2022',
  //   PlantOFManufacture: 'Tesla China (Giga Shanghai)'
  // })
})

test('Berlin', t => {
  t.snapshot(vinDecoder('XP7YGCES4RB382301'))
})

test.skip('long VINs', t => {
  t.snapshot(vinDecoder('LRWY258_d4752fcc6aa867bb533fa6d2c61a2586'))
})
