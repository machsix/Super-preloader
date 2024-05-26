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
// @version      7.0.16
// @license      GPL-3.0
// @update       2024/5/26
// @homepageURL  https://github.com/machsix/Super-preloader
// @downloadURL  https://machsix.github.io/Super-preloader/Super_preloaderPlus_one_New.user.js
// @updateURL    https://machsix.github.io/Super-preloader/Super_preloaderPlus_one_New.user.js
// @supportURL   https://github.com/machsix/Super-preloader/issue
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

	var check = function (it) {
	  return it && it.Math === Math && it;
	};

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global$l =
	  // eslint-disable-next-line es/no-global-this -- safe
	  check(typeof globalThis == 'object' && globalThis) ||
	  check(typeof window == 'object' && window) ||
	  // eslint-disable-next-line no-restricted-globals -- safe
	  check(typeof self == 'object' && self) ||
	  check(typeof global$l == 'object' && global$l) ||
	  check(typeof window == 'object' && window) ||
	  // eslint-disable-next-line no-new-func -- fallback
	  (function () { return this; })() || Function('return this')();

	var fails$r = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	var fails$q = fails$r;

	var functionBindNative = !fails$q(function () {
	  // eslint-disable-next-line es/no-function-prototype-bind -- safe
	  var test = (function () { /* empty */ }).bind();
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return typeof test != 'function' || test.hasOwnProperty('prototype');
	});

	var NATIVE_BIND$3 = functionBindNative;

	var FunctionPrototype$3 = Function.prototype;
	var apply$8 = FunctionPrototype$3.apply;
	var call$k = FunctionPrototype$3.call;

	// eslint-disable-next-line es/no-reflect -- safe
	var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$3 ? call$k.bind(apply$8) : function () {
	  return call$k.apply(apply$8, arguments);
	});

	var NATIVE_BIND$2 = functionBindNative;

	var FunctionPrototype$2 = Function.prototype;
	var call$j = FunctionPrototype$2.call;
	var uncurryThisWithBind = NATIVE_BIND$2 && FunctionPrototype$2.bind.bind(call$j, call$j);

	var functionUncurryThis = NATIVE_BIND$2 ? uncurryThisWithBind : function (fn) {
	  return function () {
	    return call$j.apply(fn, arguments);
	  };
	};

	var uncurryThis$u = functionUncurryThis;

	var toString$f = uncurryThis$u({}.toString);
	var stringSlice$2 = uncurryThis$u(''.slice);

	var classofRaw$2 = function (it) {
	  return stringSlice$2(toString$f(it), 8, -1);
	};

	var classofRaw$1 = classofRaw$2;
	var uncurryThis$t = functionUncurryThis;

	var functionUncurryThisClause = function (fn) {
	  // Nashorn bug:
	  //   https://github.com/zloirock/core-js/issues/1128
	  //   https://github.com/zloirock/core-js/issues/1130
	  if (classofRaw$1(fn) === 'Function') return uncurryThis$t(fn);
	};

	// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
	var documentAll = typeof document == 'object' && document.all;

	// `IsCallable` abstract operation
	// https://tc39.es/ecma262/#sec-iscallable
	// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
	var isCallable$j = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
	  return typeof argument == 'function' || argument === documentAll;
	} : function (argument) {
	  return typeof argument == 'function';
	};

	var objectGetOwnPropertyDescriptor = {};

	var fails$p = fails$r;

	// Detect IE8's incomplete defineProperty implementation
	var descriptors = !fails$p(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
	});

	var NATIVE_BIND$1 = functionBindNative;

	var call$i = Function.prototype.call;

	var functionCall = NATIVE_BIND$1 ? call$i.bind(call$i) : function () {
	  return call$i.apply(call$i, arguments);
	};

	var objectPropertyIsEnumerable = {};

	var $propertyIsEnumerable$2 = {}.propertyIsEnumerable;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getOwnPropertyDescriptor$3 = Object.getOwnPropertyDescriptor;

	// Nashorn ~ JDK8 bug
	var NASHORN_BUG = getOwnPropertyDescriptor$3 && !$propertyIsEnumerable$2.call({ 1: 2 }, 1);

	// `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
	objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor$3(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : $propertyIsEnumerable$2;

	var createPropertyDescriptor$7 = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var uncurryThis$s = functionUncurryThis;
	var fails$o = fails$r;
	var classof$c = classofRaw$2;

	var $Object$4 = Object;
	var split = uncurryThis$s(''.split);

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var indexedObject = fails$o(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return !$Object$4('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classof$c(it) === 'String' ? split(it, '') : $Object$4(it);
	} : $Object$4;

	// we can't use just `it == null` since of `document.all` special case
	// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
	var isNullOrUndefined$5 = function (it) {
	  return it === null || it === undefined;
	};

	var isNullOrUndefined$4 = isNullOrUndefined$5;

	var $TypeError$g = TypeError;

	// `RequireObjectCoercible` abstract operation
	// https://tc39.es/ecma262/#sec-requireobjectcoercible
	var requireObjectCoercible$9 = function (it) {
	  if (isNullOrUndefined$4(it)) throw new $TypeError$g("Can't call method on " + it);
	  return it;
	};

	// toObject with fallback for non-array-like ES3 strings
	var IndexedObject$3 = indexedObject;
	var requireObjectCoercible$8 = requireObjectCoercible$9;

	var toIndexedObject$b = function (it) {
	  return IndexedObject$3(requireObjectCoercible$8(it));
	};

	var isCallable$i = isCallable$j;

	var isObject$k = function (it) {
	  return typeof it == 'object' ? it !== null : isCallable$i(it);
	};

	var path$h = {};

	var path$g = path$h;
	var global$k = global$l;
	var isCallable$h = isCallable$j;

	var aFunction = function (variable) {
	  return isCallable$h(variable) ? variable : undefined;
	};

	var getBuiltIn$e = function (namespace, method) {
	  return arguments.length < 2 ? aFunction(path$g[namespace]) || aFunction(global$k[namespace])
	    : path$g[namespace] && path$g[namespace][method] || global$k[namespace] && global$k[namespace][method];
	};

	var uncurryThis$r = functionUncurryThis;

	var objectIsPrototypeOf = uncurryThis$r({}.isPrototypeOf);

	var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

	var global$j = global$l;
	var userAgent$3 = engineUserAgent;

	var process$3 = global$j.process;
	var Deno$1 = global$j.Deno;
	var versions = process$3 && process$3.versions || Deno$1 && Deno$1.version;
	var v8 = versions && versions.v8;
	var match, version$1;

	if (v8) {
	  match = v8.split('.');
	  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
	  // but their correct versions are not interesting for us
	  version$1 = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
	}

	// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
	// so check `userAgent` even if `.v8` exists, but 0
	if (!version$1 && userAgent$3) {
	  match = userAgent$3.match(/Edge\/(\d+)/);
	  if (!match || match[1] >= 74) {
	    match = userAgent$3.match(/Chrome\/(\d+)/);
	    if (match) version$1 = +match[1];
	  }
	}

	var engineV8Version = version$1;

	/* eslint-disable es/no-symbol -- required for testing */
	var V8_VERSION$3 = engineV8Version;
	var fails$n = fails$r;
	var global$i = global$l;

	var $String$5 = global$i.String;

	// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
	var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$n(function () {
	  var symbol = Symbol('symbol detection');
	  // Chrome 38 Symbol has incorrect toString conversion
	  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
	  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
	  // of course, fail.
	  return !$String$5(symbol) || !(Object(symbol) instanceof Symbol) ||
	    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
	    !Symbol.sham && V8_VERSION$3 && V8_VERSION$3 < 41;
	});

	/* eslint-disable es/no-symbol -- required for testing */
	var NATIVE_SYMBOL$5 = symbolConstructorDetection;

	var useSymbolAsUid = NATIVE_SYMBOL$5
	  && !Symbol.sham
	  && typeof Symbol.iterator == 'symbol';

	var getBuiltIn$d = getBuiltIn$e;
	var isCallable$g = isCallable$j;
	var isPrototypeOf$h = objectIsPrototypeOf;
	var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

	var $Object$3 = Object;

	var isSymbol$a = USE_SYMBOL_AS_UID$1 ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  var $Symbol = getBuiltIn$d('Symbol');
	  return isCallable$g($Symbol) && isPrototypeOf$h($Symbol.prototype, $Object$3(it));
	};

	var $String$4 = String;

	var tryToString$5 = function (argument) {
	  try {
	    return $String$4(argument);
	  } catch (error) {
	    return 'Object';
	  }
	};

	var isCallable$f = isCallable$j;
	var tryToString$4 = tryToString$5;

	var $TypeError$f = TypeError;

	// `Assert: IsCallable(argument) is true`
	var aCallable$c = function (argument) {
	  if (isCallable$f(argument)) return argument;
	  throw new $TypeError$f(tryToString$4(argument) + ' is not a function');
	};

	var aCallable$b = aCallable$c;
	var isNullOrUndefined$3 = isNullOrUndefined$5;

	// `GetMethod` abstract operation
	// https://tc39.es/ecma262/#sec-getmethod
	var getMethod$3 = function (V, P) {
	  var func = V[P];
	  return isNullOrUndefined$3(func) ? undefined : aCallable$b(func);
	};

	var call$h = functionCall;
	var isCallable$e = isCallable$j;
	var isObject$j = isObject$k;

	var $TypeError$e = TypeError;

	// `OrdinaryToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-ordinarytoprimitive
	var ordinaryToPrimitive$1 = function (input, pref) {
	  var fn, val;
	  if (pref === 'string' && isCallable$e(fn = input.toString) && !isObject$j(val = call$h(fn, input))) return val;
	  if (isCallable$e(fn = input.valueOf) && !isObject$j(val = call$h(fn, input))) return val;
	  if (pref !== 'string' && isCallable$e(fn = input.toString) && !isObject$j(val = call$h(fn, input))) return val;
	  throw new $TypeError$e("Can't convert object to primitive value");
	};

	var sharedStore = {exports: {}};

	var isPure = true;

	var global$h = global$l;

	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var defineProperty$e = Object.defineProperty;

	var defineGlobalProperty$1 = function (key, value) {
	  try {
	    defineProperty$e(global$h, key, { value: value, configurable: true, writable: true });
	  } catch (error) {
	    global$h[key] = value;
	  } return value;
	};

	var globalThis$1 = global$l;
	var defineGlobalProperty = defineGlobalProperty$1;

	var SHARED = '__core-js_shared__';
	var store$3 = sharedStore.exports = globalThis$1[SHARED] || defineGlobalProperty(SHARED, {});

	(store$3.versions || (store$3.versions = [])).push({
	  version: '3.37.0',
	  mode: 'pure' ,
	  copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
	  license: 'https://github.com/zloirock/core-js/blob/v3.37.0/LICENSE',
	  source: 'https://github.com/zloirock/core-js'
	});

	var sharedStoreExports = sharedStore.exports;

	var store$2 = sharedStoreExports;

	var shared$7 = function (key, value) {
	  return store$2[key] || (store$2[key] = value || {});
	};

	var requireObjectCoercible$7 = requireObjectCoercible$9;

	var $Object$2 = Object;

	// `ToObject` abstract operation
	// https://tc39.es/ecma262/#sec-toobject
	var toObject$b = function (argument) {
	  return $Object$2(requireObjectCoercible$7(argument));
	};

	var uncurryThis$q = functionUncurryThis;
	var toObject$a = toObject$b;

	var hasOwnProperty$a = uncurryThis$q({}.hasOwnProperty);

	// `HasOwnProperty` abstract operation
	// https://tc39.es/ecma262/#sec-hasownproperty
	// eslint-disable-next-line es/no-object-hasown -- safe
	var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
	  return hasOwnProperty$a(toObject$a(it), key);
	};

	var uncurryThis$p = functionUncurryThis;

	var id = 0;
	var postfix = Math.random();
	var toString$e = uncurryThis$p(1.0.toString);

	var uid$3 = function (key) {
	  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$e(++id + postfix, 36);
	};

	var global$g = global$l;
	var shared$6 = shared$7;
	var hasOwn$e = hasOwnProperty_1;
	var uid$2 = uid$3;
	var NATIVE_SYMBOL$4 = symbolConstructorDetection;
	var USE_SYMBOL_AS_UID = useSymbolAsUid;

	var Symbol$9 = global$g.Symbol;
	var WellKnownSymbolsStore$2 = shared$6('wks');
	var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$9['for'] || Symbol$9 : Symbol$9 && Symbol$9.withoutSetter || uid$2;

	var wellKnownSymbol$o = function (name) {
	  if (!hasOwn$e(WellKnownSymbolsStore$2, name)) {
	    WellKnownSymbolsStore$2[name] = NATIVE_SYMBOL$4 && hasOwn$e(Symbol$9, name)
	      ? Symbol$9[name]
	      : createWellKnownSymbol('Symbol.' + name);
	  } return WellKnownSymbolsStore$2[name];
	};

	var call$g = functionCall;
	var isObject$i = isObject$k;
	var isSymbol$9 = isSymbol$a;
	var getMethod$2 = getMethod$3;
	var ordinaryToPrimitive = ordinaryToPrimitive$1;
	var wellKnownSymbol$n = wellKnownSymbol$o;

	var $TypeError$d = TypeError;
	var TO_PRIMITIVE = wellKnownSymbol$n('toPrimitive');

	// `ToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-toprimitive
	var toPrimitive$8 = function (input, pref) {
	  if (!isObject$i(input) || isSymbol$9(input)) return input;
	  var exoticToPrim = getMethod$2(input, TO_PRIMITIVE);
	  var result;
	  if (exoticToPrim) {
	    if (pref === undefined) pref = 'default';
	    result = call$g(exoticToPrim, input, pref);
	    if (!isObject$i(result) || isSymbol$9(result)) return result;
	    throw new $TypeError$d("Can't convert object to primitive value");
	  }
	  if (pref === undefined) pref = 'number';
	  return ordinaryToPrimitive(input, pref);
	};

	var toPrimitive$7 = toPrimitive$8;
	var isSymbol$8 = isSymbol$a;

	// `ToPropertyKey` abstract operation
	// https://tc39.es/ecma262/#sec-topropertykey
	var toPropertyKey$4 = function (argument) {
	  var key = toPrimitive$7(argument, 'string');
	  return isSymbol$8(key) ? key : key + '';
	};

	var global$f = global$l;
	var isObject$h = isObject$k;

	var document$3 = global$f.document;
	// typeof document.createElement is 'object' in old IE
	var EXISTS$1 = isObject$h(document$3) && isObject$h(document$3.createElement);

	var documentCreateElement$1 = function (it) {
	  return EXISTS$1 ? document$3.createElement(it) : {};
	};

	var DESCRIPTORS$g = descriptors;
	var fails$m = fails$r;
	var createElement$1 = documentCreateElement$1;

	// Thanks to IE8 for its funny defineProperty
	var ie8DomDefine = !DESCRIPTORS$g && !fails$m(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty(createElement$1('div'), 'a', {
	    get: function () { return 7; }
	  }).a !== 7;
	});

	var DESCRIPTORS$f = descriptors;
	var call$f = functionCall;
	var propertyIsEnumerableModule$2 = objectPropertyIsEnumerable;
	var createPropertyDescriptor$6 = createPropertyDescriptor$7;
	var toIndexedObject$a = toIndexedObject$b;
	var toPropertyKey$3 = toPropertyKey$4;
	var hasOwn$d = hasOwnProperty_1;
	var IE8_DOM_DEFINE$1 = ie8DomDefine;

	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
	objectGetOwnPropertyDescriptor.f = DESCRIPTORS$f ? $getOwnPropertyDescriptor$2 : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject$a(O);
	  P = toPropertyKey$3(P);
	  if (IE8_DOM_DEFINE$1) try {
	    return $getOwnPropertyDescriptor$2(O, P);
	  } catch (error) { /* empty */ }
	  if (hasOwn$d(O, P)) return createPropertyDescriptor$6(!call$f(propertyIsEnumerableModule$2.f, O, P), O[P]);
	};

	var fails$l = fails$r;
	var isCallable$d = isCallable$j;

	var replacement = /#|\.prototype\./;

	var isForced$2 = function (feature, detection) {
	  var value = data[normalize(feature)];
	  return value === POLYFILL ? true
	    : value === NATIVE ? false
	    : isCallable$d(detection) ? fails$l(detection)
	    : !!detection;
	};

	var normalize = isForced$2.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};

	var data = isForced$2.data = {};
	var NATIVE = isForced$2.NATIVE = 'N';
	var POLYFILL = isForced$2.POLYFILL = 'P';

	var isForced_1 = isForced$2;

	var uncurryThis$o = functionUncurryThisClause;
	var aCallable$a = aCallable$c;
	var NATIVE_BIND = functionBindNative;

	var bind$7 = uncurryThis$o(uncurryThis$o.bind);

	// optional / simple context binding
	var functionBindContext = function (fn, that) {
	  aCallable$a(fn);
	  return that === undefined ? fn : NATIVE_BIND ? bind$7(fn, that) : function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	var objectDefineProperty = {};

	var DESCRIPTORS$e = descriptors;
	var fails$k = fails$r;

	// V8 ~ Chrome 36-
	// https://bugs.chromium.org/p/v8/issues/detail?id=3334
	var v8PrototypeDefineBug = DESCRIPTORS$e && fails$k(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
	    value: 42,
	    writable: false
	  }).prototype !== 42;
	});

	var isObject$g = isObject$k;

	var $String$3 = String;
	var $TypeError$c = TypeError;

	// `Assert: Type(argument) is Object`
	var anObject$b = function (argument) {
	  if (isObject$g(argument)) return argument;
	  throw new $TypeError$c($String$3(argument) + ' is not an object');
	};

	var DESCRIPTORS$d = descriptors;
	var IE8_DOM_DEFINE = ie8DomDefine;
	var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
	var anObject$a = anObject$b;
	var toPropertyKey$2 = toPropertyKey$4;

	var $TypeError$b = TypeError;
	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var $defineProperty$1 = Object.defineProperty;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
	var ENUMERABLE = 'enumerable';
	var CONFIGURABLE$1 = 'configurable';
	var WRITABLE = 'writable';

	// `Object.defineProperty` method
	// https://tc39.es/ecma262/#sec-object.defineproperty
	objectDefineProperty.f = DESCRIPTORS$d ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
	  anObject$a(O);
	  P = toPropertyKey$2(P);
	  anObject$a(Attributes);
	  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
	    var current = $getOwnPropertyDescriptor$1(O, P);
	    if (current && current[WRITABLE]) {
	      O[P] = Attributes.value;
	      Attributes = {
	        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
	        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
	        writable: false
	      };
	    }
	  } return $defineProperty$1(O, P, Attributes);
	} : $defineProperty$1 : function defineProperty(O, P, Attributes) {
	  anObject$a(O);
	  P = toPropertyKey$2(P);
	  anObject$a(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return $defineProperty$1(O, P, Attributes);
	  } catch (error) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError$b('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var DESCRIPTORS$c = descriptors;
	var definePropertyModule$4 = objectDefineProperty;
	var createPropertyDescriptor$5 = createPropertyDescriptor$7;

	var createNonEnumerableProperty$7 = DESCRIPTORS$c ? function (object, key, value) {
	  return definePropertyModule$4.f(object, key, createPropertyDescriptor$5(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var global$e = global$l;
	var apply$7 = functionApply;
	var uncurryThis$n = functionUncurryThisClause;
	var isCallable$c = isCallable$j;
	var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
	var isForced$1 = isForced_1;
	var path$f = path$h;
	var bind$6 = functionBindContext;
	var createNonEnumerableProperty$6 = createNonEnumerableProperty$7;
	var hasOwn$c = hasOwnProperty_1;
	// add debugging info


	var wrapConstructor = function (NativeConstructor) {
	  var Wrapper = function (a, b, c) {
	    if (this instanceof Wrapper) {
	      switch (arguments.length) {
	        case 0: return new NativeConstructor();
	        case 1: return new NativeConstructor(a);
	        case 2: return new NativeConstructor(a, b);
	      } return new NativeConstructor(a, b, c);
	    } return apply$7(NativeConstructor, this, arguments);
	  };
	  Wrapper.prototype = NativeConstructor.prototype;
	  return Wrapper;
	};

	/*
	  options.target         - name of the target object
	  options.global         - target is the global object
	  options.stat           - export as static methods of target
	  options.proto          - export as prototype methods of target
	  options.real           - real prototype method for the `pure` version
	  options.forced         - export even if the native feature is available
	  options.bind           - bind methods to the target, required for the `pure` version
	  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
	  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
	  options.sham           - add a flag to not completely full polyfills
	  options.enumerable     - export as enumerable property
	  options.dontCallGetSet - prevent calling a getter on target
	  options.name           - the .name of the function if it does not match the key
	*/
	var _export = function (options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var PROTO = options.proto;

	  var nativeSource = GLOBAL ? global$e : STATIC ? global$e[TARGET] : global$e[TARGET] && global$e[TARGET].prototype;

	  var target = GLOBAL ? path$f : path$f[TARGET] || createNonEnumerableProperty$6(path$f, TARGET, {})[TARGET];
	  var targetPrototype = target.prototype;

	  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
	  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

	  for (key in source) {
	    FORCED = isForced$1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
	    // contains in native
	    USE_NATIVE = !FORCED && nativeSource && hasOwn$c(nativeSource, key);

	    targetProperty = target[key];

	    if (USE_NATIVE) if (options.dontCallGetSet) {
	      descriptor = getOwnPropertyDescriptor$2(nativeSource, key);
	      nativeProperty = descriptor && descriptor.value;
	    } else nativeProperty = nativeSource[key];

	    // export native or implementation
	    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

	    if (!FORCED && !PROTO && typeof targetProperty == typeof sourceProperty) continue;

	    // bind methods to global for calling from export context
	    if (options.bind && USE_NATIVE) resultProperty = bind$6(sourceProperty, global$e);
	    // wrap global constructors for prevent changes in this version
	    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
	    // make static versions for prototype methods
	    else if (PROTO && isCallable$c(sourceProperty)) resultProperty = uncurryThis$n(sourceProperty);
	    // default case
	    else resultProperty = sourceProperty;

	    // add a flag to not completely full polyfills
	    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
	      createNonEnumerableProperty$6(resultProperty, 'sham', true);
	    }

	    createNonEnumerableProperty$6(target, key, resultProperty);

	    if (PROTO) {
	      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
	      if (!hasOwn$c(path$f, VIRTUAL_PROTOTYPE)) {
	        createNonEnumerableProperty$6(path$f, VIRTUAL_PROTOTYPE, {});
	      }
	      // export virtual prototype methods
	      createNonEnumerableProperty$6(path$f[VIRTUAL_PROTOTYPE], key, sourceProperty);
	      // export real prototype methods
	      if (options.real && targetPrototype && (FORCED || !targetPrototype[key])) {
	        createNonEnumerableProperty$6(targetPrototype, key, sourceProperty);
	      }
	    }
	  }
	};

	var shared$5 = shared$7;
	var uid$1 = uid$3;

	var keys$4 = shared$5('keys');

	var sharedKey$4 = function (key) {
	  return keys$4[key] || (keys$4[key] = uid$1(key));
	};

	var fails$j = fails$r;

	var correctPrototypeGetter = !fails$j(function () {
	  function F() { /* empty */ }
	  F.prototype.constructor = null;
	  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
	  return Object.getPrototypeOf(new F()) !== F.prototype;
	});

	var hasOwn$b = hasOwnProperty_1;
	var isCallable$b = isCallable$j;
	var toObject$9 = toObject$b;
	var sharedKey$3 = sharedKey$4;
	var CORRECT_PROTOTYPE_GETTER$1 = correctPrototypeGetter;

	var IE_PROTO$1 = sharedKey$3('IE_PROTO');
	var $Object$1 = Object;
	var ObjectPrototype$1 = $Object$1.prototype;

	// `Object.getPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.getprototypeof
	// eslint-disable-next-line es/no-object-getprototypeof -- safe
	var objectGetPrototypeOf$1 = CORRECT_PROTOTYPE_GETTER$1 ? $Object$1.getPrototypeOf : function (O) {
	  var object = toObject$9(O);
	  if (hasOwn$b(object, IE_PROTO$1)) return object[IE_PROTO$1];
	  var constructor = object.constructor;
	  if (isCallable$b(constructor) && object instanceof constructor) {
	    return constructor.prototype;
	  } return object instanceof $Object$1 ? ObjectPrototype$1 : null;
	};

	var uncurryThis$m = functionUncurryThis;
	var aCallable$9 = aCallable$c;

	var functionUncurryThisAccessor = function (object, key, method) {
	  try {
	    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	    return uncurryThis$m(aCallable$9(Object.getOwnPropertyDescriptor(object, key)[method]));
	  } catch (error) { /* empty */ }
	};

	var isObject$f = isObject$k;

	var isPossiblePrototype$1 = function (argument) {
	  return isObject$f(argument) || argument === null;
	};

	var isPossiblePrototype = isPossiblePrototype$1;

	var $String$2 = String;
	var $TypeError$a = TypeError;

	var aPossiblePrototype$1 = function (argument) {
	  if (isPossiblePrototype(argument)) return argument;
	  throw new $TypeError$a("Can't set " + $String$2(argument) + ' as a prototype');
	};

	/* eslint-disable no-proto -- safe */
	var uncurryThisAccessor = functionUncurryThisAccessor;
	var isObject$e = isObject$k;
	var requireObjectCoercible$6 = requireObjectCoercible$9;
	var aPossiblePrototype = aPossiblePrototype$1;

	// `Object.setPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.setprototypeof
	// Works with __proto__ only. Old v8 can't work with null proto objects.
	// eslint-disable-next-line es/no-object-setprototypeof -- safe
	var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
	  var CORRECT_SETTER = false;
	  var test = {};
	  var setter;
	  try {
	    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
	    setter(test, []);
	    CORRECT_SETTER = test instanceof Array;
	  } catch (error) { /* empty */ }
	  return function setPrototypeOf(O, proto) {
	    requireObjectCoercible$6(O);
	    aPossiblePrototype(proto);
	    if (!isObject$e(O)) return O;
	    if (CORRECT_SETTER) setter(O, proto);
	    else O.__proto__ = proto;
	    return O;
	  };
	}() : undefined);

	var objectGetOwnPropertyNames = {};

	var ceil$1 = Math.ceil;
	var floor = Math.floor;

	// `Math.trunc` method
	// https://tc39.es/ecma262/#sec-math.trunc
	// eslint-disable-next-line es/no-math-trunc -- safe
	var mathTrunc = Math.trunc || function trunc(x) {
	  var n = +x;
	  return (n > 0 ? floor : ceil$1)(n);
	};

	var trunc = mathTrunc;

	// `ToIntegerOrInfinity` abstract operation
	// https://tc39.es/ecma262/#sec-tointegerorinfinity
	var toIntegerOrInfinity$5 = function (argument) {
	  var number = +argument;
	  // eslint-disable-next-line no-self-compare -- NaN check
	  return number !== number || number === 0 ? 0 : trunc(number);
	};

	var toIntegerOrInfinity$4 = toIntegerOrInfinity$5;

	var max$1 = Math.max;
	var min$3 = Math.min;

	// Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
	var toAbsoluteIndex$2 = function (index, length) {
	  var integer = toIntegerOrInfinity$4(index);
	  return integer < 0 ? max$1(integer + length, 0) : min$3(integer, length);
	};

	var toIntegerOrInfinity$3 = toIntegerOrInfinity$5;

	var min$2 = Math.min;

	// `ToLength` abstract operation
	// https://tc39.es/ecma262/#sec-tolength
	var toLength$3 = function (argument) {
	  var len = toIntegerOrInfinity$3(argument);
	  return len > 0 ? min$2(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};

	var toLength$2 = toLength$3;

	// `LengthOfArrayLike` abstract operation
	// https://tc39.es/ecma262/#sec-lengthofarraylike
	var lengthOfArrayLike$9 = function (obj) {
	  return toLength$2(obj.length);
	};

	var toIndexedObject$9 = toIndexedObject$b;
	var toAbsoluteIndex$1 = toAbsoluteIndex$2;
	var lengthOfArrayLike$8 = lengthOfArrayLike$9;

	// `Array.prototype.{ indexOf, includes }` methods implementation
	var createMethod$6 = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject$9($this);
	    var length = lengthOfArrayLike$8(O);
	    if (length === 0) return !IS_INCLUDES && -1;
	    var index = toAbsoluteIndex$1(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare -- NaN check
	    if (IS_INCLUDES && el !== el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare -- NaN check
	      if (value !== value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) {
	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var arrayIncludes$2 = {
	  // `Array.prototype.includes` method
	  // https://tc39.es/ecma262/#sec-array.prototype.includes
	  includes: createMethod$6(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.es/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod$6(false)
	};

	var hiddenKeys$5 = {};

	var uncurryThis$l = functionUncurryThis;
	var hasOwn$a = hasOwnProperty_1;
	var toIndexedObject$8 = toIndexedObject$b;
	var indexOf$4 = arrayIncludes$2.indexOf;
	var hiddenKeys$4 = hiddenKeys$5;

	var push$b = uncurryThis$l([].push);

	var objectKeysInternal = function (object, names) {
	  var O = toIndexedObject$8(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) !hasOwn$a(hiddenKeys$4, key) && hasOwn$a(O, key) && push$b(result, key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (hasOwn$a(O, key = names[i++])) {
	    ~indexOf$4(result, key) || push$b(result, key);
	  }
	  return result;
	};

	// IE8- don't enum bug keys
	var enumBugKeys$3 = [
	  'constructor',
	  'hasOwnProperty',
	  'isPrototypeOf',
	  'propertyIsEnumerable',
	  'toLocaleString',
	  'toString',
	  'valueOf'
	];

	var internalObjectKeys$1 = objectKeysInternal;
	var enumBugKeys$2 = enumBugKeys$3;

	var hiddenKeys$3 = enumBugKeys$2.concat('length', 'prototype');

	// `Object.getOwnPropertyNames` method
	// https://tc39.es/ecma262/#sec-object.getownpropertynames
	// eslint-disable-next-line es/no-object-getownpropertynames -- safe
	objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return internalObjectKeys$1(O, hiddenKeys$3);
	};

	var objectGetOwnPropertySymbols = {};

	// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
	objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

	var getBuiltIn$c = getBuiltIn$e;
	var uncurryThis$k = functionUncurryThis;
	var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames;
	var getOwnPropertySymbolsModule$3 = objectGetOwnPropertySymbols;
	var anObject$9 = anObject$b;

	var concat$5 = uncurryThis$k([].concat);

	// all object keys, includes non-enumerable and symbols
	var ownKeys$5 = getBuiltIn$c('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = getOwnPropertyNamesModule$1.f(anObject$9(it));
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule$3.f;
	  return getOwnPropertySymbols ? concat$5(keys, getOwnPropertySymbols(it)) : keys;
	};

	var hasOwn$9 = hasOwnProperty_1;
	var ownKeys$4 = ownKeys$5;
	var getOwnPropertyDescriptorModule$2 = objectGetOwnPropertyDescriptor;
	var definePropertyModule$3 = objectDefineProperty;

	var copyConstructorProperties$1 = function (target, source, exceptions) {
	  var keys = ownKeys$4(source);
	  var defineProperty = definePropertyModule$3.f;
	  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$2.f;
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (!hasOwn$9(target, key) && !(exceptions && hasOwn$9(exceptions, key))) {
	      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
	    }
	  }
	};

	var objectDefineProperties = {};

	var internalObjectKeys = objectKeysInternal;
	var enumBugKeys$1 = enumBugKeys$3;

	// `Object.keys` method
	// https://tc39.es/ecma262/#sec-object.keys
	// eslint-disable-next-line es/no-object-keys -- safe
	var objectKeys$4 = Object.keys || function keys(O) {
	  return internalObjectKeys(O, enumBugKeys$1);
	};

	var DESCRIPTORS$b = descriptors;
	var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
	var definePropertyModule$2 = objectDefineProperty;
	var anObject$8 = anObject$b;
	var toIndexedObject$7 = toIndexedObject$b;
	var objectKeys$3 = objectKeys$4;

	// `Object.defineProperties` method
	// https://tc39.es/ecma262/#sec-object.defineproperties
	// eslint-disable-next-line es/no-object-defineproperties -- safe
	objectDefineProperties.f = DESCRIPTORS$b && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject$8(O);
	  var props = toIndexedObject$7(Properties);
	  var keys = objectKeys$3(Properties);
	  var length = keys.length;
	  var index = 0;
	  var key;
	  while (length > index) definePropertyModule$2.f(O, key = keys[index++], props[key]);
	  return O;
	};

	var getBuiltIn$b = getBuiltIn$e;

	var html$2 = getBuiltIn$b('document', 'documentElement');

	/* global ActiveXObject -- old IE, WSH */
	var anObject$7 = anObject$b;
	var definePropertiesModule$1 = objectDefineProperties;
	var enumBugKeys = enumBugKeys$3;
	var hiddenKeys$2 = hiddenKeys$5;
	var html$1 = html$2;
	var documentCreateElement = documentCreateElement$1;
	var sharedKey$2 = sharedKey$4;

	var GT = '>';
	var LT = '<';
	var PROTOTYPE$1 = 'prototype';
	var SCRIPT = 'script';
	var IE_PROTO = sharedKey$2('IE_PROTO');

	var EmptyConstructor = function () { /* empty */ };

	var scriptTag = function (content) {
	  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
	};

	// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
	var NullProtoObjectViaActiveX = function (activeXDocument) {
	  activeXDocument.write(scriptTag(''));
	  activeXDocument.close();
	  var temp = activeXDocument.parentWindow.Object;
	  activeXDocument = null; // avoid memory leak
	  return temp;
	};

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var NullProtoObjectViaIFrame = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = documentCreateElement('iframe');
	  var JS = 'java' + SCRIPT + ':';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  html$1.appendChild(iframe);
	  // https://github.com/zloirock/core-js/issues/475
	  iframe.src = String(JS);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(scriptTag('document.F=Object'));
	  iframeDocument.close();
	  return iframeDocument.F;
	};

	// Check for document.domain and active x support
	// No need to use active x approach when document.domain is not set
	// see https://github.com/es-shims/es5-shim/issues/150
	// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
	// avoid IE GC bug
	var activeXDocument;
	var NullProtoObject = function () {
	  try {
	    activeXDocument = new ActiveXObject('htmlfile');
	  } catch (error) { /* ignore */ }
	  NullProtoObject = typeof document != 'undefined'
	    ? document.domain && activeXDocument
	      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
	      : NullProtoObjectViaIFrame()
	    : NullProtoObjectViaActiveX(activeXDocument); // WSH
	  var length = enumBugKeys.length;
	  while (length--) delete NullProtoObject[PROTOTYPE$1][enumBugKeys[length]];
	  return NullProtoObject();
	};

	hiddenKeys$2[IE_PROTO] = true;

	// `Object.create` method
	// https://tc39.es/ecma262/#sec-object.create
	// eslint-disable-next-line es/no-object-create -- safe
	var objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    EmptyConstructor[PROTOTYPE$1] = anObject$7(O);
	    result = new EmptyConstructor();
	    EmptyConstructor[PROTOTYPE$1] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = NullProtoObject();
	  return Properties === undefined ? result : definePropertiesModule$1.f(result, Properties);
	};

	var isObject$d = isObject$k;
	var createNonEnumerableProperty$5 = createNonEnumerableProperty$7;

	// `InstallErrorCause` abstract operation
	// https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause
	var installErrorCause$1 = function (O, options) {
	  if (isObject$d(options) && 'cause' in options) {
	    createNonEnumerableProperty$5(O, 'cause', options.cause);
	  }
	};

	var uncurryThis$j = functionUncurryThis;

	var $Error$1 = Error;
	var replace$2 = uncurryThis$j(''.replace);

	var TEST = (function (arg) { return String(new $Error$1(arg).stack); })('zxcasd');
	// eslint-disable-next-line redos/no-vulnerable -- safe
	var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
	var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

	var errorStackClear = function (stack, dropEntries) {
	  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error$1.prepareStackTrace) {
	    while (dropEntries--) stack = replace$2(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
	  } return stack;
	};

	var fails$i = fails$r;
	var createPropertyDescriptor$4 = createPropertyDescriptor$7;

	var errorStackInstallable = !fails$i(function () {
	  var error = new Error('a');
	  if (!('stack' in error)) return true;
	  // eslint-disable-next-line es/no-object-defineproperty -- safe
	  Object.defineProperty(error, 'stack', createPropertyDescriptor$4(1, 7));
	  return error.stack !== 7;
	});

	var createNonEnumerableProperty$4 = createNonEnumerableProperty$7;
	var clearErrorStack = errorStackClear;
	var ERROR_STACK_INSTALLABLE = errorStackInstallable;

	// non-standard V8
	var captureStackTrace = Error.captureStackTrace;

	var errorStackInstall = function (error, C, stack, dropEntries) {
	  if (ERROR_STACK_INSTALLABLE) {
	    if (captureStackTrace) captureStackTrace(error, C);
	    else createNonEnumerableProperty$4(error, 'stack', clearErrorStack(stack, dropEntries));
	  }
	};

	var iterators = {};

	var wellKnownSymbol$m = wellKnownSymbol$o;
	var Iterators$5 = iterators;

	var ITERATOR$4 = wellKnownSymbol$m('iterator');
	var ArrayPrototype$b = Array.prototype;

	// check on default Array iterator
	var isArrayIteratorMethod$2 = function (it) {
	  return it !== undefined && (Iterators$5.Array === it || ArrayPrototype$b[ITERATOR$4] === it);
	};

	var wellKnownSymbol$l = wellKnownSymbol$o;

	var TO_STRING_TAG$3 = wellKnownSymbol$l('toStringTag');
	var test$1 = {};

	test$1[TO_STRING_TAG$3] = 'z';

	var toStringTagSupport = String(test$1) === '[object z]';

	var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
	var isCallable$a = isCallable$j;
	var classofRaw = classofRaw$2;
	var wellKnownSymbol$k = wellKnownSymbol$o;

	var TO_STRING_TAG$2 = wellKnownSymbol$k('toStringTag');
	var $Object = Object;

	// ES3 wrong here
	var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (error) { /* empty */ }
	};

	// getting tag from ES6+ `Object.prototype.toString`
	var classof$b = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG$2)) == 'string' ? tag
	    // builtinTag case
	    : CORRECT_ARGUMENTS ? classofRaw(O)
	    // ES3 arguments fallback
	    : (result = classofRaw(O)) === 'Object' && isCallable$a(O.callee) ? 'Arguments' : result;
	};

	var classof$a = classof$b;
	var getMethod$1 = getMethod$3;
	var isNullOrUndefined$2 = isNullOrUndefined$5;
	var Iterators$4 = iterators;
	var wellKnownSymbol$j = wellKnownSymbol$o;

	var ITERATOR$3 = wellKnownSymbol$j('iterator');

	var getIteratorMethod$8 = function (it) {
	  if (!isNullOrUndefined$2(it)) return getMethod$1(it, ITERATOR$3)
	    || getMethod$1(it, '@@iterator')
	    || Iterators$4[classof$a(it)];
	};

	var call$e = functionCall;
	var aCallable$8 = aCallable$c;
	var anObject$6 = anObject$b;
	var tryToString$3 = tryToString$5;
	var getIteratorMethod$7 = getIteratorMethod$8;

	var $TypeError$9 = TypeError;

	var getIterator$2 = function (argument, usingIterator) {
	  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$7(argument) : usingIterator;
	  if (aCallable$8(iteratorMethod)) return anObject$6(call$e(iteratorMethod, argument));
	  throw new $TypeError$9(tryToString$3(argument) + ' is not iterable');
	};

	var call$d = functionCall;
	var anObject$5 = anObject$b;
	var getMethod = getMethod$3;

	var iteratorClose$2 = function (iterator, kind, value) {
	  var innerResult, innerError;
	  anObject$5(iterator);
	  try {
	    innerResult = getMethod(iterator, 'return');
	    if (!innerResult) {
	      if (kind === 'throw') throw value;
	      return value;
	    }
	    innerResult = call$d(innerResult, iterator);
	  } catch (error) {
	    innerError = true;
	    innerResult = error;
	  }
	  if (kind === 'throw') throw value;
	  if (innerError) throw innerResult;
	  anObject$5(innerResult);
	  return value;
	};

	var bind$5 = functionBindContext;
	var call$c = functionCall;
	var anObject$4 = anObject$b;
	var tryToString$2 = tryToString$5;
	var isArrayIteratorMethod$1 = isArrayIteratorMethod$2;
	var lengthOfArrayLike$7 = lengthOfArrayLike$9;
	var isPrototypeOf$g = objectIsPrototypeOf;
	var getIterator$1 = getIterator$2;
	var getIteratorMethod$6 = getIteratorMethod$8;
	var iteratorClose$1 = iteratorClose$2;

	var $TypeError$8 = TypeError;

	var Result = function (stopped, result) {
	  this.stopped = stopped;
	  this.result = result;
	};

	var ResultPrototype = Result.prototype;

	var iterate$5 = function (iterable, unboundFunction, options) {
	  var that = options && options.that;
	  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
	  var IS_RECORD = !!(options && options.IS_RECORD);
	  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
	  var INTERRUPTED = !!(options && options.INTERRUPTED);
	  var fn = bind$5(unboundFunction, that);
	  var iterator, iterFn, index, length, result, next, step;

	  var stop = function (condition) {
	    if (iterator) iteratorClose$1(iterator, 'normal', condition);
	    return new Result(true, condition);
	  };

	  var callFn = function (value) {
	    if (AS_ENTRIES) {
	      anObject$4(value);
	      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
	    } return INTERRUPTED ? fn(value, stop) : fn(value);
	  };

	  if (IS_RECORD) {
	    iterator = iterable.iterator;
	  } else if (IS_ITERATOR) {
	    iterator = iterable;
	  } else {
	    iterFn = getIteratorMethod$6(iterable);
	    if (!iterFn) throw new $TypeError$8(tryToString$2(iterable) + ' is not iterable');
	    // optimisation for array iterators
	    if (isArrayIteratorMethod$1(iterFn)) {
	      for (index = 0, length = lengthOfArrayLike$7(iterable); length > index; index++) {
	        result = callFn(iterable[index]);
	        if (result && isPrototypeOf$g(ResultPrototype, result)) return result;
	      } return new Result(false);
	    }
	    iterator = getIterator$1(iterable, iterFn);
	  }

	  next = IS_RECORD ? iterable.next : iterator.next;
	  while (!(step = call$c(next, iterator)).done) {
	    try {
	      result = callFn(step.value);
	    } catch (error) {
	      iteratorClose$1(iterator, 'throw', error);
	    }
	    if (typeof result == 'object' && result && isPrototypeOf$g(ResultPrototype, result)) return result;
	  } return new Result(false);
	};

	var classof$9 = classof$b;

	var $String$1 = String;

	var toString$d = function (argument) {
	  if (classof$9(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
	  return $String$1(argument);
	};

	var toString$c = toString$d;

	var normalizeStringArgument$1 = function (argument, $default) {
	  return argument === undefined ? arguments.length < 2 ? '' : $default : toString$c(argument);
	};

	var $$J = _export;
	var isPrototypeOf$f = objectIsPrototypeOf;
	var getPrototypeOf$7 = objectGetPrototypeOf$1;
	var setPrototypeOf$6 = objectSetPrototypeOf;
	var copyConstructorProperties = copyConstructorProperties$1;
	var create$9 = objectCreate;
	var createNonEnumerableProperty$3 = createNonEnumerableProperty$7;
	var createPropertyDescriptor$3 = createPropertyDescriptor$7;
	var installErrorCause = installErrorCause$1;
	var installErrorStack = errorStackInstall;
	var iterate$4 = iterate$5;
	var normalizeStringArgument = normalizeStringArgument$1;
	var wellKnownSymbol$i = wellKnownSymbol$o;

	var TO_STRING_TAG$1 = wellKnownSymbol$i('toStringTag');
	var $Error = Error;
	var push$a = [].push;

	var $AggregateError = function AggregateError(errors, message /* , options */) {
	  var isInstance = isPrototypeOf$f(AggregateErrorPrototype, this);
	  var that;
	  if (setPrototypeOf$6) {
	    that = setPrototypeOf$6(new $Error(), isInstance ? getPrototypeOf$7(this) : AggregateErrorPrototype);
	  } else {
	    that = isInstance ? this : create$9(AggregateErrorPrototype);
	    createNonEnumerableProperty$3(that, TO_STRING_TAG$1, 'Error');
	  }
	  if (message !== undefined) createNonEnumerableProperty$3(that, 'message', normalizeStringArgument(message));
	  installErrorStack(that, $AggregateError, that.stack, 1);
	  if (arguments.length > 2) installErrorCause(that, arguments[2]);
	  var errorsArray = [];
	  iterate$4(errors, push$a, { that: errorsArray });
	  createNonEnumerableProperty$3(that, 'errors', errorsArray);
	  return that;
	};

	if (setPrototypeOf$6) setPrototypeOf$6($AggregateError, $Error);
	else copyConstructorProperties($AggregateError, $Error, { name: true });

	var AggregateErrorPrototype = $AggregateError.prototype = create$9($Error.prototype, {
	  constructor: createPropertyDescriptor$3(1, $AggregateError),
	  message: createPropertyDescriptor$3(1, ''),
	  name: createPropertyDescriptor$3(1, 'AggregateError')
	});

	// `AggregateError` constructor
	// https://tc39.es/ecma262/#sec-aggregate-error-constructor
	$$J({ global: true, constructor: true, arity: 2 }, {
	  AggregateError: $AggregateError
	});

	var global$d = global$l;
	var isCallable$9 = isCallable$j;

	var WeakMap$3 = global$d.WeakMap;

	var weakMapBasicDetection = isCallable$9(WeakMap$3) && /native code/.test(String(WeakMap$3));

	var NATIVE_WEAK_MAP = weakMapBasicDetection;
	var global$c = global$l;
	var isObject$c = isObject$k;
	var createNonEnumerableProperty$2 = createNonEnumerableProperty$7;
	var hasOwn$8 = hasOwnProperty_1;
	var shared$4 = sharedStoreExports;
	var sharedKey$1 = sharedKey$4;
	var hiddenKeys$1 = hiddenKeys$5;

	var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
	var TypeError$3 = global$c.TypeError;
	var WeakMap$2 = global$c.WeakMap;
	var set$1, get$2, has;

	var enforce = function (it) {
	  return has(it) ? get$2(it) : set$1(it, {});
	};

	var getterFor = function (TYPE) {
	  return function (it) {
	    var state;
	    if (!isObject$c(it) || (state = get$2(it)).type !== TYPE) {
	      throw new TypeError$3('Incompatible receiver, ' + TYPE + ' required');
	    } return state;
	  };
	};

	if (NATIVE_WEAK_MAP || shared$4.state) {
	  var store$1 = shared$4.state || (shared$4.state = new WeakMap$2());
	  /* eslint-disable no-self-assign -- prototype methods protection */
	  store$1.get = store$1.get;
	  store$1.has = store$1.has;
	  store$1.set = store$1.set;
	  /* eslint-enable no-self-assign -- prototype methods protection */
	  set$1 = function (it, metadata) {
	    if (store$1.has(it)) throw new TypeError$3(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    store$1.set(it, metadata);
	    return metadata;
	  };
	  get$2 = function (it) {
	    return store$1.get(it) || {};
	  };
	  has = function (it) {
	    return store$1.has(it);
	  };
	} else {
	  var STATE = sharedKey$1('state');
	  hiddenKeys$1[STATE] = true;
	  set$1 = function (it, metadata) {
	    if (hasOwn$8(it, STATE)) throw new TypeError$3(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    createNonEnumerableProperty$2(it, STATE, metadata);
	    return metadata;
	  };
	  get$2 = function (it) {
	    return hasOwn$8(it, STATE) ? it[STATE] : {};
	  };
	  has = function (it) {
	    return hasOwn$8(it, STATE);
	  };
	}

	var internalState = {
	  set: set$1,
	  get: get$2,
	  has: has,
	  enforce: enforce,
	  getterFor: getterFor
	};

	var DESCRIPTORS$a = descriptors;
	var hasOwn$7 = hasOwnProperty_1;

	var FunctionPrototype$1 = Function.prototype;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getDescriptor = DESCRIPTORS$a && Object.getOwnPropertyDescriptor;

	var EXISTS = hasOwn$7(FunctionPrototype$1, 'name');
	// additional protection from minified / mangled / dropped function names
	var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
	var CONFIGURABLE = EXISTS && (!DESCRIPTORS$a || (DESCRIPTORS$a && getDescriptor(FunctionPrototype$1, 'name').configurable));

	var functionName = {
	  EXISTS: EXISTS,
	  PROPER: PROPER,
	  CONFIGURABLE: CONFIGURABLE
	};

	var createNonEnumerableProperty$1 = createNonEnumerableProperty$7;

	var defineBuiltIn$5 = function (target, key, value, options) {
	  if (options && options.enumerable) target[key] = value;
	  else createNonEnumerableProperty$1(target, key, value);
	  return target;
	};

	var fails$h = fails$r;
	var isCallable$8 = isCallable$j;
	var isObject$b = isObject$k;
	var create$8 = objectCreate;
	var getPrototypeOf$6 = objectGetPrototypeOf$1;
	var defineBuiltIn$4 = defineBuiltIn$5;
	var wellKnownSymbol$h = wellKnownSymbol$o;

	var ITERATOR$2 = wellKnownSymbol$h('iterator');
	var BUGGY_SAFARI_ITERATORS$1 = false;

	// `%IteratorPrototype%` object
	// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
	var IteratorPrototype$1, PrototypeOfArrayIteratorPrototype, arrayIterator;

	/* eslint-disable es/no-array-prototype-keys -- safe */
	if ([].keys) {
	  arrayIterator = [].keys();
	  // Safari 8 has buggy iterators w/o `next`
	  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
	  else {
	    PrototypeOfArrayIteratorPrototype = getPrototypeOf$6(getPrototypeOf$6(arrayIterator));
	    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$1 = PrototypeOfArrayIteratorPrototype;
	  }
	}

	var NEW_ITERATOR_PROTOTYPE = !isObject$b(IteratorPrototype$1) || fails$h(function () {
	  var test = {};
	  // FF44- legacy iterators case
	  return IteratorPrototype$1[ITERATOR$2].call(test) !== test;
	});

	if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$1 = {};
	else IteratorPrototype$1 = create$8(IteratorPrototype$1);

	// `%IteratorPrototype%[@@iterator]()` method
	// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
	if (!isCallable$8(IteratorPrototype$1[ITERATOR$2])) {
	  defineBuiltIn$4(IteratorPrototype$1, ITERATOR$2, function () {
	    return this;
	  });
	}

	var iteratorsCore = {
	  IteratorPrototype: IteratorPrototype$1,
	  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
	};

	var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
	var classof$8 = classof$b;

	// `Object.prototype.toString` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.tostring
	var objectToString$2 = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
	  return '[object ' + classof$8(this) + ']';
	};

	var TO_STRING_TAG_SUPPORT = toStringTagSupport;
	var defineProperty$d = objectDefineProperty.f;
	var createNonEnumerableProperty = createNonEnumerableProperty$7;
	var hasOwn$6 = hasOwnProperty_1;
	var toString$b = objectToString$2;
	var wellKnownSymbol$g = wellKnownSymbol$o;

	var TO_STRING_TAG = wellKnownSymbol$g('toStringTag');

	var setToStringTag$7 = function (it, TAG, STATIC, SET_METHOD) {
	  var target = STATIC ? it : it && it.prototype;
	  if (target) {
	    if (!hasOwn$6(target, TO_STRING_TAG)) {
	      defineProperty$d(target, TO_STRING_TAG, { configurable: true, value: TAG });
	    }
	    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
	      createNonEnumerableProperty(target, 'toString', toString$b);
	    }
	  }
	};

	var IteratorPrototype = iteratorsCore.IteratorPrototype;
	var create$7 = objectCreate;
	var createPropertyDescriptor$2 = createPropertyDescriptor$7;
	var setToStringTag$6 = setToStringTag$7;
	var Iterators$3 = iterators;

	var returnThis$1 = function () { return this; };

	var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
	  var TO_STRING_TAG = NAME + ' Iterator';
	  IteratorConstructor.prototype = create$7(IteratorPrototype, { next: createPropertyDescriptor$2(+!ENUMERABLE_NEXT, next) });
	  setToStringTag$6(IteratorConstructor, TO_STRING_TAG, false, true);
	  Iterators$3[TO_STRING_TAG] = returnThis$1;
	  return IteratorConstructor;
	};

	var $$I = _export;
	var call$b = functionCall;
	var FunctionName = functionName;
	var createIteratorConstructor = iteratorCreateConstructor;
	var getPrototypeOf$5 = objectGetPrototypeOf$1;
	var setToStringTag$5 = setToStringTag$7;
	var defineBuiltIn$3 = defineBuiltIn$5;
	var wellKnownSymbol$f = wellKnownSymbol$o;
	var Iterators$2 = iterators;
	var IteratorsCore = iteratorsCore;

	var PROPER_FUNCTION_NAME$1 = FunctionName.PROPER;
	FunctionName.CONFIGURABLE;
	IteratorsCore.IteratorPrototype;
	var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
	var ITERATOR$1 = wellKnownSymbol$f('iterator');
	var KEYS = 'keys';
	var VALUES = 'values';
	var ENTRIES = 'entries';

	var returnThis = function () { return this; };

	var iteratorDefine = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
	  createIteratorConstructor(IteratorConstructor, NAME, next);

	  var getIterationMethod = function (KIND) {
	    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
	    if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];

	    switch (KIND) {
	      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
	      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
	      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
	    }

	    return function () { return new IteratorConstructor(this); };
	  };

	  var TO_STRING_TAG = NAME + ' Iterator';
	  var INCORRECT_VALUES_NAME = false;
	  var IterablePrototype = Iterable.prototype;
	  var nativeIterator = IterablePrototype[ITERATOR$1]
	    || IterablePrototype['@@iterator']
	    || DEFAULT && IterablePrototype[DEFAULT];
	  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
	  var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
	  var CurrentIteratorPrototype, methods, KEY;

	  // fix native
	  if (anyNativeIterator) {
	    CurrentIteratorPrototype = getPrototypeOf$5(anyNativeIterator.call(new Iterable()));
	    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag$5(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
	      Iterators$2[TO_STRING_TAG] = returnThis;
	    }
	  }

	  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
	  if (PROPER_FUNCTION_NAME$1 && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
	    {
	      INCORRECT_VALUES_NAME = true;
	      defaultIterator = function values() { return call$b(nativeIterator, this); };
	    }
	  }

	  // export additional methods
	  if (DEFAULT) {
	    methods = {
	      values: getIterationMethod(VALUES),
	      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
	      entries: getIterationMethod(ENTRIES)
	    };
	    if (FORCED) for (KEY in methods) {
	      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
	        defineBuiltIn$3(IterablePrototype, KEY, methods[KEY]);
	      }
	    } else $$I({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
	  }

	  // define iterator
	  if ((FORCED) && IterablePrototype[ITERATOR$1] !== defaultIterator) {
	    defineBuiltIn$3(IterablePrototype, ITERATOR$1, defaultIterator, { name: DEFAULT });
	  }
	  Iterators$2[NAME] = defaultIterator;

	  return methods;
	};

	// `CreateIterResultObject` abstract operation
	// https://tc39.es/ecma262/#sec-createiterresultobject
	var createIterResultObject$2 = function (value, done) {
	  return { value: value, done: done };
	};

	var toIndexedObject$6 = toIndexedObject$b;
	var Iterators$1 = iterators;
	var InternalStateModule$3 = internalState;
	objectDefineProperty.f;
	var defineIterator$1 = iteratorDefine;
	var createIterResultObject$1 = createIterResultObject$2;

	var ARRAY_ITERATOR = 'Array Iterator';
	var setInternalState$3 = InternalStateModule$3.set;
	var getInternalState$2 = InternalStateModule$3.getterFor(ARRAY_ITERATOR);

	// `Array.prototype.entries` method
	// https://tc39.es/ecma262/#sec-array.prototype.entries
	// `Array.prototype.keys` method
	// https://tc39.es/ecma262/#sec-array.prototype.keys
	// `Array.prototype.values` method
	// https://tc39.es/ecma262/#sec-array.prototype.values
	// `Array.prototype[@@iterator]` method
	// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
	// `CreateArrayIterator` internal method
	// https://tc39.es/ecma262/#sec-createarrayiterator
	defineIterator$1(Array, 'Array', function (iterated, kind) {
	  setInternalState$3(this, {
	    type: ARRAY_ITERATOR,
	    target: toIndexedObject$6(iterated), // target
	    index: 0,                          // next index
	    kind: kind                         // kind
	  });
	// `%ArrayIteratorPrototype%.next` method
	// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
	}, function () {
	  var state = getInternalState$2(this);
	  var target = state.target;
	  var index = state.index++;
	  if (!target || index >= target.length) {
	    state.target = undefined;
	    return createIterResultObject$1(undefined, true);
	  }
	  switch (state.kind) {
	    case 'keys': return createIterResultObject$1(index, false);
	    case 'values': return createIterResultObject$1(target[index], false);
	  } return createIterResultObject$1([index, target[index]], false);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values%
	// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
	// https://tc39.es/ecma262/#sec-createmappedargumentsobject
	Iterators$1.Arguments = Iterators$1.Array;

	var global$b = global$l;
	var classof$7 = classofRaw$2;

	var engineIsNode = classof$7(global$b.process) === 'process';

	var defineProperty$c = objectDefineProperty;

	var defineBuiltInAccessor$2 = function (target, name, descriptor) {
	  return defineProperty$c.f(target, name, descriptor);
	};

	var getBuiltIn$a = getBuiltIn$e;
	var defineBuiltInAccessor$1 = defineBuiltInAccessor$2;
	var wellKnownSymbol$e = wellKnownSymbol$o;
	var DESCRIPTORS$9 = descriptors;

	var SPECIES$5 = wellKnownSymbol$e('species');

	var setSpecies$1 = function (CONSTRUCTOR_NAME) {
	  var Constructor = getBuiltIn$a(CONSTRUCTOR_NAME);

	  if (DESCRIPTORS$9 && Constructor && !Constructor[SPECIES$5]) {
	    defineBuiltInAccessor$1(Constructor, SPECIES$5, {
	      configurable: true,
	      get: function () { return this; }
	    });
	  }
	};

	var isPrototypeOf$e = objectIsPrototypeOf;

	var $TypeError$7 = TypeError;

	var anInstance$1 = function (it, Prototype) {
	  if (isPrototypeOf$e(Prototype, it)) return it;
	  throw new $TypeError$7('Incorrect invocation');
	};

	var uncurryThis$i = functionUncurryThis;
	var isCallable$7 = isCallable$j;
	var store = sharedStoreExports;

	var functionToString = uncurryThis$i(Function.toString);

	// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
	if (!isCallable$7(store.inspectSource)) {
	  store.inspectSource = function (it) {
	    return functionToString(it);
	  };
	}

	var inspectSource$2 = store.inspectSource;

	var uncurryThis$h = functionUncurryThis;
	var fails$g = fails$r;
	var isCallable$6 = isCallable$j;
	var classof$6 = classof$b;
	var getBuiltIn$9 = getBuiltIn$e;
	var inspectSource$1 = inspectSource$2;

	var noop = function () { /* empty */ };
	var construct = getBuiltIn$9('Reflect', 'construct');
	var constructorRegExp = /^\s*(?:class|function)\b/;
	var exec$1 = uncurryThis$h(constructorRegExp.exec);
	var INCORRECT_TO_STRING = !constructorRegExp.test(noop);

	var isConstructorModern = function isConstructor(argument) {
	  if (!isCallable$6(argument)) return false;
	  try {
	    construct(noop, [], argument);
	    return true;
	  } catch (error) {
	    return false;
	  }
	};

	var isConstructorLegacy = function isConstructor(argument) {
	  if (!isCallable$6(argument)) return false;
	  switch (classof$6(argument)) {
	    case 'AsyncFunction':
	    case 'GeneratorFunction':
	    case 'AsyncGeneratorFunction': return false;
	  }
	  try {
	    // we can't check .prototype since constructors produced by .bind haven't it
	    // `Function#toString` throws on some built-it function in some legacy engines
	    // (for example, `DOMQuad` and similar in FF41-)
	    return INCORRECT_TO_STRING || !!exec$1(constructorRegExp, inspectSource$1(argument));
	  } catch (error) {
	    return true;
	  }
	};

	isConstructorLegacy.sham = true;

	// `IsConstructor` abstract operation
	// https://tc39.es/ecma262/#sec-isconstructor
	var isConstructor$4 = !construct || fails$g(function () {
	  var called;
	  return isConstructorModern(isConstructorModern.call)
	    || !isConstructorModern(Object)
	    || !isConstructorModern(function () { called = true; })
	    || called;
	}) ? isConstructorLegacy : isConstructorModern;

	var isConstructor$3 = isConstructor$4;
	var tryToString$1 = tryToString$5;

	var $TypeError$6 = TypeError;

	// `Assert: IsConstructor(argument) is true`
	var aConstructor$1 = function (argument) {
	  if (isConstructor$3(argument)) return argument;
	  throw new $TypeError$6(tryToString$1(argument) + ' is not a constructor');
	};

	var anObject$3 = anObject$b;
	var aConstructor = aConstructor$1;
	var isNullOrUndefined$1 = isNullOrUndefined$5;
	var wellKnownSymbol$d = wellKnownSymbol$o;

	var SPECIES$4 = wellKnownSymbol$d('species');

	// `SpeciesConstructor` abstract operation
	// https://tc39.es/ecma262/#sec-speciesconstructor
	var speciesConstructor$2 = function (O, defaultConstructor) {
	  var C = anObject$3(O).constructor;
	  var S;
	  return C === undefined || isNullOrUndefined$1(S = anObject$3(C)[SPECIES$4]) ? defaultConstructor : aConstructor(S);
	};

	var uncurryThis$g = functionUncurryThis;

	var arraySlice$3 = uncurryThis$g([].slice);

	var $TypeError$5 = TypeError;

	var validateArgumentsLength$1 = function (passed, required) {
	  if (passed < required) throw new $TypeError$5('Not enough arguments');
	  return passed;
	};

	var userAgent$2 = engineUserAgent;

	// eslint-disable-next-line redos/no-vulnerable -- safe
	var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$2);

	var global$a = global$l;
	var apply$6 = functionApply;
	var bind$4 = functionBindContext;
	var isCallable$5 = isCallable$j;
	var hasOwn$5 = hasOwnProperty_1;
	var fails$f = fails$r;
	var html = html$2;
	var arraySlice$2 = arraySlice$3;
	var createElement = documentCreateElement$1;
	var validateArgumentsLength = validateArgumentsLength$1;
	var IS_IOS$1 = engineIsIos;
	var IS_NODE$4 = engineIsNode;

	var set = global$a.setImmediate;
	var clear = global$a.clearImmediate;
	var process$2 = global$a.process;
	var Dispatch = global$a.Dispatch;
	var Function$1 = global$a.Function;
	var MessageChannel = global$a.MessageChannel;
	var String$1 = global$a.String;
	var counter = 0;
	var queue$2 = {};
	var ONREADYSTATECHANGE = 'onreadystatechange';
	var $location, defer, channel, port;

	fails$f(function () {
	  // Deno throws a ReferenceError on `location` access without `--location` flag
	  $location = global$a.location;
	});

	var run = function (id) {
	  if (hasOwn$5(queue$2, id)) {
	    var fn = queue$2[id];
	    delete queue$2[id];
	    fn();
	  }
	};

	var runner = function (id) {
	  return function () {
	    run(id);
	  };
	};

	var eventListener = function (event) {
	  run(event.data);
	};

	var globalPostMessageDefer = function (id) {
	  // old engines have not location.origin
	  global$a.postMessage(String$1(id), $location.protocol + '//' + $location.host);
	};

	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!set || !clear) {
	  set = function setImmediate(handler) {
	    validateArgumentsLength(arguments.length, 1);
	    var fn = isCallable$5(handler) ? handler : Function$1(handler);
	    var args = arraySlice$2(arguments, 1);
	    queue$2[++counter] = function () {
	      apply$6(fn, undefined, args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clear = function clearImmediate(id) {
	    delete queue$2[id];
	  };
	  // Node.js 0.8-
	  if (IS_NODE$4) {
	    defer = function (id) {
	      process$2.nextTick(runner(id));
	    };
	  // Sphere (JS game engine) Dispatch API
	  } else if (Dispatch && Dispatch.now) {
	    defer = function (id) {
	      Dispatch.now(runner(id));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  // except iOS - https://github.com/zloirock/core-js/issues/624
	  } else if (MessageChannel && !IS_IOS$1) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = eventListener;
	    defer = bind$4(port.postMessage, port);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (
	    global$a.addEventListener &&
	    isCallable$5(global$a.postMessage) &&
	    !global$a.importScripts &&
	    $location && $location.protocol !== 'file:' &&
	    !fails$f(globalPostMessageDefer)
	  ) {
	    defer = globalPostMessageDefer;
	    global$a.addEventListener('message', eventListener, false);
	  // IE8-
	  } else if (ONREADYSTATECHANGE in createElement('script')) {
	    defer = function (id) {
	      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function (id) {
	      setTimeout(runner(id), 0);
	    };
	  }
	}

	var task$1 = {
	  set: set,
	  clear: clear
	};

	var global$9 = global$l;
	var DESCRIPTORS$8 = descriptors;

	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

	// Avoid NodeJS experimental warning
	var safeGetBuiltIn$1 = function (name) {
	  if (!DESCRIPTORS$8) return global$9[name];
	  var descriptor = getOwnPropertyDescriptor$1(global$9, name);
	  return descriptor && descriptor.value;
	};

	var Queue$2 = function () {
	  this.head = null;
	  this.tail = null;
	};

	Queue$2.prototype = {
	  add: function (item) {
	    var entry = { item: item, next: null };
	    var tail = this.tail;
	    if (tail) tail.next = entry;
	    else this.head = entry;
	    this.tail = entry;
	  },
	  get: function () {
	    var entry = this.head;
	    if (entry) {
	      var next = this.head = entry.next;
	      if (next === null) this.tail = null;
	      return entry.item;
	    }
	  }
	};

	var queue$1 = Queue$2;

	var userAgent$1 = engineUserAgent;

	var engineIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$1) && typeof Pebble != 'undefined';

	var userAgent = engineUserAgent;

	var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent);

	var global$8 = global$l;
	var safeGetBuiltIn = safeGetBuiltIn$1;
	var bind$3 = functionBindContext;
	var macrotask = task$1.set;
	var Queue$1 = queue$1;
	var IS_IOS = engineIsIos;
	var IS_IOS_PEBBLE = engineIsIosPebble;
	var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
	var IS_NODE$3 = engineIsNode;

	var MutationObserver$1 = global$8.MutationObserver || global$8.WebKitMutationObserver;
	var document$2 = global$8.document;
	var process$1 = global$8.process;
	var Promise$3 = global$8.Promise;
	var microtask$1 = safeGetBuiltIn('queueMicrotask');
	var notify$1, toggle, node, promise$6, then;

	// modern engines have queueMicrotask method
	if (!microtask$1) {
	  var queue = new Queue$1();

	  var flush = function () {
	    var parent, fn;
	    if (IS_NODE$3 && (parent = process$1.domain)) parent.exit();
	    while (fn = queue.get()) try {
	      fn();
	    } catch (error) {
	      if (queue.head) notify$1();
	      throw error;
	    }
	    if (parent) parent.enter();
	  };

	  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
	  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
	  if (!IS_IOS && !IS_NODE$3 && !IS_WEBOS_WEBKIT && MutationObserver$1 && document$2) {
	    toggle = true;
	    node = document$2.createTextNode('');
	    new MutationObserver$1(flush).observe(node, { characterData: true });
	    notify$1 = function () {
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if (!IS_IOS_PEBBLE && Promise$3 && Promise$3.resolve) {
	    // Promise.resolve without an argument throws an error in LG WebOS 2
	    promise$6 = Promise$3.resolve(undefined);
	    // workaround of WebKit ~ iOS Safari 10.1 bug
	    promise$6.constructor = Promise$3;
	    then = bind$3(promise$6.then, promise$6);
	    notify$1 = function () {
	      then(flush);
	    };
	  // Node.js without promises
	  } else if (IS_NODE$3) {
	    notify$1 = function () {
	      process$1.nextTick(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessage
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    // `webpack` dev server bug on IE global methods - use bind(fn, global)
	    macrotask = bind$3(macrotask, global$8);
	    notify$1 = function () {
	      macrotask(flush);
	    };
	  }

	  microtask$1 = function (fn) {
	    if (!queue.head) notify$1();
	    queue.add(fn);
	  };
	}

	var microtask_1 = microtask$1;

	var hostReportErrors$1 = function (a, b) {
	  try {
	    // eslint-disable-next-line no-console -- safe
	    arguments.length === 1 ? console.error(a) : console.error(a, b);
	  } catch (error) { /* empty */ }
	};

	var perform$6 = function (exec) {
	  try {
	    return { error: false, value: exec() };
	  } catch (error) {
	    return { error: true, value: error };
	  }
	};

	var global$7 = global$l;

	var promiseNativeConstructor = global$7.Promise;

	/* global Deno -- Deno case */
	var engineIsDeno = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';

	var IS_DENO$1 = engineIsDeno;
	var IS_NODE$2 = engineIsNode;

	var engineIsBrowser = !IS_DENO$1 && !IS_NODE$2
	  && typeof window == 'object'
	  && typeof document == 'object';

	var global$6 = global$l;
	var NativePromiseConstructor$5 = promiseNativeConstructor;
	var isCallable$4 = isCallable$j;
	var isForced = isForced_1;
	var inspectSource = inspectSource$2;
	var wellKnownSymbol$c = wellKnownSymbol$o;
	var IS_BROWSER = engineIsBrowser;
	var IS_DENO = engineIsDeno;
	var V8_VERSION$2 = engineV8Version;

	var NativePromisePrototype$2 = NativePromiseConstructor$5 && NativePromiseConstructor$5.prototype;
	var SPECIES$3 = wellKnownSymbol$c('species');
	var SUBCLASSING = false;
	var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$4(global$6.PromiseRejectionEvent);

	var FORCED_PROMISE_CONSTRUCTOR$5 = isForced('Promise', function () {
	  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor$5);
	  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor$5);
	  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
	  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
	  // We can't detect it synchronously, so just check versions
	  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION$2 === 66) return true;
	  // We need Promise#{ catch, finally } in the pure version for preventing prototype pollution
	  if (!(NativePromisePrototype$2['catch'] && NativePromisePrototype$2['finally'])) return true;
	  // We can't use @@species feature detection in V8 since it causes
	  // deoptimization and performance degradation
	  // https://github.com/zloirock/core-js/issues/679
	  if (!V8_VERSION$2 || V8_VERSION$2 < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
	    // Detect correctness of subclassing with @@species support
	    var promise = new NativePromiseConstructor$5(function (resolve) { resolve(1); });
	    var FakePromise = function (exec) {
	      exec(function () { /* empty */ }, function () { /* empty */ });
	    };
	    var constructor = promise.constructor = {};
	    constructor[SPECIES$3] = FakePromise;
	    SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
	    if (!SUBCLASSING) return true;
	  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	  } return !GLOBAL_CORE_JS_PROMISE && (IS_BROWSER || IS_DENO) && !NATIVE_PROMISE_REJECTION_EVENT$1;
	});

	var promiseConstructorDetection = {
	  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR$5,
	  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT$1,
	  SUBCLASSING: SUBCLASSING
	};

	var newPromiseCapability$2 = {};

	var aCallable$7 = aCallable$c;

	var $TypeError$4 = TypeError;

	var PromiseCapability = function (C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw new $TypeError$4('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aCallable$7(resolve);
	  this.reject = aCallable$7(reject);
	};

	// `NewPromiseCapability` abstract operation
	// https://tc39.es/ecma262/#sec-newpromisecapability
	newPromiseCapability$2.f = function (C) {
	  return new PromiseCapability(C);
	};

	var $$H = _export;
	var IS_NODE$1 = engineIsNode;
	var global$5 = global$l;
	var call$a = functionCall;
	var defineBuiltIn$2 = defineBuiltIn$5;
	var setToStringTag$4 = setToStringTag$7;
	var setSpecies = setSpecies$1;
	var aCallable$6 = aCallable$c;
	var isCallable$3 = isCallable$j;
	var isObject$a = isObject$k;
	var anInstance = anInstance$1;
	var speciesConstructor$1 = speciesConstructor$2;
	var task = task$1.set;
	var microtask = microtask_1;
	var hostReportErrors = hostReportErrors$1;
	var perform$5 = perform$6;
	var Queue = queue$1;
	var InternalStateModule$2 = internalState;
	var NativePromiseConstructor$4 = promiseNativeConstructor;
	var PromiseConstructorDetection = promiseConstructorDetection;
	var newPromiseCapabilityModule$7 = newPromiseCapability$2;

	var PROMISE = 'Promise';
	var FORCED_PROMISE_CONSTRUCTOR$4 = PromiseConstructorDetection.CONSTRUCTOR;
	var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
	PromiseConstructorDetection.SUBCLASSING;
	var getInternalPromiseState = InternalStateModule$2.getterFor(PROMISE);
	var setInternalState$2 = InternalStateModule$2.set;
	var NativePromisePrototype$1 = NativePromiseConstructor$4 && NativePromiseConstructor$4.prototype;
	var PromiseConstructor = NativePromiseConstructor$4;
	var PromisePrototype = NativePromisePrototype$1;
	var TypeError$2 = global$5.TypeError;
	var document$1 = global$5.document;
	var process = global$5.process;
	var newPromiseCapability$1 = newPromiseCapabilityModule$7.f;
	var newGenericPromiseCapability = newPromiseCapability$1;

	var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$5.dispatchEvent);
	var UNHANDLED_REJECTION = 'unhandledrejection';
	var REJECTION_HANDLED = 'rejectionhandled';
	var PENDING = 0;
	var FULFILLED = 1;
	var REJECTED = 2;
	var HANDLED = 1;
	var UNHANDLED = 2;

	var Internal, OwnPromiseCapability, PromiseWrapper;

	// helpers
	var isThenable = function (it) {
	  var then;
	  return isObject$a(it) && isCallable$3(then = it.then) ? then : false;
	};

	var callReaction = function (reaction, state) {
	  var value = state.value;
	  var ok = state.state === FULFILLED;
	  var handler = ok ? reaction.ok : reaction.fail;
	  var resolve = reaction.resolve;
	  var reject = reaction.reject;
	  var domain = reaction.domain;
	  var result, then, exited;
	  try {
	    if (handler) {
	      if (!ok) {
	        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
	        state.rejection = HANDLED;
	      }
	      if (handler === true) result = value;
	      else {
	        if (domain) domain.enter();
	        result = handler(value); // can throw
	        if (domain) {
	          domain.exit();
	          exited = true;
	        }
	      }
	      if (result === reaction.promise) {
	        reject(new TypeError$2('Promise-chain cycle'));
	      } else if (then = isThenable(result)) {
	        call$a(then, result, resolve, reject);
	      } else resolve(result);
	    } else reject(value);
	  } catch (error) {
	    if (domain && !exited) domain.exit();
	    reject(error);
	  }
	};

	var notify = function (state, isReject) {
	  if (state.notified) return;
	  state.notified = true;
	  microtask(function () {
	    var reactions = state.reactions;
	    var reaction;
	    while (reaction = reactions.get()) {
	      callReaction(reaction, state);
	    }
	    state.notified = false;
	    if (isReject && !state.rejection) onUnhandled(state);
	  });
	};

	var dispatchEvent = function (name, promise, reason) {
	  var event, handler;
	  if (DISPATCH_EVENT) {
	    event = document$1.createEvent('Event');
	    event.promise = promise;
	    event.reason = reason;
	    event.initEvent(name, false, true);
	    global$5.dispatchEvent(event);
	  } else event = { promise: promise, reason: reason };
	  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global$5['on' + name])) handler(event);
	  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
	};

	var onUnhandled = function (state) {
	  call$a(task, global$5, function () {
	    var promise = state.facade;
	    var value = state.value;
	    var IS_UNHANDLED = isUnhandled(state);
	    var result;
	    if (IS_UNHANDLED) {
	      result = perform$5(function () {
	        if (IS_NODE$1) {
	          process.emit('unhandledRejection', value, promise);
	        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      state.rejection = IS_NODE$1 || isUnhandled(state) ? UNHANDLED : HANDLED;
	      if (result.error) throw result.value;
	    }
	  });
	};

	var isUnhandled = function (state) {
	  return state.rejection !== HANDLED && !state.parent;
	};

	var onHandleUnhandled = function (state) {
	  call$a(task, global$5, function () {
	    var promise = state.facade;
	    if (IS_NODE$1) {
	      process.emit('rejectionHandled', promise);
	    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
	  });
	};

	var bind$2 = function (fn, state, unwrap) {
	  return function (value) {
	    fn(state, value, unwrap);
	  };
	};

	var internalReject = function (state, value, unwrap) {
	  if (state.done) return;
	  state.done = true;
	  if (unwrap) state = unwrap;
	  state.value = value;
	  state.state = REJECTED;
	  notify(state, true);
	};

	var internalResolve = function (state, value, unwrap) {
	  if (state.done) return;
	  state.done = true;
	  if (unwrap) state = unwrap;
	  try {
	    if (state.facade === value) throw new TypeError$2("Promise can't be resolved itself");
	    var then = isThenable(value);
	    if (then) {
	      microtask(function () {
	        var wrapper = { done: false };
	        try {
	          call$a(then, value,
	            bind$2(internalResolve, wrapper, state),
	            bind$2(internalReject, wrapper, state)
	          );
	        } catch (error) {
	          internalReject(wrapper, error, state);
	        }
	      });
	    } else {
	      state.value = value;
	      state.state = FULFILLED;
	      notify(state, false);
	    }
	  } catch (error) {
	    internalReject({ done: false }, error, state);
	  }
	};

	// constructor polyfill
	if (FORCED_PROMISE_CONSTRUCTOR$4) {
	  // 25.4.3.1 Promise(executor)
	  PromiseConstructor = function Promise(executor) {
	    anInstance(this, PromisePrototype);
	    aCallable$6(executor);
	    call$a(Internal, this);
	    var state = getInternalPromiseState(this);
	    try {
	      executor(bind$2(internalResolve, state), bind$2(internalReject, state));
	    } catch (error) {
	      internalReject(state, error);
	    }
	  };

	  PromisePrototype = PromiseConstructor.prototype;

	  // eslint-disable-next-line no-unused-vars -- required for `.length`
	  Internal = function Promise(executor) {
	    setInternalState$2(this, {
	      type: PROMISE,
	      done: false,
	      notified: false,
	      parent: false,
	      reactions: new Queue(),
	      rejection: false,
	      state: PENDING,
	      value: undefined
	    });
	  };

	  // `Promise.prototype.then` method
	  // https://tc39.es/ecma262/#sec-promise.prototype.then
	  Internal.prototype = defineBuiltIn$2(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
	    var state = getInternalPromiseState(this);
	    var reaction = newPromiseCapability$1(speciesConstructor$1(this, PromiseConstructor));
	    state.parent = true;
	    reaction.ok = isCallable$3(onFulfilled) ? onFulfilled : true;
	    reaction.fail = isCallable$3(onRejected) && onRejected;
	    reaction.domain = IS_NODE$1 ? process.domain : undefined;
	    if (state.state === PENDING) state.reactions.add(reaction);
	    else microtask(function () {
	      callReaction(reaction, state);
	    });
	    return reaction.promise;
	  });

	  OwnPromiseCapability = function () {
	    var promise = new Internal();
	    var state = getInternalPromiseState(promise);
	    this.promise = promise;
	    this.resolve = bind$2(internalResolve, state);
	    this.reject = bind$2(internalReject, state);
	  };

	  newPromiseCapabilityModule$7.f = newPromiseCapability$1 = function (C) {
	    return C === PromiseConstructor || C === PromiseWrapper
	      ? new OwnPromiseCapability(C)
	      : newGenericPromiseCapability(C);
	  };
	}

	$$H({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR$4 }, {
	  Promise: PromiseConstructor
	});

	setToStringTag$4(PromiseConstructor, PROMISE, false, true);
	setSpecies(PROMISE);

	var wellKnownSymbol$b = wellKnownSymbol$o;

	var ITERATOR = wellKnownSymbol$b('iterator');
	var SAFE_CLOSING = false;

	try {
	  var called = 0;
	  var iteratorWithReturn = {
	    next: function () {
	      return { done: !!called++ };
	    },
	    'return': function () {
	      SAFE_CLOSING = true;
	    }
	  };
	  iteratorWithReturn[ITERATOR] = function () {
	    return this;
	  };
	  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
	  Array.from(iteratorWithReturn, function () { throw 2; });
	} catch (error) { /* empty */ }

	var checkCorrectnessOfIteration$2 = function (exec, SKIP_CLOSING) {
	  try {
	    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
	  } catch (error) { return false; } // workaround of old WebKit + `eval` bug
	  var ITERATION_SUPPORT = false;
	  try {
	    var object = {};
	    object[ITERATOR] = function () {
	      return {
	        next: function () {
	          return { done: ITERATION_SUPPORT = true };
	        }
	      };
	    };
	    exec(object);
	  } catch (error) { /* empty */ }
	  return ITERATION_SUPPORT;
	};

	var NativePromiseConstructor$3 = promiseNativeConstructor;
	var checkCorrectnessOfIteration$1 = checkCorrectnessOfIteration$2;
	var FORCED_PROMISE_CONSTRUCTOR$3 = promiseConstructorDetection.CONSTRUCTOR;

	var promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR$3 || !checkCorrectnessOfIteration$1(function (iterable) {
	  NativePromiseConstructor$3.all(iterable).then(undefined, function () { /* empty */ });
	});

	var $$G = _export;
	var call$9 = functionCall;
	var aCallable$5 = aCallable$c;
	var newPromiseCapabilityModule$6 = newPromiseCapability$2;
	var perform$4 = perform$6;
	var iterate$3 = iterate$5;
	var PROMISE_STATICS_INCORRECT_ITERATION$3 = promiseStaticsIncorrectIteration;

	// `Promise.all` method
	// https://tc39.es/ecma262/#sec-promise.all
	$$G({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$3 }, {
	  all: function all(iterable) {
	    var C = this;
	    var capability = newPromiseCapabilityModule$6.f(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform$4(function () {
	      var $promiseResolve = aCallable$5(C.resolve);
	      var values = [];
	      var counter = 0;
	      var remaining = 1;
	      iterate$3(iterable, function (promise) {
	        var index = counter++;
	        var alreadyCalled = false;
	        remaining++;
	        call$9($promiseResolve, C, promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	var $$F = _export;
	var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;
	var NativePromiseConstructor$2 = promiseNativeConstructor;

	NativePromiseConstructor$2 && NativePromiseConstructor$2.prototype;

	// `Promise.prototype.catch` method
	// https://tc39.es/ecma262/#sec-promise.prototype.catch
	$$F({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR$2, real: true }, {
	  'catch': function (onRejected) {
	    return this.then(undefined, onRejected);
	  }
	});

	var $$E = _export;
	var call$8 = functionCall;
	var aCallable$4 = aCallable$c;
	var newPromiseCapabilityModule$5 = newPromiseCapability$2;
	var perform$3 = perform$6;
	var iterate$2 = iterate$5;
	var PROMISE_STATICS_INCORRECT_ITERATION$2 = promiseStaticsIncorrectIteration;

	// `Promise.race` method
	// https://tc39.es/ecma262/#sec-promise.race
	$$E({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$2 }, {
	  race: function race(iterable) {
	    var C = this;
	    var capability = newPromiseCapabilityModule$5.f(C);
	    var reject = capability.reject;
	    var result = perform$3(function () {
	      var $promiseResolve = aCallable$4(C.resolve);
	      iterate$2(iterable, function (promise) {
	        call$8($promiseResolve, C, promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	var $$D = _export;
	var newPromiseCapabilityModule$4 = newPromiseCapability$2;
	var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR;

	// `Promise.reject` method
	// https://tc39.es/ecma262/#sec-promise.reject
	$$D({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR$1 }, {
	  reject: function reject(r) {
	    var capability = newPromiseCapabilityModule$4.f(this);
	    var capabilityReject = capability.reject;
	    capabilityReject(r);
	    return capability.promise;
	  }
	});

	var anObject$2 = anObject$b;
	var isObject$9 = isObject$k;
	var newPromiseCapability = newPromiseCapability$2;

	var promiseResolve$2 = function (C, x) {
	  anObject$2(C);
	  if (isObject$9(x) && x.constructor === C) return x;
	  var promiseCapability = newPromiseCapability.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};

	var $$C = _export;
	var getBuiltIn$8 = getBuiltIn$e;
	var IS_PURE = isPure;
	var NativePromiseConstructor$1 = promiseNativeConstructor;
	var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;
	var promiseResolve$1 = promiseResolve$2;

	var PromiseConstructorWrapper = getBuiltIn$8('Promise');
	var CHECK_WRAPPER = !FORCED_PROMISE_CONSTRUCTOR;

	// `Promise.resolve` method
	// https://tc39.es/ecma262/#sec-promise.resolve
	$$C({ target: 'Promise', stat: true, forced: IS_PURE  }, {
	  resolve: function resolve(x) {
	    return promiseResolve$1(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor$1 : this, x);
	  }
	});

	var $$B = _export;
	var call$7 = functionCall;
	var aCallable$3 = aCallable$c;
	var newPromiseCapabilityModule$3 = newPromiseCapability$2;
	var perform$2 = perform$6;
	var iterate$1 = iterate$5;
	var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration;

	// `Promise.allSettled` method
	// https://tc39.es/ecma262/#sec-promise.allsettled
	$$B({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$1 }, {
	  allSettled: function allSettled(iterable) {
	    var C = this;
	    var capability = newPromiseCapabilityModule$3.f(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform$2(function () {
	      var promiseResolve = aCallable$3(C.resolve);
	      var values = [];
	      var counter = 0;
	      var remaining = 1;
	      iterate$1(iterable, function (promise) {
	        var index = counter++;
	        var alreadyCalled = false;
	        remaining++;
	        call$7(promiseResolve, C, promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[index] = { status: 'fulfilled', value: value };
	          --remaining || resolve(values);
	        }, function (error) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[index] = { status: 'rejected', reason: error };
	          --remaining || resolve(values);
	        });
	      });
	      --remaining || resolve(values);
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	var $$A = _export;
	var call$6 = functionCall;
	var aCallable$2 = aCallable$c;
	var getBuiltIn$7 = getBuiltIn$e;
	var newPromiseCapabilityModule$2 = newPromiseCapability$2;
	var perform$1 = perform$6;
	var iterate = iterate$5;
	var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration;

	var PROMISE_ANY_ERROR = 'No one promise resolved';

	// `Promise.any` method
	// https://tc39.es/ecma262/#sec-promise.any
	$$A({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
	  any: function any(iterable) {
	    var C = this;
	    var AggregateError = getBuiltIn$7('AggregateError');
	    var capability = newPromiseCapabilityModule$2.f(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform$1(function () {
	      var promiseResolve = aCallable$2(C.resolve);
	      var errors = [];
	      var counter = 0;
	      var remaining = 1;
	      var alreadyResolved = false;
	      iterate(iterable, function (promise) {
	        var index = counter++;
	        var alreadyRejected = false;
	        remaining++;
	        call$6(promiseResolve, C, promise).then(function (value) {
	          if (alreadyRejected || alreadyResolved) return;
	          alreadyResolved = true;
	          resolve(value);
	        }, function (error) {
	          if (alreadyRejected || alreadyResolved) return;
	          alreadyRejected = true;
	          errors[index] = error;
	          --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
	        });
	      });
	      --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	var $$z = _export;
	var newPromiseCapabilityModule$1 = newPromiseCapability$2;

	// `Promise.withResolvers` method
	// https://github.com/tc39/proposal-promise-with-resolvers
	$$z({ target: 'Promise', stat: true }, {
	  withResolvers: function withResolvers() {
	    var promiseCapability = newPromiseCapabilityModule$1.f(this);
	    return {
	      promise: promiseCapability.promise,
	      resolve: promiseCapability.resolve,
	      reject: promiseCapability.reject
	    };
	  }
	});

	var $$y = _export;
	var NativePromiseConstructor = promiseNativeConstructor;
	var fails$e = fails$r;
	var getBuiltIn$6 = getBuiltIn$e;
	var isCallable$2 = isCallable$j;
	var speciesConstructor = speciesConstructor$2;
	var promiseResolve = promiseResolve$2;

	var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

	// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
	var NON_GENERIC = !!NativePromiseConstructor && fails$e(function () {
	  // eslint-disable-next-line unicorn/no-thenable -- required for testing
	  NativePromisePrototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
	});

	// `Promise.prototype.finally` method
	// https://tc39.es/ecma262/#sec-promise.prototype.finally
	$$y({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
	  'finally': function (onFinally) {
	    var C = speciesConstructor(this, getBuiltIn$6('Promise'));
	    var isFunction = isCallable$2(onFinally);
	    return this.then(
	      isFunction ? function (x) {
	        return promiseResolve(C, onFinally()).then(function () { return x; });
	      } : onFinally,
	      isFunction ? function (e) {
	        return promiseResolve(C, onFinally()).then(function () { throw e; });
	      } : onFinally
	    );
	  }
	});

	var uncurryThis$f = functionUncurryThis;
	var toIntegerOrInfinity$2 = toIntegerOrInfinity$5;
	var toString$a = toString$d;
	var requireObjectCoercible$5 = requireObjectCoercible$9;

	var charAt$2 = uncurryThis$f(''.charAt);
	var charCodeAt$1 = uncurryThis$f(''.charCodeAt);
	var stringSlice$1 = uncurryThis$f(''.slice);

	var createMethod$5 = function (CONVERT_TO_STRING) {
	  return function ($this, pos) {
	    var S = toString$a(requireObjectCoercible$5($this));
	    var position = toIntegerOrInfinity$2(pos);
	    var size = S.length;
	    var first, second;
	    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
	    first = charCodeAt$1(S, position);
	    return first < 0xD800 || first > 0xDBFF || position + 1 === size
	      || (second = charCodeAt$1(S, position + 1)) < 0xDC00 || second > 0xDFFF
	        ? CONVERT_TO_STRING
	          ? charAt$2(S, position)
	          : first
	        : CONVERT_TO_STRING
	          ? stringSlice$1(S, position, position + 2)
	          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
	  };
	};

	var stringMultibyte = {
	  // `String.prototype.codePointAt` method
	  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
	  codeAt: createMethod$5(false),
	  // `String.prototype.at` method
	  // https://github.com/mathiasbynens/String.prototype.at
	  charAt: createMethod$5(true)
	};

	var charAt$1 = stringMultibyte.charAt;
	var toString$9 = toString$d;
	var InternalStateModule$1 = internalState;
	var defineIterator = iteratorDefine;
	var createIterResultObject = createIterResultObject$2;

	var STRING_ITERATOR = 'String Iterator';
	var setInternalState$1 = InternalStateModule$1.set;
	var getInternalState$1 = InternalStateModule$1.getterFor(STRING_ITERATOR);

	// `String.prototype[@@iterator]` method
	// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
	defineIterator(String, 'String', function (iterated) {
	  setInternalState$1(this, {
	    type: STRING_ITERATOR,
	    string: toString$9(iterated),
	    index: 0
	  });
	// `%StringIteratorPrototype%.next` method
	// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
	}, function next() {
	  var state = getInternalState$1(this);
	  var string = state.string;
	  var index = state.index;
	  var point;
	  if (index >= string.length) return createIterResultObject(undefined, true);
	  point = charAt$1(string, index);
	  state.index += point.length;
	  return createIterResultObject(point, false);
	});

	var path$e = path$h;

	var promise$5 = path$e.Promise;

	// iterable DOM collections
	// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
	var domIterables = {
	  CSSRuleList: 0,
	  CSSStyleDeclaration: 0,
	  CSSValueList: 0,
	  ClientRectList: 0,
	  DOMRectList: 0,
	  DOMStringList: 0,
	  DOMTokenList: 1,
	  DataTransferItemList: 0,
	  FileList: 0,
	  HTMLAllCollection: 0,
	  HTMLCollection: 0,
	  HTMLFormElement: 0,
	  HTMLSelectElement: 0,
	  MediaList: 0,
	  MimeTypeArray: 0,
	  NamedNodeMap: 0,
	  NodeList: 1,
	  PaintRequestList: 0,
	  Plugin: 0,
	  PluginArray: 0,
	  SVGLengthList: 0,
	  SVGNumberList: 0,
	  SVGPathSegList: 0,
	  SVGPointList: 0,
	  SVGStringList: 0,
	  SVGTransformList: 0,
	  SourceBufferList: 0,
	  StyleSheetList: 0,
	  TextTrackCueList: 0,
	  TextTrackList: 0,
	  TouchList: 0
	};

	var DOMIterables$1 = domIterables;
	var global$4 = global$l;
	var setToStringTag$3 = setToStringTag$7;
	var Iterators = iterators;

	for (var COLLECTION_NAME in DOMIterables$1) {
	  setToStringTag$3(global$4[COLLECTION_NAME], COLLECTION_NAME);
	  Iterators[COLLECTION_NAME] = Iterators.Array;
	}

	var parent$W = promise$5;


	var promise$4 = parent$W;

	var parent$V = promise$4;


	var promise$3 = parent$V;

	var $$x = _export;
	var apply$5 = functionApply;
	var slice$8 = arraySlice$3;
	var newPromiseCapabilityModule = newPromiseCapability$2;
	var aCallable$1 = aCallable$c;
	var perform = perform$6;

	// `Promise.try` method
	// https://github.com/tc39/proposal-promise-try
	$$x({ target: 'Promise', stat: true, forced: true }, {
	  'try': function (callbackfn /* , ...args */) {
	    var args = slice$8(arguments, 1);
	    var promiseCapability = newPromiseCapabilityModule.f(this);
	    var result = perform(function () {
	      return apply$5(aCallable$1(callbackfn), undefined, args);
	    });
	    (result.error ? promiseCapability.reject : promiseCapability.resolve)(result.value);
	    return promiseCapability.promise;
	  }
	});

	var parent$U = promise$3;
	// TODO: Remove from `core-js@4`





	var promise$2 = parent$U;

	var promise$1 = promise$2;

	var _Promise$2 = /*@__PURE__*/getDefaultExportFromCjs(promise$1);

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
	    _Promise$2.resolve(value).then(_next, _throw);
	  }
	}
	function _asyncToGenerator(fn) {
	  return function () {
	    var self = this,
	      args = arguments;
	    return new _Promise$2(function (resolve, reject) {
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

	var classof$5 = classofRaw$2;

	// `IsArray` abstract operation
	// https://tc39.es/ecma262/#sec-isarray
	// eslint-disable-next-line es/no-array-isarray -- safe
	var isArray$o = Array.isArray || function isArray(argument) {
	  return classof$5(argument) === 'Array';
	};

	var $$w = _export;
	var isArray$n = isArray$o;

	// `Array.isArray` method
	// https://tc39.es/ecma262/#sec-array.isarray
	$$w({ target: 'Array', stat: true }, {
	  isArray: isArray$n
	});

	var path$d = path$h;

	var isArray$m = path$d.Array.isArray;

	var parent$T = isArray$m;

	var isArray$l = parent$T;

	var parent$S = isArray$l;

	var isArray$k = parent$S;

	var parent$R = isArray$k;

	var isArray$j = parent$R;

	var isArray$i = isArray$j;

	var _Array$isArray = /*@__PURE__*/getDefaultExportFromCjs(isArray$i);

	function _arrayWithHoles(arr) {
	  if (_Array$isArray(arr)) return arr;
	}

	var $TypeError$3 = TypeError;
	var MAX_SAFE_INTEGER$2 = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

	var doesNotExceedSafeInteger$2 = function (it) {
	  if (it > MAX_SAFE_INTEGER$2) throw $TypeError$3('Maximum allowed index exceeded');
	  return it;
	};

	var DESCRIPTORS$7 = descriptors;
	var definePropertyModule$1 = objectDefineProperty;
	var createPropertyDescriptor$1 = createPropertyDescriptor$7;

	var createProperty$4 = function (object, key, value) {
	  if (DESCRIPTORS$7) definePropertyModule$1.f(object, key, createPropertyDescriptor$1(0, value));
	  else object[key] = value;
	};

	var isArray$h = isArray$o;
	var isConstructor$2 = isConstructor$4;
	var isObject$8 = isObject$k;
	var wellKnownSymbol$a = wellKnownSymbol$o;

	var SPECIES$2 = wellKnownSymbol$a('species');
	var $Array$2 = Array;

	// a part of `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate
	var arraySpeciesConstructor$1 = function (originalArray) {
	  var C;
	  if (isArray$h(originalArray)) {
	    C = originalArray.constructor;
	    // cross-realm fallback
	    if (isConstructor$2(C) && (C === $Array$2 || isArray$h(C.prototype))) C = undefined;
	    else if (isObject$8(C)) {
	      C = C[SPECIES$2];
	      if (C === null) C = undefined;
	    }
	  } return C === undefined ? $Array$2 : C;
	};

	var arraySpeciesConstructor = arraySpeciesConstructor$1;

	// `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate
	var arraySpeciesCreate$2 = function (originalArray, length) {
	  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
	};

	var fails$d = fails$r;
	var wellKnownSymbol$9 = wellKnownSymbol$o;
	var V8_VERSION$1 = engineV8Version;

	var SPECIES$1 = wellKnownSymbol$9('species');

	var arrayMethodHasSpeciesSupport$4 = function (METHOD_NAME) {
	  // We can't use this feature detection in V8 since it causes
	  // deoptimization and serious performance degradation
	  // https://github.com/zloirock/core-js/issues/677
	  return V8_VERSION$1 >= 51 || !fails$d(function () {
	    var array = [];
	    var constructor = array.constructor = {};
	    constructor[SPECIES$1] = function () {
	      return { foo: 1 };
	    };
	    return array[METHOD_NAME](Boolean).foo !== 1;
	  });
	};

	var $$v = _export;
	var fails$c = fails$r;
	var isArray$g = isArray$o;
	var isObject$7 = isObject$k;
	var toObject$8 = toObject$b;
	var lengthOfArrayLike$6 = lengthOfArrayLike$9;
	var doesNotExceedSafeInteger$1 = doesNotExceedSafeInteger$2;
	var createProperty$3 = createProperty$4;
	var arraySpeciesCreate$1 = arraySpeciesCreate$2;
	var arrayMethodHasSpeciesSupport$3 = arrayMethodHasSpeciesSupport$4;
	var wellKnownSymbol$8 = wellKnownSymbol$o;
	var V8_VERSION = engineV8Version;

	var IS_CONCAT_SPREADABLE = wellKnownSymbol$8('isConcatSpreadable');

	// We can't use this feature detection in V8 since it causes
	// deoptimization and serious performance degradation
	// https://github.com/zloirock/core-js/issues/679
	var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails$c(function () {
	  var array = [];
	  array[IS_CONCAT_SPREADABLE] = false;
	  return array.concat()[0] !== array;
	});

	var isConcatSpreadable = function (O) {
	  if (!isObject$7(O)) return false;
	  var spreadable = O[IS_CONCAT_SPREADABLE];
	  return spreadable !== undefined ? !!spreadable : isArray$g(O);
	};

	var FORCED$6 = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport$3('concat');

	// `Array.prototype.concat` method
	// https://tc39.es/ecma262/#sec-array.prototype.concat
	// with adding support of @@isConcatSpreadable and @@species
	$$v({ target: 'Array', proto: true, arity: 1, forced: FORCED$6 }, {
	  // eslint-disable-next-line no-unused-vars -- required for `.length`
	  concat: function concat(arg) {
	    var O = toObject$8(this);
	    var A = arraySpeciesCreate$1(O, 0);
	    var n = 0;
	    var i, k, length, len, E;
	    for (i = -1, length = arguments.length; i < length; i++) {
	      E = i === -1 ? O : arguments[i];
	      if (isConcatSpreadable(E)) {
	        len = lengthOfArrayLike$6(E);
	        doesNotExceedSafeInteger$1(n + len);
	        for (k = 0; k < len; k++, n++) if (k in E) createProperty$3(A, n, E[k]);
	      } else {
	        doesNotExceedSafeInteger$1(n + 1);
	        createProperty$3(A, n++, E);
	      }
	    }
	    A.length = n;
	    return A;
	  }
	});

	var objectGetOwnPropertyNamesExternal = {};

	/* eslint-disable es/no-object-getownpropertynames -- safe */
	var classof$4 = classofRaw$2;
	var toIndexedObject$5 = toIndexedObject$b;
	var $getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
	var arraySlice$1 = arraySlice$3;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return $getOwnPropertyNames$1(it);
	  } catch (error) {
	    return arraySlice$1(windowNames);
	  }
	};

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
	  return windowNames && classof$4(it) === 'Window'
	    ? getWindowNames(it)
	    : $getOwnPropertyNames$1(toIndexedObject$5(it));
	};

	var wellKnownSymbolWrapped = {};

	var wellKnownSymbol$7 = wellKnownSymbol$o;

	wellKnownSymbolWrapped.f = wellKnownSymbol$7;

	var path$c = path$h;
	var hasOwn$4 = hasOwnProperty_1;
	var wrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;
	var defineProperty$b = objectDefineProperty.f;

	var wellKnownSymbolDefine = function (NAME) {
	  var Symbol = path$c.Symbol || (path$c.Symbol = {});
	  if (!hasOwn$4(Symbol, NAME)) defineProperty$b(Symbol, NAME, {
	    value: wrappedWellKnownSymbolModule$1.f(NAME)
	  });
	};

	var call$5 = functionCall;
	var getBuiltIn$5 = getBuiltIn$e;
	var wellKnownSymbol$6 = wellKnownSymbol$o;
	var defineBuiltIn$1 = defineBuiltIn$5;

	var symbolDefineToPrimitive = function () {
	  var Symbol = getBuiltIn$5('Symbol');
	  var SymbolPrototype = Symbol && Symbol.prototype;
	  var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
	  var TO_PRIMITIVE = wellKnownSymbol$6('toPrimitive');

	  if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
	    // `Symbol.prototype[@@toPrimitive]` method
	    // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
	    // eslint-disable-next-line no-unused-vars -- required for .length
	    defineBuiltIn$1(SymbolPrototype, TO_PRIMITIVE, function (hint) {
	      return call$5(valueOf, this);
	    }, { arity: 1 });
	  }
	};

	var bind$1 = functionBindContext;
	var uncurryThis$e = functionUncurryThis;
	var IndexedObject$2 = indexedObject;
	var toObject$7 = toObject$b;
	var lengthOfArrayLike$5 = lengthOfArrayLike$9;
	var arraySpeciesCreate = arraySpeciesCreate$2;

	var push$9 = uncurryThis$e([].push);

	// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
	var createMethod$4 = function (TYPE) {
	  var IS_MAP = TYPE === 1;
	  var IS_FILTER = TYPE === 2;
	  var IS_SOME = TYPE === 3;
	  var IS_EVERY = TYPE === 4;
	  var IS_FIND_INDEX = TYPE === 6;
	  var IS_FILTER_REJECT = TYPE === 7;
	  var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
	  return function ($this, callbackfn, that, specificCreate) {
	    var O = toObject$7($this);
	    var self = IndexedObject$2(O);
	    var length = lengthOfArrayLike$5(self);
	    var boundFunction = bind$1(callbackfn, that);
	    var index = 0;
	    var create = specificCreate || arraySpeciesCreate;
	    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
	    var value, result;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      value = self[index];
	      result = boundFunction(value, index, O);
	      if (TYPE) {
	        if (IS_MAP) target[index] = result; // map
	        else if (result) switch (TYPE) {
	          case 3: return true;              // some
	          case 5: return value;             // find
	          case 6: return index;             // findIndex
	          case 2: push$9(target, value);      // filter
	        } else switch (TYPE) {
	          case 4: return false;             // every
	          case 7: push$9(target, value);      // filterReject
	        }
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
	  };
	};

	var arrayIteration = {
	  // `Array.prototype.forEach` method
	  // https://tc39.es/ecma262/#sec-array.prototype.foreach
	  forEach: createMethod$4(0),
	  // `Array.prototype.map` method
	  // https://tc39.es/ecma262/#sec-array.prototype.map
	  map: createMethod$4(1),
	  // `Array.prototype.filter` method
	  // https://tc39.es/ecma262/#sec-array.prototype.filter
	  filter: createMethod$4(2),
	  // `Array.prototype.some` method
	  // https://tc39.es/ecma262/#sec-array.prototype.some
	  some: createMethod$4(3),
	  // `Array.prototype.every` method
	  // https://tc39.es/ecma262/#sec-array.prototype.every
	  every: createMethod$4(4),
	  // `Array.prototype.find` method
	  // https://tc39.es/ecma262/#sec-array.prototype.find
	  find: createMethod$4(5),
	  // `Array.prototype.findIndex` method
	  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
	  findIndex: createMethod$4(6),
	  // `Array.prototype.filterReject` method
	  // https://github.com/tc39/proposal-array-filtering
	  filterReject: createMethod$4(7)
	};

	var $$u = _export;
	var global$3 = global$l;
	var call$4 = functionCall;
	var uncurryThis$d = functionUncurryThis;
	var DESCRIPTORS$6 = descriptors;
	var NATIVE_SYMBOL$3 = symbolConstructorDetection;
	var fails$b = fails$r;
	var hasOwn$3 = hasOwnProperty_1;
	var isPrototypeOf$d = objectIsPrototypeOf;
	var anObject$1 = anObject$b;
	var toIndexedObject$4 = toIndexedObject$b;
	var toPropertyKey$1 = toPropertyKey$4;
	var $toString = toString$d;
	var createPropertyDescriptor = createPropertyDescriptor$7;
	var nativeObjectCreate = objectCreate;
	var objectKeys$2 = objectKeys$4;
	var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
	var getOwnPropertyNamesExternal = objectGetOwnPropertyNamesExternal;
	var getOwnPropertySymbolsModule$2 = objectGetOwnPropertySymbols;
	var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor;
	var definePropertyModule = objectDefineProperty;
	var definePropertiesModule = objectDefineProperties;
	var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
	var defineBuiltIn = defineBuiltIn$5;
	var defineBuiltInAccessor = defineBuiltInAccessor$2;
	var shared$3 = shared$7;
	var sharedKey = sharedKey$4;
	var hiddenKeys = hiddenKeys$5;
	var uid = uid$3;
	var wellKnownSymbol$5 = wellKnownSymbol$o;
	var wrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
	var defineWellKnownSymbol$m = wellKnownSymbolDefine;
	var defineSymbolToPrimitive$1 = symbolDefineToPrimitive;
	var setToStringTag$2 = setToStringTag$7;
	var InternalStateModule = internalState;
	var $forEach$1 = arrayIteration.forEach;

	var HIDDEN = sharedKey('hidden');
	var SYMBOL = 'Symbol';
	var PROTOTYPE = 'prototype';

	var setInternalState = InternalStateModule.set;
	var getInternalState = InternalStateModule.getterFor(SYMBOL);

	var ObjectPrototype = Object[PROTOTYPE];
	var $Symbol = global$3.Symbol;
	var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
	var RangeError$1 = global$3.RangeError;
	var TypeError$1 = global$3.TypeError;
	var QObject = global$3.QObject;
	var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule$1.f;
	var nativeDefineProperty = definePropertyModule.f;
	var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
	var nativePropertyIsEnumerable = propertyIsEnumerableModule$1.f;
	var push$8 = uncurryThis$d([].push);

	var AllSymbols = shared$3('symbols');
	var ObjectPrototypeSymbols = shared$3('op-symbols');
	var WellKnownSymbolsStore$1 = shared$3('wks');

	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var fallbackDefineProperty = function (O, P, Attributes) {
	  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
	  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
	  nativeDefineProperty(O, P, Attributes);
	  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
	    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
	  }
	};

	var setSymbolDescriptor = DESCRIPTORS$6 && fails$b(function () {
	  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
	    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
	  })).a !== 7;
	}) ? fallbackDefineProperty : nativeDefineProperty;

	var wrap = function (tag, description) {
	  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
	  setInternalState(symbol, {
	    type: SYMBOL,
	    tag: tag,
	    description: description
	  });
	  if (!DESCRIPTORS$6) symbol.description = description;
	  return symbol;
	};

	var $defineProperty = function defineProperty(O, P, Attributes) {
	  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
	  anObject$1(O);
	  var key = toPropertyKey$1(P);
	  anObject$1(Attributes);
	  if (hasOwn$3(AllSymbols, key)) {
	    if (!Attributes.enumerable) {
	      if (!hasOwn$3(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, nativeObjectCreate(null)));
	      O[HIDDEN][key] = true;
	    } else {
	      if (hasOwn$3(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
	      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
	    } return setSymbolDescriptor(O, key, Attributes);
	  } return nativeDefineProperty(O, key, Attributes);
	};

	var $defineProperties = function defineProperties(O, Properties) {
	  anObject$1(O);
	  var properties = toIndexedObject$4(Properties);
	  var keys = objectKeys$2(properties).concat($getOwnPropertySymbols(properties));
	  $forEach$1(keys, function (key) {
	    if (!DESCRIPTORS$6 || call$4($propertyIsEnumerable$1, properties, key)) $defineProperty(O, key, properties[key]);
	  });
	  return O;
	};

	var $create = function create(O, Properties) {
	  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
	};

	var $propertyIsEnumerable$1 = function propertyIsEnumerable(V) {
	  var P = toPropertyKey$1(V);
	  var enumerable = call$4(nativePropertyIsEnumerable, this, P);
	  if (this === ObjectPrototype && hasOwn$3(AllSymbols, P) && !hasOwn$3(ObjectPrototypeSymbols, P)) return false;
	  return enumerable || !hasOwn$3(this, P) || !hasOwn$3(AllSymbols, P) || hasOwn$3(this, HIDDEN) && this[HIDDEN][P]
	    ? enumerable : true;
	};

	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
	  var it = toIndexedObject$4(O);
	  var key = toPropertyKey$1(P);
	  if (it === ObjectPrototype && hasOwn$3(AllSymbols, key) && !hasOwn$3(ObjectPrototypeSymbols, key)) return;
	  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
	  if (descriptor && hasOwn$3(AllSymbols, key) && !(hasOwn$3(it, HIDDEN) && it[HIDDEN][key])) {
	    descriptor.enumerable = true;
	  }
	  return descriptor;
	};

	var $getOwnPropertyNames = function getOwnPropertyNames(O) {
	  var names = nativeGetOwnPropertyNames(toIndexedObject$4(O));
	  var result = [];
	  $forEach$1(names, function (key) {
	    if (!hasOwn$3(AllSymbols, key) && !hasOwn$3(hiddenKeys, key)) push$8(result, key);
	  });
	  return result;
	};

	var $getOwnPropertySymbols = function (O) {
	  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
	  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$4(O));
	  var result = [];
	  $forEach$1(names, function (key) {
	    if (hasOwn$3(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn$3(ObjectPrototype, key))) {
	      push$8(result, AllSymbols[key]);
	    }
	  });
	  return result;
	};

	// `Symbol` constructor
	// https://tc39.es/ecma262/#sec-symbol-constructor
	if (!NATIVE_SYMBOL$3) {
	  $Symbol = function Symbol() {
	    if (isPrototypeOf$d(SymbolPrototype, this)) throw new TypeError$1('Symbol is not a constructor');
	    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
	    var tag = uid(description);
	    var setter = function (value) {
	      var $this = this === undefined ? global$3 : this;
	      if ($this === ObjectPrototype) call$4(setter, ObjectPrototypeSymbols, value);
	      if (hasOwn$3($this, HIDDEN) && hasOwn$3($this[HIDDEN], tag)) $this[HIDDEN][tag] = false;
	      var descriptor = createPropertyDescriptor(1, value);
	      try {
	        setSymbolDescriptor($this, tag, descriptor);
	      } catch (error) {
	        if (!(error instanceof RangeError$1)) throw error;
	        fallbackDefineProperty($this, tag, descriptor);
	      }
	    };
	    if (DESCRIPTORS$6 && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
	    return wrap(tag, description);
	  };

	  SymbolPrototype = $Symbol[PROTOTYPE];

	  defineBuiltIn(SymbolPrototype, 'toString', function toString() {
	    return getInternalState(this).tag;
	  });

	  defineBuiltIn($Symbol, 'withoutSetter', function (description) {
	    return wrap(uid(description), description);
	  });

	  propertyIsEnumerableModule$1.f = $propertyIsEnumerable$1;
	  definePropertyModule.f = $defineProperty;
	  definePropertiesModule.f = $defineProperties;
	  getOwnPropertyDescriptorModule$1.f = $getOwnPropertyDescriptor;
	  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
	  getOwnPropertySymbolsModule$2.f = $getOwnPropertySymbols;

	  wrappedWellKnownSymbolModule.f = function (name) {
	    return wrap(wellKnownSymbol$5(name), name);
	  };

	  if (DESCRIPTORS$6) {
	    // https://github.com/tc39/proposal-Symbol-description
	    defineBuiltInAccessor(SymbolPrototype, 'description', {
	      configurable: true,
	      get: function description() {
	        return getInternalState(this).description;
	      }
	    });
	  }
	}

	$$u({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL$3, sham: !NATIVE_SYMBOL$3 }, {
	  Symbol: $Symbol
	});

	$forEach$1(objectKeys$2(WellKnownSymbolsStore$1), function (name) {
	  defineWellKnownSymbol$m(name);
	});

	$$u({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL$3 }, {
	  useSetter: function () { USE_SETTER = true; },
	  useSimple: function () { USE_SETTER = false; }
	});

	$$u({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL$3, sham: !DESCRIPTORS$6 }, {
	  // `Object.create` method
	  // https://tc39.es/ecma262/#sec-object.create
	  create: $create,
	  // `Object.defineProperty` method
	  // https://tc39.es/ecma262/#sec-object.defineproperty
	  defineProperty: $defineProperty,
	  // `Object.defineProperties` method
	  // https://tc39.es/ecma262/#sec-object.defineproperties
	  defineProperties: $defineProperties,
	  // `Object.getOwnPropertyDescriptor` method
	  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
	});

	$$u({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL$3 }, {
	  // `Object.getOwnPropertyNames` method
	  // https://tc39.es/ecma262/#sec-object.getownpropertynames
	  getOwnPropertyNames: $getOwnPropertyNames
	});

	// `Symbol.prototype[@@toPrimitive]` method
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
	defineSymbolToPrimitive$1();

	// `Symbol.prototype[@@toStringTag]` property
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
	setToStringTag$2($Symbol, SYMBOL);

	hiddenKeys[HIDDEN] = true;

	var NATIVE_SYMBOL$2 = symbolConstructorDetection;

	/* eslint-disable es/no-symbol -- safe */
	var symbolRegistryDetection = NATIVE_SYMBOL$2 && !!Symbol['for'] && !!Symbol.keyFor;

	var $$t = _export;
	var getBuiltIn$4 = getBuiltIn$e;
	var hasOwn$2 = hasOwnProperty_1;
	var toString$8 = toString$d;
	var shared$2 = shared$7;
	var NATIVE_SYMBOL_REGISTRY$1 = symbolRegistryDetection;

	var StringToSymbolRegistry = shared$2('string-to-symbol-registry');
	var SymbolToStringRegistry$1 = shared$2('symbol-to-string-registry');

	// `Symbol.for` method
	// https://tc39.es/ecma262/#sec-symbol.for
	$$t({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY$1 }, {
	  'for': function (key) {
	    var string = toString$8(key);
	    if (hasOwn$2(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
	    var symbol = getBuiltIn$4('Symbol')(string);
	    StringToSymbolRegistry[string] = symbol;
	    SymbolToStringRegistry$1[symbol] = string;
	    return symbol;
	  }
	});

	var $$s = _export;
	var hasOwn$1 = hasOwnProperty_1;
	var isSymbol$7 = isSymbol$a;
	var tryToString = tryToString$5;
	var shared$1 = shared$7;
	var NATIVE_SYMBOL_REGISTRY = symbolRegistryDetection;

	var SymbolToStringRegistry = shared$1('symbol-to-string-registry');

	// `Symbol.keyFor` method
	// https://tc39.es/ecma262/#sec-symbol.keyfor
	$$s({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
	  keyFor: function keyFor(sym) {
	    if (!isSymbol$7(sym)) throw new TypeError(tryToString(sym) + ' is not a symbol');
	    if (hasOwn$1(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
	  }
	});

	var uncurryThis$c = functionUncurryThis;
	var isArray$f = isArray$o;
	var isCallable$1 = isCallable$j;
	var classof$3 = classofRaw$2;
	var toString$7 = toString$d;

	var push$7 = uncurryThis$c([].push);

	var getJsonReplacerFunction = function (replacer) {
	  if (isCallable$1(replacer)) return replacer;
	  if (!isArray$f(replacer)) return;
	  var rawLength = replacer.length;
	  var keys = [];
	  for (var i = 0; i < rawLength; i++) {
	    var element = replacer[i];
	    if (typeof element == 'string') push$7(keys, element);
	    else if (typeof element == 'number' || classof$3(element) === 'Number' || classof$3(element) === 'String') push$7(keys, toString$7(element));
	  }
	  var keysLength = keys.length;
	  var root = true;
	  return function (key, value) {
	    if (root) {
	      root = false;
	      return value;
	    }
	    if (isArray$f(this)) return value;
	    for (var j = 0; j < keysLength; j++) if (keys[j] === key) return value;
	  };
	};

	var $$r = _export;
	var getBuiltIn$3 = getBuiltIn$e;
	var apply$4 = functionApply;
	var call$3 = functionCall;
	var uncurryThis$b = functionUncurryThis;
	var fails$a = fails$r;
	var isCallable = isCallable$j;
	var isSymbol$6 = isSymbol$a;
	var arraySlice = arraySlice$3;
	var getReplacerFunction = getJsonReplacerFunction;
	var NATIVE_SYMBOL$1 = symbolConstructorDetection;

	var $String = String;
	var $stringify = getBuiltIn$3('JSON', 'stringify');
	var exec = uncurryThis$b(/./.exec);
	var charAt = uncurryThis$b(''.charAt);
	var charCodeAt = uncurryThis$b(''.charCodeAt);
	var replace$1 = uncurryThis$b(''.replace);
	var numberToString = uncurryThis$b(1.0.toString);

	var tester = /[\uD800-\uDFFF]/g;
	var low = /^[\uD800-\uDBFF]$/;
	var hi = /^[\uDC00-\uDFFF]$/;

	var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL$1 || fails$a(function () {
	  var symbol = getBuiltIn$3('Symbol')('stringify detection');
	  // MS Edge converts symbol values to JSON as {}
	  return $stringify([symbol]) !== '[null]'
	    // WebKit converts symbol values to JSON as null
	    || $stringify({ a: symbol }) !== '{}'
	    // V8 throws on boxed symbols
	    || $stringify(Object(symbol)) !== '{}';
	});

	// https://github.com/tc39/proposal-well-formed-stringify
	var ILL_FORMED_UNICODE = fails$a(function () {
	  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
	    || $stringify('\uDEAD') !== '"\\udead"';
	});

	var stringifyWithSymbolsFix = function (it, replacer) {
	  var args = arraySlice(arguments);
	  var $replacer = getReplacerFunction(replacer);
	  if (!isCallable($replacer) && (it === undefined || isSymbol$6(it))) return; // IE8 returns string on undefined
	  args[1] = function (key, value) {
	    // some old implementations (like WebKit) could pass numbers as keys
	    if (isCallable($replacer)) value = call$3($replacer, this, $String(key), value);
	    if (!isSymbol$6(value)) return value;
	  };
	  return apply$4($stringify, null, args);
	};

	var fixIllFormed = function (match, offset, string) {
	  var prev = charAt(string, offset - 1);
	  var next = charAt(string, offset + 1);
	  if ((exec(low, match) && !exec(hi, next)) || (exec(hi, match) && !exec(low, prev))) {
	    return '\\u' + numberToString(charCodeAt(match, 0), 16);
	  } return match;
	};

	if ($stringify) {
	  // `JSON.stringify` method
	  // https://tc39.es/ecma262/#sec-json.stringify
	  $$r({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
	    // eslint-disable-next-line no-unused-vars -- required for `.length`
	    stringify: function stringify(it, replacer, space) {
	      var args = arraySlice(arguments);
	      var result = apply$4(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
	      return ILL_FORMED_UNICODE && typeof result == 'string' ? replace$1(result, tester, fixIllFormed) : result;
	    }
	  });
	}

	var $$q = _export;
	var NATIVE_SYMBOL = symbolConstructorDetection;
	var fails$9 = fails$r;
	var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
	var toObject$6 = toObject$b;

	// V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
	// https://bugs.chromium.org/p/v8/issues/detail?id=3443
	var FORCED$5 = !NATIVE_SYMBOL || fails$9(function () { getOwnPropertySymbolsModule$1.f(1); });

	// `Object.getOwnPropertySymbols` method
	// https://tc39.es/ecma262/#sec-object.getownpropertysymbols
	$$q({ target: 'Object', stat: true, forced: FORCED$5 }, {
	  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
	    var $getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
	    return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject$6(it)) : [];
	  }
	});

	var defineWellKnownSymbol$l = wellKnownSymbolDefine;

	// `Symbol.asyncIterator` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.asynciterator
	defineWellKnownSymbol$l('asyncIterator');

	var defineWellKnownSymbol$k = wellKnownSymbolDefine;

	// `Symbol.hasInstance` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.hasinstance
	defineWellKnownSymbol$k('hasInstance');

	var defineWellKnownSymbol$j = wellKnownSymbolDefine;

	// `Symbol.isConcatSpreadable` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.isconcatspreadable
	defineWellKnownSymbol$j('isConcatSpreadable');

	var defineWellKnownSymbol$i = wellKnownSymbolDefine;

	// `Symbol.iterator` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.iterator
	defineWellKnownSymbol$i('iterator');

	var defineWellKnownSymbol$h = wellKnownSymbolDefine;

	// `Symbol.match` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.match
	defineWellKnownSymbol$h('match');

	var defineWellKnownSymbol$g = wellKnownSymbolDefine;

	// `Symbol.matchAll` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.matchall
	defineWellKnownSymbol$g('matchAll');

	var defineWellKnownSymbol$f = wellKnownSymbolDefine;

	// `Symbol.replace` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.replace
	defineWellKnownSymbol$f('replace');

	var defineWellKnownSymbol$e = wellKnownSymbolDefine;

	// `Symbol.search` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.search
	defineWellKnownSymbol$e('search');

	var defineWellKnownSymbol$d = wellKnownSymbolDefine;

	// `Symbol.species` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.species
	defineWellKnownSymbol$d('species');

	var defineWellKnownSymbol$c = wellKnownSymbolDefine;

	// `Symbol.split` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.split
	defineWellKnownSymbol$c('split');

	var defineWellKnownSymbol$b = wellKnownSymbolDefine;
	var defineSymbolToPrimitive = symbolDefineToPrimitive;

	// `Symbol.toPrimitive` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.toprimitive
	defineWellKnownSymbol$b('toPrimitive');

	// `Symbol.prototype[@@toPrimitive]` method
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
	defineSymbolToPrimitive();

	var getBuiltIn$2 = getBuiltIn$e;
	var defineWellKnownSymbol$a = wellKnownSymbolDefine;
	var setToStringTag$1 = setToStringTag$7;

	// `Symbol.toStringTag` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.tostringtag
	defineWellKnownSymbol$a('toStringTag');

	// `Symbol.prototype[@@toStringTag]` property
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
	setToStringTag$1(getBuiltIn$2('Symbol'), 'Symbol');

	var defineWellKnownSymbol$9 = wellKnownSymbolDefine;

	// `Symbol.unscopables` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.unscopables
	defineWellKnownSymbol$9('unscopables');

	var global$2 = global$l;
	var setToStringTag = setToStringTag$7;

	// JSON[@@toStringTag] property
	// https://tc39.es/ecma262/#sec-json-@@tostringtag
	setToStringTag(global$2.JSON, 'JSON', true);

	var path$b = path$h;

	var symbol$5 = path$b.Symbol;

	var parent$Q = symbol$5;


	var symbol$4 = parent$Q;

	var wellKnownSymbol$4 = wellKnownSymbol$o;
	var defineProperty$a = objectDefineProperty.f;

	var METADATA = wellKnownSymbol$4('metadata');
	var FunctionPrototype = Function.prototype;

	// Function.prototype[@@metadata]
	// https://github.com/tc39/proposal-decorator-metadata
	if (FunctionPrototype[METADATA] === undefined) {
	  defineProperty$a(FunctionPrototype, METADATA, {
	    value: null
	  });
	}

	var defineWellKnownSymbol$8 = wellKnownSymbolDefine;

	// `Symbol.asyncDispose` well-known symbol
	// https://github.com/tc39/proposal-async-explicit-resource-management
	defineWellKnownSymbol$8('asyncDispose');

	var defineWellKnownSymbol$7 = wellKnownSymbolDefine;

	// `Symbol.dispose` well-known symbol
	// https://github.com/tc39/proposal-explicit-resource-management
	defineWellKnownSymbol$7('dispose');

	var defineWellKnownSymbol$6 = wellKnownSymbolDefine;

	// `Symbol.metadata` well-known symbol
	// https://github.com/tc39/proposal-decorators
	defineWellKnownSymbol$6('metadata');

	var parent$P = symbol$4;






	var symbol$3 = parent$P;

	var getBuiltIn$1 = getBuiltIn$e;
	var uncurryThis$a = functionUncurryThis;

	var Symbol$8 = getBuiltIn$1('Symbol');
	var keyFor = Symbol$8.keyFor;
	var thisSymbolValue$1 = uncurryThis$a(Symbol$8.prototype.valueOf);

	// `Symbol.isRegisteredSymbol` method
	// https://tc39.es/proposal-symbol-predicates/#sec-symbol-isregisteredsymbol
	var symbolIsRegistered = Symbol$8.isRegisteredSymbol || function isRegisteredSymbol(value) {
	  try {
	    return keyFor(thisSymbolValue$1(value)) !== undefined;
	  } catch (error) {
	    return false;
	  }
	};

	var $$p = _export;
	var isRegisteredSymbol$1 = symbolIsRegistered;

	// `Symbol.isRegisteredSymbol` method
	// https://tc39.es/proposal-symbol-predicates/#sec-symbol-isregisteredsymbol
	$$p({ target: 'Symbol', stat: true }, {
	  isRegisteredSymbol: isRegisteredSymbol$1
	});

	var shared = shared$7;
	var getBuiltIn = getBuiltIn$e;
	var uncurryThis$9 = functionUncurryThis;
	var isSymbol$5 = isSymbol$a;
	var wellKnownSymbol$3 = wellKnownSymbol$o;

	var Symbol$7 = getBuiltIn('Symbol');
	var $isWellKnownSymbol = Symbol$7.isWellKnownSymbol;
	var getOwnPropertyNames = getBuiltIn('Object', 'getOwnPropertyNames');
	var thisSymbolValue = uncurryThis$9(Symbol$7.prototype.valueOf);
	var WellKnownSymbolsStore = shared('wks');

	for (var i = 0, symbolKeys = getOwnPropertyNames(Symbol$7), symbolKeysLength = symbolKeys.length; i < symbolKeysLength; i++) {
	  // some old engines throws on access to some keys like `arguments` or `caller`
	  try {
	    var symbolKey = symbolKeys[i];
	    if (isSymbol$5(Symbol$7[symbolKey])) wellKnownSymbol$3(symbolKey);
	  } catch (error) { /* empty */ }
	}

	// `Symbol.isWellKnownSymbol` method
	// https://tc39.es/proposal-symbol-predicates/#sec-symbol-iswellknownsymbol
	// We should patch it for newly added well-known symbols. If it's not required, this module just will not be injected
	var symbolIsWellKnown = function isWellKnownSymbol(value) {
	  if ($isWellKnownSymbol && $isWellKnownSymbol(value)) return true;
	  try {
	    var symbol = thisSymbolValue(value);
	    for (var j = 0, keys = getOwnPropertyNames(WellKnownSymbolsStore), keysLength = keys.length; j < keysLength; j++) {
	      // eslint-disable-next-line eqeqeq -- polyfilled symbols case
	      if (WellKnownSymbolsStore[keys[j]] == symbol) return true;
	    }
	  } catch (error) { /* empty */ }
	  return false;
	};

	var $$o = _export;
	var isWellKnownSymbol$1 = symbolIsWellKnown;

	// `Symbol.isWellKnownSymbol` method
	// https://tc39.es/proposal-symbol-predicates/#sec-symbol-iswellknownsymbol
	// We should patch it for newly added well-known symbols. If it's not required, this module just will not be injected
	$$o({ target: 'Symbol', stat: true, forced: true }, {
	  isWellKnownSymbol: isWellKnownSymbol$1
	});

	var defineWellKnownSymbol$5 = wellKnownSymbolDefine;

	// `Symbol.customMatcher` well-known symbol
	// https://github.com/tc39/proposal-pattern-matching
	defineWellKnownSymbol$5('customMatcher');

	var defineWellKnownSymbol$4 = wellKnownSymbolDefine;

	// `Symbol.observable` well-known symbol
	// https://github.com/tc39/proposal-observable
	defineWellKnownSymbol$4('observable');

	var $$n = _export;
	var isRegisteredSymbol = symbolIsRegistered;

	// `Symbol.isRegistered` method
	// obsolete version of https://tc39.es/proposal-symbol-predicates/#sec-symbol-isregisteredsymbol
	$$n({ target: 'Symbol', stat: true, name: 'isRegisteredSymbol' }, {
	  isRegistered: isRegisteredSymbol
	});

	var $$m = _export;
	var isWellKnownSymbol = symbolIsWellKnown;

	// `Symbol.isWellKnown` method
	// obsolete version of https://tc39.es/proposal-symbol-predicates/#sec-symbol-iswellknownsymbol
	// We should patch it for newly added well-known symbols. If it's not required, this module just will not be injected
	$$m({ target: 'Symbol', stat: true, name: 'isWellKnownSymbol', forced: true }, {
	  isWellKnown: isWellKnownSymbol
	});

	var defineWellKnownSymbol$3 = wellKnownSymbolDefine;

	// `Symbol.matcher` well-known symbol
	// https://github.com/tc39/proposal-pattern-matching
	defineWellKnownSymbol$3('matcher');

	// TODO: Remove from `core-js@4`
	var defineWellKnownSymbol$2 = wellKnownSymbolDefine;

	// `Symbol.metadataKey` well-known symbol
	// https://github.com/tc39/proposal-decorator-metadata
	defineWellKnownSymbol$2('metadataKey');

	// TODO: remove from `core-js@4`
	var defineWellKnownSymbol$1 = wellKnownSymbolDefine;

	// `Symbol.patternMatch` well-known symbol
	// https://github.com/tc39/proposal-pattern-matching
	defineWellKnownSymbol$1('patternMatch');

	// TODO: remove from `core-js@4`
	var defineWellKnownSymbol = wellKnownSymbolDefine;

	defineWellKnownSymbol('replaceAll');

	var parent$O = symbol$3;




	// TODO: Remove from `core-js@4`







	var symbol$2 = parent$O;

	var symbol$1 = symbol$2;

	var _Symbol$2 = /*@__PURE__*/getDefaultExportFromCjs(symbol$1);

	var getIteratorMethod$5 = getIteratorMethod$8;

	var getIteratorMethod_1 = getIteratorMethod$5;

	var parent$N = getIteratorMethod_1;


	var getIteratorMethod$4 = parent$N;

	var parent$M = getIteratorMethod$4;

	var getIteratorMethod$3 = parent$M;

	var parent$L = getIteratorMethod$3;

	var getIteratorMethod$2 = parent$L;

	var getIteratorMethod$1 = getIteratorMethod$2;

	var _getIteratorMethod = /*@__PURE__*/getDefaultExportFromCjs(getIteratorMethod$1);

	var DESCRIPTORS$5 = descriptors;
	var isArray$e = isArray$o;

	var $TypeError$2 = TypeError;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

	// Safari < 13 does not throw an error in this case
	var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS$5 && !function () {
	  // makes no sense without proper strict mode support
	  if (this !== undefined) return true;
	  try {
	    // eslint-disable-next-line es/no-object-defineproperty -- safe
	    Object.defineProperty([], 'length', { writable: false }).length = 1;
	  } catch (error) {
	    return error instanceof TypeError;
	  }
	}();

	var arraySetLength = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
	  if (isArray$e(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
	    throw new $TypeError$2('Cannot set read only .length');
	  } return O.length = length;
	} : function (O, length) {
	  return O.length = length;
	};

	var $$l = _export;
	var toObject$5 = toObject$b;
	var lengthOfArrayLike$4 = lengthOfArrayLike$9;
	var setArrayLength = arraySetLength;
	var doesNotExceedSafeInteger = doesNotExceedSafeInteger$2;
	var fails$8 = fails$r;

	var INCORRECT_TO_LENGTH = fails$8(function () {
	  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
	});

	// V8 <= 121 and Safari <= 15.4; FF < 23 throws InternalError
	// https://bugs.chromium.org/p/v8/issues/detail?id=12681
	var properErrorOnNonWritableLength = function () {
	  try {
	    // eslint-disable-next-line es/no-object-defineproperty -- safe
	    Object.defineProperty([], 'length', { writable: false }).push();
	  } catch (error) {
	    return error instanceof TypeError;
	  }
	};

	var FORCED$4 = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();

	// `Array.prototype.push` method
	// https://tc39.es/ecma262/#sec-array.prototype.push
	$$l({ target: 'Array', proto: true, arity: 1, forced: FORCED$4 }, {
	  // eslint-disable-next-line no-unused-vars -- required for `.length`
	  push: function push(item) {
	    var O = toObject$5(this);
	    var len = lengthOfArrayLike$4(O);
	    var argCount = arguments.length;
	    doesNotExceedSafeInteger(len + argCount);
	    for (var i = 0; i < argCount; i++) {
	      O[len] = arguments[i];
	      len++;
	    }
	    setArrayLength(O, len);
	    return len;
	  }
	});

	var global$1 = global$l;
	var path$a = path$h;

	var getBuiltInPrototypeMethod$e = function (CONSTRUCTOR, METHOD) {
	  var Namespace = path$a[CONSTRUCTOR + 'Prototype'];
	  var pureMethod = Namespace && Namespace[METHOD];
	  if (pureMethod) return pureMethod;
	  var NativeConstructor = global$1[CONSTRUCTOR];
	  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
	  return NativePrototype && NativePrototype[METHOD];
	};

	var getBuiltInPrototypeMethod$d = getBuiltInPrototypeMethod$e;

	var push$6 = getBuiltInPrototypeMethod$d('Array', 'push');

	var isPrototypeOf$c = objectIsPrototypeOf;
	var method$b = push$6;

	var ArrayPrototype$a = Array.prototype;

	var push$5 = function (it) {
	  var own = it.push;
	  return it === ArrayPrototype$a || (isPrototypeOf$c(ArrayPrototype$a, it) && own === ArrayPrototype$a.push) ? method$b : own;
	};

	var parent$K = push$5;

	var push$4 = parent$K;

	var parent$J = push$4;

	var push$3 = parent$J;

	var parent$I = push$3;

	var push$2 = parent$I;

	var push$1 = push$2;

	var _pushInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(push$1);

	function _iterableToArrayLimit(r, l) {
	  var t = null == r ? null : "undefined" != typeof _Symbol$2 && _getIteratorMethod(r) || r["@@iterator"];
	  if (null != t) {
	    var e,
	      n,
	      i,
	      u,
	      a = [],
	      f = !0,
	      o = !1;
	    try {
	      if (i = (t = t.call(r)).next, 0 === l) {
	        if (Object(t) !== t) return;
	        f = !1;
	      } else for (; !(f = (e = i.call(t)).done) && (_pushInstanceProperty(a).call(a, e.value), a.length !== l); f = !0);
	    } catch (r) {
	      o = !0, n = r;
	    } finally {
	      try {
	        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
	      } finally {
	        if (o) throw n;
	      }
	    }
	    return a;
	  }
	}

	var $$k = _export;
	var isArray$d = isArray$o;
	var isConstructor$1 = isConstructor$4;
	var isObject$6 = isObject$k;
	var toAbsoluteIndex = toAbsoluteIndex$2;
	var lengthOfArrayLike$3 = lengthOfArrayLike$9;
	var toIndexedObject$3 = toIndexedObject$b;
	var createProperty$2 = createProperty$4;
	var wellKnownSymbol$2 = wellKnownSymbol$o;
	var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$4;
	var nativeSlice = arraySlice$3;

	var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$2('slice');

	var SPECIES = wellKnownSymbol$2('species');
	var $Array$1 = Array;
	var max = Math.max;

	// `Array.prototype.slice` method
	// https://tc39.es/ecma262/#sec-array.prototype.slice
	// fallback for not array-like ES3 strings and DOM objects
	$$k({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$2 }, {
	  slice: function slice(start, end) {
	    var O = toIndexedObject$3(this);
	    var length = lengthOfArrayLike$3(O);
	    var k = toAbsoluteIndex(start, length);
	    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
	    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
	    var Constructor, result, n;
	    if (isArray$d(O)) {
	      Constructor = O.constructor;
	      // cross-realm fallback
	      if (isConstructor$1(Constructor) && (Constructor === $Array$1 || isArray$d(Constructor.prototype))) {
	        Constructor = undefined;
	      } else if (isObject$6(Constructor)) {
	        Constructor = Constructor[SPECIES];
	        if (Constructor === null) Constructor = undefined;
	      }
	      if (Constructor === $Array$1 || Constructor === undefined) {
	        return nativeSlice(O, k, fin);
	      }
	    }
	    result = new (Constructor === undefined ? $Array$1 : Constructor)(max(fin - k, 0));
	    for (n = 0; k < fin; k++, n++) if (k in O) createProperty$2(result, n, O[k]);
	    result.length = n;
	    return result;
	  }
	});

	var getBuiltInPrototypeMethod$c = getBuiltInPrototypeMethod$e;

	var slice$7 = getBuiltInPrototypeMethod$c('Array', 'slice');

	var isPrototypeOf$b = objectIsPrototypeOf;
	var method$a = slice$7;

	var ArrayPrototype$9 = Array.prototype;

	var slice$6 = function (it) {
	  var own = it.slice;
	  return it === ArrayPrototype$9 || (isPrototypeOf$b(ArrayPrototype$9, it) && own === ArrayPrototype$9.slice) ? method$a : own;
	};

	var parent$H = slice$6;

	var slice$5 = parent$H;

	var parent$G = slice$5;

	var slice$4 = parent$G;

	var parent$F = slice$4;

	var slice$3 = parent$F;

	var slice$2 = slice$3;

	var _sliceInstanceProperty$1 = /*@__PURE__*/getDefaultExportFromCjs(slice$2);

	var anObject = anObject$b;
	var iteratorClose = iteratorClose$2;

	// call something on iterator step with safe closing on error
	var callWithSafeIterationClosing$1 = function (iterator, fn, value, ENTRIES) {
	  try {
	    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
	  } catch (error) {
	    iteratorClose(iterator, 'throw', error);
	  }
	};

	var bind = functionBindContext;
	var call$2 = functionCall;
	var toObject$4 = toObject$b;
	var callWithSafeIterationClosing = callWithSafeIterationClosing$1;
	var isArrayIteratorMethod = isArrayIteratorMethod$2;
	var isConstructor = isConstructor$4;
	var lengthOfArrayLike$2 = lengthOfArrayLike$9;
	var createProperty$1 = createProperty$4;
	var getIterator = getIterator$2;
	var getIteratorMethod = getIteratorMethod$8;

	var $Array = Array;

	// `Array.from` method implementation
	// https://tc39.es/ecma262/#sec-array.from
	var arrayFrom = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	  var O = toObject$4(arrayLike);
	  var IS_CONSTRUCTOR = isConstructor(this);
	  var argumentsLength = arguments.length;
	  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
	  var mapping = mapfn !== undefined;
	  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
	  var iteratorMethod = getIteratorMethod(O);
	  var index = 0;
	  var length, result, step, iterator, next, value;
	  // if the target is not iterable or it's an array with the default iterator - use a simple case
	  if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
	    result = IS_CONSTRUCTOR ? new this() : [];
	    iterator = getIterator(O, iteratorMethod);
	    next = iterator.next;
	    for (;!(step = call$2(next, iterator)).done; index++) {
	      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
	      createProperty$1(result, index, value);
	    }
	  } else {
	    length = lengthOfArrayLike$2(O);
	    result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
	    for (;length > index; index++) {
	      value = mapping ? mapfn(O[index], index) : O[index];
	      createProperty$1(result, index, value);
	    }
	  }
	  result.length = index;
	  return result;
	};

	var $$j = _export;
	var from$6 = arrayFrom;
	var checkCorrectnessOfIteration = checkCorrectnessOfIteration$2;

	var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
	  // eslint-disable-next-line es/no-array-from -- required for testing
	  Array.from(iterable);
	});

	// `Array.from` method
	// https://tc39.es/ecma262/#sec-array.from
	$$j({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
	  from: from$6
	});

	var path$9 = path$h;

	var from$5 = path$9.Array.from;

	var parent$E = from$5;

	var from$4 = parent$E;

	var parent$D = from$4;

	var from$3 = parent$D;

	var parent$C = from$3;

	var from$2 = parent$C;

	var from$1 = from$2;

	var _Array$from$1 = /*@__PURE__*/getDefaultExportFromCjs(from$1);

	function _arrayLikeToArray$3(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;
	  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
	  return arr2;
	}

	function _unsupportedIterableToArray$3(o, minLen) {
	  var _context;
	  if (!o) return;
	  if (typeof o === "string") return _arrayLikeToArray$3(o, minLen);
	  var n = _sliceInstanceProperty$1(_context = Object.prototype.toString.call(o)).call(_context, 8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return _Array$from$1(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen);
	}

	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	function _slicedToArray(arr, i) {
	  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$3(arr, i) || _nonIterableRest();
	}

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

	var isArray$c = Array.isArray;

	var isArray_1 = isArray$c;

	var _isArray = /*@__PURE__*/getDefaultExportFromCjs(isArray_1);

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

	var _Symbol$1 = Symbol$6;

	var Symbol$5 = _Symbol$1;

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

	var Symbol$4 = _Symbol$1,
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

	function isObject$5(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	var isObject_1 = isObject$5;

	var _isObject = /*@__PURE__*/getDefaultExportFromCjs(isObject_1);

	var baseGetTag$6 = _baseGetTag,
	    isObject$4 = isObject_1;

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
	  if (!isObject$4(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag$6(value);
	  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	var isFunction_1 = isFunction$2;

	var _isFunction = /*@__PURE__*/getDefaultExportFromCjs(isFunction_1);

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
	    isObject$3 = isObject_1,
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
	  if (!isObject$3(value) || isMasked(value)) {
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

	var Symbol$3 = _Symbol$1,
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
	    isArray$b = isArray_1;

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
	  return isArray$b(object) ? result : arrayPush$1(result, symbolsFunc(object));
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
	var propertyIsEnumerable$2 = objectProto$7.propertyIsEnumerable;

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
	    return propertyIsEnumerable$2.call(object, symbol);
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
	var propertyIsEnumerable$1 = objectProto$6.propertyIsEnumerable;

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
	    !propertyIsEnumerable$1.call(value, 'callee');
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

	isBuffer$3.exports;

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
	} (isBuffer$3, isBuffer$3.exports));

	var isBufferExports = isBuffer$3.exports;

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

	_nodeUtil.exports;

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
	} (_nodeUtil, _nodeUtil.exports));

	var _nodeUtilExports = _nodeUtil.exports;

	var baseIsTypedArray = _baseIsTypedArray,
	    baseUnary$1 = _baseUnary,
	    nodeUtil = _nodeUtilExports;

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
	    isArray$a = isArray_1,
	    isBuffer$2 = isBufferExports,
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
	  var isArr = isArray$a(value),
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

	var _Promise$1 = Promise$2;

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
	    Promise$1 = _Promise$1,
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
	    isArray$9 = isArray_1,
	    isBuffer$1 = isBufferExports,
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
	  var objIsArr = isArray$9(object),
	      othIsArr = isArray$9(other),
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

	var isObject$2 = isObject_1;

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable$2(value) {
	  return value === value && !isObject$2(value);
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

	var isArray$8 = isArray_1,
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
	  if (isArray$8(value)) {
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

	var Symbol$2 = _Symbol$1,
	    arrayMap$1 = _arrayMap,
	    isArray$7 = isArray_1,
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
	  if (isArray$7(value)) {
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
	function toString$6(value) {
	  return value == null ? '' : baseToString(value);
	}

	var toString_1 = toString$6;

	var isArray$6 = isArray_1,
	    isKey$2 = _isKey,
	    stringToPath = _stringToPath,
	    toString$5 = toString_1;

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath$2(value, object) {
	  if (isArray$6(value)) {
	    return value;
	  }
	  return isKey$2(value, object) ? [value] : stringToPath(toString$5(value));
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
	    isArray$5 = isArray_1,
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
	    (isArray$5(object) || isArguments$2(object));
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
	    isArray$4 = isArray_1,
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
	    return isArray$4(value)
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
	    isObject$1 = isObject_1,
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
	  if (isObject$1(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject$1(other) ? (other + '') : other;
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

	var _find = /*@__PURE__*/getDefaultExportFromCjs(find_1);

	var regeneratorRuntime$1 = {exports: {}};

	var _typeof$1 = {exports: {}};

	var WrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;

	var iterator$4 = WrappedWellKnownSymbolModule$1.f('iterator');

	var parent$B = iterator$4;


	var iterator$3 = parent$B;

	var parent$A = iterator$3;

	var iterator$2 = parent$A;

	var parent$z = iterator$2;

	var iterator$1 = parent$z;

	var iterator = iterator$1;

	var _Symbol$iterator = /*@__PURE__*/getDefaultExportFromCjs(iterator);

	(function (module) {
		var _Symbol = symbol$1;
		var _Symbol$iterator = iterator;
		function _typeof(o) {
		  "@babel/helpers - typeof";

		  return (module.exports = _typeof = "function" == typeof _Symbol && "symbol" == typeof _Symbol$iterator ? function (o) {
		    return typeof o;
		  } : function (o) {
		    return o && "function" == typeof _Symbol && o.constructor === _Symbol && o !== _Symbol.prototype ? "symbol" : typeof o;
		  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
		}
		module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports; 
	} (_typeof$1));

	var _typeofExports = _typeof$1.exports;

	var defineProperty$9 = {exports: {}};

	var $$i = _export;
	var DESCRIPTORS$4 = descriptors;
	var defineProperty$8 = objectDefineProperty.f;

	// `Object.defineProperty` method
	// https://tc39.es/ecma262/#sec-object.defineproperty
	// eslint-disable-next-line es/no-object-defineproperty -- safe
	$$i({ target: 'Object', stat: true, forced: Object.defineProperty !== defineProperty$8, sham: !DESCRIPTORS$4 }, {
	  defineProperty: defineProperty$8
	});

	var path$8 = path$h;

	var Object$2 = path$8.Object;

	var defineProperty$7 = defineProperty$9.exports = function defineProperty(it, key, desc) {
	  return Object$2.defineProperty(it, key, desc);
	};

	if (Object$2.defineProperty.sham) defineProperty$7.sham = true;

	var definePropertyExports = defineProperty$9.exports;

	var parent$y = definePropertyExports;

	var defineProperty$6 = parent$y;

	var parent$x = defineProperty$6;

	var defineProperty$5 = parent$x;

	var parent$w = defineProperty$5;

	var defineProperty$4 = parent$w;

	var defineProperty$3 = defineProperty$4;

	var _Object$defineProperty = /*@__PURE__*/getDefaultExportFromCjs(defineProperty$3);

	// TODO: Remove from `core-js@4`
	var $$h = _export;
	var DESCRIPTORS$3 = descriptors;
	var create$6 = objectCreate;

	// `Object.create` method
	// https://tc39.es/ecma262/#sec-object.create
	$$h({ target: 'Object', stat: true, sham: !DESCRIPTORS$3 }, {
	  create: create$6
	});

	var path$7 = path$h;

	var Object$1 = path$7.Object;

	var create$5 = function create(P, D) {
	  return Object$1.create(P, D);
	};

	var parent$v = create$5;

	var create$4 = parent$v;

	var parent$u = create$4;

	var create$3 = parent$u;

	var parent$t = create$3;

	var create$2 = parent$t;

	var create$1 = create$2;

	var $$g = _export;
	var fails$7 = fails$r;
	var toObject$3 = toObject$b;
	var nativeGetPrototypeOf = objectGetPrototypeOf$1;
	var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

	var FAILS_ON_PRIMITIVES = fails$7(function () { nativeGetPrototypeOf(1); });

	// `Object.getPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.getprototypeof
	$$g({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
	  getPrototypeOf: function getPrototypeOf(it) {
	    return nativeGetPrototypeOf(toObject$3(it));
	  }
	});

	var path$6 = path$h;

	var getPrototypeOf$4 = path$6.Object.getPrototypeOf;

	var parent$s = getPrototypeOf$4;

	var getPrototypeOf$3 = parent$s;

	var parent$r = getPrototypeOf$3;

	var getPrototypeOf$2 = parent$r;

	var parent$q = getPrototypeOf$2;

	var getPrototypeOf$1 = parent$q;

	var getPrototypeOf = getPrototypeOf$1;

	var fails$6 = fails$r;

	var arrayMethodIsStrict$4 = function (METHOD_NAME, argument) {
	  var method = [][METHOD_NAME];
	  return !!method && fails$6(function () {
	    // eslint-disable-next-line no-useless-call -- required for testing
	    method.call(null, argument || function () { return 1; }, 1);
	  });
	};

	var $forEach = arrayIteration.forEach;
	var arrayMethodIsStrict$3 = arrayMethodIsStrict$4;

	var STRICT_METHOD$1 = arrayMethodIsStrict$3('forEach');

	// `Array.prototype.forEach` method implementation
	// https://tc39.es/ecma262/#sec-array.prototype.foreach
	var arrayForEach = !STRICT_METHOD$1 ? function forEach(callbackfn /* , thisArg */) {
	  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	// eslint-disable-next-line es/no-array-prototype-foreach -- safe
	} : [].forEach;

	var $$f = _export;
	var forEach$6 = arrayForEach;

	// `Array.prototype.forEach` method
	// https://tc39.es/ecma262/#sec-array.prototype.foreach
	// eslint-disable-next-line es/no-array-prototype-foreach -- safe
	$$f({ target: 'Array', proto: true, forced: [].forEach !== forEach$6 }, {
	  forEach: forEach$6
	});

	var getBuiltInPrototypeMethod$b = getBuiltInPrototypeMethod$e;

	var forEach$5 = getBuiltInPrototypeMethod$b('Array', 'forEach');

	var parent$p = forEach$5;

	var forEach$4 = parent$p;

	var classof$2 = classof$b;
	var hasOwn = hasOwnProperty_1;
	var isPrototypeOf$a = objectIsPrototypeOf;
	var method$9 = forEach$4;


	var ArrayPrototype$8 = Array.prototype;

	var DOMIterables = {
	  DOMTokenList: true,
	  NodeList: true
	};

	var forEach$3 = function (it) {
	  var own = it.forEach;
	  return it === ArrayPrototype$8 || (isPrototypeOf$a(ArrayPrototype$8, it) && own === ArrayPrototype$8.forEach)
	    || hasOwn(DOMIterables, classof$2(it)) ? method$9 : own;
	};

	var parent$o = forEach$3;

	var forEach$2 = parent$o;

	var parent$n = forEach$2;

	var forEach$1 = parent$n;

	var forEach = forEach$1;

	var $$e = _export;
	var setPrototypeOf$5 = objectSetPrototypeOf;

	// `Object.setPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.setprototypeof
	$$e({ target: 'Object', stat: true }, {
	  setPrototypeOf: setPrototypeOf$5
	});

	var path$5 = path$h;

	var setPrototypeOf$4 = path$5.Object.setPrototypeOf;

	var parent$m = setPrototypeOf$4;

	var setPrototypeOf$3 = parent$m;

	var parent$l = setPrototypeOf$3;

	var setPrototypeOf$2 = parent$l;

	var parent$k = setPrototypeOf$2;

	var setPrototypeOf$1 = parent$k;

	var setPrototypeOf = setPrototypeOf$1;

	var $$d = _export;
	var uncurryThis$8 = functionUncurryThis;
	var isArray$3 = isArray$o;

	var nativeReverse = uncurryThis$8([].reverse);
	var test = [1, 2];

	// `Array.prototype.reverse` method
	// https://tc39.es/ecma262/#sec-array.prototype.reverse
	// fix for Safari 12.0 bug
	// https://bugs.webkit.org/show_bug.cgi?id=188794
	$$d({ target: 'Array', proto: true, forced: String(test) === String(test.reverse()) }, {
	  reverse: function reverse() {
	    // eslint-disable-next-line no-self-assign -- dirty hack
	    if (isArray$3(this)) this.length = this.length;
	    return nativeReverse(this);
	  }
	});

	var getBuiltInPrototypeMethod$a = getBuiltInPrototypeMethod$e;

	var reverse$5 = getBuiltInPrototypeMethod$a('Array', 'reverse');

	var isPrototypeOf$9 = objectIsPrototypeOf;
	var method$8 = reverse$5;

	var ArrayPrototype$7 = Array.prototype;

	var reverse$4 = function (it) {
	  var own = it.reverse;
	  return it === ArrayPrototype$7 || (isPrototypeOf$9(ArrayPrototype$7, it) && own === ArrayPrototype$7.reverse) ? method$8 : own;
	};

	var parent$j = reverse$4;

	var reverse$3 = parent$j;

	var parent$i = reverse$3;

	var reverse$2 = parent$i;

	var parent$h = reverse$2;

	var reverse$1 = parent$h;

	var reverse = reverse$1;

	(function (module) {
		var _typeof = _typeofExports["default"];
		var _Object$defineProperty = defineProperty$3;
		var _Symbol = symbol$1;
		var _Object$create = create$1;
		var _Object$getPrototypeOf = getPrototypeOf;
		var _forEachInstanceProperty = forEach;
		var _pushInstanceProperty = push$1;
		var _Object$setPrototypeOf = setPrototypeOf;
		var _Promise = promise$1;
		var _reverseInstanceProperty = reverse;
		var _sliceInstanceProperty = slice$2;
		function _regeneratorRuntime() {
		  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
		    return e;
		  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
		  var t,
		    e = {},
		    r = Object.prototype,
		    n = r.hasOwnProperty,
		    o = _Object$defineProperty || function (t, e, r) {
		      t[e] = r.value;
		    },
		    i = "function" == typeof _Symbol ? _Symbol : {},
		    a = i.iterator || "@@iterator",
		    c = i.asyncIterator || "@@asyncIterator",
		    u = i.toStringTag || "@@toStringTag";
		  function define(t, e, r) {
		    return _Object$defineProperty(t, e, {
		      value: r,
		      enumerable: !0,
		      configurable: !0,
		      writable: !0
		    }), t[e];
		  }
		  try {
		    define({}, "");
		  } catch (t) {
		    define = function define(t, e, r) {
		      return t[e] = r;
		    };
		  }
		  function wrap(t, e, r, n) {
		    var i = e && e.prototype instanceof Generator ? e : Generator,
		      a = _Object$create(i.prototype),
		      c = new Context(n || []);
		    return o(a, "_invoke", {
		      value: makeInvokeMethod(t, r, c)
		    }), a;
		  }
		  function tryCatch(t, e, r) {
		    try {
		      return {
		        type: "normal",
		        arg: t.call(e, r)
		      };
		    } catch (t) {
		      return {
		        type: "throw",
		        arg: t
		      };
		    }
		  }
		  e.wrap = wrap;
		  var h = "suspendedStart",
		    l = "suspendedYield",
		    f = "executing",
		    s = "completed",
		    y = {};
		  function Generator() {}
		  function GeneratorFunction() {}
		  function GeneratorFunctionPrototype() {}
		  var p = {};
		  define(p, a, function () {
		    return this;
		  });
		  var d = _Object$getPrototypeOf,
		    v = d && d(d(values([])));
		  v && v !== r && n.call(v, a) && (p = v);
		  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = _Object$create(p);
		  function defineIteratorMethods(t) {
		    var _context;
		    _forEachInstanceProperty(_context = ["next", "throw", "return"]).call(_context, function (e) {
		      define(t, e, function (t) {
		        return this._invoke(e, t);
		      });
		    });
		  }
		  function AsyncIterator(t, e) {
		    function invoke(r, o, i, a) {
		      var c = tryCatch(t[r], t, o);
		      if ("throw" !== c.type) {
		        var u = c.arg,
		          h = u.value;
		        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
		          invoke("next", t, i, a);
		        }, function (t) {
		          invoke("throw", t, i, a);
		        }) : e.resolve(h).then(function (t) {
		          u.value = t, i(u);
		        }, function (t) {
		          return invoke("throw", t, i, a);
		        });
		      }
		      a(c.arg);
		    }
		    var r;
		    o(this, "_invoke", {
		      value: function value(t, n) {
		        function callInvokeWithMethodAndArg() {
		          return new e(function (e, r) {
		            invoke(t, n, e, r);
		          });
		        }
		        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
		      }
		    });
		  }
		  function makeInvokeMethod(e, r, n) {
		    var o = h;
		    return function (i, a) {
		      if (o === f) throw Error("Generator is already running");
		      if (o === s) {
		        if ("throw" === i) throw a;
		        return {
		          value: t,
		          done: !0
		        };
		      }
		      for (n.method = i, n.arg = a;;) {
		        var c = n.delegate;
		        if (c) {
		          var u = maybeInvokeDelegate(c, n);
		          if (u) {
		            if (u === y) continue;
		            return u;
		          }
		        }
		        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
		          if (o === h) throw o = s, n.arg;
		          n.dispatchException(n.arg);
		        } else "return" === n.method && n.abrupt("return", n.arg);
		        o = f;
		        var p = tryCatch(e, r, n);
		        if ("normal" === p.type) {
		          if (o = n.done ? s : l, p.arg === y) continue;
		          return {
		            value: p.arg,
		            done: n.done
		          };
		        }
		        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
		      }
		    };
		  }
		  function maybeInvokeDelegate(e, r) {
		    var n = r.method,
		      o = e.iterator[n];
		    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
		    var i = tryCatch(o, e.iterator, r.arg);
		    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
		    var a = i.arg;
		    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
		  }
		  function pushTryEntry(t) {
		    var _context2;
		    var e = {
		      tryLoc: t[0]
		    };
		    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), _pushInstanceProperty(_context2 = this.tryEntries).call(_context2, e);
		  }
		  function resetTryEntry(t) {
		    var e = t.completion || {};
		    e.type = "normal", delete e.arg, t.completion = e;
		  }
		  function Context(t) {
		    this.tryEntries = [{
		      tryLoc: "root"
		    }], _forEachInstanceProperty(t).call(t, pushTryEntry, this), this.reset(!0);
		  }
		  function values(e) {
		    if (e || "" === e) {
		      var r = e[a];
		      if (r) return r.call(e);
		      if ("function" == typeof e.next) return e;
		      if (!isNaN(e.length)) {
		        var o = -1,
		          i = function next() {
		            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
		            return next.value = t, next.done = !0, next;
		          };
		        return i.next = i;
		      }
		    }
		    throw new TypeError(_typeof(e) + " is not iterable");
		  }
		  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
		    value: GeneratorFunctionPrototype,
		    configurable: !0
		  }), o(GeneratorFunctionPrototype, "constructor", {
		    value: GeneratorFunction,
		    configurable: !0
		  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
		    var e = "function" == typeof t && t.constructor;
		    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
		  }, e.mark = function (t) {
		    return _Object$setPrototypeOf ? _Object$setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = _Object$create(g), t;
		  }, e.awrap = function (t) {
		    return {
		      __await: t
		    };
		  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
		    return this;
		  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
		    void 0 === i && (i = _Promise);
		    var a = new AsyncIterator(wrap(t, r, n, o), i);
		    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
		      return t.done ? t.value : a.next();
		    });
		  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
		    return this;
		  }), define(g, "toString", function () {
		    return "[object Generator]";
		  }), e.keys = function (t) {
		    var e = Object(t),
		      r = [];
		    for (var n in e) _pushInstanceProperty(r).call(r, n);
		    return _reverseInstanceProperty(r).call(r), function next() {
		      for (; r.length;) {
		        var t = r.pop();
		        if (t in e) return next.value = t, next.done = !1, next;
		      }
		      return next.done = !0, next;
		    };
		  }, e.values = values, Context.prototype = {
		    constructor: Context,
		    reset: function reset(e) {
		      var _context3;
		      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, _forEachInstanceProperty(_context3 = this.tryEntries).call(_context3, resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+_sliceInstanceProperty(r).call(r, 1)) && (this[r] = t);
		    },
		    stop: function stop() {
		      this.done = !0;
		      var t = this.tryEntries[0].completion;
		      if ("throw" === t.type) throw t.arg;
		      return this.rval;
		    },
		    dispatchException: function dispatchException(e) {
		      if (this.done) throw e;
		      var r = this;
		      function handle(n, o) {
		        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
		      }
		      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
		        var i = this.tryEntries[o],
		          a = i.completion;
		        if ("root" === i.tryLoc) return handle("end");
		        if (i.tryLoc <= this.prev) {
		          var c = n.call(i, "catchLoc"),
		            u = n.call(i, "finallyLoc");
		          if (c && u) {
		            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
		            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
		          } else if (c) {
		            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
		          } else {
		            if (!u) throw Error("try statement without catch or finally");
		            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
		          }
		        }
		      }
		    },
		    abrupt: function abrupt(t, e) {
		      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
		        var o = this.tryEntries[r];
		        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
		          var i = o;
		          break;
		        }
		      }
		      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
		      var a = i ? i.completion : {};
		      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
		    },
		    complete: function complete(t, e) {
		      if ("throw" === t.type) throw t.arg;
		      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
		    },
		    finish: function finish(t) {
		      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
		        var r = this.tryEntries[e];
		        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
		      }
		    },
		    "catch": function _catch(t) {
		      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
		        var r = this.tryEntries[e];
		        if (r.tryLoc === t) {
		          var n = r.completion;
		          if ("throw" === n.type) {
		            var o = n.arg;
		            resetTryEntry(r);
		          }
		          return o;
		        }
		      }
		      throw Error("illegal catch attempt");
		    },
		    delegateYield: function delegateYield(e, r, n) {
		      return this.delegate = {
		        iterator: values(e),
		        resultName: r,
		        nextLoc: n
		      }, "next" === this.method && (this.arg = t), y;
		    }
		  }, e;
		}
		module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports; 
	} (regeneratorRuntime$1));

	var regeneratorRuntimeExports = regeneratorRuntime$1.exports;

	// TODO(Babel 8): Remove this file.

	var runtime = regeneratorRuntimeExports();
	var regenerator = runtime;

	// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
	try {
	  regeneratorRuntime = runtime;
	} catch (accidentalStrictMode) {
	  if (typeof globalThis === "object") {
	    globalThis.regeneratorRuntime = runtime;
	  } else {
	    Function("r", "regeneratorRuntime = r")(runtime);
	  }
	}

	var _regeneratorRuntime = /*@__PURE__*/getDefaultExportFromCjs(regenerator);

	var $$c = _export;
	var $includes = arrayIncludes$2.includes;
	var fails$5 = fails$r;

	// FF99+ bug
	var BROKEN_ON_SPARSE = fails$5(function () {
	  // eslint-disable-next-line es/no-array-prototype-includes -- detection
	  return !Array(1).includes();
	});

	// `Array.prototype.includes` method
	// https://tc39.es/ecma262/#sec-array.prototype.includes
	$$c({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
	  includes: function includes(el /* , fromIndex = 0 */) {
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var getBuiltInPrototypeMethod$9 = getBuiltInPrototypeMethod$e;

	var includes$4 = getBuiltInPrototypeMethod$9('Array', 'includes');

	var isObject = isObject$k;
	var classof$1 = classofRaw$2;
	var wellKnownSymbol$1 = wellKnownSymbol$o;

	var MATCH$1 = wellKnownSymbol$1('match');

	// `IsRegExp` abstract operation
	// https://tc39.es/ecma262/#sec-isregexp
	var isRegexp = function (it) {
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classof$1(it) === 'RegExp');
	};

	var isRegExp = isRegexp;

	var $TypeError$1 = TypeError;

	var notARegexp = function (it) {
	  if (isRegExp(it)) {
	    throw new $TypeError$1("The method doesn't accept regular expressions");
	  } return it;
	};

	var wellKnownSymbol = wellKnownSymbol$o;

	var MATCH = wellKnownSymbol('match');

	var correctIsRegexpLogic = function (METHOD_NAME) {
	  var regexp = /./;
	  try {
	    '/./'[METHOD_NAME](regexp);
	  } catch (error1) {
	    try {
	      regexp[MATCH] = false;
	      return '/./'[METHOD_NAME](regexp);
	    } catch (error2) { /* empty */ }
	  } return false;
	};

	var $$b = _export;
	var uncurryThis$7 = functionUncurryThis;
	var notARegExp$1 = notARegexp;
	var requireObjectCoercible$4 = requireObjectCoercible$9;
	var toString$4 = toString$d;
	var correctIsRegExpLogic$1 = correctIsRegexpLogic;

	var stringIndexOf = uncurryThis$7(''.indexOf);

	// `String.prototype.includes` method
	// https://tc39.es/ecma262/#sec-string.prototype.includes
	$$b({ target: 'String', proto: true, forced: !correctIsRegExpLogic$1('includes') }, {
	  includes: function includes(searchString /* , position = 0 */) {
	    return !!~stringIndexOf(
	      toString$4(requireObjectCoercible$4(this)),
	      toString$4(notARegExp$1(searchString)),
	      arguments.length > 1 ? arguments[1] : undefined
	    );
	  }
	});

	var getBuiltInPrototypeMethod$8 = getBuiltInPrototypeMethod$e;

	var includes$3 = getBuiltInPrototypeMethod$8('String', 'includes');

	var isPrototypeOf$8 = objectIsPrototypeOf;
	var arrayMethod = includes$4;
	var stringMethod = includes$3;

	var ArrayPrototype$6 = Array.prototype;
	var StringPrototype$2 = String.prototype;

	var includes$2 = function (it) {
	  var own = it.includes;
	  if (it === ArrayPrototype$6 || (isPrototypeOf$8(ArrayPrototype$6, it) && own === ArrayPrototype$6.includes)) return arrayMethod;
	  if (typeof it == 'string' || it === StringPrototype$2 || (isPrototypeOf$8(StringPrototype$2, it) && own === StringPrototype$2.includes)) {
	    return stringMethod;
	  } return own;
	};

	var parent$g = includes$2;

	var includes$1 = parent$g;

	var includes = includes$1;

	var _includesInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(includes);

	var promise = promise$4;

	var _Promise = /*@__PURE__*/getDefaultExportFromCjs(promise);

	var toIntegerOrInfinity$1 = toIntegerOrInfinity$5;
	var toString$3 = toString$d;
	var requireObjectCoercible$3 = requireObjectCoercible$9;

	var $RangeError$1 = RangeError;

	// `String.prototype.repeat` method implementation
	// https://tc39.es/ecma262/#sec-string.prototype.repeat
	var stringRepeat = function repeat(count) {
	  var str = toString$3(requireObjectCoercible$3(this));
	  var result = '';
	  var n = toIntegerOrInfinity$1(count);
	  if (n < 0 || n === Infinity) throw new $RangeError$1('Wrong number of repetitions');
	  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
	  return result;
	};

	// https://github.com/tc39/proposal-string-pad-start-end
	var uncurryThis$6 = functionUncurryThis;
	var toLength$1 = toLength$3;
	var toString$2 = toString$d;
	var $repeat = stringRepeat;
	var requireObjectCoercible$2 = requireObjectCoercible$9;

	var repeat = uncurryThis$6($repeat);
	var stringSlice = uncurryThis$6(''.slice);
	var ceil = Math.ceil;

	// `String.prototype.{ padStart, padEnd }` methods implementation
	var createMethod$3 = function (IS_END) {
	  return function ($this, maxLength, fillString) {
	    var S = toString$2(requireObjectCoercible$2($this));
	    var intMaxLength = toLength$1(maxLength);
	    var stringLength = S.length;
	    var fillStr = fillString === undefined ? ' ' : toString$2(fillString);
	    var fillLen, stringFiller;
	    if (intMaxLength <= stringLength || fillStr === '') return S;
	    fillLen = intMaxLength - stringLength;
	    stringFiller = repeat(fillStr, ceil(fillLen / fillStr.length));
	    if (stringFiller.length > fillLen) stringFiller = stringSlice(stringFiller, 0, fillLen);
	    return IS_END ? S + stringFiller : stringFiller + S;
	  };
	};

	var stringPad = {
	  // `String.prototype.padStart` method
	  // https://tc39.es/ecma262/#sec-string.prototype.padstart
	  start: createMethod$3(false),
	  // `String.prototype.padEnd` method
	  // https://tc39.es/ecma262/#sec-string.prototype.padend
	  end: createMethod$3(true)
	};

	var uncurryThis$5 = functionUncurryThis;
	var fails$4 = fails$r;
	var padStart = stringPad.start;

	var $RangeError = RangeError;
	var $isFinite = isFinite;
	var abs = Math.abs;
	var DatePrototype = Date.prototype;
	var nativeDateToISOString = DatePrototype.toISOString;
	var thisTimeValue = uncurryThis$5(DatePrototype.getTime);
	var getUTCDate = uncurryThis$5(DatePrototype.getUTCDate);
	var getUTCFullYear = uncurryThis$5(DatePrototype.getUTCFullYear);
	var getUTCHours = uncurryThis$5(DatePrototype.getUTCHours);
	var getUTCMilliseconds = uncurryThis$5(DatePrototype.getUTCMilliseconds);
	var getUTCMinutes = uncurryThis$5(DatePrototype.getUTCMinutes);
	var getUTCMonth = uncurryThis$5(DatePrototype.getUTCMonth);
	var getUTCSeconds = uncurryThis$5(DatePrototype.getUTCSeconds);

	// `Date.prototype.toISOString` method implementation
	// https://tc39.es/ecma262/#sec-date.prototype.toisostring
	// PhantomJS / old WebKit fails here:
	var dateToIsoString = (fails$4(function () {
	  return nativeDateToISOString.call(new Date(-5e13 - 1)) !== '0385-07-25T07:06:39.999Z';
	}) || !fails$4(function () {
	  nativeDateToISOString.call(new Date(NaN));
	})) ? function toISOString() {
	  if (!$isFinite(thisTimeValue(this))) throw new $RangeError('Invalid time value');
	  var date = this;
	  var year = getUTCFullYear(date);
	  var milliseconds = getUTCMilliseconds(date);
	  var sign = year < 0 ? '-' : year > 9999 ? '+' : '';
	  return sign + padStart(abs(year), sign ? 6 : 4, 0) +
	    '-' + padStart(getUTCMonth(date) + 1, 2, 0) +
	    '-' + padStart(getUTCDate(date), 2, 0) +
	    'T' + padStart(getUTCHours(date), 2, 0) +
	    ':' + padStart(getUTCMinutes(date), 2, 0) +
	    ':' + padStart(getUTCSeconds(date), 2, 0) +
	    '.' + padStart(milliseconds, 3, 0) +
	    'Z';
	} : nativeDateToISOString;

	var $$a = _export;
	var call$1 = functionCall;
	var toObject$2 = toObject$b;
	var toPrimitive$6 = toPrimitive$8;
	var toISOString = dateToIsoString;
	var classof = classofRaw$2;
	var fails$3 = fails$r;

	var FORCED$3 = fails$3(function () {
	  return new Date(NaN).toJSON() !== null
	    || call$1(Date.prototype.toJSON, { toISOString: function () { return 1; } }) !== 1;
	});

	// `Date.prototype.toJSON` method
	// https://tc39.es/ecma262/#sec-date.prototype.tojson
	$$a({ target: 'Date', proto: true, forced: FORCED$3 }, {
	  // eslint-disable-next-line no-unused-vars -- required for `.length`
	  toJSON: function toJSON(key) {
	    var O = toObject$2(this);
	    var pv = toPrimitive$6(O, 'number');
	    return typeof pv == 'number' && !isFinite(pv) ? null :
	      (!('toISOString' in O) && classof(O) === 'Date') ? call$1(toISOString, O) : O.toISOString();
	  }
	});

	var path$4 = path$h;
	var apply$3 = functionApply;

	// eslint-disable-next-line es/no-json -- safe
	if (!path$4.JSON) path$4.JSON = { stringify: JSON.stringify };

	// eslint-disable-next-line no-unused-vars -- required for `.length`
	var stringify$3 = function stringify(it, replacer, space) {
	  return apply$3(path$4.JSON.stringify, null, arguments);
	};

	var parent$f = stringify$3;

	var stringify$2 = parent$f;

	var stringify$1 = stringify$2;

	var _JSON$stringify = /*@__PURE__*/getDefaultExportFromCjs(stringify$1);

	var getBuiltInPrototypeMethod$7 = getBuiltInPrototypeMethod$e;

	var concat$4 = getBuiltInPrototypeMethod$7('Array', 'concat');

	var isPrototypeOf$7 = objectIsPrototypeOf;
	var method$7 = concat$4;

	var ArrayPrototype$5 = Array.prototype;

	var concat$3 = function (it) {
	  var own = it.concat;
	  return it === ArrayPrototype$5 || (isPrototypeOf$7(ArrayPrototype$5, it) && own === ArrayPrototype$5.concat) ? method$7 : own;
	};

	var parent$e = concat$3;

	var concat$2 = parent$e;

	var concat$1 = concat$2;

	var _concatInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(concat$1);

	var $$9 = _export;
	var $filter = arrayIteration.filter;
	var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$4;

	var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('filter');

	// `Array.prototype.filter` method
	// https://tc39.es/ecma262/#sec-array.prototype.filter
	// with adding support of @@species
	$$9({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 }, {
	  filter: function filter(callbackfn /* , thisArg */) {
	    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var getBuiltInPrototypeMethod$6 = getBuiltInPrototypeMethod$e;

	var filter$3 = getBuiltInPrototypeMethod$6('Array', 'filter');

	var isPrototypeOf$6 = objectIsPrototypeOf;
	var method$6 = filter$3;

	var ArrayPrototype$4 = Array.prototype;

	var filter$2 = function (it) {
	  var own = it.filter;
	  return it === ArrayPrototype$4 || (isPrototypeOf$6(ArrayPrototype$4, it) && own === ArrayPrototype$4.filter) ? method$6 : own;
	};

	var parent$d = filter$2;

	var filter$1 = parent$d;

	var filter = filter$1;

	var _filterInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(filter);

	var slice$1 = slice$5;

	var _sliceInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(slice$1);

	var aCallable = aCallable$c;
	var toObject$1 = toObject$b;
	var IndexedObject$1 = indexedObject;
	var lengthOfArrayLike$1 = lengthOfArrayLike$9;

	var $TypeError = TypeError;

	var REDUCE_EMPTY = 'Reduce of empty array with no initial value';

	// `Array.prototype.{ reduce, reduceRight }` methods implementation
	var createMethod$2 = function (IS_RIGHT) {
	  return function (that, callbackfn, argumentsLength, memo) {
	    var O = toObject$1(that);
	    var self = IndexedObject$1(O);
	    var length = lengthOfArrayLike$1(O);
	    aCallable(callbackfn);
	    if (length === 0 && argumentsLength < 2) throw new $TypeError(REDUCE_EMPTY);
	    var index = IS_RIGHT ? length - 1 : 0;
	    var i = IS_RIGHT ? -1 : 1;
	    if (argumentsLength < 2) while (true) {
	      if (index in self) {
	        memo = self[index];
	        index += i;
	        break;
	      }
	      index += i;
	      if (IS_RIGHT ? index < 0 : length <= index) {
	        throw new $TypeError(REDUCE_EMPTY);
	      }
	    }
	    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
	      memo = callbackfn(memo, self[index], index, O);
	    }
	    return memo;
	  };
	};

	var arrayReduce = {
	  // `Array.prototype.reduce` method
	  // https://tc39.es/ecma262/#sec-array.prototype.reduce
	  left: createMethod$2(false),
	  // `Array.prototype.reduceRight` method
	  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
	  right: createMethod$2(true)
	};

	var $$8 = _export;
	var $reduce = arrayReduce.left;
	var arrayMethodIsStrict$2 = arrayMethodIsStrict$4;
	var CHROME_VERSION = engineV8Version;
	var IS_NODE = engineIsNode;

	// Chrome 80-82 has a critical bug
	// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
	var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
	var FORCED$2 = CHROME_BUG || !arrayMethodIsStrict$2('reduce');

	// `Array.prototype.reduce` method
	// https://tc39.es/ecma262/#sec-array.prototype.reduce
	$$8({ target: 'Array', proto: true, forced: FORCED$2 }, {
	  reduce: function reduce(callbackfn /* , initialValue */) {
	    var length = arguments.length;
	    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
	  }
	});

	var getBuiltInPrototypeMethod$5 = getBuiltInPrototypeMethod$e;

	var reduce$3 = getBuiltInPrototypeMethod$5('Array', 'reduce');

	var isPrototypeOf$5 = objectIsPrototypeOf;
	var method$5 = reduce$3;

	var ArrayPrototype$3 = Array.prototype;

	var reduce$2 = function (it) {
	  var own = it.reduce;
	  return it === ArrayPrototype$3 || (isPrototypeOf$5(ArrayPrototype$3, it) && own === ArrayPrototype$3.reduce) ? method$5 : own;
	};

	var parent$c = reduce$2;

	var reduce$1 = parent$c;

	var reduce = reduce$1;

	var _reduceInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(reduce);

	var $$7 = _export;
	var $map = arrayIteration.map;
	var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$4;

	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

	// `Array.prototype.map` method
	// https://tc39.es/ecma262/#sec-array.prototype.map
	// with adding support of @@species
	$$7({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
	  map: function map(callbackfn /* , thisArg */) {
	    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var getBuiltInPrototypeMethod$4 = getBuiltInPrototypeMethod$e;

	var map$3 = getBuiltInPrototypeMethod$4('Array', 'map');

	var isPrototypeOf$4 = objectIsPrototypeOf;
	var method$4 = map$3;

	var ArrayPrototype$2 = Array.prototype;

	var map$2 = function (it) {
	  var own = it.map;
	  return it === ArrayPrototype$2 || (isPrototypeOf$4(ArrayPrototype$2, it) && own === ArrayPrototype$2.map) ? method$4 : own;
	};

	var parent$b = map$2;

	var map$1 = parent$b;

	var map = map$1;

	var _mapInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(map);

	/* eslint-disable es/no-array-prototype-indexof -- required for testing */
	var $$6 = _export;
	var uncurryThis$4 = functionUncurryThisClause;
	var $indexOf = arrayIncludes$2.indexOf;
	var arrayMethodIsStrict$1 = arrayMethodIsStrict$4;

	var nativeIndexOf = uncurryThis$4([].indexOf);

	var NEGATIVE_ZERO$1 = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
	var FORCED$1 = NEGATIVE_ZERO$1 || !arrayMethodIsStrict$1('indexOf');

	// `Array.prototype.indexOf` method
	// https://tc39.es/ecma262/#sec-array.prototype.indexof
	$$6({ target: 'Array', proto: true, forced: FORCED$1 }, {
	  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
	    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
	    return NEGATIVE_ZERO$1
	      // convert -0 to +0
	      ? nativeIndexOf(this, searchElement, fromIndex) || 0
	      : $indexOf(this, searchElement, fromIndex);
	  }
	});

	var getBuiltInPrototypeMethod$3 = getBuiltInPrototypeMethod$e;

	var indexOf$3 = getBuiltInPrototypeMethod$3('Array', 'indexOf');

	var isPrototypeOf$3 = objectIsPrototypeOf;
	var method$3 = indexOf$3;

	var ArrayPrototype$1 = Array.prototype;

	var indexOf$2 = function (it) {
	  var own = it.indexOf;
	  return it === ArrayPrototype$1 || (isPrototypeOf$3(ArrayPrototype$1, it) && own === ArrayPrototype$1.indexOf) ? method$3 : own;
	};

	var parent$a = indexOf$2;

	var indexOf$1 = parent$a;

	var indexOf = indexOf$1;

	var _indexOfInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(indexOf);

	// a string of all valid unicode whitespaces
	var whitespaces$2 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
	  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

	var uncurryThis$3 = functionUncurryThis;
	var requireObjectCoercible$1 = requireObjectCoercible$9;
	var toString$1 = toString$d;
	var whitespaces$1 = whitespaces$2;

	var replace = uncurryThis$3(''.replace);
	var ltrim = RegExp('^[' + whitespaces$1 + ']+');
	var rtrim = RegExp('(^|[^' + whitespaces$1 + '])[' + whitespaces$1 + ']+$');

	// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
	var createMethod$1 = function (TYPE) {
	  return function ($this) {
	    var string = toString$1(requireObjectCoercible$1($this));
	    if (TYPE & 1) string = replace(string, ltrim, '');
	    if (TYPE & 2) string = replace(string, rtrim, '$1');
	    return string;
	  };
	};

	var stringTrim = {
	  // `String.prototype.{ trimLeft, trimStart }` methods
	  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
	  start: createMethod$1(1),
	  // `String.prototype.{ trimRight, trimEnd }` methods
	  // https://tc39.es/ecma262/#sec-string.prototype.trimend
	  end: createMethod$1(2),
	  // `String.prototype.trim` method
	  // https://tc39.es/ecma262/#sec-string.prototype.trim
	  trim: createMethod$1(3)
	};

	var PROPER_FUNCTION_NAME = functionName.PROPER;
	var fails$2 = fails$r;
	var whitespaces = whitespaces$2;

	var non = '\u200B\u0085\u180E';

	// check that a method works with the correct list
	// of whitespaces and has a correct name
	var stringTrimForced = function (METHOD_NAME) {
	  return fails$2(function () {
	    return !!whitespaces[METHOD_NAME]()
	      || non[METHOD_NAME]() !== non
	      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
	  });
	};

	var $$5 = _export;
	var $trim = stringTrim.trim;
	var forcedStringTrimMethod = stringTrimForced;

	// `String.prototype.trim` method
	// https://tc39.es/ecma262/#sec-string.prototype.trim
	$$5({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
	  trim: function trim() {
	    return $trim(this);
	  }
	});

	var getBuiltInPrototypeMethod$2 = getBuiltInPrototypeMethod$e;

	var trim$3 = getBuiltInPrototypeMethod$2('String', 'trim');

	var isPrototypeOf$2 = objectIsPrototypeOf;
	var method$2 = trim$3;

	var StringPrototype$1 = String.prototype;

	var trim$2 = function (it) {
	  var own = it.trim;
	  return typeof it == 'string' || it === StringPrototype$1
	    || (isPrototypeOf$2(StringPrototype$1, it) && own === StringPrototype$1.trim) ? method$2 : own;
	};

	var parent$9 = trim$2;

	var trim$1 = parent$9;

	var trim = trim$1;

	var _trimInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(trim);

	var _wcImport4 = ".sp-separator {\n  line-height: 1.8 !important;\n  opacity: 1 !important;\n  position: relative !important;\n  float: none !important;\n  top: 0 !important;\n  left: 0 !important;\n  min-width: 366px;\n  width: auto;\n  text-align: center !important;\n  font-size: 14px !important;\n  display: block !important;\n  padding: 3px 0 !important;\n  margin: 5px 10px 8px;\n  clear: both !important;\n  border-style: solid !important;\n  border-color: #cccccc !important;\n  border-width: 1px !important;\n  -moz-border-radius: 30px !important;\n  border-radius: 30px !important;\n  background-color: #ffffff !important;\n}\n\n.sp-separator:hover {\n  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);\n}\n\n#sp-separator-hover {\n  display: none;\n}\n\n.sp-separator:hover #sp-separator-hover {\n  display: block;\n}\n\n.sp-separator .sp-someinfo {\n  position: absolute !important;\n  right: 10px !important;\n  font-size: 12px !important;\n  font-style: italic !important;\n  background: none !important;\n}\n\n.sp-separator img {\n  vertical-align: middle !important;\n  cursor: pointer !important;\n  padding: 0 !important;\n  margin: 0 5px !important;\n  border: none !important;\n  display: inline-block !important;\n  float: none !important;\n  width: auto;\n  height: auto;\n}\n\n.sp-separator a {\n  margin: 0 20px 0 -6px !important;\n  display: inline !important;\n  text-shadow: #fff 0 1px 0 !important;\n  background: none !important;\n  color: #595959 !important;\n}\n\n.sp-separator input {\n  padding: 0 !important;\n  line-height: 23px !important;\n}\n\n.sp-separator .sp-md-span {\n  font-weight: bold !important;\n  margin: 0 20px !important;\n}\n\n#sp-sp-md-number {\n  width: 6ch !important;\n  vertical-align: middle !important;\n  display: inline-block !important;\n  text-align: left !important;\n}";

	var _wcImport3 = ".sp-prefs-spinner {\n  margin: 40px auto;\n  width: 100%;\n  height: 50px;\n  text-align: center;\n  font-size: 10px;\n}\n\n.sp-prefs-spinner > div {\n  background-color: #333;\n  height: 100%;\n  width: 25%;\n  display: inline-block;\n  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n  animation: sk-stretchdelay 1.2s infinite ease-in-out;\n}\n\n.sp-prefs-spinner .rect2 {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s;\n}\n\n.sp-prefs-spinner .rect3 {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n\n.sp-prefs-spinner .rect4 {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s;\n}\n\n.sp-prefs-spinner .rect5 {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s;\n}\n\n@-webkit-keyframes sk-stretchdelay {\n  0%, 40%, 100% {\n    -webkit-transform: scaleY(0.4);\n  }\n  20% {\n    -webkit-transform: scaleY(1);\n  }\n}\n@keyframes sk-stretchdelay {\n  0%, 40%, 100% {\n    transform: scaleY(0.4);\n    -webkit-transform: scaleY(0.4);\n  }\n  20% {\n    transform: scaleY(1);\n    -webkit-transform: scaleY(1);\n  }\n}";

	var _wcImport2 = "@charset \"UTF-8\";\n#sp-prefs-setup {\n  z-index: 2147483647;\n  padding: 20px 30px;\n  box-sizing: content-box;\n  border-radius: 3px !important;\n  border: 1px solid #a0a0a0 !important;\n  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.3) !important;\n  background: -moz-linear-gradient(top, #fcfcfc, #f2f2f7 100%) !important;\n  background: -webkit-gradient(linear, 0 0, 0 100%, from(#fcfcfc), to(#f2f2f7)) !important;\n  font-family: \"Arial\", \"sans-serif\" !important;\n  color: transparent;\n  max-height: 80%;\n  overflow: auto;\n}\n\n#sp-prefs-setup * {\n  color: black;\n  text-align: left;\n  line-height: normal;\n  font-size: 12px;\n  min-height: 12px;\n}\n\n#sp-prefs-setup a {\n  color: black;\n  text-decoration: underline;\n}\n\n#sp-prefs-setup div {\n  text-align: center;\n  font-weight: bold;\n  font-size: 15px;\n}\n\n#sp-prefs-setup ul {\n  margin: 15px 0 15px 0;\n  padding: 0;\n  list-style: none;\n  background: none;\n  border: 0;\n}\n\n#sp-prefs-setup input,\n#sp-prefs-setup select {\n  border: 1px solid gray;\n  padding: 2px;\n  background: white;\n  margin: 0px;\n  height: auto;\n}\n\n#sp-prefs-setup input[type=checkbox] {\n  cursor: pointer !important;\n  visibility: visible !important;\n  position: static !important;\n}\n\n#sp-prefs-setup input.inputShift {\n  margin-left: 2px;\n}\n\n#sp-prefs-setup li {\n  margin: 0;\n  padding: 5px 0;\n  vertical-align: middle;\n  background: none;\n  border: 0;\n  font-size: 12px;\n}\n\n#sp-prefs-setup button {\n  margin: 0 10px;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #f9f9f9 !important;\n  border: 1px solid #ccc !important;\n  box-shadow: inset 0 10px 5px white !important;\n  border-radius: 3px !important;\n  padding: 3px 3px !important;\n}\n\n#sp-prefs-setup textarea {\n  width: 98%;\n  height: 60px;\n  margin: 3px 0;\n  font-weight: 50;\n  background: white;\n}\n\n#sp-prefs-setup b {\n  font-weight: bold;\n  font-family: \"微软雅黑\", sans-serif;\n}\n\n#sp-prefs-setup button:disabled {\n  color: gray;\n}\n\n#sp-prefs-setup label {\n  cursor: pointer;\n  user-select: none;\n  display: inline;\n}\n\n#sp-prefs-setup label input[type=checkbox] {\n  vertical-align: middle;\n}";

	var _wcImport = "#sp-fw-container {\n  z-index: 999999 !important;\n  text-align: left !important;\n}\n@media print {\n  #sp-fw-container {\n    display: none;\n  }\n}\n\n#sp-fw-container * {\n  font-size: 13px !important;\n  color: black !important;\n  float: none !important;\n  line-height: 13px !important;\n  width: auto;\n}\n\n#sp-fw-main-head {\n  position: relative !important;\n  top: 0 !important;\n  left: 0 !important;\n}\n\n#sp-fw-span-info {\n  position: absolute !important;\n  right: 1px !important;\n  top: 0 !important;\n  font-size: 11px !important;\n  line-height: 11px !important;\n  background: none !important;\n  font-style: italic !important;\n  color: #5a5a5a !important;\n  text-shadow: white 0px 1px 1px !important;\n}\n\n#sp-fw-main select {\n  background: white;\n  height: auto;\n}\n\n#sp-fw-container input {\n  vertical-align: middle !important;\n  display: inline-block !important;\n  outline: none !important;\n  padding: 0px !important;\n  margin: 0 !important;\n  margin-right: 3px !important;\n  background: white;\n  border: 1px solid gray;\n  cursor: pointer !important;\n  height: auto;\n}\n\n#sp-fw-container input[type=number] {\n  width: 6ch !important;\n  text-align: left !important;\n  margin: 0 3px !important;\n}\n\n#sp-fw-container input[type=number]:hover::-webkit-inner-spin-button {\n  height: 60px;\n}\n\n#sp-fw-container input[type=checkbox] {\n  position: static !important;\n}\n\n#sp-fw-container input[type=button] {\n  width: auto !important;\n  height: auto !important;\n}\n\n#sp-fw-container li {\n  list-style: none !important;\n  margin: 3px 0 !important;\n  border: none !important;\n  float: none !important;\n}\n\n#sp-fw-container fieldset {\n  border: 2px groove #ccc !important;\n  -moz-border-radius: 3px !important;\n  border-radius: 3px !important;\n  padding: 4px 9px 6px 9px !important;\n  margin: 2px !important;\n  display: block !important;\n  width: auto !important;\n  height: auto !important;\n}\n\n#sp-fw-container legend {\n  line-height: 20px !important;\n  margin-bottom: 0px !important;\n}\n\n#sp-fw-container fieldset > ul {\n  padding: 0 !important;\n  margin: 0 !important;\n}\n\n#sp-fw-container ul#sp-fw-a_useiframe-extend {\n  padding-left: 40px !important;\n}\n\n#sp-fw-rect {\n  position: relative !important;\n  top: 0 !important;\n  left: 0 !important;\n  float: right !important;\n  height: 10px !important;\n  width: 10px !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  -moz-border-radius: 3px !important;\n  border-radius: 3px !important;\n  border: 1px solid white !important;\n  -webkit-box-shadow: inset 0 5px 0 rgba(255, 255, 255, 0.3), 0 0 3px rgba(0, 0, 0, 0.8) !important;\n  -moz-box-shadow: inset 0 5px 0 rgba(255, 255, 255, 0.3), 0 0 3px rgba(0, 0, 0, 0.8) !important;\n  box-shadow: inset 0 5px 0 rgba(255, 255, 255, 0.3), 0 0 3px rgba(0, 0, 0, 0.8) !important;\n  opacity: 0.8 !important;\n}\n\n#sp-fw-dot,\n#sp-fw-cur-mode {\n  position: absolute !important;\n  z-index: 9999 !important;\n  width: 5px !important;\n  height: 5px !important;\n  padding: 0 !important;\n  -moz-border-radius: 3px !important;\n  border-radius: 3px !important;\n  border: 1px solid white !important;\n  opacity: 1 !important;\n  -webkit-box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.3), inset 0 2px 1px rgba(255, 255, 255, 0.3), 0px 1px 2px rgba(0, 0, 0, 0.9) !important;\n  -moz-box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.3), inset 0 2px 1px rgba(255, 255, 255, 0.3), 0px 1px 2px rgba(0, 0, 0, 0.9) !important;\n  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.3), inset 0 2px 1px rgba(255, 255, 255, 0.3), 0px 1px 2px rgba(0, 0, 0, 0.9) !important;\n}\n\n#sp-fw-dot {\n  right: -3px !important;\n  top: -3px !important;\n}\n\n#sp-fw-cur-mode {\n  left: -3px !important;\n  top: -3px !important;\n  width: 6px !important;\n  height: 6px !important;\n}\n\n#sp-fw-content {\n  padding: 0 !important;\n  margin: 5px 5px 0 0 !important;\n  -moz-border-radius: 3px !important;\n  border-radius: 3px !important;\n  border: 1px solid #a0a0a0 !important;\n  -webkit-box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.3) !important;\n  -moz-box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.3) !important;\n  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.3) !important;\n}\n\n#sp-fw-main {\n  padding: 5px !important;\n  border: 1px solid white !important;\n  -moz-border-radius: 3px !important;\n  border-radius: 3px !important;\n  background-color: #f2f2f7 !important;\n  background: -moz-linear-gradient(top, #fcfcfc, #f2f2f7 100%) !important;\n  background: -webkit-gradient(linear, 0 0, 0 100%, from(#fcfcfc), to(#f2f2f7)) !important;\n}\n\n#sp-fw-foot {\n  position: relative !important;\n  left: 0 !important;\n  right: 0 !important;\n  top: 2px !important;\n  padding-left: 2px;\n  min-height: 20px !important;\n}\n\n#sp-fw-container .sp-fw-spanbutton {\n  padding: 2px 3px !important;\n  border: 1px solid #ccc !important;\n  -moz-border-radius: 3px !important;\n  border-radius: 3px !important;\n  cursor: pointer !important;\n  background-color: #f9f9f9 !important;\n  -webkit-box-shadow: inset 0 10px 5px white !important;\n  -moz-box-shadow: inset 0 10px 5px white !important;\n  box-shadow: inset 0 10px 5px white !important;\n  display: inline-block;\n}\n\n#sp-fw-container #sp-fw-savebutton {\n  position: absolute !important;\n  right: 2px !important;\n}\n\n#sp-fw-container label {\n  cursor: pointer;\n  user-select: none;\n  display: inline;\n}";

	var userAgentRules = [['aol', /AOLShield\/([0-9\._]+)/], ['edge', /Edge\/([0-9\._]+)/], ['edge-ios', /EdgiOS\/([0-9\._]+)/], ['yandexbrowser', /YaBrowser\/([0-9\._]+)/], ['kakaotalk', /KAKAOTALK\s([0-9\.]+)/], ['samsung', /SamsungBrowser\/([0-9\.]+)/], ['silk', /\bSilk\/([0-9._-]+)\b/], ['miui', /MiuiBrowser\/([0-9\.]+)$/], ['beaker', /BeakerBrowser\/([0-9\.]+)/], ['edge-chromium', /Edg\/([0-9\.]+)/], ['chromium-webview', /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ['chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ['phantomjs', /PhantomJS\/([0-9\.]+)(:?\s|$)/], ['crios', /CriOS\/([0-9\.]+)(:?\s|$)/], ['waterfox', /Waterfox\/([0-9\.]+)(?:\s|$)/], ['firefox', /Firefox\/([0-9\.]+)(?:\s|$)/], ['fxios', /FxiOS\/([0-9\.]+)/], ['opera-mini', /Opera Mini.*Version\/([0-9\.]+)/], ['opera', /Opera\/([0-9\.]+)(?:\s|$)/], ['opera', /OPR\/([0-9\.]+)(:?\s|$)/], ['ie', /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/], ['ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/], ['ie', /MSIE\s(7\.0)/], ['bb10', /BB10;\sTouch.*Version\/([0-9\.]+)/], ['android', /Android\s([0-9\.]+)/], ['ios', /Version\/([0-9\._]+).*Mobile.*Safari.*/], ['safari', /Version\/([0-9\._]+).*Safari/], ['facebook', /FBAV\/([0-9\.]+)/], ['instagram', /Instagram\s([0-9\.]+)/], ['ios-webview', /AppleWebKit\/([0-9\.]+).*Mobile/], ['ios-webview', /AppleWebKit\/([0-9\.]+).*Gecko\)$/]];
	var REQUIRED_VERSION_PARTS = 3;
	function matchUserAgent(ua) {
	  // opted for using reduce here rather than Array#first with a regex.test call
	  // this is primarily because using the reduce we only perform the regex
	  // execution once rather than once for the test and for the exec again below
	  // probably something that needs to be benchmarked though
	  return ua !== '' && _reduceInstanceProperty(userAgentRules).call(userAgentRules, function (matched, _a) {
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
	  var _context;
	  var matchedRule = matchUserAgent(ua);
	  if (!matchedRule) {
	    return {
	      name: null,
	      version: null
	    };
	  }
	  var _matchedRule = _slicedToArray(matchedRule, 2),
	    name = _matchedRule[0],
	    match = _matchedRule[1];
	  var versionParts = match[1] && _sliceInstanceProperty(_context = match[1].split(/[._]/)).call(_context, 0, 3);
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
	}
	// above functions are modified from https://www.npmjs.com/package/detect-browser

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

	const semver = /^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;
	const validateAndParse = (version) => {
	    if (typeof version !== 'string') {
	        throw new TypeError('Invalid argument expected string');
	    }
	    const match = version.match(semver);
	    if (!match) {
	        throw new Error(`Invalid argument not valid semver ('${version}' received)`);
	    }
	    match.shift();
	    return match;
	};
	const isWildcard = (s) => s === '*' || s === 'x' || s === 'X';
	const tryParse = (v) => {
	    const n = parseInt(v, 10);
	    return isNaN(n) ? v : n;
	};
	const forceType = (a, b) => typeof a !== typeof b ? [String(a), String(b)] : [a, b];
	const compareStrings = (a, b) => {
	    if (isWildcard(a) || isWildcard(b))
	        return 0;
	    const [ap, bp] = forceType(tryParse(a), tryParse(b));
	    if (ap > bp)
	        return 1;
	    if (ap < bp)
	        return -1;
	    return 0;
	};
	const compareSegments = (a, b) => {
	    for (let i = 0; i < Math.max(a.length, b.length); i++) {
	        const r = compareStrings(a[i] || '0', b[i] || '0');
	        if (r !== 0)
	            return r;
	    }
	    return 0;
	};

	/**
	 * Compare [semver](https://semver.org/) version strings to find greater, equal or lesser.
	 * This library supports the full semver specification, including comparing versions with different number of digits like `1.0.0`, `1.0`, `1`, and pre-release versions like `1.0.0-alpha`.
	 * @param v1 - First version to compare
	 * @param v2 - Second version to compare
	 * @returns Numeric value compatible with the [Array.sort(fn) interface](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Parameters).
	 */
	const compareVersions = (v1, v2) => {
	    // validate input and split into segments
	    const n1 = validateAndParse(v1);
	    const n2 = validateAndParse(v2);
	    // pop off the patch
	    const p1 = n1.pop();
	    const p2 = n2.pop();
	    // validate numbers
	    const r = compareSegments(n1, n2);
	    if (r !== 0)
	        return r;
	    // validate pre-release
	    if (p1 && p2) {
	        return compareSegments(p1.split('.'), p2.split('.'));
	    }
	    else if (p1 || p2) {
	        return p1 ? -1 : 1;
	    }
	    return 0;
	};

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

		    var _loggersByName = {};
		    var defaultLogger = null;

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

		    function replaceLoggingMethods() {
		        /*jshint validthis:true */
		        var level = this.getLevel();

		        // Replace the actual methods.
		        for (var i = 0; i < logMethods.length; i++) {
		            var methodName = logMethods[i];
		            this[methodName] = (i < level) ?
		                noop :
		                this.methodFactory(methodName, level, this.name);
		        }

		        // Define log.log as an alias for log.debug
		        this.log = this.debug;

		        // Return any important warnings.
		        if (typeof console === undefinedType && level < this.levels.SILENT) {
		            return "No console available for logging";
		        }
		    }

		    // In old IE versions, the console isn't present until you first open it.
		    // We build realMethod() replacements here that regenerate logging methods
		    function enableLoggingWhenConsoleArrives(methodName) {
		        return function () {
		            if (typeof console !== undefinedType) {
		                replaceLoggingMethods.call(this);
		                this[methodName].apply(this, arguments);
		            }
		        };
		    }

		    // By default, we use closely bound real methods wherever possible, and
		    // otherwise we wait for a console to appear, and then try again.
		    function defaultMethodFactory(methodName, _level, _loggerName) {
		        /*jshint validthis:true */
		        return realMethod(methodName) ||
		               enableLoggingWhenConsoleArrives.apply(this, arguments);
		    }

		    function Logger(name, factory) {
		      // Private instance variables.
		      var self = this;
		      /**
		       * The level inherited from a parent logger (or a global default). We
		       * cache this here rather than delegating to the parent so that it stays
		       * in sync with the actual logging methods that we have installed (the
		       * parent could change levels but we might not have rebuilt the loggers
		       * in this child yet).
		       * @type {number}
		       */
		      var inheritedLevel;
		      /**
		       * The default level for this logger, if any. If set, this overrides
		       * `inheritedLevel`.
		       * @type {number|null}
		       */
		      var defaultLevel;
		      /**
		       * A user-specific level for this logger. If set, this overrides
		       * `defaultLevel`.
		       * @type {number|null}
		       */
		      var userLevel;

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
		                  var cookieName = encodeURIComponent(storageKey);
		                  var location = cookie.indexOf(cookieName + "=");
		                  if (location !== -1) {
		                      storedLevel = /^([^;]+)/.exec(
		                          cookie.slice(location + cookieName.length + 1)
		                      )[1];
		                  }
		              } catch (ignore) {}
		          }

		          // If the stored level is not valid, treat it as if nothing was stored.
		          if (self.levels[storedLevel] === undefined) {
		              storedLevel = undefined;
		          }

		          return storedLevel;
		      }

		      function clearPersistedLevel() {
		          if (typeof window === undefinedType || !storageKey) return;

		          // Use localStorage if available
		          try {
		              window.localStorage.removeItem(storageKey);
		          } catch (ignore) {}

		          // Use session cookie as fallback
		          try {
		              window.document.cookie =
		                encodeURIComponent(storageKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
		          } catch (ignore) {}
		      }

		      function normalizeLevel(input) {
		          var level = input;
		          if (typeof level === "string" && self.levels[level.toUpperCase()] !== undefined) {
		              level = self.levels[level.toUpperCase()];
		          }
		          if (typeof level === "number" && level >= 0 && level <= self.levels.SILENT) {
		              return level;
		          } else {
		              throw new TypeError("log.setLevel() called with invalid level: " + input);
		          }
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
		          if (userLevel != null) {
		            return userLevel;
		          } else if (defaultLevel != null) {
		            return defaultLevel;
		          } else {
		            return inheritedLevel;
		          }
		      };

		      self.setLevel = function (level, persist) {
		          userLevel = normalizeLevel(level);
		          if (persist !== false) {  // defaults to true
		              persistLevelIfPossible(userLevel);
		          }

		          // NOTE: in v2, this should call rebuild(), which updates children.
		          return replaceLoggingMethods.call(self);
		      };

		      self.setDefaultLevel = function (level) {
		          defaultLevel = normalizeLevel(level);
		          if (!getPersistedLevel()) {
		              self.setLevel(level, false);
		          }
		      };

		      self.resetLevel = function () {
		          userLevel = null;
		          clearPersistedLevel();
		          replaceLoggingMethods.call(self);
		      };

		      self.enableAll = function(persist) {
		          self.setLevel(self.levels.TRACE, persist);
		      };

		      self.disableAll = function(persist) {
		          self.setLevel(self.levels.SILENT, persist);
		      };

		      self.rebuild = function () {
		          if (defaultLogger !== self) {
		              inheritedLevel = normalizeLevel(defaultLogger.getLevel());
		          }
		          replaceLoggingMethods.call(self);

		          if (defaultLogger === self) {
		              for (var childName in _loggersByName) {
		                _loggersByName[childName].rebuild();
		              }
		          }
		      };

		      // Initialize all the internal levels.
		      inheritedLevel = normalizeLevel(
		          defaultLogger ? defaultLogger.getLevel() : "WARN"
		      );
		      var initialLevel = getPersistedLevel();
		      if (initialLevel != null) {
		          userLevel = normalizeLevel(initialLevel);
		      }
		      replaceLoggingMethods.call(self);
		    }

		    /*
		     *
		     * Top-level API
		     *
		     */

		    defaultLogger = new Logger();

		    defaultLogger.getLogger = function getLogger(name) {
		        if ((typeof name !== "symbol" && typeof name !== "string") || name === "") {
		            throw new TypeError("You must supply a name when creating a logger.");
		        }

		        var logger = _loggersByName[name];
		        if (!logger) {
		            logger = _loggersByName[name] = new Logger(
		                name,
		                defaultLogger.methodFactory
		            );
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
	} (loglevel));

	var loglevelExports = loglevel.exports;
	var log = /*@__PURE__*/getDefaultExportFromCjs(loglevelExports);

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

	var name="super-preloader";var version="7.0.16";var description="Super-preloader";var main="dist/Super_preloaderPlus_one_New.user.js";var author="Mach6";var license="GPL-3.0";var type="module";var bugs={url:"https://github.com/machsix/Super-preloader/issues"};var homepage="https://github.com/machsix/Super-preloader";var directories={doc:"docs"};var repository={type:"git",url:"git+https://github.com/machsix/Super-preloader.git"};var scripts={preinstall:"npx only-allow pnpm",lint:"eslint \"dist/*.json\" \"src/**/*.js\" \"ci/*.js\" \"rollup.config.mjs\"",fix:"eslint \"dist/*.json\" \"src/**/*.js\" \"ci/*.js\" \"rollup.config.mjs\" --fix",format:"prettier --write \"dist/*.json\" \"src/**/*.{js,css}\" \"ci/*.js\" \"rollup.config.mjs\" \"docs/**/*.{ts,js,md}\"","format:check":"prettier --check \"dist/*.json\" \"src/**/*.{js,css}\" \"ci/*.js\" \"rollup.config.mjs\" \"docs/**/*.{ts,js,md}\"","format:staged":"lint-staged -v",check:"pnpm run lint && pnpm run typecheck",test:"cd test && node test.js",dev:"rollup -c --dev -w",build:"rollup -c","docs:dev":"vitepress dev docs","docs:build":"vitepress build docs","docs:publish":"pnpm run docs:build && bash ./ci/gen_ghpage.sh","docs:preview":"vitepress preview docs",preversion:"pnpm run check",version:"pnpm run build  && git add dist/*.js && git add dist/*.json",postversion:"git add package.json && pnpm run test","publish:patch":"npm --no-git-tag-version version patch",publish:"npm --no-git-tag-version version minor",typecheck:"tsc -p jsconfig.json --noEmit"};var husky={hooks:{"pre-commit":"pnpm run check"}};var keywords=["userscript"];var devDependencies={typescript:"5.4.5",vitepress:"^1.1.4",vue:"^3.4.26"};var dependencies={"@babel/core":"7.24.4","@babel/plugin-syntax-import-attributes":"7.24.1","@babel/plugin-transform-runtime":"7.24.3","@babel/preset-env":"7.24.4","@babel/runtime-corejs3":"^7.24.5","@rollup/plugin-babel":"6.0.4","@rollup/plugin-commonjs":"25.0.7","@rollup/plugin-json":"6.1.0","@rollup/plugin-node-resolve":"15.2.3","@types/greasemonkey":"4.0.7","@types/lodash":"4.17.0","babel-plugin-lodash":"3.3.4","babel-plugin-wildcard":"7.0.0","compare-versions":"6.1.0","cross-env":"7.0.3",displacejs:"github:machsix/displace#v1.4.0",eslint:"^8.0.0","eslint-config-prettier":"9.1.0","eslint-plugin-import":"2.29.1","eslint-plugin-json":"3.1.0","eslint-plugin-prettier":"5.1.3","extract-zip":"2.0.1",got:"14.2.1",husky:"9.0.11","lint-staged":"15.2.2",lodash:"4.17.21",loglevel:"1.9.1",prettier:"3.2.5",puppeteer:"2.1.0",rollup:"4.14.3","rollup-plugin-banner2":"1.2.3","rollup-plugin-dev":"2.0.4","rollup-plugin-ejs":"4.0.0","rollup-plugin-re":"1.0.7","rollup-plugin-scss-string":"github:machsix/rollup-plugin-scss-string",yargs:"17.7.2"};var pnpm={overrides:{"babel-plugin-lodash>@babel/types":"~7.20.0"}};var pkg = {name:name,version:version,description:description,main:main,author:author,license:license,type:type,bugs:bugs,homepage:homepage,directories:directories,repository:repository,scripts:scripts,husky:husky,keywords:keywords,devDependencies:devDependencies,dependencies:dependencies,pnpm:pnpm};

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
	};
	// SCRIPT_INFO.downloadURL = `${SCRIPT_INFO.greasyfork}/code/${SCRIPT_INFO.name}.user.js`;
	// SCRIPT_INFO.metaURL = `${SCRIPT_INFO.greasyfork}/code/${SCRIPT_INFO.name}.meta.js`;
	SCRIPT_INFO.downloadURL = 'https://machsix.github.io/Super-preloader/Super_preloaderPlus_one_New.user.js';
	SCRIPT_INFO.updateURL = SCRIPT_INFO.downloadURL;

	// New notification to send
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
	};

	// Meta for userscript
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
// @supportURL   ${SCRIPT_INFO.homepageURL}/issue
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

	var DESCRIPTORS$2 = descriptors;
	var fails$1 = fails$r;
	var uncurryThis$2 = functionUncurryThis;
	var objectGetPrototypeOf = objectGetPrototypeOf$1;
	var objectKeys$1 = objectKeys$4;
	var toIndexedObject$2 = toIndexedObject$b;
	var $propertyIsEnumerable = objectPropertyIsEnumerable.f;

	var propertyIsEnumerable = uncurryThis$2($propertyIsEnumerable);
	var push = uncurryThis$2([].push);

	// in some IE versions, `propertyIsEnumerable` returns incorrect result on integer keys
	// of `null` prototype objects
	var IE_BUG = DESCRIPTORS$2 && fails$1(function () {
	  // eslint-disable-next-line es/no-object-create -- safe
	  var O = Object.create(null);
	  O[2] = 2;
	  return !propertyIsEnumerable(O, 2);
	});

	// `Object.{ entries, values }` methods implementation
	var createMethod = function (TO_ENTRIES) {
	  return function (it) {
	    var O = toIndexedObject$2(it);
	    var keys = objectKeys$1(O);
	    var IE_WORKAROUND = IE_BUG && objectGetPrototypeOf(O) === null;
	    var length = keys.length;
	    var i = 0;
	    var result = [];
	    var key;
	    while (length > i) {
	      key = keys[i++];
	      if (!DESCRIPTORS$2 || (IE_WORKAROUND ? key in O : propertyIsEnumerable(O, key))) {
	        push(result, TO_ENTRIES ? [key, O[key]] : O[key]);
	      }
	    }
	    return result;
	  };
	};

	var objectToArray = {
	  // `Object.entries` method
	  // https://tc39.es/ecma262/#sec-object.entries
	  entries: createMethod(true),
	  // `Object.values` method
	  // https://tc39.es/ecma262/#sec-object.values
	  values: createMethod(false)
	};

	var $$4 = _export;
	var $entries = objectToArray.entries;

	// `Object.entries` method
	// https://tc39.es/ecma262/#sec-object.entries
	$$4({ target: 'Object', stat: true }, {
	  entries: function entries(O) {
	    return $entries(O);
	  }
	});

	var path$3 = path$h;

	var entries$2 = path$3.Object.entries;

	var parent$8 = entries$2;

	var entries$1 = parent$8;

	var entries = entries$1;

	var _Object$entries2 = /*@__PURE__*/getDefaultExportFromCjs(entries);

	/**
	 * Set multiple attributes of a dom element
	 * @param {object} el dom element
	 * @param {object} attr dom attributes
	 * @returns {null} null
	 */
	function setMultipleAttributes(el, attr) {
	  for (var _i = 0, _Object$entries = _Object$entries2(attr); _i < _Object$entries.length; _i++) {
	    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
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

	var from = from$4;

	var _Array$from = /*@__PURE__*/getDefaultExportFromCjs(from);

	var symbol = symbol$4;

	var _Symbol = /*@__PURE__*/getDefaultExportFromCjs(symbol);

	var path$2 = path$h;

	var getOwnPropertySymbols$2 = path$2.Object.getOwnPropertySymbols;

	var parent$7 = getOwnPropertySymbols$2;

	var getOwnPropertySymbols$1 = parent$7;

	var getOwnPropertySymbols = getOwnPropertySymbols$1;

	var _Object$getOwnPropertySymbols = /*@__PURE__*/getDefaultExportFromCjs(getOwnPropertySymbols);

	var $$3 = _export;
	var DESCRIPTORS$1 = descriptors;
	var ownKeys$3 = ownKeys$5;
	var toIndexedObject$1 = toIndexedObject$b;
	var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
	var createProperty = createProperty$4;

	// `Object.getOwnPropertyDescriptors` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
	$$3({ target: 'Object', stat: true, sham: !DESCRIPTORS$1 }, {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
	    var O = toIndexedObject$1(object);
	    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
	    var keys = ownKeys$3(O);
	    var result = {};
	    var index = 0;
	    var key, descriptor;
	    while (keys.length > index) {
	      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
	      if (descriptor !== undefined) createProperty(result, key, descriptor);
	    }
	    return result;
	  }
	});

	var path$1 = path$h;

	var getOwnPropertyDescriptors$2 = path$1.Object.getOwnPropertyDescriptors;

	var parent$6 = getOwnPropertyDescriptors$2;

	var getOwnPropertyDescriptors$1 = parent$6;

	var getOwnPropertyDescriptors = getOwnPropertyDescriptors$1;

	var _Object$getOwnPropertyDescriptors = /*@__PURE__*/getDefaultExportFromCjs(getOwnPropertyDescriptors);

	function _typeof(o) {
	  "@babel/helpers - typeof";

	  return _typeof = "function" == typeof _Symbol$2 && "symbol" == typeof _Symbol$iterator ? function (o) {
	    return typeof o;
	  } : function (o) {
	    return o && "function" == typeof _Symbol$2 && o.constructor === _Symbol$2 && o !== _Symbol$2.prototype ? "symbol" : typeof o;
	  }, _typeof(o);
	}

	var WrappedWellKnownSymbolModule = wellKnownSymbolWrapped;

	var toPrimitive$5 = WrappedWellKnownSymbolModule.f('toPrimitive');

	var parent$5 = toPrimitive$5;

	var toPrimitive$4 = parent$5;

	var parent$4 = toPrimitive$4;

	var toPrimitive$3 = parent$4;

	var parent$3 = toPrimitive$3;

	var toPrimitive$2 = parent$3;

	var toPrimitive$1 = toPrimitive$2;

	var _Symbol$toPrimitive = /*@__PURE__*/getDefaultExportFromCjs(toPrimitive$1);

	function toPrimitive(t, r) {
	  if ("object" != _typeof(t) || !t) return t;
	  var e = t[_Symbol$toPrimitive];
	  if (void 0 !== e) {
	    var i = e.call(t, r || "default");
	    if ("object" != _typeof(i)) return i;
	    throw new TypeError("@@toPrimitive must return a primitive value.");
	  }
	  return ("string" === r ? String : Number)(t);
	}

	function toPropertyKey(t) {
	  var i = toPrimitive(t, "string");
	  return "symbol" == _typeof(i) ? i : i + "";
	}

	function _defineProperty$1(obj, key, value) {
	  key = toPropertyKey(key);
	  if (key in obj) {
	    _Object$defineProperty(obj, key, {
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

	var _isString = /*@__PURE__*/getDefaultExportFromCjs(isString_1);

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

	var Symbol$1 = _Symbol$1,
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

	function apply$2(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	var _apply = apply$2;

	var apply$1 = _apply;

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
	    return apply$1(func, this, otherArgs);
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

	var defineProperty$2 = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	var _defineProperty = defineProperty$2;

	var constant = constant_1,
	    defineProperty$1 = _defineProperty,
	    identity$1 = identity_1;

	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString$1 = !defineProperty$1 ? identity$1 : function(func, string) {
	  return defineProperty$1(func, 'toString', {
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

	var _difference = /*@__PURE__*/getDefaultExportFromCjs(difference_1);

	function anonymous$6(locals, escapeFn, include, rethrow
	) {
	rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
	  var lines = str.split('\n');
	  var start = Math.max(lineno - 3, 0);
	  var end = Math.min(lines.length, lineno + 3);
	  var filename = esc(flnm);
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
	rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
	  var lines = str.split('\n');
	  var start = Math.max(lineno - 3, 0);
	  var end = Math.min(lines.length, lineno + 3);
	  var filename = esc(flnm);
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
	rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
	  var lines = str.split('\n');
	  var start = Math.max(lineno - 3, 0);
	  var end = Math.min(lines.length, lineno + 3);
	  var filename = esc(flnm);
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
	rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
	  var lines = str.split('\n');
	  var start = Math.max(lineno - 3, 0);
	  var end = Math.min(lines.length, lineno + 3);
	  var filename = esc(flnm);
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
	rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
	  var lines = str.split('\n');
	  var start = Math.max(lineno - 3, 0);
	  var end = Math.min(lines.length, lineno + 3);
	  var filename = esc(flnm);
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
	rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
	  var lines = str.split('\n');
	  var start = Math.max(lineno - 3, 0);
	  var end = Math.min(lines.length, lineno + 3);
	  var filename = esc(flnm);
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
	rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
	  var lines = str.split('\n');
	  var start = Math.max(lineno - 3, 0);
	  var end = Math.min(lines.length, lineno + 3);
	  var filename = esc(flnm);
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
	  if (_includesInstanceProperty(availableJsonLangs).call(availableJsonLangs, lang)) {
	    var li8n = i8n[lang];
	    // spinner
	    var spinner = {};
	    for (var _i2 = 0, _Object$entries = _Object$entries2(li8n.spinner); _i2 < _Object$entries.length; _i2++) {
	      var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
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
	  if (_indexOfInstanceProperty(userLang).call(userLang, 'zh') !== -1) {
	    return 'zh_CN';
	  } else {
	    return 'en_US';
	  }
	}
	var userLang = langDetect();
	function setLang(x) {
	  if (_includesInstanceProperty(availableLangs).call(availableLangs, x)) {
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
	  var mk = _sliceInstanceProperty(val).call(val, 0, 1);
	  try {
	    switch (mk) {
	      case magicKey.undefined:
	        return undefined;
	      case magicKey.null:
	        return null;
	      case magicKey.function:
	        return new Function(`return ${_sliceInstanceProperty(val).call(val, 1)}`)();
	      default:
	        return val;
	    }
	  } catch (error) {
	    // CSP rule may block new Function
	    return null;
	  }
	}
	function stringify(obj) {
	  return _JSON$stringify(obj, replacer);
	}
	function parse(obj) {
	  return JSON.parse(obj, reviver);
	}
	var JSONE = {
	  stringify,
	  parse
	};

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

	var _isBoolean = /*@__PURE__*/getDefaultExportFromCjs(isBoolean_1);

	var baseKeys = _baseKeys,
	    getTag = _getTag,
	    isArguments = isArguments_1,
	    isArray = isArray_1,
	    isArrayLike = isArrayLike_1,
	    isBuffer = isBufferExports,
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

	var _isEmpty = /*@__PURE__*/getDefaultExportFromCjs(isEmpty_1);

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

	var _isNull = /*@__PURE__*/getDefaultExportFromCjs(isNull_1);

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

	var _isUndefined = /*@__PURE__*/getDefaultExportFromCjs(isUndefined_1);

	var $$2 = _export;
	var uncurryThis$1 = functionUncurryThisClause;
	var toLength = toLength$3;
	var toString = toString$d;
	var notARegExp = notARegexp;
	var requireObjectCoercible = requireObjectCoercible$9;
	var correctIsRegExpLogic = correctIsRegexpLogic;

	var slice = uncurryThis$1(''.slice);
	var min$1 = Math.min;

	var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith');

	// `String.prototype.endsWith` method
	// https://tc39.es/ecma262/#sec-string.prototype.endswith
	$$2({ target: 'String', proto: true, forced: !CORRECT_IS_REGEXP_LOGIC }, {
	  endsWith: function endsWith(searchString /* , endPosition = @length */) {
	    var that = toString(requireObjectCoercible(this));
	    notARegExp(searchString);
	    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
	    var len = that.length;
	    var end = endPosition === undefined ? len : min$1(toLength(endPosition), len);
	    var search = toString(searchString);
	    return slice(that, end - search.length, end) === search;
	  }
	});

	var getBuiltInPrototypeMethod$1 = getBuiltInPrototypeMethod$e;

	var endsWith$3 = getBuiltInPrototypeMethod$1('String', 'endsWith');

	var isPrototypeOf$1 = objectIsPrototypeOf;
	var method$1 = endsWith$3;

	var StringPrototype = String.prototype;

	var endsWith$2 = function (it) {
	  var own = it.endsWith;
	  return typeof it == 'string' || it === StringPrototype
	    || (isPrototypeOf$1(StringPrototype, it) && own === StringPrototype.endsWith) ? method$1 : own;
	};

	var parent$2 = endsWith$2;

	var endsWith$1 = parent$2;

	var endsWith = endsWith$1;

	var _endsWithInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(endsWith);

	var DESCRIPTORS = descriptors;
	var uncurryThis = functionUncurryThis;
	var call = functionCall;
	var fails = fails$r;
	var objectKeys = objectKeys$4;
	var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
	var propertyIsEnumerableModule = objectPropertyIsEnumerable;
	var toObject = toObject$b;
	var IndexedObject = indexedObject;

	// eslint-disable-next-line es/no-object-assign -- safe
	var $assign = Object.assign;
	// eslint-disable-next-line es/no-object-defineproperty -- required for testing
	var defineProperty = Object.defineProperty;
	var concat = uncurryThis([].concat);

	// `Object.assign` method
	// https://tc39.es/ecma262/#sec-object.assign
	var objectAssign = !$assign || fails(function () {
	  // should have correct order of operations (Edge bug)
	  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
	    enumerable: true,
	    get: function () {
	      defineProperty(this, 'b', {
	        value: 3,
	        enumerable: false
	      });
	    }
	  }), { b: 2 })).b !== 1) return true;
	  // should work with symbols and should have deterministic property order (V8 bug)
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line es/no-symbol -- safe
	  var symbol = Symbol('assign detection');
	  var alphabet = 'abcdefghijklmnopqrst';
	  A[symbol] = 7;
	  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
	  return $assign({}, A)[symbol] !== 7 || objectKeys($assign({}, B)).join('') !== alphabet;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
	  var T = toObject(target);
	  var argumentsLength = arguments.length;
	  var index = 1;
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
	  var propertyIsEnumerable = propertyIsEnumerableModule.f;
	  while (argumentsLength > index) {
	    var S = IndexedObject(arguments[index++]);
	    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) {
	      key = keys[j++];
	      if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
	    }
	  } return T;
	} : $assign;

	var $$1 = _export;
	var assign$3 = objectAssign;

	// `Object.assign` method
	// https://tc39.es/ecma262/#sec-object.assign
	// eslint-disable-next-line es/no-object-assign -- required for testing
	$$1({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign$3 }, {
	  assign: assign$3
	});

	var path = path$h;

	var assign$2 = path.Object.assign;

	var parent$1 = assign$2;

	var assign$1 = parent$1;

	var assign = assign$1;

	var _Object$assign = /*@__PURE__*/getDefaultExportFromCjs(assign);

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
	  return _mapInstanceProperty(Array.prototype).call(new Uint8Array(buffer), function (x) {
	    var _context;
	    return _sliceInstanceProperty(_context = '00' + x.toString(16)).call(_context, -2);
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
	  return _mapInstanceProperty([]).call(text, function (x) {
	    if (isURIcomponent(x)) {
	      return x;
	    } else {
	      var _context2;
	      return `%${_mapInstanceProperty(_context2 = encodeHex(x)).call(_context2, function (x) {
        return x.toUpperCase();
      }).join('%')}`;
	    }
	  }).join('');
	}

	var lowercaseKeys = (function (object) {
	  var result = {};
	  for (var _i = 0, _Object$entries = _Object$entries2(object); _i < _Object$entries.length; _i++) {
	    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
	      key = _Object$entries$_i[0],
	      value = _Object$entries$_i[1];
	    result[key.toLowerCase()] = value;
	  }
	  return result;
	});

	function ownKeys$2(e, r) { var t = Object.keys(e); if (_Object$getOwnPropertySymbols) { var o = _Object$getOwnPropertySymbols(e); r && (o = _filterInstanceProperty(o).call(o, function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
	function _objectSpread$2(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$2(Object(t), !0).forEach(function (r) { _defineProperty$1(e, r, t[r]); }) : _Object$getOwnPropertyDescriptors ? Object.defineProperties(e, _Object$getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
	var isNullOrUndefined = function isNullOrUndefined(x) {
	  return _isUndefined(x) || _isNull(x);
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
	    var _context;
	    return _mapInstanceProperty(_context = Object.keys(params)).call(_context, function (key) {
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
	  var keyNotMerge = [];
	  // `options.headers`
	  if (!isNullOrUndefined(options.headers) && _isString(options.headers)) {
	    try {
	      options.headers = JSON.parse(options.headers);
	    } catch (error) {
	      console.error(`[Super-preloader] [got] header: ${options.headers} error: ${error}`);
	      delete options.headers;
	    }
	  }
	  if (!isNullOrUndefined(options.headers) && !_isEmpty(options.headers)) {
	    options.headers = lowercaseKeys(options.headers);
	    var headers = options.headers;
	    if (headers) {
	      for (var _i = 0, _Object$entries = _Object$entries2(headers); _i < _Object$entries.length; _i++) {
	        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
	          key = _Object$entries$_i[0],
	          value = _Object$entries$_i[1];
	        if (_isNull(value) || _isUndefined(value)) {
	          delete headers[key];
	        }
	      }
	    }
	  }
	  options.headers = _objectSpread$2(_objectSpread$2({}, thisDefaults.headers), options.headers);
	  if (_isEmpty(options.headers)) {
	    delete options.headers;
	  }
	  keyNotMerge.push('headers');

	  // `options.prefixUrl`
	  if (!isNullOrUndefined(options.prefixUrl)) {
	    try {
	      var _context2;
	      options.prefixUrl = options.prefixUrl.toString();
	      if (!_endsWithInstanceProperty(_context2 = options.prefixUrl).call(_context2, '/')) {
	        options.prefixUrl += '/';
	      }
	    } catch (error) {
	      delete options.prefixUrl;
	    }
	  } else if (options.url[0] === '/') {
	    options.prefixUrl = `${window.location.protocol}//${window.location.host}`;
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
	    if (_isString(options.searchParams)) {
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
	  for (var _key in thisDefaults) {
	    if (!(_key in keyNotMerge)) {
	      if (isNullOrUndefined(options[_key])) {
	        options[_key] = thisDefaults[_key];
	      }
	    }
	  }

	  // `options.cookie`, dirty fix for older versions of TM and VM on Firefox
	  if (!isNullOrUndefined(options.cookie)) {
	    if (_isBoolean(options.cookie) && options.cookie) {
	      options.cookie = document.cookie;
	    }
	    if (_isString(options.cookie)) {
	      if (options.hasOwnProperty('headers')) {
	        options.headers.cookie = options.cookie;
	      } else {
	        options.headers = {
	          cookie: options.cookie
	        };
	      }
	    }
	  }
	  if (options.noHeader || _isEmpty(options.headers)) {
	    delete options.headers;
	  }

	  // `options.cache`
	  if (_isBoolean(options.cache) && !options.cache) {
	    options.searchParams.timestamp = new Date().getTime();
	  }
	  if (_isEmpty(options.searchParams)) {
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
	  });

	  // process `options.prefixUrl`
	  if (options.prefixUrl) {
	    config.url = options.prefixUrl + options.url;
	  }
	  // process `options.encoding`
	  if (options.html && _isString(options.encoding)) {
	    config.overrideMimeType = `text/html; charset=${options.encoding}`;
	  }
	  // process `options.searchParams`
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
	    if (_isObject(url)) {
	      gotOptions = _objectSpread$2({}, url);
	    }
	  }
	  if (_isString(url)) {
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
	    gotOptions = normalizeArguments(gotOptions, request.defaults);

	    // got => gm
	    var gmOptions = gotopt2gmopt(gotOptions);
	    logger.debug("[Super-preloader]", 'GM_xmlhttpRequest', gmOptions);

	    // helper functions
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
	        _Object$assign(nodeResponse, xmlResponse);
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
	      return new _Promise(function (resolve, reject) {
	        gmOptions.onload = genCallback(resolve, 'onload', retryCount);
	        ['onabort', 'onerror', 'ontimeout'].forEach(function (method) {
	          gmOptions[method] = genCallback(reject, method, retryCount);
	        });
	        GM.xmlHttpRequest(gmOptions);
	      });
	    };
	    return new _Promise(function (resolve, reject) {
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
	  request.defaults = {};
	  // eslint-disable-next-line guard-for-in
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

	var _flatten = /*@__PURE__*/getDefaultExportFromCjs(flatten_1);

	function ownKeys$1(e, r) { var t = Object.keys(e); if (_Object$getOwnPropertySymbols) { var o = _Object$getOwnPropertySymbols(e); r && (o = _filterInstanceProperty(o).call(o, function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
	function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty$1(e, r, t[r]); }) : _Object$getOwnPropertyDescriptors ? Object.defineProperties(e, _Object$getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
	function _createForOfIteratorHelper$2(o, allowArrayLike) { var it = typeof _Symbol !== "undefined" && o[_Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$2(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
	function _unsupportedIterableToArray$2(o, minLen) { var _context10; if (!o) return; if (typeof o === "string") return _arrayLikeToArray$2(o, minLen); var n = _sliceInstanceProperty(_context10 = Object.prototype.toString.call(o)).call(_context10, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return _Array$from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen); }
	function _arrayLikeToArray$2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
	var got = got$1.create({
	  cache: false
	});

	// Definition of provider
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
	    this.url = _isArray(url) ? url : [url];
	    this.detailUrl = detailUrl;
	    this.rule = [];
	    if (_isFunction(ruleParser)) {
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
	    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
	      var rule, e, _iterator, _step, url, res;
	      return _regeneratorRuntime.wrap(function _callee$(_context) {
	        while (1) switch (_context.prev = _context.next) {
	          case 0:
	            rule = [];
	            e = null;
	            _iterator = _createForOfIteratorHelper$2(_this.url);
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
	    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
	      var res, detail, ruleLastUpdate, rule;
	      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
	        while (1) switch (_context2.prev = _context2.next) {
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
	            logger.error("[Super-preloader]", `[UpdateRule] ${_this2.name} [Status] ${_context2.t0}`);
	            // mimic Promise.allSettled
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
	      }, _callee2, null, [[1, 7], [14, 22]]);
	    }))();
	  }
	}

	// Providers
	var MyData = new RuleProvider('machsix.github.io', ['https://machsix.github.io/Super-preloader/mydata.json'], 'https://machsix.github.io/Super-preloader/mydata_detail.json');
	var WeData = new RuleProvider('wedata.net', ['http://wedata.net/databases/AutoPagerize/items.json', 'https://machsix.github.io/Super-preloader/wedata.json'], 'http://wedata.net/databases/AutoPagerize.json', function (res) {
	  var _context3, _context4;
	  return _mapInstanceProperty(_context3 = _filterInstanceProperty(_context4 = _isString(res.data) ? JSON.parse(res.data) : res.data).call(_context4, function (i) {
	    var nameFilter = ['Generic Posts Rule', 'hAtom'];
	    for (var j = 0; j < nameFilter.length; j++) {
	      var _context5;
	      if (_indexOfInstanceProperty(_context5 = nameFilter[j]).call(_context5, i.name) >= 0) {
	        return false;
	      }
	    }
	    return true;
	  })).call(_context3, function (i) {
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
	  rule: _mapInstanceProperty(p).call(p, function () {
	    return [];
	  }),
	  expire: new Date('1992-05-15'),
	  updatePeriodInDay: 1,
	  resetExpire() {
	    this.expire = new Date('1992-05-15');
	  },
	  getRule() {
	    return _flatten(this.rule);
	  },
	  saveRule() {
	    var _this3 = this;
	    var saveDB = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
	      return _regeneratorRuntime.wrap(function _callee3$(_context6) {
	        while (1) switch (_context6.prev = _context6.next) {
	          case 0:
	            _context6.next = 2;
	            return GM.setValue('jsonRuleInfo', {
	              expire: _this3.expire.toJSON(),
	              updatePeriodInDay: _this3.updatePeriodInDay
	            });
	          case 2:
	            if (!saveDB) {
	              _context6.next = 5;
	              break;
	            }
	            _context6.next = 5;
	            return GM.setValue('SITEINFO_json', _this3.rule);
	          case 5:
	          case "end":
	            return _context6.stop();
	        }
	      }, _callee3);
	    }))();
	  },
	  updateRule() {
	    var _this4 = this;
	    var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
	      var lastUpdate, today, _context7, promises;
	      return _regeneratorRuntime.wrap(function _callee4$(_context8) {
	        while (1) switch (_context8.prev = _context8.next) {
	          case 0:
	            if (force) {
	              _this4.resetExpire();
	            }
	            lastUpdate = new Date(+_this4.expire - _this4.updatePeriodInDay * 24 * 60 * 60 * 1000);
	            today = new Date();
	            if (!(today > _this4.expire)) {
	              _context8.next = 9;
	              break;
	            }
	            promises = _mapInstanceProperty(_context7 = _this4.providers).call(_context7, function (x) {
	              return x.updateRule(lastUpdate);
	            });
	            _context8.next = 7;
	            return _Promise.all(promises).then(function (values) {
	              var status = _mapInstanceProperty(values).call(values, function (_ref) {
	                var status = _ref.status;
	                return status === 'fulfilled' || false;
	              });
	              if (status.every(function (x) {
	                return x;
	              })) {
	                _this4.rule = _mapInstanceProperty(values).call(values, function (_ref2) {
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
	          case 7:
	            _context8.next = 10;
	            break;
	          case 9:
	            logger.info("[Super-preloader]", `[UpdateRule] Next update at: ${_this4.expire}`);
	          case 10:
	          case "end":
	            return _context8.stop();
	        }
	      }, _callee4);
	    }))();
	  },
	  loadRule() {
	    var _this5 = this;
	    var forceUpdateRule = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5() {
	      var _yield$Promise$all, _yield$Promise$all2, jsonRuleInfo, rule;
	      return _regeneratorRuntime.wrap(function _callee5$(_context9) {
	        while (1) switch (_context9.prev = _context9.next) {
	          case 0:
	            _context9.next = 2;
	            return _Promise.all([GM.getValue('jsonRuleInfo', {
	              expire: _this5.expire.toJSON(),
	              updatePeriodInDay: _this5.updatePeriodInDay
	            }), GM.getValue('SITEINFO_json', _this5.rule)]);
	          case 2:
	            _yield$Promise$all = _context9.sent;
	            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
	            jsonRuleInfo = _yield$Promise$all2[0];
	            rule = _yield$Promise$all2[1];
	            if (_isString(jsonRuleInfo)) jsonRuleInfo = JSON.parse(jsonRuleInfo);
	            if (_isString(rule)) rule = JSON.parse(rule);
	            _this5.expire = new Date(jsonRuleInfo.expire);
	            _this5.updatePeriodInDay = parseInt(jsonRuleInfo.updatePeriodInDay);
	            _this5.rule = rule;
	            if (!(forceUpdateRule || _this5.getRule().length === 0)) {
	              _context9.next = 14;
	              break;
	            }
	            _context9.next = 14;
	            return _this5.updateRule(true);
	          case 14:
	            return _context9.abrupt("return", _this5.getRule());
	          case 15:
	          case "end":
	            return _context9.stop();
	        }
	      }, _callee5);
	    }))();
	  }
	};

	function ownKeys(e, r) { var t = Object.keys(e); if (_Object$getOwnPropertySymbols) { var o = _Object$getOwnPropertySymbols(e); r && (o = _filterInstanceProperty(o).call(o, function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
	function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty$1(e, r, t[r]); }) : _Object$getOwnPropertyDescriptors ? Object.defineProperties(e, _Object$getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
	function _createForOfIteratorHelper$1(o, allowArrayLike) { var it = typeof _Symbol !== "undefined" && o[_Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
	function _unsupportedIterableToArray$1(o, minLen) { var _context11; if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = _sliceInstanceProperty(_context11 = Object.prototype.toString.call(o)).call(_context11, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return _Array$from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }
	function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
	// ---------------------- Settings stored in GM storaged, changed by control pannel ---------------
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
	};

	// const settingsKeys = ["prefs", "SITEINFO_D", "autoMatch", "version"];
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
	  var newKeys = _difference(Object.keys(newProp), Object.keys(oldProp));
	  newKeys.forEach(function (key) {
	    oldProp[key] = newProp[key];
	    hasDifferency = true;
	  });
	  var oldKeys = _difference(Object.keys(oldProp), Object.keys(newProp));
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
	  _resetSettings = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
	    return _regeneratorRuntime.wrap(function _callee$(_context) {
	      while (1) switch (_context.prev = _context.next) {
	        case 0:
	          logger.info("[Super-preloader]", 'settings are reset');
	          _context.next = 3;
	          return _Promise.all(_mapInstanceProperty(settingsKeys).call(settingsKeys, function (key) {
	            return GM.setValue(key, factorySettings[key]);
	          }));
	        case 3:
	        case "end":
	          return _context.stop();
	      }
	    }, _callee);
	  }));
	  return _resetSettings.apply(this, arguments);
	}
	function saveSettings(_x) {
	  return _saveSettings.apply(this, arguments);
	}
	function _saveSettings() {
	  _saveSettings = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(values) {
	    var _context2, _context3;
	    return _regeneratorRuntime.wrap(function _callee2$(_context4) {
	      while (1) switch (_context4.prev = _context4.next) {
	        case 0:
	          _context4.next = 2;
	          return _Promise.all(_mapInstanceProperty(_context2 = _filterInstanceProperty(_context3 = Object.keys(values)).call(_context3, function (x) {
	            return _includesInstanceProperty(settingsKeys).call(settingsKeys, x);
	          })).call(_context2, function (key) {
	            return GM.setValue(key, values[key]);
	          }));
	        case 2:
	        case "end":
	          return _context4.stop();
	      }
	    }, _callee2);
	  }));
	  return _saveSettings.apply(this, arguments);
	}
	function getServerIp(_x2) {
	  return _getServerIp.apply(this, arguments);
	}
	function _getServerIp() {
	  _getServerIp = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(hostname) {
	    var ipv4Regex, res, result, _iterator, _step, d;
	    return _regeneratorRuntime.wrap(function _callee3$(_context5) {
	      while (1) switch (_context5.prev = _context5.next) {
	        case 0:
	          ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
	          _context5.prev = 1;
	          _context5.next = 4;
	          return got$1.get('https://1.1.1.1/dns-query', {
	            searchParams: {
	              name: hostname,
	              type: 'A'
	            },
	            headers: {
	              accept: 'application/dns-json'
	            }
	          });
	        case 4:
	          res = _context5.sent;
	          result = JSON.parse(res.data);
	          _iterator = _createForOfIteratorHelper$1(result.Answer);
	          _context5.prev = 7;
	          _iterator.s();
	        case 9:
	          if ((_step = _iterator.n()).done) {
	            _context5.next = 15;
	            break;
	          }
	          d = _step.value;
	          if (!ipv4Regex.test(d.data)) {
	            _context5.next = 13;
	            break;
	          }
	          return _context5.abrupt("return", d.data);
	        case 13:
	          _context5.next = 9;
	          break;
	        case 15:
	          _context5.next = 20;
	          break;
	        case 17:
	          _context5.prev = 17;
	          _context5.t0 = _context5["catch"](7);
	          _iterator.e(_context5.t0);
	        case 20:
	          _context5.prev = 20;
	          _iterator.f();
	          return _context5.finish(20);
	        case 23:
	          return _context5.abrupt("return", '127.0.0.1');
	        case 26:
	          _context5.prev = 26;
	          _context5.t1 = _context5["catch"](1);
	          return _context5.abrupt("return", '127.0.0.1');
	        case 29:
	        case "end":
	          return _context5.stop();
	      }
	    }, _callee3, null, [[1, 26], [7, 17, 20, 23]]);
	  }));
	  return _getServerIp.apply(this, arguments);
	}
	function loadSettings() {
	  return _loadSettings.apply(this, arguments);
	}

	// ---------------------- Settings stored in localStorage, changed by floatWindow ---------------
	function _loadSettings() {
	  _loadSettings = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
	    var _context8, _context9;
	    var values, myOldVersion, isRewrote, verDiff, isInstalled, postLoading, hasDifferency, _context6, opts, _context7, _yield$Promise$all, _yield$Promise$all2, jsonRule, blackList;
	    return _regeneratorRuntime.wrap(function _callee4$(_context10) {
	      while (1) switch (_context10.prev = _context10.next) {
	        case 0:
	          _context10.next = 2;
	          return _Promise.all(_mapInstanceProperty(settingsKeys).call(settingsKeys, function (key) {
	            return GM.getValue(key, factorySettings[key]);
	          }));
	        case 2:
	          values = _context10.sent;
	          settingsKeys.forEach(function (x, i) {
	            settings[settingsKeys[i]] = values[i];
	          });
	          myOldVersion = settings.version;
	          isRewrote = compareVersions(settings.version, SCRIPT_INFO.rewriteStorage) === -1;
	          if (isRewrote) {
	            // old version uses string to store this data
	            if (_isString(settings.prefs)) settings.prefs = JSON.parse(settings.prefs);
	            if (_isString(settings.SITEINFO_D)) settings.SITEINFO_D = JSON.parse(settings.SITEINFO_D);
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
	              postLoading.push(_Promise.resolve([])); //insert an empty jsonRule
	            } else {
	              postLoading.push(jsonRuleLoader.loadRule());
	            }
	          }

	          // set global variables based on prefs
	          if (typeof settings.prefs.debug !== 'undefined') {
	            logger.setLevel(settings.prefs.debug ? 'debug' : 'info');
	          }
	          if (settings.prefs.ChineseUI) {
	            setLang('zh_CN');
	          }

	          // send notification
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
	              if (_includesInstanceProperty(_context6 = Object.keys(NOTIFICATION)).call(_context6, 'extratext')) {
	                if (_includesInstanceProperty(_context7 = Object.keys(NOTIFICATION.extratext)).call(_context7, userLang)) {
	                  opts.text += NOTIFICATION.extratext[userLang];
	                } else {
	                  opts.text += NOTIFICATION.extratext.en_US;
	                }
	              }
	              GM.notification(opts);
	            }
	          }
	          _context10.next = 16;
	          return _Promise.all(postLoading);
	        case 16:
	          _yield$Promise$all = _context10.sent;
	          _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 1);
	          jsonRule = _yield$Promise$all2[0];
	          /** @type {string[]} */
	          blackList = _concatInstanceProperty(_context8 = []).call(_context8, _mapInstanceProperty(_context9 = settings.prefs.excludes.split(/[\n\r]+/)).call(_context9, function (line) {
	            return _trimInstanceProperty(line).call(line);
	          }));
	          return _context10.abrupt("return", _objectSpread({
	            jsonRule,
	            blackList
	          }, settings));
	        case 21:
	        case "end":
	          return _context10.stop();
	      }
	    }, _callee4);
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
	      for (var _i2 = 0, _Object$entries = _Object$entries2(localSetting); _i2 < _Object$entries.length; _i2++) {
	        var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
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
	  return _sliceInstanceProperty([]).call(contextNode.querySelectorAll(css));
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
	    var result = doc.evaluate(xpath, contextNode, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
	    //@ts-ignore should always return an element node
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
	      var node = query.snapshotItem(i);
	      //if node is an element node
	      if (node.nodeType === 1) result.push(node);
	    }
	  } catch (err) {
	    throw new Error(`Invalid xpath: ${xpath}`);
	  }
	  //@ts-ignore
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
	  if (!selector) return [];
	  //@ts-ignore
	  contextNode = contextNode || doc;
	  if (typeof selector === 'string') {
	    if (selector.search(/^css;/i) === 0) {
	      return getAllElementsByCSS(_sliceInstanceProperty(selector).call(selector, 4), contextNode);
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
	      selector = selector.replace(/^id\((.*?)\)/g, '//*[@id=$1]');
	      // prevent xpath like `//div[2]`
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
	      childNodeCount.push(_reduceInstanceProperty([]).call(elems[0].children, function (x, y) {
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
	  eles = _filterInstanceProperty(eles).call(eles, function (e) {
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
	      obj = wildcardToRegExpStr(_sliceInstanceProperty(obj).call(obj, 6));
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
	} (displace$1));

	var displaceExports = displace$1.exports;
	var displace = /*@__PURE__*/getDefaultExportFromCjs(displaceExports);

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
	  return new _Promise(function (resolve) {
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

	// General rules for CMS like phpwind
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
	          var thisTrs = trs[i];
	          //@ts-ignore
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
	      }

	      // 在卡饭论坛如果不存在，会提示，所以默认禁用
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
	    pageElement: '(//div[@id="page-body"]/div[contains(@class,"post")]|//table[@class="forumline"]|//table[@class="tablebg"])'
	    // replaceE:"//fildset[@class='display-options']",
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
	      var _context, _context2;
	      var gen = getElementByXpath("//head/meta[@name='generator']", doc, doc);
	      //@ts-ignore
	      if (!gen || !_includesInstanceProperty(_context = gen.content).call(_context, 'Typecho') || !_includesInstanceProperty(_context2 = doc.documentElement.outerHTML).call(_context2, 'Typecho')) {
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
	    if (_sliceInstanceProperty(cplink).call(cplink, cplink.length - 5, cplink.length) === '.html') {
	      return undefined;
	    }
	    if (_sliceInstanceProperty(cplink).call(cplink, cplink.length - 4, cplink.length) === '.htm') {
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
	      var _context4;
	      var blackList = [/^https?:\/\/bwg\.net\/?$/, /^https?:\/\/sunbox\.cc\/?$/, /^https?:\/\/anime1\.me/, /^https?:\/\/github\.com/];
	      for (var i = 0; i < blackList.length; i++) {
	        if (blackList[i].test(_cplink)) {
	          return null;
	        }
	      }
	      // detect if this is wordpress
	      var wpText = ['wp-content', 'wp-plugin', 'wp-comment'];
	      var isWP = false;
	      for (i = 0; i < wpText.length; i++) {
	        var _context3;
	        if (_indexOfInstanceProperty(_context3 = doc.documentElement.outerHTML).call(_context3, wpText[i]) > -1) {
	          isWP = true;
	          break;
	        }
	      }
	      if (!isWP) {
	        return null;
	      }

	      // if this is the page of an article, return null
	      var submitComment = ['发表评论', '提交评论', '添加留言', '提交留言', 'コメントを送信', 'SUBMIT COMMENT', 'POST COMMENT', 'Submit Comment', 'Post comment', 'Post Comment'];
	      for (i = 0; i < submitComment.length; i++) {
	        if (getElementByXpath("//input[@value='" + submitComment[i] + "']", doc, doc)) {
	          return null;
	        }
	        if (getElementByXpath("//a[text()='" + submitComment[i] + "']", doc, doc)) {
	          return null;
	        }
	      }
	      if (_indexOfInstanceProperty(_context4 = document.documentElement.textContent || document.documentElement.innerText).call(_context4, 'comment-form')) {
	        // https://www.vlchelp.com/how-to-disable-building-font-cache/
	        return null;
	      }
	      var postXpath = ["//button[@id='submit']", "//div[@class='single-post-box']", "//div[@class='single_post']"];
	      for (i = 0; i < postXpath.length; i++) {
	        if (getElementByXpath(postXpath[i], doc, doc)) {
	          return null;
	        }
	      }

	      // get from latest post
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
	      }
	      //https://www.portablesoft.org/
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

	/* eslint-disable es/no-array-prototype-lastindexof -- safe */
	var apply = functionApply;
	var toIndexedObject = toIndexedObject$b;
	var toIntegerOrInfinity = toIntegerOrInfinity$5;
	var lengthOfArrayLike = lengthOfArrayLike$9;
	var arrayMethodIsStrict = arrayMethodIsStrict$4;

	var min = Math.min;
	var $lastIndexOf = [].lastIndexOf;
	var NEGATIVE_ZERO = !!$lastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
	var STRICT_METHOD = arrayMethodIsStrict('lastIndexOf');
	var FORCED = NEGATIVE_ZERO || !STRICT_METHOD;

	// `Array.prototype.lastIndexOf` method implementation
	// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
	var arrayLastIndexOf = FORCED ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
	  // convert -0 to +0
	  if (NEGATIVE_ZERO) return apply($lastIndexOf, this, arguments) || 0;
	  var O = toIndexedObject(this);
	  var length = lengthOfArrayLike(O);
	  if (length === 0) return -1;
	  var index = length - 1;
	  if (arguments.length > 1) index = min(index, toIntegerOrInfinity(arguments[1]));
	  if (index < 0) index = length + index;
	  for (;index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
	  return -1;
	} : $lastIndexOf;

	var $ = _export;
	var lastIndexOf$4 = arrayLastIndexOf;

	// `Array.prototype.lastIndexOf` method
	// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
	// eslint-disable-next-line es/no-array-prototype-lastindexof -- required for testing
	$({ target: 'Array', proto: true, forced: lastIndexOf$4 !== [].lastIndexOf }, {
	  lastIndexOf: lastIndexOf$4
	});

	var getBuiltInPrototypeMethod = getBuiltInPrototypeMethod$e;

	var lastIndexOf$3 = getBuiltInPrototypeMethod('Array', 'lastIndexOf');

	var isPrototypeOf = objectIsPrototypeOf;
	var method = lastIndexOf$3;

	var ArrayPrototype = Array.prototype;

	var lastIndexOf$2 = function (it) {
	  var own = it.lastIndexOf;
	  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.lastIndexOf) ? method : own;
	};

	var parent = lastIndexOf$2;

	var lastIndexOf$1 = parent;

	var lastIndexOf = lastIndexOf$1;

	var _lastIndexOfInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(lastIndexOf);

	function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof _Symbol !== "undefined" && o[_Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
	function _unsupportedIterableToArray(o, minLen) { var _context5; if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = _sliceInstanceProperty(_context5 = Object.prototype.toString.call(o)).call(_context5, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return _Array$from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
	function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

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
	      }
	      // Fix images
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
	      }

	      // Fix image of Youtube Video
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
	      }

	      // Fix g-img
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
	      doc.documentElement.removeChild(script);

	      // change id of related search
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
	  name: '4khd',
	  url: '^https?://www\\.4khd\\.com(/(pages|search|\\?query).*)?',
	  pageElement: "//li[contains(@class,'post')]",
	  exampleUrl: 'https://www.4khd.com/search/forger',
	  nextLink: "//span[contains(@class, 'current')]/following-sibling::a",
	  autopager: {
	    useiframe: true,
	    ipages: [true, 10],
	    separator: false,
	    startFilter: function startFilter(doc, _win) {
	      // 设置百度搜索类型为 s?wd=
	      try {
	        var elem = doc.querySelector('.fr-mobile-hide');
	        if (elem) {
	          var className = elem.className;
	          elem.setAttribute('class', className.replace('fr-mobile-hide', '').replace('fr-tablet-hide', ''));
	        }
	      } catch (ex) {}
	    }
	  }
	}, {
	  name: '4khd_post',
	  url: '^https?://www\\.4khd\\.com/.*\\.html$',
	  pageElement: "//div[contains(@class,'entry-content')]",
	  nextLink: "//li[@class='numpages current']/following-sibling::li/a",
	  useiframe: true,
	  autopager: {
	    ipages: [true, 10],
	    separator: true
	  }
	}, {
	  name: '性感尤物',
	  url: '^https?://(www\\.)?jpxgmn\\.com/[^/]*/[^/]*\\.html',
	  pageElement: "//article[@class='article-content']/p",
	  exampleUrl: 'http://www.xgyw.cc/Xgyw/Xgyw6874.html',
	  nextLink: "//div[@class='pagination']/ul/a[text()='下一页']",
	  autopager: {
	    ipages: [true, 30],
	    startFilter: function startFilter(doc, _win) {
	      var p = [doc.querySelector('div.pagination > p'), doc.querySelector('header > a[href^="http"]'), doc.querySelector('ins')];
	      p.forEach(function (x) {
	        if (x) {
	          x.remove();
	        }
	      });
	      var ad = doc.querySelector('div[class^="div_"]');
	      if (ad) {
	        ad.closest('div').remove();
	      }
	    }
	  }
	}, {
	  name: '性感尤物search',
	  url: '^https?://(www\\.)?jpxgmn\\.com/plus/search.*',
	  pageElement: "//div[@class='node']",
	  exampleUrl: 'https://www.xgmn5.xyz/plus/search/index.asp?keyword=%E5%B0%A4%E5%A6%AE%E4%B8%9D',
	  nextLink: "//div[@class='pagination']/ul/a[@class='current']/following-sibling::a",
	  autopager: {
	    ipages: [true, 5],
	    startFilter: function () {
	      var _startFilter = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(doc, _win) {
	        var items;
	        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
	          while (1) switch (_context2.prev = _context2.next) {
	            case 0:
	              if (!doc.getElementById('thumbCss')) {
	                addStyle('img.thumb{width:100%;height:auto;display:block}@media only screen and (min-width:1025px){img.thumb{width:50%}}', 'thumbCss', doc);
	              }
	              items = doc.querySelectorAll('div.node > a');
	              if (!(items.length > 0)) {
	                _context2.next = 5;
	                break;
	              }
	              _context2.next = 5;
	              return _Promise.all(_mapInstanceProperty([]).call(items, /*#__PURE__*/function () {
	                var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(a) {
	                  var link, res, docPage, img, newImg;
	                  return _regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) switch (_context.prev = _context.next) {
	                      case 0:
	                        link = a.getAttribute('href');
	                        _context.next = 3;
	                        return got$1.get(link);
	                      case 3:
	                        res = _context.sent;
	                        docPage = new DOMParser().parseFromString(res.data, 'text/html');
	                        img = docPage.querySelector('article.article-content > p > img');
	                        if (img) {
	                          newImg = createDOM('img', {
	                            attr: {
	                              src: img.getAttribute('src'),
	                              class: 'thumb'
	                              // style: 'display:block; width:50%; height:auto;'
	                            }
	                          });
	                          a.parentNode.insertBefore(newImg, a.nextSibling);
	                        }
	                      case 7:
	                      case "end":
	                        return _context.stop();
	                    }
	                  }, _callee);
	                }));
	                return function (_x3) {
	                  return _ref.apply(this, arguments);
	                };
	              }()));
	            case 5:
	            case "end":
	              return _context2.stop();
	          }
	        }, _callee2);
	      }));
	      function startFilter(_x, _x2) {
	        return _startFilter.apply(this, arguments);
	      }
	      return startFilter;
	    }(),
	    documentFilter: 'startFilter'
	  }
	}, {
	  name: '性感尤物2',
	  url: '^https?://(www\\.)?jpxgmn\\.com/new\\.html',
	  pageElement: "//li[@class='related_box']",
	  exampleUrl: 'http://www.xgyw.cc/Xgyw',
	  nextLink: 'null;',
	  autopager: {
	    ipages: [true, 10],
	    startFilter: function startFilter(doc, _win) {
	      var a = doc.querySelectorAll('li > a[href^="/html"]');
	      a.forEach(function (x) {
	        var li = x.closest('li');
	        li.remove();
	      });
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
	      var see_only_uname = unsafeWindow.see_only_uname;
	      //@ts-ignore
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
	    }
	    // 请求协议保持一致
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
	  }
	  // credit : https://greasyfork.org/en/forum/discussion/42040/x
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
	      }
	      //删除侧边栏
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
	},
	// {
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
	      }
	      // 隐藏分页
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
	    var parms = a.getAttribute('data-parameters').replace(/:/g, '=').replace(/;/g, '&');
	    // const containerID = a.getAttribute("data-container-id");
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
	      if (typeof scriptText != 'undefined' && _indexOfInstanceProperty(scriptText).call(scriptText, 'currentPage') > 0) {
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
	      }
	      // 移动分页位置
	      var pageBox = document.querySelector('#pageBox');
	      if (pageBox) {
	        pageBox.parentNode.parentNode.appendChild(pageBox);
	      }
	      // 删除广告
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
	      }
	      // 尾页的分页信息隐藏
	      var pageNav = doc.querySelectorAll('.mod_fun_wrap');
	      if (pageNav) {
	        var index = 0;
	        if (pageNav.length == 2) {
	          index = 1;
	        }
	        //@ts-ignore
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
	        }
	        //@ts-ignore
	        pageNav[index].style.display = 'none';
	      }
	      // 扩展的其他话题信息移除，长度太长，导致翻页信息有点问题
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
	      var _context3;
	      if (_indexOfInstanceProperty(_context3 = x.innerText).call(_context3, 'var chapter') >= 0) {
	        var _context4;
	        var temp = re.exec(x.innerText);
	        var content = temp[1];
	        var salt = temp[2];
	        // function secret is provided by the website
	        if (_indexOfInstanceProperty(_context4 = temp[3]).call(_context4, 'true') >= 0) {
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
	    var prefix = cplink.substr(0, _lastIndexOfInstanceProperty(cplink).call(cplink, '/')) + '/';
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
	    var next = Number(res.dataset.page) + 1;
	    //@ts-ignore
	    if (next > res.dataset.pagemax) {
	      return undefined;
	    } else {
	      if (_indexOfInstanceProperty(cplink).call(cplink, 'page=') != -1) {
	        return cplink.replace(/page=\d+/, 'page=' + next);
	      } else if (_indexOfInstanceProperty(cplink).call(cplink, '?') != -1) {
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
	    }
	    //@ts-ignore
	    var findout = /jumpurl\('(\w+)','?(\d+)'?\)/.exec(nextNode.innerHTML);
	    if (findout === null || findout.length != 3) {
	      return undefined;
	    }
	    var pageInfo = findout[1] + '=' + findout[2];
	    if (_indexOfInstanceProperty(cplink).call(cplink, findout[1] + '=') != -1) {
	      return cplink.replace(new RegExp(findout[1] + '=\\d+'), pageInfo);
	    } else if (_indexOfInstanceProperty(cplink).call(cplink, '?') != -1) {
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
	    var xpath_last = '//*[@id="page_select"]/option[last()]';
	    //@ts-ignore
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
	    var xpath_last = '//div[@id="pagination"]/a[contains(@href,"javascript") and not(@class)][last()]';
	    //@ts-ignore
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
	    var m = cplink.match(/(.*\d+\/)(\d+)(\.html\?s=\d+)((?:\?|&)d=.*)?/);
	    // const url_head = m[1];
	    var current = Number(m[2]);
	    var dID = m[4];
	    if (!dID) dID = '&d=0';
	    var next = current + 1;
	    // const xpath = '//div[@class="cH1"]/b[1]';
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
	    }
	    //@ts-ignore
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
	      _Array$from(d.querySelectorAll('iframe')).forEach(function (frame) {
	        return frame.remove();
	      });
	    },
	    documentFilter: function documentFilter(d, _nextLink) {
	      var link = d.body.innerHTML.match(/imgurl = '(.+)';/);
	      //@ts-ignore
	      if (link) link = '//fmvip.xzglasses.com' + link[1];
	      //@ts-ignore
	      d.getElementById('bigpic').src = link;
	      //@ts-ignore
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
	    var item = document.querySelector('.grid-item.column:nth-of-type(2)');
	    //@ts-ignore
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
	    var firstFlag = true;
	    // eslint-disable-next-line valid-jsdoc
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
	  while ((i = _indexOfInstanceProperty(arr).call(arr, val, i + 1)) != -1) {
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

	var spcss = {}; //@ts-check
	spcss["sp-separator"] = _wcImport4;
	spcss["sp-prefs-spinner"] = _wcImport3;
	spcss["sp-prefs-setup"] = _wcImport2;
	spcss["sp-fw"] = _wcImport;
	(function (_context) {
	  // use charset from currentDocument
	  var gotConfig = {
	    html: true,
	    encoding: document.characterSet
	  };
	  logger.setLevel('warn');

	  // `options.cookie`, dirty fix for older versions of TM and VM on Firefox
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
	  if (_includesInstanceProperty(_context = SCRIPT_MANAGER.name.toLowerCase()).call(_context, 'adguard')) {
	    logger.warn("[Super-preloader]", `${SCRIPT_MANAGER.name} has issues with some specific like Google due to the way it injects script`);
	  }
	  var got = got$1.create(gotConfig);
	  var scriptInfo = SCRIPT_INFO;

	  // ----------------------------------
	  // all rules
	  /** @type {IRule[]} */
	  var SSRules = [];
	  // ----------------------------------

	  // Check if we are looking at a file instead of a webpage
	  if (
	  // <svg>: SVG Document
	  document.documentElement.matches('svg') ||
	  // <pre>: plain text
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
	  }

	  // how to trigger lazy_load
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
	          p = _Promise.all(parr);
	        } else {
	          p = _Promise.resolve(undefined);
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
	            }
	            //window.scrollTo(0, scrollLocation);
	            window.parent.postMessage('superpreloader-iframe:DOMLoaded', '*');
	          });
	        }, timeout);
	      }
	    };
	    //@ts-ignore
	    if (window.opera) {
	      document.addEventListener('DOMContentLoaded', domLoaded, false);
	    } else {
	      domLoaded();
	    }
	    return;
	  }

	  // 在以下网站上允许在非顶层窗口上加载JS..比如猫扑之类的框架集网页.
	  var DIExclude = [['猫扑帖子', true, /^https?:\/\/dzh\.mop\.com\/[a-z]{3,6}\/\d{8}\/.*\.shtml$/i], ['铁血社区', true, /^https?:\/\/bbs\.tiexue\.net\/.*\.html$/i], ['铁血社区-2', true, /^https?:\/\/bbs\.qichelian\.com\/bbsqcl\.php\?fid/i],
	  // 像 http://so.baiduyun.me/ 内嵌的百度、Google 框架
	  ['百度网盘搜索引擎-百度', true, /^https?:\/\/www\.baidu\.com\/baidu/i], ['百度网盘搜索引擎-Google', true, /^https?:\/\/74\.125\.128\.147\/custom/i]];

	  // 页面不刷新的站点
	  var HashchangeSites = [{
	    url: /^https?:\/\/(www|encrypted)\.google(stable)?\..{2,9}\/(webhp|#|$|\?)/,
	    timer: 2000,
	    mutationSelector: '#main'
	  },
	  // 运营商可能会在 #wd= 前面添加 ?tn=07084049_pg
	  {
	    url: /^https?:\/\/www\.baidu\.com\/($|#wd=)/,
	    timer: 1000,
	    mutationSelector: '#wrapper_wrapper'
	  }, {
	    url: /^https?:\/\/www\.newsmth\.net/,
	    timer: 1000
	  }];

	  //  ///////// ----- End of Rules obtained from online json files -------///////////

	  // 分页导航的6个图标以及颜色设置:
	  var sep_icons = {
	    top: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAWtJREFUeNrclE0rRGEUx8c1GUpRJIVIZGdhZCVr38GGhaI0ZXwCkliglChZEcvJxhdgYWOjLEUpm/EyiLzze+o8dTzdO3PljoVTv7rPc8/5d+6555xYrEhWop6boda5+6l9wjWcWpF+WIbqCJJ9hFRcDr3QAIkIhKugz5PDfkSixkphz5aiAnqgE8rgWRxGoSOPyBkswQuUwyscw4HrmFCZL8Kt/JAg7mEFPEmo4FdPwk0BUcsdzIap0TQ8qMAPuICcEjLnd+VjSjcfJNgIc/DkZGSymYGsnK9EZMrxe4MFaNGiZjC2fT5zQ3p7QDK1dR2GSljziclAvRUe8nHYVA4jjvC43NfAuk/smB2QNqcsWxKcLbAKTFnS0hWD6n27Fd6FLqiDI5iQmQ9jpiVT0sNJ6aYd7dAE3QHBbinSAX5JWWaxuLo8F35jh/bBK9Y+/r/Cl6pLcnna8NvuDGMnslpbZRpXZYT/3r4EGACZL3ZL2afNFAAAAABJRU5ErkJggg==',
	    bottom: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAXFJREFUeNrM1c8rBGEcx/FdtCEkLqYtpdwkKSUHUhxwITdK+Z3yM2cOLnJ39Cc44SgHScmJwlFxsIdlCScO6/2t76Onp52dXTtbnno1M8+Pz84+zzMzkcg/KA3oRTzM0A4cI4VTdIUVPIM3pPGO5aABJTkGx1BqjYmFFZxW7nnBwXmXogWX6bEGc2jEIU7+kNWDUSSwZyqndSvJ3N1g2Bm0oLtB2j+w7rQP4MpqXzRT0YRaPW/BthMedYLs60HsoE2vq9BsPwAJa8XFLUa0fUrvROo/saT1Q9adGimdlt8yj6TT6Q6d2vaida9YRbtP6EqmBZC5fHA6X+AAz1bwEc6cfk9+oaZM4NoZJL70+J2hTaZtNpet041zK8yP/Mgl+rOF1emr0UM1xnAfEPyISd0Jno6vtx+QuM6PZ22lpO7dbEV2Siv6rPeIjNs1HdYC7ixfG+YBqdTVDqPIv6iIWvO7iXGUFxAqi72PraJ9IH8EGACQcYjYRd5GHwAAAABJRU5ErkJggg==',
	    pre: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAASlJREFUeNpiYBjOoBiIrwJxFRAzUsvQViD+CMT/gfgTEPdRy9BPUENh+AsQ91JiaAuSS9HxZ3INb8Hi0v+UurwF6qL/ROBvQNxDrKFfkTT+A+JnQPwBKfJA/L9Ian7ic7kMEHcC8Q80F3UAcRsQv4by30INaUJT9weaWhSQDRUB4uVYvLkYiAWAOBopvEFBlArEPEA8G4ue9UAsATM4EYuCJUgKMtAMLoSKCwPxXCx6c1igClTQgmUZVPNrHMEGy3mgYCkCYiYgTkCSV4UZvA2IjYBYDIgvQbPvOyJTECid5wHxbyA2BuL3QLwRWYEsEJvg0IweFEU41IEMlgcxWJAEH0MxJeAsjMFEq6Jw+Br8BimVfMCTDEkG7EBcA8T3oWUJx4DVYwABBgCannnSzbgwIQAAAABJRU5ErkJggg==',
	    next: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAT1JREFUeNrc1b1KA0EYheEl/iARFFEkKl6D0UK8CrEVrCwEexFCtBIlRWIjsfEiLL0FKzs7QUWxM2piFMUkvhPOwLAs2TGuCn7wkNll5jC7+w0Jgv9avdjAObbQn1TwCu7QwhWW4xakPIOHMKzxGCaSCm6ioXHLZ0Hqpz7KrwRPIvvNvBlM2zYyNY8cMjhDHo9fCBzErnIqKNjgRSxpvIABbOLes2MKWHfuXdhXcR2avKrJ4zGhI9gLhQbq9XaZgGO1kutIOzIHpKp7NawhjYOINSeY6lFwHacw17P6NTWHd4xqnNbcS83LObtsaCPbEW+gXUW8ODswC27xoOsn3ODDmfOGss9XLuE54jGjvPqGuuG1mFDzZIfdNHynnde7DbW1r5DwTstJHP2iE55YqD36ebXZDvr+7L/sU4ABAIpVZWnoA5GkAAAAAElFTkSuQmCC',
	    next_gray: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAtxJREFUeNrclc9L2mEcx7/6NbVZqRVj7pIOlIUuZ1HMgv0BDcqT7JrskH13ELPBF7eTvz10HznWQBlBRIfBXIfBLmqXscvYZWPKrMNIU9Apmrr34/w6i0ovMZjw+H0+z/N8Xt+Pn/fn80hR/+WHYRhBIpFwRKPRz/F4/KnD4RB28xH0Ah4cHHyoUCjsIpFIIZPJHkml0m9Yfn2ZD78XcL1eH6rValIMCmMUtqKbD7/HbNQxaq15oxcH/lXpcmXgtnh2u/2mXC6/DqE+sSxLlUqlniE0TVPBYJAqFot6+GV9Pt+PJthms80sLS2xEonkhlgs/jgwMOBcXV3N5fP5rlCcp9bX1yWLi4uecrk8U6lUshDY3wRbLJYFGKZsNksq4N78/LwY9hOn05k5Ojqi+PzTGePxeFwZUl6vd8hkMvkPDg6sZJ2M5eXlr1wqUu2kA5JOpy2IAO+oO9fW1n5mMpk2nDjmcjkKNU25XC652Wx2pVIp65mXJ2nyjUPpqakpNZxuA8Y5T87OzsobjcYHpVKpGhsbe1CtVkXYqxQKhTdqtfqL1Wr1JpPJxxyU5Lq/vz8aCoX8TTDatYiFhF6vxx5tAJwm8OPj48m5ubmKSqUaAWwSa9eQw6JGo/luNBoNh4eHbAe0JhAINsLh8LNAIJCiudhxB+Qh2ludTifDAQLvI3AIch+Rkl8jJlrhCbOqgfoLmDepOF/BfGNra2sFFZFtvqgzMbFYjAiyp9Vqh4VC4cTJyYmQ90epIQJtHRO1bA5aRhAvdnZ2GI/H87cEz5YPgeOS2RsfHx9B7u+gOi68yQAtYX9zd3eXgZCna/s8By5ypGUUzhOISHgO9BfWXwG6chZ6IbiVc6LwnsFgGIVAepLzjk4rYW1ze3ubcbvd53fjZV2FaqGQ63fT09PDMO9i9BEoon0J9Rm/339xm3dr2f39fVLX7wFvoMVvoYWfRyIRFndD/Z/8nf0WYAA8EC1Z/ZNm4gAAAABJRU5ErkJggg==',
	    pre_gray: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAslJREFUeNrclTtMWmEUxz/uvTzlIUhpNMR0aGNjrNHSmHTqRJyadujQDbSGRwJUaYCmDizqUEw6ODVNGgbpYCfSpFINCQzFR9oyMXRsXFCsAXkIKNL/R7gGWxOsSdPEk5zc3O+e87vn+59zv0vIpbSJiQmyubn5LBKJpNbX11+4XC5Buxy2XYDNZiMOh2OW4ziPTCbTi8XikeHh4SsSieQTXnIxsN1uJ1ardVYgEDgPDw+V9Xqd1Go1Mcuyg7AuuVy+sra29ndgVEnGx8dnhEKhs1qtKgE/eXZ8fCzC+q3+/n6tSqVaSSQS5wM7nU5iMplmsF1XpVI5BeXt6OhIBFkGAe9SKpV/wNmzKjWbzRT6tFwuK86CUqPrkIVWPjQwMKBWKBSn4Ozv0LGxsRmRSDSFSjua0Do8TRWAS+B5+B68g/IhixCNvQPN1WjuieZsS/f1aNQ0wzBuaCqlUCQRtVr9Es1K4kVDWJNhrQjAIiqMlkqle804FnkjBoOhEzv4vrGxkW2ALRaLFrq+QoAV2nE8tLe3dzEYDE5vb2939vX1PcBkiKVSaQ1jForFYq+NRqMum83ebsYzmJq7sGu4xhkKxsDfB/AxnO860ev1oeXlZU8gEMgmk0kFqmw8o9dUKiWfn58vhMPh54h7S+OpQXNSLBYfejyeR1yzw9dbRon09PS8W11dnfL5fJl8Pk+0Wi3hk5vyCNBY4vV6f0Im9+joKJNOp818o8G70ah4aWnpIzSKYCa/dXd3B+PxuHNycjKzs7NzAms1+qFQy+VydDRz0WjUpdPp3tB8TFM0FAqFGxXPzc19plJrNJqraMoXt9tNt3Suc+Tg4ICeJfmFhQVLoVAwoKG7fr//B8cHAL6Fy9ZFDinaG/r5w77ya8y/OhEvKRhjtIup2YMTeBb3mXY53HnAmNkP+/v7NzHTTwAO4f79f/ud/RJgAOLcRNZqLojMAAAAAElFTkSuQmCC',
	    text_span_style: 'color:#595959!important;'
	  };

	  // 悬浮窗的状态颜色.
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
	  };

	  // 上一页关键字
	  var prePageKey = ['上一页', '上一頁', '上1页', '上1頁', '上页', '上頁', '翻上頁', '翻上页', '上一张', '上一張', '上一幅', '上一章', '上一节', '上一節', '上一篇', '前一页', '前一頁', '后退', '後退', '上篇', 'previous', 'previous Page', '前へ', '前のページ'];

	  // 下一页关键字
	  var nextPageKey = ['下一页', '下一頁', '下1页', '下1頁', '下页', '下页 ›', '下頁', '翻页', '翻頁', '翻下頁', '翻下页', '下一张', '下一張', '下一幅', '下一章', '下一节', '下一節', '下一篇', '前进', '下篇', '后页', '往后', 'Next', 'Next Page', '次へ', '次のページ', '次のページ »', '下一页 →', '下一頁 →', '下1页 →', '下1頁 →', '下页 →', '下頁 →', '翻页 →', '翻頁 →', '翻下頁 →', '翻下页 →', '下一张 →', '下一張 →', '下一幅 →', '下一章 →', '下一节 →', '下一節 →', '下一篇 →', '前进 →', '下篇 →', '后页 →', '往后 →', 'Next →', 'Next Page →', '次へ →', '次のページ →', '下一页 »', '下一頁 »', '下1页 »', '下1頁 »', '下页 »', '下頁 »', '翻页 »', '翻頁 »', '翻下頁 »', '翻下页 »', '下一张 »', '下一張 »', '下一幅 »', '下一章 »', '下一节 »', '下一節 »', '下一篇 »', '前进 »', '下篇 »', '后页 »', '往后 »', 'Next »', 'Next Page »', '次へ »', '后一页', '後一頁', '下一页 ›', '下一頁 ›', '下1页 ›', '下1頁 ›', '下頁 ›', '翻页 ›', '翻頁 ›', '翻下頁 ›', '翻下页 ›', '下一张 ›', '下一張 ›', '下一幅 ›', '下一章 ›', '下一节 ›', '下一節 ›', '下一篇 ›', '前进 ›', '下篇 ›', '后页 ›', '往后 ›', 'Next ›', 'Next >', 'Next Page ›', '次へ ›', '次のページ ›', '»', '→', '早期文章→'];
	  // THX to https://greasyfork.org/en/forum/discussion/39361/x
	  // 出在自动翻页信息附加显示真实相对页面信息，一般能智能识别出来。如果还有站点不能识别，可以把地址的特征字符串加到下面
	  // 最好不要乱加，一些不规律的站点显示出来的数字也没有意义
	  var REALPAGE_SITE_PATTERN = ['search?', 'search_', 'forum', 'thread'];

	  // ------------------------下面的不要管他-----------------
	  /// ////////////////////////////////////////////////////////////////
	  // eslint-disable-next-line prettier/prettier
	  _Promise.all([loadSettings(), getServerIp(location.hostname)]).then(function (_ref2) {
	    var _ref3 = _slicedToArray(_ref2, 2),
	      values = _ref3[0],
	      serverIp = _ref3[1];
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
	    logger.debug("[Super-preloader]", 'Script Manager: ', _JSON$stringify({
	      name: SCRIPT_MANAGER.name,
	      version: SCRIPT_MANAGER.version || 'unknown'
	    }));
	    logger.debug("[Super-preloader]", 'Browser: ', _JSON$stringify(BROWSER));
	    logger.debug("[Super-preloader]", `Server ip: ', ${serverIp}`);
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
	      $('enableHistory').checked = prefs.enableHistory;
	      // $('forceTargetWindow').checked = prefs.forceTargetWindow;
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
	    };

	    // main functions
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
	        }

	        // 查找是否是页面不刷新的站点
	        var locationHref = location.href;
	        var hashSite = _find(HashchangeSites, function (x) {
	          return toRE(x.url).test(locationHref);
	        });
	        if (hashSite) {
	          isHashchangeSite = true;
	          hashchangeTimer = hashSite.timer;
	          logger.debug("[Super-preloader]", 'This site does not refresh the page.', hashSite);
	          var p1 = new _Promise(function (resolve, reject) {
	            setTimeout(resolve, hashchangeTimer);
	          });
	          p1.then(function (values) {
	            init(window, document);
	          });
	        } else {
	          init(window, document);
	        }
	        // 分辨率 高度 > 宽度 的是手机
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
	          if (_isArray(userRules)) {
	            SSRules = _concatInstanceProperty(SSRules).call(SSRules, userRules);
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
	      var startTime = new Date();
	      // eslint-disable-next-line valid-jsdoc
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
	        addStyle(spcss['sp-fw']);

	        // create container
	        var div = document.createElement('div');
	        div.id = 'sp-fw-container';
	        div.innerHTML = template.floatWindow();
	        document.body.appendChild(div);

	        // helper function to get element
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
	        var viewcontent = $('sp-fw-viewcontent');

	        // 翻页设置
	        var a_useiframe = $('sp-fw-a_useiframe');
	        var a_iloaded = $('sp-fw-a_iloaded');
	        var a_itimeout = $('sp-fw-a_itimeout');
	        var a_manualA = $('sp-fw-a_manualA');
	        var a_remain = $('sp-fw-a_remain');
	        var a_maxpage = $('sp-fw-a_maxpage');
	        var a_separator = $('sp-fw-a_separator');
	        var a_ipages_0 = $('sp-fw-a_ipages_0');
	        var a_ipages_1 = $('sp-fw-a_ipages_1');
	        var a_force = $('sp-fw-a_force');

	        // newIframe 输入框的点击
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
	            value = SSS.a_ipages[1];
	            //@ts-ignore
	            a_ipages_1.value = value;
	          }
	          autoPO.startipages(value);
	        }, false);

	        // 总开关
	        var enable = $('sp-fw-enable');
	        $('sp-fw-setup').addEventListener('click', setup, false);

	        // 保存设置按钮.
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
	        }, false);

	        // 载入翻页设置.
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
	        }

	        // 载入预读设置.
	        setProperty(useiframe, SSS.useiframe);
	        setProperty(viewcontent, SSS.viewcontent);

	        // 总开关
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
	        var FW_position = prefs.FW_position;

	        // 非opera用fixed定位.
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
	          TweenF = TweenF[TweenEase[prefs.s_ease]] || TweenF;
	          //@ts-ignore
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
	      }

	      // autopager
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
	        floatWO.updateColor('autopager');

	        // 获取插入位置节点.
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
	            nextlink = elemToHref(nextlinkElem);
	            // preLink = getElement(SSS.preLink || 'auto;');
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
	              i.setAttribute('mutationObserver', _JSON$stringify(SSS.a_mutationObserver));
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
	        var _SSS$a_ipages = _slicedToArray(SSS.a_ipages, 2),
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
	            var spage = /*#__PURE__*/function () {
	              var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(el) {
	                var value;
	                return _regeneratorRuntime.wrap(function _callee$(_context2) {
	                  while (1) switch (_context2.prev = _context2.next) {
	                    case 0:
	                      if (!doc) {
	                        _context2.next = 7;
	                        break;
	                      }
	                      value = Number(el.value);
	                      if (isNaN(value) || value < 1) {
	                        el.value = value = 1;
	                      }
	                      ipagesmode = true;
	                      ipagesnumber = value + paged;
	                      _context2.next = 7;
	                      return insertedIntoDoc();
	                    case 7:
	                    case "end":
	                      return _context2.stop();
	                  }
	                }, _callee);
	              }));
	              return function spage(_x) {
	                return _ref4.apply(this, arguments);
	              };
	            }();
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
	              spage(document.getElementById('sp-sp-md-number')).then(function () {
	                manualDiv.remove();
	              });
	            }, false);
	          }
	          addIntoDoc(manualDiv);
	          //manualDiv.style.display = "block";
	        }
	        function beforeInsertIntoDoc() {
	          return _beforeInsertIntoDoc.apply(this, arguments);
	        }
	        function _beforeInsertIntoDoc() {
	          _beforeInsertIntoDoc = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
	            return _regeneratorRuntime.wrap(function _callee3$(_context4) {
	              while (1) switch (_context4.prev = _context4.next) {
	                case 0:
	                  working = true;
	                  if (!(SSS.a_manualA && !ipagesmode)) {
	                    _context4.next = 6;
	                    break;
	                  }
	                  // 显示手动翻页触发条.
	                  logger.debug("[Super-preloader]", 'Manual stitching');
	                  manualAdiv();
	                  _context4.next = 9;
	                  break;
	                case 6:
	                  // 直接拼接.
	                  logger.debug("[Super-preloader]", 'Direct stitching');
	                  _context4.next = 9;
	                  return insertedIntoDoc();
	                case 9:
	                case "end":
	                  return _context4.stop();
	              }
	            }, _callee3);
	          }));
	          return _beforeInsertIntoDoc.apply(this, arguments);
	        }
	        var sepStyle;
	        //looks like goNextImg is useless here.
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
	            });

	            //if (goNextImg.length == 2) {
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
	          return _insertedIntoDoc.apply(this, arguments);
	        } // 返回,剩余高度是总高度的比值.
	        function _insertedIntoDoc() {
	          _insertedIntoDoc = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
	            var docTitle, fragment, pageElements, ii, lastUrl, nl, i, pe_x, pe_x_nn, nodes, nodes_x, imgs, arr, sepdiv, toInsert, insertParent, colNodes, _ncol, trs, _ncol2, oldE, oldE_lt, newE, newE_lt, oldE_x, newE_x, ev, delayiframe;
	            return _regeneratorRuntime.wrap(function _callee4$(_context5) {
	              while (1) switch (_context5.prev = _context5.next) {
	                case 0:
	                  if (doc) {
	                    _context5.next = 3;
	                    break;
	                  }
	                  logger.error("[Super-preloader]", 'No document');
	                  return _context5.abrupt("return");
	                case 3:
	                  if (!SSS.a_documentFilter) {
	                    _context5.next = 13;
	                    break;
	                  }
	                  _context5.prev = 4;
	                  _context5.next = 7;
	                  return SSS.a_documentFilter(doc, typeof nextlink === 'string' && nextlink);
	                case 7:
	                  logger.debug("[Super-preloader]", 'Successfully executeed documentFilter');
	                  _context5.next = 13;
	                  break;
	                case 10:
	                  _context5.prev = 10;
	                  _context5.t0 = _context5["catch"](4);
	                  logger.error("[Super-preloader]", 'Error executing documentFilter', _context5.t0, SSS.a_documentFilter.toString());
	                case 13:
	                  docTitle = getElementByCSS('title', doc).textContent;
	                  fragment = document.createDocumentFragment();
	                  pageElements = getAllElements(SSS.a_pageElement, undefined, doc, win, typeof nextlink === 'string' && nextlink);
	                  ii = pageElements.length;
	                  if (!(ii <= 0)) {
	                    _context5.next = 23;
	                    break;
	                  }
	                  logger.error("[Super-preloader]", 'Failed to get the main content of the next page', SSS.a_pageElement);
	                  removeL();
	                  return _context5.abrupt("return");
	                case 23:
	                  logger.debug("[Super-preloader]", 'Successfully got the main content of the next page', pageElements);
	                case 24:
	                  // 提前查找下一页链接，后面再赋值
	                  lastUrl = cplink;
	                  cplink = String(nextlink);
	                  /** @type {HTMLElement | String} */
	                  nl = getElement(SSS.nextLink, undefined, doc, win);
	                  if (nl) {
	                    if (nl === nextlinkElem) {
	                      nextlinkElem = null;
	                    } else {
	                      nextlinkElem = nl;
	                    }
	                  } else {
	                    nextlinkElem = null;
	                  }
	                  nextlink = elemToHref(nextlinkElem);
	                  // 有部分下一页的信息是在script中（比如新加的csdn的规则），因此先查找下一页信息，再执行 removeScripts
	                  removeScripts(doc, SSS.a_scriptFilter);
	                  i = 0;
	                case 31:
	                  if (!(i < ii)) {
	                    _context5.next = 40;
	                    break;
	                  }
	                  pe_x = pageElements[i];
	                  pe_x_nn = pe_x.nodeName;
	                  if (!(pe_x_nn == 'BODY' || pe_x_nn == 'HTML' || pe_x_nn == 'SCRIPT')) {
	                    _context5.next = 36;
	                    break;
	                  }
	                  return _context5.abrupt("continue", 37);
	                case 36:
	                  fragment.appendChild(pe_x);
	                case 37:
	                  i++;
	                  _context5.next = 31;
	                  break;
	                case 40:
	                  if (_filterInstanceProperty(SSS) && typeof _filterInstanceProperty(SSS) === 'string') {
	                    // 功能未完善.
	                    nodes = [];
	                    try {
	                      nodes = getAllElements(_filterInstanceProperty(SSS), fragment);
	                    } catch (e) {}
	                    for (i = nodes.length - 1; i >= 0; i--) {
	                      nodes_x = nodes[i];
	                      nodes_x.parentNode.removeChild(nodes_x);
	                    }
	                  }

	                  // lazyImgSrc
	                  if (SSS.lazyImgSrc) {
	                    handleLazyImgSrc(SSS.lazyImgSrc, fragment);
	                  }
	                  //@ts-ignore
	                  if (!window.opera && SSS.a_useiframe && !SSS.a_iloaded) {
	                    imgs = getAllElements('css;img[src]', fragment); // 收集所有图片
	                  }

	                  // 处理下一页内容部分链接是否新标签页打开
	                  if (prefs.forceTargetWindow) {
	                    arr = _sliceInstanceProperty(Array.prototype).call(fragment.querySelectorAll('a[href]:not([href^="mailto:"]):not([href^="javascript:"]):not([href^="#"])'));
	                    arr.forEach(function (elem) {
	                      elem.setAttribute('target', '_blank');
	                      if (elem.getAttribute('onclick') == 'atarget(this)') {
	                        // 卡饭论坛的控制是否在新标签页打开
	                        elem.removeAttribute('onclick');
	                      }
	                    });
	                  }

	                  /** @type {HTMLElement} */
	                  sepdiv = createSep(lastUrl, cplink, nextlink);
	                  toInsert = sepdiv;
	                  if (SSS.a_sepdivDom !== undefined && typeof SSS.a_sepdivDom === 'function') {
	                    toInsert = SSS.a_sepdivDom(doc, sepdiv);
	                  } else if (pageElements[0] && pageElements[0].tagName === 'TR' && pageElements[pageElements.length - 1].tagName === 'TR') {
	                    insertParent = insertPoint.parentNode;
	                    colNodes = getAllElements('child::tr[1]/child::*[self::td or self::th]', insertParent);
	                    if (colNodes.length == 0) {
	                      colNodes = getAllElements('child::*[self::td or self::th]', pageElements[0]);
	                    }
	                    _ncol = _reduceInstanceProperty([]).call(colNodes, function (acc, cur) {
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
	                    trs = pageElements[pageElements.length - 1].getElementsByTagName('tr');
	                    if (trs) {
	                      _ncol2 = _reduceInstanceProperty([]).call(trs[trs.length - 1].children, function (acc, cur) {
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
	                  addIntoDoc(fragment);

	                  // filter
	                  if (_filterInstanceProperty(SSS) && typeof _filterInstanceProperty(SSS) === 'function') {
	                    try {
	                      _filterInstanceProperty(SSS).call(SSS, pageElements);
	                      logger.debug("[Super-preloader]", 'Execution of filter(pages) succeeded');
	                    } catch (e) {
	                      logger.error("[Super-preloader]", 'Error executing filter(pages)', e, _filterInstanceProperty(SSS).toString());
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
	                    oldE = getAllElements(SSS.a_replaceE);
	                    oldE_lt = oldE.length;
	                    if (oldE_lt > 0) {
	                      newE = getAllElements(SSS.a_replaceE, undefined, doc, win);
	                      newE_lt = newE.length;
	                      if (newE_lt == oldE_lt) {
	                        // 替换

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
	                  }
	                  //if (goNextImg[0]) goNextImg[0].src = _sep_icons.next;
	                  ev = document.createEvent('Event');
	                  ev.initEvent('Super_preloaderPageLoaded', true, false);
	                  document.dispatchEvent(ev);
	                  if (prefs.enableHistory) {
	                    try {
	                      window.history.pushState(null, docTitle, cplink);
	                    } catch (e) {}
	                  }
	                  if (!(paged >= SSS.a_maxpage)) {
	                    _context5.next = 66;
	                    break;
	                  }
	                  logger.debug("[Super-preloader]", `Reached the set maximum number of page turns ${SSS.a_maxpage}`);
	                  notice('<b>Status</b>:' + 'Reached the set maximum number of page turns:<b style="color:red">' + SSS.a_maxpage + '</b>');
	                  removeL();
	                  return _context5.abrupt("return");
	                case 66:
	                  delayiframe = function delayiframe(fn) {
	                    setTimeout(fn, 199);
	                  };
	                  if (nextlink && !_includesInstanceProperty(pagedLinks).call(pagedLinks, nextlink)) {
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
	                case 68:
	                case "end":
	                  return _context5.stop();
	              }
	            }, _callee4, null, [[4, 10]]);
	          }));
	          return _insertedIntoDoc.apply(this, arguments);
	        }
	        var relatedObj_0, relatedObj_1;
	        if (SSS.a_relatedObj) {
	          if (_isArray(SSS.a_relatedObj)) {
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
	          startipages: function () {
	            var _startipages = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(value) {
	              return _regeneratorRuntime.wrap(function _callee2$(_context3) {
	                while (1) switch (_context3.prev = _context3.next) {
	                  case 0:
	                    if (!(value > 0)) {
	                      _context3.next = 8;
	                      break;
	                    }
	                    ipagesmode = true;
	                    ipagesnumber = value + paged;
	                    notice('<b>Status</b>:' + 'Current number of pages turned: <b>' + paged + '</b>,' + 'Continue to turn page <b style="color:red!important;">' + ipagesnumber + '</b>');
	                    if (!SSS.a_manualA) {
	                      _context3.next = 7;
	                      break;
	                    }
	                    _context3.next = 7;
	                    return insertedIntoDoc();
	                  case 7:
	                    scroll();
	                  case 8:
	                  case "end":
	                    return _context3.stop();
	                }
	              }, _callee2);
	            }));
	            function startipages(_x2) {
	              return _startipages.apply(this, arguments);
	            }
	            return startipages;
	          }()
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
	              floatWO.loadedIcon('show');
	              //@ts-ignore
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
	      }

	      // 执行开始..///////////////////

	      // 分析黑名单
	      var blackList_re = new RegExp(_mapInstanceProperty(blackList).call(blackList, function (x) {
	        if (x.substring(0, 3).toLowerCase() == 're:') {
	          return x.substring(4);
	        } else {
	          return wildcardToRegExpStr(x);
	        }
	      }).join('|'));
	      if (blackList_re.test(url)) {
	        logger.debug("[Super-preloader]", 'Matched blacklist, JS execution stopped');
	        return;
	      }

	      // 是否在frame上加载..
	      if (prefs.DisableI && window.self != window.parent) {
	        var isReturn = !_find(DIExclude, function (x) {
	          //@ts-ignore
	          return x[1] && x[2].test(url);
	        });
	        if (isReturn) {
	          logger.debug("[Super-preloader]", `The page with url:${url} is not a top-level window, JS execution stopped`);
	          return;
	        }
	      }
	      logger.debug("[Super-preloader]", `Page url is: ${url}, JS loaded successfully`);

	      // 第一阶段..分析高级模式..
	      if (prefs.disableBuiltinRules) {
	        logger.warn("[Super-preloader]", 'Builtin js rules are disabled');
	      } else {
	        SSRules = _concatInstanceProperty(SSRules).call(SSRules, jsSiteRule);
	      }
	      if (prefs.disableBuiltinSubscriptionRules) {
	        logger.warn("[Super-preloader]", 'Remote json rules are disabled');
	      } else {
	        SSRules = _concatInstanceProperty(SSRules).call(SSRules, jsonRule);
	      }
	      if (!prefs.disableBuiltinRules) {
	        SSRules = _concatInstanceProperty(SSRules).call(SSRules, jsGeneralRule);
	      }
	      if (!prefs.numOfRule || prefs.numOfRule != SSRules.length) {
	        prefs.numOfRule = SSRules.length;
	        GM.setValue('prefs', prefs);
	      }

	      // 重要的变量两枚.
	      /** @type {Array<string|HTMLElement>} */
	      var pagedLinks = [document.location.href];
	      /** @type {HTMLElement|string} */
	      var nextlinkElem;
	      /** @type {string} */
	      var nextlink;
	      /** @type {HTMLElement|string} */
	      var prelink;

	      //= ==============

	      /**@type {IRuntimeRule} */
	      var SSS = {};
	      var findCurSiteInfo = /*#__PURE__*/function () {
	        var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5() {
	          var SIIAD, Rurl, ii, _loop, _ret, i, FA;
	          return _regeneratorRuntime.wrap(function _callee5$(_context8) {
	            while (1) switch (_context8.prev = _context8.next) {
	              case 0:
	                SIIAD = SITEINFO_D.autopager;
	                ii = SSRules.length;
	                if (userLang === 'zh_CN') {
	                  logger.debug("[Super-preloader]", `高级规则数目:${ii}`);
	                  logger.debug("[Super-preloader]", `Number of rules > ${ii - jsonRule.length} from other sources, such as: wedata.net`);
	                } else {
	                  logger.debug("[Super-preloader]", `Number of advanced rules:${ii}`);
	                }
	                _loop = /*#__PURE__*/_regeneratorRuntime.mark(function _loop() {
	                  var SII, _context6, SIIA, documentFilter, pageElement;
	                  return _regeneratorRuntime.wrap(function _loop$(_context7) {
	                    while (1) switch (_context7.prev = _context7.next) {
	                      case 0:
	                        SII = SSRules[i];
	                        if (!(SII.autopager && SII.autopager.ip)) {
	                          _context7.next = 4;
	                          break;
	                        }
	                        if (!(_indexOfInstanceProperty(_context6 = SII.autopager.ip).call(_context6, serverIp) < 0)) {
	                          _context7.next = 4;
	                          break;
	                        }
	                        return _context7.abrupt("return", 0);
	                      case 4:
	                        Rurl = toRE(SII.url);
	                        if (!Rurl.test(url)) {
	                          _context7.next = 75;
	                          break;
	                        }
	                        if (userLang === 'zh_CN') {
	                          logger.debug("[Super-preloader]", 'Find current site rules:', SII);
	                          logger.debug("[Super-preloader]", `规则ID: ${i + 1}`);
	                        } else {
	                          logger.debug("[Super-preloader]", 'Find rule for this website:', SII);
	                          logger.debug("[Super-preloader]", `Rule ID: ${i + 1}`);
	                        }

	                        // 运行规则的 startFilter
	                        if (!(SII.autopager && SII.autopager.startFilter)) {
	                          _context7.next = 17;
	                          break;
	                        }
	                        _context7.prev = 8;
	                        _context7.next = 11;
	                        return SII.autopager.startFilter(document, window);
	                      case 11:
	                        logger.debug("[Super-preloader]", 'startFilter executed successfully');
	                        _context7.next = 17;
	                        break;
	                      case 14:
	                        _context7.prev = 14;
	                        _context7.t0 = _context7["catch"](8);
	                        logger.error("[Super-preloader]", 'Error executing startFilter', _context7.t0);
	                      case 17:
	                        if (!(SII.nextLink === 'null;')) {
	                          _context7.next = 21;
	                          break;
	                        }
	                        logger.debug("[Super-preloader]", 'Find the rule for a site without nextpage', SII);
	                        SSS.hasRule = false;
	                        return _context7.abrupt("return", 1);
	                      case 21:
	                        nextlinkElem = getElement(SII.nextLink || 'auto;');
	                        if (nextlinkElem) {
	                          _context7.next = 25;
	                          break;
	                        }
	                        logger.warn("[Super-preloader]", 'Could not find the next page link, continue searching for other rules, skiping rule:', SII);
	                        return _context7.abrupt("return", 0);
	                      case 25:
	                        // extract next page link from an a link
	                        nextlink = getFullHref(nextlinkElem);
	                        if (!(nextlink === document.location.href)) {
	                          _context7.next = 29;
	                          break;
	                        }
	                        nextlinkElem = null;
	                        return _context7.abrupt("return", 0);
	                      case 29:
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
	                          if (typeof SII.autopager !== 'object') SII.autopager = {};
	                          SII.autopager.pageElement = SII.pageElement;
	                          if (!SII.autopager.useiframe) SII.autopager.useiframe = SII.useiframe;
	                          if (SII.preLink) SII.autopager.preLink = SII.preLink;
	                          if (SII.insertBefore) SII.autopager.HT_insert = [SII.insertBefore, 1];
	                        }

	                        // 自动翻页设置.
	                        SIIA = SII.autopager;
	                        if (!SIIA) {
	                          _context7.next = 68;
	                          break;
	                        }
	                        SSS.a_pageElement = SIIA.pageElement;
	                        if (SSS.a_pageElement) {
	                          _context7.next = 42;
	                          break;
	                        }
	                        return _context7.abrupt("return", 1);
	                      case 42:
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
	                        SSS.a_ipages = SIIA.ipages === undefined ? SIIAD.ipages : SIIA.ipages;

	                        // new
	                        SSS.filter = _filterInstanceProperty(SII) || _filterInstanceProperty(SIIA); // 新增了函数的形式，原来的功能是移除 pageElement
	                        documentFilter = SII.documentFilter || SIIA.documentFilter;
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
	                        SSS.a_sandbox = SIIA.sandbox === undefined ? SIIAD.sandbox : SIIA.sandbox;

	                        // 在翻页的时候会有一些其他元素占据了页面的高度，导致翻页不精准。
	                        // 比如正文下面的推荐文章列表（占据超过整个页面10%就很难受）
	                        SSS.a_excludeElement = SIIA.excludeElement;
	                      case 68:
	                        // 检验是否存在内容
	                        pageElement = getElement(SSS.a_pageElement);
	                        if (!(!pageElement || Array.isArray(pageElement) && pageElement.length === 0)) {
	                          _context7.next = 73;
	                          break;
	                        }
	                        nextlinkElem = null;
	                        logger.error("[Super-preloader]", 'Could not find content, skiping rule:', SII, 'Continue to search for other rules.');
	                        return _context7.abrupt("return", 0);
	                      case 73:
	                        SSS.hasRule = true;
	                        return _context7.abrupt("return", 1);
	                      case 75:
	                      case "end":
	                        return _context7.stop();
	                    }
	                  }, _loop, null, [[8, 14]]);
	                });
	                i = 0;
	              case 5:
	                if (!(i < ii)) {
	                  _context8.next = 15;
	                  break;
	                }
	                return _context8.delegateYield(_loop(), "t0", 7);
	              case 7:
	                _ret = _context8.t0;
	                if (!(_ret === 0)) {
	                  _context8.next = 10;
	                  break;
	                }
	                return _context8.abrupt("continue", 12);
	              case 10:
	                if (!(_ret === 1)) {
	                  _context8.next = 12;
	                  break;
	                }
	                return _context8.abrupt("break", 15);
	              case 12:
	                i++;
	                _context8.next = 5;
	                break;
	              case 15:
	                if (!SSS.hasRule) {
	                  // 自动搜索.
	                  if (!autoMatch.keyMatch) {
	                    logger.warn("[Super-preloader]", 'Auto match is disabled');
	                  } else {
	                    logger.warn("[Super-preloader]", 'No rules are found. Auto match starts');
	                    nextlinkElem = autoGetLink();
	                    if (nextlinkElem) {
	                      // 强制模式.
	                      FA = autoMatch.FA;
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
	                }

	                // 如果规则没 lazyImgSrc，设置默认值
	                if (!SSS.lazyImgSrc) {
	                  SSS.lazyImgSrc = prefs.lazyImgSrc;
	                }
	                logger.debug("[Super-preloader]", `Total time spent on searching for advanced rules and automatic matching: ${new Date().getTime() - startTime.getTime()}ms`);
	              case 18:
	              case "end":
	                return _context8.stop();
	            }
	          }, _callee5);
	        }));
	        return function findCurSiteInfo() {
	          return _ref5.apply(this, arguments);
	        };
	      }();
	      findCurSiteInfo().then(function () {
	        // 上下页都没有找到啊
	        if (!nextlinkElem && !prelink) {
	          logger.warn("[Super-preloader]", `No related links found, JS execution stopped. Total time spent: ${new Date().getTime() - startTime.getTime()}ms`);
	          return;
	        } else if (!nextlink) {
	          logger.error("[Super-preloader]", 'The link to the next page does not exist, JS cannot continue.');
	          logger.debug("[Super-preloader]", `Total time spent:${new Date().getTime() - startTime.getTime()}ms`);
	          return;
	        } else {
	          logger.debug("[Super-preloader]", 'Previous link element:', prelink);
	          logger.debug("[Super-preloader]", 'Next link element:', nextlinkElem);
	          nextlink = elemToHref(nextlinkElem);
	          logger.debug("[Super-preloader]", 'Next link:', nextlink);
	          //@ts-ignore
	          prelink = prelink ? prelink.href || prelink : undefined;
	        }
	        var keyBinding = {
	          go: function go() {
	            if (typeof nextlink === 'string') window.location.href = nextlink;
	          },
	          back: function back() {
	            //fixme
	            if (!prelink) getElement('auto;');
	            if (typeof prelink === 'string') window.location.href = prelink;
	          },
	          register: function register( /**@type {IPrefs} */prefs) {
	            var _this = this;
	            if (prefs.arrowKeyPage) {
	              logger.debug("[Super-preloader]", 'Adding left and right arrow keys to autopager listener.');
	              document.addEventListener('keyup', function (e) {
	                //@ts-ignore
	                var tarNN = e.target.nodeName;
	                if (tarNN != 'BODY' && tarNN != 'HTML') return;

	                // check is a combo pressed
	                if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) {
	                  return;
	                }
	                switch (e.keyCode) {
	                  case 37:
	                    _this.back();
	                    break;
	                  case 39:
	                    _this.go();
	                    break;
	                }
	              }, false);

	              // 监听下一页事件.
	              logger.debug("[Super-preloader]", '添加鼠标手势翻页监听');
	              document.addEventListener('superPreloader.go', function () {
	                _this.go();
	              }, false);

	              // 监听下一页事件.
	              document.addEventListener('superPreloader.back', function () {
	                _this.back();
	              }, false);
	            }
	          }
	        };
	        keyBinding.register(prefs);
	        loadLocalSetting(SSS);
	        if (!SSS.enable) {
	          logger.warn("[Super-preloader]", 'This rule is disabled, script execution is stopped');
	          logger.debug("[Super-preloader]", `Total time spent:${new Date().getTime() - startTime.getTime()}ms`);
	          return;
	        }
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
	        logger.debug("[Super-preloader]", `Total time spent:${new Date().getTime() - startTime.getTime()}ms`);

	        // 预读或者翻页.
	        if (SSS.a_enable) {
	          logger.debug("[Super-preloader]", 'Initializing, autopager mode.');
	          autopager(SSS, floatWO);
	        } else {
	          logger.debug("[Super-preloader]", 'Initializing, prefetch mode.');
	          prefetcher(SSS, floatWO);
	        }
	      });

	      // 获取单个元素,混合
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
	            ret = getElementByCSS(_sliceInstanceProperty(selector).call(selector, 4), contextNode);
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
	      var docChecked;
	      /**
	       *
	       * @param {Document=} doc document
	       * @param {Window=} win window
	       * @returns {HTMLElement} a
	       */
	      function autoGetLink(doc, win) {
	        if (!autoMatch.keyMatch) return;
	        //@ts-ignore
	        if (!parseKWRE.done) {
	          parseKWRE();
	          //@ts-ignore
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
	        var _prelink;
	        //@ts-ignore
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
	                      preS1 = aP.previousSibling;
	                      //@ts-ignore
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
	                        if (nodeType == 3 ||
	                        // @ts-ignore
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
	              keytext = _nextPageKey[k];
	              //@ts-ignore
	              if (!keytext.test(atext)) continue;
	              _nextlink = finalCheck(a, 'next');
	              xbreak = true;
	              break;
	            }
	            if (xbreak || _nextlink) continue;
	          }
	          if (!_prelink) {
	            for (k = 0; k < _pPKL; k++) {
	              keytext = _prePageKey[k];
	              //@ts-ignore
	              if (!keytext.test(atext)) continue;
	              _prelink = finalCheck(a, 'pre');
	              break;
	            }
	          }
	        }
	        logger.debug("[Super-preloader]", `Time to search ${i} links:${new Date().getTime() - startTime.getTime()}ms`);
	        //@ts-ignore
	        if (!autoGetLink.checked) {
	          // 只在第一次检测的时候,抛出上一页链接.
	          prelink = _prelink;
	          //@ts-ignore
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
	        }

	        // 转成正则.
	        prePageKey = modifyPageKey('previous', prePageKey, prePageKey.length);
	        nextPageKey = modifyPageKey('next', nextPageKey, nextPageKey.length);
	      }
	    }

	    // By lastDream2013 略加修改，原版只能用于 Firefox
	    function getRalativePageStr(lastUrl, currentUrl, nextUrl) {
	      var getRalativePageNumArray = function getRalativePageNumArray(lasturl, url) {
	        if (!lasturl || !url) {
	          return [0, 0];
	        }
	        var lasturlarray = lasturl.split(/-|\.|\&|\/|=|#|\?/);
	        var urlarray = url.split(/-|\.|\&|\/|=|#|\?/);
	        var url_info;
	        var lasturl_info;
	        // 一些 url_info 为 p1,p2,p3 之类的
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
	      var relativeOff;

	      // 论坛和搜索引擎网页显示实际页面信息
	      var relativePageNumarray = [];
	      if (nextUrl) {
	        relativePageNumarray = getRalativePageNumArray(currentUrl, nextUrl);
	      } else {
	        relativePageNumarray = getRalativePageNumArray(lastUrl, currentUrl);
	        relativeOff = relativePageNumarray[1] - relativePageNumarray[0]; // 用的上一页的相对信息比较的，要补充差值……
	        relativePageNumarray[1] = relativePageNumarray[1] + relativeOff;
	        relativePageNumarray[0] = relativePageNumarray[0] + relativeOff;
	      }

	      // console.log('[获取实际页数] ', '要比较的3个页数：',arguments, '，得到的差值:', relativePageNumarray);
	      if (isNaN(relativePageNumarray[0]) || isNaN(relativePageNumarray[1])) {
	        return '';
	      }
	      var realPageSiteMatch = false;
	      relativeOff = relativePageNumarray[1] - relativePageNumarray[0];
	      // 上一页与下一页差值为1，并最大数值不超过10000(一般论坛也不会超过这么多页……)
	      if (relativeOff === 1 && relativePageNumarray[1] < 10000) {
	        realPageSiteMatch = true;
	      }

	      // 上一页与下一页差值不为1，但上一页与下一页差值能被上一页与下一面所整除的，有规律的页面
	      if (!realPageSiteMatch && relativeOff !== 1) {
	        if (relativePageNumarray[1] % relativeOff === 0 && relativePageNumarray[0] % relativeOff === 0) {
	          realPageSiteMatch = true;
	        }
	      }
	      if (!realPageSiteMatch) {
	        // 不满足以上条件，再根据地址特征来匹配
	        var sitePattern;
	        for (var i = 0, length = REALPAGE_SITE_PATTERN.length; i < length; i++) {
	          var _context9;
	          sitePattern = REALPAGE_SITE_PATTERN[i];
	          if (_indexOfInstanceProperty(_context9 = currentUrl.toLocaleLowerCase()).call(_context9, sitePattern) >= 0) {
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
	  });

	  // ------------------------下面的不要管他-----------------
	  /// ////////////////////////////////////////////////////////////////

	  // 变量
	  var isHashchangeSite = false;
	  var hashchangeTimer = 0;

	  // ====================  libs  ==============================
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
	          if (typeof fx !== 'string' || _indexOfInstanceProperty(fx).call(fx, 're;') === 0) {
	            var fxre = typeof fx === 'string' ? toRE(_sliceInstanceProperty(fx).call(fx, 3)) : fx;
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
	      index = _indexOfInstanceProperty(_cplink).call(_cplink, sa);
	      if (index == -1) {
	        _cplink = getHref(_cplink);
	        index = _indexOfInstanceProperty(_cplink).call(_cplink, sa);
	        if (index == -1) return;
	      }
	    } else {
	      var tsa = _cplink.match(sa);
	      if (!tsa) {
	        _cplink = getHref(_cplink);
	        sa = (_cplink.match(sa) || [])[0];
	        if (!sa) return;
	        index = _indexOfInstanceProperty(_cplink).call(_cplink, sa);
	        if (index == -1) return;
	      } else {
	        sa = tsa[0];
	        index = _indexOfInstanceProperty(_cplink).call(_cplink, sa);
	      }
	    }
	    index += sa.length;
	    var max = obj.max === undefined ? 9999 : obj.max;
	    var min = obj.min === undefined ? 1 : obj.min;
	    var aStr = _sliceInstanceProperty(_cplink).call(_cplink, 0, index);
	    var bStr = _sliceInstanceProperty(_cplink).call(_cplink, index);
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
	  }

	  // ====================  functions  ==============================
	  function handleLazyImgSrc(rule, doc) {
	    var imgAttrs = rule.split('|');
	    imgAttrs.forEach(function (attr) {
	      attr = _trimInstanceProperty(attr).call(attr);
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
	    elc.style.visibility = 'hidden';
	    //@ts-ignore
	    elc.querySelector('#sp-fw-content').style.display = 'block';
	    document.body.appendChild(elc);
	    //@ts-ignore
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
