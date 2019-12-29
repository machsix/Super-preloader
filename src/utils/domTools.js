/**
 * Create a dom element
 * @param {string} type element type
 * @param {object} conf configuration of the dom, could be 'attr', 'innnerHTML', 'children', 'eventListner'
 * @param {object} dom dom to attach
 * @returns {object} dom element
 */
function create(type, conf, dom = document) {
  const e = dom.createElement(type);

  if (conf.hasOwnProperty("attr")) {
    setAttr(e, conf.attr);
  }

  if (conf.hasOwnProperty("innerHTML")) {
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
 * Set multiple attributes of a dom element
 * @param {object} el dom element
 * @param {object} attr dom attributes
 * @returns {null} null
 */
function setAttr(el, attr) {
  for (const [key, val] of Object.entries(attr)) {
    el.setAttribute(key, val);
  }
}

export default {create, setAttr};
