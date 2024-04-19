// https://www.codewars.com/kata/5266876b8f4bf2da9b000362

function likes (names) {
  let returnString = ''

  if (names.length > 0) {
    if (names.length === 1) {
      returnString = names[0] + ' likes this'
    } else if (names.length === 2) {
      returnString = names[0] + ' and ' + names[1] + ' like this'
    } else if (names.length === 3) {
      returnString = names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'
    } else {
      returnString = names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this'
    }
    return returnString
  } else { return 'no one likes this' }
}

console.log(likes(['Peter'])) // Add name here
