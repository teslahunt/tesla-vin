'use strict'

module.exports = letter => {
  switch (letter) {
    case 'F':
      return 'Lithium Iron Phosphate Battery (LFP)'
    default:
      return 'Nickel Manganese Cobalt (NMC)'
  }
}
