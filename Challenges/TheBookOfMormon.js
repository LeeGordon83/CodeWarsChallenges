// https://www.codewars.com/kata/58373ba351e3b615de0001c3

function Mormons (startingNumber, reach, target) {
  let missions = 0

  while (target > startingNumber) {
    startingNumber = (startingNumber * reach) + startingNumber
    missions++
  }

  return missions
}
console.log(Mormons(1, 3, 9))
