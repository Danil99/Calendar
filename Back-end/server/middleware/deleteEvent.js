'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = require('../store/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (req, res) {
  var elem = _index2.default.event.find(function (el) {
    return el.id === req.body.id;
  });

  var filt = function filt(item) {
    return _index2.default.event.filter(function (el) {
      if (!Boolean(el.start >= item.start + item.duration || item.start >= el.start + el.duration) && el.id !== req.body.id) return el;
    });
  };

  filt(elem).forEach(function (el) {
    var a3 = filt(el);

    if (a3.length === 1) {
      var i = _index2.default.event.indexOf(el);
      _index2.default.event[i] = _extends({}, _index2.default.event[i], { widthLeft: 1, windCount: 1 });
    }
  });

  _index2.default.event = _index2.default.event.filter(function (el) {
    return el.id !== req.body.id;
  });

  res.send(_index2.default.event);
};