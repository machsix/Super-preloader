/**
 * Waits for an element satisfying selector to exist, then resolves promise with the element.
 * Useful for resolving race conditions.
 *
 * @param {object} element dom element
 * @param {string} type type of observer
 * @returns {Promise} promise when observed
 */
function elementReady(element, type) {
  const config = type === "attributes" ? {attributes: true} : {childList: true};
  return new Promise((resolve) => {
    new MutationObserver((mutationList, observer) => {
      resolve({
        element: element,
        type: type,
        mutationList: mutationList,
        observer: observer
      });
    }).observe(element, config);
  });
}

module.exports = elementReady;
