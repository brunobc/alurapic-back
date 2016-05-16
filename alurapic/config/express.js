var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('./public'));
app.use(bodyParser.json());

app.set('secret', 'maoew');

//require('../app/routes/foto')(app);
//require('../app/routes/grupo')(app);
consign({cwd: 'app'})
    .include('models')
    .include('api')
    .then('routes/auth.js')
    .then('routes')
    .into(app);

module.exports = app;