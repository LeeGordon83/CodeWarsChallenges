// https://www.codewars.com/kata/58373ba351e3b615de0001c3

function Mormons (startingNumber, reach, target) {
  let missions = 0

  if (target > startingNumber) {
    for (let z = 0; startingNumber < target; missions++) {
      startingNumber = (startingNumber * reach) + startingNumber
    }

    return missions
  } else { return missions }
}
