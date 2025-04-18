//@ts-check
/**
 * Select a single element by css selector
 * @param {string} css css of dom
 * @param {HTMLElement|Document} contextNode dom contextNode
 * @returns {HTMLElement} a dom node
 */
export function getElementByCSS(css, contextNode = document) {
  return contextNode.querySelector(css);
}

/**
 * Select multiple elements by css selector
 * @param {string} css css of dom
 * @param {ParentNode} contextNode dom contextNode
 * @returns {HTMLElement[]} an array of Nodes
 */
export function getAllElementsByCSS(css, contextNode = document) {
  return [].slice.call(contextNode.querySelectorAll(css));
}

/**
 * Select an element by xpath selector
 * @param {string} xpath a string representing the XPath to be evaluated
 * @param {Node} contextNode contextNode specifies the context node for the query (see the XPath specification). It's common to pass document as the context node.
 * @param {Document} doc the document to select from
 * @returns {HTMLElement} a dom node
 */
export function getElementByXpath(xpath, contextNode = null, doc = document) {
  contextNode = contextNode || doc;
  try {
    const result = doc.evaluate(xpath, contextNode, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    // @ts-ignore
    return /** @type {HTMLElement} */ result.singleNodeValue && result.singleNodeValue.nodeType === 1 && result.singleNodeValue;
  } catch (err) {
    console.error(err);
    throw new Error(`Invalid xpath: ${xpath}`);
  }
}

/**
 * Select multiple elements by xpath selector
 * @param {string} xpath a string representing the XPath to be evaluated
 * @param {Node} contextNode contextNode specifies the context node for the query (see the XPath specification). It's common to pass document as the context node.
 * @param {Document} doc the document to select from
 * @returns {HTMLElement[]} an array of Nodes
 */
export function getAllElementsByXpath(xpath, contextNode, doc = document) {
  contextNode = contextNode || doc;
  const result = [];
  try {
    const query = doc.evaluate(xpath, contextNode, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for (let i = 0; i < query.snapshotLength; i++) {
      const node = query.snapshotItem(i);
      //if node is an element node
      if (node.nodeType === 1) result.push(node);
    }
  } catch (err) {
    console.error(err);
    throw new Error(`Invalid xpath: ${xpath}`);
  }
  // @ts-ignore
  return result;
}

/**
 * Get all elements matching the selector
 * @param {ISelectorFunction} selector css selector or xpath selector
 * @param {Element|Document|DocumentFragment} contextNode contextNode specifies the context node for the query (see the XPath specification). It's common to pass document as the context node.
 * @param {Document} doc the document to select from
 * @param {Window} win window of the browser
 * @param {string} _cplink current page link
 * @returns {HTMLElement[]} an array of nodes
 */
export function getAllElements(selector, contextNode = undefined, doc = document, win = window, _cplink = undefined) {
  if (!selector) return [];
  //@ts-ignore
  contextNode = contextNode || doc;
  if (typeof selector === 'string') {
    if (selector.search(/^css;/i) === 0) {
      return getAllElementsByCSS(selector.slice(4), contextNode);
    } else {
      return getAllElementsByXpath(selector, contextNode, doc);
    }
  } else {
    const query = selector(doc, win, _cplink);
    if (!Array.isArray(query)) {
      throw new Error('Wrong type is returned by getAllElements');
    } else {
      return query;
    }
  }
}

/**
 * Get all elements matching the selector
 * Some bad xpath like
 * （1）//div[@id='content']/p
 * （2） id('content')
 * will only return the p element under the first div matching the id.
 * The script can result in multiple div with the same id
 * This function handles such kind of condition
 * @param {ISelectorFunction} selector css selector or xpath selector
 * @param {Element|Document|DocumentFragment} contextNode contextNode specifies the context node for the query (see the XPath specification). It's common to pass document as the context node.
 * @param {Document} doc the document to select from
 * @param {Window} win window of the browser
 * @param {string} _cplink current page link
 * @returns {HTMLElement[]} an array of nodes
 */
function getAllElementsDuplicate(selector, contextNode = undefined, doc = document, win = window, _cplink = undefined) {
  let firstElems = [];
  if (typeof selector === 'string') {
    if (selector.search(/^css;/i) !== 0) {
      // replace all id('x') by //*[@id='x']
      selector = selector.replace(/^id\((.*?)\)/g, '//*[@id=$1]');
      // prevent xpath like `//div[2]`
      const strippedSelector = /(.*\w+)\[\d+\]$/.exec(selector);
      if (strippedSelector) {
        firstElems = getAllElements(selector, contextNode, doc, win, _cplink);
        selector = strippedSelector[1];
      }
    }
  }
  const elems = getAllElements(selector, contextNode, doc, win, _cplink);
  let eles = [];
  if (firstElems.length > 0) {
    const childNodeCount = [];
    for (let i = 0; i < firstElems.length; i++) {
      childNodeCount.push([].reduce.call(elems[0].children, (x, y) => x + (y.nodeName != 'SCRIPT' ? 1 : 0), 0));
      eles.push(firstElems[i]);
    }
    for (let i = 0; i < elems.length; i++) {
      for (let j = 0; j < firstElems.length; j++) {
        if (elems[i] === firstElems[j]) break;
        if (elems[i].className === firstElems[j].className && elems[i].childElementCount === childNodeCount[j]) {
          eles.push(elems[i]);
          break;
        }
      }
    }
  } else {
    eles = elems;
  }
  return eles;
}

/**
 * Get the last element matching the given selector
 * @param {ISelectorFunction} selector selector
 * @param {string} _cplink _cplink
 * @param {HTMLElement} contextNode contextNode
 * @param {Document} doc doc
 * @param {Window} win win
 * @returns {HTMLElement} Last dom element
 */
export function getLastElement(selector, _cplink, contextNode, doc, win) {
  const eles = getAllElementsDuplicate(selector, contextNode, doc, win, _cplink);
  if (eles.length > 0) {
    return eles[eles.length - 1];
  } else {
    return null;
  }
}

/**
 * Get the last visible element matching the given selector
 * @param {ISelectorFunction} selector selector
 * @param {string} _cplink _cplink
 * @param {HTMLElement} contextNode contextNode
 * @param {Document} doc doc
 * @param {Window} win win
 * @returns {HTMLElement} Last dom element
 */
// @ts-ignore
export function getLastVisibleElement(selector, _cplink, contextNode = /** @type {HTMLElement | Document} */ (document), doc = document, win = window) {
  let eles = getAllElementsDuplicate(selector, contextNode, doc, win, _cplink);
  eles = eles.filter((e) => e.offsetParent !== null);
  if (eles.length > 0) {
    return eles[eles.length - 1];
  } else {
    return null;
  }
}
