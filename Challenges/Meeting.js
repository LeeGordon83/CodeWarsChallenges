// https://www.codewars.com/kata/59df2f8f08c6cec835000012

function meeting(s) {
  
  const splitNames = s.toString().split(';')
  
  let brokeDownNames = []
  let finalName = ''
  
  for (i =0; i < splitNames.length; i++) {
    let singlePerson = splitNames[i].toString().toUpperCase().split(':')
    singlePerson = singlePerson[1] + ', ' + singlePerson[0] 
    brokeDownNames.push(singlePerson)
  }
  
  brokeDownNames.sort()
  
  brokeDownNames.forEach(name => {
    finalName = finalName + '(' + name + ')'
  })
  
  return finalName
}
