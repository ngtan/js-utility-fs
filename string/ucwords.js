(function(exports) {
  'use strict';

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

  exports.ucwords = ucwords;

})(typeof window === 'undefined' ? module.exports : window);
