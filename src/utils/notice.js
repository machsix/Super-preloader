import {createDOM} from './domTools.js';
export let noticeDiv, noticeDivto, noticeDivto2;

/**
 * Displays a notification with the specified HTML content and duration.
 * @param {string} html_txt - The HTML content to display in the notification.
 * @param {number} [showTime] - The duration (in milliseconds) to show the notification. Defaults to 1666 ms.
 */
export default function notice(html_txt, showTime) {
  if (!noticeDiv) {
    const div = createDOM('div', {
      attr: {
        style:
          '\
            position:fixed!important;\
            z-index:2147483647!important;\
            float:none!important;\
            width:auto!important;\
            height:auto!important;\
            font-size:13px!important;\
            padding:3px 20px 2px 5px!important;\
            background-color:#7f8f9c!important;\
            border:none!important;\
            color:#000!important;\
            text-align:left!important;\
            left:0!important;\
            bottom:0!important;\
            opacity:0;\
            -moz-border-radius:0 6px 0 0!important;\
            border-radius:0 6px 0 0!important;\
            -o-transition:opacity 0.3s ease-in-out;\
            -webkit-transition:opacity 0.3s ease-in-out;\
            -moz-transition:opacity 0.3s ease-in-out;\
        '
      }
    });
    document.body.appendChild(div);
    noticeDiv = div;
  }
  clearTimeout(noticeDivto);
  clearTimeout(noticeDivto2);
  noticeDiv.innerHTML = html_txt;
  noticeDiv.style.display = 'block';
  noticeDiv.style.opacity = '0.96';
  if (showTime === undefined) {
    showTime = 1666;
  }
  if (showTime > 0) {
    noticeDivto2 = setTimeout(function () {
      noticeDiv.style.opacity = '0';
    }, showTime);
    noticeDivto = setTimeout(function () {
      noticeDiv.style.display = 'none';
    }, showTime + 300);
  }
}
