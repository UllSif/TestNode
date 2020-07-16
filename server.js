const express = require('express');
const app = express();

var data = [{'name': 'Guillaume'}, {'name': 'Jean'}];

app.use('/lib', express.static(__dirname + '/client/static/'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/index.html');
})

app.listen(3000, function () {
    console.log('Le port fonctionne');
})

app.get('/api/users', function (req, res) {
    res.json(data);
})
