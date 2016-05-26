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
