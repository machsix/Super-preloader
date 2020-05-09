import _ from 'lodash';
import {encodeURIE} from './iconv-browser';
import logger from './logger';
import lowercaseKeys from './lowercaseKeys';

const isNullOrUndefined = (x) => _.isUndefined(x) || _.isNull(x);

const queryString = {
  parse(text) {
    const query = text.replace(/^\?/, '');
    const search = /([^&=]+)=?([^&]*)/g;
    const decode = function (s) {
      return decodeURIComponent(s.replace(/\+/g, ' '));
    };
    const searchParams = {};
    let match;
    while ((match = search.exec(query))) {
      searchParams[decode(match[1])] = decode(match[2]);
    }
    return searchParams;
  },
  stringify(params) {
    return Object.keys(params)
      .map((key) => key + '=' + params[key])
      .join('&');
  }
};

const defaults = {
  method: 'GET',
  retry: 0,
  headers: {},
  stream: false,
  cache: true,
  dnsCache: false,
  encoding: null,
  prefixUrl: '',
  timeout: 0, // wait forever
  searchParams: {}, // queryString for get
  body: null, // post body
  data: null, // equivalent to body
  // additional options from GM.xmlHttpRequest
  binary: false,
  user: null,
  password: null,
  context: null,
  html: false, // set to true to overrideMimeType = `text/html`;
  noHeader: false,
  cookie: null, // true: document.cookie, string: specific cookie
  withCredentials: true // VM for cross domain cookie https://github.com/violentmonkey/violentmonkey/issues/761
};

/**
 * Normalize options and merge with defaults
 * @param {object} options got style request options
 * @param {object} thisDefaults default values to overwrite options
 * @returns {object} normalized options
 */
function normalizeArguments(options, thisDefaults = defaults) {
  const keyNotMerge = [];
  // `options.headers`
  if (!isNullOrUndefined(options.headers) && _.isString(options.headers)) {
    try {
      options.headers = JSON.parse(options.headers);
    } catch (error) {
      console.error(`[Super-preloader] [got] header: ${options.headers} error: ${error}`);
      delete options.headers;
    }
  }
  if (!isNullOrUndefined(options.headers) && !_.isEmpty(options.headers)) {
    options.headers = lowercaseKeys(options.headers);
    const {headers} = options;
    if (headers) {
      for (const [key, value] of Object.entries(headers)) {
        if (_.isNull(value) || _.isUndefined(value)) {
          delete headers[key];
        }
      }
    }
  }
  options.headers = {...thisDefaults.headers, ...options.headers};
  if (_.isEmpty(options.headers)) {
    delete options.headers;
  }
  keyNotMerge.push('headers');

  // `options.prefixUrl`
  if (!isNullOrUndefined(options.prefixUrl)) {
    try {
      options.prefixUrl = options.prefixUrl.toString();
      if (!options.prefixUrl.endsWith('/')) {
        options.prefixUrl += '/';
      }
    } catch (error) {
      delete options.prefixUrl;
    }
  }

  // `options.method`
  options.method = options.method.toUpperCase();

  // `options.timeout`
  if (options.timeout) {
    options.timeout = parseInt(options.timeout);
  }

  // `options.html` and `options.encoding`
  if (options.hasOwnProperty('html')) {
    if (options.html) {
      options.binary = false;
    }
  } else {
    options.html = thisDefaults.html;
  }
  keyNotMerge.push('encoding');
  keyNotMerge.push('html');

  // `options.searchParams` , searchParams must be encoded in "utf8"
  if (options.searchParams) {
    if (_.isString(options.searchParams)) {
      options.searchParams = queryString.parse(options.searchParams);
    }
  } else {
    options.searchParams = {};
  }
  keyNotMerge.push('searchParams');

  // `options.body` => `options.data`
  if (options.body) {
    options.data = options.body;
  }

  // merge with thisDefaults
  for (const key in thisDefaults) {
    if (!(key in keyNotMerge)) {
      if (isNullOrUndefined(options[key])) {
        options[key] = thisDefaults[key];
      }
    }
  }

  // `options.cookie`, dirty fix for TM and VM on Firefox
  // TODO: remove when TM and VM releases new version
  if (!isNullOrUndefined(options.cookie)) {
    if (_.isBoolean(options.cookie) && options.cookie) {
      options.cookie = document.cookie;
    }
    if (_.isString(options.cookie)) {
      if (options.hasOwnProperty('headers')) {
        options.headers.cookie = options.cookie;
      } else {
        options.headers = {cookie: options.cookie};
      }
    }
  }

  if (options.noHeader || _.isEmpty(options.headers)) {
    delete options.headers;
  }

  // `options.cache`
  if (_.isBoolean(options.cache) && !options.cache) {
    options.searchParams.timestamp = new Date().getTime();
  }
  if (_.isEmpty(options.searchParams)) {
    delete options.searchParams;
  }

  return options;
}

