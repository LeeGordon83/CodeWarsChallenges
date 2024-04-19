// https://www.codewars.com/kata/5544c7a5cb454edb3c000047

function bouncingBall (h, bounce, window) {
  const cond = h > 0 && bounce > 0 && bounce < 1 && window < h
  if (cond) {
    return h < window ? -1 : 2 + bouncingBall(h * bounce, bounce, window)
  } else {
    return -1
  }
}

// Example usage
const h = 10
const bounce = 0.6
const window = 4
const result = bouncingBall(h, bounce, window)
console.log(result)
