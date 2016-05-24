/**
 * replace all search with the given replace value
 * @param  {String} search
 * @param  {String} replace
 * @param  {String} subject
 * @return {String}
 */
function replaceAll(search, replace, subject) {
  return subject.constructor === ''.constructor &&
         subject.replace(new RegExp(search, 'g'), replace);
}

/**
 * count words in string
 * @param  {String} str
 * @return {Number}
 */
function countWords(str) {
  return str.constructor === ''.constructor &&
         str.replace(/(^\s*)|(\s*$)/gi, '').replace(/\s+/gi, ' ').split(' ').length;
}

/**
 * capitalize the first character of a string
 * @param  {String} str
 * @return {String}
 */
function ucfirst(str) {
  return str.constructor === ''.constructor &&
         str.trim() &&
         str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Uppercase the first character of each word in a string
 * @param  {String} str
 * @return {String}
 */
function ucwords(str) {
  return str.constructor === ''.constructor &&
         str.trim() &&
         str.toLowerCase().replace(/\b[a-z]/g, function(char) {
           return char.toUpperCase();
         });
}

/**
 * Get string length
 * @param  {String} str
 * @return {Number}
 */
function strlen(str) {
  return str.constructor === ''.constructor && str.length;
}

/**
 * Reverse a string
 * @param  {String} str
 * @return {String}
 */
function strrev(str) {
  return str.constructor === ''.constructor && str.split('').reverse().join('');
}
