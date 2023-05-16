// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

function getMiddle (s) {
  const startPoint = s.length / 2
  if (s.length % 2 === 0) {
    return s.substring(startPoint - 1, startPoint + 1)
  } else {
    return s.substring(startPoint, startPoint + 1)
  }
}
