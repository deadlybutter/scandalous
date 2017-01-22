'use strict';

const console = require('keypunch');
const engine = require('./engine');
engine.load('default');

const api = require('./api');

module.exports = (app) => {
  app.use('/api', api);

  app.get('*', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(engine.render('default', {
      title: 'scandalous as fuck',
      data: "''",
    }));
    res.end();
  });
};
