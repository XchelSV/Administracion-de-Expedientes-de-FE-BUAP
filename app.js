var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session       = require('express-session');
var multipart = require('connect-multiparty');

var app = express();
var http = require('http').Server(app);
var MongoClient = require('mongodb').MongoClient;


// view engine setup
app.set('views', './views');
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({

        secret: 'q~!!#s4AKI?RA',
        saveUninitialized:  false,
        resave:       false
      }));


app.use(express.static(__dirname+ '/public'));


require('./routes/routes_www')(app);
require('./routes/routes_API')(app);


http.listen(4020,function () {
   
   console.log ('Escuchando por el puerto 4020');

});
