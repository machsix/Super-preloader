/**
 * Select a single element by css selector
 * @param {string} css css of dom
 * @param {object} contextNode dom contextNode
 * @returns {object} a dom node
 */
export function getElementByCSS(css, contextNode = document) {
  return contextNode.querySelector(css);
}

/**
 * Select multiple elements by css selector
 * @param {string} css css of dom
 * @param {object} contextNode dom contextNode
 * @returns {object} an array of Nodes
 */
export function getAllElementsByCSS(css, contextNode = document) {
  return [].slice.call(contextNode.querySelectorAll(css));
}

/**
 * Select an element by xpath selector
 * @param {string} xpath a string representing the XPath to be evaluated, the attribute will be removed
 * @param {object} contextNode contextNode specifies the context node for the query (see the XPath specification). It's common to pass document as the context node.
 * @param {object} doc the document to select from
 * @returns {object} a dom node
 */
export function getElementByXpath(xpath, contextNode, doc = document) {
  contextNode = contextNode || doc;
  try {
    const result = doc.evaluate(xpath, contextNode, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    return result.singleNodeValue;
  } catch (err) {
    throw new Error(`Invalid xpath: ${xpath}`);
  }
}

/**
 * Select multiple elements by xpath selector
 * @param {string} xpath a string representing the XPath to be evaluated
 * @param {object} contextNode contextNode specifies the context node for the query (see the XPath specification). It's common to pass document as the context node.
 * @param {object} doc the document to select from
 * @returns {object} an array of Nodes
 */
export function getAllElementsByXpath(xpath, contextNode, doc = document) {
  contextNode = contextNode || doc;
  const result = [];
  try {
    const query = doc.evaluate(xpath, contextNode, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for (let i = 0; i < query.snapshotLength; i++) {
      result.push(query.snapshotItem(i));
    }
  } catch (err) {
    throw new Error(`Invalid xpath: ${xpath}`);
  }
  return result;
}

/**
 *
 * @param {string} selector css selector or xpath selector
 * @param {object} contextNode contextNode specifies the context node for the query (see the XPath specification). It's common to pass document as the context node.
 * @param {object} doc the document to select from
 * @param {object} win window of the browser
 * @param {link} _cplink current page link
 * @returns {object} an array of nodes
 */
export function getAllElements(selector, contextNode, doc = document, win = window, _cplink = undefined) {
  if (!selector) return [];
  contextNode = contextNode || doc;
  if (typeof selector === "string") {
    if (selector.search(/^css;/i) === 0) {
      return getAllElementsByCSS(selector.slice(4), contextNode);
    } else {
      return getAllElementsByXpath(selector, contextNode, doc);
    }
  } else {
    const query = selector(doc, win, _cplink);
    if (!Array.isArray(query)) {
      throw new Error("Wrong type is returned by getAllElements");
    } else {
      return query;
    }
  }
}

// 获取最后一个元素.
export function getLastElement(selector, _cplink, contextNode, doc, win) {
  const eles = getAllElements(selector, contextNode, doc, win, _cplink);
  const l = eles.length;
  if (l > 0) {
    return eles[l - 1];
  } else {
    return null;
  }
}
