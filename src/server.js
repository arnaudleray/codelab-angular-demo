require('reflect-metadata');
require('zone.js/dist/zone-node');
var platformServer = require('@angular/platform-server').platformServer;
var renderModuleFactory = require('@angular/platform-server').renderModuleFactory;
var enableProdMode = require('@angular/core').enableProdMode;
var AppServerModuleNgFactory = require('../dist-server/main.bundle').AppServerModuleNgFactory;
var express = require('express');
var readFileSync = require('fs').readFileSync;
var join = require('path').join;

const HOST = '0.0.0.0';
const PORT = process.env.PORT || 4000;

enableProdMode();

const app = express();

let template = readFileSync(join(__dirname, '..', 'dist', 'index.html')).toString();

app.engine('html', (_, options, callback) => {
  const opts = {
    document: template,
    url: options.req.url,
    extraProviders: [{
      provide: 'serverUrl',
      useValue: `${options.req.protocol}://${options.req.get('host')}`
    }]
  };

  renderModuleFactory(AppServerModuleNgFactory, opts).then(html => callback(null, html));
});

app.set('view engine', 'html');
app.set('views', 'src');

app.get('*.*', express.static(join(__dirname, '..', 'dist')));

app.get('*', (req, res) => {
  res.render('index', { req });
});

app.listen(PORT, HOST, () => {
  console.log(`listening on http://${HOST}:${PORT}!`);
});
