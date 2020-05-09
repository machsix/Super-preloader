export function addStyle(aCss, aId, doc) {
  doc = doc || document;
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
