/**
 * shuffle array
 * @param  {Array} arr
 * @return {Array}
 */
function shuffle(arr) {
  var rand, temp;

  if (arr.constructor !== [].constructor) {
    throw new TypeError('Argument must be an array.');
  }


  for (var i = 0, l = arr.length; i < l; i++) {
    rand = Math.floor(Math.random() * i);

    temp = arr[i];
    arr[i] = arr[rand];
    arr[rand] = temp;
  }

  return arr;
}
