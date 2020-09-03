'use strict';
var express = require('express');
var router = express.Router();
var sqlDb = require("mssql");
var settings = require("../settings");
var db = require('../helpers/dbconfig');

router.get('/getpedidos/', function(req, res, next) {
    var conn = new sqlDb.Connection(settings.dbConfig);
    conn.connect()
        .then(function() {
            var request = new sqlDb.Request(conn);
            request.execute('GetPedidos', function(err, recordsets, returnValue, affected) {
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
router.post('/getpedidousuario/', function(req, res, next) {
    if (!req.body) {
        res.json("Valor no valido");
    } else {

        var conn = new sqlDb.Connection(settings.dbConfig);
        conn.connect()
            .then(function() {
                var request = new sqlDb.Request(conn);
                request.input('UsuarioID', sqlDb.Int, req.param('UsuarioID'));
                request.execute('GetPedidoUsuario', function(err, recordsets, returnValue, affected) {
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
router.post('/getpedidoproductousuario/', function(req, res, next) {
    if (!req.body) {
        res.json("Valor no valido");
    } else {

        var conn = new sqlDb.Connection(settings.dbConfig);
        conn.connect()
            .then(function() {
                var request = new sqlDb.Request(conn);
                request.input('UsuarioID', sqlDb.Int, req.param('UsuarioID'));
                request.execute('GetPedidoProductoUsuario', function(err, recordsets, returnValue, affected) {
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
router.post('/getsolicitudproductousuario/', function(req, res, next) {
    if (!req.body) {
        res.json("Valor no valido");
    } else {

        var conn = new sqlDb.Connection(settings.dbConfig);
        conn.connect()
            .then(function() {
                var request = new sqlDb.Request(conn);
                request.input('UsuarioID', sqlDb.Int, req.param('UsuarioID'));
                request.execute('GetSolicitudProductoUsuario', function(err, recordsets, returnValue, affected) {
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

router.post('/getpedidosolicitudid/', function(req, res, next) {
    if (!req.body) {
        res.json("Valor no valido");
    } else {

        var conn = new sqlDb.Connection(settings.dbConfig);
        conn.connect()
            .then(function() {
                var request = new sqlDb.Request(conn);
                request.input('SolicitudID', sqlDb.Int, req.param('SolicitudID'));
                request.execute('GetPedidoSolicitudID', function(err, recordsets, returnValue, affected) {
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
router.post('/getpedidoproductopedidoid/', function(req, res, next) {
    if (!req.body) {
        res.json("Valor no valido");
    } else {

        var conn = new sqlDb.Connection(settings.dbConfig);
        conn.connect()
            .then(function() {
                var request = new sqlDb.Request(conn);
                request.input('PedidoID', sqlDb.Int, req.param('PedidoID'));
                request.execute('GetPedidoProductoPedidoID', function(err, recordsets, returnValue, affected) {
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
router.post('/getpedidoid/', function(req, res, next) {
    if (!req.body) {
        res.json("Valor no valido");
    } else {

        var conn = new sqlDb.Connection(settings.dbConfig);
        conn.connect()
            .then(function() {
                var request = new sqlDb.Request(conn);
                request.input('PedidoID', sqlDb.Int, req.param('PedidoID'));
                request.execute('GetPedidosID', function(err, recordsets, returnValue, affected) {
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

router.post('/getpedidofecha/', function(req, res, next) {
    if (!req.body) {
        res.json("Valor no valido");
    } else {
        var dtr = new Date(req.param('Fecha')); //Date instance
        var conn = new sqlDb.Connection(settings.dbConfig);
        conn.connect()
            .then(function() {
                var request = new sqlDb.Request(conn);
                request.input('Fecha', sqlDb.DateTime, dtr);
                request.execute('GetPedidosFecha', function(err, recordsets, returnValue, affected) {
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
router.post('/insertpedido/', function(req, res, next) {
    if (!req.body) {
        res.json("Valor no valido");
    } else {
        var conn = new sqlDb.Connection(settings.dbConfig);
        var dtr = new Date(req.param('Fecha')); //Date instance
        conn.connect()
            .then(function() {
                var request = new sqlDb.Request(conn);
                request.input('Numero', sqlDb.NVarChar(12), req.param('Numero'));
                request.input('CotizacionID', sqlDb.Int(), req.param('CotizacionID'));
                request.input('UsuarioID', sqlDb.Int(), req.param('UsuarioID'));
                request.input('SolicitudID', sqlDb.Int(), req.param('SolicitudID'));
                request.input('Activo', sqlDb.Bit(), req.param('Activo'));
                request.input('Fecha', sqlDb.DateTime2(), dtr);
                request.input('FechaGenerado', sqlDb.NVarChar(150), req.param('FechaGenerado'));
                request.input('Nombre', sqlDb.NVarChar(50), req.param('Nombre'));
                request.input('Direccion', sqlDb.NVarChar(150), req.param('Direccion'));
                request.input('Latitud', sqlDb.Float(), req.param('Latitud'));
                request.input('Longitud', sqlDb.Float(), req.param('Longitud'));

                request.input('Estado', sqlDb.Char(1), req.param('Estado'));
                request.input('NombreEntrega', sqlDb.NVarChar(150), req.param('NombreEntrega'));
                request.input('DireccionEntrega', sqlDb.NVarChar(150), req.param('DireccionEntrega'));
                request.input('LatitudEntrega', sqlDb.Float(), req.param('LatitudEntrega'));
                request.input('LongitudEntrega', sqlDb.Float(), req.param('LongitudEntrega'));
                request.input('TotalPagar', sqlDb.Decimal(10, 4), req.param('TotalPagar'));
                request.input('TipoPagar', sqlDb.NVarChar(150), req.param('TipoPagar'));
                request.input('MontoPagar', sqlDb.Decimal(10, 4), req.param('MontoPagar'));
                request.input('UsuarioClienteID', sqlDb.Int(), req.param('UsuarioClienteID'));
                request.execute('InsertPedidos', function(err, recordsets, returnValue, affected) {
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

router.get('/getpedidolineatiempo/', function(req, res, next) {
    var conn = new sqlDb.Connection(settings.dbConfig);
    conn.connect()
        .then(function() {
            var request = new sqlDb.Request(conn);
            request.execute('GetPedidoLineaTiempo', function(err, recordsets, returnValue, affected) {
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
router.post('/getpedidolineatiempopedido/', function(req, res, next) {
    if (!req.body) {
        res.json("Valor no valido");
    } else {

        var conn = new sqlDb.Connection(settings.dbConfig);
        conn.connect()
            .then(function() {
                var request = new sqlDb.Request(conn);
                request.input('PedidoID', sqlDb.Int(), req.param('PedidoID'));
                request.execute('GetPedidoLineaTiempoPedido', function(err, recordsets, returnValue, affected) {
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
router.post('/insertpedidoproducto/', function(req, res, next) {
    if (!req.body) {
        res.json("Valor no valido");
    } else {
        var conn = new sqlDb.Connection(settings.dbConfig);
        conn.connect()
            .then(function() {
                var request = new sqlDb.Request(conn);

                request.input('PedidoID', sqlDb.Int(), req.param('PedidoID'));
                request.input('CotizacionProductoID', sqlDb.Int(), req.param('CotizacionProductoID'));
                request.input('CotizacionID', sqlDb.Int(), req.param('CotizacionID'));
                request.input('SolicitudProductoID', sqlDb.Int(), req.param('SolicitudProductoID'));
                request.input('Activo', sqlDb.Bit(), req.param('Activo'));
                request.input('ProductoID', sqlDb.Int(), req.param('ProductoID'));
                request.input('TipoNegocioID', sqlDb.Int(), req.param('TipoNegocioID'));
                request.input('Nombre', sqlDb.NVarChar(150), req.param('Nombre'));
                request.input('UnidadId', sqlDb.Int(), req.param('UnidadId'));
                request.input('UnidadNombre', sqlDb.NVarChar(100), req.param('UnidadNombre'));
                request.input('CategoriaID', sqlDb.Int(), req.param('CategoriaID'));
                request.input('CategoriaNombre', sqlDb.NVarChar(100), req.param('CategoriaNombre'));
                request.input('CategoriaAbreviatura', sqlDb.NVarChar(30), req.param('CategoriaAbreviatura'));
                request.input('Cantidad', sqlDb.Int(), req.param('Cantidad'));
                request.input('Imagen', sqlDb.NVarChar(150), req.param('Imagen'));
                request.input('RequiereReceta', sqlDb.Bit(), req.param('RequiereReceta'));

                request.input('PrecioUnitario', sqlDb.Decimal(10, 4), req.param('PrecioUnitario'));
                request.input('PrecioTotal', sqlDb.Decimal(10, 4), req.param('PrecioTotal'));
                request.execute('InsertPedidoProducto', function(err, recordsets, returnValue, affected) {
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