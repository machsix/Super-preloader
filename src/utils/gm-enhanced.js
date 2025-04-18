/**
 * Adds a CSS style block to the document.
 * @param {string} aCss - The CSS rules to add.
 * @param {string} [aId] - The optional ID to assign to the style element.
 * @param {Document} [doc] - The document to which the style will be added.
 * @returns {HTMLStyleElement|null} The appended style element or null if no head element exists.
 */
export function addStyle(aCss, aId, doc = document) {
  let head = doc.getElementsByTagName('head');
  if (!head) {
    head = doc.documentElement;
  } else {
    head = head[0];
  }
  const style = doc.createElement('style');
  if (aId) {
    style.setAttribute('id', aId);
  }
  style.setAttribute('type', 'text/css');
  style.textContent = aCss;
  if (head) {
    return head.appendChild(style);
  } else {
    return null;
  }
}
