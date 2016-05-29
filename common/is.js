/**
 * Check for string
 * @param  {String}  str
 * @return {Boolean}
 */
function isString(str) {
  return str.constructor === ''.constructor;
}

/**
 * Check for number
 * @param  {Number}  num
 * @return {Boolean}
 */
function isNumber(num) {
  return 'number' === typeof num && !isNaN(num);
}

/**
 * Check for array
 * @param  {[type]}  arr
 * @return {Boolean}
 */
function isArray(arr) {
  return arr.constructor === [].constructor;
}

/**
 * Check for object
 * @param  {[type]}  obj
 * @return {Boolean}
 */
function isObject(obj) {
  return obj.constructor === {}.constructor;
}

/**
 * Check for empty object
 * @param  {Object}  obj
 * @return {Boolean}
 */
function isEmptyObject(obj) {
  var key;

  if (obj.constructor !== {}.constructor) {
    return;
  }

  for (key in obj) {
    return false;
  }

  return true;
}

/**
 * Check for function
 * @param  {Function} fn
 * @return {Boolean}
 */
function isFunction(fn) {
  return fn.constructor === Function.constructor;
}

/**
 * Check for date
 * @param  {Date}  date
 * @return {Boolean}
 */
function isDate(date) {
  return date instanceof Date || '[object Date]' === Object.prototype.toString.call(date);
}

/**
 * Check for even number
 * @param  {Number}  num
 * @return {Boolean} [description]
 */
function isEven(num) {
  return 'number' === typeof num && !isNaN(num) && !(num & 1);
}

/**
 * Check for odd num
 * @param  {Number}  num
 * @return {Boolean}
 */
function isOdd(num) {
  return 'number' === typeof num && !isNaN(num) && (num & 1);
}
