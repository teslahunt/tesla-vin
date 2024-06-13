'use strict'

module.exports = letter => {
  switch (letter) {
    case 'A':
      return 'Tesla Austin, Texas (USA)'
    case 'B':
      return 'Tesla Berlin, Germany'
    case 'C':
      return 'Tesla Shangai, China'
    case 'F':
      return 'Tesla Fremont, California (USA)'
    default:
      return null
  }
}
