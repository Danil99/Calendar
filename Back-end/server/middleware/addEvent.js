'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = require('../store/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (req, res) {
  var reg = req.body.time;
  var x = Number(reg[0]) * 60 - 8 * 60 + Number(reg[1] || 0);
  var y = x + Number(req.body.duration);
  var event = _index2.default.event;

  var a = event.filter(function (el) {
    if (!Boolean(el.start >= y || x >= el.start + el.duration)) return el;
  });

  if (Number(reg[0]) >= 17 || Number(reg[0]) < 8 || y > 540 || a.length >= 2) {
    res.send(_extends({}, _index2.default, { varningWind: true }));
  } else {
    var randomId = function randomId() {
      var rand = Math.round(Math.random() * 10 * Math.random() * 100 / Math.random());
      if (event.includes(rand)) {
        randomId();
      } else return rand;
    };

    var i = event.indexOf(a[0]);
    var left = a.length + 1;
    if (i !== -1) {
      _index2.default.event[i] = _extends({}, event[i], { windCount: 2 });
      if (event[i].widthLeft === 2) left = 1;
    };

    ;

    event.push({
      id: randomId(),
      start: x,
      duration: Number(req.body.duration),
      title: req.body.title,
      windCount: a.length + 1,
      widthLeft: left
    });
    res.send(_index2.default);
  }
};