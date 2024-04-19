// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

function descendingOrder (n) {
  return Number(n.toString().split('').sort((a, b) => b - a).join(''))
}

console.log(descendingOrder(123456789)) // Replace with your desired number selection
