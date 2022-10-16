// init an express app
const express = require('express');
const app = require('express')();
const http = require('http').Server(app);

var port = 80;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.json({
        message: 'Hello World!'
    });
}).on('error', function(error) {handle_error(error, 'http.get');});

app.post('/post', function(req, res) {
    console.log(req.body);
    res.send('ok');
}).on('error', function(error) {handle_error(error, 'http.post');});

app.put('/put', function(req, res) {
    console.log(req.body);
    res.send('ok');
}).on('error', function(error) {handle_error(error, 'http.put');});


http.listen(port, function() {
    console.log('listening on *:' + port);
}).on('error', function(error) {handle_error(error, `http.server init for port ${port}`);});

function handle_error(error, location) {
    console.log(`
        | ${error} |
        | ${location} |
    `)
}
