const magicKey = {
  function: '\u0000',
  undefined: '\u0001',
  null: '\u0002'
};

/**
 * Custom replacer function for JSON.stringify.
 * Converts special types like RegExp, functions, null, and undefined into string representations.
 * @param {string} _key - The key of the property being stringified.
 * @param {*} val - The value of the property being stringified.
 * @returns {*} The transformed value.
 */
function replacer(_key, val) {
  if (val instanceof RegExp) {
    return `${val.toString()}`;
  }
  if (typeof val === 'function') {
    return `${magicKey.function}${val.toString()}`;
  }
  if (val === null) {
    return `${magicKey.null}`;
  }
  if (val === undefined) {
    return `${magicKey.undefined}`;
  }
  return val;
}

/**
 * Custom reviver function for JSON.parse.
 * Restores special types like RegExp, functions, null, and undefined from string representations.
 * @param {string} _key - The key of the property being parsed.
 * @param {*} val - The value of the property being parsed.
 * @returns {*} The restored value.
 */
function reviver(_key, val) {
  if (typeof val !== 'string') {
    return val;
  }
  if (val.length === 0) return val;
  const mk = val.slice(0, 1);
  try {
    switch (mk) {
      case magicKey.undefined:
        return undefined;
      case magicKey.null:
        return null;
      case magicKey.function:
        return new Function(`return ${val.slice(1)}`)();
      default:
        return val;
    }
  } catch (error) {
    // CSP rule may block new Function
    console.error('Error parsing function:', error);
    return null;
  }
}

/**
 * Converts an object into a JSON string with custom handling for special types.
 * @param {*} obj - The object to stringify.
 * @returns {string} The JSON string representation of the object.
 */
export function stringify(obj) {
  return JSON.stringify(obj, replacer);
}

/**
 * Parses a JSON string with custom handling for special types.
 * @param {string} obj - The JSON string to parse.
 * @returns {*} The parsed object.
 */
export function parse(obj) {
  return JSON.parse(obj, reviver);
}

export default {
  stringify,
  parse
};
