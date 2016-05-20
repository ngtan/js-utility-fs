/**
 * replace all search with the given replace value
 * @param  {String} search
 * @param  {String} replace
 * @param  {String} subject
 * @return {String}
 */
function replaceAll(search, replace, subject) {
  return subject.replace(new RegExp(search, 'g'), replace);
}
