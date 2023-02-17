// https://www.codewars.com/kata/517abf86da9663f1d2000003

function toCamelCase(str){
 

  let strArray = str.split(/[-_]+/)
  let newString = strArray[0]
  
  
  for (var i = 1; i < strArray.length; i++) {
  let word = strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1)
  newString = newString + word
}


  console.log(newString)
  return newString
}
