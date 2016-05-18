/**
 * Check for iPhone
 * @return {Boolean}
 */
function isIPhone() {
  return /iPhone/i.test(navigator.userAgent);
}

/**
 * Check for iPad
 * @return {Boolean}
 */
function isIPad() {
  return /iPad/i.test(navigator.userAgent);
}

/**
 * Check for IPod
 * @return {Boolean}
 */
function isIPod() {
  return /iPod/i.test(navigator.userAgent);
}

/**
 * Check for IOS
 * @return {Boolean}
 */
function isIOS() {
  return /iPad|iPhone|iPod/i.test(navigator.userAgent);
}

/**
 * Check for Android
 * @return {Boolean}
 */
function isAndroid() {
  return /Android/i.test(navigator.userAgent);
}
