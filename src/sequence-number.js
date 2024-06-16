const isLetter = input => !/^\d/.test(input)

const getName = input => {
  switch (input) {
    case 'A':
      return 'Alpha Prototype'
    case 'B':
      return 'Beta Prototype'
    case 'F':
      return 'Founder Series'
    case 'P':
      return 'Production'
    case 'R':
      return 'Release Candidate'
    case 'S':
      return 'Signature Series'
    default:
      return null
  }
}

module.exports = input => {
  let name = null

  if (isLetter(input[0])) {
    name = getName(input[0])
    input = input.slice(1)
  }

  return name === null && input === '' ? null : { name, value: Number(input) }
}
