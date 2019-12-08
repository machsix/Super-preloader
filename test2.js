"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault.js");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray.js"));

var _index = _interopRequireDefault(require("@babel/runtime/regenerator/index.js"));

var delay = function delay(time) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, time);
  });
};

function sleepRandom(time) {
  return _index.default.async(function sleepRandom$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _index.default.awrap(delay(time * 1e3));

        case 2:
          return _context.abrupt("return", 0 | Math.random() * 1e3);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
}

function sleepError(time, msg) {
  return _index.default.async(function sleepError$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _index.default.awrap(delay(time * 1e3));

        case 2:
          throw Error(msg);

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
}

(function _callee() {
  var _ref, _ref2, a, b, c;

  return _index.default.async(function _callee$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          console.log('Run'); // => Run

          _context3.t0 = console;
          _context3.next = 5;
          return _index.default.awrap(sleepRandom(5));

        case 5:
          _context3.t1 = _context3.sent;

          _context3.t0.log.call(_context3.t0, _context3.t1);

          _context3.next = 9;
          return _index.default.awrap(Promise.all([sleepRandom(5), sleepRandom(15), sleepRandom(10)]));

        case 9:
          _ref = _context3.sent;
          _ref2 = (0, _slicedToArray2.default)(_ref, 3);
          a = _ref2[0];
          b = _ref2[1];
          c = _ref2[2];
          console.log(a, b, c); // => 210 445 71, after 15 sec.

          _context3.next = 17;
          return _index.default.awrap(sleepError(5, 'Error!'));

        case 17:
          console.log('Will not be displayed');
          _context3.next = 23;
          break;

        case 20:
          _context3.prev = 20;
          _context3.t2 = _context3["catch"](0);
          console.log(_context3.t2); // => Error: 'Error!', after 5 sec.

        case 23:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 20]]);
})();
