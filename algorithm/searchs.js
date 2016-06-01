/**
 * Linear search
 * @param  {Array} arr
 * @param  {Number} find
 * @return {Number} position
 */
function linearSearch(arr, find) {
  for (var i = 0, l = arr.length; i < l; i++) {
    if (arr[i] === find) {
      return i;
    }
  }

  return -1;
}
