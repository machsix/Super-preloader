/**
 * Set multiple attributes of a dom element
 * @param {object} el dom element
 * @param {object} attr dom attributes
 * @returns {null} null
 */
export function setMultipleAttributes(el, attr) {
  for (const [key, val] of Object.entries(attr)) {
    el.setAttribute(key, val);
  }
}

/**
 * Create a dom element
 * @param {string} type element type
 * @param {object} conf configuration of the dom, could be 'attr', 'innnerHTML', 'children', 'eventListner'
 * @param {Document} doc dom to attach
 * @returns {HTMLElement} dom element
 */
export function createDOM(type, conf, doc = document) {
  const e = doc.createElement(type);

  if (conf.hasOwnProperty('attr')) {
    setMultipleAttributes(e, conf.attr);
  }

  if (conf.hasOwnProperty('innerHTML')) {
    e.innerHTML = conf.innerHTML;
  }

  if (Array.isArray(conf.children)) {
    if (conf.children.length > 0) {
      conf.children.forEach((c) => {
        e.appendChild(c);
      });
    }
  }

  if (Array.isArray(conf.eventListener)) {
    if (conf.eventListener.length > 0) {
      conf.eventListener.forEach((x) => {
        e.addEventListener(x.type, x.listener, x.useCapture || false);
      });
    }
  }
  return e;
}

/**
 * Get attributes for settings
 * @param {HTMLElement} obj dom element
 * @returns {string|boolean|number} dom element main property
 */
export function getProperty(obj) {
  if (obj.nodeName === 'INPUT') {
    switch (obj.type) {
      case 'checkbox':
        return obj.checked;
      case 'number': {
        const min = obj.hasAttribute('min') ? parseInt(obj.min) : undefined;
        const max = obj.hasAttribute('max') ? parseInt(obj.max) : undefined;
        if (min >= obj.valueAsNumber) return min;
        if (max < obj.valueAsNumber) return max;
        return obj.valueAsNumber;
      }
      default:
        return obj.value;
    }
  } else if (obj.nodeName === 'SELECT') {
    return obj.selectedOptions[0].value;
  } else if (obj.nodeName === 'A') {
    return obj.href;
  } else {
    return obj.innerHTML;
  }
}

/**
 * Set attributes for settings
 * @param {object} obj dom element
 * @param {object} value value set to dom element
 * @returns {undefined}
 */
export function setProperty(obj, value) {
  if (obj.nodeName === 'INPUT') {
    switch (obj.type) {
      case 'checkbox':
        obj.checked = !!value;
        break;
      case 'number': {
        if (obj.hasAttribute('min')) {
          if (value < obj.min) {
            value = obj.min;
          }
        }
        if (obj.hasAttribute('max')) {
          if (value > obj.max) {
            value = obj.max;
          }
        }
        obj.value = value;
        break;
      }
      default:
        obj.value = value;
    }
  } else if (obj.nodeName === 'SELECT') {
    for (let i = 0; i < obj.options.length; i++) {
      if (obj.options[i].value === value) {
        obj.selectedIndex = i;
        break;
      }
    }
  } else if (obj.nodeName === 'A') {
    obj.href = value;
  } else {
    obj.innerHTML = value;
  }
}
