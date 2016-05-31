/**
 * Selection sort
 * @param  {Array} arr
 * @return {Array}
 */
function selectionSort(arr) {
  var i, j,
      il, jl,
      minIndex,
      tmp;

  for (i = 0, il = arr.length - 1; i < il; i++) {
    minIndex = i;

    for (j = i + 1, jl = arr.length; j < jl; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      tmp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = tmp;
    }
  }

  return arr;
}

/**
 * Bubble sort
 * @param  {Array} arr
 * @return {Array}
 */
function bubbleSort(arr) {
  var i, j,
      il, jl,
      l = arr.length,
      tmp;

  for (i = 0, il = l; i < il; i++) {
    for (j = 0, jl = l - 1; j < jl; j++) {
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = tmp;
      }
    }
  }

  return arr;
}
