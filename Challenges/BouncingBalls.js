// https://www.codewars.com/kata/5544c7a5cb454edb3c000047

function bouncingBall (h, bounce, window) {
  const cond = h > 0 && (bounce > 0 && bounce < 1) && window < h
  if (cond) {
    return h < window ? -1 : 2 + bouncingBall((h * bounce), bounce, window)
  } else {
    return -1
  }
}
