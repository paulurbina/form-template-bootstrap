const path = require('path');

const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');

const indexRoutes = require('./routes/index');

//settings
app.set('port', process.env.PORT || 3000 );
app.set('views', path.join(__dirname, 'public/'));
app.set('view engine', 'ejs');

//middlewares
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));

//routes
app.use('/', indexRoutes);

//static files
app.use(express.static(__dirname + '/public/css/'));


app.listen(app.get('port'), () => {
	console.log('server on port ', app.get('port'));
});