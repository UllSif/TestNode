const express = require('express');
const app = express();

var data = [{'todo': 'Faire le ménage'}, {'todo': 'Faire les courses'}];

app.use('/lib', express.static(__dirname + '/client/static/'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/index.html');
})

app.listen(3000, function () {
    console.log('Le port fonctionne');
})

app.get('/api/todos', function (req, res) {
    res.json(data);
})
