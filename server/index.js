require('newrelic');
const express = require('express');
const path = require('path');
// const proxy = require('express-http-proxy');

// const header = require('../client/header/header-sidebar-service/server/index.js');
// const instructors = require('../client/instructors/instructors-service/server/index.js');
// const feedback = require('../client/reviews/Student-Feedback/server/index.js');
// const also = require('../client/also_bought/students-also-bought-service/server/server.js');
// const mysql = require('../client/instructors/instructors-service/database/sqlizeIndex.js');

const request = require('request');

const app = express();

app.use('/courses', express.static(path.join(__dirname, '../public')));

// app.get('/:id/instructors', proxy('http://localhost:3002/'));
// app.get('/courses/:courseId/header', proxy('http://localhost:3003/'));
// app.get('/:courseId/reviews', proxy('http://localhost:3001/'));
// app.get('/courses/:courseId/similarcourses', proxy('http://localhost:3004/'));

app.get('/courses/:id', (req, res) => {
  request(`http://ip-172-31-22-249.us-east-2.compute.internal${req.originalUrl}`, (err, response, body) => {
    if (err) throw err;
    res.send(body);
  });
});

app.get('/:id/instructors', (req, res) => {
  request(`http://ip-172-31-22-249.us-east-2.compute.internal${req.originalUrl}`, (err, response, body) => {
    if (err) throw err;
    res.send(body);
  });
});

app.post('/courses', (req, res) => {
  request({
    uri: `http://ip-172-31-22-249.us-east-2.compute.internal${req.originalUrl}`,
    method: 'POST',
    body: req.body,
  }, (err, response, body) => {
    if (err) throw err;
    res.send(body);
  });
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
