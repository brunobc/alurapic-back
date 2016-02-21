var express = require('express');
var consign = require('consign');
var app = express();

app.use(express.static('./public'));

//require('../app/routes/foto')(app);
//require('../app/routes/grupo')(app);
consign({cwd: 'app'})
    .include('api')
    .then('routes')
    .into(app);

module.exports = app;