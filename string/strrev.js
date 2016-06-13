(function(exports) {
  'use strict';

  /**
   * Reverse a string
   * @param  {String} str
   * @return {String}
   */
  function strrev(str) {
    return str.constructor === ''.constructor && str.split('').reverse().join('');
  }

  exports.strrev = strrev;

})(typeof window === 'undefined' ? module.exports : window);
