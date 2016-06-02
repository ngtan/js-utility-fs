/**
 * extend array
 * @param  {Array} a
 * @param  {Array} b
 * @return {Array}
 */
function extend(a, b) {
  var prop;

  if (!a) {
    a = {};
  }

  for (prop in b) {
    a[prop] = b[prop];
  }

  return a;
}
