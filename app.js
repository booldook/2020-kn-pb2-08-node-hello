const express = require('express');
const app = express();
app.listen(3000);

app.get('/', function(req, res) {
	res.send('<h1>Hello World</h1>');
});

app.get('/hi', function(req, res) {
	res.send('<h1>Hi! booldook</h1>');
});