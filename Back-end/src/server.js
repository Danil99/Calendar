import express from 'express';
import bodyParser from 'body-parser';

import headers from './middleware/headers.js';

import events from './middleware/events.js';
import addEvent from './middleware/addEvent.js';
import deleteEvent from './middleware/deleteEvent.js';

let app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.use(headers);

app.post('/events', events);
app.post('/addEvent', addEvent);
app.post('/deleteEvent', deleteEvent);

app.listen(8080, () => {
  console.log('Server is started');
})
