const PREFIX = 'https://teslahunt.github.io/vin/images'

const S = year => {
  switch (year) {
    case 2012:
    case 2013:
    case 2014:
    case 2015:
      return [`${PREFIX}/S/1.jpeg`, `${PREFIX}/S/2.jpeg`, `${PREFIX}/S/3.jpeg`]
    case 2016:
    case 2017:
    case 2018:
    case 2019:
    case 2020:
      return [
        `${PREFIX}/S/1.jpeg`,
        `${PREFIX}/S/2.jpeg`,
        `${PREFIX}/S/3.jpeg`,
        `${PREFIX}/S/4.jpeg`
      ]
    default:
      return [`${PREFIX}/S/5.jpeg`, `${PREFIX}/S/6.jpeg`, `${PREFIX}/S/7.jpeg`]
  }
}

const X = year => {
  switch (year) {
    case 2015:
    case 2016:
    case 2017:
    case 2018:
    case 2019:
    case 2020:
      return [`${PREFIX}/X/1.jpeg`, `${PREFIX}/X/2.jpeg`, `${PREFIX}/X/3.jpeg`]
    default:
      return [`${PREFIX}/X/4.jpeg`, `${PREFIX}/X/5.jpeg`, `${PREFIX}/X/6.jpeg`]
  }
}

const Y = () => {
  return [
    `${PREFIX}/Y/1.jpeg`,
    `${PREFIX}/Y/2.jpeg`,
    `${PREFIX}/Y/3.jpeg`,
    `${PREFIX}/Y/4.jpeg`,
    `${PREFIX}/Y/5.jpeg`
  ]
}

const _3 = () => {
  return [
    `${PREFIX}/3/1.jpeg`,
    `${PREFIX}/3/2.jpeg`,
    `${PREFIX}/3/3.jpeg`,
    `${PREFIX}/3/4.jpeg`,
    `${PREFIX}/3/5.jpeg`
  ]
}

module.exports = { S, 3: _3, X, Y }
