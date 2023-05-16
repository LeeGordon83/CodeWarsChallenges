// https://www.codewars.com/kata/514b92a657cdc65150000006

function solution (number) {
  if (number > -1) {
    const numArray = Array.from(Array(number).keys())
    const returnArray = []
    let finalValue = 0

    // check if each number in array divisible by 3 or 5
    numArray.forEach(digit => {
      if (digit % 3 === 0 || digit % 5 === 0) {
        returnArray.push(digit)
      }
    })

    finalValue = sumArray(returnArray)

    // sum all numbers found to get final return value
    function sumArray (returnArray) {
      finalValue = returnArray.reduce(function (a, b) { return a + b }, 0)
      return finalValue
    }

    return finalValue
  } else return 0
}
