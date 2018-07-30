/*The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

Task :

Given a year, return the century it is in.

Input , Output Examples ::

centuryFromYear(1705)  returns (18)
centuryFromYear(1900)  returns (19)
centuryFromYear(1601)  returns (17)
centuryFromYear(2000)  returns (20)
Hope you enjoy it .. Awaiting for Best Practice Codes

Enjoy Learning !!!

*/

var century = function (year) {
  var x = year / 100;
  if (Math.floor(x) === x) {
    return x;
  } else {
    return Math.floor(x) + 1;
  }
};