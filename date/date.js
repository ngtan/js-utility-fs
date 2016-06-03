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

/**
 * Get month name
 * @param  {Number} month
 * @return {String}
 */
function getMonthName(month) {
  return 'number' === typeof month && !isNaN(month) && [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ][month];
}

/**
 * Get week name
 * @param  {Number} day
 * @return {String}
 */
function getNameInWeek(day) {
  return 'number' === typeof day && !isNaN(day) && [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ][day];
}

/**
 * Get days in month
 * @param  {Number} year
 * @param  {Number} month
 * @return {Number}
 */
function getDaysInMonth(year, month) {
  if (!('number' === typeof month && !isNaN(month))) {
    return -1;
  }

  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    case 2:
      return getDateInFeb(year);
    default:
      return -1;
  }
}
