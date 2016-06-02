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

/**
 * Binary search only works on sorted arrays
 * @param  {[type]} arr  [description]
 * @param  {[type]} find [description]
 * @return {[type]}      [description]
 */
function binarySearch(arr, find) {
  var left = 0,
      right = arr.length - 1,
      mid;

  while (left <= right) {
    mid =  Math.floor((left + right) / 2);
    if (arr[mid] === find) {
      return mid;
    }
    else if (arr[mid] < find) {
      left = mid + 1;
    }
    else {
      right = mid - 1;
    }
  }

  return -1;
}
