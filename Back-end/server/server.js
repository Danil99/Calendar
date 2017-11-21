'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _headers = require('./middleware/headers.js');

var _headers2 = _interopRequireDefault(_headers);

var _events = require('./middleware/events.js');

var _events2 = _interopRequireDefault(_events);

var _addEvent = require('./middleware/addEvent.js');

var _addEvent2 = _interopRequireDefault(_addEvent);

var _deleteEvent = require('./middleware/deleteEvent.js');

var _deleteEvent2 = _interopRequireDefault(_deleteEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

app.use(_headers2.default);

app.post('/events', _events2.default);
app.post('/addEvent', _addEvent2.default);
app.post('/deleteEvent', _deleteEvent2.default);

app.listen(8080, function () {
  console.log('Server is started');
});