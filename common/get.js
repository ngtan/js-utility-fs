/**
 * get properties length of object
 * @param  {Object} obj
 * @return {Number} len
 */
function getPropsLength(obj) {
  var len = 0,
      name,
      fnConstructor = Function.constructor;

  if ({}.constructor !== obj.constructor) {
    throw new TypeError('Argument must be an object.');
  }

  for (name in obj) {
    if (obj.hasOwnProperty(name) && name.constructor !== fnConstructor) {
      len++;
    }
  }

  return len;
}


/**
 * get methods length of object
 * @param  {Object} obj
 * @return {Number} len
 */
function getMethodsLength(obj) {
  var len = 0,
      name,
      fnConstructor = Function.constructor;

  if ({}.constructor !== obj.constructor) {
    throw new TypeError('Argument must be an object.');
  }

  for (name in obj) {
    if (obj.hasOwnProperty(name) && name.constructor === fnConstructor) {
      len++;
    }
  }

  return len;
}
