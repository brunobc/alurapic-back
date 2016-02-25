var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('./public'));

app.use(bodyParser.json());

//require('../app/routes/foto')(app);
//require('../app/routes/grupo')(app);
consign({cwd: 'app'})
    .include('api')
    .then('routes')
    .into(app);

module.exports = app;