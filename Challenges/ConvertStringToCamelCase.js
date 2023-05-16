// https://www.codewars.com/kata/517abf86da9663f1d2000003

function toCamelCase (str) {
  const strArray = str.split(/[-_]+/)
  let newString = strArray[0]

  for (let i = 1; i < strArray.length; i++) {
    const word = strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1)
    newString = newString + word
  }

  console.log(newString)
  return newString
}
