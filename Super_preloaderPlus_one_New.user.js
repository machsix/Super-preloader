// ==UserScript==
// @name         Super_preloaderPlus_one_New
// @name:zh-CN   Super_preloaderPlus_one_改
// @name:zh-TW   Super_preloaderPlus_one_改
// @namespace    https://github.com/machsix
// @description  Preload and Autopager
// @description:zh-CN  预读+翻页..全加速你的浏览体验
// @description:zh-TW  预读+翻页..全加速你的浏览体验
// @author       Mach6
// @contributers alexolog, heroboy, suchunchen, YFdyh000
// @thanksto     ywzhaiqi, NLF
// @version      6.16.5
// @license      GPL-3.0
// @update       2021/10/23
// @homepageURL  https://github.com/machsix/Super-preloader
// @downloadURL  https://machsix.github.io/Super-preloader/Super_preloaderPlus_one_New.user.js
// @updateURL    https://machsix.github.io/Super-preloader/Super_preloaderPlus_one_New.user.js
// @supportURL   https://greasyfork.org/en/scripts/33522-super-preloaderplus-one-new/feedback
// @contributionURL https://ko-fi.com/machsix
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAvCAYAAABOtfLKAAAL9UlEQVR42s1ZC1CU1xXee/9/dwGFFRU1SQURfCSaCCoaX6Py9gmDqBSN4zuKWvEFPqpGDGrjtLFJGzXO1FgfqNUYp2lim9hWGzH1hcT3pDHK2FidGtvqaIIi/b71/viz/wLL6tjuzJnz73/vf+455zv33HPvtSUm9hMgqUgjf1qUnBwvbeoXHBwcqGlaBynFSCHEa6C3pJT9MjPThY/yhM1khP1p8okTx2jHjx8QQUGBkVB6EmgvDLgCugeqVLSxd+8edhjti1xNGfOoYdCgFG3gwGSdPCUl3iLocfnQoQO0zZvXS6fT8aymyYVQ+JxS/D5Q4fM2GLYFvAJ8W2zsSzp0oB7QJ0F/pF9yNbkWZMaMyZLt2kUHhIU1DYyKigxs2zbanpTU315ZWSkqKx8IhgOfyZcsyddycibK1NREnwxJSOhrnz17moyN7eSAkkNAnysjboK267o2zOl0PtenT08d4ZZA40BbCwsXy/v3bwjKgW721q1bBTZrFhYE3QKyszMl5FqQgSHZbsghYBMG+gP4h+C/Af8V+BrQYgySA29m2O32PqA2LldIWHj4D5zvvPNTSQO3bt0gJ0x4RcIBFkN2794s4CQX5UDmvxhOeN4NmX2pIL+fPHmsBmfZdF1PRXs5kDqBPktAP2fIge+iXkq/TdA3YsWK14QFmWPHDgoITlIx+wB0hwLVc6UHse0qqASC94CvgGdHQ4mY0NBGTRYsmC2JIL1Kw/bt2y1cLlcY+q1THv8GY00LDm4YfOvW30Va2qAqww8d+pR6JKPPXY8xHyh97qjne9T3yJE/CwsyZ84ct9nteqry2Mfo2BPeTwASQ6go3s3A83K0b8Dz72iIMuh704Dfgv5KT4LSGjZs8FxFxU3RpEnjUH6nlDgNoxOBghw2LE33DMkvvvjcjAydNRO6jAYNgX4J0KUn3v2eeqJfyokTxTYLMsojSUasLl6cpxlzxMyHDBmgt2jRPIAhBmPb0mAInwqi1w8rgyqVnFN4vwJ8LagCVIr+3RhKSC4WQ8iLixUySo8DBz6Sanwy29Kl+ZLv2c5+xcX7rchcvHjWQOY+s0jnzp2QRarHPogJQRswIEmfMmW8LChYKA1DMzPTZOPGoY3hrVgMMhVy3gddN6H2FecalTLNKQsvLa1C5r4pm7kNJ+/SJUbH+yK2o1/yqVNHHyFj/kGJFOWRbd27d3XAez6nXSiIJPJDuXPne24DIyMjgiAvRk3aSoToMoshdSNT1K1bF+iRwHZ3euZ/6qeQSeFYVZGDwTri5StoLMTzHxnXZmT8X08GMkwpfzaNAZ9bVnbOCIlakDnsKzLU80/Um3OKdtjw57KKZ5UxwK3I+MUvXDhJtPMoE3zeuXMlDInHRKYzkdnqoW8F7XAjxFQJy3IRCj+uYc74xUtKDgkiopCZd/JkcZ3IoI/Pc4YVBPXG8z9oh01ZdrJ582Yh8Ej/+swZJgMkAi0jY4jX9vPnSzyQOeEHMp0NPXQiExfX2Txn4ps1axpC/UE0xgaviZNYwBohm6X4igzqI23OnOkaaqwIruwjR2bIJ4FMSYknMp1qy2ZJISHBjaB/qRmZUqZVWJroCzJZWcNkRsZQ1lADIfgjh8MRNWPGq5p3ZGS+Qibv7NnjTxqZJFQcjX1EJt5SYxUULJJt2kQFos9kxiroSmBgYNSqVcsEPcfJavCZM6do8F53GJQH3m3WrBzNaEeImg3RDU40iYxZDzMyXbtakcFz/ZChIczl7KdW9dvq20tEBtWzHhPzIsPAYeIMR53rCxda/ud7Tuq+fXsxO1Uz5Kkhk5MzSQYGBkQZgkwr+230/63ah2ynAj7wzRgrhousJzInTliQsVdHJrY2ZGw+IbN69esS7Wlou+GliuY39+pBt1mKFBVtFHUhAyRqRaZRI1f9kWH2wjsH9zPo86XJkGsQOgqUgO+T6BATT1TvE0z/yeMbNAhqOnx4umZF5rP6IhNaFzJFRMZzyzx4cKq2d2+R5KSGwEPGnMEOMdxcI5l5RER4ELYCTVq1Cg8yv8/KyuA81HxAhsaYkbHXgozwigzzOT3hbaEsKzsrUAG3VkXkJcyl6IUL51hCprCQm0Q5lnsY8PHMhEZ7Tfz48TqRsVdHJsQ/ZAxOj7799huSoYJvcgMCnC1ZCXgqdv3611xn5quqOe/q1a9sFgP8QEZKH5DR9dqQsRqEAxAN/ZhyOUktimE1r1YBoCIWdSPzl3oh43I9QgZUf2RMCnARpNFeFTtz5piNiChk5p4+fVTUjcx+n5HBFjrZb2TqUOSJIHPsWI3I6I+LjL+GKGSOiv8RMsG1IeMXv3jxNJHJU8jkX758zgdkDtaKTFycD8igxqkJGb8NwkIrqRictYGOQn0ma+tPOnx4v6DHHxpjQYbGeCIT+lSQIV+zZpVkobl+/RrvhpjJigz1+P9ABoumwELcF4MvB++zcuUyNWeslJ4+CNX1vwUVgscTTMhYEkCtyPBPSMiTR+bSpbPV5gxPZ8wGUD6OpgSQ46lnsMNhfwn9MkHu00/vyHT2Cxn74yLDhRV7nRjev5AbtVhSUj99/vxZcty40RJ1XVu0/wje/sTj0JBXGr/s3ftlbuRqRMblqhuZrT16xHECu3eMEOaXQVBepxxW21SK/3meBjR4P9OK4Yfx/qZ0KAedgqK/5toEx2YHBAREshYEQY943s3oPXt21+uLzE6c1gRHRLR0UhEexZ4/f1SYz3ypUG7uVMkBMJjXSb1hwy+4ZoyAvI/BM/kdqmcnnocb3gT9kwbg3SBcUbTIz8+V7PeoCr8jxo4dpWF3ase3ATiNaYj+O4zjWRhTKzL3FNyfwAMfqp3hetAKLHxzQNk8xUfV3LFBgwbP4BA9aPr0yVWH7DTciHGc6Aue4nMzRo6C1AVeiP+3QN+pHWd3Khod3doJeS0wbzrS40QG7XM4LuhdhhaI+hjhyFsAFppWZPCyCRR8kVCr3eR/QHeNLbIHldOjoLMYYB8vozD4JAh/GXuX5gwnIrhu3ZsClfWzUDgOc4aTe6OSV8bEwHM60AR+Dzm8pjinxi6vYTd7l3qpPqeYMABCEwsy8EpTXMHZMSEjMXAnKNAVxvXm4TQm2nAM+CpoEScliCf8R6iUx6XQLcqiJ4HgSMR8q2vXvhQIYZ5tbVLHqRWg06AS9jd9SzlllIu+76txFkHOFIYodEiFTr2gUxyN4Hzq1au7jpoyzIIMLAzjBRA2WZLhcuPG14LeJZl/ubk5Gk74nYQXkziK6wcGdXsXcg6YMhIVv8D3CpEKD09fAx1E25tQeAJQ7QNHRlEu7lOdc+fOkJ5jK33ExYulYuXKpciGozREQpg3ZMKys4dXbbCMLMJsBtJxlOTmIPf9DC5HteXLF1UNOHPmVIm1IoShCuXGq0n6jcc13hW+R/s49mP/WbOmSUPR1asLJA4YcZucxHFAHNfNmZZB/avSNIn7KW/InEQohD4U+r3Ys2eLSE8frOMO3r3xat++reP559s6X3ihnYPnXhSkLlOFYQy5GUkcFDqBWgd1vFTJBZBJIzo6MsBbfyOB8Aab8llgdujQ3tGuXRv3uJ06dbTzJnrYsKHa2rU/k8ZZgspmJWZkLjPbgPKZ+0FvwYPvgm8B3w6+G312gYPc2W2TiumfqIk8njGNWI4NCgp6Jjy8ZaChJNpnKWPmGEawnf1gXCy/4/eUQ3mUq+Qze+1StJtOoT6cj9QP9PrDsWUu55oZGW/0QGWQcnUJ+53i9xj/NWSbb1VG+kBdtfdjKlbGFKj/S6DcB6rfzRqyZQXH8Ri3XPV94FVfhUwBBljLQbmOsPTAoFmgdFavLPrA+z0iLQl8IBc+5dF5oDeIGGR9Ri+ZUusdlcIrFb9jSu1l7M/VnN9TDuSNo1yMMZBriGncvqBEvE+hXkq/ybyVo97UH7KW2fibNGmsEYPm+PXkwvjv+SsrOyNYECITubAwtuapCQZYqBa4mzRA8U/xfgFrKvbDPHVxbpSWHhIWodZ5Re61D455tR073hM2ZAmhyhEB8salL3zw4BQxatQIaR4I6T4EiKWCCsmxZwoxt48ePYLlkCHHbw79mWnFfwGWB6omxVHfzgAAAABJRU5ErkJggg==
// @require      https://cdn.jsdelivr.net/gh/machsix/gm4-polyfill@3ac89770e4dcb69123c749a71f101fb462eaada8/gm4-polyfill-mach6-legacy.js
// @grant        GM.getValue
// @grant        GM_getValue
// @grant        GM.setValue
// @grant        GM_setValue
// @grant        GM.notification
// @grant        GM_notification
// @grant        GM.xmlHttpRequest
// @grant        GM_xmlhttpRequest
// @grant        GM.info
// @grant        GM_info
// @grant        GM_registerMenuCommand
// @connect      wedata.net
// @connect      github.io
// @run-at       document-idle
// @include      http*
// @exclude      http*://mail.google.com/*
// @exclude      http*://maps.google*
// @exclude      http*://www.google.com/reader*
// @exclude      http*://www.google.com/calendar*
// @exclude      https://docs.google.com/*
// @exclude      http*://app.yinxiang.com/*
// @exclude      http*://www.dropbox.com/*
// @exclude      http*://www.toodledo.com/*
// @exclude      http*://cloud.feedly.com/*
// @exclude      http*://weibo.com/*
// @exclude      http*://w.qq.com/*
// @exclude      http*://web2.qq.com/*
// @exclude      http*://openapi.qzone.qq.com/*
// @exclude      http*://*cloud.vip.xunlei.com/*
// @exclude      http*://www.wumii.com/*
// @exclude      http*://pan.baidu.com/*
// @exclude      http*://yun.baidu.com/*
// @exclude      http*://www.cnbeta.com/*
// @exclude      http*://www.youku.com/
// @exclude      http*://v.youku.com/*
// @exclude      http*://www.iqiyi.com/*
// @exclude      http*://www.duokan.com/reader/*
// @exclude      https://www.kohls.com/*
// @exclude      http*://list.jd.com/*
// @exclude      http*://eclick.baidu.com/*
// @exclude      http*://googleads.g.doubleclick.net/*
// @exclude      http*://pos.baidu.com/*
// @exclude      http*://tpc.googlesyndication.com/*
// @exclude      http*://ad.doubleclick.net/*
// @exclude      http*://ad.agrantsem.com/*
// @exclude      http*://www.youtube.com/embed/*
// @exclude      https://assets.tumblr.com/*
// @exclude      http*://www.paypal.com/*
// @exclude      http*://dash.cloudflare.com/*
// @exclude      http*://assets.tumblr.com/*
// @exclude      http*://www.tumblr.com/video/*
// @exclude      http*://*.awsapps.com/*
// @exlucde      http*://www.commcarehq.org/accounts/login/*gre
// @exclude      http*://simkl.com/*
// ==/UserScript==

(function () {

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function _arrayWithHoles(arr) {
	  if (Array.isArray(arr)) return arr;
	}

	var arrayWithHoles$1 = _arrayWithHoles;

	function _iterableToArrayLimit(arr, i) {
	  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
	  var _arr = [];
	  var _n = true;
	  var _d = false;
	  var _e = undefined;

	  try {
	    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	      _arr.push(_s.value);

	      if (i && _arr.length === i) break;
	    }
	  } catch (err) {
	    _d = true;
	    _e = err;
	  } finally {
	    try {
	      if (!_n && _i["return"] != null) _i["return"]();
	    } finally {
	      if (_d) throw _e;
	    }
	  }

	  return _arr;
	}

	var iterableToArrayLimit$1 = _iterableToArrayLimit;

	function _arrayLikeToArray$2(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;

	  for (var i = 0, arr2 = new Array(len); i < len; i++) {
	    arr2[i] = arr[i];
	  }

	  return arr2;
	}

	var arrayLikeToArray$1 = _arrayLikeToArray$2;

	var arrayLikeToArray = arrayLikeToArray$1;

	function _unsupportedIterableToArray$2(o, minLen) {
	  if (!o) return;
	  if (typeof o === "string") return arrayLikeToArray(o, minLen);
	  var n = Object.prototype.toString.call(o).slice(8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return Array.from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
	}

	var unsupportedIterableToArray$1 = _unsupportedIterableToArray$2;

	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	var nonIterableRest$1 = _nonIterableRest;

	var arrayWithHoles = arrayWithHoles$1;

	var iterableToArrayLimit = iterableToArrayLimit$1;

	var unsupportedIterableToArray = unsupportedIterableToArray$1;

	var nonIterableRest = nonIterableRest$1;

	function _slicedToArray(arr, i) {
	  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
	}

	var slicedToArray = _slicedToArray;

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */

	var isArray$b = Array.isArray;

	var isArray_1 = isArray$b;

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */

	function listCacheClear$1() {
	  this.__data__ = [];
	  this.size = 0;
	}

	var _listCacheClear = listCacheClear$1;

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */

	function eq$2(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	var eq_1 = eq$2;

	var eq$1 = eq_1;

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf$4(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq$1(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	var _assocIndexOf = assocIndexOf$4;

	var assocIndexOf$3 = _assocIndexOf;

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete$1(key) {
	  var data = this.__data__,
	      index = assocIndexOf$3(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	var _listCacheDelete = listCacheDelete$1;

	var assocIndexOf$2 = _assocIndexOf;

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet$1(key) {
	  var data = this.__data__,
	      index = assocIndexOf$2(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	var _listCacheGet = listCacheGet$1;

	var assocIndexOf$1 = _assocIndexOf;

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas$1(key) {
	  return assocIndexOf$1(this.__data__, key) > -1;
	}

	var _listCacheHas = listCacheHas$1;

	var assocIndexOf = _assocIndexOf;

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet$1(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	var _listCacheSet = listCacheSet$1;

	var listCacheClear = _listCacheClear,
	    listCacheDelete = _listCacheDelete,
	    listCacheGet = _listCacheGet,
	    listCacheHas = _listCacheHas,
	    listCacheSet = _listCacheSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache$4(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache$4.prototype.clear = listCacheClear;
	ListCache$4.prototype['delete'] = listCacheDelete;
	ListCache$4.prototype.get = listCacheGet;
	ListCache$4.prototype.has = listCacheHas;
	ListCache$4.prototype.set = listCacheSet;

	var _ListCache = ListCache$4;

	var ListCache$3 = _ListCache;

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear$1() {
	  this.__data__ = new ListCache$3;
	  this.size = 0;
	}

	var _stackClear = stackClear$1;

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */

	function stackDelete$1(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	var _stackDelete = stackDelete$1;

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */

	function stackGet$1(key) {
	  return this.__data__.get(key);
	}

	var _stackGet = stackGet$1;

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */

	function stackHas$1(key) {
	  return this.__data__.has(key);
	}

	var _stackHas = stackHas$1;

	/** Detect free variable `global` from Node.js. */

	var freeGlobal$1 = typeof global == 'object' && global && global.Object === Object && global;

	var _freeGlobal = freeGlobal$1;

	var freeGlobal = _freeGlobal;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root$8 = freeGlobal || freeSelf || Function('return this')();

	var _root = root$8;

	var root$7 = _root;

	/** Built-in value references. */
	var Symbol$6 = root$7.Symbol;

	var _Symbol = Symbol$6;

	var Symbol$5 = _Symbol;

	/** Used for built-in method references. */
	var objectProto$c = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$9 = objectProto$c.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString$1 = objectProto$c.toString;

	/** Built-in value references. */
	var symToStringTag$1 = Symbol$5 ? Symbol$5.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag$1(value) {
	  var isOwn = hasOwnProperty$9.call(value, symToStringTag$1),
	      tag = value[symToStringTag$1];

	  try {
	    value[symToStringTag$1] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString$1.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag$1] = tag;
	    } else {
	      delete value[symToStringTag$1];
	    }
	  }
	  return result;
	}

	var _getRawTag = getRawTag$1;

	/** Used for built-in method references. */

	var objectProto$b = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto$b.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString$1(value) {
	  return nativeObjectToString.call(value);
	}

	var _objectToString = objectToString$1;

	var Symbol$4 = _Symbol,
	    getRawTag = _getRawTag,
	    objectToString = _objectToString;

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol$4 ? Symbol$4.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag$7(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	var _baseGetTag = baseGetTag$7;

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */

	function isObject$4(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	var isObject_1 = isObject$4;

	var baseGetTag$6 = _baseGetTag,
	    isObject$3 = isObject_1;

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag$1 = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction$2(value) {
	  if (!isObject$3(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag$6(value);
	  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	var isFunction_1 = isFunction$2;

	var root$6 = _root;

	/** Used to detect overreaching core-js shims. */
	var coreJsData$1 = root$6['__core-js_shared__'];

	var _coreJsData = coreJsData$1;

	var coreJsData = _coreJsData;

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked$1(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	var _isMasked = isMasked$1;

	/** Used for built-in method references. */

	var funcProto$1 = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString$1 = funcProto$1.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource$2(func) {
	  if (func != null) {
	    try {
	      return funcToString$1.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	var _toSource = toSource$2;

	var isFunction$1 = isFunction_1,
	    isMasked = _isMasked,
	    isObject$2 = isObject_1,
	    toSource$1 = _toSource;

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto$a = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty$8 = objectProto$a.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty$8).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative$1(value) {
	  if (!isObject$2(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource$1(value));
	}

	var _baseIsNative = baseIsNative$1;

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */

	function getValue$1(object, key) {
	  return object == null ? undefined : object[key];
	}

	var _getValue = getValue$1;

	var baseIsNative = _baseIsNative,
	    getValue = _getValue;

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative$7(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	var _getNative = getNative$7;

	var getNative$6 = _getNative,
	    root$5 = _root;

	/* Built-in method references that are verified to be native. */
	var Map$3 = getNative$6(root$5, 'Map');

	var _Map = Map$3;

	var getNative$5 = _getNative;

	/* Built-in method references that are verified to be native. */
	var nativeCreate$4 = getNative$5(Object, 'create');

	var _nativeCreate = nativeCreate$4;

	var nativeCreate$3 = _nativeCreate;

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear$1() {
	  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
	  this.size = 0;
	}

	var _hashClear = hashClear$1;

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */

	function hashDelete$1(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var _hashDelete = hashDelete$1;

	var nativeCreate$2 = _nativeCreate;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto$9 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet$1(key) {
	  var data = this.__data__;
	  if (nativeCreate$2) {
	    var result = data[key];
	    return result === HASH_UNDEFINED$2 ? undefined : result;
	  }
	  return hasOwnProperty$7.call(data, key) ? data[key] : undefined;
	}

	var _hashGet = hashGet$1;

	var nativeCreate$1 = _nativeCreate;

	/** Used for built-in method references. */
	var objectProto$8 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$6 = objectProto$8.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas$1(key) {
	  var data = this.__data__;
	  return nativeCreate$1 ? (data[key] !== undefined) : hasOwnProperty$6.call(data, key);
	}

	var _hashHas = hashHas$1;

	var nativeCreate = _nativeCreate;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet$1(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
	  return this;
	}

	var _hashSet = hashSet$1;

	var hashClear = _hashClear,
	    hashDelete = _hashDelete,
	    hashGet = _hashGet,
	    hashHas = _hashHas,
	    hashSet = _hashSet;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash$1(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash$1.prototype.clear = hashClear;
	Hash$1.prototype['delete'] = hashDelete;
	Hash$1.prototype.get = hashGet;
	Hash$1.prototype.has = hashHas;
	Hash$1.prototype.set = hashSet;

	var _Hash = Hash$1;

	var Hash = _Hash,
	    ListCache$2 = _ListCache,
	    Map$2 = _Map;

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear$1() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map$2 || ListCache$2),
	    'string': new Hash
	  };
	}

	var _mapCacheClear = mapCacheClear$1;

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */

	function isKeyable$1(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	var _isKeyable = isKeyable$1;

	var isKeyable = _isKeyable;

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData$4(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	var _getMapData = getMapData$4;

	var getMapData$3 = _getMapData;

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete$1(key) {
	  var result = getMapData$3(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var _mapCacheDelete = mapCacheDelete$1;

	var getMapData$2 = _getMapData;

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet$1(key) {
	  return getMapData$2(this, key).get(key);
	}

	var _mapCacheGet = mapCacheGet$1;

	var getMapData$1 = _getMapData;

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas$1(key) {
	  return getMapData$1(this, key).has(key);
	}

	var _mapCacheHas = mapCacheHas$1;

	var getMapData = _getMapData;

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet$1(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	var _mapCacheSet = mapCacheSet$1;

	var mapCacheClear = _mapCacheClear,
	    mapCacheDelete = _mapCacheDelete,
	    mapCacheGet = _mapCacheGet,
	    mapCacheHas = _mapCacheHas,
	    mapCacheSet = _mapCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache$3(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache$3.prototype.clear = mapCacheClear;
	MapCache$3.prototype['delete'] = mapCacheDelete;
	MapCache$3.prototype.get = mapCacheGet;
	MapCache$3.prototype.has = mapCacheHas;
	MapCache$3.prototype.set = mapCacheSet;

	var _MapCache = MapCache$3;

	var ListCache$1 = _ListCache,
	    Map$1 = _Map,
	    MapCache$2 = _MapCache;

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE$1 = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet$1(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache$1) {
	    var pairs = data.__data__;
	    if (!Map$1 || (pairs.length < LARGE_ARRAY_SIZE$1 - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache$2(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	var _stackSet = stackSet$1;

	var ListCache = _ListCache,
	    stackClear = _stackClear,
	    stackDelete = _stackDelete,
	    stackGet = _stackGet,
	    stackHas = _stackHas,
	    stackSet = _stackSet;

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack$2(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}

	// Add methods to `Stack`.
	Stack$2.prototype.clear = stackClear;
	Stack$2.prototype['delete'] = stackDelete;
	Stack$2.prototype.get = stackGet;
	Stack$2.prototype.has = stackHas;
	Stack$2.prototype.set = stackSet;

	var _Stack = Stack$2;

	/** Used to stand-in for `undefined` hash values. */

	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd$1(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	var _setCacheAdd = setCacheAdd$1;

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */

	function setCacheHas$1(value) {
	  return this.__data__.has(value);
	}

	var _setCacheHas = setCacheHas$1;

	var MapCache$1 = _MapCache,
	    setCacheAdd = _setCacheAdd,
	    setCacheHas = _setCacheHas;

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache$2(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;

	  this.__data__ = new MapCache$1;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache$2.prototype.add = SetCache$2.prototype.push = setCacheAdd;
	SetCache$2.prototype.has = setCacheHas;

	var _SetCache = SetCache$2;

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */

	function arraySome$1(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	var _arraySome = arraySome$1;

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */

	function cacheHas$2(cache, key) {
	  return cache.has(key);
	}

	var _cacheHas = cacheHas$2;

	var SetCache$1 = _SetCache,
	    arraySome = _arraySome,
	    cacheHas$1 = _cacheHas;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$5 = 1,
	    COMPARE_UNORDERED_FLAG$3 = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays$2(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Check that cyclic values are equal.
	  var arrStacked = stack.get(array);
	  var othStacked = stack.get(other);
	  if (arrStacked && othStacked) {
	    return arrStacked == other && othStacked == array;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & COMPARE_UNORDERED_FLAG$3) ? new SetCache$1 : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!cacheHas$1(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, bitmask, customizer, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	var _equalArrays = equalArrays$2;

	var root$4 = _root;

	/** Built-in value references. */
	var Uint8Array$2 = root$4.Uint8Array;

	var _Uint8Array = Uint8Array$2;

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */

	function mapToArray$1(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	var _mapToArray = mapToArray$1;

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */

	function setToArray$1(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	var _setToArray = setToArray$1;

	var Symbol$3 = _Symbol,
	    Uint8Array$1 = _Uint8Array,
	    eq = eq_1,
	    equalArrays$1 = _equalArrays,
	    mapToArray = _mapToArray,
	    setToArray = _setToArray;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$4 = 1,
	    COMPARE_UNORDERED_FLAG$2 = 2;

	/** `Object#toString` result references. */
	var boolTag$2 = '[object Boolean]',
	    dateTag$1 = '[object Date]',
	    errorTag$1 = '[object Error]',
	    mapTag$3 = '[object Map]',
	    numberTag$1 = '[object Number]',
	    regexpTag$1 = '[object RegExp]',
	    setTag$3 = '[object Set]',
	    stringTag$2 = '[object String]',
	    symbolTag$1 = '[object Symbol]';

	var arrayBufferTag$1 = '[object ArrayBuffer]',
	    dataViewTag$2 = '[object DataView]';

	/** Used to convert symbols to primitives and strings. */
	var symbolProto$1 = Symbol$3 ? Symbol$3.prototype : undefined,
	    symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : undefined;

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag$1(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag$2:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag$1:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) {
	        return false;
	      }
	      return true;

	    case boolTag$2:
	    case dateTag$1:
	    case numberTag$1:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);

	    case errorTag$1:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag$1:
	    case stringTag$2:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag$3:
	      var convert = mapToArray;

	    case setTag$3:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG$2;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays$1(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag$1:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	var _equalByTag = equalByTag$1;

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */

	function arrayPush$2(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	var _arrayPush = arrayPush$2;

	var arrayPush$1 = _arrayPush,
	    isArray$a = isArray_1;

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys$1(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray$a(object) ? result : arrayPush$1(result, symbolsFunc(object));
	}

	var _baseGetAllKeys = baseGetAllKeys$1;

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */

	function arrayFilter$1(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}

	var _arrayFilter = arrayFilter$1;

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */

	function stubArray$1() {
	  return [];
	}

	var stubArray_1 = stubArray$1;

	var arrayFilter = _arrayFilter,
	    stubArray = stubArray_1;

	/** Used for built-in method references. */
	var objectProto$7 = Object.prototype;

	/** Built-in value references. */
	var propertyIsEnumerable$1 = objectProto$7.propertyIsEnumerable;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols$1 = !nativeGetSymbols ? stubArray : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return arrayFilter(nativeGetSymbols(object), function(symbol) {
	    return propertyIsEnumerable$1.call(object, symbol);
	  });
	};

	var _getSymbols = getSymbols$1;

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */

	function baseTimes$1(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	var _baseTimes = baseTimes$1;

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */

	function isObjectLike$8(value) {
	  return value != null && typeof value == 'object';
	}

	var isObjectLike_1 = isObjectLike$8;

	var baseGetTag$5 = _baseGetTag,
	    isObjectLike$7 = isObjectLike_1;

	/** `Object#toString` result references. */
	var argsTag$2 = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments$1(value) {
	  return isObjectLike$7(value) && baseGetTag$5(value) == argsTag$2;
	}

	var _baseIsArguments = baseIsArguments$1;

	var baseIsArguments = _baseIsArguments,
	    isObjectLike$6 = isObjectLike_1;

	/** Used for built-in method references. */
	var objectProto$6 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto$6.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments$4 = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike$6(value) && hasOwnProperty$5.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	var isArguments_1 = isArguments$4;

	var isBuffer$3 = {exports: {}};

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */

	function stubFalse() {
	  return false;
	}

	var stubFalse_1 = stubFalse;

	(function (module, exports) {
	var root = _root,
	    stubFalse = stubFalse_1;

	/** Detect free variable `exports`. */
	var freeExports = exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	module.exports = isBuffer;
	}(isBuffer$3, isBuffer$3.exports));

	/** Used as references for various `Number` constants. */

	var MAX_SAFE_INTEGER$1 = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex$2(value, length) {
	  var type = typeof value;
	  length = length == null ? MAX_SAFE_INTEGER$1 : length;

	  return !!length &&
	    (type == 'number' ||
	      (type != 'symbol' && reIsUint.test(value))) &&
	        (value > -1 && value % 1 == 0 && value < length);
	}

	var _isIndex = isIndex$2;

	/** Used as references for various `Number` constants. */

	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength$3(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	var isLength_1 = isLength$3;

	var baseGetTag$4 = _baseGetTag,
	    isLength$2 = isLength_1,
	    isObjectLike$5 = isObjectLike_1;

	/** `Object#toString` result references. */
	var argsTag$1 = '[object Arguments]',
	    arrayTag$1 = '[object Array]',
	    boolTag$1 = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag$2 = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag$2 = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag$2 = '[object Set]',
	    stringTag$1 = '[object String]',
	    weakMapTag$1 = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag$1 = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag$1] =
	typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag$2] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag$2] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag$2] = typedArrayTags[stringTag$1] =
	typedArrayTags[weakMapTag$1] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray$1(value) {
	  return isObjectLike$5(value) &&
	    isLength$2(value.length) && !!typedArrayTags[baseGetTag$4(value)];
	}

	var _baseIsTypedArray = baseIsTypedArray$1;

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */

	function baseUnary$2(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	var _baseUnary = baseUnary$2;

	var _nodeUtil = {exports: {}};

	(function (module, exports) {
	var freeGlobal = _freeGlobal;

	/** Detect free variable `exports`. */
	var freeExports = exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    // Use `util.types` for Node.js 10+.
	    var types = freeModule && freeModule.require && freeModule.require('util').types;

	    if (types) {
	      return types;
	    }

	    // Legacy `process.binding('util')` for Node.js < 10.
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;
	}(_nodeUtil, _nodeUtil.exports));

	var baseIsTypedArray = _baseIsTypedArray,
	    baseUnary$1 = _baseUnary,
	    nodeUtil = _nodeUtil.exports;

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray$3 = nodeIsTypedArray ? baseUnary$1(nodeIsTypedArray) : baseIsTypedArray;

	var isTypedArray_1 = isTypedArray$3;

	var baseTimes = _baseTimes,
	    isArguments$3 = isArguments_1,
	    isArray$9 = isArray_1,
	    isBuffer$2 = isBuffer$3.exports,
	    isIndex$1 = _isIndex,
	    isTypedArray$2 = isTypedArray_1;

	/** Used for built-in method references. */
	var objectProto$5 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys$1(value, inherited) {
	  var isArr = isArray$9(value),
	      isArg = !isArr && isArguments$3(value),
	      isBuff = !isArr && !isArg && isBuffer$2(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray$2(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty$4.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex$1(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _arrayLikeKeys = arrayLikeKeys$1;

	/** Used for built-in method references. */

	var objectProto$4 = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype$2(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$4;

	  return value === proto;
	}

	var _isPrototype = isPrototype$2;

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */

	function overArg$1(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	var _overArg = overArg$1;

	var overArg = _overArg;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys$1 = overArg(Object.keys, Object);

	var _nativeKeys = nativeKeys$1;

	var isPrototype$1 = _isPrototype,
	    nativeKeys = _nativeKeys;

	/** Used for built-in method references. */
	var objectProto$3 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$3 = objectProto$3.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys$2(object) {
	  if (!isPrototype$1(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty$3.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _baseKeys = baseKeys$2;

	var isFunction = isFunction_1,
	    isLength$1 = isLength_1;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike$4(value) {
	  return value != null && isLength$1(value.length) && !isFunction(value);
	}

	var isArrayLike_1 = isArrayLike$4;

	var arrayLikeKeys = _arrayLikeKeys,
	    baseKeys$1 = _baseKeys,
	    isArrayLike$3 = isArrayLike_1;

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys$3(object) {
	  return isArrayLike$3(object) ? arrayLikeKeys(object) : baseKeys$1(object);
	}

	var keys_1 = keys$3;

	var baseGetAllKeys = _baseGetAllKeys,
	    getSymbols = _getSymbols,
	    keys$2 = keys_1;

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys$1(object) {
	  return baseGetAllKeys(object, keys$2, getSymbols);
	}

	var _getAllKeys = getAllKeys$1;

	var getAllKeys = _getAllKeys;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$3 = 1;

	/** Used for built-in method references. */
	var objectProto$2 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects$1(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3,
	      objProps = getAllKeys(object),
	      objLength = objProps.length,
	      othProps = getAllKeys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty$2.call(other, key))) {
	      return false;
	    }
	  }
	  // Check that cyclic values are equal.
	  var objStacked = stack.get(object);
	  var othStacked = stack.get(other);
	  if (objStacked && othStacked) {
	    return objStacked == other && othStacked == object;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	var _equalObjects = equalObjects$1;

	var getNative$4 = _getNative,
	    root$3 = _root;

	/* Built-in method references that are verified to be native. */
	var DataView$1 = getNative$4(root$3, 'DataView');

	var _DataView = DataView$1;

	var getNative$3 = _getNative,
	    root$2 = _root;

	/* Built-in method references that are verified to be native. */
	var Promise$2 = getNative$3(root$2, 'Promise');

	var _Promise = Promise$2;

	var getNative$2 = _getNative,
	    root$1 = _root;

	/* Built-in method references that are verified to be native. */
	var Set$1 = getNative$2(root$1, 'Set');

	var _Set = Set$1;

	var getNative$1 = _getNative,
	    root = _root;

	/* Built-in method references that are verified to be native. */
	var WeakMap$1 = getNative$1(root, 'WeakMap');

	var _WeakMap = WeakMap$1;

	var DataView = _DataView,
	    Map = _Map,
	    Promise$1 = _Promise,
	    Set = _Set,
	    WeakMap = _WeakMap,
	    baseGetTag$3 = _baseGetTag,
	    toSource = _toSource;

	/** `Object#toString` result references. */
	var mapTag$1 = '[object Map]',
	    objectTag$1 = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag$1 = '[object Set]',
	    weakMapTag = '[object WeakMap]';

	var dataViewTag = '[object DataView]';

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise$1),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag$2 = baseGetTag$3;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag$2(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag$2(new Map) != mapTag$1) ||
	    (Promise$1 && getTag$2(Promise$1.resolve()) != promiseTag) ||
	    (Set && getTag$2(new Set) != setTag$1) ||
	    (WeakMap && getTag$2(new WeakMap) != weakMapTag)) {
	  getTag$2 = function(value) {
	    var result = baseGetTag$3(value),
	        Ctor = result == objectTag$1 ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : '';

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag$1;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag$1;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	var _getTag = getTag$2;

	var Stack$1 = _Stack,
	    equalArrays = _equalArrays,
	    equalByTag = _equalByTag,
	    equalObjects = _equalObjects,
	    getTag$1 = _getTag,
	    isArray$8 = isArray_1,
	    isBuffer$1 = isBuffer$3.exports,
	    isTypedArray$1 = isTypedArray_1;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$2 = 1;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto$1 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep$1(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray$8(object),
	      othIsArr = isArray$8(other),
	      objTag = objIsArr ? arrayTag : getTag$1(object),
	      othTag = othIsArr ? arrayTag : getTag$1(other);

	  objTag = objTag == argsTag ? objectTag : objTag;
	  othTag = othTag == argsTag ? objectTag : othTag;

	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;

	  if (isSameTag && isBuffer$1(object)) {
	    if (!isBuffer$1(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack$1);
	    return (objIsArr || isTypedArray$1(object))
	      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
	    var objIsWrapped = objIsObj && hasOwnProperty$1.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty$1.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack$1);
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack$1);
	  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}

	var _baseIsEqualDeep = baseIsEqualDeep$1;

	var baseIsEqualDeep = _baseIsEqualDeep,
	    isObjectLike$4 = isObjectLike_1;

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual$2(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObjectLike$4(value) && !isObjectLike$4(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual$2, stack);
	}

	var _baseIsEqual = baseIsEqual$2;

	var Stack = _Stack,
	    baseIsEqual$1 = _baseIsEqual;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$1 = 1,
	    COMPARE_UNORDERED_FLAG$1 = 2;

	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch$1(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual$1(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	var _baseIsMatch = baseIsMatch$1;

	var isObject$1 = isObject_1;

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable$2(value) {
	  return value === value && !isObject$1(value);
	}

	var _isStrictComparable = isStrictComparable$2;

	var isStrictComparable$1 = _isStrictComparable,
	    keys$1 = keys_1;

	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData$1(object) {
	  var result = keys$1(object),
	      length = result.length;

	  while (length--) {
	    var key = result[length],
	        value = object[key];

	    result[length] = [key, value, isStrictComparable$1(value)];
	  }
	  return result;
	}

	var _getMatchData = getMatchData$1;

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */

	function matchesStrictComparable$2(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}

	var _matchesStrictComparable = matchesStrictComparable$2;

	var baseIsMatch = _baseIsMatch,
	    getMatchData = _getMatchData,
	    matchesStrictComparable$1 = _matchesStrictComparable;

	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches$1(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable$1(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}

	var _baseMatches = baseMatches$1;

	var baseGetTag$2 = _baseGetTag,
	    isObjectLike$3 = isObjectLike_1;

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol$4(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike$3(value) && baseGetTag$2(value) == symbolTag);
	}

	var isSymbol_1 = isSymbol$4;

	var isArray$7 = isArray_1,
	    isSymbol$3 = isSymbol_1;

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey$3(value, object) {
	  if (isArray$7(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol$3(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	var _isKey = isKey$3;

	var MapCache = _MapCache;

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize$1(func, resolver) {
	  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize$1.Cache || MapCache);
	  return memoized;
	}

	// Expose `MapCache`.
	memoize$1.Cache = MapCache;

	var memoize_1 = memoize$1;

	var memoize = memoize_1;

	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;

	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped$1(func) {
	  var result = memoize(func, function(key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });

	  var cache = result.cache;
	  return result;
	}

	var _memoizeCapped = memoizeCapped$1;

	var memoizeCapped = _memoizeCapped;

	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath$1 = memoizeCapped(function(string) {
	  var result = [];
	  if (string.charCodeAt(0) === 46 /* . */) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, subString) {
	    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	var _stringToPath = stringToPath$1;

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */

	function arrayMap$2(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	var _arrayMap = arrayMap$2;

	var Symbol$2 = _Symbol,
	    arrayMap$1 = _arrayMap,
	    isArray$6 = isArray_1,
	    isSymbol$2 = isSymbol_1;

	/** Used as references for various `Number` constants. */
	var INFINITY$2 = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol$2 ? Symbol$2.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString$1(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray$6(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap$1(value, baseToString$1) + '';
	  }
	  if (isSymbol$2(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY$2) ? '-0' : result;
	}

	var _baseToString = baseToString$1;

	var baseToString = _baseToString;

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString$1(value) {
	  return value == null ? '' : baseToString(value);
	}

	var toString_1 = toString$1;

	var isArray$5 = isArray_1,
	    isKey$2 = _isKey,
	    stringToPath = _stringToPath,
	    toString = toString_1;

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath$2(value, object) {
	  if (isArray$5(value)) {
	    return value;
	  }
	  return isKey$2(value, object) ? [value] : stringToPath(toString(value));
	}

	var _castPath = castPath$2;

	var isSymbol$1 = isSymbol_1;

	/** Used as references for various `Number` constants. */
	var INFINITY$1 = 1 / 0;

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey$4(value) {
	  if (typeof value == 'string' || isSymbol$1(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
	}

	var _toKey = toKey$4;

	var castPath$1 = _castPath,
	    toKey$3 = _toKey;

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet$2(object, path) {
	  path = castPath$1(path, object);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey$3(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}

	var _baseGet = baseGet$2;

	var baseGet$1 = _baseGet;

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get$1(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet$1(object, path);
	  return result === undefined ? defaultValue : result;
	}

	var get_1 = get$1;

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */

	function baseHasIn$1(object, key) {
	  return object != null && key in Object(object);
	}

	var _baseHasIn = baseHasIn$1;

	var castPath = _castPath,
	    isArguments$2 = isArguments_1,
	    isArray$4 = isArray_1,
	    isIndex = _isIndex,
	    isLength = isLength_1,
	    toKey$2 = _toKey;

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath$1(object, path, hasFunc) {
	  path = castPath(path, object);

	  var index = -1,
	      length = path.length,
	      result = false;

	  while (++index < length) {
	    var key = toKey$2(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result || ++index != length) {
	    return result;
	  }
	  length = object == null ? 0 : object.length;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray$4(object) || isArguments$2(object));
	}

	var _hasPath = hasPath$1;

	var baseHasIn = _baseHasIn,
	    hasPath = _hasPath;

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn$1(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}

	var hasIn_1 = hasIn$1;

	var baseIsEqual = _baseIsEqual,
	    get = get_1,
	    hasIn = hasIn_1,
	    isKey$1 = _isKey,
	    isStrictComparable = _isStrictComparable,
	    matchesStrictComparable = _matchesStrictComparable,
	    toKey$1 = _toKey;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty$1(path, srcValue) {
	  if (isKey$1(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey$1(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
	  };
	}

	var _baseMatchesProperty = baseMatchesProperty$1;

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */

	function identity$3(value) {
	  return value;
	}

	var identity_1 = identity$3;

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */

	function baseProperty$1(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	var _baseProperty = baseProperty$1;

	var baseGet = _baseGet;

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep$1(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}

	var _basePropertyDeep = basePropertyDeep$1;

	var baseProperty = _baseProperty,
	    basePropertyDeep = _basePropertyDeep,
	    isKey = _isKey,
	    toKey = _toKey;

	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property$1(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}

	var property_1 = property$1;

	var baseMatches = _baseMatches,
	    baseMatchesProperty = _baseMatchesProperty,
	    identity$2 = identity_1,
	    isArray$3 = isArray_1,
	    property = property_1;

	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee$2(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity$2;
	  }
	  if (typeof value == 'object') {
	    return isArray$3(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}

	var _baseIteratee = baseIteratee$2;

	var baseIteratee$1 = _baseIteratee,
	    isArrayLike$2 = isArrayLike_1,
	    keys = keys_1;

	/**
	 * Creates a `_.find` or `_.findLast` function.
	 *
	 * @private
	 * @param {Function} findIndexFunc The function to find the collection index.
	 * @returns {Function} Returns the new find function.
	 */
	function createFind$1(findIndexFunc) {
	  return function(collection, predicate, fromIndex) {
	    var iterable = Object(collection);
	    if (!isArrayLike$2(collection)) {
	      var iteratee = baseIteratee$1(predicate);
	      collection = keys(collection);
	      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
	    }
	    var index = findIndexFunc(collection, predicate, fromIndex);
	    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
	  };
	}

	var _createFind = createFind$1;

	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */

	function baseFindIndex$2(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);

	  while ((fromRight ? index-- : ++index < length)) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}

	var _baseFindIndex = baseFindIndex$2;

	/** Used to match a single whitespace character. */

	var reWhitespace = /\s/;

	/**
	 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
	 * character of `string`.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {number} Returns the index of the last non-whitespace character.
	 */
	function trimmedEndIndex$1(string) {
	  var index = string.length;

	  while (index-- && reWhitespace.test(string.charAt(index))) {}
	  return index;
	}

	var _trimmedEndIndex = trimmedEndIndex$1;

	var trimmedEndIndex = _trimmedEndIndex;

	/** Used to match leading whitespace. */
	var reTrimStart = /^\s+/;

	/**
	 * The base implementation of `_.trim`.
	 *
	 * @private
	 * @param {string} string The string to trim.
	 * @returns {string} Returns the trimmed string.
	 */
	function baseTrim$1(string) {
	  return string
	    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
	    : string;
	}

	var _baseTrim = baseTrim$1;

	var baseTrim = _baseTrim,
	    isObject = isObject_1,
	    isSymbol = isSymbol_1;

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber$1(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = baseTrim(value);
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	var toNumber_1 = toNumber$1;

	var toNumber = toNumber_1;

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;

	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite$1(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}

	var toFinite_1 = toFinite$1;

	var toFinite = toFinite_1;

	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger$1(value) {
	  var result = toFinite(value),
	      remainder = result % 1;

	  return result === result ? (remainder ? result - remainder : result) : 0;
	}

	var toInteger_1 = toInteger$1;

	var baseFindIndex$1 = _baseFindIndex,
	    baseIteratee = _baseIteratee,
	    toInteger = toInteger_1;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax$1 = Math.max;

	/**
	 * This method is like `_.find` except that it returns the index of the first
	 * element `predicate` returns truthy for instead of the element itself.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {Function} [predicate=_.identity] The function invoked per iteration.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @returns {number} Returns the index of the found element, else `-1`.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney',  'active': false },
	 *   { 'user': 'fred',    'active': false },
	 *   { 'user': 'pebbles', 'active': true }
	 * ];
	 *
	 * _.findIndex(users, function(o) { return o.user == 'barney'; });
	 * // => 0
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.findIndex(users, { 'user': 'fred', 'active': false });
	 * // => 1
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.findIndex(users, ['active', false]);
	 * // => 0
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.findIndex(users, 'active');
	 * // => 2
	 */
	function findIndex$1(array, predicate, fromIndex) {
	  var length = array == null ? 0 : array.length;
	  if (!length) {
	    return -1;
	  }
	  var index = fromIndex == null ? 0 : toInteger(fromIndex);
	  if (index < 0) {
	    index = nativeMax$1(length + index, 0);
	  }
	  return baseFindIndex$1(array, baseIteratee(predicate), index);
	}

	var findIndex_1 = findIndex$1;

	var createFind = _createFind,
	    findIndex = findIndex_1;

	/**
	 * Iterates over elements of `collection`, returning the first element
	 * `predicate` returns truthy for. The predicate is invoked with three
	 * arguments: (value, index|key, collection).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to inspect.
	 * @param {Function} [predicate=_.identity] The function invoked per iteration.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @returns {*} Returns the matched element, else `undefined`.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney',  'age': 36, 'active': true },
	 *   { 'user': 'fred',    'age': 40, 'active': false },
	 *   { 'user': 'pebbles', 'age': 1,  'active': true }
	 * ];
	 *
	 * _.find(users, function(o) { return o.age < 40; });
	 * // => object for 'barney'
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.find(users, { 'age': 1, 'active': true });
	 * // => object for 'pebbles'
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.find(users, ['active', false]);
	 * // => object for 'fred'
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.find(users, 'active');
	 * // => object for 'barney'
	 */
	var find = createFind(findIndex);

	var find_1 = find;

	var _wcImport4 = ".sp-separator {\n  line-height: 1.8 !important;\n  opacity: 1 !important;\n  position: relative !important;\n  float: none !important;\n  top: 0 !important;\n  left: 0 !important;\n  min-width: 366px;\n  width: auto;\n  text-align: center !important;\n  font-size: 14px !important;\n  display: block !important;\n  padding: 3px 0 !important;\n  margin: 5px 10px 8px;\n  clear: both !important;\n  border-style: solid !important;\n  border-color: #cccccc !important;\n  border-width: 1px !important;\n  -moz-border-radius: 30px !important;\n  border-radius: 30px !important;\n  background-color: #ffffff !important; }\n\n.sp-separator:hover {\n  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2); }\n\n#sp-separator-hover {\n  display: none; }\n\n.sp-separator:hover #sp-separator-hover {\n  display: block; }\n\n.sp-separator .sp-someinfo {\n  position: absolute !important;\n  right: 10px !important;\n  font-size: 12px !important;\n  font-style: italic !important;\n  background: none !important; }\n\n.sp-separator img {\n  vertical-align: middle !important;\n  cursor: pointer !important;\n  padding: 0 !important;\n  margin: 0 5px !important;\n  border: none !important;\n  display: inline-block !important;\n  float: none !important;\n  width: auto;\n  height: auto; }\n\n.sp-separator a {\n  margin: 0 20px 0 -6px !important;\n  display: inline !important;\n  text-shadow: #fff 0 1px 0 !important;\n  background: none !important;\n  color: #595959 !important; }\n\n.sp-separator input {\n  padding: 0 !important;\n  line-height: 23px !important; }\n\n.sp-separator .sp-md-span {\n  font-weight: bold !important;\n  margin: 0 20px !important; }\n\n#sp-sp-md-number {\n  width: 6ch !important;\n  vertical-align: middle !important;\n  display: inline-block !important;\n  text-align: left !important; }\n";

	var _wcImport3 = ".sp-prefs-spinner {\n  margin: 40px auto;\n  width: 100%;\n  height: 50px;\n  text-align: center;\n  font-size: 10px; }\n\n.sp-prefs-spinner > div {\n  background-color: #333;\n  height: 100%;\n  width: 25%;\n  display: inline-block;\n  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n  animation: sk-stretchdelay 1.2s infinite ease-in-out; }\n\n.sp-prefs-spinner .rect2 {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.sp-prefs-spinner .rect3 {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n\n.sp-prefs-spinner .rect4 {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.sp-prefs-spinner .rect5 {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n@-webkit-keyframes sk-stretchdelay {\n  0%,\n  40%,\n  100% {\n    -webkit-transform: scaleY(0.4); }\n  20% {\n    -webkit-transform: scaleY(1); } }\n\n@keyframes sk-stretchdelay {\n  0%,\n  40%,\n  100% {\n    transform: scaleY(0.4);\n    -webkit-transform: scaleY(0.4); }\n  20% {\n    transform: scaleY(1);\n    -webkit-transform: scaleY(1); } }\n";

	var _wcImport2 = "@charset \"UTF-8\";\n#sp-prefs-setup {\n  z-index: 2147483647;\n  padding: 20px 30px;\n  box-sizing: content-box;\n  border-radius: 3px !important;\n  border: 1px solid #a0a0a0 !important;\n  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.3) !important;\n  background: -moz-linear-gradient(top, #fcfcfc, #f2f2f7 100%) !important;\n  background: -webkit-gradient(linear, 0 0, 0 100%, from(#fcfcfc), to(#f2f2f7)) !important;\n  font-family: 'Arial', 'sans-serif' !important;\n  color: transparent;\n  max-height: 80%;\n  overflow: auto; }\n\n#sp-prefs-setup * {\n  color: black;\n  text-align: left;\n  line-height: normal;\n  font-size: 12px;\n  min-height: 12px; }\n\n#sp-prefs-setup a {\n  color: black;\n  text-decoration: underline; }\n\n#sp-prefs-setup div {\n  text-align: center;\n  font-weight: bold;\n  font-size: 15px; }\n\n#sp-prefs-setup ul {\n  margin: 15px 0 15px 0;\n  padding: 0;\n  list-style: none;\n  background: none;\n  border: 0; }\n\n#sp-prefs-setup input,\n#sp-prefs-setup select {\n  border: 1px solid gray;\n  padding: 2px;\n  background: white;\n  margin: 0px;\n  height: auto; }\n\n#sp-prefs-setup input[type='checkbox'] {\n  cursor: pointer !important;\n  visibility: visible !important;\n  position: static !important; }\n\n#sp-prefs-setup input.inputShift {\n  margin-left: 2px; }\n\n#sp-prefs-setup li {\n  margin: 0;\n  padding: 5px 0;\n  vertical-align: middle;\n  background: none;\n  border: 0;\n  font-size: 12px; }\n\n#sp-prefs-setup button {\n  margin: 0 10px;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #f9f9f9 !important;\n  border: 1px solid #ccc !important;\n  box-shadow: inset 0 10px 5px white !important;\n  border-radius: 3px !important;\n  padding: 3px 3px !important; }\n\n#sp-prefs-setup textarea {\n  width: 98%;\n  height: 60px;\n  margin: 3px 0;\n  font-weight: 50;\n  background: white; }\n\n#sp-prefs-setup b {\n  font-weight: bold;\n  font-family: '微软雅黑', sans-serif; }\n\n#sp-prefs-setup button:disabled {\n  color: gray; }\n\n#sp-prefs-setup label {\n  cursor: pointer;\n  user-select: none;\n  display: inline; }\n\n#sp-prefs-setup label input[type='checkbox'] {\n  vertical-align: middle; }\n";

	var _wcImport = "#sp-fw-container {\n  z-index: 999999 !important;\n  text-align: left !important; }\n  @media print {\n    #sp-fw-container {\n      display: none; } }\n\n#sp-fw-container * {\n  font-size: 13px !important;\n  color: black !important;\n  float: none !important;\n  line-height: 13px !important;\n  width: auto; }\n\n#sp-fw-main-head {\n  position: relative !important;\n  top: 0 !important;\n  left: 0 !important; }\n\n#sp-fw-span-info {\n  position: absolute !important;\n  right: 1px !important;\n  top: 0 !important;\n  font-size: 11px !important;\n  line-height: 11px !important;\n  background: none !important;\n  font-style: italic !important;\n  color: #5a5a5a !important;\n  text-shadow: white 0px 1px 1px !important; }\n\n#sp-fw-main select {\n  background: white;\n  height: auto; }\n\n#sp-fw-container input {\n  vertical-align: middle !important;\n  display: inline-block !important;\n  outline: none !important;\n  padding: 0px !important;\n  margin: 0 !important;\n  margin-right: 3px !important;\n  background: white;\n  border: 1px solid gray;\n  cursor: pointer !important;\n  height: auto; }\n\n#sp-fw-container input[type='number'] {\n  width: 6ch !important;\n  text-align: left !important;\n  margin: 0 3px !important; }\n\n#sp-fw-container input[type='number']:hover::-webkit-inner-spin-button {\n  height: 60px; }\n\n#sp-fw-container input[type='checkbox'] {\n  position: static !important; }\n\n#sp-fw-container input[type='button'] {\n  width: auto !important;\n  height: auto !important; }\n\n#sp-fw-container li {\n  list-style: none !important;\n  margin: 3px 0 !important;\n  border: none !important;\n  float: none !important; }\n\n#sp-fw-container fieldset {\n  border: 2px groove #ccc !important;\n  -moz-border-radius: 3px !important;\n  border-radius: 3px !important;\n  padding: 4px 9px 6px 9px !important;\n  margin: 2px !important;\n  display: block !important;\n  width: auto !important;\n  height: auto !important; }\n\n#sp-fw-container legend {\n  line-height: 20px !important;\n  margin-bottom: 0px !important; }\n\n#sp-fw-container fieldset > ul {\n  padding: 0 !important;\n  margin: 0 !important; }\n\n#sp-fw-container ul#sp-fw-a_useiframe-extend {\n  padding-left: 40px !important; }\n\n#sp-fw-rect {\n  position: relative !important;\n  top: 0 !important;\n  left: 0 !important;\n  float: right !important;\n  height: 10px !important;\n  width: 10px !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  -moz-border-radius: 3px !important;\n  border-radius: 3px !important;\n  border: 1px solid white !important;\n  -webkit-box-shadow: inset 0 5px 0 rgba(255, 255, 255, 0.3), 0 0 3px rgba(0, 0, 0, 0.8) !important;\n  -moz-box-shadow: inset 0 5px 0 rgba(255, 255, 255, 0.3), 0 0 3px rgba(0, 0, 0, 0.8) !important;\n  box-shadow: inset 0 5px 0 rgba(255, 255, 255, 0.3), 0 0 3px rgba(0, 0, 0, 0.8) !important;\n  opacity: 0.8 !important; }\n\n#sp-fw-dot,\n#sp-fw-cur-mode {\n  position: absolute !important;\n  z-index: 9999 !important;\n  width: 5px !important;\n  height: 5px !important;\n  padding: 0 !important;\n  -moz-border-radius: 3px !important;\n  border-radius: 3px !important;\n  border: 1px solid white !important;\n  opacity: 1 !important;\n  -webkit-box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.3), inset 0 2px 1px rgba(255, 255, 255, 0.3), 0px 1px 2px rgba(0, 0, 0, 0.9) !important;\n  -moz-box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.3), inset 0 2px 1px rgba(255, 255, 255, 0.3), 0px 1px 2px rgba(0, 0, 0, 0.9) !important;\n  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.3), inset 0 2px 1px rgba(255, 255, 255, 0.3), 0px 1px 2px rgba(0, 0, 0, 0.9) !important; }\n\n#sp-fw-dot {\n  right: -3px !important;\n  top: -3px !important; }\n\n#sp-fw-cur-mode {\n  left: -3px !important;\n  top: -3px !important;\n  width: 6px !important;\n  height: 6px !important; }\n\n#sp-fw-content {\n  padding: 0 !important;\n  margin: 5px 5px 0 0 !important;\n  -moz-border-radius: 3px !important;\n  border-radius: 3px !important;\n  border: 1px solid #a0a0a0 !important;\n  -webkit-box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.3) !important;\n  -moz-box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.3) !important;\n  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.3) !important; }\n\n#sp-fw-main {\n  padding: 5px !important;\n  border: 1px solid white !important;\n  -moz-border-radius: 3px !important;\n  border-radius: 3px !important;\n  background-color: #f2f2f7 !important;\n  background: -moz-linear-gradient(top, #fcfcfc, #f2f2f7 100%) !important;\n  background: -webkit-gradient(linear, 0 0, 0 100%, from(#fcfcfc), to(#f2f2f7)) !important; }\n\n#sp-fw-foot {\n  position: relative !important;\n  left: 0 !important;\n  right: 0 !important;\n  top: 2px !important;\n  padding-left: 2px;\n  min-height: 20px !important; }\n\n#sp-fw-container .sp-fw-spanbutton {\n  padding: 2px 3px !important;\n  border: 1px solid #ccc !important;\n  -moz-border-radius: 3px !important;\n  border-radius: 3px !important;\n  cursor: pointer !important;\n  background-color: #f9f9f9 !important;\n  -webkit-box-shadow: inset 0 10px 5px white !important;\n  -moz-box-shadow: inset 0 10px 5px white !important;\n  box-shadow: inset 0 10px 5px white !important;\n  display: inline-block; }\n\n#sp-fw-container #sp-fw-savebutton {\n  position: absolute !important;\n  right: 2px !important; }\n\n#sp-fw-container label {\n  cursor: pointer;\n  user-select: none;\n  display: inline; }\n";

	var userAgentRules = [['aol', /AOLShield\/([0-9\._]+)/], ['edge', /Edge\/([0-9\._]+)/], ['edge-ios', /EdgiOS\/([0-9\._]+)/], ['yandexbrowser', /YaBrowser\/([0-9\._]+)/], ['kakaotalk', /KAKAOTALK\s([0-9\.]+)/], ['samsung', /SamsungBrowser\/([0-9\.]+)/], ['silk', /\bSilk\/([0-9._-]+)\b/], ['miui', /MiuiBrowser\/([0-9\.]+)$/], ['beaker', /BeakerBrowser\/([0-9\.]+)/], ['edge-chromium', /Edg\/([0-9\.]+)/], ['chromium-webview', /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ['chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ['phantomjs', /PhantomJS\/([0-9\.]+)(:?\s|$)/], ['crios', /CriOS\/([0-9\.]+)(:?\s|$)/], ['waterfox', /Waterfox\/([0-9\.]+)(?:\s|$)/], ['firefox', /Firefox\/([0-9\.]+)(?:\s|$)/], ['fxios', /FxiOS\/([0-9\.]+)/], ['opera-mini', /Opera Mini.*Version\/([0-9\.]+)/], ['opera', /Opera\/([0-9\.]+)(?:\s|$)/], ['opera', /OPR\/([0-9\.]+)(:?\s|$)/], ['ie', /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/], ['ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/], ['ie', /MSIE\s(7\.0)/], ['bb10', /BB10;\sTouch.*Version\/([0-9\.]+)/], ['android', /Android\s([0-9\.]+)/], ['ios', /Version\/([0-9\._]+).*Mobile.*Safari.*/], ['safari', /Version\/([0-9\._]+).*Safari/], ['facebook', /FBAV\/([0-9\.]+)/], ['instagram', /Instagram\s([0-9\.]+)/], ['ios-webview', /AppleWebKit\/([0-9\.]+).*Mobile/], ['ios-webview', /AppleWebKit\/([0-9\.]+).*Gecko\)$/]];
	var REQUIRED_VERSION_PARTS = 3;

	function matchUserAgent(ua) {
	  // opted for using reduce here rather than Array#first with a regex.test call
	  // this is primarily because using the reduce we only perform the regex
	  // execution once rather than once for the test and for the exec again below
	  // probably something that needs to be benchmarked though
	  return ua !== '' && userAgentRules.reduce(function (matched, _a) {
	    var browser = _a[0],
	        regex = _a[1];

	    if (matched) {
	      return matched;
	    }

	    var uaMatch = regex.exec(ua);
	    return !!uaMatch && [browser, uaMatch];
	  }, false);
	}

	function parseUserAgent(ua) {
	  var matchedRule = matchUserAgent(ua);

	  if (!matchedRule) {
	    return {
	      name: null,
	      version: null
	    };
	  }

	  var _matchedRule = slicedToArray(matchedRule, 2),
	      name = _matchedRule[0],
	      match = _matchedRule[1];

	  var versionParts = match[1] && match[1].split(/[._]/).slice(0, 3);

	  if (!versionParts) {
	    versionParts = ['1'];
	  }

	  if (versionParts.length < REQUIRED_VERSION_PARTS) {
	    for (var i = 0; i < REQUIRED_VERSION_PARTS - versionParts.length; i++) {
	      versionParts.push('0');
	    }
	  }

	  var version = versionParts.join('.');
	  return {
	    name,
	    version
	  };
	} // above functions are modified from https://www.npmjs.com/package/detect-browser


	var BROWSER = parseUserAgent(navigator.userAgent);
	var INFO = GM.info || GM_info;

	if (!('scriptHandler' in INFO) || !('version' in INFO)) {
	  console.warn('[Super-preloader] You may use an unsupported userscript manager');

	  if (!('scriptHander' in INFO)) {
	    INFO.scriptHandler = 'Greasemonkey'; // GM3's GM_info API doesn't provide scriptHander
	  }
	}

	var SCRIPT_MANAGER = {
	  name: INFO.scriptHandler,
	  version: INFO.version
	};

	var compareVersions$1 = {exports: {}};

	/* global define */

	(function (module, exports) {
	(function (root, factory) {
	  /* istanbul ignore next */
	  {
	    module.exports = factory();
	  }
	}(this, function () {

	  var semver = /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;

	  function indexOrEnd(str, q) {
	    return str.indexOf(q) === -1 ? str.length : str.indexOf(q);
	  }

	  function split(v) {
	    var c = v.replace(/^v/, '').replace(/\+.*$/, '');
	    var patchIndex = indexOrEnd(c, '-');
	    var arr = c.substring(0, patchIndex).split('.');
	    arr.push(c.substring(patchIndex + 1));
	    return arr;
	  }

	  function tryParse(v) {
	    return isNaN(Number(v)) ? v : Number(v);
	  }

	  function validate(version) {
	    if (typeof version !== 'string') {
	      throw new TypeError('Invalid argument expected string');
	    }
	    if (!semver.test(version)) {
	      throw new Error('Invalid argument not valid semver (\''+version+'\' received)');
	    }
	  }

	  function compareVersions(v1, v2) {
	    [v1, v2].forEach(validate);

	    var s1 = split(v1);
	    var s2 = split(v2);

	    for (var i = 0; i < Math.max(s1.length - 1, s2.length - 1); i++) {
	      var n1 = parseInt(s1[i] || 0, 10);
	      var n2 = parseInt(s2[i] || 0, 10);

	      if (n1 > n2) return 1;
	      if (n2 > n1) return -1;
	    }

	    var sp1 = s1[s1.length - 1];
	    var sp2 = s2[s2.length - 1];

	    if (sp1 && sp2) {
	      var p1 = sp1.split('.').map(tryParse);
	      var p2 = sp2.split('.').map(tryParse);

	      for (i = 0; i < Math.max(p1.length, p2.length); i++) {
	        if (p1[i] === undefined || typeof p2[i] === 'string' && typeof p1[i] === 'number') return -1;
	        if (p2[i] === undefined || typeof p1[i] === 'string' && typeof p2[i] === 'number') return 1;

	        if (p1[i] > p2[i]) return 1;
	        if (p2[i] > p1[i]) return -1;
	      }
	    } else if (sp1 || sp2) {
	      return sp1 ? -1 : 1;
	    }

	    return 0;
	  }
	  var allowedOperators = [
	    '>',
	    '>=',
	    '=',
	    '<',
	    '<='
	  ];

	  var operatorResMap = {
	    '>': [1],
	    '>=': [0, 1],
	    '=': [0],
	    '<=': [-1, 0],
	    '<': [-1]
	  };

	  function validateOperator(op) {
	    if (typeof op !== 'string') {
	      throw new TypeError('Invalid operator type, expected string but got ' + typeof op);
	    }
	    if (allowedOperators.indexOf(op) === -1) {
	      throw new TypeError('Invalid operator, expected one of ' + allowedOperators.join('|'));
	    }
	  }

	  compareVersions.validate = function(version) {
	    return typeof version === 'string' && semver.test(version);
	  };

	  compareVersions.compare = function (v1, v2, operator) {
	    // Validate operator
	    validateOperator(operator);

	    // since result of compareVersions can only be -1 or 0 or 1
	    // a simple map can be used to replace switch
	    var res = compareVersions(v1, v2);
	    return operatorResMap[operator].indexOf(res) > -1;
	  };

	  return compareVersions;
	}));
	}(compareVersions$1));

	var compareVersions = compareVersions$1.exports;

	var loglevel = {exports: {}};

	/*
	* loglevel - https://github.com/pimterry/loglevel
	*
	* Copyright (c) 2013 Tim Perry
	* Licensed under the MIT license.
	*/

	(function (module) {
	(function (root, definition) {
	    if (module.exports) {
	        module.exports = definition();
	    } else {
	        root.log = definition();
	    }
	}(this, function () {

	    // Slightly dubious tricks to cut down minimized file size
	    var noop = function() {};
	    var undefinedType = "undefined";
	    var isIE = (typeof window !== undefinedType) && (typeof window.navigator !== undefinedType) && (
	        /Trident\/|MSIE /.test(window.navigator.userAgent)
	    );

	    var logMethods = [
	        "trace",
	        "debug",
	        "info",
	        "warn",
	        "error"
	    ];

	    // Cross-browser bind equivalent that works at least back to IE6
	    function bindMethod(obj, methodName) {
	        var method = obj[methodName];
	        if (typeof method.bind === 'function') {
	            return method.bind(obj);
	        } else {
	            try {
	                return Function.prototype.bind.call(method, obj);
	            } catch (e) {
	                // Missing bind shim or IE8 + Modernizr, fallback to wrapping
	                return function() {
	                    return Function.prototype.apply.apply(method, [obj, arguments]);
	                };
	            }
	        }
	    }

	    // Trace() doesn't print the message in IE, so for that case we need to wrap it
	    function traceForIE() {
	        if (console.log) {
	            if (console.log.apply) {
	                console.log.apply(console, arguments);
	            } else {
	                // In old IE, native console methods themselves don't have apply().
	                Function.prototype.apply.apply(console.log, [console, arguments]);
	            }
	        }
	        if (console.trace) console.trace();
	    }

	    // Build the best logging method possible for this env
	    // Wherever possible we want to bind, not wrap, to preserve stack traces
	    function realMethod(methodName) {
	        if (methodName === 'debug') {
	            methodName = 'log';
	        }

	        if (typeof console === undefinedType) {
	            return false; // No method possible, for now - fixed later by enableLoggingWhenConsoleArrives
	        } else if (methodName === 'trace' && isIE) {
	            return traceForIE;
	        } else if (console[methodName] !== undefined) {
	            return bindMethod(console, methodName);
	        } else if (console.log !== undefined) {
	            return bindMethod(console, 'log');
	        } else {
	            return noop;
	        }
	    }

	    // These private functions always need `this` to be set properly

	    function replaceLoggingMethods(level, loggerName) {
	        /*jshint validthis:true */
	        for (var i = 0; i < logMethods.length; i++) {
	            var methodName = logMethods[i];
	            this[methodName] = (i < level) ?
	                noop :
	                this.methodFactory(methodName, level, loggerName);
	        }

	        // Define log.log as an alias for log.debug
	        this.log = this.debug;
	    }

	    // In old IE versions, the console isn't present until you first open it.
	    // We build realMethod() replacements here that regenerate logging methods
	    function enableLoggingWhenConsoleArrives(methodName, level, loggerName) {
	        return function () {
	            if (typeof console !== undefinedType) {
	                replaceLoggingMethods.call(this, level, loggerName);
	                this[methodName].apply(this, arguments);
	            }
	        };
	    }

	    // By default, we use closely bound real methods wherever possible, and
	    // otherwise we wait for a console to appear, and then try again.
	    function defaultMethodFactory(methodName, level, loggerName) {
	        /*jshint validthis:true */
	        return realMethod(methodName) ||
	               enableLoggingWhenConsoleArrives.apply(this, arguments);
	    }

	    function Logger(name, defaultLevel, factory) {
	      var self = this;
	      var currentLevel;

	      var storageKey = "loglevel";
	      if (typeof name === "string") {
	        storageKey += ":" + name;
	      } else if (typeof name === "symbol") {
	        storageKey = undefined;
	      }

	      function persistLevelIfPossible(levelNum) {
	          var levelName = (logMethods[levelNum] || 'silent').toUpperCase();

	          if (typeof window === undefinedType || !storageKey) return;

	          // Use localStorage if available
	          try {
	              window.localStorage[storageKey] = levelName;
	              return;
	          } catch (ignore) {}

	          // Use session cookie as fallback
	          try {
	              window.document.cookie =
	                encodeURIComponent(storageKey) + "=" + levelName + ";";
	          } catch (ignore) {}
	      }

	      function getPersistedLevel() {
	          var storedLevel;

	          if (typeof window === undefinedType || !storageKey) return;

	          try {
	              storedLevel = window.localStorage[storageKey];
	          } catch (ignore) {}

	          // Fallback to cookies if local storage gives us nothing
	          if (typeof storedLevel === undefinedType) {
	              try {
	                  var cookie = window.document.cookie;
	                  var location = cookie.indexOf(
	                      encodeURIComponent(storageKey) + "=");
	                  if (location !== -1) {
	                      storedLevel = /^([^;]+)/.exec(cookie.slice(location))[1];
	                  }
	              } catch (ignore) {}
	          }

	          // If the stored level is not valid, treat it as if nothing was stored.
	          if (self.levels[storedLevel] === undefined) {
	              storedLevel = undefined;
	          }

	          return storedLevel;
	      }

	      /*
	       *
	       * Public logger API - see https://github.com/pimterry/loglevel for details
	       *
	       */

	      self.name = name;

	      self.levels = { "TRACE": 0, "DEBUG": 1, "INFO": 2, "WARN": 3,
	          "ERROR": 4, "SILENT": 5};

	      self.methodFactory = factory || defaultMethodFactory;

	      self.getLevel = function () {
	          return currentLevel;
	      };

	      self.setLevel = function (level, persist) {
	          if (typeof level === "string" && self.levels[level.toUpperCase()] !== undefined) {
	              level = self.levels[level.toUpperCase()];
	          }
	          if (typeof level === "number" && level >= 0 && level <= self.levels.SILENT) {
	              currentLevel = level;
	              if (persist !== false) {  // defaults to true
	                  persistLevelIfPossible(level);
	              }
	              replaceLoggingMethods.call(self, level, name);
	              if (typeof console === undefinedType && level < self.levels.SILENT) {
	                  return "No console available for logging";
	              }
	          } else {
	              throw "log.setLevel() called with invalid level: " + level;
	          }
	      };

	      self.setDefaultLevel = function (level) {
	          if (!getPersistedLevel()) {
	              self.setLevel(level, false);
	          }
	      };

	      self.enableAll = function(persist) {
	          self.setLevel(self.levels.TRACE, persist);
	      };

	      self.disableAll = function(persist) {
	          self.setLevel(self.levels.SILENT, persist);
	      };

	      // Initialize with the right level
	      var initialLevel = getPersistedLevel();
	      if (initialLevel == null) {
	          initialLevel = defaultLevel == null ? "WARN" : defaultLevel;
	      }
	      self.setLevel(initialLevel, false);
	    }

	    /*
	     *
	     * Top-level API
	     *
	     */

	    var defaultLogger = new Logger();

	    var _loggersByName = {};
	    defaultLogger.getLogger = function getLogger(name) {
	        if ((typeof name !== "symbol" && typeof name !== "string") || name === "") {
	          throw new TypeError("You must supply a name when creating a logger.");
	        }

	        var logger = _loggersByName[name];
	        if (!logger) {
	          logger = _loggersByName[name] = new Logger(
	            name, defaultLogger.getLevel(), defaultLogger.methodFactory);
	        }
	        return logger;
	    };

	    // Grab the current global log variable in case of overwrite
	    var _log = (typeof window !== undefinedType) ? window.log : undefined;
	    defaultLogger.noConflict = function() {
	        if (typeof window !== undefinedType &&
	               window.log === defaultLogger) {
	            window.log = _log;
	        }

	        return defaultLogger;
	    };

	    defaultLogger.getLoggers = function getLoggers() {
	        return _loggersByName;
	    };

	    // ES6 default export, for compatibility
	    defaultLogger['default'] = defaultLogger;

	    return defaultLogger;
	}));
	}(loglevel));

	var log = loglevel.exports;

	var logger = log.noConflict();

	function emoji(unifiedValue) {
	  if (String.fromCodePoint) {
	    var emoji = parseInt(unifiedValue, 16);
	    return String.fromCodePoint(emoji);
	  } else {
	    logger.error("[Super-preloader]", 'Shame on your browser!');
	    return '';
	  }
	}

	var name="super-preloader";var version="6.16.5";var description="Super-preloader";var main="dist/Super_preloaderPlus_one_New.user.js";var author="Mach6";var license="GPL-3.0";var bugs={url:"https://github.com/machsix/Super-preloader/issues"};var homepage="https://github.com/machsix/Super-preloader";var directories={doc:"docs"};var repository={type:"git",url:"git+https://github.com/machsix/Super-preloader.git"};var scripts={lint:"eslint \"dist/*.json\" \"src/**/*.js\" \"ci/*.js\" \"rollup.config.js\"",format:"prettier --write \"dist/*.json\" \"src/**/*.{js,css}\" \"ci/*.js\" \"rollup.config.js\" \"docs/**/*.{js,md}\"","format:check":"prettier --check \"dist/*.json\" \"src/**/*.{js,css}\" \"ci/*.js\" \"rollup.config.js\" \"docs/**/*.{js,md}\"","format:staged":"pretty-quick --verbose --staged --write \"dist/*.json\" \"src/**/*.{js,css}\" \"ci/*.js\" \"rollup.config.js\" \"docs/**/*.{js,md}\"",check:"npm run lint && npm run typecheck && npm run format:staged",test:"cd test && node test.js",dev:"rollup -c --dev -w",build:"rollup -c","docs:dev":"vuepress dev docs","docs:build":"vuepress build docs","docs:publish":"npm run docs:build && bash ./ci/gen_ghpage.sh",preversion:"npm run check",version:"npm run build  && git add dist/*.js && git add dist/*.json",postversion:"git add package.json package-lock.json && npm run test","publish:patch":"npm --no-git-tag-version version patch",publish:"npm --no-git-tag-version version minor",typecheck:"tsc -p jsconfig.json --noEmit"};var husky={hooks:{"pre-commit":"npm run check"}};var keywords=["userscript"];var devDependencies={"@vuepress/plugin-back-to-top":"1.8.2","@vuepress/plugin-google-analytics":"1.8.2","@vuepress/plugin-pwa":"1.8.2",typescript:"4.4.4",vuepress:"1.8.2"};var dependencies={"@babel/core":"7.15.8","@babel/plugin-transform-runtime":"7.15.8","@babel/preset-env":"7.15.8","@rollup/plugin-babel":"5.3.0","@rollup/plugin-commonjs":"21.0.0","@rollup/plugin-json":"4.1.0","@rollup/plugin-node-resolve":"13.0.5","@types/greasemonkey":"4.0.2","@types/lodash":"4.14.175","babel-plugin-lodash":"3.3.4","babel-plugin-wildcard":"7.0.0","compare-versions":"3.6.0",displacejs:"https://github.com/machsix/displace.git#v1.4.0",eslint:"8.0.1","eslint-config-prettier":"8.3.0","eslint-plugin-json":"3.1.0","eslint-plugin-prettier":"4.0.0","extract-zip":"2.0.1",got:"11.8.2",husky:"7.0.2",lodash:"4.17.21",loglevel:"1.7.1",prettier:"2.4.1","pretty-quick":"3.1.1",puppeteer:"2.1.0","node-sass":"6.0.1",rollup:"2.58.0","rollup-plugin-banner":"git+https://git@github.com/machsix/rollup-plugin-banner.git#v0.2.2","rollup-plugin-dev":"2.0.0","rollup-plugin-ejs":"2.2.0","rollup-plugin-re":"1.0.7","rollup-plugin-scss-string":"0.1.0",yargs:"17.2.1"};var pkg = {name:name,version:version,description:description,main:main,author:author,license:license,bugs:bugs,homepage:homepage,directories:directories,repository:repository,scripts:scripts,husky:husky,keywords:keywords,devDependencies:devDependencies,dependencies:dependencies};

	// Information of script

	var now = new Date();
	var SCRIPT_INFO = {
	  name: 'Super_preloaderPlus_one_New',
	  shortname: 'Super-preloader',
	  'name-CN': 'Super_preloaderPlus_one_改',
	  namespace: 'https://github.com/machsix',
	  icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAvCAYAAABOtfLKAAAL9UlEQVR42s1ZC1CU1xXee/9/dwGFFRU1SQURfCSaCCoaX6Py9gmDqBSN4zuKWvEFPqpGDGrjtLFJGzXO1FgfqNUYp2lim9hWGzH1hcT3pDHK2FidGtvqaIIi/b71/viz/wLL6tjuzJnz73/vf+455zv33HPvtSUm9hMgqUgjf1qUnBwvbeoXHBwcqGlaBynFSCHEa6C3pJT9MjPThY/yhM1khP1p8okTx2jHjx8QQUGBkVB6EmgvDLgCugeqVLSxd+8edhjti1xNGfOoYdCgFG3gwGSdPCUl3iLocfnQoQO0zZvXS6fT8aymyYVQ+JxS/D5Q4fM2GLYFvAJ8W2zsSzp0oB7QJ0F/pF9yNbkWZMaMyZLt2kUHhIU1DYyKigxs2zbanpTU315ZWSkqKx8IhgOfyZcsyddycibK1NREnwxJSOhrnz17moyN7eSAkkNAnysjboK267o2zOl0PtenT08d4ZZA40BbCwsXy/v3bwjKgW721q1bBTZrFhYE3QKyszMl5FqQgSHZbsghYBMG+gP4h+C/Af8V+BrQYgySA29m2O32PqA2LldIWHj4D5zvvPNTSQO3bt0gJ0x4RcIBFkN2794s4CQX5UDmvxhOeN4NmX2pIL+fPHmsBmfZdF1PRXs5kDqBPktAP2fIge+iXkq/TdA3YsWK14QFmWPHDgoITlIx+wB0hwLVc6UHse0qqASC94CvgGdHQ4mY0NBGTRYsmC2JIL1Kw/bt2y1cLlcY+q1THv8GY00LDm4YfOvW30Va2qAqww8d+pR6JKPPXY8xHyh97qjne9T3yJE/CwsyZ84ct9nteqry2Mfo2BPeTwASQ6go3s3A83K0b8Dz72iIMuh704Dfgv5KT4LSGjZs8FxFxU3RpEnjUH6nlDgNoxOBghw2LE33DMkvvvjcjAydNRO6jAYNgX4J0KUn3v2eeqJfyokTxTYLMsojSUasLl6cpxlzxMyHDBmgt2jRPIAhBmPb0mAInwqi1w8rgyqVnFN4vwJ8LagCVIr+3RhKSC4WQ8iLixUySo8DBz6Sanwy29Kl+ZLv2c5+xcX7rchcvHjWQOY+s0jnzp2QRarHPogJQRswIEmfMmW8LChYKA1DMzPTZOPGoY3hrVgMMhVy3gddN6H2FecalTLNKQsvLa1C5r4pm7kNJ+/SJUbH+yK2o1/yqVNHHyFj/kGJFOWRbd27d3XAez6nXSiIJPJDuXPne24DIyMjgiAvRk3aSoToMoshdSNT1K1bF+iRwHZ3euZ/6qeQSeFYVZGDwTri5StoLMTzHxnXZmT8X08GMkwpfzaNAZ9bVnbOCIlakDnsKzLU80/Um3OKdtjw57KKZ5UxwK3I+MUvXDhJtPMoE3zeuXMlDInHRKYzkdnqoW8F7XAjxFQJy3IRCj+uYc74xUtKDgkiopCZd/JkcZ3IoI/Pc4YVBPXG8z9oh01ZdrJ582Yh8Ej/+swZJgMkAi0jY4jX9vPnSzyQOeEHMp0NPXQiExfX2Txn4ps1axpC/UE0xgaviZNYwBohm6X4igzqI23OnOkaaqwIruwjR2bIJ4FMSYknMp1qy2ZJISHBjaB/qRmZUqZVWJroCzJZWcNkRsZQ1lADIfgjh8MRNWPGq5p3ZGS+Qibv7NnjTxqZJFQcjX1EJt5SYxUULJJt2kQFos9kxiroSmBgYNSqVcsEPcfJavCZM6do8F53GJQH3m3WrBzNaEeImg3RDU40iYxZDzMyXbtakcFz/ZChIczl7KdW9dvq20tEBtWzHhPzIsPAYeIMR53rCxda/ud7Tuq+fXsxO1Uz5Kkhk5MzSQYGBkQZgkwr+230/63ah2ynAj7wzRgrhousJzInTliQsVdHJrY2ZGw+IbN69esS7Wlou+GliuY39+pBt1mKFBVtFHUhAyRqRaZRI1f9kWH2wjsH9zPo86XJkGsQOgqUgO+T6BATT1TvE0z/yeMbNAhqOnx4umZF5rP6IhNaFzJFRMZzyzx4cKq2d2+R5KSGwEPGnMEOMdxcI5l5RER4ELYCTVq1Cg8yv8/KyuA81HxAhsaYkbHXgozwigzzOT3hbaEsKzsrUAG3VkXkJcyl6IUL51hCprCQm0Q5lnsY8PHMhEZ7Tfz48TqRsVdHJsQ/ZAxOj7799huSoYJvcgMCnC1ZCXgqdv3611xn5quqOe/q1a9sFgP8QEZKH5DR9dqQsRqEAxAN/ZhyOUktimE1r1YBoCIWdSPzl3oh43I9QgZUf2RMCnARpNFeFTtz5piNiChk5p4+fVTUjcx+n5HBFjrZb2TqUOSJIHPsWI3I6I+LjL+GKGSOiv8RMsG1IeMXv3jxNJHJU8jkX758zgdkDtaKTFycD8igxqkJGb8NwkIrqRictYGOQn0ma+tPOnx4v6DHHxpjQYbGeCIT+lSQIV+zZpVkobl+/RrvhpjJigz1+P9ABoumwELcF4MvB++zcuUyNWeslJ4+CNX1vwUVgscTTMhYEkCtyPBPSMiTR+bSpbPV5gxPZ8wGUD6OpgSQ46lnsMNhfwn9MkHu00/vyHT2Cxn74yLDhRV7nRjev5AbtVhSUj99/vxZcty40RJ1XVu0/wje/sTj0JBXGr/s3ftlbuRqRMblqhuZrT16xHECu3eMEOaXQVBepxxW21SK/3meBjR4P9OK4Yfx/qZ0KAedgqK/5toEx2YHBAREshYEQY943s3oPXt21+uLzE6c1gRHRLR0UhEexZ4/f1SYz3ypUG7uVMkBMJjXSb1hwy+4ZoyAvI/BM/kdqmcnnocb3gT9kwbg3SBcUbTIz8+V7PeoCr8jxo4dpWF3ase3ATiNaYj+O4zjWRhTKzL3FNyfwAMfqp3hetAKLHxzQNk8xUfV3LFBgwbP4BA9aPr0yVWH7DTciHGc6Aue4nMzRo6C1AVeiP+3QN+pHWd3Khod3doJeS0wbzrS40QG7XM4LuhdhhaI+hjhyFsAFppWZPCyCRR8kVCr3eR/QHeNLbIHldOjoLMYYB8vozD4JAh/GXuX5gwnIrhu3ZsClfWzUDgOc4aTe6OSV8bEwHM60AR+Dzm8pjinxi6vYTd7l3qpPqeYMABCEwsy8EpTXMHZMSEjMXAnKNAVxvXm4TQm2nAM+CpoEScliCf8R6iUx6XQLcqiJ4HgSMR8q2vXvhQIYZ5tbVLHqRWg06AS9jd9SzlllIu+76txFkHOFIYodEiFTr2gUxyN4Hzq1au7jpoyzIIMLAzjBRA2WZLhcuPG14LeJZl/ubk5Gk74nYQXkziK6wcGdXsXcg6YMhIVv8D3CpEKD09fAx1E25tQeAJQ7QNHRlEu7lOdc+fOkJ5jK33ExYulYuXKpciGozREQpg3ZMKys4dXbbCMLMJsBtJxlOTmIPf9DC5HteXLF1UNOHPmVIm1IoShCuXGq0n6jcc13hW+R/s49mP/WbOmSUPR1asLJA4YcZucxHFAHNfNmZZB/avSNIn7KW/InEQohD4U+r3Ys2eLSE8frOMO3r3xat++reP559s6X3ihnYPnXhSkLlOFYQy5GUkcFDqBWgd1vFTJBZBJIzo6MsBbfyOB8Aab8llgdujQ3tGuXRv3uJ06dbTzJnrYsKHa2rU/k8ZZgspmJWZkLjPbgPKZ+0FvwYPvgm8B3w6+G312gYPc2W2TiumfqIk8njGNWI4NCgp6Jjy8ZaChJNpnKWPmGEawnf1gXCy/4/eUQ3mUq+Qze+1StJtOoT6cj9QP9PrDsWUu55oZGW/0QGWQcnUJ+53i9xj/NWSbb1VG+kBdtfdjKlbGFKj/S6DcB6rfzRqyZQXH8Ri3XPV94FVfhUwBBljLQbmOsPTAoFmgdFavLPrA+z0iLQl8IBc+5dF5oDeIGGR9Ri+ZUusdlcIrFb9jSu1l7M/VnN9TDuSNo1yMMZBriGncvqBEvE+hXkq/ybyVo97UH7KW2fibNGmsEYPm+PXkwvjv+SsrOyNYECITubAwtuapCQZYqBa4mzRA8U/xfgFrKvbDPHVxbpSWHhIWodZ5Re61D455tR073hM2ZAmhyhEB8salL3zw4BQxatQIaR4I6T4EiKWCCsmxZwoxt48ePYLlkCHHbw79mWnFfwGWB6omxVHfzgAAAABJRU5ErkJggg==',
	  author: pkg.author,
	  version: pkg.version,
	  license: pkg.license,
	  changelog: `${emoji('1F595')} Baidu`,
	  greasyfork: 'https://greasyfork.org/en/scripts/33522-super-preloaderplus-one-new',
	  updateTime: `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`,
	  homepageURL: pkg.homepage,
	  feedbackURL: pkg.bugs.url,
	  // rewrite storage for these versions
	  rewriteStorage: '6.6.83'
	}; // SCRIPT_INFO.downloadURL = `${SCRIPT_INFO.greasyfork}/code/${SCRIPT_INFO.name}.user.js`;
	// SCRIPT_INFO.metaURL = `${SCRIPT_INFO.greasyfork}/code/${SCRIPT_INFO.name}.meta.js`;

	SCRIPT_INFO.downloadURL = 'https://machsix.github.io/Super-preloader/Super_preloaderPlus_one_New.user.js';
	SCRIPT_INFO.updateURL = SCRIPT_INFO.downloadURL; // New notification to send

	var NOTIFICATION = {
	  title: SCRIPT_INFO.name,
	  image: SCRIPT_INFO.icon,
	  onload: function onload() {},
	  // eslint-disable-next-line no-unused-vars
	  show: function show(oldVersion, newVersion) {
	    return compareVersions(oldVersion, '6.15.1') < 0 && compareVersions(newVersion, '6.15.1') >= 0;
	  },
	  extratext: {
	    zh_CN: '你现在可以修改css自定义外观！',
	    en_US: 'You can now change the appearence by CustomCSS!'
	  }
	}; // Meta for userscript

`// ==UserScript==
// @name         ${SCRIPT_INFO.name}
// @name:zh-CN   ${SCRIPT_INFO['name-CN']}
// @name:zh-TW   ${SCRIPT_INFO['name-CN']}
// @namespace    ${SCRIPT_INFO.namespace}
// @description  Preload and Autopager
// @description:zh-CN  预读+翻页..全加速你的浏览体验
// @description:zh-TW  预读+翻页..全加速你的浏览体验
// @author       ${SCRIPT_INFO.author}
// @contributers alexolog, heroboy, suchunchen, YFdyh000
// @thanksto     ywzhaiqi, NLF
// @version      ${SCRIPT_INFO.version}
// @license      ${SCRIPT_INFO.license}
// @update       ${SCRIPT_INFO.updateTime}
// @homepageURL  ${SCRIPT_INFO.homepageURL}
// @downloadURL  ${SCRIPT_INFO.downloadURL}
// @updateURL    ${SCRIPT_INFO.updateURL}
// @supportURL   ${SCRIPT_INFO.greasyfork}/feedback
// @contributionURL https://ko-fi.com/machsix
// @icon         ${SCRIPT_INFO.icon}
// @require      https://cdn.jsdelivr.net/gh/machsix/gm4-polyfill@3ac89770e4dcb69123c749a71f101fb462eaada8/gm4-polyfill-mach6-legacy.js
// @grant        GM.getValue
// @grant        GM_getValue
// @grant        GM.setValue
// @grant        GM_setValue
// @grant        GM.notification
// @grant        GM_notification
// @grant        GM.xmlHttpRequest
// @grant        GM_xmlhttpRequest
// @grant        GM.info
// @grant        GM_info
// @grant        GM_registerMenuCommand
// @connect      wedata.net
// @connect      github.io
// @run-at       document-idle
// @include      http*
// @exclude      http*://mail.google.com/*
// @exclude      http*://maps.google*
// @exclude      http*://www.google.com/reader*
// @exclude      http*://www.google.com/calendar*
// @exclude      https://docs.google.com/*
// @exclude      http*://app.yinxiang.com/*
// @exclude      http*://www.dropbox.com/*
// @exclude      http*://www.toodledo.com/*
// @exclude      http*://cloud.feedly.com/*
// @exclude      http*://weibo.com/*
// @exclude      http*://w.qq.com/*
// @exclude      http*://web2.qq.com/*
// @exclude      http*://openapi.qzone.qq.com/*
// @exclude      http*://*cloud.vip.xunlei.com/*
// @exclude      http*://www.wumii.com/*
// @exclude      http*://pan.baidu.com/*
// @exclude      http*://yun.baidu.com/*
// @exclude      http*://www.cnbeta.com/*
// @exclude      http*://www.youku.com/
// @exclude      http*://v.youku.com/*
// @exclude      http*://www.iqiyi.com/*
// @exclude      http*://www.duokan.com/reader/*
// @exclude      https://www.kohls.com/*
// @exclude      http*://list.jd.com/*
// @exclude      http*://eclick.baidu.com/*
// @exclude      http*://googleads.g.doubleclick.net/*
// @exclude      http*://pos.baidu.com/*
// @exclude      http*://tpc.googlesyndication.com/*
// @exclude      http*://ad.doubleclick.net/*
// @exclude      http*://ad.agrantsem.com/*
// @exclude      http*://www.youtube.com/embed/*
// @exclude      https://assets.tumblr.com/*
// @exclude      http*://www.paypal.com/*
// @exclude      http*://dash.cloudflare.com/*
// @exclude      http*://assets.tumblr.com/*
// @exclude      http*://www.tumblr.com/video/*
// @exclude      http*://*.awsapps.com/*
// @exlucde      http*://www.commcarehq.org/accounts/login/*gre
// @exclude      http*://simkl.com/*
// ==/UserScript==
`;

	// 动画库
	var Tween = {
	  Linear: function Linear(t, b, c, d) {
	    return c * t / d + b;
	  },
	  Quad: {
	    easeIn: function easeIn(t, b, c, d) {
	      return c * (t /= d) * t + b;
	    },
	    easeOut: function easeOut(t, b, c, d) {
	      return -c * (t /= d) * (t - 2) + b;
	    },
	    easeInOut: function easeInOut(t, b, c, d) {
	      if ((t /= d / 2) < 1) return c / 2 * t * t + b;
	      return -c / 2 * (--t * (t - 2) - 1) + b;
	    }
	  },
	  Cubic: {
	    easeIn: function easeIn(t, b, c, d) {
	      return c * (t /= d) * t * t + b;
	    },
	    easeOut: function easeOut(t, b, c, d) {
	      return c * ((t = t / d - 1) * t * t + 1) + b;
	    },
	    easeInOut: function easeInOut(t, b, c, d) {
	      if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
	      return c / 2 * ((t -= 2) * t * t + 2) + b;
	    }
	  },
	  Quart: {
	    easeIn: function easeIn(t, b, c, d) {
	      return c * (t /= d) * t * t * t + b;
	    },
	    easeOut: function easeOut(t, b, c, d) {
	      return -c * ((t = t / d - 1) * t * t * t - 1) + b;
	    },
	    easeInOut: function easeInOut(t, b, c, d) {
	      if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
	      return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
	    }
	  },
	  Quint: {
	    easeIn: function easeIn(t, b, c, d) {
	      return c * (t /= d) * t * t * t * t + b;
	    },
	    easeOut: function easeOut(t, b, c, d) {
	      return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
	    },
	    easeInOut: function easeInOut(t, b, c, d) {
	      if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
	      return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
	    }
	  },
	  Sine: {
	    easeIn: function easeIn(t, b, c, d) {
	      return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
	    },
	    easeOut: function easeOut(t, b, c, d) {
	      return c * Math.sin(t / d * (Math.PI / 2)) + b;
	    },
	    easeInOut: function easeInOut(t, b, c, d) {
	      return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
	    }
	  },
	  Expo: {
	    easeIn: function easeIn(t, b, c, d) {
	      return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
	    },
	    easeOut: function easeOut(t, b, c, d) {
	      return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
	    },
	    easeInOut: function easeInOut(t, b, c, d) {
	      if (t == 0) return b;
	      if (t == d) return b + c;
	      if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
	      return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
	    }
	  },
	  Circ: {
	    easeIn: function easeIn(t, b, c, d) {
	      return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
	    },
	    easeOut: function easeOut(t, b, c, d) {
	      return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
	    },
	    easeInOut: function easeInOut(t, b, c, d) {
	      if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
	      return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
	    }
	  },
	  Elastic: {
	    easeIn: function easeIn(t, b, c, d, a, p) {
	      if (t == 0) return b;
	      if ((t /= d) == 1) return b + c;
	      if (!p) p = d * 0.3;
	      var s;

	      if (!a || a < Math.abs(c)) {
	        a = c;
	        s = p / 4;
	      } else {
	        s = p / (2 * Math.PI) * Math.asin(c / a);
	      }

	      return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
	    },
	    easeOut: function easeOut(t, b, c, d, a, p) {
	      if (t == 0) return b;
	      if ((t /= d) == 1) return b + c;
	      if (!p) p = d * 0.3;
	      var s;

	      if (!a || a < Math.abs(c)) {
	        a = c;
	        s = p / 4;
	      } else {
	        s = p / (2 * Math.PI) * Math.asin(c / a);
	      }

	      return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
	    },
	    easeInOut: function easeInOut(t, b, c, d, a, p) {
	      if (t == 0) return b;
	      if ((t /= d / 2) == 2) return b + c;
	      if (!p) p = d * (0.3 * 1.5);
	      var s;

	      if (!a || a < Math.abs(c)) {
	        a = c;
	        s = p / 4;
	      } else {
	        s = p / (2 * Math.PI) * Math.asin(c / a);
	      }

	      if (t < 1) return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
	      return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
	    }
	  },
	  Back: {
	    easeIn: function easeIn(t, b, c, d, s) {
	      if (s == undefined) s = 1.70158;
	      return c * (t /= d) * t * ((s + 1) * t - s) + b;
	    },
	    easeOut: function easeOut(t, b, c, d, s) {
	      if (s == undefined) s = 1.70158;
	      return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
	    },
	    easeInOut: function easeInOut(t, b, c, d, s) {
	      if (s == undefined) s = 1.70158;
	      if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
	      return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
	    }
	  },
	  Bounce: {
	    easeIn: function easeIn(t, b, c, d) {
	      return c - Tween.Bounce.easeOut(d - t, 0, c, d) + b;
	    },
	    easeOut: function easeOut(t, b, c, d) {
	      if ((t /= d) < 1 / 2.75) {
	        return c * (7.5625 * t * t) + b;
	      } else if (t < 2 / 2.75) {
	        return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
	      } else if (t < 2.5 / 2.75) {
	        return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
	      } else {
	        return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
	      }
	    },
	    easeInOut: function easeInOut(t, b, c, d) {
	      if (t < d / 2) return Tween.Bounce.easeIn(t * 2, 0, c, d) * 0.5 + b;else return Tween.Bounce.easeOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
	    }
	  }
	};
	var TweenM = ['Linear', 'Quad', 'Cubic', 'Quart', 'Quint', 'Sine', 'Expo', 'Circ', 'Elastic', 'Back', 'Bounce'];
	var TweenEase = ['easeIn', 'easeOut', 'easeInOut'];

	/**
	 * Set multiple attributes of a dom element
	 * @param {object} el dom element
	 * @param {object} attr dom attributes
	 * @returns {null} null
	 */
	function setMultipleAttributes(el, attr) {
	  for (var _i = 0, _Object$entries = Object.entries(attr); _i < _Object$entries.length; _i++) {
	    var _Object$entries$_i = slicedToArray(_Object$entries[_i], 2),
	        key = _Object$entries$_i[0],
	        val = _Object$entries$_i[1];

	    el.setAttribute(key, val);
	  }
	}
	/**
	 * Create a dom element
	 * @param {string} type element type
	 * @param {object} conf configuration of the dom, could be 'attr', 'innnerHTML', 'children', 'eventListner'
	 * @param {Document} doc dom to attach
	 * @returns {HTMLElement} dom element
	 */

	function createDOM(type, conf) {
	  var doc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
	  var e = doc.createElement(type);

	  if (conf.hasOwnProperty('attr')) {
	    setMultipleAttributes(e, conf.attr);
	  }

	  if (conf.hasOwnProperty('innerHTML')) {
	    e.innerHTML = conf.innerHTML;
	  }

	  if (Array.isArray(conf.children)) {
	    if (conf.children.length > 0) {
	      conf.children.forEach(function (c) {
	        e.appendChild(c);
	      });
	    }
	  }

	  if (Array.isArray(conf.eventListener)) {
	    if (conf.eventListener.length > 0) {
	      conf.eventListener.forEach(function (x) {
	        e.addEventListener(x.type, x.listener, x.useCapture || false);
	      });
	    }
	  }

	  return e;
	}
	/**
	 * Get attributes for settings
	 * @param {HTMLElement} obj dom element
	 * @returns {string|boolean|number} dom element main property
	 */

	function getProperty(obj) {
	  if (obj.nodeName === 'INPUT') {
	    switch (obj.type) {
	      case 'checkbox':
	        return !!obj.checked;

	      case 'number':
	        {
	          var min = obj.hasAttribute('min') ? parseInt(obj.min) : undefined;
	          var max = obj.hasAttribute('max') ? parseInt(obj.max) : undefined;
	          if (min >= obj.valueAsNumber) return min;
	          if (max < obj.valueAsNumber) return max;
	          return obj.valueAsNumber;
	        }

	      default:
	        return obj.value;
	    }
	  } else if (obj.nodeName === 'SELECT') {
	    return obj.selectedOptions[0].value;
	  } else if (obj.nodeName === 'TEXTAREA') {
	    return obj.value;
	  } else if (obj.nodeName === 'A') {
	    return obj.href;
	  } else {
	    return obj.innerHTML;
	  }
	}
	/**
	 * Set attributes for settings
	 * @param {object} obj dom element
	 * @param {object} value value set to dom element
	 * @returns {undefined}
	 */

	function setProperty(obj, value) {
	  if (obj.nodeName === 'INPUT') {
	    switch (obj.type) {
	      case 'checkbox':
	        obj.checked = !!value;
	        break;

	      case 'number':
	        {
	          if (obj.hasAttribute('min')) {
	            if (value < obj.min) {
	              value = obj.min;
	            }
	          }

	          if (obj.hasAttribute('max')) {
	            if (value > obj.max) {
	              value = obj.max;
	            }
	          }

	          obj.value = value;
	          break;
	        }

	      default:
	        obj.value = value;
	    }
	  } else if (obj.nodeName === 'SELECT') {
	    for (var i = 0; i < obj.options.length; i++) {
	      if (obj.options[i].value === value) {
	        obj.selectedIndex = i;
	        break;
	      }
	    }
	  } else if (obj.nodeName === 'TEXTAREA') {
	    obj.value = value;
	  } else if (obj.nodeName === 'A') {
	    obj.href = value;
	  } else {
	    obj.innerHTML = value;
	  }
	}

	function _defineProperty$1(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	var defineProperty$2 = _defineProperty$1;

	function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
	  try {
	    var info = gen[key](arg);
	    var value = info.value;
	  } catch (error) {
	    reject(error);
	    return;
	  }

	  if (info.done) {
	    resolve(value);
	  } else {
	    Promise.resolve(value).then(_next, _throw);
	  }
	}

	function _asyncToGenerator(fn) {
	  return function () {
	    var self = this,
	        args = arguments;
	    return new Promise(function (resolve, reject) {
	      var gen = fn.apply(self, args);

	      function _next(value) {
	        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
	      }

	      function _throw(err) {
	        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
	      }

	      _next(undefined);
	    });
	  };
	}

	var asyncToGenerator = _asyncToGenerator;

	var baseGetTag$1 = _baseGetTag,
	    isArray$2 = isArray_1,
	    isObjectLike$2 = isObjectLike_1;

	/** `Object#toString` result references. */
	var stringTag = '[object String]';

	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray$2(value) && isObjectLike$2(value) && baseGetTag$1(value) == stringTag);
	}

	var isString_1 = isString;

	/**
	 * The base implementation of `_.isNaN` without support for number objects.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	 */

	function baseIsNaN$1(value) {
	  return value !== value;
	}

	var _baseIsNaN = baseIsNaN$1;

	/**
	 * A specialized version of `_.indexOf` which performs strict equality
	 * comparisons of values, i.e. `===`.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */

	function strictIndexOf$1(array, value, fromIndex) {
	  var index = fromIndex - 1,
	      length = array.length;

	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}

	var _strictIndexOf = strictIndexOf$1;

	var baseFindIndex = _baseFindIndex,
	    baseIsNaN = _baseIsNaN,
	    strictIndexOf = _strictIndexOf;

	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf$1(array, value, fromIndex) {
	  return value === value
	    ? strictIndexOf(array, value, fromIndex)
	    : baseFindIndex(array, baseIsNaN, fromIndex);
	}

	var _baseIndexOf = baseIndexOf$1;

	var baseIndexOf = _baseIndexOf;

	/**
	 * A specialized version of `_.includes` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludes$1(array, value) {
	  var length = array == null ? 0 : array.length;
	  return !!length && baseIndexOf(array, value, 0) > -1;
	}

	var _arrayIncludes = arrayIncludes$1;

	/**
	 * This function is like `arrayIncludes` except that it accepts a comparator.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @param {Function} comparator The comparator invoked per element.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */

	function arrayIncludesWith$1(array, value, comparator) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (comparator(value, array[index])) {
	      return true;
	    }
	  }
	  return false;
	}

	var _arrayIncludesWith = arrayIncludesWith$1;

	var SetCache = _SetCache,
	    arrayIncludes = _arrayIncludes,
	    arrayIncludesWith = _arrayIncludesWith,
	    arrayMap = _arrayMap,
	    baseUnary = _baseUnary,
	    cacheHas = _cacheHas;

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * The base implementation of methods like `_.difference` without support
	 * for excluding multiple arrays or iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Array} values The values to exclude.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of filtered values.
	 */
	function baseDifference$1(array, values, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes,
	      isCommon = true,
	      length = array.length,
	      result = [],
	      valuesLength = values.length;

	  if (!length) {
	    return result;
	  }
	  if (iteratee) {
	    values = arrayMap(values, baseUnary(iteratee));
	  }
	  if (comparator) {
	    includes = arrayIncludesWith;
	    isCommon = false;
	  }
	  else if (values.length >= LARGE_ARRAY_SIZE) {
	    includes = cacheHas;
	    isCommon = false;
	    values = new SetCache(values);
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee == null ? value : iteratee(value);

	    value = (comparator || value !== 0) ? value : 0;
	    if (isCommon && computed === computed) {
	      var valuesIndex = valuesLength;
	      while (valuesIndex--) {
	        if (values[valuesIndex] === computed) {
	          continue outer;
	        }
	      }
	      result.push(value);
	    }
	    else if (!includes(values, computed, comparator)) {
	      result.push(value);
	    }
	  }
	  return result;
	}

	var _baseDifference = baseDifference$1;

	var Symbol$1 = _Symbol,
	    isArguments$1 = isArguments_1,
	    isArray$1 = isArray_1;

	/** Built-in value references. */
	var spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : undefined;

	/**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */
	function isFlattenable$1(value) {
	  return isArray$1(value) || isArguments$1(value) ||
	    !!(spreadableSymbol && value && value[spreadableSymbol]);
	}

	var _isFlattenable = isFlattenable$1;

	var arrayPush = _arrayPush,
	    isFlattenable = _isFlattenable;

	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten$2(array, depth, predicate, isStrict, result) {
	  var index = -1,
	      length = array.length;

	  predicate || (predicate = isFlattenable);
	  result || (result = []);

	  while (++index < length) {
	    var value = array[index];
	    if (depth > 0 && predicate(value)) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten$2(value, depth - 1, predicate, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}

	var _baseFlatten = baseFlatten$2;

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */

	function apply$1(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	var _apply = apply$1;

	var apply = _apply;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest$1(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply(func, this, otherArgs);
	  };
	}

	var _overRest = overRest$1;

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */

	function constant$1(value) {
	  return function() {
	    return value;
	  };
	}

	var constant_1 = constant$1;

	var getNative = _getNative;

	var defineProperty$1 = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	var _defineProperty = defineProperty$1;

	var constant = constant_1,
	    defineProperty = _defineProperty,
	    identity$1 = identity_1;

	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString$1 = !defineProperty ? identity$1 : function(func, string) {
	  return defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};

	var _baseSetToString = baseSetToString$1;

	/** Used to detect hot functions by number of calls within a span of milliseconds. */

	var HOT_COUNT = 800,
	    HOT_SPAN = 16;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;

	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut$1(func) {
	  var count = 0,
	      lastCalled = 0;

	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);

	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}

	var _shortOut = shortOut$1;

	var baseSetToString = _baseSetToString,
	    shortOut = _shortOut;

	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString$1 = shortOut(baseSetToString);

	var _setToString = setToString$1;

	var identity = identity_1,
	    overRest = _overRest,
	    setToString = _setToString;

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest$1(func, start) {
	  return setToString(overRest(func, start, identity), func + '');
	}

	var _baseRest = baseRest$1;

	var isArrayLike$1 = isArrayLike_1,
	    isObjectLike$1 = isObjectLike_1;

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject$1(value) {
	  return isObjectLike$1(value) && isArrayLike$1(value);
	}

	var isArrayLikeObject_1 = isArrayLikeObject$1;

	var baseDifference = _baseDifference,
	    baseFlatten$1 = _baseFlatten,
	    baseRest = _baseRest,
	    isArrayLikeObject = isArrayLikeObject_1;

	/**
	 * Creates an array of `array` values not included in the other given arrays
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons. The order and references of result values are
	 * determined by the first array.
	 *
	 * **Note:** Unlike `_.pullAll`, this method returns a new array.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {...Array} [values] The values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 * @see _.without, _.xor
	 * @example
	 *
	 * _.difference([2, 1], [2, 3]);
	 * // => [1]
	 */
	var difference = baseRest(function(array, values) {
	  return isArrayLikeObject(array)
	    ? baseDifference(array, baseFlatten$1(values, 1, isArrayLikeObject, true))
	    : [];
	});

	var difference_1 = difference;

	var runtime = {exports: {}};

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	(function (module) {
	var runtime = (function (exports) {

	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined$1; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  function define(obj, key, value) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	    return obj[key];
	  }
	  try {
	    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
	    define({}, "");
	  } catch (err) {
	    define = function(obj, key, value) {
	      return obj[key] = value;
	    };
	  }

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  exports.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };

	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }

	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunction.displayName = define(
	    GeneratorFunctionPrototype,
	    toStringTagSymbol,
	    "GeneratorFunction"
	  );

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      define(prototype, method, function(arg) {
	        return this._invoke(method, arg);
	      });
	    });
	  }

	  exports.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  exports.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      define(genFun, toStringTagSymbol, "GeneratorFunction");
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  exports.awrap = function(arg) {
	    return { __await: arg };
	  };

	  function AsyncIterator(generator, PromiseImpl) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return PromiseImpl.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return PromiseImpl.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration.
	          result.value = unwrapped;
	          resolve(result);
	        }, function(error) {
	          // If a rejected Promise was yielded, throw the rejection back
	          // into the async generator function so it can be handled there.
	          return invoke("throw", error, resolve, reject);
	        });
	      }
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new PromiseImpl(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  exports.AsyncIterator = AsyncIterator;

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
	    if (PromiseImpl === void 0) PromiseImpl = Promise;

	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList),
	      PromiseImpl
	    );

	    return exports.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      context.method = method;
	      context.arg = arg;

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }

	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;

	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }

	          context.dispatchException(context.arg);

	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          if (record.arg === ContinueSentinel) {
	            continue;
	          }

	          return {
	            value: record.arg,
	            done: context.done
	          };

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }

	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined$1) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;

	      if (context.method === "throw") {
	        // Note: ["return"] must be used for ES3 parsing compatibility.
	        if (delegate.iterator["return"]) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined$1;
	          maybeInvokeDelegate(delegate, context);

	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }

	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }

	      return ContinueSentinel;
	    }

	    var record = tryCatch(method, delegate.iterator, context.arg);

	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    var info = record.arg;

	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;

	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;

	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined$1;
	      }

	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }

	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  define(Gp, toStringTagSymbol, "Generator");

	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  exports.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined$1;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  exports.values = values;

	  function doneResult() {
	    return { value: undefined$1, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined$1;
	      this.done = false;
	      this.delegate = null;

	      this.method = "next";
	      this.arg = undefined$1;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined$1;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;

	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined$1;
	        }

	        return !! caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }

	      return this.complete(record);
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }

	      return ContinueSentinel;
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined$1;
	      }

	      return ContinueSentinel;
	    }
	  };

	  // Regardless of whether this script is executing as a CommonJS module
	  // or not, return the runtime object so that we can declare the variable
	  // regeneratorRuntime in the outer scope, which allows this module to be
	  // injected easily by `bin/regenerator --include-runtime script.js`.
	  return exports;

	}(
	  // If this script is executing as a CommonJS module, use module.exports
	  // as the regeneratorRuntime namespace. Otherwise create a new empty
	  // object. Either way, the resulting object will be used to initialize
	  // the regeneratorRuntime variable at the top of this file.
	  module.exports 
	));

	try {
	  regeneratorRuntime = runtime;
	} catch (accidentalStrictMode) {
	  // This module should not be running in strict mode, so the above
	  // assignment should always work unless something is misconfigured. Just
	  // in case runtime.js accidentally runs in strict mode, we can escape
	  // strict mode using a global Function call. This could conceivably fail
	  // if a Content Security Policy forbids using Function, but in that case
	  // the proper solution is to fix the accidental strict mode problem. If
	  // you've misconfigured your bundler to force strict mode and applied a
	  // CSP to forbid Function, and you're not willing to fix either of those
	  // problems, please detail your unique predicament in a GitHub issue.
	  Function("r", "regeneratorRuntime = r")(runtime);
	}
	}(runtime));

	var regenerator = runtime.exports;

	function anonymous$6(locals, escapeFn, include, rethrow
	) {
	rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc){
	  var lines = str.split('\n');
	  var start = Math.max(lineno - 3, 0);
	  var end = Math.min(lines.length, lineno + 3);
	  var filename = esc(flnm); // eslint-disable-line
	  // Error context
	  var context = lines.slice(start, end).map(function (line, i){
	    var curr = i + start + 1;
	    return (curr == lineno ? ' >> ' : '    ')
	      + curr
	      + '| '
	      + line;
	  }).join('\n');

	  // Alter exception message
	  err.path = filename;
	  err.message = (filename || 'ejs') + ':'
	    + lineno + '\n'
	    + context + '\n\n'
	    + err.message;

	  throw err;
	};
	escapeFn = escapeFn || function (markup) {
	  return markup == undefined
	    ? ''
	    : String(markup)
	      .replace(_MATCH_HTML, encode_char);
	};
	var _ENCODE_HTML_RULES = {
	      "&": "&amp;"
	    , "<": "&lt;"
	    , ">": "&gt;"
	    , '"': "&#34;"
	    , "'": "&#39;"
	    }
	  , _MATCH_HTML = /[&<>'"]/g;
	function encode_char(c) {
	  return _ENCODE_HTML_RULES[c] || c;
	}var __line = 1
	  , __lines = "Super_preloaderPlus_one_New is upgraded from v<%= locals.oldversion %> to v<%= locals.newversion%>\n"
	  , __filename = undefined;
	try {
	  var __output = "";
	  function __append(s) { if (s !== undefined && s !== null) __output += s; }
	    ; __append("Super_preloaderPlus_one_New is upgraded from v")
	    ; __append(escapeFn( locals.oldversion ))
	    ; __append(" to v")
	    ; __append(escapeFn( locals.newversion))
	    ; __append("\n")
	    ; __line = 2;
	  return __output;
	} catch (e) {
	  rethrow(e, __lines, __filename, __line, escapeFn);
	}

	}

	function anonymous$5(locals, escapeFn, include, rethrow
	) {
	rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc){
	  var lines = str.split('\n');
	  var start = Math.max(lineno - 3, 0);
	  var end = Math.min(lines.length, lineno + 3);
	  var filename = esc(flnm); // eslint-disable-line
	  // Error context
	  var context = lines.slice(start, end).map(function (line, i){
	    var curr = i + start + 1;
	    return (curr == lineno ? ' >> ' : '    ')
	      + curr
	      + '| '
	      + line;
	  }).join('\n');

	  // Alter exception message
	  err.path = filename;
	  err.message = (filename || 'ejs') + ':'
	    + lineno + '\n'
	    + context + '\n\n'
	    + err.message;

	  throw err;
	};
	escapeFn = escapeFn || function (markup) {
	  return markup == undefined
	    ? ''
	    : String(markup)
	      .replace(_MATCH_HTML, encode_char);
	};
	var _ENCODE_HTML_RULES = {
	      "&": "&amp;"
	    , "<": "&lt;"
	    , ">": "&gt;"
	    , '"': "&#34;"
	    , "'": "&#39;"
	    }
	  , _MATCH_HTML = /[&<>'"]/g;
	function encode_char(c) {
	  return _ENCODE_HTML_RULES[c] || c;
	}var __line = 1
	  , __lines = "<div>Super_preloaderPlus_one_New Settings</div>\n<ul>\n  <li>Version: <b><%= locals.scriptInfo.version %></b> Update time: <b><%= locals.scriptInfo.updateTime %></b>\n    <a id=\"sp-prefs-homepageURL\" target=\"_blank\" href=\"<%= locals.scriptInfo.homepageURL %>\" />Homepage</a>\n    <a id=\"sp-prefs-homepageURL-feedback\" target=\"_blank\" href=\"<%= locals.scriptInfo.feedbackURL %>\" /> Feedback\n    </a>\n  </li>\n  <li>Maintainer: <b><a href=\"https://greasyfork.org/en/users/32861-mach6\">Mach6</a></b> Changelog:\n    <b><%= locals.scriptInfo.changelog %></b></li>\n  <li>Number of rules: <b><%= locals.prefs.numOfRule %></b> Next update: <b><%= locals.nextUpdateDate %></b> <button\n      id=\"sp-prefs-updaterule\">Update rules</button></li>\n  <li>\n    <label for=\"sp-prefs-debug\"><input type=\"checkbox\" id=\"sp-prefs-debug\" /> Debug mode</label>\n    <label for=\"sp-prefs-ChineseUI\"><input class=\"inputShift\" type=\"checkbox\" tile=\"English/Chinese UI\" id=\"sp-prefs-ChineseUI\" /> Chinese UI</label>\n    <label for=\"sp-prefs-floatWindow\"><input class=\"inputShift\" type=\"checkbox\" id=\"sp-prefs-floatWindow\" /> Float window</label>\n  </li>\n  <li>\n    <label for=\"sp-prefs-disableBuiltinRules\"><input type=\"checkbox\" id=\"sp-prefs-disableBuiltinRules\"  title=\"Disable builtin js rules\"/> Disable builtin rules</label>\n    <label for=\"sp-prefs-disableBuiltinSubscriptionRules\"><input class=\"inputShift\" type=\"checkbox\" id=\"sp-prefs-disableBuiltinSubscriptionRules\" title=\"Disable the subscription of rules from wedata.net and etc.\"/> Disable rule subscription</label>\n    <label for=\"sp-prefs-autoMatchKeyMatch\"><input class=\"inputShift\" type=\"checkbox\" id=\"sp-prefs-autoMatchKeyMatch\" /> Disable auto match</label>\n  </li>\n  <li><label for=\"sp-prefs-enableHistory\"><input type=\"checkbox\" id=\"sp-prefs-enableHistory\" /> Add next page to history</label></li>\n  <li>\n    <label for=\"sp-prefs-dblclick_pause\"><input type=\"checkbox\" id=\"sp-prefs-dblclick_pause\" /> Double click to stop preload (Default: Ctrl + Long Left)</label>\n  </li>\n  <li><label for=\"sp-prefs-SITEINFO_D-useiframe\"><input type=\"checkbox\" id=\"sp-prefs-SITEINFO_D-useiframe\" /> Enable iframe mode globally</label></li>\n  <li><label for=\"sp-prefs-SITEINFO_D-a_enable\"><input type=\"checkbox\" title=\"Enable autopagger, otherwise only prefetcher is enabled\"\n      id=\"sp-prefs-SITEINFO_D-a_enable\" checked /> Enable autopagger globally</label></li>\n  <li><label for=\"sp-prefs-arrowKeyPage\"><input type=\"checkbox\" id=\"sp-prefs-arrowKeyPage\" /> Turn to the next page with ← →</label></li>\n  <li><label for=\"sp-prefs-SITEINFO_D-a_force_enable\"><input type=\"checkbox\" id=\"sp-prefs-SITEINFO_D-a_force_enable\" /> Mandatorily join pages if not covered by the\n    rules</label></li>\n  <li>Custom excludes:\n    <div><textarea id=\"sp-prefs-excludes\"\n        placeholder=\"Customized excludes. You can use either wildcard character like &quot;https://www.google.com/*&quot; or regular expression &quot;re:^https?://www\\\\.google\\\\.com(/.*)?&quot;. The first one will match &quot;https://www.google.com/apple&quot; but not &quot;https://www.google.com&quot;. The second one matches everything. But you need to add the &quot;re:&quot; prefix and escape backslash\" ></textarea></div>\n  </li>\n  <li><a href=\"https://machsix.github.io/Super-preloader/siterule.html\" style=\"color: blue;\" target=\"_blank\">Custom\n      rules:</a>\n    <div><textarea id=\"sp-prefs-custom_siteinfo\" placeholder=\"&#8598;Click to learn how to write custom rules\"></textarea></div>\n  </li>\n  <li>Custom CSS:\n    <div><textarea id=\"sp-prefs-customCSS\"\n        placeholder=\"Customized the apperance of separator and setting panel by modifying class 'sp-separator' and 'sp-prefs-setup'. E.g.: '.sp-separator {filter: invert(1.0)}' for dark mode\"></textarea></div>\n  </li>\n</ul>\n<div><button id=\"sp-prefs-ok\" style=\"width:100px;\">OK</button><button id=\"sp-prefs-cancel\"\n    style=\"width:100px;\">Cancel</button><button id=\"sp-prefs-reset\" style=\"width:100px;\">Reset</button></div>\n"
	  , __filename = undefined;
	try {
	  var __output = "";
	  function __append(s) { if (s !== undefined && s !== null) __output += s; }
	    ; __append("<div>Super_preloaderPlus_one_New Settings</div>\n<ul>\n  <li>Version: <b>")
	    ; __line = 3
	    ; __append(escapeFn( locals.scriptInfo.version ))
	    ; __append("</b> Update time: <b>")
	    ; __append(escapeFn( locals.scriptInfo.updateTime ))
	    ; __append("</b>\n    <a id=\"sp-prefs-homepageURL\" target=\"_blank\" href=\"")
	    ; __line = 4
	    ; __append(escapeFn( locals.scriptInfo.homepageURL ))
	    ; __append("\" />Homepage</a>\n    <a id=\"sp-prefs-homepageURL-feedback\" target=\"_blank\" href=\"")
	    ; __line = 5
	    ; __append(escapeFn( locals.scriptInfo.feedbackURL ))
	    ; __append("\" /> Feedback\n    </a>\n  </li>\n  <li>Maintainer: <b><a href=\"https://greasyfork.org/en/users/32861-mach6\">Mach6</a></b> Changelog:\n    <b>")
	    ; __line = 9
	    ; __append(escapeFn( locals.scriptInfo.changelog ))
	    ; __append("</b></li>\n  <li>Number of rules: <b>")
	    ; __line = 10
	    ; __append(escapeFn( locals.prefs.numOfRule ))
	    ; __append("</b> Next update: <b>")
	    ; __append(escapeFn( locals.nextUpdateDate ))
	    ; __append("</b> <button\n      id=\"sp-prefs-updaterule\">Update rules</button></li>\n  <li>\n    <label for=\"sp-prefs-debug\"><input type=\"checkbox\" id=\"sp-prefs-debug\" /> Debug mode</label>\n    <label for=\"sp-prefs-ChineseUI\"><input class=\"inputShift\" type=\"checkbox\" tile=\"English/Chinese UI\" id=\"sp-prefs-ChineseUI\" /> Chinese UI</label>\n    <label for=\"sp-prefs-floatWindow\"><input class=\"inputShift\" type=\"checkbox\" id=\"sp-prefs-floatWindow\" /> Float window</label>\n  </li>\n  <li>\n    <label for=\"sp-prefs-disableBuiltinRules\"><input type=\"checkbox\" id=\"sp-prefs-disableBuiltinRules\"  title=\"Disable builtin js rules\"/> Disable builtin rules</label>\n    <label for=\"sp-prefs-disableBuiltinSubscriptionRules\"><input class=\"inputShift\" type=\"checkbox\" id=\"sp-prefs-disableBuiltinSubscriptionRules\" title=\"Disable the subscription of rules from wedata.net and etc.\"/> Disable rule subscription</label>\n    <label for=\"sp-prefs-autoMatchKeyMatch\"><input class=\"inputShift\" type=\"checkbox\" id=\"sp-prefs-autoMatchKeyMatch\" /> Disable auto match</label>\n  </li>\n  <li><label for=\"sp-prefs-enableHistory\"><input type=\"checkbox\" id=\"sp-prefs-enableHistory\" /> Add next page to history</label></li>\n  <li>\n    <label for=\"sp-prefs-dblclick_pause\"><input type=\"checkbox\" id=\"sp-prefs-dblclick_pause\" /> Double click to stop preload (Default: Ctrl + Long Left)</label>\n  </li>\n  <li><label for=\"sp-prefs-SITEINFO_D-useiframe\"><input type=\"checkbox\" id=\"sp-prefs-SITEINFO_D-useiframe\" /> Enable iframe mode globally</label></li>\n  <li><label for=\"sp-prefs-SITEINFO_D-a_enable\"><input type=\"checkbox\" title=\"Enable autopagger, otherwise only prefetcher is enabled\"\n      id=\"sp-prefs-SITEINFO_D-a_enable\" checked /> Enable autopagger globally</label></li>\n  <li><label for=\"sp-prefs-arrowKeyPage\"><input type=\"checkbox\" id=\"sp-prefs-arrowKeyPage\" /> Turn to the next page with ← →</label></li>\n  <li><label for=\"sp-prefs-SITEINFO_D-a_force_enable\"><input type=\"checkbox\" id=\"sp-prefs-SITEINFO_D-a_force_enable\" /> Mandatorily join pages if not covered by the\n    rules</label></li>\n  <li>Custom excludes:\n    <div><textarea id=\"sp-prefs-excludes\"\n        placeholder=\"Customized excludes. You can use either wildcard character like &quot;https://www.google.com/*&quot; or regular expression &quot;re:^https?://www\\\\.google\\\\.com(/.*)?&quot;. The first one will match &quot;https://www.google.com/apple&quot; but not &quot;https://www.google.com&quot;. The second one matches everything. But you need to add the &quot;re:&quot; prefix and escape backslash\" ></textarea></div>\n  </li>\n  <li><a href=\"https://machsix.github.io/Super-preloader/siterule.html\" style=\"color: blue;\" target=\"_blank\">Custom\n      rules:</a>\n    <div><textarea id=\"sp-prefs-custom_siteinfo\" placeholder=\"&#8598;Click to learn how to write custom rules\"></textarea></div>\n  </li>\n  <li>Custom CSS:\n    <div><textarea id=\"sp-prefs-customCSS\"\n        placeholder=\"Customized the apperance of separator and setting panel by modifying class 'sp-separator' and 'sp-prefs-setup'. E.g.: '.sp-separator {filter: invert(1.0)}' for dark mode\"></textarea></div>\n  </li>\n</ul>\n<div><button id=\"sp-prefs-ok\" style=\"width:100px;\">OK</button><button id=\"sp-prefs-cancel\"\n    style=\"width:100px;\">Cancel</button><button id=\"sp-prefs-reset\" style=\"width:100px;\">Reset</button></div>\n")
	    ; __line = 47;
	  return __output;
	} catch (e) {
	  rethrow(e, __lines, __filename, __line, escapeFn);
	}

	}

	function anonymous$4(locals, escapeFn, include, rethrow
	) {
	rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc){
	  var lines = str.split('\n');
	  var start = Math.max(lineno - 3, 0);
	  var end = Math.min(lines.length, lineno + 3);
	  var filename = esc(flnm); // eslint-disable-line
	  // Error context
	  var context = lines.slice(start, end).map(function (line, i){
	    var curr = i + start + 1;
	    return (curr == lineno ? ' >> ' : '    ')
	      + curr
	      + '| '
	      + line;
	  }).join('\n');

	  // Alter exception message
	  err.path = filename;
	  err.message = (filename || 'ejs') + ':'
	    + lineno + '\n'
	    + context + '\n\n'
	    + err.message;

	  throw err;
	};
	escapeFn = escapeFn || function (markup) {
	  return markup == undefined
	    ? ''
	    : String(markup)
	      .replace(_MATCH_HTML, encode_char);
	};
	var _ENCODE_HTML_RULES = {
	      "&": "&amp;"
	    , "<": "&lt;"
	    , ">": "&gt;"
	    , '"': "&#34;"
	    , "'": "&#39;"
	    }
	  , _MATCH_HTML = /[&<>'"]/g;
	function encode_char(c) {
	  return _ENCODE_HTML_RULES[c] || c;
	}var __line = 1
	  , __lines = "<div id=\"sp-fw-rect\" style=\"background-color:#000;\">\n  <div id=\"sp-fw-dot\" style=\"display:none;\"></div>\n  <div id=\"sp-fw-cur-mode\" style=\"display:none;\"></div>\n</div>\n<div id=\"sp-fw-content\">\n  <div id=\"sp-fw-main\">\n    <div id=\"sp-fw-main-head\">\n      <label for=\"sp-fw-a_enable\">Mode</label>\n      <select id=\"sp-fw-a_enable\" name=\"sp-fw-a_enable\">\n        <option value=\"preloader\">Preloader</option>\n        <option value=\"autopager\">Autopager</option>\n      </select>\n      <span id=\"sp-fw-span-info\">Super_preloader</span>\n    </div>\n    <fieldset>\n      <legend title=\"Preloader helps accelerating loading\">Preloader Settings</legend>\n      <ul>\n        <li>\n          <label for=\"sp-fw-useiframe\">\n            <input type=\"checkbox\"\n              title=\"Use iframe to load next page into cache, otherwise use XHR to get the content. Do not use this if everthing is normal.\"\n              id=\"sp-fw-useiframe\" name=\"sp-fw-useiframe\" />Use iframe\n          </label>\n          <label for=\"sp-fw-viewcontent\">\n            <input type=\"checkbox\" title=\"Check preload contents.\" id=\"sp-fw-viewcontent\"\n              name=\"sp-fw-viewcontent\" />Show\n            preloaded content\n          </label>\n        </li>\n      </ul>\n    </fieldset>\n    <fieldset id=\"sp-fw-autopager-field\" style=\"display:block;\">\n      <legend title=\"Autopager frees you from clicking next page\">Autopager Settings</legend>\n      <ul>\n        <li>\n          <label for=\"sp-fw-a_useiframe\">\n            <input type=\"checkbox\"\n              title=\"Use iframe to load next page into cache, otherwise use XHR to get the content. Do not use this if everthing is normal\"\n              id=\"sp-fw-a_useiframe\" name=\"sp-fw-a_useiframe\" />Use iframe</input>\n          </label>\n          <label for=\"sp-fw-a_newIframe\">\n            <input type=\"checkbox\" title=\"Use a new iframe for the next page. It may solve problems with figures\"\n              id=\"sp-fw-a_newIframe\" name=\"sp-fw-a_newIframe\">Use new iframe</input>\n          </label>\n          <ul id=\"sp-fw-a_useiframe-extend\">\n            <li>\n              <label for=\"sp-fw-a_iloaded\">\n                <input type=\"checkbox\" title=\"Append the content untill iframe is fully loaded\" id=\"sp-fw-a_iloaded\"\n                  name=\"sp-fw-a_iloaded\" />Wait iframe to be fully loaded\n              </label>\n            </li>\n            <li>\n              <label for=\"sp-fw-a_itimeout\">\n                <input type=\"number\" min=\"0\"\n                  title=\"Wait for X ms untill the content is appended to the current page. (Default: 0)\"\n                  id=\"sp-fw-a_itimeout\" name=\"sp-fw-a_itimeout\" /> ms delay\n              </label>\n            </li>\n          </ul>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_manualA\">\n            <input type=\"checkbox\" id=\"sp-fw-a_manualA\" name=\"sp-fw-a_manualA\"\n              title=\"The next page won\\'t be appended to the current page and you need to click a button\" />Manual mode\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_remain\">\n            Trigger autopager until the height is <input type=\"number\" min=\"0\" id=\"sp-fw-a_remain\"\n              name=\"sp-fw-a_remain\" />x\n            page height\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_maxpage\">\n            Turn at most <input type=\"number\" min=\"0\" id=\"sp-fw-a_maxpage\" name=\"sp-fw-a_maxpage\" /> pages\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_separator\">\n            <input type=\"checkbox\" id=\"sp-fw-a_separator\" name=\"sp-fw-a_separator\"\n              title=\"Show the page navigation bar\" />Navigation bar\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_force\">\n            <input type=\"checkbox\"\n              title=\"Append the whole next page to current page (When there is not rule for the website, this is the only method)\"\n              id=\"sp-fw-a_force\" name=\"sp-fw-a_force\" />Force to join page\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_ipages_0\">\n            <input type=\"checkbox\" id=\"sp-fw-a_ipages_0\" name=\"sp-fw-a_ipages_0\"\n              title=\"Turn X pages instantly once the script is loaded. This is good for some gallery.\" />Turn <input\n              type=\"number\" min=\"0\" id=\"sp-fw-a_ipages_1\" name=\"sp-fw-a_ipages_1\" title=\"0 for infinity\" /> pages\n          </label>\n          instantly\n          <span class=\"sp-fw-spanbutton\" id=\"sp-fw-a_starti\">Start</span>\n        </li>\n      </ul>\n    </fieldset>\n    <div id=\"sp-fw-foot\">\n      <label for=\"sp-fw-enable\">\n        <input type=\"checkbox\" id=\"sp-fw-enable\" title=\"Enable for thie website\" name=\"sp-fw-enable\" />Enable\n      </label>\n      <span id=\"sp-fw-setup\" class=\"sp-fw-spanbutton\" title=\"Global Settings\">Global Settings</span>\n      <span id=\"sp-fw-savebutton\" class=\"sp-fw-spanbutton\" title=\"Save settings\">Save</span>\n    </div>\n  </div>\n</div>\n"
	  , __filename = undefined;
	try {
	  var __output = "";
	  function __append(s) { if (s !== undefined && s !== null) __output += s; }
	    ; __append("<div id=\"sp-fw-rect\" style=\"background-color:#000;\">\n  <div id=\"sp-fw-dot\" style=\"display:none;\"></div>\n  <div id=\"sp-fw-cur-mode\" style=\"display:none;\"></div>\n</div>\n<div id=\"sp-fw-content\">\n  <div id=\"sp-fw-main\">\n    <div id=\"sp-fw-main-head\">\n      <label for=\"sp-fw-a_enable\">Mode</label>\n      <select id=\"sp-fw-a_enable\" name=\"sp-fw-a_enable\">\n        <option value=\"preloader\">Preloader</option>\n        <option value=\"autopager\">Autopager</option>\n      </select>\n      <span id=\"sp-fw-span-info\">Super_preloader</span>\n    </div>\n    <fieldset>\n      <legend title=\"Preloader helps accelerating loading\">Preloader Settings</legend>\n      <ul>\n        <li>\n          <label for=\"sp-fw-useiframe\">\n            <input type=\"checkbox\"\n              title=\"Use iframe to load next page into cache, otherwise use XHR to get the content. Do not use this if everthing is normal.\"\n              id=\"sp-fw-useiframe\" name=\"sp-fw-useiframe\" />Use iframe\n          </label>\n          <label for=\"sp-fw-viewcontent\">\n            <input type=\"checkbox\" title=\"Check preload contents.\" id=\"sp-fw-viewcontent\"\n              name=\"sp-fw-viewcontent\" />Show\n            preloaded content\n          </label>\n        </li>\n      </ul>\n    </fieldset>\n    <fieldset id=\"sp-fw-autopager-field\" style=\"display:block;\">\n      <legend title=\"Autopager frees you from clicking next page\">Autopager Settings</legend>\n      <ul>\n        <li>\n          <label for=\"sp-fw-a_useiframe\">\n            <input type=\"checkbox\"\n              title=\"Use iframe to load next page into cache, otherwise use XHR to get the content. Do not use this if everthing is normal\"\n              id=\"sp-fw-a_useiframe\" name=\"sp-fw-a_useiframe\" />Use iframe</input>\n          </label>\n          <label for=\"sp-fw-a_newIframe\">\n            <input type=\"checkbox\" title=\"Use a new iframe for the next page. It may solve problems with figures\"\n              id=\"sp-fw-a_newIframe\" name=\"sp-fw-a_newIframe\">Use new iframe</input>\n          </label>\n          <ul id=\"sp-fw-a_useiframe-extend\">\n            <li>\n              <label for=\"sp-fw-a_iloaded\">\n                <input type=\"checkbox\" title=\"Append the content untill iframe is fully loaded\" id=\"sp-fw-a_iloaded\"\n                  name=\"sp-fw-a_iloaded\" />Wait iframe to be fully loaded\n              </label>\n            </li>\n            <li>\n              <label for=\"sp-fw-a_itimeout\">\n                <input type=\"number\" min=\"0\"\n                  title=\"Wait for X ms untill the content is appended to the current page. (Default: 0)\"\n                  id=\"sp-fw-a_itimeout\" name=\"sp-fw-a_itimeout\" /> ms delay\n              </label>\n            </li>\n          </ul>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_manualA\">\n            <input type=\"checkbox\" id=\"sp-fw-a_manualA\" name=\"sp-fw-a_manualA\"\n              title=\"The next page won\\'t be appended to the current page and you need to click a button\" />Manual mode\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_remain\">\n            Trigger autopager until the height is <input type=\"number\" min=\"0\" id=\"sp-fw-a_remain\"\n              name=\"sp-fw-a_remain\" />x\n            page height\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_maxpage\">\n            Turn at most <input type=\"number\" min=\"0\" id=\"sp-fw-a_maxpage\" name=\"sp-fw-a_maxpage\" /> pages\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_separator\">\n            <input type=\"checkbox\" id=\"sp-fw-a_separator\" name=\"sp-fw-a_separator\"\n              title=\"Show the page navigation bar\" />Navigation bar\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_force\">\n            <input type=\"checkbox\"\n              title=\"Append the whole next page to current page (When there is not rule for the website, this is the only method)\"\n              id=\"sp-fw-a_force\" name=\"sp-fw-a_force\" />Force to join page\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_ipages_0\">\n            <input type=\"checkbox\" id=\"sp-fw-a_ipages_0\" name=\"sp-fw-a_ipages_0\"\n              title=\"Turn X pages instantly once the script is loaded. This is good for some gallery.\" />Turn <input\n              type=\"number\" min=\"0\" id=\"sp-fw-a_ipages_1\" name=\"sp-fw-a_ipages_1\" title=\"0 for infinity\" /> pages\n          </label>\n          instantly\n          <span class=\"sp-fw-spanbutton\" id=\"sp-fw-a_starti\">Start</span>\n        </li>\n      </ul>\n    </fieldset>\n    <div id=\"sp-fw-foot\">\n      <label for=\"sp-fw-enable\">\n        <input type=\"checkbox\" id=\"sp-fw-enable\" title=\"Enable for thie website\" name=\"sp-fw-enable\" />Enable\n      </label>\n      <span id=\"sp-fw-setup\" class=\"sp-fw-spanbutton\" title=\"Global Settings\">Global Settings</span>\n      <span id=\"sp-fw-savebutton\" class=\"sp-fw-spanbutton\" title=\"Save settings\">Save</span>\n    </div>\n  </div>\n</div>\n")
	    ; __line = 112;
	  return __output;
	} catch (e) {
	  rethrow(e, __lines, __filename, __line, escapeFn);
	}

	}

	function anonymous$3(locals, escapeFn, include, rethrow
	) {
	rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc){
	  var lines = str.split('\n');
	  var start = Math.max(lineno - 3, 0);
	  var end = Math.min(lines.length, lineno + 3);
	  var filename = esc(flnm); // eslint-disable-line
	  // Error context
	  var context = lines.slice(start, end).map(function (line, i){
	    var curr = i + start + 1;
	    return (curr == lineno ? ' >> ' : '    ')
	      + curr
	      + '| '
	      + line;
	  }).join('\n');

	  // Alter exception message
	  err.path = filename;
	  err.message = (filename || 'ejs') + ':'
	    + lineno + '\n'
	    + context + '\n\n'
	    + err.message;

	  throw err;
	};
	escapeFn = escapeFn || function (markup) {
	  return markup == undefined
	    ? ''
	    : String(markup)
	      .replace(_MATCH_HTML, encode_char);
	};
	var _ENCODE_HTML_RULES = {
	      "&": "&amp;"
	    , "<": "&lt;"
	    , ">": "&gt;"
	    , '"': "&#34;"
	    , "'": "&#39;"
	    }
	  , _MATCH_HTML = /[&<>'"]/g;
	function encode_char(c) {
	  return _ENCODE_HTML_RULES[c] || c;
	}var __line = 1
	  , __lines = "Super_preloaderPlus_one_改 从 v<%= locals.oldversion %> 升级到 v<%= locals.newversion%>\n"
	  , __filename = undefined;
	try {
	  var __output = "";
	  function __append(s) { if (s !== undefined && s !== null) __output += s; }
	    ; __append("Super_preloaderPlus_one_改 从 v")
	    ; __append(escapeFn( locals.oldversion ))
	    ; __append(" 升级到 v")
	    ; __append(escapeFn( locals.newversion))
	    ; __append("\n")
	    ; __line = 2;
	  return __output;
	} catch (e) {
	  rethrow(e, __lines, __filename, __line, escapeFn);
	}

	}

	function anonymous$2(locals, escapeFn, include, rethrow
	) {
	rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc){
	  var lines = str.split('\n');
	  var start = Math.max(lineno - 3, 0);
	  var end = Math.min(lines.length, lineno + 3);
	  var filename = esc(flnm); // eslint-disable-line
	  // Error context
	  var context = lines.slice(start, end).map(function (line, i){
	    var curr = i + start + 1;
	    return (curr == lineno ? ' >> ' : '    ')
	      + curr
	      + '| '
	      + line;
	  }).join('\n');

	  // Alter exception message
	  err.path = filename;
	  err.message = (filename || 'ejs') + ':'
	    + lineno + '\n'
	    + context + '\n\n'
	    + err.message;

	  throw err;
	};
	escapeFn = escapeFn || function (markup) {
	  return markup == undefined
	    ? ''
	    : String(markup)
	      .replace(_MATCH_HTML, encode_char);
	};
	var _ENCODE_HTML_RULES = {
	      "&": "&amp;"
	    , "<": "&lt;"
	    , ">": "&gt;"
	    , '"': "&#34;"
	    , "'": "&#39;"
	    }
	  , _MATCH_HTML = /[&<>'"]/g;
	function encode_char(c) {
	  return _ENCODE_HTML_RULES[c] || c;
	}var __line = 1
	  , __lines = "<div>Super_preloaderPlus_one_New设置</div>\n<ul>\n  <li>脚本版本: <b><%= locals.scriptInfo.version %></b> 更新时间: <b><%= locals.scriptInfo.updateTime %></b>\n    <a id=\"sp-prefs-homepageURL\" target=\"_blank\" href=\"<%= locals.scriptInfo.homepageURL %>\" />脚本主页</a>\n    <a id=\"sp-prefs-homepageURL-feedback\" target=\"_blank\" href=\"<%= locals.scriptInfo.feedbackURL %>\">反馈规则</a>\n  </li>\n  <li>维护者: <b><a href=\"https://greasyfork.org/en/users/32861-mach6\">Mach6</a></b> 更新日志:\n    <b><%= locals.scriptInfo.changelog %></b></li>\n  <li>规则数目: <b><%= locals.prefs.numOfRule %></b> 下次更新时间: <b><%= locals.nextUpdateDate %></b>\n    <button id=\"sp-prefs-updaterule\">更新规则</button></li>\n  <li>\n    <label for=\"sp-prefs-debug\"><input type=\"checkbox\" id=\"sp-prefs-debug\" /> 调试模式</label>\n    <label for=\"sp-prefs-ChineseUI\"><input class=\"inputShift\" type=\"checkbox\" id=\"sp-prefs-ChineseUI\" /> 中文界面</label>\n    <label for=\"sp-prefs-floatWindow\"><input class=\"inputShift\" type=\"checkbox\" id=\"sp-prefs-floatWindow\" /> 开启悬浮窗</label>\n  </li>\n  <li>\n    <label for=\"sp-prefs-disableBuiltinRules\"><input type=\"checkbox\" id=\"sp-prefs-disableBuiltinRules\"  title=\"禁用内建的js格式规则\"/> 禁用内建规则</label>\n    <label for=\"sp-prefs-disableBuiltinSubscriptionRules\"><input class=\"inputShift\" type=\"checkbox\" id=\"sp-prefs-disableBuiltinSubscriptionRules\" title=\"禁用从wedata.net等数据库的订阅规则\"/> 禁用订阅规则</label>\n    <label for=\"sp-prefs-autoMatchKeyMatch\"><input class=\"inputShift\" type=\"checkbox\" id=\"sp-prefs-autoMatchKeyMatch\" /> 禁用自动匹配</label>\n  </li>\n  <li><label for=\"sp-prefs-enableHistory\"><input type=\"checkbox\" id=\"sp-prefs-enableHistory\" /> 添加下一页到历史记录</label></li>\n  <li><label for=\"sp-prefs-dblclick_pause\"><input type=\"checkbox\" id=\"sp-prefs-dblclick_pause\" /> 鼠标双击暂停翻页（默认为 Ctrl + 长按左键）</label></li>\n  <li>\n    <label for=\"sp-prefs-SITEINFO_D-a_enable\"><input title=\"启用自动翻页，否则仅启用预读\" type=\"checkbox\" id=\"sp-prefs-SITEINFO_D-a_enable\" checked /> 自动翻页</label>\n    <label for=\"sp-prefs-SITEINFO_D-useiframe\"><input class=\"inputShift\" type=\"checkbox\" id=\"sp-prefs-SITEINFO_D-useiframe\" /> 全局iframe方式</label>\n    <label for=\"sp-prefs-SITEINFO_D-a_force_enable\">\n      <input class=\"inputShift\" title=\"强行拼接规则中没有的站点，不建议启用\" type=\"checkbox\" id=\"sp-prefs-SITEINFO_D-a_force_enable\" />\n    全局强制拼接（不建议）</label>\n  </li>\n  <li><label for=\"sp-prefs-arrowKeyPage\"><input type=\"checkbox\" id=\"sp-prefs-arrowKeyPage\" /> 使用 &larr; &rarr; 翻页</label> </li>\n  <li>自定义排除列表：\n    <div><textarea id=\"sp-prefs-excludes\" placeholder=\"自定义排除列表，支持通配符或正则表达式。例如：&quot;http://*.douban.com/*&quot;或&quot;re:http://.*\\\\.douban\\\\.com/.*&quot;. 两者等效。正则表达式需要添加&quot;re:&quot;的前缀并对反斜线转义\"></textarea></div>\n  </li>\n  <li><a href=\"https://machsix.github.io/Super-preloader/zh-cn/siterule.html\" style=\"color: blue;\"\n      target=\"_blank\">自定义站点规则：</a>\n    <div><textarea id=\"sp-prefs-custom_siteinfo\" placeholder=\"&#8598;点击学习如何自定义站点规则, 自定义规则应为一个array\"></textarea></div>\n  </lii>\n  <li>自定义界面:\n    <div><textarea id=\"sp-prefs-customCSS\"\n        placeholder=\"通过修改'sp-separator'和'sp-prefs-setup'的CSS自定义界面\"></textarea></div>\n  </li>\n</ul>\n<div><button id=\"sp-prefs-ok\" style=\"width:100px;\">确定</button><button id=\"sp-prefs-cancel\"\n    style=\"width:100px;\">取消</button><button id=\"sp-prefs-reset\" style=\"width:100px;\">重置</button></div>\n"
	  , __filename = undefined;
	try {
	  var __output = "";
	  function __append(s) { if (s !== undefined && s !== null) __output += s; }
	    ; __append("<div>Super_preloaderPlus_one_New设置</div>\n<ul>\n  <li>脚本版本: <b>")
	    ; __line = 3
	    ; __append(escapeFn( locals.scriptInfo.version ))
	    ; __append("</b> 更新时间: <b>")
	    ; __append(escapeFn( locals.scriptInfo.updateTime ))
	    ; __append("</b>\n    <a id=\"sp-prefs-homepageURL\" target=\"_blank\" href=\"")
	    ; __line = 4
	    ; __append(escapeFn( locals.scriptInfo.homepageURL ))
	    ; __append("\" />脚本主页</a>\n    <a id=\"sp-prefs-homepageURL-feedback\" target=\"_blank\" href=\"")
	    ; __line = 5
	    ; __append(escapeFn( locals.scriptInfo.feedbackURL ))
	    ; __append("\">反馈规则</a>\n  </li>\n  <li>维护者: <b><a href=\"https://greasyfork.org/en/users/32861-mach6\">Mach6</a></b> 更新日志:\n    <b>")
	    ; __line = 8
	    ; __append(escapeFn( locals.scriptInfo.changelog ))
	    ; __append("</b></li>\n  <li>规则数目: <b>")
	    ; __line = 9
	    ; __append(escapeFn( locals.prefs.numOfRule ))
	    ; __append("</b> 下次更新时间: <b>")
	    ; __append(escapeFn( locals.nextUpdateDate ))
	    ; __append("</b>\n    <button id=\"sp-prefs-updaterule\">更新规则</button></li>\n  <li>\n    <label for=\"sp-prefs-debug\"><input type=\"checkbox\" id=\"sp-prefs-debug\" /> 调试模式</label>\n    <label for=\"sp-prefs-ChineseUI\"><input class=\"inputShift\" type=\"checkbox\" id=\"sp-prefs-ChineseUI\" /> 中文界面</label>\n    <label for=\"sp-prefs-floatWindow\"><input class=\"inputShift\" type=\"checkbox\" id=\"sp-prefs-floatWindow\" /> 开启悬浮窗</label>\n  </li>\n  <li>\n    <label for=\"sp-prefs-disableBuiltinRules\"><input type=\"checkbox\" id=\"sp-prefs-disableBuiltinRules\"  title=\"禁用内建的js格式规则\"/> 禁用内建规则</label>\n    <label for=\"sp-prefs-disableBuiltinSubscriptionRules\"><input class=\"inputShift\" type=\"checkbox\" id=\"sp-prefs-disableBuiltinSubscriptionRules\" title=\"禁用从wedata.net等数据库的订阅规则\"/> 禁用订阅规则</label>\n    <label for=\"sp-prefs-autoMatchKeyMatch\"><input class=\"inputShift\" type=\"checkbox\" id=\"sp-prefs-autoMatchKeyMatch\" /> 禁用自动匹配</label>\n  </li>\n  <li><label for=\"sp-prefs-enableHistory\"><input type=\"checkbox\" id=\"sp-prefs-enableHistory\" /> 添加下一页到历史记录</label></li>\n  <li><label for=\"sp-prefs-dblclick_pause\"><input type=\"checkbox\" id=\"sp-prefs-dblclick_pause\" /> 鼠标双击暂停翻页（默认为 Ctrl + 长按左键）</label></li>\n  <li>\n    <label for=\"sp-prefs-SITEINFO_D-a_enable\"><input title=\"启用自动翻页，否则仅启用预读\" type=\"checkbox\" id=\"sp-prefs-SITEINFO_D-a_enable\" checked /> 自动翻页</label>\n    <label for=\"sp-prefs-SITEINFO_D-useiframe\"><input class=\"inputShift\" type=\"checkbox\" id=\"sp-prefs-SITEINFO_D-useiframe\" /> 全局iframe方式</label>\n    <label for=\"sp-prefs-SITEINFO_D-a_force_enable\">\n      <input class=\"inputShift\" title=\"强行拼接规则中没有的站点，不建议启用\" type=\"checkbox\" id=\"sp-prefs-SITEINFO_D-a_force_enable\" />\n    全局强制拼接（不建议）</label>\n  </li>\n  <li><label for=\"sp-prefs-arrowKeyPage\"><input type=\"checkbox\" id=\"sp-prefs-arrowKeyPage\" /> 使用 &larr; &rarr; 翻页</label> </li>\n  <li>自定义排除列表：\n    <div><textarea id=\"sp-prefs-excludes\" placeholder=\"自定义排除列表，支持通配符或正则表达式。例如：&quot;http://*.douban.com/*&quot;或&quot;re:http://.*\\\\.douban\\\\.com/.*&quot;. 两者等效。正则表达式需要添加&quot;re:&quot;的前缀并对反斜线转义\"></textarea></div>\n  </li>\n  <li><a href=\"https://machsix.github.io/Super-preloader/zh-cn/siterule.html\" style=\"color: blue;\"\n      target=\"_blank\">自定义站点规则：</a>\n    <div><textarea id=\"sp-prefs-custom_siteinfo\" placeholder=\"&#8598;点击学习如何自定义站点规则, 自定义规则应为一个array\"></textarea></div>\n  </lii>\n  <li>自定义界面:\n    <div><textarea id=\"sp-prefs-customCSS\"\n        placeholder=\"通过修改'sp-separator'和'sp-prefs-setup'的CSS自定义界面\"></textarea></div>\n  </li>\n</ul>\n<div><button id=\"sp-prefs-ok\" style=\"width:100px;\">确定</button><button id=\"sp-prefs-cancel\"\n    style=\"width:100px;\">取消</button><button id=\"sp-prefs-reset\" style=\"width:100px;\">重置</button></div>\n")
	    ; __line = 45;
	  return __output;
	} catch (e) {
	  rethrow(e, __lines, __filename, __line, escapeFn);
	}

	}

	function anonymous$1(locals, escapeFn, include, rethrow
	) {
	rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc){
	  var lines = str.split('\n');
	  var start = Math.max(lineno - 3, 0);
	  var end = Math.min(lines.length, lineno + 3);
	  var filename = esc(flnm); // eslint-disable-line
	  // Error context
	  var context = lines.slice(start, end).map(function (line, i){
	    var curr = i + start + 1;
	    return (curr == lineno ? ' >> ' : '    ')
	      + curr
	      + '| '
	      + line;
	  }).join('\n');

	  // Alter exception message
	  err.path = filename;
	  err.message = (filename || 'ejs') + ':'
	    + lineno + '\n'
	    + context + '\n\n'
	    + err.message;

	  throw err;
	};
	escapeFn = escapeFn || function (markup) {
	  return markup == undefined
	    ? ''
	    : String(markup)
	      .replace(_MATCH_HTML, encode_char);
	};
	var _ENCODE_HTML_RULES = {
	      "&": "&amp;"
	    , "<": "&lt;"
	    , ">": "&gt;"
	    , '"': "&#34;"
	    , "'": "&#39;"
	    }
	  , _MATCH_HTML = /[&<>'"]/g;
	function encode_char(c) {
	  return _ENCODE_HTML_RULES[c] || c;
	}var __line = 1
	  , __lines = "<div id=\"sp-fw-rect\" style=\"background-color:#000;\">\n  <div id=\"sp-fw-dot\" style=\"display:none;\"></div>\n  <div id=\"sp-fw-cur-mode\" style=\"display:none;\"></div>\n</div>\n<div id=\"sp-fw-content\">\n  <div id=\"sp-fw-main\">\n    <div id=\"sp-fw-main-head\">\n      <label for=\"sp-fw-a_enable\">工作模式</label>\n      <select id=\"sp-fw-a_enable\" name=\"sp-fw-a_enable\">\n        <option value=\"preloader\">预读模式</option>\n        <option value=\"autopager\">自动翻页模式</option>\n      </select>\n      <!-- <span id=\"sp-fw-span-info\">Super_preloader</span> -->\n    </div>\n    <fieldset>\n      <legend title=\"预读模式的相关设置\">预读设置</legend>\n      <ul>\n        <li>\n          <label for=\"sp-fw-useiframe\">\n            <input type=\"checkbox\" title=\"使用iframe预先载入好下一页到缓存,否则使用xhr请求下一页源码,取出所有的图片进行预读\" id=\"sp-fw-useiframe\"\n              name=\"sp-fw-useiframe\" />使用iframe方式\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-viewcontent\">\n            <input type=\"checkbox\" title=\"查看预读的内容,将其显示在页面的底部,看看预读了些什么.\" id=\"sp-fw-viewcontent\"\n              name=\"sp-fw-viewcontent\" />查看预读的内容\n          </label>\n        </li>\n      </ul>\n    </fieldset>\n    <fieldset id=\"sp-fw-autopager-field\" style=\"display:block;\">\n      <legend title=\"自动翻页模式的相关设置\">翻页设置</legend>\n      <ul>\n        <li>\n          <label for=\"sp-fw-a_useiframe\">\n            <input type=\"checkbox\" title=\"使用iframe方式进行翻页,否则使用xhr方式翻页,可以解决某些网页xhr方式无法翻页的问题,如果xhr翻页正常的话,就不要勾这项吧.\"\n              id=\"sp-fw-a_useiframe\" name=\"sp-fw-a_useiframe\" />使用iframe方式</input>\n          </label>\n          <label for=\"sp-fw-a_newIframe\">\n            <input type=\"checkbox\" title=\"每个下一页都用新的iframe，可以解决下一页图片或按钮点击的问题\" id=\"sp-fw-a_newIframe\"\n              name=\"sp-fw-a_newIframe\">新iframe</input>\n          </label>\n          <ul id=\"sp-fw-a_useiframe-extend\">\n            <li>\n              <label for=\"sp-fw-a_iloaded\">\n                <input type=\"checkbox\" title=\"等待iframe完全载入后(发生load事件),将内容取出,否则在DOM完成后,就直接取出来..(勾上后,会比较慢,但是可能会解决一些问题.)\"\n                  id=\"sp-fw-a_iloaded\" name=\"sp-fw-a_iloaded\" />等待iframe完全载入\n              </label>\n            </li>\n            <li>\n              <label for=\"sp-fw-a_itimeout\">\n                <input type=\"number\" min=\"0\" title=\"在可以从iframe取数据的时候,继续等待设定的ms才开始取出数据(此项为特殊网页准备,如果正常,请设置为0)\"\n                  id=\"sp-fw-a_itimeout\" name=\"sp-fw-a_itimeout\" />ms延时取出\n              </label>\n            </li>\n          </ul>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_manualA\">\n            <input type=\"checkbox\" id=\"sp-fw-a_manualA\" name=\"sp-fw-a_manualA\"\n              title=\"不会自动拼接上来,会出现一个类似翻页导航的的图形,点击翻页(在论坛的帖子内容页面,可以考虑勾选此项,从而不影响你的回帖)\" />手动模式\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_remain\">\n            剩余<input type=\"number\" min=\"0\" id=\"sp-fw-a_remain\" name=\"sp-fw-a_remain\"\n              title=\"当剩余的页面的高度是浏览器可见窗口高度的几倍开始翻页\" />倍页面高度触发\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_maxpage\">\n            最多翻<input type=\"number\" min=\"0\" id=\"sp-fw-a_maxpage\" name=\"sp-fw-a_maxpage\"\n              title=\"最多翻页数量,当达到这个翻页数量的时候,自动翻页停止.\" />页\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_separator\">\n            <input type=\"checkbox\" id=\"sp-fw-a_separator\" name=\"sp-fw-a_separator\"\n              title=\"分割页面主要内容的导航条,可以进行页面主要内容之间的快速跳转定位等.\" />显示翻页导航\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_force\">\n            <input type=\"checkbox\" title=\"将下一页的body部分内容整个拼接上来.(当需翻页的网站没有高级规则时,该项强制勾选,无法取消.)\" id=\"sp-fw-a_force\"\n              name=\"sp-fw-a_force\" />强制拼接\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_ipages_0\">\n            <input type=\"checkbox\" id=\"sp-fw-a_ipages_0\" name=\"sp-fw-a_ipages_0\" title=\"在JS加载后,立即连续翻后面设定的页数\" />启用\n            立即翻<input type=\"number\" min=\"0\" id=\"sp-fw-a_ipages_1\" name=\"sp-fw-a_ipages_1\" title=\"0为无穷多\" />页\n          </label>\n          <span class=\"sp-fw-spanbutton\" title=\"现在立即开始连续翻页\" id=\"sp-fw-a_starti\">开始</span>\n        </li>\n      </ul>\n    </fieldset>\n    <div id=\"sp-fw-foot\">\n      <label for=\"sp-fw-enable\">\n        <input type=\"checkbox\" id=\"sp-fw-enable\" title=\"总开关,启用js,否则禁用.\" name=\"sp-fw-enable\" />启用\n      </label>\n      <span id=\"sp-fw-setup\" class=\"sp-fw-spanbutton\" title=\"打开设置窗口\">设置</span>\n      <span id=\"sp-fw-savebutton\" class=\"sp-fw-spanbutton\" title=\"保存设置\">保存</span>\n    </div>\n  </div>\n</div>\n"
	  , __filename = undefined;
	try {
	  var __output = "";
	  function __append(s) { if (s !== undefined && s !== null) __output += s; }
	    ; __append("<div id=\"sp-fw-rect\" style=\"background-color:#000;\">\n  <div id=\"sp-fw-dot\" style=\"display:none;\"></div>\n  <div id=\"sp-fw-cur-mode\" style=\"display:none;\"></div>\n</div>\n<div id=\"sp-fw-content\">\n  <div id=\"sp-fw-main\">\n    <div id=\"sp-fw-main-head\">\n      <label for=\"sp-fw-a_enable\">工作模式</label>\n      <select id=\"sp-fw-a_enable\" name=\"sp-fw-a_enable\">\n        <option value=\"preloader\">预读模式</option>\n        <option value=\"autopager\">自动翻页模式</option>\n      </select>\n      <!-- <span id=\"sp-fw-span-info\">Super_preloader</span> -->\n    </div>\n    <fieldset>\n      <legend title=\"预读模式的相关设置\">预读设置</legend>\n      <ul>\n        <li>\n          <label for=\"sp-fw-useiframe\">\n            <input type=\"checkbox\" title=\"使用iframe预先载入好下一页到缓存,否则使用xhr请求下一页源码,取出所有的图片进行预读\" id=\"sp-fw-useiframe\"\n              name=\"sp-fw-useiframe\" />使用iframe方式\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-viewcontent\">\n            <input type=\"checkbox\" title=\"查看预读的内容,将其显示在页面的底部,看看预读了些什么.\" id=\"sp-fw-viewcontent\"\n              name=\"sp-fw-viewcontent\" />查看预读的内容\n          </label>\n        </li>\n      </ul>\n    </fieldset>\n    <fieldset id=\"sp-fw-autopager-field\" style=\"display:block;\">\n      <legend title=\"自动翻页模式的相关设置\">翻页设置</legend>\n      <ul>\n        <li>\n          <label for=\"sp-fw-a_useiframe\">\n            <input type=\"checkbox\" title=\"使用iframe方式进行翻页,否则使用xhr方式翻页,可以解决某些网页xhr方式无法翻页的问题,如果xhr翻页正常的话,就不要勾这项吧.\"\n              id=\"sp-fw-a_useiframe\" name=\"sp-fw-a_useiframe\" />使用iframe方式</input>\n          </label>\n          <label for=\"sp-fw-a_newIframe\">\n            <input type=\"checkbox\" title=\"每个下一页都用新的iframe，可以解决下一页图片或按钮点击的问题\" id=\"sp-fw-a_newIframe\"\n              name=\"sp-fw-a_newIframe\">新iframe</input>\n          </label>\n          <ul id=\"sp-fw-a_useiframe-extend\">\n            <li>\n              <label for=\"sp-fw-a_iloaded\">\n                <input type=\"checkbox\" title=\"等待iframe完全载入后(发生load事件),将内容取出,否则在DOM完成后,就直接取出来..(勾上后,会比较慢,但是可能会解决一些问题.)\"\n                  id=\"sp-fw-a_iloaded\" name=\"sp-fw-a_iloaded\" />等待iframe完全载入\n              </label>\n            </li>\n            <li>\n              <label for=\"sp-fw-a_itimeout\">\n                <input type=\"number\" min=\"0\" title=\"在可以从iframe取数据的时候,继续等待设定的ms才开始取出数据(此项为特殊网页准备,如果正常,请设置为0)\"\n                  id=\"sp-fw-a_itimeout\" name=\"sp-fw-a_itimeout\" />ms延时取出\n              </label>\n            </li>\n          </ul>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_manualA\">\n            <input type=\"checkbox\" id=\"sp-fw-a_manualA\" name=\"sp-fw-a_manualA\"\n              title=\"不会自动拼接上来,会出现一个类似翻页导航的的图形,点击翻页(在论坛的帖子内容页面,可以考虑勾选此项,从而不影响你的回帖)\" />手动模式\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_remain\">\n            剩余<input type=\"number\" min=\"0\" id=\"sp-fw-a_remain\" name=\"sp-fw-a_remain\"\n              title=\"当剩余的页面的高度是浏览器可见窗口高度的几倍开始翻页\" />倍页面高度触发\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_maxpage\">\n            最多翻<input type=\"number\" min=\"0\" id=\"sp-fw-a_maxpage\" name=\"sp-fw-a_maxpage\"\n              title=\"最多翻页数量,当达到这个翻页数量的时候,自动翻页停止.\" />页\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_separator\">\n            <input type=\"checkbox\" id=\"sp-fw-a_separator\" name=\"sp-fw-a_separator\"\n              title=\"分割页面主要内容的导航条,可以进行页面主要内容之间的快速跳转定位等.\" />显示翻页导航\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_force\">\n            <input type=\"checkbox\" title=\"将下一页的body部分内容整个拼接上来.(当需翻页的网站没有高级规则时,该项强制勾选,无法取消.)\" id=\"sp-fw-a_force\"\n              name=\"sp-fw-a_force\" />强制拼接\n          </label>\n        </li>\n        <li>\n          <label for=\"sp-fw-a_ipages_0\">\n            <input type=\"checkbox\" id=\"sp-fw-a_ipages_0\" name=\"sp-fw-a_ipages_0\" title=\"在JS加载后,立即连续翻后面设定的页数\" />启用\n            立即翻<input type=\"number\" min=\"0\" id=\"sp-fw-a_ipages_1\" name=\"sp-fw-a_ipages_1\" title=\"0为无穷多\" />页\n          </label>\n          <span class=\"sp-fw-spanbutton\" title=\"现在立即开始连续翻页\" id=\"sp-fw-a_starti\">开始</span>\n        </li>\n      </ul>\n    </fieldset>\n    <div id=\"sp-fw-foot\">\n      <label for=\"sp-fw-enable\">\n        <input type=\"checkbox\" id=\"sp-fw-enable\" title=\"总开关,启用js,否则禁用.\" name=\"sp-fw-enable\" />启用\n      </label>\n      <span id=\"sp-fw-setup\" class=\"sp-fw-spanbutton\" title=\"打开设置窗口\">设置</span>\n      <span id=\"sp-fw-savebutton\" class=\"sp-fw-spanbutton\" title=\"保存设置\">保存</span>\n    </div>\n  </div>\n</div>\n")
	    ; __line = 107;
	  return __output;
	} catch (e) {
	  rethrow(e, __lines, __filename, __line, escapeFn);
	}

	}

	function anonymous(locals, escapeFn, include, rethrow
	) {
	rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc){
	  var lines = str.split('\n');
	  var start = Math.max(lineno - 3, 0);
	  var end = Math.min(lines.length, lineno + 3);
	  var filename = esc(flnm); // eslint-disable-line
	  // Error context
	  var context = lines.slice(start, end).map(function (line, i){
	    var curr = i + start + 1;
	    return (curr == lineno ? ' >> ' : '    ')
	      + curr
	      + '| '
	      + line;
	  }).join('\n');

	  // Alter exception message
	  err.path = filename;
	  err.message = (filename || 'ejs') + ':'
	    + lineno + '\n'
	    + context + '\n\n'
	    + err.message;

	  throw err;
	};
	escapeFn = escapeFn || function (markup) {
	  return markup == undefined
	    ? ''
	    : String(markup)
	      .replace(_MATCH_HTML, encode_char);
	};
	var _ENCODE_HTML_RULES = {
	      "&": "&amp;"
	    , "<": "&lt;"
	    , ">": "&gt;"
	    , '"': "&#34;"
	    , "'": "&#39;"
	    }
	  , _MATCH_HTML = /[&<>'"]/g;
	function encode_char(c) {
	  return _ENCODE_HTML_RULES[c] || c;
	}var __line = 1
	  , __lines = "<div><%= locals.notice %></div>\n<div class=\"sp-prefs-spinner\"><div class=\"rect1\"></div><div class=\"rect2\"></div><div class=\"rect3\"></div><div class=\"rect4\"></div></div>\n"
	  , __filename = undefined;
	try {
	  var __output = "";
	  function __append(s) { if (s !== undefined && s !== null) __output += s; }
	    ; __append("<div>")
	    ; __append(escapeFn( locals.notice ))
	    ; __append("</div>\n<div class=\"sp-prefs-spinner\"><div class=\"rect1\"></div><div class=\"rect2\"></div><div class=\"rect3\"></div><div class=\"rect4\"></div></div>\n")
	    ; __line = 3;
	  return __output;
	} catch (e) {
	  rethrow(e, __lines, __filename, __line, escapeFn);
	}

	}

	var en_US$1={spinner:{update:"Updating ....",reset:"Reseting ...."}};var zh_CN$1={spinner:{update:"更新中 ....",reset:"重置中 ...."}};var i8n = {en_US:en_US$1,zh_CN:zh_CN$1};

	var en_US = {};
	en_US["upgradeNotification"] = anonymous$6;
	en_US["sp-prefs"] = anonymous$5;
	en_US["floatWindow"] = anonymous$4;
	var zh_CN = {};
	zh_CN["upgradeNotification"] = anonymous$3;
	zh_CN["sp-prefs"] = anonymous$2;
	zh_CN["floatWindow"] = anonymous$1;
	var jsonTemplate = {};
	jsonTemplate["spinner"] = anonymous;
	var ejs = {
	  en_US,
	  zh_CN
	};
	var availableJsonLangs = Object.keys(i8n);
	var availableEjsLangs = Object.keys(ejs);

	for (var _i = 0, _availableEjsLangs = availableEjsLangs; _i < _availableEjsLangs.length; _i++) {
	  var lang = _availableEjsLangs[_i];

	  if (availableJsonLangs.includes(lang)) {
	    var li8n = i8n[lang]; // spinner

	    var spinner = {};

	    for (var _i2 = 0, _Object$entries = Object.entries(li8n.spinner); _i2 < _Object$entries.length; _i2++) {
	      var _Object$entries$_i = slicedToArray(_Object$entries[_i2], 2),
	          k = _Object$entries$_i[0],
	          v = _Object$entries$_i[1];

	      spinner[k] = jsonTemplate.spinner({
	        notice: v
	      });
	    }

	    ejs[lang].spinner = spinner;
	  } else {
	    ejs[lang].spinner = ejs.en_US.spinner;
	  }
	}

	var availableLangs = Object.keys(ejs);
	var template = ejs.en_US;

	function langDetect() {
	  var userLang = navigator.language || navigator.userLanguage;

	  if (userLang.indexOf('zh') !== -1) {
	    return 'zh_CN';
	  } else {
	    return 'en_US';
	  }
	}

	var userLang = langDetect();
	function setLang(x) {
	  if (availableLangs.includes(x)) {
	    userLang = x;
	    template = ejs[userLang];
	  } else {
	    userLang = 'en_US';
	    template = ejs[userLang];
	  }
	}

	var magicKey = {
	  function: "\0",
	  undefined: "\x01",
	  null: "\x02"
	};

	function replacer(_key, val) {
	  if (val instanceof RegExp) {
	    return `${val.toString()}`;
	  }

	  if (typeof val === 'function') {
	    return `${magicKey.function}${val.toString()}`;
	  }

	  if (val === null) {
	    return `${magicKey.null}`;
	  }

	  if (val === undefined) {
	    return `${magicKey.undefined}`;
	  }

	  return val;
	}

	function reviver(_key, val) {
	  if (typeof val !== 'string') {
	    return val;
	  }

	  if (val.length === 0) return val;
	  var mk = val.slice(0, 1);

	  try {
	    switch (mk) {
	      case magicKey.undefined:
	        return undefined;

	      case magicKey.null:
	        return null;

	      case magicKey.function:
	        return new Function(`return ${val.slice(1)}`)();

	      default:
	        return val;
	    }
	  } catch (error) {
	    // CSP rule may block new Function
	    return null;
	  }
	}

	function stringify(obj) {
	  return JSON.stringify(obj, replacer);
	}
	function parse(obj) {
	  return JSON.parse(obj, reviver);
	}
	var JSONE = {
	  stringify,
	  parse
	};

	var baseFlatten = _baseFlatten;

	/**
	 * Flattens `array` a single level deep.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to flatten.
	 * @returns {Array} Returns the new flattened array.
	 * @example
	 *
	 * _.flatten([1, [2, [3, [4]], 5]]);
	 * // => [1, 2, [3, [4]], 5]
	 */
	function flatten(array) {
	  var length = array == null ? 0 : array.length;
	  return length ? baseFlatten(array, 1) : [];
	}

	var flatten_1 = flatten;

	var baseGetTag = _baseGetTag,
	    isObjectLike = isObjectLike_1;

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]';

	/**
	 * Checks if `value` is classified as a boolean primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
	 * @example
	 *
	 * _.isBoolean(false);
	 * // => true
	 *
	 * _.isBoolean(null);
	 * // => false
	 */
	function isBoolean(value) {
	  return value === true || value === false ||
	    (isObjectLike(value) && baseGetTag(value) == boolTag);
	}

	var isBoolean_1 = isBoolean;

	var baseKeys = _baseKeys,
	    getTag = _getTag,
	    isArguments = isArguments_1,
	    isArray = isArray_1,
	    isArrayLike = isArrayLike_1,
	    isBuffer = isBuffer$3.exports,
	    isPrototype = _isPrototype,
	    isTypedArray = isTypedArray_1;

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    setTag = '[object Set]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if `value` is an empty object, collection, map, or set.
	 *
	 * Objects are considered empty if they have no own enumerable string keyed
	 * properties.
	 *
	 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
	 * jQuery-like collections are considered empty if they have a `length` of `0`.
	 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
	 * @example
	 *
	 * _.isEmpty(null);
	 * // => true
	 *
	 * _.isEmpty(true);
	 * // => true
	 *
	 * _.isEmpty(1);
	 * // => true
	 *
	 * _.isEmpty([1, 2, 3]);
	 * // => false
	 *
	 * _.isEmpty({ 'a': 1 });
	 * // => false
	 */
	function isEmpty(value) {
	  if (value == null) {
	    return true;
	  }
	  if (isArrayLike(value) &&
	      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
	        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
	    return !value.length;
	  }
	  var tag = getTag(value);
	  if (tag == mapTag || tag == setTag) {
	    return !value.size;
	  }
	  if (isPrototype(value)) {
	    return !baseKeys(value).length;
	  }
	  for (var key in value) {
	    if (hasOwnProperty.call(value, key)) {
	      return false;
	    }
	  }
	  return true;
	}

	var isEmpty_1 = isEmpty;

	/**
	 * Checks if `value` is `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
	 * @example
	 *
	 * _.isNull(null);
	 * // => true
	 *
	 * _.isNull(void 0);
	 * // => false
	 */

	function isNull(value) {
	  return value === null;
	}

	var isNull_1 = isNull;

	/**
	 * Checks if `value` is `undefined`.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
	 * @example
	 *
	 * _.isUndefined(void 0);
	 * // => true
	 *
	 * _.isUndefined(null);
	 * // => false
	 */

	function isUndefined(value) {
	  return value === undefined;
	}

	var isUndefined_1 = isUndefined;

	// #if IS_REMOVE
	// lite verions of https://github.com/machsix/iconv-browser
	//
	//
	// another option: https://github.com/r12a/r12a.github.io/blob/master/apps/conversion/conversionfunctions.js
	// to use rollup, you need to set `ignoreGlobal = true` for commonjs
	//                or manually commented out
	// #endif

	/**
	 * Arraybuffer -> Hex
	 * @param {ArrayBuffer} buffer The bytes in an ArrayBuffer.
	 * @returns {array} hex representation of bytes
	 */
	function buf2hex(buffer) {
	  // buffer is an ArrayBuffer
	  return Array.prototype.map.call(new Uint8Array(buffer), function (x) {
	    return ('00' + x.toString(16)).slice(-2);
	  });
	}
	/**
	 * Encode a string into utf8 arraybuffer
	 * @param {string} text string to encode
	 * @returns {ArrayBuffer} encoded string
	 */


	function encode(text) {
	  return new TextEncoder().encode(text);
	}
	/**
	 *
	 * @param {string} text string to encode
	 * @returns {array} array of hex value for the corresponding arraybuffer
	 */

	function encodeHex(text) {
	  return buf2hex(encode(text));
	}
	function encodeURIE(text) {

	  function isURIcomponent(str) {
	    return /^[A-Za-z0-9;,/?:@&=+$-_.!~*'()#]*$/.test(str);
	  }

	  return [].map.call(text, function (x) {
	    if (isURIcomponent(x)) {
	      return x;
	    } else {
	      return `%${encodeHex(x).map(function (x) {
        return x.toUpperCase();
      }).join('%')}`;
	    }
	  }).join('');
	}

	var lowercaseKeys = (function (object) {
	  var result = {};

	  for (var _i = 0, _Object$entries = Object.entries(object); _i < _Object$entries.length; _i++) {
	    var _Object$entries$_i = slicedToArray(_Object$entries[_i], 2),
	        key = _Object$entries$_i[0],
	        value = _Object$entries$_i[1];

	    result[key.toLowerCase()] = value;
	  }

	  return result;
	});

	function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { defineProperty$2(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	var isNullOrUndefined = function isNullOrUndefined(x) {
	  return isUndefined_1(x) || isNull_1(x);
	};

	var queryString = {
	  parse(text) {
	    var query = text.replace(/^\?/, '');
	    var search = /([^&=]+)=?([^&]*)/g;

	    var decode = function decode(s) {
	      return decodeURIComponent(s.replace(/\+/g, ' '));
	    };

	    var searchParams = {};
	    var match;

	    while (match = search.exec(query)) {
	      searchParams[decode(match[1])] = decode(match[2]);
	    }

	    return searchParams;
	  },

	  stringify(params) {
	    return Object.keys(params).map(function (key) {
	      return key + '=' + params[key];
	    }).join('&');
	  }

	};
	/** @type {RequestObject} */

	var defaults = {
	  method: 'GET',
	  retry: 0,
	  headers: {},
	  stream: false,
	  cache: true,
	  dnsCache: false,
	  encoding: null,
	  prefixUrl: '',
	  timeout: 0,
	  // wait forever
	  searchParams: {},
	  // queryString for get
	  body: null,
	  // post body
	  data: null,
	  // equivalent to body
	  // additional options from GM.xmlHttpRequest
	  binary: false,
	  user: null,
	  password: null,
	  context: null,
	  html: false,
	  // set to true to overrideMimeType = `text/html`;
	  noHeader: false,
	  cookie: null,
	  // true: document.cookie, string: specific cookie
	  withCredentials: true // VM for cross domain cookie https://github.com/violentmonkey/violentmonkey/issues/761

	};
	/**
	 * Normalize options and merge with defaults
	 * @param {RequestObject} options got style request options
	 * @param {RequestObject} thisDefaults default values to overwrite options
	 * @returns {RequestObject} normalized options
	 */

	function normalizeArguments(options) {
	  var thisDefaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaults;
	  var keyNotMerge = []; // `options.headers`

	  if (!isNullOrUndefined(options.headers) && isString_1(options.headers)) {
	    try {
	      options.headers = JSON.parse(options.headers);
	    } catch (error) {
	      console.error(`[Super-preloader] [got] header: ${options.headers} error: ${error}`);
	      delete options.headers;
	    }
	  }

	  if (!isNullOrUndefined(options.headers) && !isEmpty_1(options.headers)) {
	    options.headers = lowercaseKeys(options.headers);
	    var headers = options.headers;

	    if (headers) {
	      for (var _i = 0, _Object$entries = Object.entries(headers); _i < _Object$entries.length; _i++) {
	        var _Object$entries$_i = slicedToArray(_Object$entries[_i], 2),
	            key = _Object$entries$_i[0],
	            value = _Object$entries$_i[1];

	        if (isNull_1(value) || isUndefined_1(value)) {
	          delete headers[key];
	        }
	      }
	    }
	  }

	  options.headers = _objectSpread$2(_objectSpread$2({}, thisDefaults.headers), options.headers);

	  if (isEmpty_1(options.headers)) {
	    delete options.headers;
	  }

	  keyNotMerge.push('headers'); // `options.prefixUrl`

	  if (!isNullOrUndefined(options.prefixUrl)) {
	    try {
	      options.prefixUrl = options.prefixUrl.toString();

	      if (!options.prefixUrl.endsWith('/')) {
	        options.prefixUrl += '/';
	      }
	    } catch (error) {
	      delete options.prefixUrl;
	    }
	  } // `options.method`


	  options.method = options.method.toUpperCase(); // `options.timeout`

	  if (options.timeout) {
	    options.timeout = parseInt(options.timeout);
	  } // `options.html` and `options.encoding`


	  if (options.hasOwnProperty('html')) {
	    if (options.html) {
	      options.binary = false;
	    }
	  } else {
	    options.html = thisDefaults.html;
	  }

	  keyNotMerge.push('encoding');
	  keyNotMerge.push('html'); // `options.searchParams` , searchParams must be encoded in "utf8"

	  if (options.searchParams) {
	    if (isString_1(options.searchParams)) {
	      options.searchParams = queryString.parse(options.searchParams);
	    }
	  } else {
	    options.searchParams = {};
	  }

	  keyNotMerge.push('searchParams'); // `options.body` => `options.data`

	  if (options.body) {
	    options.data = options.body;
	  } // merge with thisDefaults


	  for (var _key in thisDefaults) {
	    if (!(_key in keyNotMerge)) {
	      if (isNullOrUndefined(options[_key])) {
	        options[_key] = thisDefaults[_key];
	      }
	    }
	  } // `options.cookie`, dirty fix for older versions of TM and VM on Firefox


	  if (!isNullOrUndefined(options.cookie)) {
	    if (isBoolean_1(options.cookie) && options.cookie) {
	      options.cookie = document.cookie;
	    }

	    if (isString_1(options.cookie)) {
	      if (options.hasOwnProperty('headers')) {
	        options.headers.cookie = options.cookie;
	      } else {
	        options.headers = {
	          cookie: options.cookie
	        };
	      }
	    }
	  }

	  if (options.noHeader || isEmpty_1(options.headers)) {
	    delete options.headers;
	  } // `options.cache`


	  if (isBoolean_1(options.cache) && !options.cache) {
	    options.searchParams.timestamp = new Date().getTime();
	  }

	  if (isEmpty_1(options.searchParams)) {
	    delete options.searchParams;
	  }

	  return options;
	}
	/**
	 * Convert got style options to options supported by GM.xmlhttpRequest
	 * You need to add callback after call this function
	 * @param {RequestObject} options Got-style options
	 * @returns {object} GM-style options
	 */


	function gotopt2gmopt(options) {
	  var config = {};
	  ['method', 'url', 'timeout', 'headers', 'binary', 'user', 'password', 'context', 'withCredentials', 'data'].forEach(function (key) {
	    if (!isNullOrUndefined(options[key])) {
	      config[key] = options[key];
	    }
	  }); // process `options.prefixUrl`

	  if (options.prefixUrl) {
	    config.url = options.prefixUrl + options.url;
	  } // process `options.encoding`


	  if (options.html && isString_1(options.encoding)) {
	    config.overrideMimeType = `text/html; charset=${options.encoding}`;
	  } // process `options.searchParams`


	  if (!isNullOrUndefined(options.searchParams)) {
	    config.url += `?${queryString.stringify(options.searchParams)}`;
	  }

	  config.url = encodeURIE(config.url);
	  return config;
	}
	/**
	 * Parse input for post and get method
	 * @param {string} url Link of request
	 * @param {RequestObject} optionsIn Option of request
	 * @returns {RequestObject} option for request
	 */


	function parseArgument(url, optionsIn) {
	  var gotOptions = _objectSpread$2({}, optionsIn); // shadow copy


	  if (isNullOrUndefined(optionsIn)) {
	    if (isObject_1(url)) {
	      gotOptions = _objectSpread$2({}, url);
	    }
	  }

	  if (isString_1(url)) {
	    gotOptions.url = url;
	  }

	  return gotOptions;
	}
	/**
	 * Create an instance of got
	 * @param {RequestObject} thisDefaults default option
	 * @returns {object} an instance of got
	 */


	function create(thisDefaults) {
	  /**
	   * General interface of request
	   * @param {object} optionsIn - options of get
	   * @returns {Pormise<ResponseObject>} Promise of response
	   */
	  var request = function request(optionsIn) {
	    var gotOptions = _objectSpread$2({}, optionsIn); // make a shadow copy
	    // merge parameter


	    gotOptions = normalizeArguments(gotOptions, request.defaults); // got => gm

	    var gmOptions = gotopt2gmopt(gotOptions);
	    logger.debug("[Super-preloader]", 'GM_xmlhttpRequest', gmOptions); // helper functions

	    var genCallback = function genCallback(executor, name, retryCount) {
	      return function (xmlResponse) {
	        // convert XMLHttpRequest response to Node.js HTTP response
	        // Note: retryCount is added manually

	        /** @type {ResponseObject} */
	        var nodeResponse = {
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
	    };
	    /**
	     * Convert GM callback stype API to Promise style
	     * @param {number} retryCount number of retry
	     * @returns {Promise<ResponseObject>} Promise of response
	     */


	    var genPromise = function genPromise() {
	      var retryCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      return new Promise(function (resolve, reject) {
	        gmOptions.onload = genCallback(resolve, 'onload', retryCount);
	        ['onabort', 'onerror', 'ontimeout'].forEach(function (method) {
	          gmOptions[method] = genCallback(reject, method, retryCount);
	        });
	        GM.xmlHttpRequest(gmOptions);
	      });
	    };

	    return new Promise(function (resolve, reject) {
	      var retryPromise = function retryPromise(retryCount) {
	        genPromise(retryCount).then(function (nodeResponse) {
	          return resolve(nodeResponse);
	        }).catch(function (nodeResponse) {
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

	  request.defaults = {}; // eslint-disable-next-line guard-for-in

	  for (var key in defaults) {
	    request.defaults[key] = isNullOrUndefined(thisDefaults[key]) ? defaults[key] : thisDefaults[key];
	  }
	  /**
	   *
	   * @param {string} url Link of request
	   * @param {RequestObject} optionsIn Request option
	   * @returns {Promise<ResponseObject>} promise of request
	   */


	  request.get = function (url, optionsIn) {
	    var options = parseArgument(url, optionsIn);
	    options.method = 'GET';
	    return this(options);
	  };

	  request.post = function (url, optionsIn) {
	    var options = parseArgument(url, optionsIn);
	    options.method = 'POST';
	    return this(options);
	  };

	  request.create = create;
	  return request;
	}

	var got$1 = create(defaults);

	function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { defineProperty$2(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function _createForOfIteratorHelper$1(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

	function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

	function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
	var got = got$1.create({
	  cache: false
	}); // Definition of provider

	class RuleProvider {
	  /**
	   * Constructor of a rule provider
	   * @param {string} name Identifier of rule provider
	   * @param {array} url URL to fetch rule
	   * @param {string} detailUrl URL to fetch rule detail
	   * @param {function} ruleParser parser to parse axios response
	   */
	  constructor(name, url, detailUrl) {
	    var ruleParser = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
	    this.name = name;
	    this.url = isArray_1(url) ? url : [url];
	    this.detailUrl = detailUrl;
	    this.rule = [];

	    if (isFunction_1(ruleParser)) {
	      this.ruleParser = ruleParser;
	    } else {
	      this.ruleParser = function (res) {
	        return JSON.parse(res.data);
	      };
	    }
	  }

	  setRule(rule) {
	    this.rule = rule;
	  }

	  getRule() {
	    return this.rule;
	  }
	  /**
	   * Download rule and return the rule
	   * @returns {array} rule
	   */


	  downloadRule() {
	    var _this = this;

	    return asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
	      var rule, e, _iterator, _step, url, res;

	      return regenerator.wrap(function _callee$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              rule = [];
	              e = null;
	              _iterator = _createForOfIteratorHelper$1(_this.url);
	              _context.prev = 3;

	              _iterator.s();

	            case 5:
	              if ((_step = _iterator.n()).done) {
	                _context.next = 22;
	                break;
	              }

	              url = _step.value;
	              _context.prev = 7;
	              _context.next = 10;
	              return got.get(url);

	            case 10:
	              res = _context.sent;
	              rule = _this.ruleParser(res);
	              logger.info("[Super-preloader]", `[DownloadRule] ${_this.name} from ${url} [Status] Success`);
	              return _context.abrupt("break", 22);

	            case 16:
	              _context.prev = 16;
	              _context.t0 = _context["catch"](7);
	              logger.error("[Super-preloader]", `[DownloadRule] ${_this.name} from ${url} [Status] ${_context.t0}`);
	              e = _context.t0;

	            case 20:
	              _context.next = 5;
	              break;

	            case 22:
	              _context.next = 27;
	              break;

	            case 24:
	              _context.prev = 24;
	              _context.t1 = _context["catch"](3);

	              _iterator.e(_context.t1);

	            case 27:
	              _context.prev = 27;

	              _iterator.f();

	              return _context.finish(27);

	            case 30:
	              if (!rule) {
	                _context.next = 34;
	                break;
	              }

	              return _context.abrupt("return", rule);

	            case 34:
	              throw new Error(e);

	            case 35:
	            case "end":
	              return _context.stop();
	          }
	        }
	      }, _callee, null, [[3, 24, 27, 30], [7, 16]]);
	    }))();
	  }
	  /**
	   * Update rule
	   * @param {object} lastUpdate Date
	   * @returns {array} rule
	   */


	  updateRule(lastUpdate) {
	    var _this2 = this;

	    return asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2() {
	      var res, detail, ruleLastUpdate, rule;
	      return regenerator.wrap(function _callee2$(_context2) {
	        while (1) {
	          switch (_context2.prev = _context2.next) {
	            case 0:
	              res = null;
	              _context2.prev = 1;
	              _context2.next = 4;
	              return got.get(_this2.detailUrl);

	            case 4:
	              res = _context2.sent;
	              _context2.next = 11;
	              break;

	            case 7:
	              _context2.prev = 7;
	              _context2.t0 = _context2["catch"](1);
	              logger.error("[Super-preloader]", `[UpdateRule] ${_this2.name} [Status] ${_context2.t0}`); // mimic Promise.allSettled

	              return _context2.abrupt("return", {
	                status: 'rejected',
	                reason: _context2.t0
	              });

	            case 11:
	              detail = res.data;
	              ruleLastUpdate = new Date(detail.updated_at);

	              if (!(lastUpdate < ruleLastUpdate || _this2.rule.length < 1)) {
	                _context2.next = 27;
	                break;
	              }

	              _context2.prev = 14;
	              _context2.next = 17;
	              return _this2.downloadRule();

	            case 17:
	              rule = _context2.sent;
	              logger.info("[Super-preloader]", `[UpdateRule] ${_this2.name} [Status] Success`);
	              _this2.rule = rule;
	              _context2.next = 25;
	              break;

	            case 22:
	              _context2.prev = 22;
	              _context2.t1 = _context2["catch"](14);
	              return _context2.abrupt("return", {
	                status: 'rejected',
	                reason: _context2.t1
	              });

	            case 25:
	              _context2.next = 28;
	              break;

	            case 27:
	              logger.info("[Super-preloader]", `[UpdateRule] ${_this2.name} [Status] No need to update`);

	            case 28:
	              return _context2.abrupt("return", {
	                status: 'fulfilled',
	                value: _this2.rule
	              });

	            case 29:
	            case "end":
	              return _context2.stop();
	          }
	        }
	      }, _callee2, null, [[1, 7], [14, 22]]);
	    }))();
	  }

	} // Providers


	var MyData = new RuleProvider('machsix.github.io', ['https://machsix.github.io/Super-preloader/mydata.json', 'https://super-preloader.netlify.com/mydata.json'], 'https://machsix.github.io/Super-preloader/mydata_detail.json');
	var WeData = new RuleProvider('wedata.net', ['http://wedata.net/databases/AutoPagerize/items.json', 'https://machsix.github.io/Super-preloader/wedata.json'], 'http://wedata.net/databases/AutoPagerize.json', function (res) {
	  return (isString_1(res.data) ? JSON.parse(res.data) : res.data).filter(function (i) {
	    var nameFilter = ['Generic Posts Rule', 'hAtom'];

	    for (var j = 0; j < nameFilter.length; j++) {
	      if (nameFilter[j].indexOf(i.name) >= 0) {
	        return false;
	      }
	    }

	    return true;
	  }).map(function (i) {
	    return _objectSpread$1({
	      name: i.name,
	      resource_url: i.resource_url
	    }, i.data);
	  });
	});
	var p = [MyData, WeData];
	/**
	 * Module to handle json doc
	 * @module jsonRuleLoader
	 */

	var jsonRuleLoader = {
	  providers: p,
	  rule: p.map(function () {
	    return [];
	  }),
	  expire: new Date('1992-05-15'),
	  updatePeriodInDay: 1,

	  resetExpire() {
	    this.expire = new Date('1992-05-15');
	  },

	  getRule() {
	    return flatten_1(this.rule);
	  },

	  saveRule() {
	    var _arguments = arguments,
	        _this3 = this;

	    return asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee3() {
	      var saveDB;
	      return regenerator.wrap(function _callee3$(_context3) {
	        while (1) {
	          switch (_context3.prev = _context3.next) {
	            case 0:
	              saveDB = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : true;
	              _context3.next = 3;
	              return GM.setValue('jsonRuleInfo', {
	                expire: _this3.expire,
	                updatePeriodInDay: _this3.updatePeriodInDay
	              });

	            case 3:
	              if (!saveDB) {
	                _context3.next = 6;
	                break;
	              }

	              _context3.next = 6;
	              return GM.setValue('SITEINFO_json', _this3.rule);

	            case 6:
	            case "end":
	              return _context3.stop();
	          }
	        }
	      }, _callee3);
	    }))();
	  },

	  updateRule() {
	    var _arguments2 = arguments,
	        _this4 = this;

	    return asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee4() {
	      var force, lastUpdate, today, promises;
	      return regenerator.wrap(function _callee4$(_context4) {
	        while (1) {
	          switch (_context4.prev = _context4.next) {
	            case 0:
	              force = _arguments2.length > 0 && _arguments2[0] !== undefined ? _arguments2[0] : false;

	              if (force) {
	                _this4.resetExpire();
	              }

	              lastUpdate = new Date(+_this4.expire - _this4.updatePeriodInDay * 24 * 60 * 60 * 1000);
	              today = new Date();

	              if (!(today > _this4.expire)) {
	                _context4.next = 10;
	                break;
	              }

	              promises = _this4.providers.map(function (x) {
	                return x.updateRule(lastUpdate);
	              });
	              _context4.next = 8;
	              return Promise.all(promises).then(function (values) {
	                var status = values.map(function (_ref) {
	                  var status = _ref.status;
	                  return status === 'fulfilled' || false;
	                });

	                if (status.every(function (x) {
	                  return x;
	                })) {
	                  _this4.rule = values.map(function (_ref2) {
	                    var value = _ref2.value;
	                    return value ? value : _this4.rule;
	                  });
	                  _this4.expire = new Date(+today + _this4.updatePeriodInDay * 24 * 60 * 60 * 1000);
	                  logger.info("[Super-preloader]", `[UpdateRule] Next update at: ${_this4.expire}`);

	                  _this4.saveRule();
	                } else {
	                  _this4.expire = today;
	                  logger.error("[Super-preloader]", '[UpdateRule] Fail');

	                  _this4.saveRule(false);
	                }
	              });

	            case 8:
	              _context4.next = 11;
	              break;

	            case 10:
	              logger.info("[Super-preloader]", `[UpdateRule] Next update at: ${_this4.expire}`);

	            case 11:
	            case "end":
	              return _context4.stop();
	          }
	        }
	      }, _callee4);
	    }))();
	  },

	  loadRule() {
	    var _arguments3 = arguments,
	        _this5 = this;

	    return asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee5() {
	      var forceUpdateRule, _yield$Promise$all, _yield$Promise$all2, jsonRuleInfo, rule;

	      return regenerator.wrap(function _callee5$(_context5) {
	        while (1) {
	          switch (_context5.prev = _context5.next) {
	            case 0:
	              forceUpdateRule = _arguments3.length > 0 && _arguments3[0] !== undefined ? _arguments3[0] : false;
	              _context5.next = 3;
	              return Promise.all([GM.getValue('jsonRuleInfo', {
	                expire: _this5.expire,
	                updatePeriodInDay: _this5.updatePeriodInDay
	              }), GM.getValue('SITEINFO_json', _this5.rule)]);

	            case 3:
	              _yield$Promise$all = _context5.sent;
	              _yield$Promise$all2 = slicedToArray(_yield$Promise$all, 2);
	              jsonRuleInfo = _yield$Promise$all2[0];
	              rule = _yield$Promise$all2[1];
	              if (isString_1(jsonRuleInfo)) jsonRuleInfo = JSON.parse(jsonRuleInfo);
	              if (isString_1(rule)) rule = JSON.parse(rule);
	              _this5.expire = new Date(jsonRuleInfo.expire);
	              _this5.updatePeriodInDay = parseInt(jsonRuleInfo.updatePeriodInDay);
	              _this5.rule = rule;

	              if (!(forceUpdateRule || _this5.getRule().length === 0)) {
	                _context5.next = 15;
	                break;
	              }

	              _context5.next = 15;
	              return _this5.updateRule(true);

	            case 15:
	              return _context5.abrupt("return", _this5.getRule());

	            case 16:
	            case "end":
	              return _context5.stop();
	          }
	        }
	      }, _callee5);
	    }))();
	  }

	};

	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty$2(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	/**@type {ISettings} */

	var factorySettings = {
	  prefs: {
	    floatWindow: true,
	    // 显示悬浮窗
	    customCSS: '',
	    FW_position: 2,
	    // 1:出现在左上角;2:出现在右上角;3：出现在右下角;4：出现在左下角;
	    FW_offset: [20, 38],
	    // 偏离版边的垂直和水平方向的数值..(单位:像素)
	    FW_RAS: true,
	    // 点击悬浮窗上的保存按钮..立即刷新页面;
	    pauseA: true,
	    // 快速停止自动翻页(当前模式为翻页模式的时候生效.);
	    Pbutton: [2, 0, 0],
	    // 需要按住的键.....0: 不按住任何键;1: shift鍵;2: ctrl鍵; 3: alt鍵;(同时按3个键.就填 1 2 3)(一个都不按.就填 0 0 0)
	    mouseA: true,
	    // 按住鼠标左键..否则.双击;
	    Atimeout: 200,
	    // 按住左键时..延时.多少生效..(单位:ms);
	    stop_ipage: true,
	    // 如果在连续翻页过程中暂停.重新启用后.不在继续..连续翻页..
	    Aplus: true,
	    // 自动翻页模式的时候..提前预读好一页..就是翻完第1页,立马预读第2页,翻完第2页,立马预读第3页..(大幅加快翻页快感-_-!!)(建议开启)..
	    sepP: true,
	    // 翻页模式下.分隔符.在使用上滚一页或下滚一页的时候是否保持相对位置..
	    sepT: true,
	    // 翻页模式下.分隔符.在使用上滚一页或下滚一页的时候使用动画过渡..
	    s_method: 3,
	    // 动画方式 0-10 一种11种动画效果..自己试试吧
	    s_ease: 2,
	    // 淡入淡出效果 0：淡入 1：淡出 2：淡入淡出
	    s_FPS: 60,
	    // 帧速.(单位:帧/秒)
	    s_duration: 333,
	    // 动画持续时长.(单位:ms);
	    DisableI: true,
	    // 只在顶层窗口加载JS..提升性能..如果开启了这项,那么DIExclude数组有效,里面的网页即使不在顶层窗口也会加载....
	    arrowKeyPage: false,
	    // 允许使用 左右方向键 翻页..
	    sepStartN: 2,
	    // 翻页导航上的,从几开始计数.(貌似有人在意这个,所以弄个开关出来,反正简单.-_-!!)
	    // 新增或修改的
	    forceTargetWindow: true,
	    // 下一页的链接设置成在新标签页打开
	    debug: true,
	    enableHistory: false,
	    // 把下一页链接添加到历史记录
	    autoGetPreLink: false,
	    // 一开始不自动查找上一页链接，改为调用时再查找
	    excludes: '',
	    custom_siteinfo: '[]',
	    lazyImgSrc: 'zoomfile|file|original|load-src|_src|imgsrc|real_src|src2|data-lazyload-src|data-ks-lazyload|data-lazyload|data-src|data-original|data-thumb|data-imageurl|data-defer-src|data-placeholder',
	    ChineseUI: false,
	    dblclick_pause: false,
	    factoryCheck: true,
	    disappearDelay: -1,
	    //暂停翻页状态栏disappearDelay ms后消失, -1为不消失
	    numOfRule: 4308,
	    disableBuiltinRules: false,
	    //禁用内建打包在代码里的规则
	    disableBuiltinSubscriptionRules: false //禁用内建订阅远程的规则

	  },
	  SITEINFO_D: {
	    enable: true,
	    // 启用
	    useiframe: false,
	    // (预读)是否使用iframe..
	    viewcontent: false,
	    // 查看预读的内容,显示在页面的最下方.
	    autopager: {
	      enable: true,
	      // 启用自动翻页...
	      force_enable: false,
	      // 默认启用强制拼接
	      manualA: false,
	      // 手动翻页.
	      useiframe: false,
	      // (翻页)是否使用iframe..
	      iloaded: false,
	      // 是否在iframe完全load后操作..否则在DOM完成后操作
	      itimeout: 0,
	      // 延时多少ms后,在操作..
	      newIframe: false,
	      remain: 1,
	      // 剩余页面的高度..是显示高度的 remain 倍开始翻页..
	      maxpage: 99,
	      // 最多翻多少页..
	      ipages: [false, 2],
	      // 立即翻页,第一项是控制是否在js加载的时候立即翻第二项(必须小于maxpage)的页数,比如[true,3].就是说JS加载后.立即翻3页.
	      separator: true,
	      // 显示翻页导航..(推荐显示.)
	      separatorReal: true,
	      // 显示真实的页数
	      reload: false,
	      // 强制重载iframe
	      sandbox: false,
	      // Iframe sandbox 选项
	      relatedObj: true
	    }
	  },
	  autoMatch: {
	    keyMatch: true,
	    // 是否启用关键字匹配
	    cases: false,
	    // 关键字区分大小写....
	    digitalCheck: true,
	    // 对数字连接进行检测,从中找出下一页的链接
	    pfwordl: {
	      // 关键字前面的字符限定.
	      previous: {
	        // 上一页关键字前面的字符,例如 "上一页" 要匹配 "[上一页" ,那么prefix要的设置要不小于1,并且character要包含字符 "["
	        enable: true,
	        maxPrefix: 3,
	        character: [' ', '　', '[', '［', '<', '＜', '?', '?', '<<', '『', '「', '【', '(', '←']
	      },
	      next: {
	        // 下一页关键字前面的字符
	        enable: true,
	        maxPrefix: 2,
	        character: [' ', '　', '[', '［', '『', '「', '【', '(']
	      }
	    },
	    sfwordl: {
	      // 关键字后面的字符限定.
	      previous: {
	        // 上一页关键字后面的字符
	        enable: true,
	        maxSubfix: 2,
	        character: [' ', '　', ']', '］', '』', '」', '】', ')']
	      },
	      next: {
	        // 下一页关键字后面的字符
	        enable: true,
	        maxSubfix: 3,
	        character: [' ', '　', ']', '］', '>', '﹥', '?', '?', '>>', '』', '」', '】', ')', '→']
	      }
	    },
	    useiframe: false,
	    // (预读)是否使用iframe..
	    viewcontent: false,
	    // 查看预读的内容,显示在页面的最下方.
	    FA: {
	      // 强制拼接 选项 功能设置.
	      enable: false,
	      // 默认启用 强制拼接
	      manualA: false,
	      // 手动翻页.
	      useiframe: false,
	      // (翻页)是否使用iframe..
	      iloaded: false,
	      // (只在opera有效)如果使用iframe翻页..是否在iframe完全load后操作..否则在DOM完成后操作
	      itimeout: 0,
	      // 当使用iframe翻页时在完成后继续等待多少ms后,在操作..
	      remain: 1,
	      // 剩余页面的高度..是显示高度的 remain 倍开始翻页..
	      maxpage: 99,
	      // 最多翻多少页..
	      ipages: [false, 2],
	      // 立即翻页,第一项是控制是否在js加载的时候立即翻第二项(必须小于maxpage)的页数,比如[true,3].就是说JS加载后.立即翻3页.
	      separator: true // 显示翻页导航..(推荐显示.)..

	    }
	  },
	  version: '1.0.0' // set a small value for first-time installation

	}; // const settingsKeys = ["prefs", "SITEINFO_D", "autoMatch", "version"];

	/** @type {string[]} */

	var settingsKeys = Object.keys(factorySettings);
	/** @type {ISettings} */
	//@ts-ignore Partial<ISettings> is temp.

	var settings = {};
	/**
	 * Merge a new object to the old one
	 * @param {object} oldProp old property
	 * @param {object} newProp new property
	 * @returns {boolean} whether the object is different
	 */

	function mergeProperty(oldProp, newProp) {
	  var hasDifferency = false;

	  var newKeys = difference_1(Object.keys(newProp), Object.keys(oldProp));

	  newKeys.forEach(function (key) {
	    oldProp[key] = newProp[key];
	    hasDifferency = true;
	  });

	  var oldKeys = difference_1(Object.keys(oldProp), Object.keys(newProp));

	  oldKeys.forEach(function (key) {
	    delete oldProp[key];
	    hasDifferency = true;
	  });

	  for (var _i = 0, _Object$keys = Object.keys(oldProp); _i < _Object$keys.length; _i++) {
	    var k = _Object$keys[_i];

	    if (!Array.isArray(oldProp[k]) && typeof oldProp[k] === 'object') {
	      hasDifferency = hasDifferency || mergeProperty(oldProp[k], newProp[k]);
	    }
	  }

	  return hasDifferency;
	}

	function resetSettings() {
	  return _resetSettings.apply(this, arguments);
	}

	function _resetSettings() {
	  _resetSettings = asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
	    return regenerator.wrap(function _callee$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            logger.info("[Super-preloader]", 'settings are reset');
	            _context.next = 3;
	            return Promise.all(settingsKeys.map(function (key) {
	              return GM.setValue(key, factorySettings[key]);
	            }));

	          case 3:
	          case "end":
	            return _context.stop();
	        }
	      }
	    }, _callee);
	  }));
	  return _resetSettings.apply(this, arguments);
	}

	function saveSettings(_x) {
	  return _saveSettings.apply(this, arguments);
	}

	function _saveSettings() {
	  _saveSettings = asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2(values) {
	    return regenerator.wrap(function _callee2$(_context2) {
	      while (1) {
	        switch (_context2.prev = _context2.next) {
	          case 0:
	            _context2.next = 2;
	            return Promise.all(Object.keys(values).filter(function (x) {
	              return settingsKeys.includes(x);
	            }).map(function (key) {
	              return GM.setValue(key, values[key]);
	            }));

	          case 2:
	          case "end":
	            return _context2.stop();
	        }
	      }
	    }, _callee2);
	  }));
	  return _saveSettings.apply(this, arguments);
	}

	function loadSettings() {
	  return _loadSettings.apply(this, arguments);
	} // ---------------------- Settings stored in localStorage, changed by floatWindow ---------------

	function _loadSettings() {
	  _loadSettings = asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee3() {
	    var values, myOldVersion, isRewrote, verDiff, isInstalled, postLoading, hasDifferency, opts, _yield$Promise$all, _yield$Promise$all2, jsonRule, blackList;

	    return regenerator.wrap(function _callee3$(_context3) {
	      while (1) {
	        switch (_context3.prev = _context3.next) {
	          case 0:
	            _context3.next = 2;
	            return Promise.all(settingsKeys.map(function (key) {
	              return GM.getValue(key, factorySettings[key]);
	            }));

	          case 2:
	            values = _context3.sent;
	            settingsKeys.forEach(function (x, i) {
	              settings[settingsKeys[i]] = values[i];
	            });
	            myOldVersion = settings.version;
	            isRewrote = compareVersions(settings.version, SCRIPT_INFO.rewriteStorage) === -1;

	            if (isRewrote) {
	              // old version uses string to store this data
	              if (isString_1(settings.prefs)) settings.prefs = JSON.parse(settings.prefs);
	              if (isString_1(settings.SITEINFO_D)) settings.SITEINFO_D = JSON.parse(settings.SITEINFO_D);
	            }

	            verDiff = compareVersions(settings.version, SCRIPT_INFO.version);
	            isInstalled = compareVersions(settings.version, factorySettings.version) === 0; // check the consistency of settings and merge prefs

	            /** @type {Array<Promise>} */

	            postLoading = []; // async function to run after loading settings

	            if (verDiff !== 0 || settings.prefs.factoryCheck !== false) {
	              if (settings.prefs.disableBuiltinSubscriptionRules !== true) {
	                postLoading.push(jsonRuleLoader.loadRule(true));
	              }

	              logger.info("[Super-preloader]", `[UpdateCheck] version is updated ${settings.version} => ${SCRIPT_INFO.version}`);
	              settings.version = SCRIPT_INFO.version;
	              settings.autoMatch.useiframe = settings.SITEINFO_D.useiframe || false;
	              postLoading.push(GM.setValue('version', settings.version));
	              hasDifferency = mergeProperty(settings, factorySettings);
	              settings.prefs.factoryCheck = false;

	              if (hasDifferency) {
	                logger.info("[Super-preloader]", '[UpdateCheck] settings are updated');
	                Object.keys(settings).forEach(function (key) {
	                  if (key !== 'version') {
	                    postLoading.push(GM.setValue(key, settings[key]));
	                  }
	                });
	              }
	            } else {
	              if (settings.prefs.disableBuiltinSubscriptionRules) {
	                postLoading.push(Promise.resolve([])); //insert an empty jsonRule
	              } else {
	                postLoading.push(jsonRuleLoader.loadRule());
	              }
	            } // set global variables based on prefs


	            if (typeof settings.prefs.debug !== 'undefined') {
	              logger.setLevel(settings.prefs.debug ? 'debug' : 'info');
	            }

	            if (settings.prefs.ChineseUI) {
	              setLang('zh_CN');
	            } // send notification


	            if (verDiff < 0) {
	              if (NOTIFICATION.show(myOldVersion, SCRIPT_INFO.version) || isInstalled) {
	                opts = {
	                  text: '',
	                  title: NOTIFICATION.title,
	                  image: NOTIFICATION.image,
	                  onload: NOTIFICATION.onload
	                };
	                opts.text = template.upgradeNotification({
	                  oldversion: myOldVersion,
	                  newversion: settings.version
	                });

	                if (Object.keys(NOTIFICATION).includes('extratext')) {
	                  if (Object.keys(NOTIFICATION.extratext).includes(userLang)) {
	                    opts.text += NOTIFICATION.extratext[userLang];
	                  } else {
	                    opts.text += NOTIFICATION.extratext.en_US;
	                  }
	                }

	                GM.notification(opts);
	              }
	            }

	            _context3.next = 16;
	            return Promise.all(postLoading);

	          case 16:
	            _yield$Promise$all = _context3.sent;
	            _yield$Promise$all2 = slicedToArray(_yield$Promise$all, 1);
	            jsonRule = _yield$Promise$all2[0];

	            /** @type {string[]} */
	            blackList = [].concat(settings.prefs.excludes.split(/[\n\r]+/).map(function (line) {
	              return line.trim();
	            }));
	            return _context3.abrupt("return", _objectSpread({
	              jsonRule,
	              blackList
	            }, settings));

	          case 21:
	          case "end":
	            return _context3.stop();
	        }
	      }
	    }, _callee3);
	  }));
	  return _loadSettings.apply(this, arguments);
	}

	var domainSettings = [];
	var localSettingIndex = -1;
	function getLocalStorage() {
	  var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'spfwset';
	  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	  var valStr = localStorage.getItem(key);

	  try {
	    return JSONE.parse(valStr) || fallback;
	  } catch (err) {
	    // compatability with old version
	    var val = JSONE.parse(decodeURIComponent(valStr)) || fallback;
	    setLocalStorage(val, key);
	    return val;
	  }
	}
	function setLocalStorage(val) {
	  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'spfwset';
	  localStorage.setItem(key, JSONE.stringify(val));
	}
	/**
	 * Append local pageSetting to the rules, note we may have more than one pageSetting
	 * because localStorage stores rule for a domain but not a URL
	 * @param {object} pageSetting Local pageSetting for a website
	 * @returns {object} modified pageSetting
	 */

	function loadLocalSetting(pageSetting) {
	  domainSettings = getLocalStorage('spfwset') || [];
	  if (!domainSettings) return pageSetting;

	  for (var i = 0; i < domainSettings.length; i++) {
	    var localSetting = domainSettings[i];

	    if (localSetting.Rurl === pageSetting.Rurl) {
	      for (var _i2 = 0, _Object$entries = Object.entries(localSetting); _i2 < _Object$entries.length; _i2++) {
	        var _Object$entries$_i = slicedToArray(_Object$entries[_i2], 2),
	            key = _Object$entries$_i[0],
	            value = _Object$entries$_i[1];

	        pageSetting[key] = value;
	      }

	      localSettingIndex = i;
	      logger.debug("[Super-preloader]", 'Load local settings ', localSetting);
	      return pageSetting;
	    }
	  }

	  localSettingIndex = -1;
	  return pageSetting;
	}
	function saveLocalSetting(localSetting) {
	  if (domainSettings.length === 0 || localSettingIndex === -1) {
	    // no local setting or no suitable local setting
	    domainSettings.push(localSetting);
	    localSettingIndex += 1;
	  } else {
	    domainSettings[localSettingIndex] = localSetting;
	  }

	  setLocalStorage(domainSettings);
	  return domainSettings;
	}

	//@ts-check

	/**
	 * Select a single element by css selector
	 * @param {string} css css of dom
	 * @param {HTMLElement|Document} contextNode dom contextNode
	 * @returns {HTMLElement} a dom node
	 */
	function getElementByCSS(css) {
	  var contextNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
	  return contextNode.querySelector(css);
	}
	/**
	 * Select multiple elements by css selector
	 * @param {string} css css of dom
	 * @param {ParentNode} contextNode dom contextNode
	 * @returns {HTMLElement[]} an array of Nodes
	 */

	function getAllElementsByCSS(css) {
	  var contextNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
	  return [].slice.call(contextNode.querySelectorAll(css));
	}
	/**
	 * Select an element by xpath selector
	 * @param {string} xpath a string representing the XPath to be evaluated, the attribute will be removed
	 * @param {Node=} contextNode contextNode specifies the context node for the query (see the XPath specification). It's common to pass document as the context node.
	 * @param {HTMLDocument=} doc the document to select from
	 * @returns {HTMLElement} a dom node
	 */

	function getElementByXpath(xpath, contextNode) {
	  var doc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
	  contextNode = contextNode || doc;

	  try {
	    var result = doc.evaluate(xpath, contextNode, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null); //@ts-ignore should always return an element node

	    return result.singleNodeValue && result.singleNodeValue.nodeType === 1 && result.singleNodeValue;
	  } catch (err) {
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

	function getAllElementsByXpath(xpath, contextNode) {
	  var doc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
	  contextNode = contextNode || doc;
	  var result = [];

	  try {
	    var query = doc.evaluate(xpath, contextNode, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

	    for (var i = 0; i < query.snapshotLength; i++) {
	      var node = query.snapshotItem(i); //if node is an element node

	      if (node.nodeType === 1) result.push(node);
	    }
	  } catch (err) {
	    throw new Error(`Invalid xpath: ${xpath}`);
	  } //@ts-ignore


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

	function getAllElements(selector) {
	  var contextNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
	  var doc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
	  var win = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : window;

	  var _cplink = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;

	  if (!selector) return []; //@ts-ignore

	  contextNode = contextNode || doc;

	  if (typeof selector === 'string') {
	    if (selector.search(/^css;/i) === 0) {
	      return getAllElementsByCSS(selector.slice(4), contextNode);
	    } else {
	      return getAllElementsByXpath(selector, contextNode, doc);
	    }
	  } else {
	    var query = selector(doc, win, _cplink);

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

	function getAllElementsDuplicate(selector) {
	  var contextNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
	  var doc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
	  var win = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : window;

	  var _cplink = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;

	  var firstElems = [];

	  if (typeof selector === 'string') {
	    if (selector.search(/^css;/i) !== 0) {
	      // replace all id('x') by //*[@id='x']
	      selector = selector.replace(/^id\((.*?)\)/g, '//*[@id=$1]'); // prevent xpath like `//div[2]`

	      var strippedSelector = /(.*\w+)\[\d+\]$/.exec(selector);

	      if (strippedSelector) {
	        firstElems = getAllElements(selector, contextNode, doc, win, _cplink);
	        selector = strippedSelector[1];
	      }
	    }
	  }

	  var elems = getAllElements(selector, contextNode, doc, win, _cplink);
	  var eles = [];

	  if (firstElems.length > 0) {
	    var childNodeCount = [];

	    for (var i = 0; i < firstElems.length; i++) {
	      childNodeCount.push([].reduce.call(elems[0].children, function (x, y) {
	        return x + (y.nodeName != 'SCRIPT' ? 1 : 0);
	      }, 0));
	      eles.push(firstElems[i]);
	    }

	    for (var _i = 0; _i < elems.length; _i++) {
	      for (var j = 0; j < firstElems.length; j++) {
	        if (elems[_i] === firstElems[j]) break;

	        if (elems[_i].className === firstElems[j].className && elems[_i].childElementCount === childNodeCount[j]) {
	          eles.push(elems[_i]);
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
	 * Get the last visible element matching the given selector
	 * @param {ISelectorFunction} selector selector
	 * @param {string=} _cplink _cplink
	 * @param {HTMLElement=} contextNode contextNode
	 * @param {HTMLDocument=} doc doc
	 * @param {Window=} win win
	 * @returns {HTMLElement} Last dom element
	 */

	function getLastVisibleElement(selector, _cplink, contextNode, doc, win) {
	  var eles = getAllElementsDuplicate(selector, contextNode, doc, win, _cplink);
	  eles = eles.filter(function (e) {
	    return e.offsetParent !== null;
	  });

	  if (eles.length > 0) {
	    return eles[eles.length - 1];
	  } else {
	    return null;
	  }
	}

	function toRE(obj) {
	  if (obj instanceof RegExp) {
	    return obj;
	  } else if (obj instanceof Array) {
	    return new RegExp(obj[0], obj[1]);
	  } else {
	    if (obj.search(/^wildc;/i) === 0) {
	      obj = wildcardToRegExpStr(obj.slice(6));
	    }

	    return new RegExp(obj);
	  }
	}
	function wildcardToRegExpStr(urlstr) {
	  if (urlstr.source) return urlstr.source;
	  var reg = urlstr.replace(/[()\[\]{}|+.,^$?\\]/g, '\\$&').replace(/\*+/g, function (str) {
	    return str === '*' ? '.*' : '[^/]*';
	  });
	  return '^' + reg + '$';
	}

	function addStyle(aCss, aId, doc) {
	  doc = doc || document;
	  var head = doc.getElementsByTagName('head');

	  if (!head) {
	    head = doc.documentElement;
	  } else {
	    head = head[0];
	  }

	  var style = doc.createElement('style');

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

	var displace$1 = {exports: {}};

	/*!
	 * displacejs.js 1.4.0 - Tiny javascript library to create moveable DOM elements.
	 * Copyright (c) 2021 Catalin Covic - https://github.com/catc/displace
	 * License: MIT
	 */

	(function (module, exports) {
	(function webpackUniversalModuleDefinition(root, factory) {
		module.exports = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ (function(module, exports, __webpack_require__) {

		var _displace = __webpack_require__(1);

		var _displace2 = _interopRequireDefault(_displace);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		module.exports = _displace2.default;

	/***/ }),
	/* 1 */
	/***/ (function(module, exports, __webpack_require__) {

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _utils = __webpack_require__(2);

		var _events = __webpack_require__(3);

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		var moveFn = (0, _utils.generateMoveFn)();

		var defaultOpts = {
			constrain: false,
			relativeTo: null,
			handle: null,
			ignoreFn: null,
			highlightInputs: false,

			// events
			onMouseDown: null,
			onMouseMove: null,
			onMouseUp: null,
			onTouchStart: null,
			onTouchMove: null,
			onTouchStop: null,

			customMove: null
		};

		var Displace = function () {
			function Displace(el, opts) {
				_classCallCheck(this, Displace);

				if (!el) {
					throw Error('Must include moveable element');
				}
				this.el = el;
				this.opts = opts;

				// init
				setup.call(this);
			}

			Displace.prototype.reinit = function reinit() {
				this.destroy();
				setup.call(this);
			};

			Displace.prototype.destroy = function destroy() {
				var events = this.events;

				this.handle.removeEventListener('mousedown', events.mousedown, false);
				document.removeEventListener('mousemove', events.mousemove, false);
				document.removeEventListener('mouseup', events.mouseup, false);

				this.handle.removeEventListener('touchstart', events.touchstart, false);
				document.removeEventListener('touchmove', events.touchmove, false);
				document.removeEventListener('touchstop', events.touchstop, false);
				document.removeEventListener('touchmove', this.events.scrollFix, { passive: false });
			};

			return Displace;
		}();

		function setup() {
			var _this = this;

			var el = this.el;
			var opts = this.opts || defaultOpts;
			var data = {};

			// set required css
			el.style.position = 'absolute';

			// set the handle
			this.handle = opts.handle || el;

			// generate min / max ranges
			if (opts.constrain) {
				var relTo = opts.relativeTo || el.parentNode;

				var traverse = el;
				var minX = 0;
				var minY = 0;
				while (traverse !== relTo) {
					traverse = traverse.parentNode;
					if ((0, _utils.isRelative)(traverse)) {
						minX -= traverse.offsetLeft;
						minY -= traverse.offsetTop;
					}
					if (traverse === relTo) {
						minX += traverse.offsetLeft;
						minY += traverse.offsetTop;
					}
				}

				var maxX = minX + relTo.offsetWidth - el.offsetWidth;
				var maxY = minY + relTo.offsetHeight - el.offsetHeight;

				data.xClamp = (0, _utils.generateClamp)(minX, maxX);
				data.yClamp = (0, _utils.generateClamp)(minY, maxY);
			}

			this.opts = opts;
			this.data = data;
			this.events = {
				// mouse events
				mousedown: _events.mousedown.bind(this),
				mouseup: _events.mouseup.bind(this),

				// touch events
				touchstart: _events.touchstart.bind(this),
				touchstop: _events.touchstop.bind(this),

				// disable scrolling on mobile while dragging
				// https://github.com/bevacqua/dragula/issues/487
				scrollFix: function scrollFix(e) {
					if (_this.isDragging) {
						e.preventDefault();
					}
				}
			};

			// create move function - either use default move functionality or custom (if provided)
			this.handleMove = moveFn(this.opts.customMove);

			// add init events to handle
			this.handle.addEventListener('mousedown', this.events.mousedown, false);
			this.handle.addEventListener('touchstart', this.events.touchstart, false);

			// scroll fix for mobile
			document.addEventListener('touchmove', this.events.scrollFix, { passive: false });
		}

		// export factory fn

		exports.default = function (el, opts) {
			return new Displace(el, opts);
		};

	/***/ }),
	/* 2 */
	/***/ (function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.generateClamp = generateClamp;
		exports.isRelative = isRelative;
		exports.generateMoveFn = generateMoveFn;
		function generateClamp(min, max) {
			return function (val) {
				return Math.min(Math.max(val, min), max);
			};
		}

		function isRelative(el) {
			return window.getComputedStyle(el).position === 'relative';
		}

		function generateMoveFn() {
			if (window.requestAnimationFrame) {
				return function (customFn) {
					var move = customFn || defaultMove;

					return function (el, x, y) {
						window.requestAnimationFrame(function () {
							move(el, x, y);
						});
					};
				};
			}
			return function (customFn) {
				return function (el, x, y) {
					var move = customFn || defaultMove;
					move(el, x, y);
				};
			};
		}

		function defaultMove(el, x, y) {
			el.style.left = x + 'px';
			el.style.top = y + 'px';
		}

	/***/ }),
	/* 3 */
	/***/ (function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.mousedown = mousedown;
		exports.mousemove = mousemove;
		exports.mouseup = mouseup;
		exports.touchstart = touchstart;
		exports.touchmove = touchmove;
		exports.touchstop = touchstop;
		// mouse events
		function mousedown(e) {
			var opts = this.opts;
			if (opts.highlightInputs) {
				// allow for selection of text in inputs/textareas
				var target = e.target.tagName.toLowerCase();
				if (target === 'input' || target === 'textarea') {
					return;
				}
			}

			if (opts.ignoreFn && opts.ignoreFn(e)) {
				return;
			}

			// only left button is clicked
			if (e.button === 0) {
				var el = this.el;
				var events = this.events;

				if (typeof opts.onMouseDown === 'function') {
					opts.onMouseDown(el, e);
				}

				// determine initial offset and bind to mousemove handler
				var wOff = e.clientX - el.offsetLeft;
				var hOff = e.clientY - el.offsetTop;
				events.mousemove = mousemove.bind(this, wOff, hOff);

				document.addEventListener('mousemove', events.mousemove, false);
				document.addEventListener('mouseup', events.mouseup, false);
			}

			// prevent highlighting text when dragging (IE)
			e.preventDefault();
		}
		function mousemove(offsetW, offsetH, e) {
			var el = this.el;
			var opts = this.opts;
			var data = this.data;

			if (typeof opts.onMouseMove === 'function') {
				opts.onMouseMove(el, e);
			}

			var x = e.clientX - offsetW;
			var y = e.clientY - offsetH;

			if (opts.constrain) {
				// clamp values if out of range
				x = data.xClamp(x);
				y = data.yClamp(y);
			}
			this.handleMove(el, x, y);

			// prevent highlighting text when dragging
			e.preventDefault();
			return false;
		}
		function mouseup(e) {
			var el = this.el;
			var opts = this.opts;
			var events = this.events;

			if (typeof opts.onMouseUp === 'function') {
				opts.onMouseUp(el, e);
			}

			document.removeEventListener('mouseup', events.mouseup, false);
			document.removeEventListener('mousemove', events.mousemove, false);
		}
		// touch events
		function touchstart(e) {
			var opts = this.opts;
			if (opts.highlightInputs) {
				// allow for selection of text in inputs/textareas
				var target = e.target.tagName.toLowerCase();
				if (target === 'input' || target === 'textarea') {
					return;
				}
			}

			if (opts.ignoreFn && opts.ignoreFn(e)) {
				return;
			}

			var el = this.el;
			var events = this.events;

			if (typeof opts.onTouchStart === 'function') {
				opts.onTouchStart(el, e);
			}

			var touch = e.targetTouches[0];
			var wOff = touch.clientX - el.offsetLeft;
			var hOff = touch.clientY - el.offsetTop;

			events.touchmove = touchmove.bind(this, wOff, hOff);

			// disable scrolling
			this.isDragging = true;

			document.addEventListener('touchmove', events.touchmove, false);
			document.addEventListener('touchend', events.touchstop, false);
			document.addEventListener('touchcancel', events.touchstop, false);
		}
		function touchmove(offsetW, offsetH, e) {
			var el = this.el;
			var opts = this.opts;
			var data = this.data;

			if (typeof opts.onTouchMove === 'function') {
				opts.onTouchMove(el, e);
			}

			var touch = e.targetTouches[0];
			var x = touch.clientX - offsetW;
			var y = touch.clientY - offsetH;

			if (opts.constrain) {
				// clamp values if out of range
				x = data.xClamp(x);
				y = data.yClamp(y);
			}
			this.handleMove(el, x, y);

			// prevent highlighting text when dragging
			e.preventDefault();
			return false;
		}
		function touchstop(e) {
			// re-enable scrolling
			this.isDragging = false;

			var el = this.el;
			var opts = this.opts;
			var events = this.events;

			if (typeof opts.onTouchStop === 'function') {
				opts.onTouchStop(el, e);
			}

			document.removeEventListener('touchmove', events.touchmove, false);
			document.removeEventListener('touchend', events.touchstop, false);
			document.removeEventListener('touchcancel', events.touchstop, false);
		}
	/***/ })
	/******/ ])
	});
	}(displace$1));

	var displace = /*@__PURE__*/getDefaultExportFromCjs(displace$1.exports);

	/**
	 * Waits for an element satisfying selector to exist, then resolves promise with the element.
	 * Useful for resolving race conditions.
	 *
	 * @param {object} element dom element
	 * @param {string} type type of observer
	 * @returns {Promise} promise when observed
	 */
	function elementReady(element, type) {
	  var config = type === 'attributes' ? {
	    attributes: true
	  } : {
	    childList: true
	  };
	  return new Promise(function (resolve) {
	    new MutationObserver(function (mutationList, observer) {
	      resolve({
	        element: element,
	        type: type,
	        mutationList: mutationList,
	        observer: observer
	      });
	    }).observe(element, config);
	  });
	}

	//@ts-check

	/**@type {IRule[]} */

	var jsGeneralRule = [{
	  name: '2048 image mode',
	  url: 'https?://[^/]*/2048/',
	  pageElement: '//ul[@id="waterfall"]/li',
	  nextLink: '//div[@class="pages"]/b/following-sibling::a'
	}, {
	  name: '2048 text mode',
	  url: 'https?://[^/]*/2048/',
	  pageElement: '//table[@id="ajaxtable"]/tbody[2]/tr[contains(@class,"tr3")]',
	  nextLink: '//div[@class="pages"]/b/following-sibling::a',
	  autopager: {
	    relatedObj: true,
	    documentFilter: 'startFilter',
	    startFilter: function startFilter(doc) {
	      try {
	        doc.querySelector('tr[onmouseover]').remove();
	      } catch (_err) {}

	      var trs = doc.querySelectorAll('#ajaxtable .tr3');

	      if (trs.length > 0) {
	        var _loop = function _loop() {
	          var thisTrs = trs[i]; //@ts-ignore

	          var postLink = thisTrs.querySelector('td:nth-of-type(2) a').href;

	          if (postLink) {
	            fetch(postLink).then(function (r) {
	              return r.text();
	            }).then(function (html) {
	              var doc = new DOMParser().parseFromString(html, 'text/html');
	              var imgNode = doc.querySelector('td.r_one img');

	              if (imgNode) {
	                thisTrs.querySelector('td:nth-of-type(1)').innerHTML = '';
	                thisTrs.querySelector('td:nth-of-type(1)').appendChild(createDOM('IMG', {
	                  attr: {
	                    //@ts-ignore
	                    src: imgNode.src,
	                    width: '840',
	                    title: 'Powered by Super-Preloader Plus',
	                    onload: 'if(this.height>"840")this.width=this.width*840/this.height;'
	                  }
	                }));
	              }
	            });
	          }
	        };

	        for (var i = 0; i < trs.length; i++) {
	          _loop();
	        }
	      }
	    }
	  }
	}, {
	  name: 'Discuz 论坛 - 搜索',
	  url: '^https?://bbs\\.[a-z]+\\.cn/search\\.php\\?mod=forum',
	  preLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="prev"][@href]',
	  nextLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="next" or @class="nxt"][@href]',
	  autopager: {
	    pageElement: '//div[@id="threadlist"]',
	    replaceE: '//div[@class="pg"][child::a[@class="nxt"]]'
	  }
	}, {
	  name: 'Discuz 论坛 - 导读',
	  url: /^https?:\/\/(?:bbs|u)\.[^\/]+\/(?:forum\.php\?mod=guide|home\.php\?mod=space)/i,
	  preLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="prev"][@href]',
	  nextLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="next" or @class="nxt"][@href]',
	  autopager: {
	    pageElement: "//div[@id='postlist'] | //form[@method='post'][@name] | //div[@id='threadlist']/div[@class='bm_c'] | //div[@class='xld xlda']",
	    replaceE: '//div[@class="pg"][child::a[@class="nxt"]]'
	  }
	}, {
	  name: 'Discuz论坛列表',
	  url: /^https?:\/\/(?:www\.[^\/]+\/|[^\/]+\/(?:bbs\/)?)(?:2b\/)?(?:(?:forum)|(?:showforum)|(?:viewforum)|(?:forumdisplay))+/i,
	  preLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="prev"][@href]',
	  nextLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="next" or @class="nxt"][@href] | //div[@class="p_bar"]/a[@class="p_curpage"]/following-sibling::a[@class="p_num"]',
	  autopager: {
	    pageElement: '//form[@method="post"][@name] | //div[@id="postlist"] | //div[@id="threadlist"]',
	    replaceE: '//div[@class="pages" or @class="pg"][child::a[@class="next" or @class="nxt"][@href]]',
	    lazyImgSrc: 'file|pagespeed_lsc_url'
	  }
	}, {
	  name: 'Discuz论坛帖子',
	  url: /^https?:\/\/(?:www\.[^\/]+\/|[^\/]+\/(?:bbs\/)?)(?:2b\/)?(?:(?:thread)|(?:viewthread)|(?:showtopic)|(?:viewtopic))+/i,
	  preLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="prev"][@href]',
	  nextLink: '//div[@class="pages" or @class="pg"]/descendant::a[@class="next" or @class="nxt"][@href] | //div[@class="p_bar"]/descendant::a[text()="??"]',
	  autopager: {
	    pageElement: '//div[@id="postlist"] | //form[@method="post"][@name]',
	    replaceE: '//div[@class="pages" or @class="pg"][child::a[@class="next" or @class="nxt"][@href]]',
	    lazyImgSrc: 'zoomfile',
	    stylish: '.mbbs_code{font-family:Monaco,Consolas,"Lucida Console","Courier New",serif;font-size:12px;line-height:1.8em;list-style-type:decimal-leading-zero;padding-left:10px;background:none repeat scroll 0 0 #f7f7f7;color:#666;border:1px solid #ccc;overflow:hidden;padding:10px 0 5px 10px}',
	    filter: function filter(_pages) {
	      // 回复后插入到最后一页
	      var replays = document.querySelectorAll('#postlistreply');

	      if (replays.length > 1) {
	        var first = replays[0];
	        first.parentNode.removeChild(first);
	      } // 在卡饭论坛如果不存在，会提示，所以默认禁用
	      // var SyntaxHighlighter = unsafeWindow.SyntaxHighlighter;
	      // if (SyntaxHighlighter && SyntaxHighlighter.highlight) {
	      //     SyntaxHighlighter.highlight();
	      // }

	    },
	    documentFilter: function documentFilter(doc) {
	      // 卡饭论坛的下一页代码区域可能无法着色，所以手动修改并添加样式
	      var pres = doc.querySelectorAll('pre[class^="brush:"]');
	      [].forEach.call(pres, function (pre) {
	        pre.classList.add('mbbs_code');
	      });
	    }
	  }
	}, {
	  name: 'phpWind论坛列表',
	  url: /^https?:\/\/(?:www\.[^\/]+\/|[^\/]+\/(?:bbs\/)?)?thread/i,
	  preLink: '//div[starts-with(@class,"pages")]/b[1]/preceding-sibling::a[1][not(@class)][@href] | //div[starts-with(@class,"pages")]/ul[1]/li[b]/preceding-sibling::li/a[1][not(@class)][@href]',
	  nextLink: '//div[starts-with(@class,"pages")]/b[1]/following-sibling::a[1][not(@class)] | //div[starts-with(@class,"pages")]/ul[1]/li[b]/following-sibling::li/a[1][not(@class)]',
	  autopager: {
	    pageElement: '//div[@class="t z"] | //div[@class="z"] | //div[@id="ajaxtable"]'
	  }
	}, {
	  name: 'phpWind论坛帖子',
	  url: /^https?:\/\/(?:www\.[^\/]+\/|[^\/]+\/(?:bbs\/)?)?read/i,
	  preLink: '//div[starts-with(@class,"pages")]/b[1]/preceding-sibling::a[1][not(@class)][@href] | //div[starts-with(@class,"pages")]/ul[1]/li[b]/preceding-sibling::li/a[1][not(@class)][@href]',
	  nextLink: '//div[starts-with(@class,"pages")]/b[1]/following-sibling::a[1][not(@class)] | //div[starts-with(@class,"pages")]/ul[1]/li[b]/following-sibling::li/a[1][not(@class)]',
	  autopager: {
	    pageElement: '//div[@class="t5"] | //div[@class="read_t"] | //div[@id="pw_content"]'
	  }
	}, {
	  name: 'phpBB列表',
	  url: /^https?:\/\/[^\/]+(\/[a-z,0-9]+)?\/viewforum/i,
	  exampleUrl: 'http://www.firefox.net.cn/forum/viewforum.php?f=4',
	  nextLink: 'auto;',
	  autopager: {
	    pageElement: '(//div[@id="page-body"]/div[@class="forumbg"]|//table[@class="forumline"]|//table[@class="tablebg"])',
	    // replaceE:'//fildset[@class="display-options")]',
	    remain: 1 / 3
	  }
	}, {
	  name: 'phpBB帖子',
	  url: /^https?:\/\/[^\/]+(\/[a-z,0-9]+)?\/viewtopic/i,
	  exampleUrl: 'http://www.firefox.net.cn/forum/viewtopic.php?t=34339',
	  nextLink: 'auto;',
	  autopager: {
	    // pageElement:'//div[@id="page-body"]',
	    pageElement: '(//div[@id="page-body"]/div[contains(@class,"post")]|//table[@class="forumline"]|//table[@class="tablebg"])' // replaceE:"//fildset[@class='display-options']",

	  }
	}, {
	  name: 'phpBB Search',
	  url: /^https?:\/\/forum\.[^\/]+\/search\.php/i,
	  exampleUrl: 'http://forum.everedit.net/search.php?keywords=%E5%A4%A7%E7%BA%B2',
	  nextLink: 'auto;',
	  autopager: {
	    pageElement: 'id("page-body")/div[starts-with(@class, "search post")]',
	    replaceE: 'id("page-body")/ul[@class="linklist"]'
	  }
	}, {
	  name: 'discuz论坛通用搜索',
	  url: '^https?://[^/]+/f/(?:discuz|search)',
	  nextLink: 'auto;',
	  pageElement: 'id("result-items")'
	}, {
	  name: 'View forum - 通用',
	  url: '^https?://.+?/viewforum\\.php\\?',
	  nextLink: '//span[@class="gensmall"]/b/b/following-sibling::a[1] | (//table/tbody/tr/td[@class="nav"])[last()]/b[last()]/following-sibling::a[1]  | //div[@class="pagination"]/span/strong/following-sibling::a[1] | //a[text()="Next"]',
	  pageElement: '//ul[contains(concat(" ",@class," ")," topics ")]|//form[table/@class="forumline"]'
	}, {
	  name: 'wiki 通用',
	  url: '.\\?(?:.+&)?search=',
	  nextLink: '//a[@class="mw-nextlink"]',
	  pageElement: '//ul[@class="mw-search-results"]'
	}, {
	  name: '通用 Forum 规则1',
	  url: '^https?://.*((showthread\\.php\\?)|(forum|thread))',
	  nextLink: '//a[@rel="next"]',
	  pageElement: '//div[@id="posts"]|//ol[@id="posts"]/li',
	  separatorReal: false
	}, {
	  name: '通用 Forum 规则2 vBulletin threads',
	  url: '^https?://[^?#]+?/showthread\\.php\\?',
	  nextLink: '//tr[@valign="top"]//div[@class="pagenav"]//a[contains(text(), ">")]',
	  pageElement: '(//div[@class="pagenav"])[1]|//div[@id="posts"]/node()',
	  separatorReal: false
	}, {
	  name: '通用 Forum 规则3 vBulletin thread_list',
	  url: '^https?://.*((forumdisplay\\.php\\?)|forum)',
	  nextLink: 'auto;',
	  pageElement: '//div[@id="posts"]/div[@align="center"] | //table[@class="tborder"][@id="threadslist"] | //div[@id="threadlist"] | //div[@id="postlist"]',
	  separatorReal: false
	}, {
	  name: '通用 Forum 规则4',
	  url: /^https?:\/\/forums\..*\/threads/i,
	  nextLink: `(//div[@class="PageNav"])[1]//a[contains(text(),' > ')]`,
	  pageElement: '//ol[@id="messageList"]/li',
	  separatorReal: false
	}, {
	  name: 'PHPWind 5.3.0 / 6.0.0 / 6.3.2 / 7.0.0 / 7.5.0 - View Thread',
	  url: '^https?://.+/read\\.php\\?.*tid((=[0-9]+.*)|(-[0-9]+.*\\.html?))$',
	  nextLink: 'auto;',
	  pageElement: '//form[@name="delatc"]',
	  exampleUrl: 'http://www.yydzh.com/read.php?tid=1584013'
	}, {
	  name: 'Typecho',
	  url: '^https?://',
	  nextLink: "//ol[@class='page-navigator']/li[@class='next']/a",
	  autopager: {
	    pageElement: function pageElement(doc, _win, _cplink) {
	      var gen = getElementByXpath("//head/meta[@name='generator']", doc, doc); //@ts-ignore

	      if (!gen || !gen.content.includes('Typecho') || !doc.documentElement.outerHTML.includes('Typecho')) {
	        return null;
	      }

	      try {
	        return getAllElementsByXpath("//article[@class='post'] | //div[@class='blog-post']", doc, doc);
	      } catch (error) {
	        return null;
	      }
	    },
	    relatedObj: true
	  }
	}, {
	  name: 'XenForo thread',
	  url: '^http(s)?://.+/(forums?|threads|community)/',
	  exampleUrl: 'https://xenforo.com/community/threads/job-xf-emailunsubscribe-invalid-header-value-detected.177611/',
	  pageElement: "//div[@class='block-container lbContainer']",
	  nextLink: "//a[@class='pageNav-jump pageNav-jump--next']"
	}, {
	  name: 'WordPress',
	  url: '^https?://[^/]+(/page/\\d+)?',
	  nextLink: function nextLink(_doc, _win, _cplink) {
	    var cplink = _cplink.replace(/^(.*)(#[^\/]*)?$/, '$1');

	    if (cplink.slice(cplink.length - 5, cplink.length) === '.html') {
	      return undefined;
	    }

	    if (cplink.slice(cplink.length - 4, cplink.length) === '.htm') {
	      return undefined;
	    }

	    var a = /^(https?:\/\/.*?)(\/page\/\d+\/?)?$/.exec(cplink);

	    if (a[2]) {
	      var b = Number(/\/page\/(\d+)/.exec(a[2])[1]) + 1;
	      return cplink.replace(/^(https?:\/\/.*?\/page\/)\d+(.*)$/, '$1' + String(b) + '$2');
	    } else {
	      return cplink.replace(/^(.*?)\/?$/, '$1') + '/page/2';
	    }
	  },
	  autopager: {
	    pageElement: function pageElement(doc, win, _cplink) {
	      var blackList = [/^https?:\/\/bwg\.net\/?$/, /^https?:\/\/sunbox\.cc\/?$/, /^https?:\/\/anime1\.me/, /^https?:\/\/github\.com/];

	      for (var i = 0; i < blackList.length; i++) {
	        if (blackList[i].test(_cplink)) {
	          return null;
	        }
	      } // detect if this is wordpress


	      var wpText = ['wp-content', 'wp-plugin', 'wp-comment'];
	      var isWP = false;

	      for (i = 0; i < wpText.length; i++) {
	        if (doc.documentElement.outerHTML.indexOf(wpText[i]) > -1) {
	          isWP = true;
	          break;
	        }
	      }

	      if (!isWP) {
	        return null;
	      } // if this is the page of an article, return null


	      var submitComment = ['发表评论', '提交评论', '添加留言', '提交留言', 'コメントを送信', 'SUBMIT COMMENT', 'POST COMMENT', 'Submit Comment', 'Post comment', 'Post Comment'];

	      for (i = 0; i < submitComment.length; i++) {
	        if (getElementByXpath("//input[@value='" + submitComment[i] + "']", doc, doc)) {
	          return null;
	        }

	        if (getElementByXpath("//a[text()='" + submitComment[i] + "']", doc, doc)) {
	          return null;
	        }
	      }

	      if ((document.documentElement.textContent || document.documentElement.innerText).indexOf('comment-form')) {
	        // https://www.vlchelp.com/how-to-disable-building-font-cache/
	        return null;
	      }

	      var postXpath = ["//button[@id='submit']", "//div[@class='single-post-box']", "//div[@class='single_post']"];

	      for (i = 0; i < postXpath.length; i++) {
	        if (getElementByXpath(postXpath[i], doc, doc)) {
	          return null;
	        }
	      } // get from latest post
	      // example https://next.365cent.com/ v5.1.1


	      var posts = getAllElements("//div[contains(@class,'main')]//article[starts-with(@id,'post-')]", doc, doc, win);

	      if (posts.length > 0) {
	        return posts;
	      }

	      posts = getAllElements("//article[starts-with(@id,'post-')]", doc, doc, win);

	      if (posts.length > 0) {
	        return posts;
	      }

	      posts = getAllElements("//*[contains(@class,'container')]//article|//*[contains(@class,'container')]//div[contains(@class,'article-post')]", doc, doc, win);

	      if (posts.length > 0) {
	        return posts;
	      } //https://www.portablesoft.org/


	      posts = getAllElements("//div[@id='main']/div[@class='post-entry']", doc, doc, win);

	      if (posts.length > 0) {
	        return posts;
	      }

	      posts = getAllElements("//*[contains(@class,'container')]//div[substring(@class,string-length(@class) -string-length('post')+1)='post']", doc, doc, win);
	      return posts;
	    },
	    relatedObj: true
	  }
	}, {
	  name: 'Generic Posts Rule created by swdyh',
	  exampleUrl: 'http://wedata.net/items/400.json',
	  url: '^https?://.+',
	  pageElement: "(//article[not(contains(../@class,'widget'))][not(contains(@class,'columns four'))][not(ancestor::*[starts-with(@class,'sidebar')])]|//*[starts-with(@id,'post-')][not(contains(@id,'post-rating'))])[not(.//*[contains(@class,'admz')])][not(id('load-more-posts') or @id='fpost' or contains(@class,'carousel'))][parent::node()[not(self::h2)][not(@id='side')][not(contains(@class,'thumbnail'))][not(following-sibling::*[not(@id='side')][article or *[starts-with(@id,'post-')]])]/*[self::article or starts-with(@id,'post-')][following-sibling::node()[self::article or starts-with(@id,'post-')][not(contains(@id,'nav'))] or not(following-sibling::*)][parent::*[not(contains(@class,'userContent'))]]]|id('content')[count(div)>1]/div[contains(@class,'post')][not(contains(div/@class,'breadcrumb'))][not(contains(div/@class,'nav'))]",
	  nextLink: "(//*[not(contains(@class,'_inactive'))]/a[starts-with(@class,'nextpostslink') or contains(@class,'next page-numbers') or (.|..)[normalize-space(@rel)='next' or normalize-space(@class)='next' or contains(@class,'pagination-next')]][not(span/@class='link-text')]|//*[contains(@class,'nav-previous')][not(contains(@class,'pull'))]/a|(//*[contains(@class,'current')][number()>0]/following-sibling::a[1]|(//li|//span|//div)[(.//*|.)[contains(@class,'current')]][number()>0]/following-sibling::*[self::li or self::span or self::div][1]/a))[not(starts-with(@href, '#'))]",
	  autopager: {
	    stylish: '@-moz-document domain("wotopi.jp") { .figure-list{display:flex; flex-wrap:wrap;} }'
	  }
	}];

	function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

	function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

	function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
	/**@type {Array<IRule>} */

	var jsSiteRule = [{
	  // 站点名字...(可选)             // 站点正则...(~~必须~~)
	  name: 'Google搜索',
	  url: '^https?://(?:(?:www|encrypted)\\.google(?:stable)?\\..{2,9}|wen\\.lu)/(?:webhp|search|#|$|\\?)',
	  // url:'wildc;http://www.google.com.hk/search*',
	  exampleUrl: 'http://www.google.com',
	  // 站点实例...(可选)
	  enable: true,
	  // 启用.(总开关)(可选)
	  useiframe: false,
	  // 是否用iframe预读...(可选)
	  // sandbox: "allow-forms allow-modals allow-same-origin allow-scripts";    //设置sandbox选项
	  viewcontent: false,
	  nextLink: 'id("pnnext") | id("navbar navcnt nav")//td[span]/following-sibling::td[1]/a | id("nn")/parent::a',
	  // BaisicOptions: check(function getElement)
	  // 1. auto
	  //    nextLink:'auto;',
	  // 2. xpath selector
	  //    nextLink:'//table[@id="nav"]/descendant::a[last()][parent::td[@class="b"]]',              //下一页链接 xpath 或者 CSS选择器 或者 函数返回值(此函数必须使用第一个传入的参数作为document对象) (~~必选~~)
	  // 3. css selector (prefix must be `css;`)
	  //    nextLink:'css;table#nav>tbody>tr>td.b:last-child>a',
	  // 4. function (function(document, window, currentURL))
	  //    nextLink:function(D,W){return D.evaluate('//table[@id="nav"]/descendant::a[last()][parent::td[@class="b"]]',D,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;},
	  //
	  // Complex Options:
	  // 5. array:
	  //    Check the above types one-by-one
	  // 6. object:
	  //    check function hrefInc
	  //
	  // 新增 Array 的格式，依次查找
	  // preLink:'auto;',
	  preLink: '//a[@id="pnprev"]',
	  // preLink:'//table[@id="nav"]/descendant::a[1][parent::td[@class="b"]]',            //上一页链接 xpath 或者 CSS选择器 或者 函数返回值 (可选)
	  autopager: {
	    enable: true,
	    // 启用(自动翻页)(可选)
	    useiframe: false,
	    // 是否使用iframe翻页(可选)
	    iloaded: false,
	    // 是否在iframe完全load之后操作..否则在DOM完成后操作.
	    itimeout: 0,
	    // 延时多少ms后,在操作..
	    // reload: true,      // Force reload iframe when the src is changed
	    newIframe: false,
	    // 下一页使用新的 iframe，能解决按钮无法点击的问题
	    pageElement: '//div[@id="res"]|//div[@id="extrares"]',
	    // 主体内容 xpath 或 CSS选择器 或函数返回值(~~必须~~)
	    // pageElement:'css;div#ires',
	    // pageElement:function(doc,win){return doc.getElementById('ires')},
	    // filter:'//li[@class="g"]',                                                                        //(此项功能未完成)xpath 或 CSS选择器从匹配到的节点里面过滤掉符合的节点.
	    remain: 1 / 3,
	    // 剩余页面的高度..是显示高度的 remain 倍开始翻页(可选)
	    relatedObj: ['css;div#navcnt', 'bottom'],
	    // 以这个元素当做最底的元素,计算页面总高度的计算.(可选)
	    replaceE: '//div[@id="navcnt"]',
	    // 需要替换的部分 xpath或 CSS选择器 一般是页面的本来的翻页导航(可选);
	    // replaceE:'css;div#navcnt',
	    ipages: [false, 2],
	    // 立即翻页,第一项是控制是否在js加载的时候立即翻第二项(必须小于maxpage)的页数,比如[true,3].就是说JS加载后.立即翻3页.(可选)
	    separator: true,
	    // 是否显示翻页导航(可选)
	    // sepdivDom: function(doc, sepdiv) {
	    //   // 一个用于创建翻页条node的函数
	    //   // 例子参见小木虫-帖子
	    //   const td = doc.createElement("td");
	    //   td.appendChild(sepdiv);
	    //   const tr = doc.createElement("tr");
	    //   td.setAttribute("colspan", 2);
	    //   tr.appendChild(td);
	    //   const tbody = doc.createElement("tbody");
	    //   return tbody;
	    // },
	    separatorReal: true,
	    maxpage: 66,
	    // 最多翻页数量(可选)
	    manualA: false,
	    // 是否使用手动翻页.
	    // HT_insert: ['//div[@id="res"]', 0], // 插入方式此项为一个数组: [节点xpath或CSS选择器,插入方式(0: 插入到给定节点之后 1：插入到给定节点之前;2：附加到给定节点的里面;)](可选);
	    // HT_insert:['css;div#res',2],
	    lazyImgSrc: 'imgsrc',
	    documentFilter: function documentFilter(doc, _nextLink) {
	      // 作用于xhr或iframe加载的下一页
	      // 可以是一个函数 接收doc, nextLink 两个参数，也可以是字符串'startFilter'
	      var x = doc.evaluate('//script/text()[contains(self::text(), "setImagesSrc")]', doc, null, 9, null).singleNodeValue;

	      if (x) {
	        try {
	          //@ts-ignore
	          new Function('document', 'window', 'google', x.nodeValue)(doc, unsafeWindow, unsafeWindow.google);
	        } catch (e) {}
	      } // Fix images
	      // add horizontal flexibly first


	      var imgPs = getAllElementsByXpath('//g-scrolling-carousel/div/div/div', doc, doc);

	      if (imgPs.length > 0) {
	        var _iterator = _createForOfIteratorHelper(imgPs),
	            _step;

	        try {
	          for (_iterator.s(); !(_step = _iterator.n()).done;) {
	            var d = _step.value;
	            d.style.cssText += 'display: flex;flex-wrap: nowrap;width: 600px;white-space: nowrap;overflow-x: auto;';
	          }
	        } catch (err) {
	          _iterator.e(err);
	        } finally {
	          _iterator.f();
	        }
	      } // Fix image of Youtube Video


	      var hiddenImgs = getAllElementsByXpath('//g-scrolling-carousel/div/div/div/div[not(@data-vis)]//g-img/img', doc, doc);

	      if (hiddenImgs.length > 0) {
	        var _iterator2 = _createForOfIteratorHelper(hiddenImgs),
	            _step2;

	        try {
	          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
	            var _d = _step2.value;

	            _d.setAttribute('src', _d.getAttribute('data-src'));

	            _d.style.opacity = '1';
	          }
	        } catch (err) {
	          _iterator2.e(err);
	        } finally {
	          _iterator2.f();
	        }
	      } // Fix g-img


	      var w = getAllElementsByXpath("//script[contains(text(), '_setImagesSrc') and contains(text(), 'data:image')]", doc, doc);
	      w.forEach(function (x) {
	        var script = x.innerHTML.replace(/^\(function\(\){(.*)}\)\(\);?$/, '$1').replace(/_setImagesSrc.*/, '');
	        var lzLoad = new Function(script + 'return {ii, s}')();
	        lzLoad.ii.forEach(function (i) {
	          doc.getElementById(i).setAttribute('src', lzLoad.s);
	        });
	      });
	      var brs = doc.getElementById('brs');

	      if (brs) {
	        brs.remove();
	      }
	    },
	    // filter: function() {
	    // 在添加内容到页面后运行
	    //},
	    startFilter: function startFilter(doc, _win) {
	      // 只作用一次, 用于打开的页面
	      // 函数： 接收doc, win 两个参数
	      // 移除 Google 重定向
	      var script = doc.createElement('script');
	      script.type = 'text/javascript';
	      script.textContent = '\
                  Object.defineProperty(window, "rwt", {\
                      configurable: false,\
                      enumerable: true,\
                      get: function () {\
                          return function() {};\
                      },\
                  });\
                  ';
	      doc.documentElement.appendChild(script);
	      doc.documentElement.removeChild(script); // change id of related search

	      var brs = doc.getElementById('brs');

	      if (brs) {
	        brs.id = 'ibrs';
	      }

	      console.log('%cGoogle    is %s', 'font-weight:bold;color:red', emoji('1F4A9'));
	      var keyword = getElementByXpath("//input[@title='Search']", doc, doc);

	      if (keyword) {
	        //@ts-ignore
	        console.log('%cMicrosoft is %s %csearch with Bing %s', 'font-weight:bold;color:00bbee', emoji('1F451'), 'font-weight:bold;color:00bbee', encodeURI('https://www.bing.com/search?q=' + keyword.value));
	      } else {
	        console.log('%cMicrosoft is %s', 'font-weight:bold;color:00bbee', emoji('1F451'));
	      }
	    }
	  }
	}, {
	  name: '百度搜索',
	  url: '^https?://www\\.baidu\\.com/',
	  // 由于 Super_preloader 默认去掉了 # 后面部分
	  // url: "^https?://www\\.baidu\\.com/(s|baidu|#wd=)",
	  enable: true,
	  nextLink: '//div[@id="page"]//a[contains(text(),"下一页")][@href]',
	  preLink: '//div[@id="page"]//a[contains(text(),"上一页")][@href]',
	  autopager: {
	    pageElement: 'css;div#content_left > *',
	    HT_insert: ['css;div#content_left', 2],
	    replaceE: 'css;#page',
	    stylish: '.autopagerize_page_info, div.sp-separator {margin-bottom: 10px !important;}',
	    startFilter: function startFilter(_doc, win) {
	      // 设置百度搜索类型为 s?wd=
	      try {
	        win.document.cookie = 'ISSW=1';
	      } catch (ex) {}
	    },
	    filter: function filter(_pageElements) {
	      ['c-img-border', 'c-img-radius-large'].forEach(function (style) {
	        var elements = document.querySelectorAll('.' + style);
	        [].forEach.call(elements, function (div) {
	          console.log(div);
	          var css = div.getAttribute('class');
	          css = css.replace(RegExp('\\b' + style + '\\b', 'g'), '');
	          div.setAttribute('class', css);
	        });
	      });
	    }
	  }
	}, {
	  name: 'kongregate',
	  url: '^https?://www\\.kongregate\\.com',
	  nextLink: "(//li[@class='next_link']/a)[1]",
	  autopager: {
	    scriptFilter: 'renderPosts',
	    pageElement: "//table[@class='posts']/tbody",
	    filter: function filter(pageElements) {
	      var scripts = getAllElementsByXpath(".//script[contains(text(), 'renderPosts')]", pageElements[0], document);

	      if (scripts.length > 0) {
	        var _iterator3 = _createForOfIteratorHelper(scripts),
	            _step3;

	        try {
	          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
	            var s = _step3.value;

	            try {
	              new Function(s.innerText)();
	            } catch (e) {}
	          }
	        } catch (err) {
	          _iterator3.e(err);
	        } finally {
	          _iterator3.f();
	        }
	      }
	    }
	  }
	}, {
	  name: 'kongregate_list',
	  url: '^https?://www\\.kongregate\\.com',
	  nextLink: "(//li[@class='next_link']/a)[1]",
	  pageElement: "//div[@id='featurewide']/table/tbody"
	}, {
	  name: '小木虫-帖子',
	  url: '^https?://(www\\.)?muchong\\.com/t-.*$',
	  nextLink: 'auto;',
	  pageElement: "//div[@id='maincontent']/table/tbody[@id]",
	  autopager: {
	    relatedObj: true,
	    sepdivDom: function sepdivDom(doc, sepdiv) {
	      var td = doc.createElement('td');
	      td.appendChild(sepdiv);
	      var tr = doc.createElement('tr');
	      td.setAttribute('colspan', '2');
	      tr.appendChild(td);
	      var tbody = doc.createElement('tbody');
	      tbody.appendChild(td);
	      return tbody;
	    }
	  }
	}, {
	  name: 'gelbooru.com',
	  url: 'https?://gelbooru\\.com',
	  nextLink: "css;.pagination > a[alt='next']",
	  autopager: {
	    pageElement: "//div[contains(@class,'thumbnail-preview')]",
	    filter: function filter(pageElements) {
	      // 头像载入出错的修正
	      [].forEach.call(pageElements, function (div) {
	        div.querySelector('a').removeAttribute('target');
	      });
	    }
	  }
	}, {
	  name: 'smzdm-comment',
	  url: /^https?:\/\/\w+\.smzdm\.com(\/\w+)?\/p\/[\d\w\W]+/i,
	  exampleUrl: 'https://post.smzdm.com/p/559992/',
	  // 还有另外一种评论
	  // exampleUrl: 'https://www.smzdm.com/p/11496450/ | https://test.smzdm.com/pingce/p/70095121/',
	  nextLink: '//ul[@class="pagination"]/li[@class="pagedown"]/a',
	  autopager: {
	    pageElement: 'id("commentTabBlockNew")/ul[@class="comment_listBox"]',
	    excludeElement: '//div[@class="article-card J_trigger_ani"]',
	    replaceE: '(//ul[@class="pagination"])[1]',
	    startFilter: function startFilter(doc) {
	      var firstDiv = doc.querySelector('.pagination');

	      if (firstDiv) {
	        firstDiv.parentNode.removeChild(firstDiv);
	      }
	    }
	  }
	}, {
	  name: '和讯博客',
	  url: /^https?:\/\/\w+\.blog\.hexun\.com\//i,
	  exampleUrl: 'http://23802543.blog.hexun.com/',
	  nextLink: function nextLink(doc) {
	    var url = doc.querySelector('.PageSkip_1 a[title="下一页"]').getAttribute('href');
	    url = url.replace(/(\/p\d+\/).*/, '$1default.html');
	    return url;
	  },
	  autopager: {
	    pageElement: 'id("DefaultContainer1_ArticleList_Panel1")'
	  }
	}, {
	  name: 'm-team artist detail',
	  url: '^https?://kp\\.m-team\\.cc/artist\\.php?',
	  nextLink: '//b[@title="Alt+Pagedown"]/parent::a',
	  autopager: {
	    pageElement: '//form[@id="form2"]/table',
	    relatedObj: true,
	    documentFilter: 'startFilter',
	    startFilter: function startFilter(doc) {
	      var trs = getAllElementsByXpath("//div[@class='artist']/div[@class='atl']/form/table/tbody/tr/td[@colspan='5']/parent::tr", doc, doc);

	      if (trs.length > 0) {
	        for (var i = 0; i < trs.length; i++) {
	          var imgs = trs[i].getElementsByTagName('img');

	          if (imgs) {
	            var img = imgs[0];
	            var imgSrc = img.getAttribute('src');
	            var newtr = createDOM('tr', {
	              attr: {
	                align: 'center'
	              },
	              children: [createDOM('td', {
	                attr: {
	                  colspan: 5,
	                  style: 'border-bottom:1px dashed black;'
	                },
	                children: [createDOM('img', {
	                  attr: {
	                    src: imgSrc,
	                    style: 'display:block; width:100%; height:auto;'
	                  }
	                })]
	              })]
	            });
	            trs[i].parentNode.insertBefore(newtr, trs[i]);
	          }
	        }
	      }
	    }
	  }
	}, {
	  name: 'm-team adults',
	  url: '^https?://kp\\.m-team\\.cc/adult\\.php',
	  nextLink: '//b[@title="Alt+Pagedown"]/parent::a',
	  autopager: {
	    pageElement: '//table[@class="torrents"]',
	    startFilter: function startFilter(doc) {
	      var tds = doc.getElementsByClassName('torrentimg');
	      [].forEach.call(tds, function (td) {
	        var imgSrc = td.getElementsByTagName('img');

	        if (imgSrc) {
	          var newImg = createDOM('img', {
	            attr: {
	              src: imgSrc[0].getAttribute('src'),
	              style: 'display:block; width:100%; height:auto;'
	            }
	          });
	          var newtd = createDOM('td', {
	            attr: {
	              colspan: 2,
	              style: 'border-bottom:1px solid black;'
	            }
	          });
	          var newtr = createDOM('tr', {
	            attr: {
	              align: 'center'
	            }
	          });
	          newtd.appendChild(newImg);
	          newtr.appendChild(newtd);
	          td.parentNode.parentNode.insertBefore(newtr, td.parentNode);
	        }
	      });
	    },
	    documentFilter: 'startFilter'
	  }
	}, {
	  name: 'idope.se',
	  url: /^https?:\/\/idope\.se\/torrent-list\/.+/i,
	  exampleUrl: 'https://idope.se/torrent-list/transformer/?p=3',
	  preLink: {
	    startAfter: '?p=',
	    inc: -1,
	    min: 1
	  },
	  nextLink: {
	    startAfter: '?p=',
	    mFails: [/^https?:\/\/idope\.se\/torrent-list\/.+/i, '/?p=1'],
	    inc: 1,
	    isLast: function isLast(doc, _win, _lhref) {
	      var pageSel = doc.getElementById('next');

	      if (!pageSel) {
	        return true;
	      }
	    }
	  },
	  autopager: {
	    pageElement: '//*[@id="div2child"]',
	    useiframe: true
	  }
	}, {
	  name: '天涯论坛帖子',
	  url: /^https?:\/\/bbs\.tianya\.cn\/.+\.shtml/i,
	  exampleUrl: 'http://bbs.tianya.cn/post-feeling-2792523-1.shtml',
	  nextLink: '//div[@class="atl-pages"]/descendant::a[text()="下页"][@href]',
	  autopager: {
	    useiframe: true,
	    pageElement: '//div[@class="atl-main"]',
	    lazyImgSrc: 'original',
	    filter: function filter(_pages) {
	      //@ts-ignore
	      var see_only_uname = unsafeWindow.see_only_uname; //@ts-ignore

	      var setOnlyUser = unsafeWindow.setOnlyUser;

	      if (see_only_uname) {
	        setOnlyUser(see_only_uname);
	      }
	    }
	  }
	}, {
	  name: 'Firefox中文社区 - 列表',
	  url: '^https?://www\\.firefox\\.net\\.cn/thread',
	  nextLink: '//div[@class="pages"]/a[contains(text(), "下一页")]',
	  autopager: {
	    pageElement: 'id("J_posts_list")',
	    replaceE: 'css;.pages',
	    documentFilter: function documentFilter(doc) {
	      // 头像载入出错的修正
	      [].forEach.call(doc.querySelectorAll('img.J_avatar'), function (img) {
	        img.setAttribute('onerror', 'this.src="http://www.firefox.net.cn/res/images/face/face_small.jpg";');
	      });
	    }
	  }
	}, {
	  name: '小米手机官方论坛',
	  url: '^https?://bbs\\.xiaomi\\.cn/',
	  nextLink: "//a[@class='nxt' and (text()='下一页')]",
	  autopager: {
	    pageElement: "id('postlist') | id('threadlist')",
	    replaceE: '//div[@class="pg"][child::a[@class="nxt"]]',
	    documentFilter: function documentFilter(doc) {
	      var firstDiv = doc.querySelector("div[id^='post_']");

	      if (firstDiv) {
	        firstDiv.parentNode.removeChild(firstDiv);
	      }
	    }
	  }
	}, {
	  name: '游民星空',
	  url: /^https?:\/\/www\.gamersky\.com\/\w+\/\d{6}\/.*.shtml/i,
	  exampleUrl: 'https://www.gamersky.com/ent/201510/671493.shtml | https://www.gamersky.com/handbook/201707/922480.shtml',
	  nextLink: function nextLink(doc, _win, cplink) {
	    var node = getElementByXpath('//div[@class="page_css"]//a[(text()="下一页")]', doc, doc);

	    if (!node) {
	      return null;
	    } // 请求协议保持一致


	    var a = /^(https)?:\/\/.*$/.exec(cplink);

	    if (a) {
	      var b = /^https?:\/\/(.*)$/.exec(node.getAttribute('href'));
	      return a[1] + '://' + b[1];
	    }

	    return node.getAttribute('href');
	  },
	  autopager: {
	    relatedObj: true,
	    pageElement: '//div[@class="Mid2L_con"]',
	    replaceE: '//div[@class="page_css"]'
	  } // credit : https://greasyfork.org/en/forum/discussion/42040/x

	}, {
	  name: 'ali213 - 攻略',
	  url: /^http:\/\/gl\.ali213\.net\/html/,
	  exampleUrl: 'http://gl.ali213.net/html/2011/25399_2.html',
	  nextLink: "id('after_this_page')",
	  autopager: {
	    useiframe: true,
	    pageElement: "//div[@class='glzjshow_con']",
	    replaceE: "id('after_this_page')",
	    startFilter: function startFilter(doc) {
	      var comments = getElementByXpath('//div[@class="glzjshow_plun"]', doc, doc);

	      if (comments) {
	        comments.style.display = 'none';
	      }
	    }
	  }
	}, {
	  name: '多玩 - 攻略',
	  url: /^https?:\/\/tv\.duowan\.com\/\d+\/\d+\.html/,
	  exampleUrl: 'http://tv.duowan.com/1801/380717306538.html',
	  nextLink: "id('pageNum')//a[text()='下一页']",
	  autopager: {
	    useiframe: true,
	    replaceE: "id('pageNum')",
	    pageElement: "//div[@class='box-bd'][last()]",
	    startFilter: function startFilter(doc) {
	      var pager = doc.querySelector('#pageNum');

	      if (pager) {
	        getElementByXpath("//div[@class='box-bd'][last()]", doc, doc).after(pager);
	      } //删除侧边栏


	      var ad = doc.querySelector('.aside-wrap');

	      if (ad) {
	        //@ts-ignore
	        ad.style.display = 'none';
	      }
	    },
	    documentFilter: function documentFilter(doc) {
	      var pager = doc.querySelector('#pageNum');

	      if (pager) {
	        //@ts-ignore
	        pager.style.display = 'none';
	      }
	    }
	  }
	}, {
	  name: 'yuyouge.com',
	  url: '^https?://www\\.yuyouge\\.com',
	  nextLink: 'auto;',
	  pageElement: "//article/div[@id='h1']|//article/div[@id='txtContent']",
	  documentFilter: function documentFilter(doc) {
	    var style = document.querySelector('#txtContent').getAttribute('style');
	    var cls = document.querySelector('#txtContent').getAttribute('class');
	    [].forEach.call(doc.querySelectorAll('#txtContent'), function (div) {
	      div.setAttribute('style', style);
	      div.setAttribute('class', cls);
	    });
	  }
	}, // {
	//   name: "bilibili",
	//   url: "^https?://(search\\.bilibili\\.com|space\\.bilibili\\.com/)",
	//   nextLink: {
	//     startAfter: "&page=",
	//     mFails: ["re;^https?://.*", "&page=1"],
	//     inc: 1
	//   },
	//   autopager: {
	//     enable: false,
	//     remain: 0.001,
	//     useiframe: true,
	//     pageElement: "//li[contains(@class,'video-item')]/parent::*",
	//     mutationObserver: {
	//       relatedObj: "css;.page-wrap",
	//       observers: {
	//         attributes: "css;li.video-item  .lazy-img img" // the node to monitor change of attributes
	//       }
	//     }
	//   }
	// },
	{
	  name: '电玩巴士 - 图文',
	  url: '^https?://pc\\.tgbus\\.com/.*\\d+/$',
	  exampleUrl: 'http://pc.tgbus.com/tuwen_180/88983/',
	  nextLink: "//div[contains(@class, 'art-page')]/a[text()='下一页']",
	  autopager: {
	    pageElement: "//div[@class='art-body']",
	    documentFilter: function documentFilter(doc) {
	      // 删除导航
	      var navigator = doc.querySelector('.art-pagination');

	      if (navigator) {
	        navigator.parentNode.removeChild(navigator);
	      } // 隐藏分页
	      //@ts-ignore


	      doc.querySelector('.art-page').style.display = 'none';
	    }
	  }
	}, {
	  name: 'koolshare扩展页面',
	  url: '^https?://koolshare\\.cn/home\\.php',
	  exampleUrl: 'http://koolshare.cn/home.php',
	  nextLink: "//a[contains(text(),'下一页')]",
	  pageElement: "id('ct')//tbody",
	  autopager: {
	    // 只执行一次，删除多余的表头
	    documentFilter: function documentFilter(doc) {
	      var firstDiv = doc.querySelector('.th');

	      if (firstDiv) {
	        firstDiv.parentNode.removeChild(firstDiv);
	      }
	    }
	  }
	}, {
	  name: 'Jable',
	  url: /^https?:\/\/jable\.tv/i,
	  nextLink: function nextLink(doc, _win, cplink) {
	    var a = getElementByXpath("//ul[@class='pagination']/li[span[contains(@class,'active')]]/following-sibling::li[1]/a", doc, doc);
	    var blockID = a.getAttribute('data-block-id');
	    var parms = a.getAttribute('data-parameters').replace(/:/g, '=').replace(/;/g, '&'); // const containerID = a.getAttribute("data-container-id");

	    var nextLink = cplink + '?mode=async&function=get_block&block_id=' + blockID + '&' + parms + '&_=' + Date.now();
	    return nextLink;
	  },
	  autopager: {
	    enable: false,
	    useiframe: true,
	    pageElement: "//ul[@class='pagination']/preceding-sibling::div/div"
	  },
	  exampleUrl: 'http://www.youyourentiyishu.com/rentiyishuzhaopian/20180506225810.html'
	}, {
	  name: 'Netflav',
	  url: '^https?://netflav\\.com',
	  nextLink: {
	    startAfter: '?page=',
	    mFails: [/^https?:\/\/(?:netflav\.com)\/.+/i, '?page=1'],
	    inc: 1,
	    isLast: function isLast(doc, _win, _lhref) {
	      var CurrentPage = Number(getElementByXpath("//div[@id='general-pagination']/div/a[@aria-current='true']", doc, doc).innerText);
	      var TotalPage = Number(getElementByXpath("(//div[@id='general-pagination']/div/a[@type='nextItem']/preceding-sibling::a)[last()]", doc, doc).innerText);

	      if (CurrentPage == TotalPage) {
	        return true;
	      }
	    }
	  },
	  autopager: {
	    useiframe: true,
	    iloaded: true,
	    pageElement: "(//div[@id='general-pagination']/preceding-sibling::div)[last()]/div",
	    HT_insert: ["(//div[@id='general-pagination']/preceding-sibling::div)[last()]", 2]
	  },
	  exampleUrl: 'https://netflav.com/chinese-sub?page=1'
	}, {
	  name: '悠悠美图',
	  url: /^https?:\/\/www\.youyourentiyishu\.com/i,
	  nextLink: function nextLink(doc, _win, cplink) {
	    var m = cplink.match(/\d+-(\d+)\.html/);

	    if (!m) {
	      return cplink.replace('.html', '-2.html');
	    } else {
	      var current = Number(m[1]);
	      var next = current + 1;
	      var url = cplink.replace(m[1] + '.html', next + '.html');
	      var url2 = doc.querySelector('a.next').getAttribute('href');

	      if (url != url2) {
	        return undefined;
	      } else {
	        return url;
	      }
	    }
	  },
	  autopager: {
	    enable: true,
	    pageElement: '//div[@class="showimg"]/a',
	    ipages: [true, 30]
	  },
	  exampleUrl: 'http://www.youyourentiyishu.com/rentiyishuzhaopian/20180506225810.html'
	}, {
	  name: 'laomaoit - 老殁软件分享',
	  url: '^https?://www\\.(laomoit|mpyit)\\.com',
	  exampleUrl: 'https://www.laomoit.com',
	  nextLink: '//div[@id="pagenavi"]//a[text()="下一页"]',
	  autopager: {
	    pageElement: 'id("post") | id("content")',
	    replaceE: 'css;#pagenavi',
	    // 删除页面上不需要的元素
	    documentFilter: function documentFilter(doc) {
	      var nodeBrowse = doc.querySelector('.browse');

	      if (nodeBrowse) {
	        nodeBrowse.parentNode.removeChild(nodeBrowse);
	      }

	      var nodeMap = doc.querySelector('#map');

	      if (nodeMap) {
	        nodeMap.parentNode.removeChild(nodeMap);
	      }
	    }
	  }
	}, {
	  name: 'geekbench',
	  url: /^https?:\/\/browser\.geekbench\.com/i,
	  nextLink: "//li[contains(@class,'page-item next next_page')]/a",
	  autopager: {
	    pageElement: "//div[@class='row']/div[@class='col-12 list-col']",
	    sepdivDom: function sepdivDom(_doc, sepdiv) {
	      sepdiv.className += ' col-12 list-col';
	      return sepdiv;
	    }
	  }
	}, {
	  name: 'CSDN博客',
	  url: /^https?:\/\/blog\.csdn\.net/i,
	  exampleUrl: 'http://blog.csdn.net/wangjieest?viewmode=list',
	  nextLink: function nextLink(doc, _win, _cplink) {
	    for (var i = 0; i < doc.scripts.length; i++) {
	      var scriptText = doc.scripts[i].text;

	      if (typeof scriptText != 'undefined' && scriptText.indexOf('currentPage') > 0) {
	        var pageMatches = scriptText.match(/currentPage[ ]?=[ ]?(\d+)/);

	        if (pageMatches.length != 2) {
	          continue;
	        }

	        var baseUrlMatches = scriptText.match(/baseUrl[ ]?=[ ]?'([^']+)'/);

	        if (baseUrlMatches.length != 2) {
	          continue;
	        }

	        return baseUrlMatches[1] + '/' + (parseInt(pageMatches[1]) + 1);
	      }
	    }

	    return null;
	  },
	  autopager: {
	    pageElement: '//div[@id="article_list"] | // div[@class="article-list"]',
	    documentFilter: function documentFilter(doc) {
	      // 文档底部的 marginBottom 重置
	      var articleList = doc.querySelector('.article-list');

	      if (articleList) {
	        //@ts-ignore
	        articleList.style.marginBottom = '0';
	      }
	    },
	    startFilter: function startFilter(doc, _win) {
	      // 文档底部的 marginBottom 重置
	      var articleList = doc.querySelector('.article-list');

	      if (articleList) {
	        //@ts-ignore
	        articleList.style.marginBottom = '0';
	      } // 移动分页位置


	      var pageBox = document.querySelector('#pageBox');

	      if (pageBox) {
	        pageBox.parentNode.parentNode.appendChild(pageBox);
	      } // 删除广告


	      var adBox = document.querySelector('.box-box-large');

	      if (adBox) {
	        adBox.parentNode.removeChild(adBox);
	      }
	    }
	  }
	}, {
	  name: 'CSDN话题',
	  url: /^https?:\/\/bbs\.csdn\.net\/topics\//i,
	  exampleUrl: 'http://bbs.csdn.net/topics/390244325',
	  nextLink: '(//div[@class="page_nav"])[1]/a[text()="下一页"]',
	  autopager: {
	    pageElement: 'id("bbs_detail_wrap")',
	    documentFilter: function documentFilter(doc) {
	      // 删除文档中的多余表头
	      var titleH = doc.querySelector('.bbs_title_h');

	      if (titleH) {
	        titleH.parentNode.removeChild(titleH);
	      }

	      var titleBar = doc.querySelector('.bbs_title_bar');

	      if (titleBar) {
	        titleBar.parentNode.removeChild(titleBar);
	      }

	      var breadWrap = doc.querySelector('.bbs_bread_wrap');

	      if (breadWrap) {
	        breadWrap.parentNode.removeChild(breadWrap);
	      } // 尾页的分页信息隐藏


	      var pageNav = doc.querySelectorAll('.mod_fun_wrap');

	      if (pageNav) {
	        var index = 0;

	        if (pageNav.length == 2) {
	          index = 1;
	        } //@ts-ignore


	        pageNav[index].style.display = 'none';
	      }
	    },
	    startFilter: function startFilter(doc) {
	      // 尾页的分页信息隐藏
	      var pageNav = doc.querySelectorAll('.mod_fun_wrap');

	      if (pageNav) {
	        var index = 0;

	        if (pageNav.length == 2) {
	          index = 1;
	        } //@ts-ignore


	        pageNav[index].style.display = 'none';
	      } // 扩展的其他话题信息移除，长度太长，导致翻页信息有点问题


	      var feedBox = doc.querySelector('.post_feed_box');

	      if (feedBox) {
	        feedBox.parentNode.removeChild(feedBox);
	      }
	    },
	    sepdivDom: function sepdivDom(_doc, sepdiv) {
	      sepdiv.className += ' bbs_detail_wrap';
	      return sepdiv;
	    }
	  }
	}, {
	  name: 'bl-novel',
	  url: '^https?://bl-novel\\.in/novel',
	  nextLink: "//a[@id='pb_next']",
	  pageElement: "//div[@id='nr']",
	  documentFilter: function documentFilter(doc, _nextLink) {
	    var scripts = doc.getElementsByTagName('script');
	    var re = /chapter\s*=\s*secret\(['"](.*)['"],\s*['"](.*)['"],\s*(\w+)\s*\)/g;
	    var c;
	    [].forEach.call(scripts, function (x) {
	      if (x.innerText.indexOf('var chapter') >= 0) {
	        var temp = re.exec(x.innerText);
	        var content = temp[1];
	        var salt = temp[2]; // function secret is provided by the website

	        if (temp[3].indexOf('true') >= 0) {
	          //@ts-ignore
	          // eslint-disable-next-line no-undef
	          c = secret(content, salt, true);
	        } else {
	          //@ts-ignore
	          // eslint-disable-next-line no-undef
	          c = secret(content, salt, false);
	        }

	        doc.getElementById('nr1').innerHTML = c;
	      }
	    });
	  }
	}, {
	  name: '第一版主',
	  url: '^https?://www\\.diyibanzhu\\d?\\.(top|one|net|com)',
	  nextLink: 'auto;',
	  pageElement: "//div[@id='content']"
	}, {
	  name: '第一版主',
	  url: '^https?://www\\.diyibanzhu\\d?\\.(top|one|net|com)',
	  pageElement: "//div[@id='content']",
	  nextLink: function nextLink(doc, _win, cplink) {
	    var chapters = getAllElementsByXpath("//div[@class='chapterPages']/a", doc);
	    var prefix = cplink.substr(0, cplink.lastIndexOf('/')) + '/';
	    var i = 0;

	    for (i = 0; i < chapters.length; i++) {
	      if (chapters[i].className === 'curr') {
	        if (i + 1 < chapters.length) {
	          return prefix + chapters[i + 1].getAttribute('href');
	        } else {
	          return getDomain(cplink) + getElementByXpath("//span[@class='next']/a").getAttribute('href');
	        }
	      }
	    }
	  }
	}, {
	  name: '起点文学-排行榜',
	  url: /^https?:\/\/www\.(qidian)\.com(\/mm)?\/rank\/.*/i,
	  exampleUrl: 'https://www.qidian.com/rank/collect',
	  nextLink: function nextLink(doc, _win, cplink) {
	    var res = getElementByXpath('//div[@id="page-container"]', doc);

	    if (res === null) {
	      return undefined;
	    }

	    var next = Number(res.dataset.page) + 1; //@ts-ignore

	    if (next > res.dataset.pagemax) {
	      return undefined;
	    } else {
	      if (cplink.indexOf('page=') != -1) {
	        return cplink.replace(/page=\d+/, 'page=' + next);
	      } else if (cplink.indexOf('?') != -1) {
	        return cplink + '&page=' + next;
	      } else {
	        return cplink + '?page=' + next;
	      }
	    }
	  },
	  autopager: {
	    pageElement: '//div[@class="rank-body"]'
	  }
	}, {
	  name: 'rushi.net',
	  url: '^https?://www.rushi.net/Home/Works',
	  nextLink: 'css;.gopage .next-btn',
	  // 或者//div[@class='gopage']//a[contains(@class,'next-btn')]
	  autopager: {
	    pageElement: 'css;.work_list_line',
	    startFilter: function startFilter(_doc) {
	      var firstDiv = document.querySelector('.hot-company-job');

	      if (firstDiv) {
	        firstDiv.parentNode.removeChild(firstDiv);
	      }
	    },
	    documentFilter: 'startFilter'
	  }
	}, {
	  name: '优书-书单|评论',
	  url: /^https?:\/\/www\.yousuu\.com\/(comments|booklist)/i,
	  nextLink: function nextLink(doc, _win, cplink) {
	    var res = getElementByXpath('//ul[contains(@class, "pagination")]', doc);

	    if (res === null) {
	      return undefined;
	    }

	    var nextNode;

	    if (res.childNodes.length == 2) {
	      // 只有2个子节点，首页|下一页
	      nextNode = res.childNodes[1];
	    } else {
	      // 其他类型 << 1 2(active) 3 ... >>
	      // 找到active的后一项
	      for (var i = res.childNodes.length - 1; i >= 0; i--) {
	        if (res.children[i].className == 'active') {
	          // 如果当前页是最后第二项，就不翻页
	          if (i == res.childNodes.length - 2) {
	            return undefined;
	          }

	          nextNode = res.childNodes[i + 1];
	        }
	      }
	    } //@ts-ignore


	    var findout = /jumpurl\('(\w+)','?(\d+)'?\)/.exec(nextNode.innerHTML);

	    if (findout === null || findout.length != 3) {
	      return undefined;
	    }

	    var pageInfo = findout[1] + '=' + findout[2];

	    if (cplink.indexOf(findout[1] + '=') != -1) {
	      return cplink.replace(new RegExp(findout[1] + '=\\d+'), pageInfo);
	    } else if (cplink.indexOf('?') != -1) {
	      return cplink + '&' + pageInfo;
	    } else {
	      return cplink + '?' + pageInfo;
	    }
	  },
	  autopager: {
	    pageElement: '//table[contains(@class, "shudanlist")] | //ul[contains(@class, "ys-comments")] | //div[@class="ro"]'
	  }
	}, {
	  name: '动漫之家漫画网',
	  url: /^https?:\/\/(www|manhua)\.(dmzj|178)\.com\/\w+\/\d+\.shtml/,
	  exampleUrl: 'https://manhua.dmzj.com/yuanlian/36944.shtml#@page=1',
	  nextLink: function nextLink(doc, _win, cplink) {
	    //@ts-ignore
	    var current = Number(getElementByXpath('//*[@id="page_select"]/option[@selected][1]', doc).text.match(/(\d+)/)[1]);
	    var xpath_last = '//*[@id="page_select"]/option[last()]'; //@ts-ignore

	    var end_num = Number(getElementByXpath(xpath_last, doc).text.match(/(\d+)/)[1]);
	    var next = current + 1;

	    if (next > end_num) {
	      return undefined;
	    } else {
	      return cplink.replace(/\.shtml(?:#@page=\d+)?/, '.shtml#@page=' + next);
	    }
	  },
	  autopager: {
	    useiframe: true,
	    reload: true,
	    // do not create new iframe but reload
	    ipages: [true, 20],
	    pageElement: '//div[@id="center_box"]/img'
	  }
	}, {
	  name: '看漫画',
	  url: /^https?:\/\/www\.manhuagui\.com\/comic\/.+/i,
	  // this is a set which uses hash to change page
	  // we need to manually add hash
	  nextLink: function nextLink(doc, _win, cplink) {
	    var current = Number(getElementByXpath('//*[@id="page"]', doc).innerHTML);
	    var xpath_last = '//div[@id="pagination"]/a[contains(@href,"javascript") and not(@class)][last()]'; //@ts-ignore

	    var end_num = Number(getElementByXpath(xpath_last, doc).text);
	    var next = current + 1;

	    if (next > end_num) {
	      return undefined;
	    } else {
	      return cplink.replace(/\.html(?:#p=\d+)?/, '.html#p=' + next);
	    }
	  },
	  autopager: {
	    useiframe: true,
	    newIframe: false,
	    reload: true,
	    // do not create new iframe but reload
	    pageElement: '//div[@class="clearfix"]',
	    ipages: [true, 20]
	  },
	  exampleUrl: 'https://www.manhuagui.com/comic/17332/372862.html'
	}, {
	  name: 'SF在线漫画',
	  url: '^https?://(manhua\\.sfacg\\.com/mh|www\\.acg456\\.com)/.+',
	  exampleUrl: 'https://manhua.sfacg.com/mh/YULINGSHI/20087/#p=2',
	  preLink: {
	    startAfter: '#p=',
	    inc: -1,
	    min: 1
	  },
	  nextLink: {
	    startAfter: '#p=',
	    mFails: [/^https?:\/\/(?:manhua\.sfacg\.com\/mh|www\.acg456\.com)\/.+/i, '#p=1'],
	    inc: 1,
	    isLast: function isLast(doc, _win, _lhref) {
	      var TotalPage = Number(doc.getElementById('TotalPage').innerText) - 1;
	      var CurrentPage = Number(doc.getElementById('CurrentPage').innerText);

	      if (CurrentPage == TotalPage) {
	        return true;
	      }
	    }
	  },
	  autopager: {
	    pageElement: '//img[@id="curPic"]',
	    useiframe: true,
	    reload: true,
	    replaceE: 'id("Pages")'
	  }
	}, {
	  name: '哦漫画',
	  url: /^https?:\/\/www\.omanhua\.com\/comic\//i,
	  exampleUrl: 'http://www.omanhua.com/comic/2957/36463/index.html?p=2',
	  nextLink: {
	    startAfter: '?p=',
	    mFails: [/^http:\/\/www\.omanhua\.com\/comic\/.+/i, '?p=1'],
	    inc: 1,
	    isLast: function isLast(doc, _win, _lhref) {
	      var select = doc.getElementById('pageSelect');

	      if (select) {
	        var s2os = select.options;
	        var s2osl = s2os.length;
	        if (select.selectedIndex == s2osl - 1) return true;
	      }
	    }
	  },
	  autopager: {
	    useiframe: true,
	    pageElement: '//img[@id="mangaFile"]'
	  }
	}, {
	  name: '汗汗漫画',
	  url: /^https?:\/\/\w+\.(?:vs20|3gmanhua|hhcomic|huhudm|huhumh|hhimm|hhmmoo)\.(?:com|net)\/\w+\/\d+\.html/i,
	  exampleUrl: 'http://www.hhmmoo.com/page315224/1.html?s=1； http://www.hhmmoo.com/page315224/4.html?s=1&d=0',
	  nextLink: function nextLink(_doc, _win, cplink) {
	    // created based on http://www.hhmmoo.com/script/view.js
	    var m = cplink.match(/(.*\d+\/)(\d+)(\.html\?s=\d+)((?:\?|&)d=.*)?/); // const url_head = m[1];

	    var current = Number(m[2]);
	    var dID = m[4];
	    if (!dID) dID = '&d=0';
	    var next = current + 1; // const xpath = '//div[@class="cH1"]/b[1]';

	    var maxpage = document.getElementById('hdPageCount');

	    if (maxpage) {
	      //@ts-ignore
	      maxpage = Number(maxpage.value);
	    } else {
	      maxpage = document.getElementById('spPageCount');

	      if (maxpage) {
	        //@ts-ignore
	        maxpage = Number(maxpage.innerText);
	      } else {
	        return undefined;
	      }
	    } //@ts-ignore


	    if (next == maxpage + 1) {
	      return undefined;
	    } else {
	      return m[1] + next + m[3] + dID;
	    }
	  },
	  autopager: {
	    useiframe: true,
	    pageElement: '//div[@id="iBody"]',
	    ipages: [true, 20]
	  }
	}, {
	  name: '99漫画',
	  url: /^https?:\/\/(cococomic|dm.99manga|99manga|99comic|www.99comic|www.hhcomic)\.(com|cc)/i,
	  exampleUrl: 'http://dm.99manga.com/comic/35416/316645/?p=2&s=0',
	  nextLink: {
	    startAfter: '?p=',
	    inc: 1,
	    mFails: [/^https?:\/\/(?:cococomic|dm.99manga|99manga|99comic|www.99comic|www.hhcomic)\.(?:com|cc)\/.+/i, '?p=1&s=0'],
	    isLast: function isLast(doc, _win, _lhref) {
	      var maxpage = Number(doc.getElementById('spPageCount').innerText);
	      var current = Number(doc.getElementById('spPageIndex').innerText);
	      if (current == maxpage) return true;
	    }
	  },
	  autopager: {
	    useiframe: true,
	    pageElement: '//*[@id="iBody"]'
	  }
	}, {
	  name: '天使漫画网,TSDM漫画组',
	  url: /^https?:\/\/mh\.tsdm\.net\/comic\/.+/i,
	  exampleUrl: 'http://mh.tsdm.net/comic/4697/68059.html',
	  useiframe: true,
	  preLink: {
	    startAfter: '?p=',
	    inc: -1,
	    min: 1
	  },
	  nextLink: {
	    startAfter: '?p=',
	    mFails: [/^http:\/\/mh\.tsdm\.net\/comic\/.+\.html/i, '?p=1'],
	    inc: 1,
	    isLast: function isLast(doc, _win, _lhref) {
	      var pageSelect = doc.getElementById('qTcms_select_i');

	      if (pageSelect) {
	        var s2os = pageSelect.options;
	        var s2osl = s2os.length;
	        if (pageSelect.selectedIndex == s2osl - 1) return true;
	      }
	    }
	  },
	  autopager: {
	    useiframe: true,
	    remain: 1 / 2,
	    pageElement: '//img[@id="qTcms_pic"]',
	    ipages: [true, 20]
	  }
	}, {
	  name: '930mh',
	  url: /^https?:\/\/www\.930mh\.com\/manhua\/.+/i,
	  exampleUrl: 'http://www.930mh.com/manhua/13355/500671.html?p=2',
	  preLink: {
	    startAfter: '?p=',
	    inc: -1,
	    min: 1
	  },
	  nextLink: {
	    startAfter: '?p=',
	    mFails: [/^https?:\/\/www\.930mh\.com\/manhua\/.+\.html/i, '?p=1'],
	    inc: 1,
	    isLast: function isLast(doc, _win, _lhref) {
	      var index = doc.getElementById('images').children[1].innerText;
	      var nums = index.match(/\d+/g);

	      if (Number(nums[0]) >= Number(nums[1])) {
	        return true;
	      }
	    }
	  },
	  autopager: {
	    pageElement: '//div[@id="images"]/img',
	    useiframe: true,
	    ipages: [true, 20]
	  }
	}, {
	  name: 'sis001.com',
	  url: /^https?:\/\/(\w+\.)?sis001\.com\/forum\/(forum|thread)[0-9\-]+\.html/i,
	  exampleUrl: 'https://www.sis001.com/forum/forum-230-1.html',
	  nextLink: '//div[@class="pages_btns"]//a[@class="next"]',
	  autopager: {
	    pageElement: '//div[@class="mainbox"]//table[last()]',
	    replaceE: '//div[@class="pages_btns"]',
	    startFilter: function startFilter(doc, _win) {
	      var firstDiv = doc.querySelector('#ad_text');

	      if (firstDiv) {
	        firstDiv.parentNode.removeChild(firstDiv);
	      }
	    }
	  }
	}, {
	  name: '腐漫画',
	  url: '^https?://www\\.fmhuaaa\\.net/manhua/\\d+/.+',
	  enable: true,
	  pageElement: '//div[@class="bi"] //a',
	  exampleUrl: 'http://www.fmhuaaa.net/manhua/6265/832101.html',
	  nextLink: '//div[@class="bp"]/a[text()="下一页"][@href]',
	  autopager: {
	    startFilter: function startFilter(d, _win) {
	      //@ts-ignore
	      d.getElementById('bigpic').src = d.getElementById('bigpic').src.replace('fmvip.xzglasses.com', 'fmvip.xzglasses.com');
	      Array.from(d.querySelectorAll('iframe')).forEach(function (frame) {
	        return frame.remove();
	      });
	    },
	    documentFilter: function documentFilter(d, _nextLink) {
	      var link = d.body.innerHTML.match(/imgurl = '(.+)';/); //@ts-ignore

	      if (link) link = '//fmvip.xzglasses.com' + link[1]; //@ts-ignore

	      d.getElementById('bigpic').src = link; //@ts-ignore

	      d.getElementById('bigpic').dataset.link = link;
	    }
	  }
	}, {
	  name: 'xkcd',
	  url: '^https?://(?:www\\.)?xkcd\\.com',
	  nextLink: function nextLink(doc, _win, cplink) {
	    var m = cplink.match(/\d+/);

	    if (!m) {
	      return cplink + '/2/';
	    } else {
	      var url = doc.querySelector('a[rel=next]').getAttribute('href');
	      url = 'https://www.xkcd.com/' + url;
	      return url;
	    }
	  },
	  pageElement: 'id("middleContainer")'
	}, {
	  name: 'javdb.com',
	  url: 'https?://javdb\\.com',
	  nextLink: "//li[a[contains(@class,'is-current')]]/following-sibling::li[1]/a",
	  pageElement: "//div[@class='grid columns']",
	  documentFilter: function documentFilter(doc, _nextLink) {
	    var item = document.querySelector('.grid-item.column:nth-of-type(2)'); //@ts-ignore

	    var width = item.offsetLeft || 168;
	    var grid = doc.querySelector('.grid.columns');
	    grid.setAttribute('style', `display: grid; grid-template-columns: repeat( auto-fit, ${width}px);justify-content: center;`);
	  }
	}, {
	  name: 'avgle.com/users/videos',
	  url: '^https?://avgle\\.com/user/\\w+/videos.*',
	  nextLink: 'css;.pagination li:last-child .prevnext',
	  pageElement: '//div[div[contains(@id,"video")] and @class="row"]',
	  exampleUrl: 'https://avgle.com/user/dksc/videos',
	  filter: function filter(elems) {
	    var _iterator4 = _createForOfIteratorHelper(elems),
	        _step4;

	    try {
	      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
	        var elem = _step4.value;

	        var _iterator5 = _createForOfIteratorHelper(elem.querySelectorAll('img')),
	            _step5;

	        try {
	          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
	            var img = _step5.value;

	            if (!img.getAttribute('data-original')) {
	              img.setAttribute('data-original', img.src);
	            }
	          }
	        } catch (err) {
	          _iterator5.e(err);
	        } finally {
	          _iterator5.f();
	        }
	      }
	    } catch (err) {
	      _iterator4.e(err);
	    } finally {
	      _iterator4.f();
	    }
	  }
	}, {
	  name: 'avgle.com',
	  url: '^https?://avgle\\.com',
	  nextLink: 'css;.pagination li:last-child .prevnext',
	  pageElement: 'css;.container .row .row',
	  filter: function filter(elems) {
	    var _iterator6 = _createForOfIteratorHelper(elems),
	        _step6;

	    try {
	      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
	        var elem = _step6.value;

	        var _iterator7 = _createForOfIteratorHelper(elem.querySelectorAll('img')),
	            _step7;

	        try {
	          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
	            var img = _step7.value;

	            if (!img.getAttribute('data-original')) {
	              img.setAttribute('data-original', img.src);
	            }
	          }
	        } catch (err) {
	          _iterator7.e(err);
	        } finally {
	          _iterator7.f();
	        }
	      }
	    } catch (err) {
	      _iterator6.e(err);
	    } finally {
	      _iterator6.f();
	    }
	  }
	}, {
	  name: 'mygalgame',
	  url: '^https://www\\.kkgal\\.com(/page/)?',
	  nextLink: 'css;.pagination-zan li:last-child a',
	  pageElement: 'css;#article-list',

	  /**
	   * @callback
	   * @description 一个作用预读内容 element 的 js 函数，执行于预读内容被插入到当前页面后。
	   * @param {HTMLElement[]} pageElements 页面元素
	   * @returns {void}
	   */
	  filter: function filter(pageElements) {
	    /**@type {NodeListOf<HTMLDivElement>} */
	    var article = pageElements[0].querySelectorAll('.article');

	    if (!(article[0].getAttribute('aos') == 'flip-up')) {
	      return;
	    }

	    var firstFlag = true; // eslint-disable-next-line valid-jsdoc

	    /**@type {IntersectionObserverCallback} */

	    var intersectionCallback = function intersectionCallback(entries) {
	      // 第一次进入不执行
	      entries.some(function (entry) {
	        var mainElement = entry.target.firstElementChild;

	        if (!mainElement) {
	          return;
	        }

	        if (entry.boundingClientRect.top > window.innerHeight - entry.boundingClientRect.height * 0.3) {
	          if (firstFlag) {
	            firstFlag = false;
	            return true;
	          }

	          if (mainElement.classList.contains('aos-animate')) {
	            mainElement.classList.remove('aos-animate');
	            return;
	          }

	          mainElement.classList.add('aos-animate');
	        } else {
	          mainElement.classList.add('aos-animate');
	        }

	        if (entry.intersectionRatio > 0.5) {
	          mainElement.classList.add('aos-animate');
	        }
	      });
	    };

	    var observer = new IntersectionObserver(intersectionCallback, {
	      threshold: [0.2, 1]
	    });
	    pageElements[0].querySelectorAll('.article').forEach(function (element) {
	      var divElement = document.createElement('div');
	      element.parentElement.insertBefore(divElement, element);
	      divElement.appendChild(element);
	      observer.observe(divElement);
	    });
	  }
	}];

	function getDomain(cplink) {
	  // Get [PROTOCOL]://[DOMAIN]
	  var a = getAllIndexes(cplink, '/');

	  if (a.length > 2) {
	    return cplink.substr(0, a[2]);
	  } else {
	    return cplink;
	  }
	}

	function getAllIndexes(arr, val) {
	  var indexes = [];
	  var i = -1;

	  while ((i = arr.indexOf(val, i + 1)) != -1) {
	    indexes.push(i);
	  }

	  return indexes;
	}

	var noticeDiv, noticeDivto, noticeDivto2;
	function notice(html_txt, showTime) {
	  if (!noticeDiv) {
	    var div = createDOM('div', {
	      attr: {
	        style: '\
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

	var spcss = {};
	spcss["sp-separator"] = _wcImport4;
	spcss["sp-prefs-spinner"] = _wcImport3;
	spcss["sp-prefs-setup"] = _wcImport2;
	spcss["sp-fw"] = _wcImport;

	(function () {
	  // use charset from currentDocument
	  var gotConfig = {
	    html: true,
	    encoding: document.characterSet
	  };
	  logger.setLevel('warn'); // `options.cookie`, dirty fix for older versions of TM and VM on Firefox

	  if (BROWSER.name === 'firefox') {
	    if (SCRIPT_MANAGER.name === 'Violentmonkey' && compareVersions(SCRIPT_MANAGER.version, '2.12.3') <= 0 || SCRIPT_MANAGER.name === 'Tampermonkey' && compareVersions(SCRIPT_MANAGER.version, '4.10.6103') < 0) {
	      logger.warn("[Super-preloader]", `${SCRIPT_MANAGER.name}  v${SCRIPT_MANAGER.version} has a flaw with Firefox, which may affect this script`);
	      logger.warn("[Super-preloader]", 'Check https://github.com/Tampermonkey/tampermonkey/issues/786 and https://github.com/violentmonkey/violentmonkey/issues/606 to learn more');
	      gotConfig.cookie = true;
	    }
	  } else if (SCRIPT_MANAGER.name === 'Tampermonkey' && BROWSER.name === 'safari') {
	    logger.warn("[Super-preloader]", `${SCRIPT_MANAGER.name} has a flaw with Safari, which may affect this script`);
	    logger.warn("[Super-preloader]", 'Check https://github.com/Tampermonkey/tampermonkey/issues/786 and https://github.com/violentmonkey/violentmonkey/issues/606 to learn more');
	    gotConfig.cookie = true;
	  }

	  if (SCRIPT_MANAGER.name.toLowerCase().includes('adguard')) {
	    logger.warn("[Super-preloader]", `${SCRIPT_MANAGER.name} has issues with some specific like Google due to the way it injects script`);
	  }

	  var got = got$1.create(gotConfig);
	  var scriptInfo = SCRIPT_INFO;
	  // all rules

	  /** @type {IRule[]} */

	  var SSRules = []; // ----------------------------------
	  // Check if we are looking at a file instead of a webpage

	  if ( // <svg>: SVG Document
	  document.documentElement.matches('svg') || // <pre>: plain text
	  // <img>: Image
	  // <video>: Audio and video
	  // <embed>: PDF (Chrome)
	  // body > #outerContainer:first-child + #printContainer:last-child: PDF (Firefox)
	  document.querySelector('body > pre:only-child, body > img:only-child, body > video:only-child, body > embed:only-child, body > #outerContainer:first-child + #printContainer:last-child')) {
	    return;
	  }

	  if (window.name === 'mynovelreader-iframe') {
	    return;
	  }

	  function CheckIframe() {
	    if (window.name === 'superpreloader-iframe') {
	      return true;
	    } else {
	      return false;
	    }
	  } // how to trigger lazy_load
	  // https://wiki.greasespot.net/Generate_Click_Events


	  if (CheckIframe()) {
	    // 搜狗,iframe里面怎么不加载js啊?
	    // 去掉了原版的另一种方法，因为新版本 chrome 已经支持。旧版本 chrome iframe里面 无法访问window.parent,返回undefined
	    var domLoaded = function domLoaded() {
	      //window.scroll(window.scrollX, 99999);
	      var mutationObserver = window.frameElement ? JSON.parse(window.frameElement.getAttribute('mutationObserver')) : null;

	      if (!mutationObserver) {
	        window.parent.postMessage('superpreloader-iframe:DOMLoaded', '*');
	      } else {
	        var observers = mutationObserver.observers;
	        /**@type {Promise} */

	        var p = null;
	        /**@type {Array<Promise>} */

	        var parr = [];

	        if (observers) {
	          ['attributes', 'addedNodes', 'removedNodes'].forEach(function (key) {
	            var el = getAllElements(observers[key]);

	            if (el.length > 0) {
	              if (mutationObserver.relatedObj) {
	                //el.forEach((x) => {
	                //  p.push(elementReady(x, key));
	                //});
	                parr.push(elementReady(el[el.length - 1], key));
	                el[0].scrollIntoView();
	                el[el.length - 1].scrollIntoView();
	              } else {
	                parr.push(elementReady(el[el.length - 1], key));
	              }
	            }
	          });
	        }

	        if (p) {
	          p = Promise.all(parr);
	        } else {
	          p = Promise.resolve(undefined);
	        }

	        var timeout = mutationObserver.timeout && 0;
	        setTimeout(function () {
	          p.then(function (values) {
	            if (values) {
	              values.forEach(function (_ref) {
	                _ref.element;
	                    _ref.type;
	                    _ref.mutationList;
	                    var observer = _ref.observer;
	                observer.disconnect();
	              });
	            } //window.scrollTo(0, scrollLocation);


	            window.parent.postMessage('superpreloader-iframe:DOMLoaded', '*');
	          });
	        }, timeout);
	      }
	    }; //@ts-ignore


	    if (window.opera) {
	      document.addEventListener('DOMContentLoaded', domLoaded, false);
	    } else {
	      domLoaded();
	    }

	    return;
	  } // 在以下网站上允许在非顶层窗口上加载JS..比如猫扑之类的框架集网页.


	  var DIExclude = [['猫扑帖子', true, /^https?:\/\/dzh\.mop\.com\/[a-z]{3,6}\/\d{8}\/.*\.shtml$/i], ['铁血社区', true, /^https?:\/\/bbs\.tiexue\.net\/.*\.html$/i], ['铁血社区-2', true, /^https?:\/\/bbs\.qichelian\.com\/bbsqcl\.php\?fid/i], // 像 http://so.baiduyun.me/ 内嵌的百度、Google 框架
	  ['百度网盘搜索引擎-百度', true, /^https?:\/\/www\.baidu\.com\/baidu/i], ['百度网盘搜索引擎-Google', true, /^https?:\/\/74\.125\.128\.147\/custom/i]]; // 页面不刷新的站点

	  var HashchangeSites = [{
	    url: /^https?:\/\/(www|encrypted)\.google(stable)?\..{2,9}\/(webhp|#|$|\?)/,
	    timer: 2000,
	    mutationSelector: '#main'
	  }, // 运营商可能会在 #wd= 前面添加 ?tn=07084049_pg
	  {
	    url: /^https?:\/\/www\.baidu\.com\/($|#wd=)/,
	    timer: 1000,
	    mutationSelector: '#wrapper_wrapper'
	  }, {
	    url: /^https?:\/\/www\.newsmth\.net/,
	    timer: 1000
	  }]; //  ///////// ----- End of Rules obtained from online json files -------///////////
	  // 分页导航的6个图标以及颜色设置:

	  var sep_icons = {
	    top: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAWtJREFUeNrclE0rRGEUx8c1GUpRJIVIZGdhZCVr38GGhaI0ZXwCkliglChZEcvJxhdgYWOjLEUpm/EyiLzze+o8dTzdO3PljoVTv7rPc8/5d+6555xYrEhWop6boda5+6l9wjWcWpF+WIbqCJJ9hFRcDr3QAIkIhKugz5PDfkSixkphz5aiAnqgE8rgWRxGoSOPyBkswQuUwyscw4HrmFCZL8Kt/JAg7mEFPEmo4FdPwk0BUcsdzIap0TQ8qMAPuICcEjLnd+VjSjcfJNgIc/DkZGSymYGsnK9EZMrxe4MFaNGiZjC2fT5zQ3p7QDK1dR2GSljziclAvRUe8nHYVA4jjvC43NfAuk/smB2QNqcsWxKcLbAKTFnS0hWD6n27Fd6FLqiDI5iQmQ9jpiVT0sNJ6aYd7dAE3QHBbinSAX5JWWaxuLo8F35jh/bBK9Y+/r/Cl6pLcnna8NvuDGMnslpbZRpXZYT/3r4EGACZL3ZL2afNFAAAAABJRU5ErkJggg==',
	    bottom: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAXFJREFUeNrM1c8rBGEcx/FdtCEkLqYtpdwkKSUHUhxwITdK+Z3yM2cOLnJ39Cc44SgHScmJwlFxsIdlCScO6/2t76Onp52dXTtbnno1M8+Pz84+zzMzkcg/KA3oRTzM0A4cI4VTdIUVPIM3pPGO5aABJTkGx1BqjYmFFZxW7nnBwXmXogWX6bEGc2jEIU7+kNWDUSSwZyqndSvJ3N1g2Bm0oLtB2j+w7rQP4MpqXzRT0YRaPW/BthMedYLs60HsoE2vq9BsPwAJa8XFLUa0fUrvROo/saT1Q9adGimdlt8yj6TT6Q6d2vaida9YRbtP6EqmBZC5fHA6X+AAz1bwEc6cfk9+oaZM4NoZJL70+J2hTaZtNpet041zK8yP/Mgl+rOF1emr0UM1xnAfEPyISd0Jno6vtx+QuM6PZ22lpO7dbEV2Siv6rPeIjNs1HdYC7ixfG+YBqdTVDqPIv6iIWvO7iXGUFxAqi72PraJ9IH8EGACQcYjYRd5GHwAAAABJRU5ErkJggg==',
	    pre: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAASlJREFUeNpiYBjOoBiIrwJxFRAzUsvQViD+CMT/gfgTEPdRy9BPUENh+AsQ91JiaAuSS9HxZ3INb8Hi0v+UurwF6qL/ROBvQNxDrKFfkTT+A+JnQPwBKfJA/L9Ian7ic7kMEHcC8Q80F3UAcRsQv4by30INaUJT9weaWhSQDRUB4uVYvLkYiAWAOBopvEFBlArEPEA8G4ue9UAsATM4EYuCJUgKMtAMLoSKCwPxXCx6c1igClTQgmUZVPNrHMEGy3mgYCkCYiYgTkCSV4UZvA2IjYBYDIgvQbPvOyJTECid5wHxbyA2BuL3QLwRWYEsEJvg0IweFEU41IEMlgcxWJAEH0MxJeAsjMFEq6Jw+Br8BimVfMCTDEkG7EBcA8T3oWUJx4DVYwABBgCannnSzbgwIQAAAABJRU5ErkJggg==',
	    next: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAT1JREFUeNrc1b1KA0EYheEl/iARFFEkKl6D0UK8CrEVrCwEexFCtBIlRWIjsfEiLL0FKzs7QUWxM2piFMUkvhPOwLAs2TGuCn7wkNll5jC7+w0Jgv9avdjAObbQn1TwCu7QwhWW4xakPIOHMKzxGCaSCm6ioXHLZ0Hqpz7KrwRPIvvNvBlM2zYyNY8cMjhDHo9fCBzErnIqKNjgRSxpvIABbOLes2MKWHfuXdhXcR2avKrJ4zGhI9gLhQbq9XaZgGO1kutIOzIHpKp7NawhjYOINSeY6lFwHacw17P6NTWHd4xqnNbcS83LObtsaCPbEW+gXUW8ODswC27xoOsn3ODDmfOGss9XLuE54jGjvPqGuuG1mFDzZIfdNHynnde7DbW1r5DwTstJHP2iE55YqD36ebXZDvr+7L/sU4ABAIpVZWnoA5GkAAAAAElFTkSuQmCC',
	    next_gray: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAtxJREFUeNrclc9L2mEcx7/6NbVZqRVj7pIOlIUuZ1HMgv0BDcqT7JrskH13ELPBF7eTvz10HznWQBlBRIfBXIfBLmqXscvYZWPKrMNIU9Apmrr34/w6i0ovMZjw+H0+z/N8Xt+Pn/fn80hR/+WHYRhBIpFwRKPRz/F4/KnD4RB28xH0Ah4cHHyoUCjsIpFIIZPJHkml0m9Yfn2ZD78XcL1eH6rValIMCmMUtqKbD7/HbNQxaq15oxcH/lXpcmXgtnh2u/2mXC6/DqE+sSxLlUqlniE0TVPBYJAqFot6+GV9Pt+PJthms80sLS2xEonkhlgs/jgwMOBcXV3N5fP5rlCcp9bX1yWLi4uecrk8U6lUshDY3wRbLJYFGKZsNksq4N78/LwY9hOn05k5Ojqi+PzTGePxeFwZUl6vd8hkMvkPDg6sZJ2M5eXlr1wqUu2kA5JOpy2IAO+oO9fW1n5mMpk2nDjmcjkKNU25XC652Wx2pVIp65mXJ2nyjUPpqakpNZxuA8Y5T87OzsobjcYHpVKpGhsbe1CtVkXYqxQKhTdqtfqL1Wr1JpPJxxyU5Lq/vz8aCoX8TTDatYiFhF6vxx5tAJwm8OPj48m5ubmKSqUaAWwSa9eQw6JGo/luNBoNh4eHbAe0JhAINsLh8LNAIJCiudhxB+Qh2ludTifDAQLvI3AIch+Rkl8jJlrhCbOqgfoLmDepOF/BfGNra2sFFZFtvqgzMbFYjAiyp9Vqh4VC4cTJyYmQ90epIQJtHRO1bA5aRhAvdnZ2GI/H87cEz5YPgeOS2RsfHx9B7u+gOi68yQAtYX9zd3eXgZCna/s8By5ypGUUzhOISHgO9BfWXwG6chZ6IbiVc6LwnsFgGIVAepLzjk4rYW1ze3ubcbvd53fjZV2FaqGQ63fT09PDMO9i9BEoon0J9Rm/339xm3dr2f39fVLX7wFvoMVvoYWfRyIRFndD/Z/8nf0WYAA8EC1Z/ZNm4gAAAABJRU5ErkJggg==',
	    pre_gray: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAslJREFUeNrclTtMWmEUxz/uvTzlIUhpNMR0aGNjrNHSmHTqRJyadujQDbSGRwJUaYCmDizqUEw6ODVNGgbpYCfSpFINCQzFR9oyMXRsXFCsAXkIKNL/R7gGWxOsSdPEk5zc3O+e87vn+59zv0vIpbSJiQmyubn5LBKJpNbX11+4XC5Buxy2XYDNZiMOh2OW4ziPTCbTi8XikeHh4SsSieQTXnIxsN1uJ1ardVYgEDgPDw+V9Xqd1Go1Mcuyg7AuuVy+sra29ndgVEnGx8dnhEKhs1qtKgE/eXZ8fCzC+q3+/n6tSqVaSSQS5wM7nU5iMplmsF1XpVI5BeXt6OhIBFkGAe9SKpV/wNmzKjWbzRT6tFwuK86CUqPrkIVWPjQwMKBWKBSn4Ozv0LGxsRmRSDSFSjua0Do8TRWAS+B5+B68g/IhixCNvQPN1WjuieZsS/f1aNQ0wzBuaCqlUCQRtVr9Es1K4kVDWJNhrQjAIiqMlkqle804FnkjBoOhEzv4vrGxkW2ALRaLFrq+QoAV2nE8tLe3dzEYDE5vb2939vX1PcBkiKVSaQ1jForFYq+NRqMum83ebsYzmJq7sGu4xhkKxsDfB/AxnO860ev1oeXlZU8gEMgmk0kFqmw8o9dUKiWfn58vhMPh54h7S+OpQXNSLBYfejyeR1yzw9dbRon09PS8W11dnfL5fJl8Pk+0Wi3hk5vyCNBY4vV6f0Im9+joKJNOp818o8G70ah4aWnpIzSKYCa/dXd3B+PxuHNycjKzs7NzAms1+qFQy+VydDRz0WjUpdPp3tB8TFM0FAqFGxXPzc19plJrNJqraMoXt9tNt3Suc+Tg4ICeJfmFhQVLoVAwoKG7fr//B8cHAL6Fy9ZFDinaG/r5w77ya8y/OhEvKRhjtIup2YMTeBb3mXY53HnAmNkP+/v7NzHTTwAO4f79f/ud/RJgAOLcRNZqLojMAAAAAElFTkSuQmCC',
	    text_span_style: 'color:#595959!important;'
	  }; // 悬浮窗的状态颜色.

	  var FWKG_color = {
	    loading: '#8B00E8',
	    // 读取中状态
	    prefetcher: '#5564AF',
	    // 预读状态
	    autopager: '#038B00',
	    // 翻页状态
	    Apause: '#B7B700',
	    // 翻页状态(暂停).
	    Astop: '#A00000',
	    // 翻页状态(停止)(翻页完成,或者被异常停止.)(无法再开启)
	    dot: '#00FF05' // 读取完后,会显示一个小点,那么小点的颜色.

	  }; // 上一页关键字

	  var prePageKey = ['上一页', '上一頁', '上1页', '上1頁', '上页', '上頁', '翻上頁', '翻上页', '上一张', '上一張', '上一幅', '上一章', '上一节', '上一節', '上一篇', '前一页', '前一頁', '后退', '後退', '上篇', 'previous', 'previous Page', '前へ', '前のページ']; // 下一页关键字

	  var nextPageKey = ['下一页', '下一頁', '下1页', '下1頁', '下页', '下页 ›', '下頁', '翻页', '翻頁', '翻下頁', '翻下页', '下一张', '下一張', '下一幅', '下一章', '下一节', '下一節', '下一篇', '前进', '下篇', '后页', '往后', 'Next', 'Next Page', '次へ', '次のページ', '次のページ »', '下一页 →', '下一頁 →', '下1页 →', '下1頁 →', '下页 →', '下頁 →', '翻页 →', '翻頁 →', '翻下頁 →', '翻下页 →', '下一张 →', '下一張 →', '下一幅 →', '下一章 →', '下一节 →', '下一節 →', '下一篇 →', '前进 →', '下篇 →', '后页 →', '往后 →', 'Next →', 'Next Page →', '次へ →', '次のページ →', '下一页 »', '下一頁 »', '下1页 »', '下1頁 »', '下页 »', '下頁 »', '翻页 »', '翻頁 »', '翻下頁 »', '翻下页 »', '下一张 »', '下一張 »', '下一幅 »', '下一章 »', '下一节 »', '下一節 »', '下一篇 »', '前进 »', '下篇 »', '后页 »', '往后 »', 'Next »', 'Next Page »', '次へ »', '后一页', '後一頁', '下一页 ›', '下一頁 ›', '下1页 ›', '下1頁 ›', '下頁 ›', '翻页 ›', '翻頁 ›', '翻下頁 ›', '翻下页 ›', '下一张 ›', '下一張 ›', '下一幅 ›', '下一章 ›', '下一节 ›', '下一節 ›', '下一篇 ›', '前进 ›', '下篇 ›', '后页 ›', '往后 ›', 'Next ›', 'Next >', 'Next Page ›', '次へ ›', '次のページ ›', '»', '→', '早期文章→']; // THX to https://greasyfork.org/en/forum/discussion/39361/x
	  // 出在自动翻页信息附加显示真实相对页面信息，一般能智能识别出来。如果还有站点不能识别，可以把地址的特征字符串加到下面
	  // 最好不要乱加，一些不规律的站点显示出来的数字也没有意义

	  var REALPAGE_SITE_PATTERN = ['search?', 'search_', 'forum', 'thread']; // ------------------------下面的不要管他-----------------
	  /// ////////////////////////////////////////////////////////////////
	  // eslint-disable-next-line prettier/prettier

	  loadSettings().then(function (values) {
	    var jsonRule = values.jsonRule;
	    var prefs = values.prefs,
	        SITEINFO_D = values.SITEINFO_D,
	        autoMatch = values.autoMatch;
	        values.version;
	        var blackList = values.blackList;

	    if (prefs.debug) {
	      logger.setLevel('debug');
	    } else {
	      logger.setLevel(5);
	    }

	    logger.debug("[Super-preloader]", 'Script Manager: ', JSON.stringify({
	      name: SCRIPT_MANAGER.name,
	      version: SCRIPT_MANAGER.version || 'unknown'
	    }));
	    logger.debug("[Super-preloader]", 'Browser: ', JSON.stringify(BROWSER));

	    var setup = function setup() {
	      var d = document;
	      /**
	       *
	       * @param {string} s s
	       * @returns {HTMLInputElement} elem
	       */

	      var $ = function $(s) {
	        // @ts-ignore
	        return d.getElementById('sp-prefs-' + s);
	      };

	      if ($('setup')) return;
	      var styleNode = addStyle(spcss['sp-prefs-setup']);

	      if (prefs.customCSS.length > 0) {
	        addStyle(prefs.customCSS);
	      }

	      var div = d.createElement('div');
	      div.id = 'sp-prefs-setup';
	      div.style.position = 'fixed';

	      if (prefs.FW_position !== 2) {
	        div.style.right = '38px';
	        div.style.top = '20px';
	      } else {
	        div.style.right = `${prefs.FW_offset[1]}px`;
	        div.style.top = `${prefs.FW_offset[0]}px`;
	      }

	      var nextUpdateDate = prefs.disableBuiltinSubscriptionRules ? 'N/A' : jsonRuleLoader.expire.toDateString();
	      div.innerHTML = template['sp-prefs']({
	        prefs,
	        scriptInfo,
	        nextUpdateDate: nextUpdateDate
	      });
	      d.body.appendChild(div);

	      var close = function close() {
	        if (styleNode) {
	          styleNode.parentNode.removeChild(styleNode);
	        }

	        var div = $('setup');
	        div.parentNode.removeChild(div);
	      };

	      var on = function on(node, e, f) {
	        node.addEventListener(e, f, false);
	      };

	      on($('ok'), 'click', function () {
	        Object.keys(factorySettings.prefs).forEach(function (key) {
	          var el = $(key);

	          if (el !== null) {
	            prefs[key] = getProperty(el);
	          }
	        });

	        if (prefs.debug) {
	          logger.setLevel('debug');
	        } else {
	          logger.setLevel(5);
	        }

	        autoMatch.keyMatch = !$('autoMatchKeyMatch').checked;
	        SITEINFO_D.useiframe = !!$('SITEINFO_D-useiframe').checked;
	        SITEINFO_D.autopager.enable = !!$('SITEINFO_D-a_enable').checked;
	        SITEINFO_D.autopager.force_enable = !!$('SITEINFO_D-a_force_enable').checked;
	        autoMatch.useiframe = SITEINFO_D.useiframe;
	        saveSettings({
	          prefs,
	          SITEINFO_D,
	          autoMatch
	        }).then(function () {
	          SP.loadSetting();
	          close();
	          location.reload();
	        });
	      });
	      on($('reset'), 'click', function () {
	        $('setup').innerHTML = template.spinner.reset;
	        addStyle(spcss['sp-prefs-spinner']);
	        resetSettings().then(function () {
	          location.reload();
	        });
	      });

	      if (prefs.disableBuiltinSubscriptionRules) {
	        $('updaterule').setAttribute('disabled', '');
	      }

	      on($('updaterule'), 'click', function () {
	        if (prefs.disableBuiltinSubscriptionRules) return;
	        $('setup').innerHTML = template.spinner.update;
	        addStyle(spcss['sp-prefs-spinner']);
	        jsonRuleLoader.updateRule(true).then(function () {
	          jsonRule = jsonRuleLoader.getRule();
	          SP.loadSetting();
	          close();
	          location.reload();
	        });
	      });
	      on($('cancel'), 'click', close);
	      $('debug').checked = logger.getLevel() === logger.levels.DEBUG;
	      $('ChineseUI').checked = prefs.ChineseUI;
	      $('floatWindow').checked = prefs.floatWindow;
	      $('enableHistory').checked = prefs.enableHistory; // $('forceTargetWindow').checked = prefs.forceTargetWindow;

	      $('dblclick_pause').checked = prefs.dblclick_pause;
	      $('SITEINFO_D-useiframe').checked = SITEINFO_D.useiframe;
	      $('SITEINFO_D-a_enable').checked = SITEINFO_D.autopager.enable;
	      $('arrowKeyPage').checked = prefs.arrowKeyPage;
	      $('SITEINFO_D-a_force_enable').checked = SITEINFO_D.autopager.force_enable;
	      $('excludes').value = prefs.excludes;
	      $('custom_siteinfo').value = prefs.custom_siteinfo;
	      $('customCSS').value = prefs.customCSS;
	      $('disableBuiltinRules').checked = prefs.disableBuiltinRules;
	      $('disableBuiltinSubscriptionRules').checked = prefs.disableBuiltinSubscriptionRules;
	      $('autoMatchKeyMatch').checked = !autoMatch.keyMatch;
	    }; // main functions


	    var SP = {
	      spinit: function spinit() {
	        if (document.body.getAttribute('name') === 'MyNovelReader') {
	          return;
	        }

	        this.loadSetting();

	        if (userLang === 'zh_CN') {
	          GM.registerMenuCommand('Super_preloaderPlus_one_New 设置', setup);
	        } else {
	          GM.registerMenuCommand('Super_preloaderPlus_one_New Settings', setup);
	        } // 查找是否是页面不刷新的站点


	        var locationHref = location.href;

	        var hashSite = find_1(HashchangeSites, function (x) {
	          return toRE(x.url).test(locationHref);
	        });

	        if (hashSite) {
	          isHashchangeSite = true;
	          hashchangeTimer = hashSite.timer;
	          logger.debug("[Super-preloader]", 'This site does not refresh the page.', hashSite);
	          var p1 = new Promise(function (resolve, reject) {
	            setTimeout(resolve, hashchangeTimer);
	          });
	          p1.then(function (values) {
	            init(window, document);
	          });
	        } else {
	          init(window, document);
	        } // 分辨率 高度 > 宽度 的是手机


	        if (window.screen.height > window.screen.width) {
	          addStyle('div.sp-separator { min-width:auto !important; }');
	        }
	      },
	      loadSetting: function loadSetting() {
	        var a_enable = SITEINFO_D.autopager.enable;

	        if (a_enable !== undefined) {
	          SITEINFO_D.autopager.enable = a_enable;
	        }

	        var loadDblclickPause = function loadDblclickPause(reload) {
	          var dblclickPause = prefs.dblclick_pause;

	          if (dblclickPause) {
	            prefs.mouseA = false;
	            prefs.Pbutton = [0, 0, 0];
	          }

	          if (reload) location.reload();
	        };

	        var loadCustomSiteInfo = function loadCustomSiteInfo() {
	          var userRules;

	          try {
	            // eslint-disable-next-line no-new-func
	            userRules = new Function('', 'return ' + prefs.custom_siteinfo)();
	          } catch (e) {
	            logger.error("[Super-preloader]", 'Custom site rule error:', prefs.custom_siteinfo);
	          }

	          if (isArray_1(userRules)) {
	            SSRules = SSRules.concat(userRules);
	          }
	        };

	        loadDblclickPause();
	        loadCustomSiteInfo();
	      }
	    };
	    SP.spinit();
	    /**
	     *
	     * @param {Window} window window
	     * @param {Document} document document
	     * @returns {void}
	     */

	    function init(window, document) {
	      var startTime = new Date(); // eslint-disable-next-line valid-jsdoc

	      /**@type {(...rest:any[])=>void} */

	      var nullFn = function nullFn() {}; // 空函数.


	      var url = document.location.href.replace(/#.*$/, ''); // url 去掉hash

	      var cplink = url; // 翻上来的最近的页面的url;

	      document.domain; // 取得域名.

	      var domain_port = url.match(/https?:\/\/([^\/]+)/)[1]; // 端口和域名,用来验证是否跨域.
	      // 新加的，以示区别

	      var remove = []; // 需要移除的事件
	      // 悬浮窗

	      var floatWO = {
	        updateColor: nullFn,
	        loadedIcon: nullFn,
	        CmodeIcon: nullFn
	      };
	      /**
	       *
	       * @param {IRuntimeRule} SSS a rule
	       * @returns {void}
	       */

	      function floatWindow(SSS) {
	        // inject css
	        addStyle(spcss['sp-fw']); // create container

	        var div = document.createElement('div');
	        div.id = 'sp-fw-container';
	        div.innerHTML = template.floatWindow();
	        document.body.appendChild(div); // helper function to get element

	        /**
	         *
	         * @param {string} id id
	         * @returns {HTMLInputElement} return
	         * */

	        function $(id) {
	          //@ts-ignore
	          return document.getElementById(id);
	        }

	        var rect = $('sp-fw-rect'); // 悬浮窗的小正方形,用颜色描述当前的状态.

	        var spanel = $('sp-fw-content'); // 设置面板.
	        // 设置面板显隐

	        var spanelc = {
	          show: function show() {
	            spanel.style.display = 'block';
	          },
	          hide: function hide() {
	            spanel.style.display = 'none';
	          }
	        };
	        spanelc.hide();
	        var rectt1, rectt2;
	        rect.addEventListener('mouseover', function (e) {
	          rectt1 = setTimeout(spanelc.show, 100);
	        }, false);
	        rect.addEventListener('mouseleave', function (e) {
	          clearTimeout(rectt1);
	        }, false);
	        div.addEventListener('mouseover', function (e) {
	          clearTimeout(rectt2);
	        }, false);
	        div.addEventListener('mouseleave', function (e) {
	          // Firefox bug
	          // https://stackoverflow.com/questions/46831247/select-triggers-mouseleave-event-on-parent-element-in-mozilla-firefox
	          if (e.relatedTarget === null) return;
	          rectt2 = setTimeout(spanelc.hide, 288);
	        }, false);
	        var dot = $('sp-fw-dot'); // 载入完成后,显示的小点

	        dot.style.backgroundColor = FWKG_color.dot;
	        var cur_mode = $('sp-fw-cur-mode'); // 当载入状态时,用来描述当前是翻页模式,还是预读模式.

	        cur_mode.style.backgroundColor = SSS.a_enable ? FWKG_color.autopager : FWKG_color.prefetcher;
	        var a_enable = $('sp-fw-a_enable'); // 启用翻页模式

	        var autopager_field = $('sp-fw-autopager-field'); // 翻页设置区域
	        // 预读设置

	        var useiframe = $('sp-fw-useiframe');
	        var viewcontent = $('sp-fw-viewcontent'); // 翻页设置

	        var a_useiframe = $('sp-fw-a_useiframe');
	        var a_iloaded = $('sp-fw-a_iloaded');
	        var a_itimeout = $('sp-fw-a_itimeout');
	        var a_manualA = $('sp-fw-a_manualA');
	        var a_remain = $('sp-fw-a_remain');
	        var a_maxpage = $('sp-fw-a_maxpage');
	        var a_separator = $('sp-fw-a_separator');
	        var a_ipages_0 = $('sp-fw-a_ipages_0');
	        var a_ipages_1 = $('sp-fw-a_ipages_1');
	        var a_force = $('sp-fw-a_force'); // newIframe 输入框的点击

	        var a_newIframe = $('sp-fw-a_newIframe');
	        a_newIframe.addEventListener('click', function () {
	          a_useiframe.checked = a_newIframe.checked;
	        }, false);
	        var a_starti = $('sp-fw-a_starti'); // 开始立即翻页

	        a_starti.addEventListener('click', function (e) {
	          //@ts-ignore
	          if (e.currentTarget.disabled) return;
	          var value = parseInt(a_ipages_1.value);

	          if (isNaN(value) || value < 0) {
	            value = SSS.a_ipages[1]; //@ts-ignore

	            a_ipages_1.value = value;
	          }

	          autoPO.startipages(value);
	        }, false); // 总开关

	        var enable = $('sp-fw-enable');
	        $('sp-fw-setup').addEventListener('click', setup, false); // 保存设置按钮.

	        var savebutton = $('sp-fw-savebutton');
	        savebutton.addEventListener('click', function (e) {
	          var value = {
	            Rurl: SSS.Rurl,
	            useiframe: getProperty(useiframe),
	            viewcontent: getProperty(viewcontent),
	            enable: getProperty(enable)
	          };

	          if (SSS.a_enable !== undefined) {
	            /** @type {(s:HTMLElement)=>number} */
	            //@ts-ignore
	            var getPropertyNumber = getProperty;
	            value.a_enable = getProperty(a_enable) === 'autopager';
	            value.a_useiframe = getProperty(a_useiframe);
	            value.a_newIframe = getProperty(a_newIframe);
	            value.a_iloaded = getProperty(a_iloaded);
	            value.a_manualA = getProperty(a_manualA);
	            value.a_force = getProperty(a_force);
	            var t_a_itimeout = getPropertyNumber(a_itimeout);
	            value.a_itimeout = isNaN(t_a_itimeout) ? SSS.a_itimeout : t_a_itimeout >= 0 ? t_a_itimeout : 0;
	            var t_a_remain = getPropertyNumber(a_remain);
	            value.a_remain = isNaN(t_a_remain) ? SSS.a_remain : Number(t_a_remain);
	            var t_a_maxpage = getPropertyNumber(a_maxpage);
	            value.a_maxpage = isNaN(t_a_maxpage) ? SSS.a_maxpage : t_a_maxpage >= 1 ? t_a_maxpage : 1;
	            var t_a_ipages_1 = getPropertyNumber(a_ipages_1);
	            value.a_ipages = [getProperty(a_ipages_0), isNaN(t_a_ipages_1) ? SSS.a_ipages[1] : t_a_ipages_1 >= 0 ? t_a_ipages_1 : 1];
	            value.a_separator = getProperty(a_separator);
	          }

	          saveLocalSetting(value);

	          if (e.shiftKey ? !prefs.FW_RAS : prefs.FW_RAS) {
	            // 按住shift键,执行反向操作.
	            setTimeout(function () {
	              location.reload();
	            }, 1);
	          }
	        }, false); // 载入翻页设置.

	        if (SSS.a_enable === undefined) {
	          // 未定义翻页功能.
	          a_enable.disabled = true;
	          autopager_field.style.display = 'none';
	        } else {
	          setProperty(a_enable, SSS.a_enable ? 'autopager' : 'preloader');
	          setProperty(a_useiframe, SSS.a_useiframe);
	          setProperty(a_newIframe, SSS.a_newIframe);
	          setProperty(a_iloaded, SSS.a_iloaded);
	          setProperty(a_itimeout, SSS.a_itimeout);
	          setProperty(a_manualA, SSS.a_manualA);
	          setProperty(a_force, SSS.a_force);
	          setProperty(a_remain, SSS.a_remain);
	          setProperty(a_maxpage, SSS.a_maxpage);
	          setProperty(a_separator, SSS.a_separator);
	          setProperty(a_ipages_0, SSS.a_ipages[0]);
	          setProperty(a_ipages_1, SSS.a_ipages[1]);
	        }

	        if (!SSS.a_enable) {
	          // 当前不是翻页模式,禁用立即翻页按钮.
	          a_starti.disabled = true;
	        }

	        if (!SSS.hasRule) {
	          // 如果没有高级规则,那么此项不允许操作.
	          a_force.disabled = true;
	        } // 载入预读设置.


	        setProperty(useiframe, SSS.useiframe);
	        setProperty(viewcontent, SSS.viewcontent); // 总开关

	        setProperty(enable, SSS.enable);
	        var FWKG_state = {
	          loading: '读取中状态',
	          prefetcher: '预读状态',
	          autopager: '翻页状态',
	          Apause: '翻页状态(暂停)',
	          Astop: '翻页状态(停止)(翻页完成,或者被异常停止)(无法再开启)',
	          dot: '读取完后'
	        };

	        if (userLang !== 'zh_CN') {
	          FWKG_state.loading = 'Loading';
	          FWKG_state.prefetcher = 'Prefetching';
	          FWKG_state.autopager = 'Autopagger (Running)';
	          FWKG_state.Apause = 'Autopagger (Pause)';
	          FWKG_state.Astop = 'Autopagger (Stop)';
	          FWKG_state.dot = 'Finish loading';
	        }

	        floatWO = {
	          updateColor: function updateColor(state) {
	            rect.style.backgroundColor = FWKG_color[state];
	            rect.setAttribute('title', FWKG_state[state]);
	          },
	          loadedIcon: function loadedIcon(command) {
	            dot.style.display = command == 'show' ? 'block' : 'none';
	          },
	          CmodeIcon: function CmodeIcon(command) {
	            cur_mode.style.display = command == 'show' ? 'block' : 'none';
	          }
	        };
	        var vertical = parseInt(prefs.FW_offset[0] + '', 10);
	        var horiz = parseInt(prefs.FW_offset[1] + '', 10);
	        var FW_position = prefs.FW_position; // 非opera用fixed定位.

	        div.style.position = 'fixed';

	        switch (FW_position) {
	          case 1:
	            div.style.top = vertical + 'px';
	            div.style.left = horiz + 'px';
	            break;

	          case 2:
	            div.style.top = vertical + 'px';
	            div.style.right = horiz + 'px';
	            break;

	          case 3:
	            div.style.bottom = vertical + 'px';
	            div.style.right = horiz + 'px';
	            break;

	          case 4:
	            div.style.bottom = vertical + 'px';
	            div.style.left = horiz + 'px';
	            break;
	        }
	      }

	      function sp_transition(start, end) {
	        //@ts-ignore
	        var TweenF = sp_transition.TweenF;

	        if (!TweenF) {
	          TweenF = Tween[TweenM[prefs.s_method]];
	          TweenF = TweenF[TweenEase[prefs.s_ease]] || TweenF; //@ts-ignore

	          sp_transition.TweenF = TweenF;
	        }

	        var frameSpeed = 1000 / prefs.s_FPS;
	        var t = 0; // 次数,开始

	        var b = start; // 开始

	        var c = end - start; // 结束

	        var d = Math.ceil(prefs.s_duration / frameSpeed); // 次数,结束

	        var x = window.scrollX;

	        function transition() {
	          var y = Math.ceil(TweenF(t, b, c, d));
	          window.scroll(x, y);

	          if (t < d) {
	            t++;
	            setTimeout(transition, frameSpeed);
	          }
	        }

	        transition();
	      }

	      function sepHandler(e) {
	        e.stopPropagation();
	        var div = e.currentTarget;
	        var target = e.target;

	        function getRelativeDiv(which) {
	          var id = div.id;
	          id = id.replace(/(sp-separator-)(.+)/, function (a, b, c) {
	            return b + String(Number(c) + (which == 'pre' ? -1 : 1));
	          });
	          return id ? document.getElementById(id) : null;
	        }

	        function scrollIt(a, b) {
	          // a=a!==undefined? a : window.scrollY;
	          if (prefs.sepT) {
	            sp_transition(a, b);
	          } else {
	            window.scroll(window.scrollX, b);
	          }
	        }

	        var o_scrollY, divS;

	        switch (target.className) {
	          case 'sp-sp-gotop':
	            scrollIt(window.scrollY, 0);
	            break;

	          case 'sp-sp-gopre':
	            {
	              var prediv = getRelativeDiv('pre');
	              if (!prediv) return;
	              o_scrollY = window.scrollY;
	              var preDS = prediv.getBoundingClientRect().top;

	              if (prefs.sepP) {
	                divS = div.getBoundingClientRect().top;
	                preDS = o_scrollY - (divS - preDS);
	              } else {
	                preDS += o_scrollY - 6;
	              }

	              scrollIt(o_scrollY, preDS);
	              break;
	            }

	          case 'sp-sp-gonext':
	            {
	              var nextdiv = getRelativeDiv('next');
	              if (!nextdiv) return;
	              o_scrollY = window.scrollY;
	              var nextDS = nextdiv.getBoundingClientRect().top;

	              if (prefs.sepP) {
	                divS = div.getBoundingClientRect().top;
	                nextDS = o_scrollY + (-divS + nextDS);
	              } else {
	                nextDS += o_scrollY - 6;
	              }

	              scrollIt(o_scrollY, nextDS);
	              break;
	            }

	          case 'sp-sp-gobottom':
	            scrollIt(window.scrollY, Math.max(document.documentElement.scrollHeight, document.body.scrollHeight));
	            break;
	        }
	      } // autopager


	      var autoPO = {
	        /**@type {(value?:number)=>void} f*/
	        startipages: nullFn
	      };
	      var hashchangeAdded = false;
	      /**
	       * @param {IRuntimeRule} SSS a rule
	       * @param {*} floatWO float window object
	       * @returns {void}
	       */

	      function autopager(SSS, floatWO) {
	        // return;
	        // 更新悬浮窗的颜色.
	        floatWO.updateColor('autopager'); // 获取插入位置节点.

	        var insertPoint;
	        var pageElement;
	        var insertMode;

	        if (SSS.a_HT_insert) {
	          insertPoint = getElement(SSS.a_HT_insert[0]);
	          insertMode = SSS.a_HT_insert[1];
	        } else {
	          pageElement = getAllElements(SSS.a_pageElement, document, document, null, cplink);

	          if (pageElement.length > 0) {
	            var pELast = pageElement[pageElement.length - 1];
	            insertPoint = pELast.nextSibling ? pELast.nextSibling : pELast.parentNode.appendChild(document.createTextNode(' '));
	          }

	          insertMode = -1;
	        }

	        if (insertPoint) {
	          logger.debug("[Super-preloader]", 'Verify that the insertion position node can be found: success', insertPoint);
	        } else {
	          logger.error("[Super-preloader]", 'Verify that the insertion position node can be found: failed. JS execution stopped', SSS.a_HT_insert ? SSS.a_HT_insert[0] : '');
	          floatWO.updateColor('Astop');
	          return;
	        }

	        if (window.navigator.language != 'en') {
	          logger.debug("[Super-preloader]", 'Language: ', window.navigator.language);
	        }

	        if (pageElement === undefined) {
	          pageElement = getAllElements(SSS.a_pageElement);
	        }

	        if (pageElement.length > 0) {
	          logger.debug("[Super-preloader]", 'Verify that the main element can be found: success', pageElement);
	        } else {
	          logger.error("[Super-preloader]", 'Verify that the main element can be found: failure', SSS.a_pageElement);
	          floatWO.updateColor('Astop');
	          return;
	        }

	        if (SSS.a_stylish) {
	          // 插入自定义样式
	          addStyle(SSS.a_stylish, 'Super_preloader-style');
	        }
	        /** @type {Node} */


	        var insertPointP;

	        if (insertMode != 2) {
	          insertPointP = insertPoint.parentNode;
	        }

	        var addIntoDoc;

	        if (insertMode == -1 || insertMode == 1) {
	          addIntoDoc = function addIntoDoc(obj) {
	            return insertPointP.insertBefore(obj, insertPoint);
	          };
	        } else if (insertMode == 2) {
	          addIntoDoc = function addIntoDoc(obj) {
	            return insertPoint.appendChild(obj);
	          };
	        } else if (insertMode == 0) {
	          addIntoDoc = function addIntoDoc(obj) {
	            return insertPointP.insertBefore(obj, insertPoint.nextSibling);
	          };
	        }
	        /** @type {HTMLDocument} */


	        var doc, win;

	        function XHRLoaded(res) {
	          var str = res.data;
	          doc = win = createDocumentByString(str);

	          if (!doc) {
	            logger.error("[Super-preloader]", 'Document object creation failed');
	            removeL();
	            return;
	          }

	          floatWO.updateColor('autopager');
	          floatWO.CmodeIcon('hide');
	          floatWO.loadedIcon('show');
	          working = false;
	          scroll();
	        }

	        function XHRNotLoaded(res) {
	          logger.error("[Super-preloader]", 'XHR is failed to be loaded');
	          logger.error("[Super-preloader]", res);
	          removeL();
	        }

	        function removeL(isRemoveAddPage) {
	          logger.debug("[Super-preloader]", 'Remove various event listeners');
	          floatWO.updateColor('Astop');
	          var _remove = remove;

	          for (var i = 0, ii = _remove.length; i < ii; i++) {
	            _remove[i]();
	          }

	          if (isRemoveAddPage) {
	            var separator = document.querySelector('.sp-separator');

	            if (separator) {
	              var insertBefore = insertPoint;

	              if (insertMode == 2) {
	                var l = insertPoint.children.length;

	                if (l > 0) {
	                  insertBefore = insertPoint.children[l - 1];
	                }
	              }

	              var range = document.createRange();
	              range.setStartBefore(separator);
	              range.setEndBefore(insertBefore);
	              range.deleteContents();
	              range.detach();

	              if (insertMode == 2) {
	                // 还需要额外移除？
	                insertPoint.removeChild(insertBefore);
	              }
	            }

	            var style = document.getElementById('Super_preloader-style');

	            if (style) {
	              style.parentNode.removeChild(style);
	            }
	          }
	        }

	        if (isHashchangeSite && !hashchangeAdded) {
	          window.addEventListener('hashchange', onhashChange, false);
	          hashchangeAdded = true;
	          logger.debug("[Super-preloader]", 'Successfully added hashchange event');
	        }

	        function onhashChange(event) {
	          logger.debug("[Super-preloader]", 'hashchange event triggered');
	          removeL(true);
	          setTimeout(function () {
	            nextlinkElem = getElement(SSS.nextLink || 'auto;');
	            nextlink = elemToHref(nextlinkElem); // preLink = getElement(SSS.preLink || 'auto;');

	            autopager(SSS, floatWO);
	          }, hashchangeTimer);
	        }
	        /** @type {HTMLIFrameElement} */


	        var iframe;
	        var messageR;
	        /**
	         * Event handler of iframe loaded
	         * @param {IFrameLoadedEvent} event Iframe loaded event
	         * @returns {void}
	         */

	        function iframeLoaded(event) {
	          var iframe = event.currentTarget;
	          var body = iframe.contentDocument.body;

	          if (body && body.firstChild) {
	            setTimeout(function () {
	              doc = iframe.contentDocument;
	              removeScripts(doc, SSS.a_scriptFilter);
	              win = iframe.contentWindow || doc;
	              floatWO.updateColor('autopager');
	              floatWO.CmodeIcon('hide');
	              floatWO.loadedIcon('show');
	              working = false;
	              scroll();
	            }, SSS.a_itimeout);
	          }
	        }
	        /**
	         * Load next page in iframe
	         * @param {string} link Link of the next page
	         * @returns {void}
	         */


	        function iframeRequest(link) {
	          messageR = false;

	          if (SSS.a_newIframe || !iframe) {
	            var insertLoc = null;
	            var i = document.createElement('iframe');
	            iframe = i;
	            i.name = 'superpreloader-iframe';
	            i.width = '100%';
	            i.height = '0';
	            i.frameBorder = '0';
	            i.style.cssText = '\
                    margin:0!important;\
                    padding:0!important;\
                    visibility:hidden!important;\
                ';

	            if (SSS.a_sandbox != false) {
	              //sandbox is readonly property
	              //i.sandbox = SSS.a_sandbox;
	              i.setAttribute('sandbox', '');
	            }

	            i.src = link;

	            if (SSS.a_mutationObserver) {
	              i.setAttribute('mutationObserver', JSON.stringify(SSS.a_mutationObserver));

	              if (SSS.a_mutationObserver.relatedObj) {
	                insertLoc = getAllElements(SSS.a_mutationObserver.relatedObj);

	                if (insertLoc.length > 0) {
	                  insertLoc = insertLoc[0];
	                } else {
	                  insertLoc = null;
	                }
	              }
	            }

	            if (SSS.a_iloaded) {
	              i.addEventListener('load', iframeLoaded, false);
	              remove.push(function () {
	                i.removeEventListener('load', iframeLoaded, false);
	              });
	            } else {
	              var messagehandler = function messagehandler(e) {
	                if (!messageR && e.data == 'superpreloader-iframe:DOMLoaded') {
	                  messageR = true;
	                  iframeLoaded.call(i, {
	                    currentTarget: i
	                  });

	                  if (SSS.a_newIframe) {
	                    window.removeEventListener('message', messagehandler, false);
	                  }
	                }
	              };

	              window.addEventListener('message', messagehandler, false);
	              remove.push(function () {
	                window.removeEventListener('message', messagehandler, false);
	              });
	            }

	            if (insertLoc) {
	              insertLoc.parentNode.insertBefore(i, insertLoc);
	            } else {
	              document.body.appendChild(i);
	            }
	          } else {
	            iframe.src = link;
	            iframe.contentDocument.location.replace(link);

	            if (SSS.a_reload) {
	              iframe.contentWindow.location.reload();
	            }
	          }
	        }
	        /**
	         * Send XHR request to obtain next page content
	         * @param {string} link Link of next page
	         * @returns {void}
	         */


	        function XHRrequest(link) {
	          var reqConf = {
	            headers: SSS.a_headers ? SSS.a_headers : {
	              Referer: cplink
	            }
	          };
	          got.get(link, reqConf).then(
	          /**
	           * Handling of XHR request
	           * @param {ResponseObject} res Response of got
	           * @returns {void}
	           */
	          function (res) {
	            if (res.finalUrl === cplink) {
	              logger.debug("[Super-preloader]", 'Same final address');
	              XHRNotLoaded(res);
	            } else {
	              XHRLoaded(res);
	              logger.debug("[Super-preloader]", 'XHRrequest complete');
	            }
	          }).catch(
	          /**
	           * Error handling of XHR request
	           * @param {ResponseObject} res Response of got
	           * @returns {void}
	           */
	          function (res) {
	            XHRNotLoaded(res);
	          });
	        }

	        var working;

	        function doRequest() {
	          working = true;
	          floatWO.updateColor('loading');
	          floatWO.CmodeIcon('show');
	          logger.debug("[Super-preloader]", 'Get next page', SSS.a_useiframe ? '(iframe method)' : '(XHR method)', nextlink);
	          pagedLinks.push(nextlink);

	          if (SSS.a_useiframe) {
	            iframeRequest(nextlink);
	          } else {
	            if (/(?:http|\/).*/.test(nextlink)) {
	              // request next page by XHR
	              XHRrequest(nextlink);
	            } else {
	              logger.error("[Super-preloader]", 'Lazyload or Invalid nextLinkElem', nextlinkElem);
	            }
	          }
	        }

	        var _SSS$a_ipages = slicedToArray(SSS.a_ipages, 2),
	            _SSS$a_ipages$ = _SSS$a_ipages[0],
	            ipagesmode = _SSS$a_ipages$ === void 0 ? false : _SSS$a_ipages$,
	            _SSS$a_ipages$2 = _SSS$a_ipages[1],
	            ipagesnumber = _SSS$a_ipages$2 === void 0 ? 2 : _SSS$a_ipages$2;

	        if (ipagesmode && ipagesnumber === 0) {
	          ipagesnumber = Number.MAX_SAFE_INTEGER;
	        }

	        var scrollDo = nullFn;
	        var afterInsertDo = nullFn;

	        if (prefs.Aplus) {
	          afterInsertDo = doRequest;
	          doRequest();
	        } else {
	          scrollDo = doRequest;
	          if (ipagesmode) doRequest();
	        }

	        var manualDiv;

	        function manualAdiv() {
	          if (!manualDiv) {
	            addStyle(spcss['sp-separator']);

	            var spage = function spage(el) {
	              if (doc) {
	                var value = Number(el.value);

	                if (isNaN(value) || value < 1) {
	                  el.value = value = 1;
	                }

	                ipagesmode = true;
	                ipagesnumber = value + paged;
	                insertedIntoDoc();
	              }
	            };

	            var div = createDOM('div', {
	              attr: {
	                id: 'sp-sp-manualdiv',
	                class: 'sp-separator'
	              },
	              children: [createDOM('span', {
	                attr: {
	                  class: 'sp-md-span'
	                },
	                innerHTML: userLang === 'zh_CN' ? '下' : 'Next'
	              }), createDOM('input', {
	                attr: {
	                  type: 'number',
	                  value: 1,
	                  min: 1,
	                  title: userLang === 'zh_CN' ? '输入你想要拼接的页数(必须>=1),然后按回车.' : 'Type number of pageringzing and press enter',
	                  id: 'sp-sp-md-number'
	                },
	                eventListener: [{
	                  type: 'keyup',
	                  listener: function listener(e) {
	                    if (e.keyCode == 13) {
	                      // 回车
	                      spage(e.target);
	                    }
	                  }
	                }]
	              }), createDOM('span', {
	                attr: {
	                  class: 'sp-md-span'
	                },
	                innerHTML: userLang === 'zh_CN' ? '页' : 'page'
	              }), createDOM('img', {
	                attr: {
	                  id: 'sp-sp-md-imgnext',
	                  src: _sep_icons.next
	                }
	              }), createDOM('div', {
	                attr: {
	                  class: 'sp-someinfo',
	                  id: 'sp-separator-hover'
	                },
	                children: [createDOM('a', {
	                  attr: {
	                    href: 'https://github.com/machsix/Super-preloader',
	                    target: '_blank'
	                  },
	                  innerHTML: 'Powered by Super-preloader'
	                })]
	              })]
	            });
	            manualDiv = div;
	            document.body.appendChild(div);
	            div.addEventListener('click', function (e) {
	              //@ts-ignore
	              if (e.target.id === 'sp-sp-md-number') return;
	              spage(document.getElementById('sp-sp-md-number'));
	              manualDiv.remove();
	            }, false);
	          }

	          addIntoDoc(manualDiv); //manualDiv.style.display = "block";
	        }

	        function beforeInsertIntoDoc() {
	          working = true;

	          if (SSS.a_manualA && !ipagesmode) {
	            // 显示手动翻页触发条.
	            logger.debug("[Super-preloader]", 'Manual stitching');
	            manualAdiv();
	          } else {
	            // 直接拼接.
	            logger.debug("[Super-preloader]", 'Direct stitching');
	            insertedIntoDoc();
	          }
	        }

	        var sepStyle; //looks like goNextImg is useless here.
	        //const goNextImg = [false];

	        var sNumber = prefs.sepStartN;
	        var _sep_icons = sep_icons;
	        var curNumber = sNumber;

	        function createSep(lastUrl, currentUrl, nextUrl) {
	          var div = document.createElement('div');

	          if (SSS.a_separator) {
	            if (!sepStyle) {
	              sepStyle = addStyle(spcss['sp-separator']);
	              if (prefs.customCSS.length > 0) addStyle(prefs.customCSS);
	            }

	            div.className = 'sp-separator';
	            div.id = 'sp-separator-' + curNumber;
	            div.addEventListener('click', sepHandler, false);
	            var pageStr = '';

	            if (userLang === 'zh_CN') {
	              pageStr = '<b>第 <span style="' + sep_icons.text_span_style + '">' + curNumber + '</span> 页</b>' + (SSS.a_separatorReal ? getRalativePageStr(lastUrl, currentUrl, nextUrl) : '');
	            } else {
	              pageStr = '<b>Page <span style="' + sep_icons.text_span_style + '">' + curNumber + '</span></b>' + (SSS.a_separatorReal ? getRalativePageStr(lastUrl, currentUrl, nextUrl) : '');
	            }

	            div.appendChild(createDOM('a', {
	              attr: {
	                class: 'sp-sp-nextlink',
	                target: '_blank',
	                href: currentUrl,
	                title: currentUrl
	              },
	              innerHTML: pageStr
	            }));
	            div.appendChild(createDOM('img', {
	              attr: {
	                src: _sep_icons.top,
	                class: 'sp-sp-gotop',
	                alt: userLang === 'zh_CN' ? '去到顶部' : 'To Top',
	                title: userLang === 'zh_CN' ? '去到顶部' : 'To Top'
	              }
	            }));
	            div.appendChild(createDOM('img', {
	              attr: {
	                src: curNumber == sNumber ? _sep_icons.pre_gray : _sep_icons.pre,
	                class: 'sp-sp-gopre',
	                title: userLang === 'zh_CN' ? '上滚一页' : 'Scroll up a page'
	              }
	            }));
	            var i_next = createDOM('img', {
	              attr: {
	                src: _sep_icons.next_gray,
	                class: 'sp-sp-gonext',
	                title: userLang === 'zh_CN' ? '下滚一页' : 'Scroll down a page'
	              }
	            }); //if (goNextImg.length == 2) {
	            //  goNextImg.shift();
	            //}
	            //goNextImg.push(i_next);

	            div.appendChild(i_next);
	            div.appendChild(createDOM('img', {
	              attr: {
	                src: _sep_icons.bottom,
	                class: 'sp-sp-gobottom',
	                alt: userLang === 'zh_CN' ? '去到底部' : 'To Bottom',
	                title: userLang === 'zh_CN' ? '去到底部' : 'To Bottom'
	              }
	            }));
	            div.appendChild(createDOM('div', {
	              attr: {
	                class: 'sp-someinfo',
	                id: 'sp-separator-hover'
	              },
	              children: [createDOM('a', {
	                attr: {
	                  href: 'https://github.com/machsix/Super-preloader',
	                  target: '_blank'
	                },
	                innerHTML: 'Powered by Super-preloader'
	              })]
	            }));
	            curNumber += 1;
	          } else {
	            div.style.cssText = '\
                    height:0!important;\
                    width:0!important;\
                    margin:0!important;\
                    padding:0!important;\
                    border:none!important;\
                    clear:both!important;\
                    display:block!important;\
                    visibility:hidden!important;\
                ';
	          }

	          return div;
	        }

	        var paged = 0;

	        function insertedIntoDoc() {
	          if (!doc) {
	            logger.error("[Super-preloader]", 'No document');
	            return;
	          }

	          if (SSS.a_documentFilter) {
	            try {
	              SSS.a_documentFilter(doc, typeof nextlink === 'string' && nextlink);
	              logger.debug("[Super-preloader]", 'Successfully executeed documentFilter');
	            } catch (e) {
	              logger.error("[Super-preloader]", 'Error executing documentFilter', e, SSS.a_documentFilter.toString());
	            }
	          }

	          var docTitle = getElementByCSS('title', doc).textContent;
	          var fragment = document.createDocumentFragment();
	          var pageElements = getAllElements(SSS.a_pageElement, undefined, doc, win, typeof nextlink === 'string' && nextlink);
	          var ii = pageElements.length;

	          if (ii <= 0) {
	            logger.error("[Super-preloader]", 'Failed to get the main content of the next page', SSS.a_pageElement);
	            removeL();
	            return;
	          } else {
	            logger.debug("[Super-preloader]", 'Successfully got the main content of the next page', pageElements);
	          } // 提前查找下一页链接，后面再赋值


	          var lastUrl = cplink;
	          cplink = String(nextlink);
	          /** @type {HTMLElement | String} */

	          var nl = getElement(SSS.nextLink, undefined, doc, win);

	          if (nl) {
	            if (nl === nextlinkElem) {
	              nextlinkElem = null;
	            } else {
	              nextlinkElem = nl;
	            }
	          } else {
	            nextlinkElem = null;
	          }

	          nextlink = elemToHref(nextlinkElem); // 有部分下一页的信息是在script中（比如新加的csdn的规则），因此先查找下一页信息，再执行 removeScripts

	          removeScripts(doc, SSS.a_scriptFilter);
	          var i, pe_x, pe_x_nn;

	          for (i = 0; i < ii; i++) {
	            pe_x = pageElements[i];
	            pe_x_nn = pe_x.nodeName;
	            if (pe_x_nn == 'BODY' || pe_x_nn == 'HTML' || pe_x_nn == 'SCRIPT') continue;
	            fragment.appendChild(pe_x);
	          }

	          if (SSS.filter && typeof SSS.filter === 'string') {
	            // 功能未完善.
	            var nodes = [];

	            try {
	              nodes = getAllElements(SSS.filter, fragment);
	            } catch (e) {}

	            var nodes_x;

	            for (i = nodes.length - 1; i >= 0; i--) {
	              nodes_x = nodes[i];
	              nodes_x.parentNode.removeChild(nodes_x);
	            }
	          } // lazyImgSrc


	          if (SSS.lazyImgSrc) {
	            handleLazyImgSrc(SSS.lazyImgSrc, fragment);
	          }

	          var imgs; //@ts-ignore

	          if (!window.opera && SSS.a_useiframe && !SSS.a_iloaded) {
	            imgs = getAllElements('css;img[src]', fragment); // 收集所有图片
	          } // 处理下一页内容部分链接是否新标签页打开


	          if (prefs.forceTargetWindow) {
	            var arr = Array.prototype.slice.call(fragment.querySelectorAll('a[href]:not([href^="mailto:"]):not([href^="javascript:"]):not([href^="#"])'));
	            arr.forEach(function (elem) {
	              elem.setAttribute('target', '_blank');

	              if (elem.getAttribute('onclick') == 'atarget(this)') {
	                // 卡饭论坛的控制是否在新标签页打开
	                elem.removeAttribute('onclick');
	              }
	            });
	          }
	          /** @type {HTMLElement} */


	          var sepdiv = createSep(lastUrl, cplink, nextlink);
	          var toInsert = sepdiv;

	          if (SSS.a_sepdivDom !== undefined && typeof SSS.a_sepdivDom === 'function') {
	            toInsert = SSS.a_sepdivDom(doc, sepdiv);
	          } else if (pageElements[0] && pageElements[0].tagName === 'TR' && pageElements[pageElements.length - 1].tagName === 'TR') {
	            var insertParent = insertPoint.parentNode;
	            var colNodes = getAllElements('child::tr[1]/child::*[self::td or self::th]', insertParent);

	            if (colNodes.length == 0) {
	              colNodes = getAllElements('child::*[self::td or self::th]', pageElements[0]);
	            }

	            var _ncol = [].reduce.call(colNodes, function (acc, cur) {
	              return acc + (parseInt(cur.getAttribute('colspan'), 10) || 1);
	            }, 0);

	            toInsert = createDOM('tr', {
	              children: [createDOM('td', {
	                attr: {
	                  colspan: _ncol
	                },
	                children: [sepdiv]
	              })]
	            });
	          } else if (pageElements[0] && pageElements[0].tagName === 'TBODY' && pageElements[pageElements.length - 1].tagName === 'TBODY') {
	            // https://bbs.kafan.cn/forum-8-1.html
	            var trs = pageElements[pageElements.length - 1].getElementsByTagName('tr');

	            if (trs) {
	              var _ncol2 = [].reduce.call(trs[trs.length - 1].children, function (acc, cur) {
	                return acc + (parseInt(cur.getAttribute('colspan'), 10) || 1);
	              }, 0);

	              toInsert = createDOM('tbody', {
	                children: [createDOM('tr', {
	                  children: [createDOM('td', {
	                    attr: {
	                      colspan: _ncol2
	                    },
	                    children: [sepdiv]
	                  })]
	                })]
	              });
	            } else {
	              logger.warn("[Super-preloader]", 'No trs found');
	            }
	          }

	          fragment.insertBefore(toInsert, fragment.firstChild);
	          addIntoDoc(fragment); // filter

	          if (SSS.filter && typeof SSS.filter === 'function') {
	            try {
	              SSS.filter(pageElements);
	              logger.debug("[Super-preloader]", 'Execution of filter(pages) succeeded');
	            } catch (e) {
	              logger.error("[Super-preloader]", 'Error executing filter(pages)', e, SSS.filter.toString());
	            }
	          }

	          if (imgs) {
	            // 非opera,在iframeDOM取出数据时需要重载图片.
	            setTimeout(function () {
	              var _imgs = imgs;
	              var i, ii, img;

	              for (i = 0, ii = _imgs.length; i < ii; i++) {
	                img = _imgs[i];
	                var src = img.src;
	                img.src = src;
	              }
	            }, 99);
	          }

	          if (SSS.a_replaceE) {
	            var oldE = getAllElements(SSS.a_replaceE);
	            var oldE_lt = oldE.length;

	            if (oldE_lt > 0) {
	              var newE = getAllElements(SSS.a_replaceE, undefined, doc, win);
	              var newE_lt = newE.length;

	              if (newE_lt == oldE_lt) {
	                // 替换
	                var oldE_x, newE_x;

	                for (i = 0; i < newE_lt; i++) {
	                  oldE_x = oldE[i];
	                  newE_x = newE[i];
	                  newE_x = doc.importNode(newE_x, true);
	                  oldE_x.parentNode.replaceChild(newE_x, oldE_x);
	                }
	              }
	            }
	          }

	          paged += 1;

	          if (ipagesmode && paged >= ipagesnumber) {
	            ipagesmode = false;
	          }

	          floatWO.loadedIcon('hide');

	          if (manualDiv) {
	            manualDiv.style.display = 'none';
	          } //if (goNextImg[0]) goNextImg[0].src = _sep_icons.next;


	          var ev = document.createEvent('Event');
	          ev.initEvent('Super_preloaderPageLoaded', true, false);
	          document.dispatchEvent(ev);

	          if (prefs.enableHistory) {
	            try {
	              window.history.pushState(null, docTitle, cplink);
	            } catch (e) {}
	          }

	          if (paged >= SSS.a_maxpage) {
	            logger.debug("[Super-preloader]", `Reached the set maximum number of page turns ${SSS.a_maxpage}`);
	            notice('<b>Status</b>:' + 'Reached the set maximum number of page turns:<b style="color:red">' + SSS.a_maxpage + '</b>');
	            removeL();
	            return;
	          }

	          var delayiframe = function delayiframe(fn) {
	            setTimeout(fn, 199);
	          };

	          if (nextlink && !pagedLinks.includes(nextlink)) {
	            // debug('Found the next page link:', nextlink);
	            doc = win = null;

	            if (ipagesmode) {
	              if (SSS.a_useiframe) {
	                // 延时点,firefox,太急会卡-_-!
	                delayiframe(doRequest);
	              } else {
	                doRequest();
	              }
	            } else {
	              working = false;

	              if (SSS.a_useiframe) {
	                delayiframe(afterInsertDo);
	              } else {
	                afterInsertDo();
	              }
	            }
	          } else {
	            logger.error("[Super-preloader]", 'No next page link found.', SSS.nextLink);
	            removeL();
	          }
	        } // 返回,剩余高度是总高度的比值.


	        var relatedObj_0, relatedObj_1;

	        if (SSS.a_relatedObj) {
	          if (isArray_1(SSS.a_relatedObj)) {
	            relatedObj_0 = SSS.a_relatedObj[0];
	            relatedObj_1 = SSS.a_relatedObj[1];
	          } else {
	            relatedObj_0 = SSS.a_pageElement;
	            relatedObj_1 = 'bottom';
	          }
	        }

	        function getRemain() {
	          var _cplink = cplink || undefined;

	          var scrolly = window.scrollY;
	          var windowHeight = window.innerHeight;
	          document.body.clientHeight;
	          var obj = getLastVisibleElement(relatedObj_0, _cplink);
	          var scrollH = obj && obj.nodeType == 1 ? obj.getBoundingClientRect()[relatedObj_1] + scrolly : Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
	          var exElementHeight = 0;

	          if (SSS.a_excludeElement != undefined) {
	            var exElementNode = getLastVisibleElement(SSS.a_excludeElement, _cplink);

	            if (exElementNode !== null) {
	              exElementHeight = exElementNode.offsetHeight;
	            }
	          }

	          return (scrollH - scrolly - windowHeight - exElementHeight) / windowHeight; // 剩余高度于页面总高度的比例.
	        }

	        var pause = false;

	        if (prefs.pauseA) {
	          var Sbutton = ['target', 'shiftKey', 'ctrlKey', 'altKey'];
	          var ltype = prefs.mouseA ? 'mousedown' : 'dblclick';
	          var button_1 = Sbutton[prefs.Pbutton[0]];
	          var button_2 = Sbutton[prefs.Pbutton[1]];
	          var button_3 = Sbutton[prefs.Pbutton[2]];

	          var pauseIt = function pauseIt() {
	            pause = !pause;
	            if (prefs.stop_ipage) ipagesmode = false;

	            if (pause) {
	              floatWO.updateColor('Apause');

	              if (userLang === 'zh_CN') {
	                notice('<b>状态</b>:' + '自动翻页<span style="color:red!important;"><b> 暂停</b></span>.', prefs.disappearDelay);
	              } else {
	                notice('<b>Status</b>:' + 'Autopagger<span style="color:red!important;"><b> Pause</b></span>.', prefs.disappearDelay);
	              }
	            } else {
	              floatWO.updateColor('autopager');
	              floatWO.CmodeIcon('hide');

	              if (userLang === 'zh_CN') {
	                notice('<b>状态</b>:' + '自动翻页<span style="color:red!important;"><b> 启用</b></span>.');
	              } else {
	                notice('<b>Status</b>:' + 'Autopagger<span style="color:red!important;"><b> Enable</b></span>.');
	              }
	            }

	            scroll();
	          };

	          var Sctimeout;

	          var clearPause = function clearPause() {
	            clearTimeout(Sctimeout);
	            document.removeEventListener('mouseup', clearPause, false);
	          };

	          var pausehandler = function pausehandler(e) {
	            if (!SSS.a_manualA || ipagesmode) {
	              if (e[button_1] && e[button_2] && e[button_3]) {
	                if (e.type == 'mousedown') {
	                  document.addEventListener('mouseup', clearPause, false);
	                  Sctimeout = setTimeout(pauseIt, prefs.Atimeout);
	                } else {
	                  pauseIt();
	                }
	              }
	            }
	          };

	          document.addEventListener(ltype, pausehandler, false);
	          remove.push(function () {
	            document.removeEventListener(ltype, pausehandler, false);
	          });
	        }

	        function scroll() {
	          if (!pause && !working && (getRemain() <= SSS.a_remain || ipagesmode)) {
	            if (doc) {
	              // 有的话,就插入到文档.
	              beforeInsertIntoDoc();
	            } else {
	              // 否则就请求文档.
	              scrollDo();
	            }
	          }
	        }

	        var timeout;

	        function timeoutfn() {
	          clearTimeout(timeout);
	          timeout = setTimeout(scroll, 100);
	        }

	        window.addEventListener('scroll', timeoutfn, false);
	        remove.push(function () {
	          window.removeEventListener('scroll', timeoutfn, false);
	        });
	        autoPO = {
	          startipages: function startipages(value) {
	            if (value > 0) {
	              ipagesmode = true;
	              ipagesnumber = value + paged;
	              notice('<b>Status</b>:' + 'Current number of pages turned: <b>' + paged + '</b>,' + 'Continue to turn page <b style="color:red!important;">' + ipagesnumber + '</b>');
	              if (SSS.a_manualA) insertedIntoDoc();
	              scroll();
	            }
	          }
	        };
	      }
	      /**
	       * prefetcher
	       * @param {IRuntimeRule} SSS a rule
	       * @param {*} floatWO float window object
	       * @returns {void}
	       */


	      function prefetcher(SSS, floatWO) {
	        function cContainer() {
	          var div = document.createElement('div');
	          /** @type {HTMLElement} */
	          //@ts-ignore

	          var div2 = div.cloneNode(false);
	          var hr = document.createElement('hr');
	          div.style.cssText = '\
                margin:3px!important;\
                padding:5px!important;\
                border-radius:8px!important;\
                -moz-border-radius:8px!important;\
                border-bottom:1px solid #E30005!important;\
                border-top:1px solid #E30005!important;\
                background-color:#F5F5F5!important;\
                float:none!important;\
                display:none!important;\
            ';
	          div.title = 'Prefetched content';
	          div2.style.cssText = '\
                text-align:left!important;\
                color:red!important;\
                font-size:13px!important;\
                float:none!important;\
                display:block!important;\
                position:static!important;\
            ';
	          hr.style.cssText = '\
                display:block!important;\
                border:1px inset #000!important;\
            ';
	          div.appendChild(div2);
	          div.appendChild(hr);
	          document.body.appendChild(div);
	          return {
	            div: div,
	            div2: div2
	          };
	        }

	        floatWO.updateColor('prefetcher');
	        floatWO.updateColor('loading');
	        floatWO.CmodeIcon('show');

	        if (SSS.useiframe) {
	          var iframe = document.createElement('iframe');
	          iframe.name = 'superpreloader-iframe';
	          iframe.src = String(nextlink);
	          iframe.width = '100%';
	          iframe.height = '0';
	          iframe.frameBorder = '0';
	          iframe.style.cssText = '\
                margin:0!important;\
                padding:0!important;\
            ';
	          iframe.addEventListener('load', function (e) {
	            //@ts-ignore
	            var body = e.currentTarget.contentDocument.body;

	            if (body && body.firstChild) {
	              floatWO.updateColor('prefetcher');
	              floatWO.CmodeIcon('hide');
	              floatWO.loadedIcon('show'); //@ts-ignore

	              e.currentTarget.removeEventListener('load', arguments.callee, false);

	              if (SSS.lazyImgSrc) {
	                handleLazyImgSrc(SSS.lazyImgSrc, body);
	              }
	            }
	          }, false);

	          if (SSS.viewcontent) {
	            var container = cContainer();
	            container.div.style.display = 'block';
	            container.div2.innerHTML = 'iframe full prefetch: ' + '<br />' + 'Prefetch URL: ' + '<b>' + nextlink + '</b>';
	            iframe.height = '300px';
	            container.div.appendChild(iframe);
	          } else {
	            document.body.appendChild(iframe);
	          }
	        } else {
	          var reqConf = {
	            headers: SSS.a_headers ? SSS.a_headers : {
	              Referer: cplink
	            }
	          };
	          got.get(nextlink, reqConf).then(function (res) {
	            var doc = createDocumentByString(res.data);

	            if (!doc) {
	              logger.error("[Super-preloader]", 'Document object creation failed!');
	              return;
	            }

	            if (SSS.lazyImgSrc) {
	              handleLazyImgSrc(SSS.lazyImgSrc, doc);
	            }

	            var images = doc.images;
	            var isl = images.length;
	            var img;
	            var iarray = [];
	            var i;
	            var existSRC = {};
	            var isrc;

	            for (i = isl - 1; i >= 0; i--) {
	              isrc = images[i].getAttribute('src');

	              if (!isrc || existSRC[isrc]) {
	                continue;
	              } else {
	                existSRC[isrc] = true;
	              }

	              img = document.createElement('img');
	              img.src = isrc;
	              iarray.push(img);
	            }

	            var container = cContainer();
	            var div = container.div;
	            i = iarray.length;
	            container.div2.innerHTML = 'Number of prefetched pictures: ' + '<b>' + i + '</b>' + '<br />' + 'Prefetch URL:' + '<b>' + nextlink + '</b>';
	            logger.info("[Super-preloader]", 'Number of prefetched pictures: ' + i + 'Prefetch URL: ' + nextlink);

	            for (i -= 1; i >= 0; i--) {
	              div.appendChild(iarray[i]);
	            }

	            if (SSS.viewcontent) {
	              container.div.style.display = 'block';
	            }

	            floatWO.updateColor('prefetcher');
	            floatWO.loadedIcon('show');
	            floatWO.CmodeIcon('hide');
	          });
	        }
	      } // 执行开始..///////////////////
	      // 分析黑名单


	      var blackList_re = new RegExp(blackList.map(function (x) {
	        if (x.substring(0, 3).toLowerCase() == 're:') {
	          return x.substring(4);
	        } else {
	          return wildcardToRegExpStr(x);
	        }
	      }).join('|'));

	      if (blackList_re.test(url)) {
	        logger.debug("[Super-preloader]", 'Matched blacklist, JS execution stopped');
	        return;
	      } // 是否在frame上加载..


	      if (prefs.DisableI && window.self != window.parent) {
	        var isReturn = !find_1(DIExclude, function (x) {
	          //@ts-ignore
	          return x[1] && x[2].test(url);
	        });

	        if (isReturn) {
	          logger.debug("[Super-preloader]", `The page with url:${url} is not a top-level window, JS execution stopped`);
	          return;
	        }
	      }

	      logger.debug("[Super-preloader]", `Page url is: ${url}, JS loaded successfully`); // 第一阶段..分析高级模式..

	      if (prefs.disableBuiltinRules) {
	        logger.warn("[Super-preloader]", 'Builtin js rules are disabled');
	      } else {
	        SSRules = SSRules.concat(jsSiteRule);
	      }

	      if (prefs.disableBuiltinSubscriptionRules) {
	        logger.warn("[Super-preloader]", 'Remote json rules are disabled');
	      } else {
	        SSRules = SSRules.concat(jsonRule);
	      }

	      if (!prefs.disableBuiltinRules) {
	        SSRules = SSRules.concat(jsGeneralRule);
	      }

	      if (!prefs.numOfRule || prefs.numOfRule != SSRules.length) {
	        prefs.numOfRule = SSRules.length;
	        GM.setValue('prefs', prefs);
	      } // 重要的变量两枚.

	      /** @type {Array<string|HTMLElement>} */


	      var pagedLinks = [document.location.href];
	      /** @type {HTMLElement|string} */

	      var nextlinkElem;
	      /** @type {string} */

	      var nextlink;
	      /** @type {HTMLElement|string} */

	      var prelink; //= ==============

	      /**@type {IRuntimeRule} */

	      var SSS = {};

	      var findCurSiteInfo = function findCurSiteInfo() {
	        var SIIAD = SITEINFO_D.autopager;
	        var Rurl;
	        var ii = SSRules.length;

	        if (userLang === 'zh_CN') {
	          logger.debug("[Super-preloader]", `高级规则数目:${ii}`);
	          logger.debug("[Super-preloader]", `Number of rules > ${ii - jsonRule.length} from other sources, such as: wedata.net`);
	        } else {
	          logger.debug("[Super-preloader]", `Number of advanced rules:${ii}`);
	        }

	        var _loop = function _loop() {
	          var SII = SSRules[i];
	          Rurl = toRE(SII.url);

	          if (Rurl.test(url)) {
	            if (userLang === 'zh_CN') {
	              logger.debug("[Super-preloader]", 'Find current site rules:', SII);
	              logger.debug("[Super-preloader]", `规则ID: ${i + 1}`);
	            } else {
	              logger.debug("[Super-preloader]", 'Find rule for this website:', SII);
	              logger.debug("[Super-preloader]", `Rule ID: ${i + 1}`);
	            } // 运行规则的 startFilter


	            if (SII.autopager && SII.autopager.startFilter) {
	              try {
	                SII.autopager.startFilter(document, window);
	                logger.debug("[Super-preloader]", 'startFilter executed successfully');
	              } catch (e) {
	                logger.error("[Super-preloader]", 'Error executing startFilter', e);
	              }
	            }

	            nextlinkElem = getElement(SII.nextLink || 'auto;');

	            if (!nextlinkElem) {
	              logger.warn("[Super-preloader]", 'Could not find the next page link, continue searching for other rules, skiping rule:', SII);
	              return "continue";
	            } // extract next page link from an a link


	            nextlink = getFullHref(nextlinkElem);

	            if (nextlink === document.location.href) {
	              nextlinkElem = null;
	              return "continue";
	            }

	            if (SII.preLink && SII.preLink != 'auto;') {
	              // 如果设定了具体的preLink
	              prelink = getElement(SII.preLink);
	            } else {
	              if (prefs.autoGetPreLink) {
	                prelink = getElement('auto;');
	              }
	            }

	            SSS = {};
	            SSS.Rurl = String(Rurl);
	            SSS.nextLink = SII.nextLink || 'auto;';
	            SSS.viewcontent = SII.viewcontent;
	            SSS.enable = SII.enable === undefined ? SITEINFO_D.enable : SII.enable;
	            SSS.useiframe = SII.useiframe === undefined ? SITEINFO_D.useiframe : SII.useiframe;

	            if (SII.pageElement) {
	              // 如果是Oautopager的规则..
	              if (!(SII.autopager instanceof Object)) SII.autopager = {};
	              SII.autopager.pageElement = SII.pageElement;
	              if (!SII.autopager.useiframe) SII.autopager.useiframe = SII.useiframe;
	              if (SII.preLink) SII.autopager.preLink = SII.preLink;
	              if (SII.insertBefore) SII.autopager.HT_insert = [SII.insertBefore, 1];
	            } // 自动翻页设置.


	            var SIIA = SII.autopager;

	            if (SIIA) {
	              SSS.a_pageElement = SIIA.pageElement;
	              if (!SSS.a_pageElement) return "break";
	              SSS.a_manualA = SIIA.manualA === undefined ? SIIAD.manualA : SIIA.manualA;
	              SSS.a_enable = SIIA.enable === undefined ? SIIAD.enable : SIIA.enable;
	              SSS.a_useiframe = SIIA.useiframe === undefined ? SIIAD.useiframe : SIIA.useiframe;
	              SSS.a_mutationObserver = SSS.a_useiframe ? SIIA.mutationObserver === undefined ? null : SIIA.mutationObserver : null;
	              SSS.a_newIframe = SIIA.newIframe === undefined ? SIIAD.newIframe : SIIA.newIframe;
	              SSS.a_iloaded = SIIA.iloaded === undefined ? SIIAD.iloaded : SIIA.iloaded;
	              SSS.a_itimeout = SIIA.itimeout === undefined ? SIIAD.itimeout : SIIA.itimeout;
	              SSS.a_remain = SIIA.remain === undefined ? SIIAD.remain : SIIA.remain;
	              SSS.a_maxpage = SIIA.maxpage === undefined ? SIIAD.maxpage : SIIA.maxpage;
	              SSS.a_separator = SIIA.separator === undefined ? SIIAD.separator : SIIA.separator;
	              SSS.a_sepdivDom = SIIA.sepdivDom === undefined ? undefined : SIIA.sepdivDom;
	              SSS.a_separatorReal = SIIA.separatorReal === undefined ? SIIAD.separatorReal : SIIA.separatorReal;
	              SSS.a_replaceE = SIIA.replaceE;
	              SSS.a_HT_insert = SIIA.HT_insert;
	              SSS.a_relatedObj = SIIA.relatedObj === undefined ? SIIAD.relatedObj : SIIA.relatedObj;
	              SSS.a_ipages = SIIA.ipages === undefined ? SIIAD.ipages : SIIA.ipages; // new

	              SSS.filter = SII.filter || SIIA.filter; // 新增了函数的形式，原来的功能是移除 pageElement

	              var documentFilter = SII.documentFilter || SIIA.documentFilter;

	              if (documentFilter === 'startFilter') {
	                SSS.a_documentFilter = function (doc) {
	                  return SII.autopager.startFilter(doc);
	                };
	              } else if (typeof documentFilter === 'function') {
	                SSS.a_documentFilter = documentFilter;
	              } else {
	                SSS.a_documentFilter = undefined;
	              }

	              SSS.a_scriptFilter = SIIA.scriptFilter === undefined ? '' : SIIA.scriptFilter;
	              SSS.a_stylish = SII.stylish || SIIA.stylish;
	              SSS.lazyImgSrc = SIIA.lazyImgSrc;
	              SSS.a_headers = SIIA.headers === undefined ? undefined : SIIA.headers; // custom header for XHRLoaded

	              SSS.a_reload = SIIA.reload === undefined ? SIIAD.reload : SIIA.reload; // force reload iframe

	              SSS.a_sandbox = SIIA.sandbox === undefined ? SIIAD.sandbox : SIIA.sandbox; // 在翻页的时候会有一些其他元素占据了页面的高度，导致翻页不精准。
	              // 比如正文下面的推荐文章列表（占据超过整个页面10%就很难受）

	              SSS.a_excludeElement = SIIA.excludeElement;
	            } // 检验是否存在内容


	            var pageElement = getElement(SSS.a_pageElement);

	            if (!pageElement || Array.isArray(pageElement) && pageElement.length === 0) {
	              nextlinkElem = null;
	              logger.error("[Super-preloader]", 'Could not find content, skiping rule:', SII, 'Continue to search for other rules.');
	              return "continue";
	            }

	            SSS.hasRule = true;
	            return "break";
	          }
	        };

	        for (var i = 0; i < ii; i++) {
	          var _ret = _loop();

	          if (_ret === "continue") continue;
	          if (_ret === "break") break;
	        }

	        if (!SSS.hasRule) {
	          // 自动搜索.
	          if (!autoMatch.keyMatch) {
	            logger.warn("[Super-preloader]", 'Auto match is disabled');
	          } else {
	            logger.warn("[Super-preloader]", 'No rules are found. Auto match starts');
	            nextlinkElem = autoGetLink();

	            if (nextlinkElem) {
	              // 强制模式.
	              var FA = autoMatch.FA;
	              SSS.Rurl = window.localStorage ? 'am:' + (url.match(/^https?:\/\/[^:]*\//i) || [])[0] : 'am:automatch';
	              SSS.enable = true;
	              SSS.nextLink = 'auto;';
	              SSS.viewcontent = autoMatch.viewcontent;
	              SSS.useiframe = autoMatch.useiframe || SITEINFO_D.autopager.useiframe;
	              SSS.a_force = true;
	              SSS.a_manualA = FA.manualA;
	              SSS.a_enable = FA.enable || SITEINFO_D.autopager.force_enable; // Force join is enabled when this becomes true

	              SSS.a_useiframe = FA.useiframe || SITEINFO_D.useiframe;
	              SSS.a_iloaded = FA.iloaded;
	              SSS.a_itimeout = FA.itimeout;
	              SSS.a_remain = FA.remain;
	              SSS.a_maxpage = FA.maxpage;
	              SSS.a_separator = FA.separator;
	              SSS.a_ipages = FA.ipages;
	            }
	          }
	        } // 如果规则没 lazyImgSrc，设置默认值


	        if (!SSS.lazyImgSrc) {
	          SSS.lazyImgSrc = prefs.lazyImgSrc;
	        }

	        logger.debug("[Super-preloader]", `Total time spent on searching for advanced rules and automatic matching: ${new Date().getTime() - startTime.getTime()}ms`);
	      };

	      findCurSiteInfo(); // 上下页都没有找到啊

	      if (!nextlinkElem && !prelink) {
	        logger.warn("[Super-preloader]", `No related links found, JS execution stopped. Total time spent: ${new Date().getTime() - startTime.getTime()}ms`);
	        return;
	      } else {
	        logger.debug("[Super-preloader]", 'Previous link element:', prelink);
	        logger.debug("[Super-preloader]", 'Next link element:', nextlinkElem);
	        nextlink = elemToHref(nextlinkElem);
	        logger.debug("[Super-preloader]", 'Next link:', nextlink); //@ts-ignore

	        prelink = prelink ? prelink.href || prelink : undefined;
	      }

	      var superPreloader = {
	        go: function go() {
	          if (typeof nextlink === 'string') window.location.href = nextlink;
	        },
	        back: function back() {
	          //fixme
	          if (!prelink) getElement('auto;');
	          if (typeof prelink === 'string') window.location.href = prelink;
	        }
	      };

	      if (prefs.arrowKeyPage) {
	        logger.debug("[Super-preloader]", 'Adding left and right arrow keys to autopager listener.');
	        document.addEventListener('keyup', function (e) {
	          //@ts-ignore
	          var tarNN = e.target.nodeName;
	          if (tarNN != 'BODY' && tarNN != 'HTML') return; // check is a combo pressed

	          if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) {
	            return;
	          }

	          switch (e.keyCode) {
	            case 37:
	              superPreloader.back();
	              break;

	            case 39:
	              superPreloader.go();
	              break;
	          }
	        }, false);
	      } // 监听下一页事件.


	      logger.debug("[Super-preloader]", '添加鼠标手势翻页监听');
	      document.addEventListener('superPreloader.go', function () {
	        superPreloader.go();
	      }, false); // 监听下一页事件.

	      document.addEventListener('superPreloader.back', function () {
	        superPreloader.back();
	      }, false); // 没找到下一页的链接

	      if (!nextlink) {
	        logger.error("[Super-preloader]", 'The link to the next page does not exist, JS cannot continue.');
	        logger.debug("[Super-preloader]", `Total time spent:${new Date().getTime() - startTime.getTime()}ms`);
	        return;
	      }

	      loadLocalSetting(SSS);

	      if (!SSS.hasRule) {
	        SSS.a_force = true;
	      }

	      if (SSS.a_force) {
	        SSS.a_pageElement = '//body/*';
	        SSS.a_HT_insert = undefined;
	        SSS.a_relatedObj = undefined;
	      }

	      if (prefs.floatWindow) {
	        logger.debug("[Super-preloader]", 'Creating a floating window');
	        floatWindow(SSS);
	        var floatWindowWidth = getFloatWindowWith();
	        displace(document.getElementById('sp-fw-container'), {
	          handle: document.getElementById('sp-fw-rect'),
	          customMove: function customMove(el, x, y) {
	            delete el.style.left;
	            delete el.style.bottom;
	            var right = document.body.clientWidth - floatWindowWidth - x;

	            if (right < 0) {
	              right = 0;
	            } else if (right > window.innerWidth - floatWindowWidth) {
	              right = window.innerWidth - floatWindowWidth;
	            }

	            var top = y;

	            if (top > window.innerHeight - document.getElementById('sp-fw-rect').scrollHeight) {
	              top = window.innerHeight - document.getElementById('sp-fw-rect').scrollHeight;
	            } else if (top < 0) {
	              top = 0;
	            }

	            el.style.right = `${right}px`;
	            el.style.top = `${top}px`;
	          },
	          onMouseUp: function onMouseUp(el) {
	            prefs.FW_offset[0] = parseInt(el.style.top.replace('px', ''), 10);
	            prefs.FW_offset[1] = parseInt(el.style.right.replace('px', ''), 10);
	            prefs.FW_position = 2;
	            GM.setValue('prefs', prefs);
	          }
	        });
	        document.getElementById('sp-fw-container').style.position = 'fixed';
	      }

	      if (!SSS.enable) {
	        logger.warn("[Super-preloader]", 'This rule is disabled, script execution is stopped');
	        logger.debug("[Super-preloader]", `Total time spent:${new Date().getTime() - startTime.getTime()}ms`);
	        return;
	      }

	      logger.debug("[Super-preloader]", `Total time spent:${new Date().getTime() - startTime.getTime()}ms`); // 预读或者翻页.

	      if (SSS.a_enable) {
	        logger.debug("[Super-preloader]", 'Initializing, autopager mode.');
	        autopager(SSS, floatWO);
	      } else {
	        logger.debug("[Super-preloader]", 'Initializing, prefetch mode.');
	        prefetcher(SSS, floatWO);
	      }

	      var docChecked; // 获取单个元素,混合

	      /**
	       *
	       * @param {string|Function|Array|IHrefIncObject} selector selector
	       * @param {HTMLElement|Document=} contextNode element
	       * @param {Document=} doc document
	       * @param {Window=} win window
	       * @returns {HTMLElement} element
	       */

	      function getElement(selector, contextNode, doc, win) {
	        var _cplink = cplink;
	        var ret;
	        if (!selector) return ret;
	        doc = doc || document;
	        win = win || window;
	        contextNode = contextNode || doc;

	        if (typeof selector === 'string') {
	          if (selector.search(/^css;/i) === 0) {
	            ret = getElementByCSS(selector.slice(4), contextNode);
	          } else if (selector.toLowerCase() == 'auto;') {
	            ret = autoGetLink(doc);
	          } else {
	            ret = getElementByXpath(selector, contextNode, doc);
	          }
	        } else if (typeof selector === 'function') {
	          ret = selector(doc, win, _cplink);
	        } else if (selector instanceof Array) {
	          for (var i = 0, l = selector.length; i < l; i++) {
	            ret = getElement(selector[i], contextNode, doc, win);

	            if (ret) {
	              break;
	            }
	          }
	        } else {
	          ret = hrefInc(selector, doc, win, _cplink);
	        }

	        return ret;
	      }
	      /**
	       *
	       * @param {Document=} doc document
	       * @param {Window=} win window
	       * @returns {HTMLElement} a
	       */


	      function autoGetLink(doc, win) {
	        if (!autoMatch.keyMatch) return; //@ts-ignore

	        if (!parseKWRE.done) {
	          parseKWRE(); //@ts-ignore

	          parseKWRE.done = true;
	        }

	        var startTime = new Date();
	        doc = doc || document;

	        if (doc == document) {
	          // 当前文档,只检查一次.
	          if (docChecked) {
	            // @ts-ignore
	            return nextlink;
	          }

	          docChecked = true;
	        }

	        var _prePageKey = prePageKey;
	        var _nextPageKey = nextPageKey;
	        var _nPKL = nextPageKey.length;
	        var _pPKL = prePageKey.length;
	        var _getFullHref = getFullHref;
	        var _getAllElementsByXpath = getAllElementsByXpath;
	        var _Number = Number;
	        var _domain_port = domain_port;
	        var alllinks = doc.links;
	        var alllinksl = alllinks.length;
	        var curLHref = cplink;

	        var _nextlink;

	        var _prelink; //@ts-ignore


	        if (!autoGetLink.checked) {
	          // 第一次检查
	          _nextlink = nextlink;
	          _prelink = prelink;
	        } else {
	          _prelink = true;
	        }

	        var DCEnable = autoMatch.digitalCheck;
	        var DCRE = /^\s*\D{0,1}(\d+)\D{0,1}\s*$/;
	        var i, a, atext, numtext;
	        var aP;
	        var initSD;
	        var searchD = 1;
	        var preS1;
	        var preS2;
	        var searchedD;
	        var pSNText;
	        var preSS;
	        var nodeType;
	        var nextS1, nextS2, nSNText, nextSS;
	        var aimgs, j, jj, aimg_x, xbreak, k, keytext;

	        function finalCheck(a, type) {
	          var ahref = a.getAttribute('href'); // 在chrome上当是非当前页面文档对象的时候直接用a.href访问,不返回href

	          if (ahref == '#') {
	            return null;
	          }

	          ahref = _getFullHref(ahref); // 从相对路径获取完全的href;
	          // 3个条件:http协议链接,非跳到当前页面的链接,非跨域

	          if (/^https?:/i.test(ahref) && ahref.replace(/#.*$/, '') != curLHref && ahref.match(/https?:\/\/([^\/]+)/)[1] == _domain_port) {
	            logger.debug("[Super-preloader]", type == 'pre' ? 'previous' : 'next' + 'match:', atext);
	            return a; // 返回对象A
	            // return ahref;
	          }
	        }

	        logger.debug("[Super-preloader]", `Number of full document links:${alllinksl}`);

	        for (i = 0; i < alllinksl; i++) {
	          if (_nextlink && _prelink) break;
	          a = alllinks[i];
	          if (!a) continue; // undefined跳过
	          // links集合返回的本来就是包含href的a元素..所以不用检测
	          // if(!a.hasAttribute("href"))continue;

	          atext = a.textContent;

	          if (atext) {
	            if (DCEnable) {
	              numtext = atext.match(DCRE);

	              if (numtext) {
	                // 是不是纯数字
	                // debug(numtext);
	                numtext = numtext[1];
	                aP = a;
	                initSD = 0;

	                if (!_nextlink) {
	                  preS1 = a.previousSibling;
	                  preS2 = a.previousElementSibling;

	                  while (!(preS1 || preS2) && initSD < searchD) {
	                    aP = aP.parentNode;

	                    if (aP) {
	                      preS1 = aP.previousSibling; //@ts-ignore

	                      preS2 = aP.previousElementSibling;
	                    }

	                    initSD++;
	                  }

	                  searchedD = initSD > 0;

	                  if (preS1 || preS2) {
	                    pSNText = preS1 ? preS1.textContent.match(DCRE) : '';

	                    if (pSNText) {
	                      preSS = preS1;
	                    } else {
	                      pSNText = preS2 ? preS2.textContent.match(DCRE) : '';
	                      preSS = preS2;
	                    }

	                    if (pSNText) {
	                      pSNText = pSNText[1];

	                      if (_Number(pSNText) == _Number(numtext) - 1) {
	                        nodeType = preSS.nodeType;

	                        if (nodeType == 3 || nodeType == 1 && (searchedD ? _getAllElementsByXpath('./descendant-or-self::a[@href]', preSS, doc).length === 0 : !preSS.hasAttribute('href') || _getFullHref(preSS.getAttribute('href')) == curLHref)) {
	                          _nextlink = finalCheck(a, 'next');
	                        }

	                        continue;
	                      }
	                    }
	                  }
	                }

	                if (!_prelink) {
	                  nextS1 = a.nextSibling;
	                  nextS2 = a.nextElementSibling;

	                  while (!(nextS1 || nextS2) && initSD < searchD) {
	                    aP = aP.parentNode;

	                    if (aP) {
	                      nextS1 = a.nextSibling;
	                      nextS2 = a.nextElementSibling;
	                    }

	                    initSD++;
	                  }

	                  searchedD = initSD > 0;

	                  if (nextS1 || nextS2) {
	                    nSNText = nextS1 ? nextS1.textContent.match(DCRE) : '';

	                    if (nSNText) {
	                      nextSS = nextS1;
	                    } else {
	                      nSNText = nextS2 ? nextS2.textContent.match(DCRE) : '';
	                      nextSS = nextS2;
	                    }

	                    if (nSNText) {
	                      nSNText = nSNText[1];

	                      if (_Number(nSNText) == _Number(numtext) + 1) {
	                        nodeType = nextSS.nodeType;

	                        if (nodeType == 3 || // @ts-ignore
	                        nodeType == 1 && (searchedD ? _getAllElementsByXpath('./descendant-or-self::a[@href]', nextSS, doc).length === 0 : !nextSS.hasAttribute('href') || _getFullHref(nextSS.getAttribute('href')) == curLHref)) {
	                          _prelink = finalCheck(a, 'pre');
	                        }
	                      }
	                    }
	                  }
	                }

	                continue;
	              }
	            }
	          } else {
	            atext = a.title;
	          }

	          if (!atext) {
	            aimgs = a.getElementsByTagName('img');

	            for (j = 0, jj = aimgs.length; j < jj; j++) {
	              aimg_x = aimgs[j];
	              atext = aimg_x.alt || aimg_x.title;
	              if (atext) break;
	            }
	          }

	          if (!atext) continue;

	          if (!_nextlink) {
	            xbreak = false;

	            for (k = 0; k < _nPKL; k++) {
	              keytext = _nextPageKey[k]; //@ts-ignore

	              if (!keytext.test(atext)) continue;
	              _nextlink = finalCheck(a, 'next');
	              xbreak = true;
	              break;
	            }

	            if (xbreak || _nextlink) continue;
	          }

	          if (!_prelink) {
	            for (k = 0; k < _pPKL; k++) {
	              keytext = _prePageKey[k]; //@ts-ignore

	              if (!keytext.test(atext)) continue;
	              _prelink = finalCheck(a, 'pre');
	              break;
	            }
	          }
	        }

	        logger.debug("[Super-preloader]", `Time to search ${i} links:${new Date().getTime() - startTime.getTime()}ms`); //@ts-ignore

	        if (!autoGetLink.checked) {
	          // 只在第一次检测的时候,抛出上一页链接.
	          prelink = _prelink; //@ts-ignore

	          autoGetLink.checked = true;
	        }

	        return _nextlink;
	      }

	      function parseKWRE() {
	        function modifyPageKey(name, pageKey, pageKeyLength) {
	          function strMTE(str) {
	            return str.replace(/\\/g, '\\\\').replace(/\+/g, '\\+').replace(/\./g, '\\.').replace(/\?/g, '\\?').replace(/\{/g, '\\{').replace(/\}/g, '\\}').replace(/\[/g, '\\[').replace(/\]/g, '\\]').replace(/\^/g, '\\^').replace(/\$/g, '\\$').replace(/\*/g, '\\*').replace(/\(/g, '\\(').replace(/\)/g, '\\)').replace(/\|/g, '\\|').replace(/\//g, '\\/');
	          }

	          var pfwordl = autoMatch.pfwordl;
	          var sfwordl = autoMatch.sfwordl;
	          var RE_enable_a = pfwordl[name].enable;
	          var RE_maxPrefix = pfwordl[name].maxPrefix;
	          var RE_character_a = pfwordl[name].character;
	          var RE_enable_b = sfwordl[name].enable;
	          var RE_maxSubfix = sfwordl[name].maxSubfix;
	          var RE_character_b = sfwordl[name].character;
	          var plwords, slwords, rep;
	          plwords = RE_maxPrefix > 0 ? '[' + (RE_enable_a ? strMTE(RE_character_a.join('')) : '.') + ']{0,' + RE_maxPrefix + '}' : '';
	          plwords = '^\\s*' + plwords;
	          slwords = RE_maxSubfix > 0 ? '[' + (RE_enable_b ? strMTE(RE_character_b.join('')) : '.') + ']{0,' + RE_maxSubfix + '}' : '';
	          slwords = slwords + '\\s*$';
	          rep = autoMatch.cases ? '' : 'i';

	          for (var i = 0; i < pageKeyLength; i++) {
	            pageKey[i] = new RegExp(plwords + strMTE(pageKey[i]) + slwords, rep);
	          }

	          return pageKey;
	        } // 转成正则.


	        prePageKey = modifyPageKey('previous', prePageKey, prePageKey.length);
	        nextPageKey = modifyPageKey('next', nextPageKey, nextPageKey.length);
	      }
	    } // By lastDream2013 略加修改，原版只能用于 Firefox


	    function getRalativePageStr(lastUrl, currentUrl, nextUrl) {

	      var getRalativePageNumArray = function getRalativePageNumArray(lasturl, url) {
	        if (!lasturl || !url) {
	          return [0, 0];
	        }

	        var lasturlarray = lasturl.split(/-|\.|\&|\/|=|#|\?/);
	        var urlarray = url.split(/-|\.|\&|\/|=|#|\?/);
	        var url_info;
	        var lasturl_info; // 一些 url_info 为 p1,p2,p3 之类的

	        var handleInfo = function handleInfo(s) {
	          if (s) {
	            return s.replace(/^p/, '');
	          }

	          return s;
	        };

	        while (urlarray.length !== 0) {
	          url_info = handleInfo(urlarray.pop());
	          lasturl_info = handleInfo(lasturlarray.pop());

	          if (url_info != lasturl_info) {
	            if (/[0-9]+/.test(url_info) && (url_info == '2' || /[0-9]+/.test(lasturl_info))) {
	              return [parseInt(lasturl_info) || 1, parseInt(url_info)];
	            }
	          }
	        }

	        return [0, 0];
	      };

	      var relativeOff; // 论坛和搜索引擎网页显示实际页面信息

	      var relativePageNumarray = [];

	      if (nextUrl) {
	        relativePageNumarray = getRalativePageNumArray(currentUrl, nextUrl);
	      } else {
	        relativePageNumarray = getRalativePageNumArray(lastUrl, currentUrl);
	        relativeOff = relativePageNumarray[1] - relativePageNumarray[0]; // 用的上一页的相对信息比较的，要补充差值……

	        relativePageNumarray[1] = relativePageNumarray[1] + relativeOff;
	        relativePageNumarray[0] = relativePageNumarray[0] + relativeOff;
	      } // console.log('[获取实际页数] ', '要比较的3个页数：',arguments, '，得到的差值:', relativePageNumarray);


	      if (isNaN(relativePageNumarray[0]) || isNaN(relativePageNumarray[1])) {
	        return '';
	      }

	      var realPageSiteMatch = false;
	      relativeOff = relativePageNumarray[1] - relativePageNumarray[0]; // 上一页与下一页差值为1，并最大数值不超过10000(一般论坛也不会超过这么多页……)

	      if (relativeOff === 1 && relativePageNumarray[1] < 10000) {
	        realPageSiteMatch = true;
	      } // 上一页与下一页差值不为1，但上一页与下一页差值能被上一页与下一面所整除的，有规律的页面


	      if (!realPageSiteMatch && relativeOff !== 1) {
	        if (relativePageNumarray[1] % relativeOff === 0 && relativePageNumarray[0] % relativeOff === 0) {
	          realPageSiteMatch = true;
	        }
	      }

	      if (!realPageSiteMatch) {
	        // 不满足以上条件，再根据地址特征来匹配
	        var sitePattern;

	        for (var i = 0, length = REALPAGE_SITE_PATTERN.length; i < length; i++) {
	          sitePattern = REALPAGE_SITE_PATTERN[i];

	          if (currentUrl.toLocaleLowerCase().indexOf(sitePattern) >= 0) {
	            realPageSiteMatch = true;
	            break;
	          }
	        }
	      }

	      var relativePageStr;

	      if (realPageSiteMatch) {
	        // 如果匹配就显示实际网页信息
	        if (userLang === 'zh_CN') {
	          if (relativePageNumarray[1] - relativePageNumarray[0] > 1) {
	            // 一般是搜索引擎的第xx - xx项……
	            relativePageStr = ' [ 实际：第 <span style="' + sep_icons.text_span_style + '">' + relativePageNumarray[0] + ' - ' + relativePageNumarray[1] + '</span> 项 ]';
	          } else if (relativePageNumarray[1] - relativePageNumarray[0] === 1) {
	            // 一般的翻页数，差值应该是1
	            relativePageStr = ' [ 实际：第 <span style="' + sep_icons.text_span_style + '">' + relativePageNumarray[0] + '</span> 页 ]';
	          } else if ((relativePageNumarray[0] === 0 && relativePageNumarray[1]) === 0) {
	            // 找不到的话……
	            relativePageStr = ' [ <span style="' + sep_icons.text_span_style + '">实际网页结束</span> ]';
	          }
	        } else {
	          if (relativePageNumarray[1] - relativePageNumarray[0] > 1) {
	            // 一般是搜索引擎的第xx - xx项……
	            relativePageStr = ' [ Actual elements/pages: <span style="' + sep_icons.text_span_style + '">' + relativePageNumarray[0] + ' - ' + relativePageNumarray[1] + '</span> ]';
	          } else if (relativePageNumarray[1] - relativePageNumarray[0] === 1) {
	            // 一般的翻页数，差值应该是1
	            relativePageStr = ' [ Actual elements/pages: <span style="' + sep_icons.text_span_style + '">' + relativePageNumarray[0] + '</span> ]';
	          } else if ((relativePageNumarray[0] === 0 && relativePageNumarray[1]) === 0) {
	            // 找不到的话……
	            relativePageStr = ' [ <span style="' + sep_icons.text_span_style + '">Actual elements ends</span> ]';
	          }
	        }
	      } else {
	        relativePageStr = '';
	      }

	      return relativePageStr || '';
	    }
	  }).catch(function (err) {
	    console.log(err);
	  }); // ------------------------下面的不要管他-----------------
	  /// ////////////////////////////////////////////////////////////////
	  // 变量

	  var isHashchangeSite = false;
	  var hashchangeTimer = 0; // ====================  libs  ==============================

	  /**
	   *
	   * @param {IHrefIncObject} obj obj
	   * @param {Document=} doc document
	   * @param {Window=} win window
	   * @param {string=} cplink cplink
	   * @returns {string} next link
	   * @description 地址栏递增处理函数
	   */

	  function hrefInc(obj, doc, win, cplink) {
	    var _cplink = cplink;

	    function getHref(href) {
	      var mFails = obj.mFails;
	      if (!mFails) return href;
	      var str;

	      if (typeof mFails === 'string') {
	        str = mFails;
	      } else {
	        var array = [];

	        for (var i = 0, ii = mFails.length; i < ii; i++) {
	          var fx = mFails[i];
	          if (!fx) continue;

	          if (typeof fx !== 'string' || fx.indexOf('re;') === 0) {
	            var fxre = typeof fx === 'string' ? toRE(fx.slice(3)) : fx;
	            var mValue = href.match(fxre);
	            if (!mValue) return href;
	            array.push(mValue);
	          } else {
	            array.push(fx);
	          }
	        }

	        str = array.join('');
	      }

	      return str;
	    }

	    var sa = obj.startAfter;
	    var index;

	    if (typeof sa === 'string') {
	      if (sa[0] == '#') {
	        _cplink = doc.location.href;
	      }

	      index = _cplink.indexOf(sa);

	      if (index == -1) {
	        _cplink = getHref(_cplink);
	        index = _cplink.indexOf(sa);
	        if (index == -1) return;
	      }
	    } else {
	      var tsa = _cplink.match(sa);

	      if (!tsa) {
	        _cplink = getHref(_cplink);
	        sa = (_cplink.match(sa) || [])[0];
	        if (!sa) return;
	        index = _cplink.indexOf(sa);
	        if (index == -1) return;
	      } else {
	        sa = tsa[0];
	        index = _cplink.indexOf(sa);
	      }
	    }

	    index += sa.length;
	    var max = obj.max === undefined ? 9999 : obj.max;
	    var min = obj.min === undefined ? 1 : obj.min;

	    var aStr = _cplink.slice(0, index);

	    var bStr = _cplink.slice(index);

	    var nbStr = bStr.replace(/^(\d+)(.*)$/, function (a, b, c) {
	      b = Number(b) + obj.inc;
	      if (b >= max || b < min) return a;
	      return b + c;
	    });

	    if (nbStr !== bStr) {
	      var ilresult;

	      try {
	        ilresult = obj.isLast(doc, unsafeWindow, _cplink);
	      } catch (e) {}

	      if (ilresult) return;
	      return aStr + nbStr;
	    }
	  } // ====================  functions  ==============================


	  function handleLazyImgSrc(rule, doc) {
	    var imgAttrs = rule.split('|');
	    imgAttrs.forEach(function (attr) {
	      attr = attr.trim();
	      [].forEach.call(doc.querySelectorAll('img[' + attr + ']'), function (img) {
	        var newSrc = img.getAttribute(attr);

	        if (newSrc && newSrc != img.src) {
	          img.setAttribute('src', newSrc);
	          img.removeAttribute(attr);
	        }
	      });
	    });
	  }
	  /**
	   *
	   * @param {HTMLDocument} doc Document Fragment
	   * @param {String} scriptFilter Regex string
	   * @description Remove scripts node from doc
	   * @returns {void}
	   */


	  function removeScripts(doc, scriptFilter) {
	    var scripts = getAllElements('css;script', doc);
	    var regFilter;

	    if (scriptFilter) {
	      regFilter = toRE(scriptFilter);
	    }
	    /** @type {HTMLScriptElement} */


	    var scripts_x;

	    for (var i = scripts.length - 1; i >= 0; i--) {
	      //@ts-ignore
	      scripts_x = scripts[i];
	      var iremove = false;

	      if (regFilter) {
	        if (scripts_x.hasOwnProperty('src')) {
	          if (!regFilter.test(scripts_x.src)) {
	            iremove = true;
	          }
	        }

	        if (scripts_x.text) {
	          if (!regFilter.test(scripts_x.text)) {
	            iremove = true;
	          }
	        }

	        if (iremove) {
	          scripts_x.parentNode.removeChild(scripts_x);
	        }
	      } else {
	        scripts_x.parentNode.removeChild(scripts_x);
	      }
	    }
	  }
	  /**
	   *
	   * @param {string} str str
	   * @returns {HTMLDocument} document
	   */


	  function createDocumentByString(str) {
	    // string转为DOM
	    if (!str) {
	      logger.error("[Super-preloader]", 'No string found to be converted to DOM');
	      return;
	    }

	    if (document.documentElement.nodeName != 'HTML') {
	      return new DOMParser().parseFromString(str, 'application/xhtml+xml');
	    }
	    /**@type {HTMLDocument} */


	    var doc;

	    try {
	      // firefox and chrome 30+，Opera 12 会报错
	      doc = new DOMParser().parseFromString(str, 'text/html');
	    } catch (ex) {}

	    if (doc) {
	      return doc;
	    }

	    if (document.implementation.createHTMLDocument) {
	      doc = document.implementation.createHTMLDocument('superPreloader');
	    } else {
	      try {
	        //@ts-ignore
	        doc = document.cloneNode(false);
	        doc.appendChild(doc.importNode(document.documentElement, false));
	        doc.documentElement.appendChild(doc.createElement('head'));
	        doc.documentElement.appendChild(doc.createElement('body'));
	      } catch (e) {}
	    }

	    if (!doc) return;
	    var range = document.createRange();
	    range.selectNodeContents(document.body);
	    var fragment = range.createContextualFragment(str);
	    doc.body.appendChild(fragment);
	    var headChildNames = {
	      TITLE: true,
	      META: true,
	      LINK: true,
	      STYLE: true,
	      BASE: true
	    };
	    var child;
	    var body = doc.body;
	    var bchilds = body.childNodes;

	    for (var i = bchilds.length - 1; i >= 0; i--) {
	      // 移除head的子元素
	      child = bchilds[i];
	      if (headChildNames[child.nodeName]) body.removeChild(child);
	    }

	    return doc;
	  }
	  /**
	   *
	   * @param {string|HTMLElement} href href
	   * @returns {string} href
	   * @description 从相对路径的a.href获取完全的href值.
	   */


	  function getFullHref(href) {
	    // getAttribute may give relative url but href always give full url
	    if (typeof href !== 'string') href = href.getAttribute('href');
	    /** @type {HTMLAnchorElement} */
	    // @ts-ignore

	    var a = getFullHref.a;

	    if (!a) {
	      //@ts-ignore
	      getFullHref.a = a = document.createElement('a');
	    }

	    a.href = href;
	    return a.href;
	  }

	  function getFloatWindowWith() {
	    var el = document.getElementById('sp-fw-container');
	    /** @type {HTMLElement} */
	    //@ts-ignore

	    var elc = el.cloneNode(true);
	    elc.id = `${el.id}`;
	    elc.style.visibility = 'hidden'; //@ts-ignore

	    elc.querySelector('#sp-fw-content').style.display = 'block';
	    document.body.appendChild(elc); //@ts-ignore

	    var width = elc.querySelector('#sp-fw-content').offsetWidth;
	    elc.remove();
	    return width;
	  }
	  /**
	   * Get next page link from an element
	   * @param {string | HTMLElement} elem nextlink element
	   * @returns {String} link of next page
	   */


	  function elemToHref(elem) {
	    if (!elem) return undefined;

	    if (typeof elem === 'string' || elem.hasAttribute('href')) {
	      return getFullHref(elem);
	    } else {
	      // eslint-disable-next-line no-script-url
	      return 'javascript:void(0);'; // pseudo href
	    }
	  }
	})();

})();
