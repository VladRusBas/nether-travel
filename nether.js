var express = require('express');

var app = express();

var handlebars = require('express-handlebars')
    .create({ defaultLayout: 'main' });

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

var fortunes = [
    "Defeat your fears or your fears defeat you.",
    "Rivers need sources.",
    "Don't fear unfamilliar.",
    "You're gonna be nicely surprised.",
    "Be simpler wherever you can be."
];

app.get('/', function(req, res) {
    res.render('home');
});

app.get('/about', function(req, res) {
    var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render('about', {fortune: randomFortune});
});

//Handling 404 error
app.use(function(req, res) {
    res.status(404);
    res.render('404');
});

//Handling 500 error
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function() {
    console.log('Express is running on http://localhost:' +
        app.get('port') + '; press Ctrl+C to terminate.');
});
