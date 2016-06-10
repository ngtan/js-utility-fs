/**
 * fibonacci
 * @param  {Number} n
 * @return {Number}
 */
function fibonacci(n) {
  var fn = 0,
      sn = 1,
      tmp;

  while (n > 0) {
    tmp = fn;
    fn = sn;
    sn += tmp;
    --n;
  }

  return fn;
}
