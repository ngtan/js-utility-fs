(function(exports) {
  'use strict';

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

  exports.ucfirst = ucfirst;

})(typeof window === 'undefined' ? module.exports : window);
