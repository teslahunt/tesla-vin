# tesla-vin

![Last version](https://img.shields.io/github/tag/teslahunt/tesla-vin.svg?style=flat-square)
[![Coverage Status](https://img.shields.io/coveralls/teslahunt/tesla-vin.svg?style=flat-square)](https://coveralls.io/github/teslahunt/tesla-vin)
[![NPM Status](https://img.shields.io/npm/dm/tesla-vin.svg?style=flat-square)](https://www.npmjs.org/package/tesla-vin)

> Tesla Vehicle Identification Number (VIN) implemented following Model S/3/X/Y service manuals.

## Install

```bash
$ npm install tesla-vin --save
```

## Usage

```js
const teslaVIN = require('tesla-vin')

const vinDecoded = teslaVIN('5YJ3F7EA2LF656311')

console.log(vinDecoded)
// {
//   bateryType: 'Nickel Manganese Cobalt (NMC)',
//   bodyType: 'Sedan 4 DR / RHD',
//   model: 'Tesla Model 3',
//   motor: 'Single Motor Standard (3DU 800A)',
//   photos: [
//     'https://cdn.jsdelivr.net/gh/teslahunt/tesla-vin@master/images/3/1.jpeg',
//     'https://cdn.jsdelivr.net/gh/teslahunt/tesla-vin@master/images/3/2.jpeg',
//     'https://cdn.jsdelivr.net/gh/teslahunt/tesla-vin@master/images/3/3.jpeg',
//     'https://cdn.jsdelivr.net/gh/teslahunt/tesla-vin@master/images/3/4.jpeg',
//     'https://cdn.jsdelivr.net/gh/teslahunt/tesla-vin@master/images/3/5.jpeg',
//   ],
//   plantOfManufacture: 'Tesla Fremont, California (USA)',
//   restraintSystems: 'Type 2 Manual seatbelts (FR, SR*3) with front Airbags, side Inflatable restraints',
//   sequenceNumber: 656311,
//   worldManufacturingIdentifier: 'Fremont, California',
//   year: 2020,
// }
```
## License

**tesla-vin** © [Tesla Hunt](https://teslahunt.io), released under the [MIT](https://github.com/teslahunt/tesla-vin/blob/master/LICENSE.md) License.<br>
Authored and maintained by [Tesla Hunt](https://teslahunt.io) with help from [contributors](https://github.com/teslahunt/tesla-vin/contributors).

> [teslahunt.io](https://teslahunt.io) · GitHub [Tesla Hunt](https://github.com/teslahunt) · Twitter [@teslahunt](https://twitter.com/teslahunt)