/**
 * Convert got style options to options supported by GM.xmlhttpRequest
 * You need to add callback after call this function
 * @param {object} options Got-style options
 * @returns {object} GM-style options
 */
function gotopt2gmopt(options) {
  const config = {};
  ['method', 'url', 'timeout', 'headers', 'binary', 'user', 'password', 'context', 'withCredentials', 'data'].forEach((key) => {
    if (!isNullOrUndefined(options[key])) {
      config[key] = options[key];
    }
  });

  // process `options.prefixUrl`
  if (options.prefixUrl) {
    config.url = options.prefixUrl + options.url;
  }
  // process `options.encoding`
  if (options.html && _.isString(options.encoding)) {
    config.overrideMimeType = `text/html; charset=${options.encoding}`;
  }
  // process `options.searchParams`
  if (!isNullOrUndefined(options.searchParams)) {
    config.url += `?${queryString.stringify(options.searchParams)}`;
  }

  if (options.encoding) {
    config.url = encodeURIE(config.url, options.encoding);
  } else {
    config.url = encodeURI(config.url);
  }
  return config;
}

/**
 * Parse input for post and get method
 * @param {string} url Link of request
 * @param {options} optionsIn Option of request
 * @returns {object} option for request
 */
function parseArgument(url, optionsIn) {
  let gotOptions = {...optionsIn}; // shadow copy
  if (isNullOrUndefined(optionsIn)) {
    if (_.isObject(url)) {
      gotOptions = {...url};
    }
  }
  if (_.isString(url)) {
    gotOptions.url = url;
  }
  return gotOptions;
}

/**
 * Create an instance of got
 * @param {object} thisDefaults default option
 * @returns {object} an instance of got
 */
function create(thisDefaults) {
  /**
   * General interface of request
   * @param {object} optionsIn - options of get
   * @returns {promise} promise of get
   */
  const request = (optionsIn) => {
    let gotOptions = {...optionsIn}; // make a shadow copy

    // merge parameter
    gotOptions = normalizeArguments(gotOptions, request.defaults);

    // got => gm
    const gmOptions = gotopt2gmopt(gotOptions);
    logger.debug('GM_xmlhttpRequest', gmOptions);

    // helper functions
    const genCallback = (executor, name, retryCount) =>
      function (xmlResponse) {
        // convert XMLHttpRequest response to Node.js HTTP response
        // Note: retryCount is added manually
        const nodeResponse = {
          data: xmlResponse.responseText,
          body: xmlResponse.responseText,
          statusCode: xmlResponse.status,
          statusMessage: xmlResponse.statusText,
          method: gotOptions.method,
          url: xmlResponse.finalUrl,
          requestUrl: gotOptions.url,
          retryCount: retryCount,
          executorName: name // use to track back which callback function is called
        };
        Object.assign(nodeResponse, xmlResponse);
        return executor(nodeResponse);
      };

    const genPromise = (retryCount = 0) =>
      new Promise((resolve, reject) => {
        gmOptions.onload = genCallback(resolve, 'onload', retryCount);
        ['onabort', 'onerror', 'ontimeout'].forEach((method) => {
          gmOptions[method] = genCallback(reject, method, retryCount);
        });
        GM.xmlHttpRequest(gmOptions);
      });

    return new Promise((resolve, reject) => {
      const retryPromise = (retryCount) => {
        genPromise(retryCount)
          .then((nodeResponse) => resolve(nodeResponse))
          .catch((nodeResponse) => {
            if (retryCount < gotOptions.retry) {
              retryPromise(retryCount + 1);
            } else {
              reject(nodeResponse);
            }
          });
      };
      retryPromise(0);
    });
  };

  request.defaults = {};
  // eslint-disable-next-line guard-for-in
  for (const key in defaults) {
    request.defaults[key] = isNullOrUndefined(thisDefaults[key]) ? defaults[key] : thisDefaults[key];
  }

  request.get = function (url, optionsIn) {
    const options = parseArgument(url, optionsIn);
    options.method = 'GET';
    return this(options);
  };

  request.post = function (url, optionsIn) {
    const options = parseArgument(url, optionsIn);
    options.method = 'POST';
    return this(options);
  };

  request.create = create;

  return request;
}

const got = create(defaults);
export default got;
