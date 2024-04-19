function incrementString (strng) {
  const numberResult = getNumbers(strng)
  let newNumber

  if (numberResult !== null) {
    const numLength = numberResult.length
    newNumber = Number(numberResult) + 1
    newNumber = newNumber.toString().padStart(numLength, '0')
  } else {
    newNumber = 1
  }

  const newString = appendNumber(strng, newNumber)

  return newString
}

function getNumbers (strng) {
  let numbers = strng.match(/\d+$/)
  if (numbers !== null) {
    numbers = numbers.join('')
  }
  return numbers
}

function appendNumber (strng, newNumber) {
  if (strng.match(/\d+$/)) {
    return strng.replace(/\d+$/, newNumber)
  } else {
    return strng + newNumber
  }
}

console.log(incrementString('foo')) // Output: foo1
