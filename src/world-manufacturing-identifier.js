'use strict'

module.exports = letter => {
  switch (letter) {
    case '5YJ':
      return 'Fremont, California'
    case '7SA':
      return 'Austin, Texas'
    case 'LRW':
      return 'Shanghai, China'
    case 'XP7':
      return 'Berlin, Germany'
    case 'SFZ':
      return 'UK (Roadster 1)'
    default:
      return null
  }
}
