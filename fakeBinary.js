/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
*/

var fakeBin = function (x) {
  var result = [];
  for (var i = 0; i < x.length; i++) {
    if (x[i] < 5) {
      result.push('0');
    } else {
      result.push('1');
    }
  }
  return result.join('');
};