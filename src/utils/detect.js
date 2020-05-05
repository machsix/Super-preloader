const userAgentRules = [
  ["aol", /AOLShield\/([0-9\._]+)/],
  ["edge", /Edge\/([0-9\._]+)/],
  ["edge-ios", /EdgiOS\/([0-9\._]+)/],
  ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
  ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
  ["samsung", /SamsungBrowser\/([0-9\.]+)/],
  ["silk", /\bSilk\/([0-9._-]+)\b/],
  ["miui", /MiuiBrowser\/([0-9\.]+)$/],
  ["beaker", /BeakerBrowser\/([0-9\.]+)/],
  ["edge-chromium", /Edg\/([0-9\.]+)/],
  ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
  ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
  ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
  ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
  ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
  ["fxios", /FxiOS\/([0-9\.]+)/],
  ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
  ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
  ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
  ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
  ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
  ["ie", /MSIE\s(7\.0)/],
  ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
  ["android", /Android\s([0-9\.]+)/],
  ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
  ["safari", /Version\/([0-9\._]+).*Safari/],
  ["facebook", /FBAV\/([0-9\.]+)/],
  ["instagram", /Instagram\s([0-9\.]+)/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/]
];
const REQUIRED_VERSION_PARTS = 3;

function matchUserAgent(ua) {
  // opted for using reduce here rather than Array#first with a regex.test call
  // this is primarily because using the reduce we only perform the regex
  // execution once rather than once for the test and for the exec again below
  // probably something that needs to be benchmarked though
  return (
    ua !== "" &&
    userAgentRules.reduce(function (matched, _a) {
      var browser = _a[0],
        regex = _a[1];
      if (matched) {
        return matched;
      }
      var uaMatch = regex.exec(ua);
      return !!uaMatch && [browser, uaMatch];
    }, false)
  );
}
function parseUserAgent(ua) {
  const matchedRule = matchUserAgent(ua);
  if (!matchedRule) {
    return {
      name: null,
      version: null
    };
  }
  const [name, match] = matchedRule;
  let versionParts = match[1] && match[1].split(/[._]/).slice(0, 3);
  if (!versionParts) {
    versionParts = ["1"];
  }
  if (versionParts.length < REQUIRED_VERSION_PARTS) {
    for (let i = 0; i < REQUIRED_VERSION_PARTS - versionParts.length; i++) {
      versionParts.push("0");
    }
  }
  const version = versionParts.join(".");

  return {
    name,
    version
  };
}
// above functions are modified from https://www.npmjs.com/package/detect-browser

export const BROWSER = parseUserAgent(navigator.userAgent);

const INFO = GM.info || GM_info;
export const SCRIPT_MANAGER = {
  name: INFO.scriptHandler,
  version: INFO.version
};
