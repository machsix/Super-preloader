const axios = (function() {
  /**
   * axios-like library for Greasemonkey
   * @param {string} method "GET"/"POST"
   * @param {string} url requested url
   * @param {object} conf Greasemonkey request configuration
   * @returns {promise} reponse is resolved
   */
  const axios = function(method, url, conf) {
    return new Promise(function(resolve, reject) {
      const req = {
        url: url,
        method: method,
        timeout: 60000,
        onload: function(res) {
          resolve(res);
        },
        onerror: function(err) {
          reject(err);
        },
        ontimeout: function(err) {
          reject(err);
        }
      };
      const acceptedConf = ["binary", "context", "data", "headers", "method", "overrideMimeType", "password", "timeout", "upload", "url", "usr"];
      if (conf) {
        for (var prop in conf) {
          if (acceptedConf.indexOf(prop) > -1) {
            req[prop] = conf[prop];
          }
        }
        if (conf.noCache === true) {
          req.url += "?_" + new Date().getTime();
        }
      }
      GM.xmlHttpRequest(req);
    });
  };

  axios.get = function(url, conf) {
    return axios("GET", url, conf);
  };

  axios.post = function(url, data, conf) {
    if (!conf) {
      conf = {data: data};
    } else {
      conf.data = data;
    }
    return axios("POST", url, conf);
  };
  return axios;
})();

module.exports = axios;
