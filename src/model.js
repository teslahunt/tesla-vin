'use strict'

module.exports = input => {
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
      return null
  }
}
