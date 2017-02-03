var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/home', (req, res) => {
    res.send('This is my home');
})

app.listen(5000);
