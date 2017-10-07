const express = require('express');
const app = express();
var path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // use either jade or ejs		// instruct express to server up static assets
app.use(express.static('public'));-

app.get('/', function (req, res) {
  res.render('index');
})

app.get('/map', function (req, res) {
  res.render('map');
})

app.get('/gabbie', function(req, res) {
	res.render('gabbie');
});

app.get('/akshay', function(req, res) {
	res.render('akshay');
})

app.listen(3000, function () {
	console.log('Server Started Boiz');
})