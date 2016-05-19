/**
 * get a random integer between min and max
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 */
function getRandInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
