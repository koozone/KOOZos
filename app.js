var express = require('express');
var app = express();

app.locals.pretty = true;

app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views', 'views');

app.get('/', function (req, res) {
    res.send('Hello World');
});
app.get('/temp', function (req, res) {
    res.render('temp', { title: 'Hey', message: 'Hello there!'});
});
app.get('/login', function (req, res) {
    res.send('Hello World Login');
});

app.listen(3000, function () {
    console.log('3000 포트 접속!');
});