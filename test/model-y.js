'use strict'

const test = require('ava')

const vinDecoder = require('../src')

test.todo('Freemont')

test.todo('Freemont/Austin')

test('Shangai', t => {
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
  t.deepEqual(vinDecoder('XP7YGCES4RB382301'), {
    model: 'Y',
    bodyType: 'MPV 5 DR / LHD',
    worldManufacturingIdentifier: 'Berlin',
    restraintSystems:
      'Type 2 Manual seatbelts with front Airbags, PODS, side Inflatable restraints',
    fuelType:
      'Electric (Fremont-built vehicles), Ternary System Li-ion battery (Giga Shanghai-built vehicles)',
    motor: 'Single Motor Standard (DUB 600A)',
    year: '2024',
    PlantOFManufacture: 'Tesla Berlin (Germany)'
  })
})

test.skip('long VINs', t => {
  t.deepEqual(vinDecoder('LRWY258_d4752fcc6aa867bb533fa6d2c61a2586'), {
    model: 'Y',
    bodyType: 'MPV 5 DR / LHD',
    worldManufacturingIdentifier: 'Shanghai',
    restraintSystems:
      'Type 2 Manual seatbelts with front Airbags, PODS, side Inflatable restraints',
    fuelType:
      'Electric (Fremont-built vehicles), Ternary System Li-ion battery (Giga Shanghai-built vehicles)',
    motor: 'Dual Motor Standard',
    year: '2022',
    PlantOFManufacture: 'Tesla China (Giga Shanghai)'
  })
})
