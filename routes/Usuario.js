var express = require('express');
var router = express.Router();
var sqlDb = require("mssql");
var settings = require("../settings");
var db = require('../helpers/dbconfig');



router.get('/getusuarios/', function(req, res, next) {
    var conn = new sqlDb.Connection(settings.dbConfig);
    conn.connect()
        .then(function() {
            var request = new sqlDb.Request(conn);
            request.execute('GetListUsuarios', function(err, recordsets, returnValue, affected) {
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
router.post('/getusuario/', function(req, res, next) {
    if (!req.body) {
        res.json("Valor no valido");
    } else {
        var conn = new sqlDb.Connection(settings.dbConfig);
        conn.connect()
            .then(function() {
                var request = new sqlDb.Request(conn);
                request.input('Usuario', sqlDb.VarChar(128), req.param('Usuario'));
                request.execute('GetUsuario', function(err, recordsets, returnValue, affected) {
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
router.post('/addusuario/', function(req, res, next) {
    if (!req.body) {
        res.json("Valor no valido");
    } else {
        var conn = new sqlDb.Connection(settings.dbConfig);
        var dtc = new Date(req.param('FchHraCreacion')); //Date instance
        var dta = new Date(req.param('FchHraActualizacion')); //Date instance
        var dtb = new Date(req.param('FchHraBloqueo')); //Date instance
        var dtd = new Date(req.param('FchHraDesbloqueo')); //Date instance
        var dtn = new Date(req.param('FechaNacimiento')); //Date instance
        conn.connect()
            .then(function() {
                var request = new sqlDb.Request(conn);
                request.input('TipoUsuarioID', sqlDb.Char(1), req.param('TipoUsuarioID'));
                request.input('Usuario', sqlDb.VarChar(128), req.param('Usuario'));
                request.input('Descripcion', sqlDb.NVarChar(120), req.param('Descripcion'));
                request.input('Email', sqlDb.VarChar(128), req.param('Email'));
                request.input('Telefono', sqlDb.VarChar(15), req.param('Telefono'));
                request.input('Activo', sqlDb.Bit(), req.param('Activo'));
                request.input('Bloqueado', sqlDb.Bit(), req.param('Bloqueado'));
                request.input('Token', sqlDb.NVarChar(128), req.param('Token'));
                request.input('FchHraCreacion', sqlDb.DateTime2(), dtc);
                request.input('FchHraActualizacion', sqlDb.DateTime2(), dta);
                request.input('FchHraBloqueo', sqlDb.DateTime2(), dtb);
                request.input('FchHraDesbloqueo', sqlDb.DateTime2(), dtd);
                request.input('FechaNacimiento', sqlDb.DateTime2(), dtn);
                request.input('FarmaciaID', sqlDb.Int(), req.param('FarmaciaID'));
                request.execute('InsertUsuarios', function(err, recordsets, returnValue, affected) {
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

router.post('/login/', function(req, res, next) {
    if (!req.body) {
        res.json("Valor no valido");
    } else {

        var conn = new sqlDb.Connection(settings.dbConfig);
        conn.connect()
            .then(function() {
                var request = new sqlDb.Request(conn);
                request.input('Usuario', sqlDb.VarChar(128), req.param('Usuario'));
                request.input('Token', sqlDb.NVarChar(128), req.param('Token'));
                request.execute('LoginUsuarios', function(err, recordsets, returnValue, affected) {
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
router.post('/getusuarioingresoid/', function(req, res, next) {
    if (!req.body) {
        res.json("Valor no valido");
    } else {

        var conn = new sqlDb.Connection(settings.dbConfig);
        conn.connect()
            .then(function() {
                var request = new sqlDb.Request(conn);
                request.input('UsuarioID', sqlDb.Int(), req.param('UsuarioID'));
                request.execute('GetUsuarioIngresoId', function(err, recordsets, returnValue, affected) {
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
router.post('/updateusuarioingresoid/', function(req, res, next) {
    if (!req.body) {
        res.json("Valor no valido");
    } else {
        var conn = new sqlDb.Connection(settings.dbConfig);
        var dtr = new Date(req.param('FechaRegistro')); //Date instance
        var dta = new Date(req.param('FechaUltimaActualizacion')); //Date instance
        conn.connect()
            .then(function() {
                var request = new sqlDb.Request(conn);
                request.input('UsuarioID', sqlDb.Int(), req.param('UsuarioID'));
                request.input('FechaRegistro', sqlDb.DateTime2(), dtr);
                request.input('FechaUltimaActualizacion', sqlDb.DateTime2(), dta);
                request.input('Disponible', sqlDb.Bit(), req.param('Disponible'));
                request.input('UsuarioIngresoID', sqlDb.Int(), req.param('UsuarioIngresoID'));
                request.execute('UpdateUsuarioIngreso', function(err, recordsets, returnValue, affected) {
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
router.post('/insertusuarioingreso/', function(req, res, next) {
    if (!req.body) {
        res.json("Valor no valido");
    } else {
        var conn = new sqlDb.Connection(settings.dbConfig);
        var dtr = new Date(req.param('FechaRegistro')); //Date instance
        var dta = new Date(req.param('FechaUltimaActualizacion')); //Date instance
        conn.connect()
            .then(function() {
                var request = new sqlDb.Request(conn);
                request.input('UsuarioID', sqlDb.Int(), req.param('UsuarioID'));
                request.input('FechaRegistro', sqlDb.DateTime2(), dtr);
                request.input('FechaUltimaActualizacion', sqlDb.DateTime2(), dta);
                request.input('Disponible', sqlDb.Bit(), req.param('Disponible'));
                request.execute('InsertUsuarioIngreso', function(err, recordsets, returnValue, affected) {
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
router.get('/getusuariodireccion/', function(req, res, next) {
    var conn = new sqlDb.Connection(settings.dbConfig);
    conn.connect()
        .then(function() {
            var request = new sqlDb.Request(conn);
            request.execute('GetUsuarioDireccion', function(err, recordsets, returnValue, affected) {
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

router.post('/getusuariodireccionusuario/', function(req, res, next) {
    if (!req.body) {
        res.json("Valor no valido");
    } else {

        var conn = new sqlDb.Connection(settings.dbConfig);
        conn.connect()
            .then(function() {
                var request = new sqlDb.Request(conn);
                request.input('UsuarioID', sqlDb.Int(), req.param('UsuarioID'));
                request.execute('GetUsuarioDireccionUsuario', function(err, recordsets, returnValue, affected) {
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
router.post('/updatepassusuarios/', function(req, res, next) {
    if (!req.body) {
        res.json("Valor no valido");
    } else {

        var conn = new sqlDb.Connection(settings.dbConfig);
        conn.connect()
            .then(function() {
                var request = new sqlDb.Request(conn);
                request.input('UsuarioID', sqlDb.Int(), req.param('UsuarioID'));
                request.input('Token', sqlDb.NVarChar(128), req.param('Token'));
                request.execute('UpdatePassUsuarios', function(err, recordsets, returnValue, affected) {
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
router.post('/updateusuariodireccion/', function(req, res, next) {
    if (!req.body) {
        res.json("Valor no valido");
    } else {
        var conn = new sqlDb.Connection(settings.dbConfig);
        conn.connect()
            .then(function() {
                var request = new sqlDb.Request(conn);

                request.input('UsuarioDireccionID', sqlDb.Int(), req.param('UsuarioDireccionID'));
                request.input('UsuarioID', sqlDb.Int(), req.param('UsuarioID'));
                request.input('Nombre', sqlDb.VarChar(50), req.param('Nombre'));
                request.input('Direccion', sqlDb.NVarChar(150), req.param('Direccion'));
                request.input('Latitud', sqlDb.Float(), req.param('Latitud'));
                request.input('Longitud', sqlDb.Float(), req.param('Longitud'));

                request.input('Activo', sqlDb.Bit(), req.param('Activo'));
                request.input('DistritoID', sqlDb.Int(), req.param('DistritoID'));
                request.input('Departamento', sqlDb.VarChar(50), req.param('Departamento'));
                request.execute('UpdateUsuarioDireccion', function(err, recordsets, returnValue, affected) {
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
router.post('/insertusuariodireccion/', function(req, res, next) {
    if (!req.body) {
        res.json("Valor no valido");
    } else {
        var conn = new sqlDb.Connection(settings.dbConfig);
        conn.connect()
            .then(function() {
                var request = new sqlDb.Request(conn);
                request.input('UsuarioID', sqlDb.Int(), req.param('UsuarioID'));
                request.input('Nombre', sqlDb.VarChar(50), req.param('Nombre'));
                request.input('Direccion', sqlDb.NVarChar(150), req.param('Direccion'));
                request.input('Latitud', sqlDb.Float(), req.param('Latitud'));
                request.input('Longitud', sqlDb.Float(), req.param('Longitud'));

                request.input('Activo', sqlDb.Bit(), req.param('Activo'));
                request.input('DistritoID', sqlDb.Int(), req.param('DistritoID'));
                request.input('Departamento', sqlDb.VarChar(50), req.param('Departamento'));
                request.execute('InsertUsuarioDireccion', function(err, recordsets, returnValue, affected) {
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