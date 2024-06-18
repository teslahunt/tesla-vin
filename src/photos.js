'use strict'

const BASE_URL = 'https://teslahunt.github.io/tesla-vin/images'

const S = [`${BASE_URL}/S/1.jpeg`, `${BASE_URL}/S/2.jpeg`, `${BASE_URL}/S/3.jpeg`]

const X = [`${BASE_URL}/X/1.jpeg`, `${BASE_URL}/X/2.jpeg`, `${BASE_URL}/X/3.jpeg`]

const Y = [
  `${BASE_URL}/Y/1.jpeg`,
  `${BASE_URL}/Y/2.jpeg`,
  `${BASE_URL}/Y/3.jpeg`,
  `${BASE_URL}/Y/4.jpeg`,
  `${BASE_URL}/Y/5.jpeg`
]

const _3 = [
  `${BASE_URL}/3/1.jpeg`,
  `${BASE_URL}/3/2.jpeg`,
  `${BASE_URL}/3/3.jpeg`,
  `${BASE_URL}/3/4.jpeg`,
  `${BASE_URL}/3/5.jpeg`
]

module.exports = { S, 3: _3, X, Y }
