'use strict';

const console = require('keypunch');
console.addHeaderFunction(() => `[PID:${process.pid}]`);

const express = require('express');
const app = express();
app.use(express.static('public'))
app.use(express.static('app'))

const router = require('./lib/router')(app);

const port = process.env.PORT || 5000;
app.listen(port, function () {
  console.info(`Frontend server listening on ${port}`);
});
