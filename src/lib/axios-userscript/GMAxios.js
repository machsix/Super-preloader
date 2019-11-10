var utils = require("axios/lib/utils");
var buildURL = require("axios/lib/helpers/buildURL");
var dispatchRequest = require("axios/lib/core/dispatchRequest");
var mergeConfig = require("./mergeConfig");
const {Axios} = require("axios");

class GMAxios extends Axios {
  /**
   * Dispatch request
   * @param {string} arg0 URL or config
   * @param  {...any} args config
   * @returns {promise} promise
   */
  request(arg0, ...args) {
    // Allow for axios('example/url'[, config]) a la fetch API
    let config = args[0] || {};
    if (typeof arg0 === "string") {
      config.url = arg0;
    } else {
      config = arg0;
    }

    config = mergeConfig(this.defaults, config);

    // Set config.method
    if (config.method) {
      config.method = config.method.toLowerCase();
    } else if (this.defaults.method) {
      config.method = this.defaults.method.toLowerCase();
    } else {
      config.method = "get";
    }

    // Hook up interceptors middleware
    var chain = [dispatchRequest, undefined];
    var promise = Promise.resolve(config);

    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      chain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      chain.push(interceptor.fulfilled, interceptor.rejected);
    });

    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }

  getUri(config) {
    config = mergeConfig(this.defaults, config);
    return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, "");
  }
}

// Provide aliases for supported request methods
utils.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  GMAxios.prototype[method] = function(url, config) {
    return this.request(
      utils.merge(config || {}, {
        method: method,
        url: url
      })
    );
  };
});

utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  GMAxios.prototype[method] = function(url, data, config) {
    return this.request(
      utils.merge(config || {}, {
        method: method,
        url: url,
        data: data
      })
    );
  };
});

module.exports = GMAxios;
