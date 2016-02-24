var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session       = require('express-session');
var multipart = require('connect-multiparty');
var mongoose = require('mongoose');

var app = express();
var http = require('http').Server(app);


// view engine setup
app.set('views', './views');
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multipart());
app.use(cookieParser());
app.use(session({

        secret: 'q~!!#s4AKI?RA',
        saveUninitialized:  false,
        resave:       false
      }));

app.use(express.static(__dirname+ '/public'));

//DB conf
require('./db/mongoose.js')(mongoose);

//routes
require('./routes/routes_www.js')(app);
require('./routes/routes_API.js')(app,mongoose);


http.listen(process.env.PORT,function () {
   
   console.log ('Escuchando por el puerto ');

});
