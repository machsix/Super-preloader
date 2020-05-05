import {TextDecoder, TextEncoder} from "@sinonjs/text-encoding";

// #if IS_REMOVE
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
  return Array.prototype.map.call(new Uint8Array(buffer), (x) => ("00" + x.toString(16)).slice(-2));
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
    hexString = text.join("");
  }
  // remove the leading 0x
  hexString = hexString.replace(/^0x/, "");
  // ensure even number of characters
  if (hexString.length % 2 != 0) {
    throw new Error("WARNING: expecting an even number of characters in the hexString");
  }
  // check for some non-hex characters
  const bad = hexString.match(/[G-Z\s]/i);
  if (bad) {
    throw new Error("WARNING: found non-hex characters", bad);
  }
  // split the string into pairs of octets
  const pairs = hexString.match(/[\dA-F]{2}/gi);
  // convert the octets to integers
  const integers = pairs.map((s) => parseInt(s, 16));
  const array = new Uint8Array(integers);
  return array.buffer;
}

/**
 * Encode a string into arraybuffer
 * @param {string} text string to encode
 * @param {string} encoding charset
 * @returns {ArrayBuffer} encoded string
 */
export function encode(text, encoding = "utf-8") {
  let buffer = null;
  if (["utf8", "utf-8", "unicode-1-1-utf-8"].includes(encoding)) {
    buffer = new TextEncoder().encode(text);
  } else {
    try {
      buffer = new TextEncoder(encoding, {NONSTANDARD_allowLegacyEncoding: true}).encode(text);
    } catch (error) {
      console.log(`Fail to encode ${text} into ${encoding}`);
      buffer = new TextEncoder().encode(text);
    }
  }
  return buffer;
}

/**
 *
 * @param {string} text string to encode
 * @param {string} encoding charset
 * @returns {array} array of hex value for the corresponding arraybuffer
 */
export function encodeHex(text, encoding = "utf-8") {
  return buf2hex(encode(text, encoding));
}

export function decode(uint8array, encoding = "utf-8") {
  return new TextDecoder(encoding).decode(uint8array);
}

export function decodeHex(stringArray, encoding = "utf-8") {
  return decode(hex2buf(stringArray), encoding);
}

export function encodeURIE(text, encoding = "utf-8") {
  if (encoding === "utf-8") {
    return encodeURIE(text);
  }
  function isURIcomponent(str) {
    return /^[A-Za-z0-9;,/?:@&=+$-_.!~*'()#]*$/.test(str);
  }
  return [].map
    .call(text, (x) => {
      if (isURIcomponent(x)) {
        return x;
      } else {
        return `%${encodeHex(x, encoding)
          .map((x) => x.toUpperCase())
          .join("%")}`;
      }
    })
    .join("");
}
