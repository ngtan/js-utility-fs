/**
 * Check for leap year
 * @param  {Number}  year
 * @return {Boolean}
 */
function isLeapYear(year) {
  if (!('number' === typeof year && !isNaN(year))) {
    return false;
  }

  return ((0 === year % 4) && (0 !== year % 100)) || (0 === year % 400);
}

/**
 * Get date in February
 * @param  {Number} year
 * @return {Number}
 */
function getDateInFeb(year) {
  return isLeapYear(year) ? 29 : 28;
}
