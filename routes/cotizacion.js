var express = require('express');
var router = express.Router();
var sqlDb = require("mssql");
var settings = require("../settings");
var db = require('../helpers/dbconfig');

router.get('/getcotizaciones/', function(req, res, next) {
    var conn = new sqlDb.Connection(settings.dbConfig);
    conn.connect()
        .then(function() {
            var request = new sqlDb.Request(conn);
            request.execute('GetCotizaciones', function(err, recordsets, returnValue, affected) {
                if (err) {
                    res.json(err);
                    console.log("error:" + err);
                } else {
                    res.json(recordsets[0]);
                }
            });
        }).catch(function(err) {
            console.log(err);
        });
});
router.post('/getcotizacionid/', function(req, res, next) {
    if (!req.body) {
        res.json("Valor no valido");
    } else {

        var conn = new sqlDb.Connection(settings.dbConfig);
        conn.connect()
            .then(function() {
                var request = new sqlDb.Request(conn);
                request.input('CotizacionID', sqlDb.Int(), req.param('CotizacionID'));
                request.execute('GetCotizacion', function(err, recordsets, returnValue, affected) {
                    if (err) {
                        res.json(err);
                        console.log("error:" + err);
                    } else {
                        res.json(recordsets[0]);
                    }
                });
            }).catch(function(err) {
                console.log(err);
            });
    }
});

router.get('/getcotizacionproductos/', function(req, res, next) {
    var conn = new sqlDb.Connection(settings.dbConfig);
    conn.connect()
        .then(function() {
            var request = new sqlDb.Request(conn);
            request.execute('GetCotizacionProducto', function(err, recordsets, returnValue, affected) {
                if (err) {
                    res.json(err);
                    console.log("error:" + err);
                } else {
                    res.json(recordsets[0]);
                }
            });
        }).catch(function(err) {
            console.log(err);
        });
});
router.post('/getcotizacionproductocotizacion/', function(req, res, next) {
    if (!req.body) {
        res.json("Valor no valido");
    } else {

        var conn = new sqlDb.Connection(settings.dbConfig);
        conn.connect()
            .then(function() {
                var request = new sqlDb.Request(conn);
                request.input('CotizacionID', sqlDb.Int(), req.param('CotizacionID'));
                request.execute('GetCotizacionProductoCotizacion', function(err, recordsets, returnValue, affected) {
                    if (err) {
                        res.json(err);
                        console.log("error:" + err);
                    } else {
                        res.json(recordsets[0]);
                    }
                });
            }).catch(function(err) {
                console.log(err);
            });
    }
});
router.post('/updatecotizacionestado/', function(req, res, next) {
    if (!req.body) {
        res.json("Valor no valido");
    } else {

        var conn = new sqlDb.Connection(settings.dbConfig);
        conn.connect()
            .then(function() {
                var request = new sqlDb.Request(conn);
                request.input('Estado', sqlDb.Char(1), req.param('Estado'));
                request.input('CotizacionID', sqlDb.Int(), req.param('CotizacionID'));
                request.execute('UpdateCotizacionEstado', function(err, recordsets, returnValue, affected) {
                    if (err) {
                        res.json(err);
                        console.log("error:" + err);
                    } else {
                        res.json(recordsets[0]);
                    }
                });
            }).catch(function(err) {
                console.log(err);
            });
    }
});
router.post('/getcotizacionsolicitudusuarioid/', function(req, res, next) {
    if (!req.body) {
        res.json("Valor no valido");
    } else {

        var conn = new sqlDb.Connection(settings.dbConfig);
        conn.connect()
            .then(function() {
                var request = new sqlDb.Request(conn);
                request.input('UsuarioID', sqlDb.Int(), req.param('UsuarioID'));
                request.execute('GetCotizacionUsuarioSolicitud', function(err, recordsets, returnValue, affected) {
                    if (err) {
                        res.json(err);
                        console.log("error:" + err);
                    } else {
                        res.json(recordsets[0]);
                    }
                });
            }).catch(function(err) {
                console.log(err);
            });
    }
});
router.post('/getcotizacionsolicitudid/', function(req, res, next) {
    if (!req.body) {
        res.json("Valor no valido");
    } else {

        var conn = new sqlDb.Connection(settings.dbConfig);
        conn.connect()
            .then(function() {
                var request = new sqlDb.Request(conn);
                request.input('SolicitudID', sqlDb.Int(), req.param('SolicitudID'));
                request.execute('GetCotizacionSolicitud', function(err, recordsets, returnValue, affected) {
                    if (err) {
                        res.json(err);
                        console.log("error:" + err);
                    } else {
                        res.json(recordsets[0]);
                    }
                });
            }).catch(function(err) {
                console.log(err);
            });
    }
});
module.exports = router