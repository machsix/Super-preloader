import logger from './logger.js';
/**
 * Converts a Unicode code point (in hexadecimal format) to its corresponding emoji character.
 * @param {string} unifiedValue - The Unicode code point in hexadecimal format.
 * @returns {string} The emoji character or an empty string if the browser does not support `String.fromCodePoint`.
 */
export default function emoji(unifiedValue) {
  if (String.fromCodePoint) {
    var emoji = parseInt(unifiedValue, 16);
    return String.fromCodePoint(emoji);
  } else {
    logger.error('Shame on your browser!');
    return '';
  }
}
