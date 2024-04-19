// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

function isPangram (string) {
  const regex = /([a-z])(?!.*\1)/gi
  return (string.match(regex)).length === 26
}

console.log(isPangram('The quick brown fox jumps over the lazy dog')) // Replace with your desired string
