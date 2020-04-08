import _ from "lodash";
import logger from "utils/logger";

/**
 * Select a single element by css selector
 * @param {string} css css of dom
 * @param {object} contextNode dom contextNode
 * @returns {object} an element
 */
export function getElementByCSS(css, contextNode) {
  return (contextNode || document).querySelector(css);
}

/**
 * Select multiple elements by css selector
 * @param {string} css css of dom
 * @param {object} contextNode dom contextNode
 * @returns {object} multiple elements
 */
export function getAllElementsByCSS(css, contextNode) {
  return (contextNode || document).querySelectorAll(css);
}

/**
 * Select an element by xpath selector
 * @param {string} xpath a string representing the XPath to be evaluated
 * @param {object} contextNode contextNode specifies the context node for the query (see the XPath specification). It's common to pass document as the context node.
 * @param {object} doc the document to select from
 * @returns {object} a dom node
 */
export function getElementByXpath(xpath, contextNode, doc) {
  doc = doc || document;
  contextNode = contextNode || doc;
  try {
    const result = doc.evaluate(xpath, contextNode, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    return result.singleNodeValue;
  } catch (err) {
    logger.error(`Invalid xpath: ${xpath}`);
    return undefined;
  }
}

/**
 * Select multiple elements by xpath selector
 * @param {string} xpath a string representing the XPath to be evaluated
 * @param {object} contextNode contextNode specifies the context node for the query (see the XPath specification). It's common to pass document as the context node.
 * @param {object} doc the document to select from
 * @returns {object} a dom node
 */
export function getAllElementsByXpath(xpath, contextNode, doc) {
  doc = doc || document;
  contextNode = contextNode || doc;
  return doc.evaluate(xpath, contextNode, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
}

// 获取多个元素
export function getAllElements(selector, contextNode, doc, win, _cplink) {
  const ret = [];
  if (!selector) return ret;
  var Eles;
  doc = doc || document;
  win = win || window;
  _cplink = _cplink || undefined;
  contextNode = contextNode || doc;
  if (typeof selector === "string") {
    if (selector.search(/^css;/i) === 0) {
      Eles = getAllElementsByCSS(selector.slice(4), contextNode);
    } else {
      Eles = getAllElementsByXpath(selector, contextNode, doc);
    }
  } else {
    Eles = selector(doc, win, _cplink);
    if (!Eles) return ret;
    if (Eles.nodeType) {
      // 单个元素.
      ret[0] = Eles;
      return ret;
    }
  }
  function makeArray(x) {
    var ret = [];
    var i, ii;
    var x_x;
    if (x.pop) {
      // 普通的 array
      for (i = 0, ii = x.length; i < ii; i++) {
        x_x = x[i];
        if (x_x) {
          if (x_x.nodeType) {
            // 普通类型,直接放进去.
            ret.push(x_x);
          } else {
            ret = ret.concat(makeArray(x_x)); // 嵌套的.
          }
        }
      }
      return _.uniq(ret);
    } else if (x.item) {
      // nodelist or HTMLcollection
      i = x.length;
      while (i) {
        ret[--i] = x[i];
      }
      /*
                for(i=0,ii=x.length;i<ii;i++){
                    ret.push(x[i]);
                };
                */
      return ret;
    } else if (x.iterateNext) {
      // XPathResult
      i = x.snapshotLength;
      while (i) {
        ret[--i] = x.snapshotItem(i);
      }
      /*
                for(i=0,ii=x.snapshotLength;i<ii;i++){
                    ret.push(x.snapshotItem(i));
                };
                */
      return ret;
    }
  }

  return makeArray(Eles);
}

// 获取最后一个元素.
export function getLastElement(selector, _cplink, contextNode, doc, win) {
  const eles = getAllElements(selector, contextNode, doc, win, _cplink);
  const l = eles.length;
  if (l > 0) {
    return eles[l - 1];
  }
}

/**
 *
 * @param {object} obj dom element
 * @returns {string/boolean} dom element main property
 */
export function getProperty(obj) {
  if (obj.nodeName === "INPUT") {
    switch (obj.type) {
      case "checkbox":
        return obj.checked;
      case "number": {
        const min = obj.hasAttribute("min") ? Number(obj.min) : undefined;
        const max = obj.hasAttribute("max") ? Number(obj.max) : undefined;
        if (min >= Number(obj.value)) return min;
        if (max < Number(obj.value)) return max;
        return obj.value;
      }
      default:
        return obj.value;
    }
  } else if (obj.nodeName === "SELECT") {
    return obj.selectedOptions[0].value;
  } else if (obj.nodeName === "A") {
    return obj.href;
  } else {
    return obj.innerHTML;
  }
}

/**
 *
 * @param {object} obj dom element
 * @param {object} value value set to dom element
 * @returns {undefined}
 */
export function setProperty(obj, value) {
  if (obj.nodeName === "INPUT") {
    switch (obj.type) {
      case "checkbox":
        obj.checked = !!value;
        break;
      case "number": {
        if (obj.hasAttribute("min")) {
          if (value < obj.min) {
            value = obj.min;
          }
        }
        if (obj.hasAttribute("max")) {
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
  } else if (obj.nodeName === "SELECT") {
    for (let i = 0; i < obj.options.length; i++) {
      if (obj.options[i].value === value) {
        obj.selectedIndex = i;
        break;
      }
    }
  } else if (obj.nodeName === "A") {
    obj.href = value;
  } else {
    obj.innerHTML = value;
  }
}
