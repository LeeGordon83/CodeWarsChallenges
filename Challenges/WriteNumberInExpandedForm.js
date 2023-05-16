// https://www.codewars.com/kata/5842df8ccbd22792a4000245

function expandedForm (num) {
  let numBreakdown = ''
  const splitNum = num.toString().split('')
  for (let i = 0; i < splitNum.length; i++) {
    if (Number(splitNum[i]) !== 0) {
      const numString = addZeros(splitNum[i], splitNum.length - (i + 1))
      if (i === 0) {
        numBreakdown = numString
      } else {
        numBreakdown = numBreakdown + ' + ' + numString
      }
    }
  }
  return numBreakdown
}

function addZeros (startNum, appendNum) {
  let numString = startNum
  for (let i = 0; i < appendNum; i++) {
    numString = numString + '0'
  }
  console.log(numString)
  return numString
}
