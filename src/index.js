'use strict'

const debug = require('debug-logfmt')('vin-decoder')

const worldManufacturingIdentifier = input => {
  switch (input) {
    case '5YJ':
      return 'Fremont, California'
    case '7SA':
      return 'Fremont, California'
    case 'LRW':
      return 'Shanghai, China'
    case 'XP7':
      return 'Berlin, Germany'
    case 'SFZ':
      return 'UK (Roadster 1)'
    default:
      debug.warn(`Unknown world manufacturing identifier: ${input}`)
      return null
  }
}

const bodyType = input => {
  switch (input) {
    case 'A':
    case 'E':
    case 'G':
    case 'C':
      return 'Sedan 4 Door Left-Hand Drive'
    case 'B':
    case 'F':
    case 'H':
      return 'Sedan 4 Door Right-Hand Drive'
    default:
      debug.warn(`Unknown body type: ${input}`)
      return null
  }
}

const restraintSystems = input => {
  switch (input) {
    case '1':
      return 'Type 2 Manual seat belts (FR, SR*3) with front Airbags, PODS, side Inflatable restraints, Knee Airbags'
    case '7':
      return 'Type 2 Manual seatbelts (FR, SR*3) with front Airbags, side Inflatable restraints'
    case 'A':
      return 'Type 2 Manual seatbelts (FR, SR*3, TR*2) with front Airbags, PODS, side Inflatable restraints, Knee Airbags'
    case 'D':
      return 'Type 2 Manual seatbelts (FR, SR*3) with front Airbags, PODS, side Inflatable restraints, Knee Airbags'
    case 'C':
      return 'Type 2 Manual seatbelts with front Airbags, PODS, side Inflatable restraints'
    default:
      debug.warn(`Unknown restraintSystems: ${input}`)
      return null
  }
}

const fuelType = input => {
  switch (input) {
    case 'E':
      return 'Electric (Fremont-built vehicles), Ternary System Li-ion battery (Giga Shanghai-built vehicles)'
    case 'F':
      return 'Lithium Iron Phosphate Battery (Giga Shanghai-built vehicles only)'
    default:
      debug.warn(`Unknown fuelType: ${input}`)
      return null
  }
}

const motor = input => {
  switch (input) {
    case '2':
      return 'Dual Motor Standard'
    case '5':
      return 'Dual Motor'
    case '6':
      return 'Triple Motor'
    case 'A':
      return 'Single Motor Standard'
    case 'B':
      return 'Dual Motor'
    case 'D':
      return 'Single Motor Standard'
    case 'E':
      return 'Dual Motor Standard'
    case 'F':
      return 'Dual Motor Performance (3DU 800A)'
    case 'J':
      return 'Single Motor Standard'
    case 'K':
      return 'Dual Motor Standard'
    case 'L':
      return 'Dual Motor Performance'
    case 'R':
      return 'Single Motor Standard (3DU 600A)'
    case 'S':
      return 'Single Motor Standard (DUB 600A)'
    default:
      debug.warn(`Unknown motor identifier: ${input}`)
      return null
  }
}

const year = input => {
  switch (input) {
    case 'H':
      return '2017'
    case 'J':
      return '2018'
    case 'K':
      return '2019'
    case 'L':
      return '2020'
    case 'M':
      return '2021'
    case 'N':
      return '2022'
    case 'P':
      return '2023'
    case 'R':
      return '2024'
    default:
      debug.warn(`Unknown year: ${input}`)
      return null
  }
}

const plantOfManufacture = input => {
  switch (input) {
    case 'A':
      return 'Tesla Austin, TX (USA)'
    case 'B':
      return 'Tesla Berlin (Germany)'
    case 'C':
      return 'Tesla China (Giga Shanghai)'
    case 'F':
      return 'Tesla Fremont, CA (USA)'
    default:
      debug.warn(`Unknown fuelType identifier: ${input}`)
      return null
  }
}

const model = input => {
  switch (input) {
    case 'S':
      return 'Tesla Model S'
    case '3':
      return 'Tesla Model 3'
    case 'X':
      return 'Tesla Model X'
    case 'Y':
      return 'Tesla Model Y'
    case 'R':
      return 'Tesla Model R'
    default:
      debug.warn(`Unknown model identifier: ${input}`)
      return null
  }
}

/**
 * - https://service.tesla.com/docs/ModelY/ServiceManual/en-us/GUID-0C797294-574D-4EE4-8017-C339A7D58411.html
 * - https://service.tesla.com/docs/ModelY/ServiceManual/en-us/GUID-0C797294-574D-4EE4-8017-C339A7D58411.html
 * - https://www.findmyelectric.com/tesla-vin-decoder/
 * - https://teslatap.com/vin-decoder/
 */
module.exports = vin => {
  const result = {
    model: model(vin[3]),
    bodyType: bodyType(vin[4]),
    worldManufacturingIdentifier: worldManufacturingIdentifier(vin.slice(0, 3)),
    restraintSystems: restraintSystems(vin[5]),
    fuelType: fuelType(vin[6]),
    motor: motor(vin[7]),
    year: year(vin[9]),
    PlantOFManufacture: plantOfManufacture(vin[10])
  }

  debug.warn('\n' + JSON.stringify({
    vin,
    result
  }, null, 2) + '\n')

  return result
}
