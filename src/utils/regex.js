/**
 * Converts an input object to a regular expression.
 * @param {RegExp|Array|string} obj - The input object to convert. Can be a RegExp, an array with pattern and flags, or a string.
 * @returns {RegExp} - The resulting regular expression.
 */
export function toRE(obj) {
  if (obj instanceof RegExp) {
    return obj;
  } else if (obj instanceof Array) {
    return new RegExp(obj[0], obj[1]);
  } else {
    if (obj.search(/^wildc;/i) === 0) {
      obj = wildcardToRegExpStr(obj.slice(6));
    }
    return new RegExp(obj);
  }
}

/**
 * Converts a wildcard string to a regular expression string.
 * @param {string} urlstr - The input string containing wildcards.
 * @returns {string} - The resulting regular expression string.
 */
export function wildcardToRegExpStr(urlstr) {
  if (urlstr.source) return urlstr.source;
  const reg = urlstr.replace(/[()[\]{}|+.,^$?\\]/g, '\\$&').replace(/\*+/g, function (str) {
    return str === '*' ? '.*' : '[^/]*';
  });
  return '^' + reg + '$';
}
