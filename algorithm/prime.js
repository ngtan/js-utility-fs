/**
 * isPrime
 * @param  {Number}  n
 * @return {Boolean}
 */
function isPrime(n) {

  for (var i = 2; i < n; i++) {
    if (0 === n % i) {
      return false;
    }
  }

  return n > 1;
}
