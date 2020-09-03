var express = require('express');
var router = express.Router();
var sqlDb = require("mssql");
var settings = require("../settings");
var db = require('../helpers/dbconfig');
router.get('/getproductomarca/', function(req, res, next) {
    var conn = new sqlDb.Connection(settings.dbConfig);
    conn.connect()
        .then(function() {
            var request = new sqlDb.Request(conn);
            request.execute('GetProductoMarca', function(err, recordsets, returnValue, affected) {
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
router.get('/getcategoria/', function(req, res, next) {
    var conn = new sqlDb.Connection(settings.dbConfig);
    conn.connect()
        .then(function() {
            var request = new sqlDb.Request(conn);
            request.execute('GetCategoria', function(err, recordsets, returnValue, affected) {
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
router.get('/getproductos/', function(req, res, next) {
    var conn = new sqlDb.Connection(settings.dbConfig);
    conn.connect()
        .then(function() {
            var request = new sqlDb.Request(conn);
            request.execute('GetProductosAll', function(err, recordsets, returnValue, affected) {
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
router.post('/getproductoscategoria/', function(req, res, next) {
    if (!req.body) {
        res.json("Valor no valido");
    } else {

        var conn = new sqlDb.Connection(settings.dbConfig);
        conn.connect()
            .then(function() {
                var request = new sqlDb.Request(conn);
                request.input('CategoriaID', sqlDb.Int, req.param('CategoriaID'));
                request.execute('GetProductosCategoria', function(err, recordsets, returnValue, affected) {
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
router.post('/getproductosmarca/', function(req, res, next) {
    if (!req.body) {
        res.json("Valor no valido");
    } else {

        var conn = new sqlDb.Connection(settings.dbConfig);
        conn.connect()
            .then(function() {
                var request = new sqlDb.Request(conn);
                request.input('ProductoMarcaID', sqlDb.Int, req.param('ProductoMarcaID'));
                request.execute('GetProductosMarca', function(err, recordsets, returnValue, affected) {
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
router.post('/getproductobusqueda/', function(req, res, next) {
    if (!req.body) {
        res.json("Valor no valido");
    } else {

        var conn = new sqlDb.Connection(settings.dbConfig);
        conn.connect()
            .then(function() {
                var request = new sqlDb.Request(conn);
                request.input('Busqueda', sqlDb.VarChar(200), req.param('Busqueda'));
                request.execute('GetProductosBusqueda', function(err, recordsets, returnValue, affected) {
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
router.post('/getproductoid/', function(req, res, next) {
    if (!req.body) {
        res.json("Valor no valido");
    } else {

        var conn = new sqlDb.Connection(settings.dbConfig);
        conn.connect()
            .then(function() {
                var request = new sqlDb.Request(conn);
                request.input('ProductoID', sqlDb.Int, req.param('ProductoID'));
                request.execute('GetProductosId', function(err, recordsets, returnValue, affected) {
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
module.exports = router;