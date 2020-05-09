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

export function wildcardToRegExpStr(urlstr) {
  if (urlstr.source) return urlstr.source;
  const reg = urlstr.replace(/[()\[\]{}|+.,^$?\\]/g, '\\$&').replace(/\*+/g, function (str) {
    return str === '*' ? '.*' : '[^/]*';
  });
  return '^' + reg + '$';
}
