/**
 * get a random integer between min and max
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 */
function getRandInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Factorial
 * @param  {Number} num
 * @return {Number}
 */
function factorial(num) {
  if (0 > num) {
    return -1;
  }
  else if (0 === num) {
    return 1;
  }

  return num * factorial(num - 1);
}

/**
 * sum
 * @param  {Number} arguments
 * @return {Number}
 */
function sum() {
  var res = 0;

  for (var i = 0, l = arguments.length; i < l; i++) {
    if ('number' === typeof arguments[i] && !isNaN(arguments[i])) {
      res += arguments[i];
    }
  }

  return res;
}
