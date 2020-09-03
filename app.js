'use strict';
var debug = require('debug');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


var routes = require('./routes/index');
app.use('/', routes);

var usuario = require('./routes/Usuario');
var pedido = require('./routes/pedido');
var parametro = require('./routes/parametro');
var producto = require('./routes/producto');
var unidadmedida = require('./routes/unidadmedida');
var farmacia = require('./routes/farmacia');
var solicitud = require('./routes/solicitud');
var cotizacion = require('./routes/cotizacion');
var notificacion = require('./routes/notificacion');

app.use('/Usuario', usuario);
app.use('/pedido', pedido);
app.use('/parametro', parametro);
app.use('/producto', producto);
app.use('/unidadmedida', unidadmedida);
app.use('/farmacia', farmacia);
app.use('/solicitud', solicitud);
app.use('/cotizacion', cotizacion);
app.use('/notificacion', notificacion);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.set('port', process.env.PORT || 5300);

var server = app.listen(app.get('port'), function() {
    debug('ProduccionMysql listening on port ' + server.address().port);
});

module.exports = app;