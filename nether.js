var express = require('express');
var fortune = require('./lib/fortune.js');
var handlebars = require('express-handlebars')
    .create({ defaultLayout: 'main' });

var app = express();

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(function(req, res, next) {
    res.locals.showTests = app.get('env') !=='production' &&
        req.query.test === '1';
    next();
});

app.use(express.static(__dirname + '/public'));

///////////////////Routs//////////////////////
app.get('/', function(req, res) {
    res.render('home');
});

app.get('/about', function(req, res) {
    res.render('about', {
        fortune: fortune.getFortune(),
        pageTestScript: '/qa/tests-about.js'
    });
});

app.get('/tours/lava-lake', function(req, res) {
    res.render('tours/lava-lake');
});

app.get('/tours/nether-fortress', function(req, res) {
    res.render('tours/nether-fortress');
});

app.get('/tours/request-group-rate', function(req, res) {
    res.render('tours/request-group-rate');
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
