const X = (letter, year) => {
  switch (year) {
    case 2016:
    case 2017:
    case 2018:
    case 2019:
    case 2020:
    case 2021:
      switch (letter) {
        case 'A':
          return 'Type 2 manual seatbelts (FR, SR*3, TR*2) with front airbags, PODS, side inflatable restraints, knee airbags (FR)'
        case 'B':
          return 'Type 2 Manual seatbelts (FR, SR*2, TR*2) with front Airbags, PODS, side Inflatable restraints, Knee Airbags (FR)'
        case 'C':
          return 'Type 2 Manual seatbelts with front Airbags, PODS, side Inflatable restraints'
        case 'D':
          return 'Type 2 Manual seatbelts (FR, SR*3) with front Airbags, PODS, side Inflatable restraints, Knee Airbags (FR)'
        default:
          return null
      }
    default:
      switch (letter) {
        case 'A':
          return 'Type 2 Manual seatbelts (FR, SR*3, TR*2) with front Airbags, PODS, side Inflatable restraints, Knee Airbags'
        case 'B':
          return 'Type 2 Manual seatbelts (FR, SR*2, TR*2) with front Airbags, PODS, side Inflatable restraints, Knee Airbags'
        case 'C':
          return 'Type 2 Manual seatbelts with front Airbags, PODS, side Inflatable restraints'
        case 'D':
          return 'Type 2 Manual seatbelts (FR, SR*3) with front Airbags, PODS, side Inflatable restraints, Knee Airbags'
        default:
          return null
      }
  }
}

const S = (letter, year) => {
  switch (year) {
    case 2012:
    case 2013:
      switch (letter) {
        case '1':
          return 'manual Type 2 USA seat belts, dual front airbags, front/rear side airbags, knee airbags'
        case '2':
          return 'manual Type 2 EU seat belts, dual front airbags, front/rear side airbags, knee airbags'
        default:
          return null
      }
    case 2014:
      switch (letter) {
        case '1':
          return 'Type 2 manual seatbelts (FR, SR*3) with front airbags, PODS, side inflatable restraints, knee airbags (FR)'
        case '2':
          return 'Type 2 manual seatbelts (FR, SR*3) with front airbags, side inflatable restraints, knee airbags (FR)'
        case '3':
          return 'Type 2 manual seatbelts (FR, SR*3) with front airbags, side inflatable restraints'
        case '7':
          return 'Type 2 manual seatbelts (FR, SR*3) with front airbags, side inflatable restraints & active hood'
        default:
          return null
      }
    case 2015:
      switch (letter) {
        case '1':
          return 'Type 2 manual seatbelts (FR, SR*3) with front airbags, PODS, side inflatable restraints, knee airbags (FR)'
        case '3':
          return 'Type 2 manual seatbelts (FR, SR*3) with front airbags, side inflatable restraints'
        case '4':
          return 'Type 2 manual seatbelts (FR, SR*2) with front airbags, side inflatable restraints, knee airbags (FR)'
        case '5':
          return 'Type 2 manual seatbelts (FR, SR*2) with front airbags, side inflatable restraints'
        case '6':
          return 'Type 2 manual seatbelts (FR, SR*3) with front airbags, side inflatable restraints'
        case '7':
          return 'Type 2 manual seatbelts (FR, SR*3) with front airbags, side inflatable restraints & active hood'
        case '8':
          return 'Type 2 manual seatbelts (FR, SR*2) with front airbags, side inflatable restraints & active hood'
        default:
          return null
      }
    case 2016:
    case 2017:
      switch (letter) {
        case '1':
          return 'Type 2 manual seatbelts (FR, SR*3) with front airbags, PODS, side inflatable restraints, knee airbags (FR)'
        case '3':
          return 'Type 2 manual seatbelts (FR, SR*3) with front airbags, side inflatable restraints'
        case '6':
          return 'Type 2 manual seatbelts (FR, SR*3) with front airbags, side inflatable restraints'
        case '7':
          return 'Type 2 manual seatbelts (FR, SR*3) with front airbags, side inflatable restraints & active hood'
        case '8':
          return 'Type 2 manual seatbelts (FR, SR*2) with front airbags, side inflatable restraints & active hood'
        default:
          return null
      }
    case 2018:
    case 2019:
    case 2020:
    case 2021:
      switch (letter) {
        case '1':
          return 'Type 2 manual seatbelts (FR, SR*3) with front airbags, PODS, side inflatable restraints, knee airbags (FR)'
        case '7':
          return 'Type 2 manual seatbelts (FR, SR*3) with front airbags, side inflatable restraints'
        default:
          return null
      }
    default:
      switch (letter) {
        case '1':
          return 'Type 2 Manual seat belts (FR, SR*3) with front Airbags, PODS, side Inflatable restraints, Knee Airbags'
        case '7':
          return 'Type 2 Manual seatbelts (FR, SR*3) with front Airbags, side Inflatable restraints'
        default:
          return null
      }
  }
}

const Y = (letter, year) => {
  switch (letter) {
    case 'A':
      return 'Type 2 Manual seatbelts (FR, SR*3, TR*2) with front Airbags, PODS, side Inflatable restraints, Knee Airbags'
    case 'D':
      return 'Type 2 Manual seatbelts (FR, SR*3) with front Airbags, PODS, side Inflatable restraints, Knee Airbags'
    case 'C':
      return 'Type 2 Manual seatbelts with front Airbags, PODS, side Inflatable restraints'
    default:
      return null
  }
}

const _3 = letter => {
  switch (letter) {
    case '1':
      return 'Type 2 Manual seat belts (FR, SR*3) with front Airbags, PODS, side Inflatable restraints, Knee Airbags'
    case '7':
      return 'Type 2 Manual seatbelts (FR, SR*3) with front Airbags, side Inflatable restraints'
    default:
      return null
  }
}

module.exports = { S, 3: _3, X, Y }
