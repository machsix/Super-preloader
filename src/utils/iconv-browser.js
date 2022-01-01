// #if IS_REMOVE
// lite verions of https://github.com/machsix/iconv-browser
//
//
// another option: https://github.com/r12a/r12a.github.io/blob/master/apps/conversion/conversionfunctions.js
// to use rollup, you need to set `ignoreGlobal = true` for commonjs
//                or manually commented out
// #endif

/**
 * Arraybuffer -> Hex
 * @param {ArrayBuffer} buffer The bytes in an ArrayBuffer.
 * @returns {array} hex representation of bytes
 */
function buf2hex(buffer) {
  // buffer is an ArrayBuffer
  return Array.prototype.map.call(new Uint8Array(buffer), (x) => ('00' + x.toString(16)).slice(-2));
}

/**
 * Hex -> Arraybuffer
 *
 * @param {string/array} text hex representation of bytes
 * @return {ArrayBuffer} The bytes in an ArrayBuffer.
 */
function hex2buf(text) {
  let hexString = text;
  if (Array.isArray(text)) {
    hexString = text.join('');
  }
  // remove the leading 0x
  hexString = hexString.replace(/^0x/, '');
  // ensure even number of characters
  if (hexString.length % 2 != 0) {
    throw new Error('WARNING: expecting an even number of characters in the hexString');
  }
  // check for some non-hex characters
  const bad = hexString.match(/[G-Z\s]/i);
  if (bad) {
    throw new Error('WARNING: found non-hex characters', bad);
  }
  // split the string into pairs of octets
  const pairs = hexString.match(/[\dA-F]{2}/gi);
  // convert the octets to integers
  const integers = pairs.map((s) => parseInt(s, 16));
  const array = new Uint8Array(integers);
  return array.buffer;
}

/**
 * Encode a string into utf8 arraybuffer
 * @param {string} text string to encode
 * @returns {ArrayBuffer} encoded string
 */
export function encode(text) {
  return new TextEncoder().encode(text);
}

/**
 *
 * @param {string} text string to encode
 * @returns {array} array of hex value for the corresponding arraybuffer
 */
export function encodeHex(text) {
  return buf2hex(encode(text));
}

export function decode(uint8array, encoding = 'utf-8') {
  return new TextDecoder(encoding).decode(uint8array);
}

export function decodeHex(stringArray, encoding = 'utf-8') {
  return decode(hex2buf(stringArray), encoding);
}

export function encodeURIE(text) {
  const encoding = 'utf-8';
  function isURIcomponent(str) {
    return /^[A-Za-z0-9;,/?:@&=+$-_.!~*'()#]*$/.test(str);
  }
  try {
    return [].map
      .call(text, (x) => {
        if (isURIcomponent(x)) {
          return x;
        } else {
          return `%${encodeHex(x, encoding)
            .map((x) => x.toUpperCase())
            .join('%')}`;
        }
      })
      .join('');
  } catch(e) {
    return text;
  }
}
