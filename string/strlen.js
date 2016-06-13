(function(exports) {
  'use strict';

  /**
   * Get string length
   * @param  {String} str
   * @return {Number}
   */
  function strlen(str) {
    return str.constructor === ''.constructor && str.length;
  }

  exports.strlen = strlen;

})(typeof window === 'undefined' ? module.exports : window);
