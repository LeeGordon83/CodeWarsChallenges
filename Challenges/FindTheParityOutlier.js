// https://www.codewars.com/kata/5526fc09a1bbd946250002dc

function findOutlier (integers) {
  const even = []
  const odd = []

  integers.forEach(integer => {
    if (isEven(integer)) {
      even.push(integer)
    } else {
      odd.push(integer)
    }
  })
  
  if(even.length === 1) {
    return even[0]
  } else {
    return odd[0]
  }
}

function isEven (n) {
  return n % 2 === 0
}
