function incrementString (strng) {
  let numberResult = getNumbers(strng)
  let newNumber
  
  
  
  if(numberResult !== undefined) {
    newNumber = Number(numberResult) + 1
  } else {
    newNumber = 1
  }
  
  
  
  let newString = appendNumber(strng, newNumber)
  
 
  
  return newString
}

function getNumbers (strng) {
var numbers = strng.match(/\d/g)
numbers = numbers.join("")
return numbers
}

function appendNumber (strng, newNumber) {
  strng.replace(/\d+/g, newNumber)
}
