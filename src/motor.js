'use strict'

const S = (letter, year) => {
  switch (year) {
    case 2012:
    case 2013:
      switch (letter) {
        case 'C':
          return 'Base A/C Motor, Tier 2 battery (31-40 kWh)'
        case 'G':
          return 'Base A/C Motor, Tier 4 battery (51-60 kWh)'
        case 'N':
          return 'Base A/C Motor, Tier 7 battery (81-90 kWh)'
        case 'P':
          return 'Performance A/C Motor, Tier 7 battery (81-90 kWh)'
        default:
          return null
      }
    case 2014:
      switch (letter) {
        case '1':
          return 'Single Motor - Three Phase A/C Induction'
        case '2':
          return 'Dual Motors -Three Phase A/C Induction'
        default:
          return null
      }
    case 2015:
    case 2016:
    case 2017:
    case 2018:
      switch (letter) {
        case '1':
          return 'Single Motor -Three Phase A/C Induction - Large Base'
        case '2':
          return 'Three Phase A/C Induction - Small Base + Small Base'
        case '3':
          return 'Single Motor -Three Phase A/C Induction - Large Performance'
        case '4':
          return 'Dual Motors -Three Phase A/C Induction - Small Base + Large Performance'
        default:
          return null
      }
    case 2019:
    case 2020:
    case 2021:
      switch (letter) {
        case '1':
          return 'Single Motor - Standard'
        case '2':
          return 'Dual Motor - Standard'
        case '3':
          return 'Single Motor - Performance'
        case '4':
          return 'Dual Motor - Performance'
        default:
          return null
      }
    default:
      switch (letter) {
        case '5':
          return 'Dual Motor'
        case '6':
          return 'Triple Motor'
        default:
          return null
      }
  }
}

const X = letter => {
  switch (letter) {
    case '2':
      return 'Dual Motor (standard)'
    case '4':
      return 'Dual Motor (performance)'
    case '5':
      return 'Dual Motor'
    case '6':
      return 'Triple Motor'
    default:
      return null
  }
}

const Y = letter => {
  switch (letter) {
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
      return null
  }
}

const _3 = letter => {
  switch (letter) {
    case 'A':
      return 'Single Motor Standard (3DU 800A)'
    case 'B':
      return 'Dual Motor Standard'
    case 'C':
      return 'Dual Motor Performance'
    case 'R':
      return 'Single Motor Standard (3DU 600A)'
    case 'S':
      return 'Single Motor Standard (DUB 600A)'
    default:
      return null
  }
}

module.exports = { S, 3: _3, X, Y }
