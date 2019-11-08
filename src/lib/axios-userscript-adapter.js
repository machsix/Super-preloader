// 'use strict'
// modified from https://github.com/Trim21/axios-userscript-adapter

const {isFormData} = require("axios/lib/utils");
const settle = require("axios/lib/core/settle");

const buildURL = require("axios/lib/helpers/buildURL");
const parseHeaders = require("axios/lib/helpers/parseHeaders");
const createError = require("axios/lib/core/createError");

var btoa;
if (typeof btoa === "undefined") {
  btoa = (x) => Buffer.from(x).toString("base64");
}

/**
 *
 * @param {Object} config
 * @return {Promise<any>}
 */

module.exports = (config) =>
  new Promise((resolve, reject) => {
    let requestData = config.data;
    const requestHeaders = config.headers;

    if (requestData === undefined) {
      requestData = null;
      // Remove Content-Type if data is undefined
      [].forEach.call(requestHeaders, (val, key) => {
        if (key.toLowerCase() === "content-type") {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        }
      });
    } else if (isFormData(requestData)) {
      delete requestHeaders["Content-Type"]; // Let the browser set it
    }

    // HTTP basic authentication
    if (config.auth) {
      const username = config.auth.username || "";
      const password = config.auth.password || "";
      requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
    }

    // No cache cache
    if (config.hasOwnProperty("nocache") && config.nocache === true) {
      if (config.hasOwnProperty("params")) {
        config.params.timestamp = new Date().getTime();
      } else {
        config.params = {timestamp: new Date().getTime()};
      }
    }

    // Send the request
    // Listen for ready state
    const onload = (resp) => {
      // Prepare the response
      var responseHeaders = "responseHeaders" in resp ? parseHeaders(resp.responseHeaders) : null;
      var responseData = !config.responseType || config.responseType === "text" ? resp.responseText : resp.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: resp.status === 1223 ? 204 : resp.status,
        statusText: resp.status === 1223 ? "No Content" : resp.statusText,
        headers: responseHeaders,
        config: config,
        request: null
      };
      settle(resolve, reject, response);
    };

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        reject(cancel);
        // Clean up request
      });
    }

    GM.xmlHttpRequest({
      method: config.method.toUpperCase(),
      url: buildURL(config.url, config.params, config.paramsSerializer),
      headers: requestHeaders,
      data: requestData,
      timeout: config.timeout,
      ontimeout: () => {
        reject(createError("timeout of " + config.timeout + "ms exceeded", config, "ECONNABORTED"));
      },
      onload: onload,
      onerror: () => {
        // Real errors are hidden from us by the browser
        // onerror should only fire if it's a network error
        reject(createError("Network Error", config));
      }
    });
  });
