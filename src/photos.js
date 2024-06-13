'use strict'

const BASE_URL = 'https://teslahunt.github.io/tesla-vin/images'

const S = year => {
  switch (year) {
    case 2012:
    case 2013:
    case 2014:
    case 2015:
      return [`${BASE_URL}/S/1.jpeg`, `${BASE_URL}/S/2.jpeg`, `${BASE_URL}/S/3.jpeg`]
    case 2016:
    case 2017:
    case 2018:
    case 2019:
    case 2020:
      return [
        `${BASE_URL}/S/1.jpeg`,
        `${BASE_URL}/S/2.jpeg`,
        `${BASE_URL}/S/3.jpeg`,
        `${BASE_URL}/S/4.jpeg`
      ]
    default:
      return [`${BASE_URL}/S/5.jpeg`, `${BASE_URL}/S/6.jpeg`, `${BASE_URL}/S/7.jpeg`]
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
      return [`${BASE_URL}/X/1.jpeg`, `${BASE_URL}/X/2.jpeg`, `${BASE_URL}/X/3.jpeg`]
    default:
      return [`${BASE_URL}/X/4.jpeg`, `${BASE_URL}/X/5.jpeg`, `${BASE_URL}/X/6.jpeg`]
  }
}

const Y = () => {
  return [
    `${BASE_URL}/Y/1.jpeg`,
    `${BASE_URL}/Y/2.jpeg`,
    `${BASE_URL}/Y/3.jpeg`,
    `${BASE_URL}/Y/4.jpeg`,
    `${BASE_URL}/Y/5.jpeg`
  ]
}

const _3 = () => {
  return [
    `${BASE_URL}/3/1.jpeg`,
    `${BASE_URL}/3/2.jpeg`,
    `${BASE_URL}/3/3.jpeg`,
    `${BASE_URL}/3/4.jpeg`,
    `${BASE_URL}/3/5.jpeg`
  ]
}

module.exports = { S, 3: _3, X, Y }
