const magicKey = {
  function: "\u0000",
  undefined: "\u0001",
  null: "\u0002"
};

function replacer(_key, val) {
  if (val instanceof RegExp) {
    return `${val.toString()}`;
  }
  if (typeof val === "function") {
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

function reviver(_key, val) {
  if (typeof val !== "string") {
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
    return null;
  }
}

export function stringify(obj) {
  return JSON.stringify(obj, replacer);
}

export function parse(obj) {
  return JSON.parse(obj, reviver);
}

export default {
  stringify,
  parse
};
