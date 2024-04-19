// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

const uniqueInOrder = function (iterable) {
  const strArr = Array.isArray(iterable) ? iterable : iterable.split('')
  const unique = strArr.filter((letter, i) => {
    return strArr[i] !== strArr[i + 1]
  })

  return unique
}

console.log(uniqueInOrder('AAAABBBCCDAABBB')) // ['A', 'B', 'C', 'D', 'A', 'B']
