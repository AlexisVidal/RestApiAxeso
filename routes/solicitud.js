var express = require('express');
var router = express.Router();
var sqlDb = require("mssql");
var settings = require("../settings");
var db = require('../helpers/dbconfig');

router.post('/getsolicitudusuario/', function(req, res, next) {
    if (!req.body) {
        res.json("Valor no valido");
    } else {

        var conn = new sqlDb.Connection(settings.dbConfig);
        conn.connect()
            .then(function() {
                var request = new sqlDb.Request(conn);
                request.input('UsuarioID', sqlDb.Int(), req.param('UsuarioID'));
                request.execute('GetSolicitudUsuario', function(err, recordsets, returnValue, affected) {
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
router.post('/getsolicitudusuario/', function(req, res, next) {
    if (!req.body) {
        res.json("Valor no valido");
    } else {

        var conn = new sqlDb.Connection(settings.dbConfig);
        conn.connect()
            .then(function() {
                var request = new sqlDb.Request(conn);
                request.input('UsuarioID', sqlDb.Int(), req.param('UsuarioID'));
                request.execute('GetSolicitudUsuario', function(err, recordsets, returnValue, affected) {
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
router.post('/getsolicitudusuariosid/', function(req, res, next) {
    if (!req.body) {
        res.json("Valor no valido");
    } else {

        var conn = new sqlDb.Connection(settings.dbConfig);
        conn.connect()
            .then(function() {
                var request = new sqlDb.Request(conn);
                request.input('UsuarioID', sqlDb.Int(), req.param('UsuarioID'));
                request.input('SolicitudID', sqlDb.Int(), req.param('SolicitudID'));
                request.execute('GetSolicitudUsuarioSID', function(err, recordsets, returnValue, affected) {
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
router.post('/getsolicitudid/', function(req, res, next) {
    if (!req.body) {
        res.json("Valor no valido");
    } else {

        var conn = new sqlDb.Connection(settings.dbConfig);
        conn.connect()
            .then(function() {
                var request = new sqlDb.Request(conn);
                request.input('SolicitudID', sqlDb.Int(), req.param('SolicitudID'));
                request.execute('GetSolicitudID', function(err, recordsets, returnValue, affected) {
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
router.post('/getsolicitudcode/', function(req, res, next) {
    if (!req.body) {
        res.json("Valor no valido");
    } else {

        var conn = new sqlDb.Connection(settings.dbConfig);
        conn.connect()
            .then(function() {
                var request = new sqlDb.Request(conn);
                request.input('SolicitudCode', sqlDb.VarChar(10), req.param('SolicitudCode'));
                request.execute('GetSolicitudCode', function(err, recordsets, returnValue, affected) {
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
router.post('/insertsolicitud/', function(req, res, next) {
    if (!req.body) {
        res.json("Valor no valido");
    } else {
        var conn = new sqlDb.Connection(settings.dbConfig);
        var dtr = new Date(req.param('Fecha')); //Date instance
        conn.connect()
            .then(function() {
                var request = new sqlDb.Request(conn);
                request.input('UsuarioID', sqlDb.Int(), req.param('UsuarioID'));
                request.input('SolicitudCode', sqlDb.VarChar(10), req.param('SolicitudCode'));
                request.input('Direccion', sqlDb.VarChar(350), req.param('Direccion'));
                request.input('Latitud', sqlDb.Float(), req.param('Latitud'));
                request.input('Longitud', sqlDb.Float(), req.param('Longitud'));
                request.input('Distancia', sqlDb.Float(), req.param('Distancia'));
                request.input('Fecha', sqlDb.DateTime2(), dtr);
                request.input('Activo', sqlDb.Bit(), req.param('Activo'));
                request.input('FechaEnviado', sqlDb.VarChar(150), req.param('FechaEnviado'));
                request.input('Cotizado', sqlDb.Bit(), req.param('Cotizado'));
                request.execute('InsertSolicitud', function(err, recordsets, returnValue, affected) {
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
router.get('/getsolicitudproductos/', function(req, res, next) {
    var conn = new sqlDb.Connection(settings.dbConfig);
    conn.connect()
        .then(function() {
            var request = new sqlDb.Request(conn);
            request.execute('GetSolicitudProductos', function(err, recordsets, returnValue, affected) {
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
router.post('/getsolicitudproductosolicitud/', function(req, res, next) {
    if (!req.body) {
        res.json("Valor no valido");
    } else {

        var conn = new sqlDb.Connection(settings.dbConfig);
        conn.connect()
            .then(function() {
                var request = new sqlDb.Request(conn);
                request.input('SolicitudID', sqlDb.Int(), req.param('SolicitudID'));
                request.execute('GetSolicitudProductoSolicitud', function(err, recordsets, returnValue, affected) {
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
router.post('/getsolicitudproductosolicitudusuario/', function(req, res, next) {
    if (!req.body) {
        res.json("Valor no valido");
    } else {

        var conn = new sqlDb.Connection(settings.dbConfig);
        conn.connect()
            .then(function() {
                var request = new sqlDb.Request(conn);
                request.input('SolicitudID', sqlDb.Int(), req.param('SolicitudID'));
                request.input('UsuarioID', sqlDb.Int(), req.param('UsuarioID'));
                request.execute('GetSolicitudProductoSolicitudUsuario', function(err, recordsets, returnValue, affected) {
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
router.post('/insertsolicitudproducto/', function(req, res, next) {
    if (!req.body) {
        res.json("Valor no valido");
    } else {
        var conn = new sqlDb.Connection(settings.dbConfig);
        var dtr = new Date(req.param('Fecha')); //Date instance
        conn.connect()
            .then(function() {
                var request = new sqlDb.Request(conn);
                request.input('SolicitudID', sqlDb.Int(), req.param('SolicitudID'));
                request.input('ProductoLiteID', sqlDb.Int(), req.param('ProductoLiteID'));
                request.input('ProductoID', sqlDb.Int(), req.param('ProductoID'));
                request.input('TipoNegocioID', sqlDb.Int(), req.param('TipoNegocioID'));
                request.input('Nombre', sqlDb.NVarChar(150), req.param('Nombre'));
                request.input('UnidadId', sqlDb.Int(), req.param('UnidadId'));
                request.input('UnidadNombre', sqlDb.VarChar(100), req.param('UnidadNombre'));
                request.input('CategoriaID', sqlDb.Int(), req.param('CategoriaID'));
                request.input('CategoriaNombre', sqlDb.NVarChar(100), req.param('CategoriaNombre'));
                request.input('CategoriaAbreviatura', sqlDb.NVarChar(30), req.param('CategoriaAbreviatura'));
                request.input('Cantidad', sqlDb.Int(), req.param('Cantidad'));
                request.input('Activo', sqlDb.Bit(), req.param('Activo'));
                request.input('Imagen', sqlDb.NVarChar(150), req.param('Imagen'));
                request.input('PrecioUnitario', sqlDb.Decimal(10, 4), req.param('PrecioUnitario'));
                request.input('PrecioTotal', sqlDb.Decimal(10, 4), req.param('PrecioTotal'));
                request.input('RequiereReceta', sqlDb.Bit(), req.param('RequiereReceta'));
                request.execute('InsertSolicitudProducto', function(err, recordsets, returnValue, affected) {
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

router.get('/getsolicitudfarmacias/', function(req, res, next) {
    var conn = new sqlDb.Connection(settings.dbConfig);
    conn.connect()
        .then(function() {
            var request = new sqlDb.Request(conn);
            request.execute('GetSolicitudDataFarmacias', function(err, recordsets, returnValue, affected) {
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
router.post('/getsolicitudfarmaciasolicitud/', function(req, res, next) {
    if (!req.body) {
        res.json("Valor no valido");
    } else {

        var conn = new sqlDb.Connection(settings.dbConfig);
        conn.connect()
            .then(function() {
                var request = new sqlDb.Request(conn);
                request.input('SolicitudID', sqlDb.Int(), req.param('SolicitudID'));
                request.execute('GetSolicitudDataFarmaciasSolicitud', function(err, recordsets, returnValue, affected) {
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
router.post('/insertsolicitudfarmacia/', function(req, res, next) {
    if (!req.body) {
        res.json("Valor no valido");
    } else {
        var conn = new sqlDb.Connection(settings.dbConfig);
        var dtr = new Date(req.param('Fecha')); //Date instance
        conn.connect()
            .then(function() {
                var request = new sqlDb.Request(conn);
                request.input('SolicitudID', sqlDb.Int(), req.param('SolicitudID'));
                request.input('UsuarioID', sqlDb.Int(), req.param('UsuarioID'));
                request.input('Activo', sqlDb.Bit(), req.param('Activo'));
                request.execute('InsertSolicitudDataFarmacias', function(err, recordsets, returnValue, affected) {
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