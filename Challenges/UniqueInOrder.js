// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

var uniqueInOrder=function(iterable){
  let strArr = Array.isArray(iterable) ? iterable : iterable.split('');
  let unique = strArr.filter((letter, i) => {
    return strArr[i] != strArr[i+1];
  })
  
  return unique
}
