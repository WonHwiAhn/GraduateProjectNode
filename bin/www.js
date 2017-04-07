var app = require('app');
var http = require('http');

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);