const S = (letter, year) => {
  switch (year) {
    case 2012:
    case 2013:
      switch (letter) {
        case 'A':
          return '5 door Hatchback LHD RWD'
        case 'B':
          return '5 door Hatchback LHD AWD'
        case 'C':
          return '5 door Hatchback RHD RWD'
        case 'D':
          return '5 door Hatchback RHD AWD'
        default:
          return null
      }
    case 2014:
    case 2015:
      switch (letter) {
        case 'A':
          return 'Hatchback 5 door / LHD'
        case 'B':
          return 'Hatchback 5 door / RHD'
        default:
          return null
      }
    default:
      switch (letter) {
        case 'A':
          return 'Hatchback 5 DR / LHD'
        case 'B':
          return 'Hatchback 5 DR / RHD'
        default:
          return null
      }
  }
}

const X = letter => {
  switch (letter) {
    case 'C':
      return 'Class E MPV 5 DR / LHD'
    case 'D':
      return 'Class E MPV 5 DR /RHD'
    default:
      return null
  }
}

const Y = letter => {
  switch (letter) {
    case 'G':
      return 'Class E MPV 5 DR / LHD'
    case 'H':
      return 'Class E MPV 5 DR / RHD'
    default:
      return null
  }
}

const _3 = letter => {
  switch (letter) {
    case 'E':
      return 'Sedan 4 DR / LHD'
    case 'F':
      return 'Sedan 4 DR / RHD'
    default:
      return null
  }
}

module.exports = { S, 3: _3, X, Y }
