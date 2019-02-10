var bodyParser = require('body-parser');
var express = require('express');

var app = express();
app.locals.pretty = true;

app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', './views_file');
app.set('view engine', 'pug');

app.get('/topic/new', function (req, res) {
	res.render('new');
});
app.post('/topic', function (req, res) {
	res.send('topic' + req.body.title);
});

app.listen('3000', function () {
	console.log('Connect, 3000 port!');
})