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
});

app.post('/post', function(req, res) {
    console.log(req.body);
    res.send('ok');
});

app.put('/put', function(req, res) {
    console.log(req.body);
    res.send('ok');
});


http.listen(port, function() {
    console.log('listening on *:' + port);
}).on('error', function(err) {
    console.log(err);
});
