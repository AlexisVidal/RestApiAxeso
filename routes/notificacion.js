'use strict';
var express = require('express');
var router = express.Router();
var sqlDb = require("mssql");
var settings = require("../settings");
var db = require('../helpers/dbconfig');

router.post('/getnotificacionusuario/', function(req, res, next) {
    if (!req.body) {
        res.json("Valor no valido");
    } else {

        var conn = new sqlDb.Connection(settings.dbConfig);
        conn.connect()
            .then(function() {
                var request = new sqlDb.Request(conn);
                request.input('UsuarioID', sqlDb.Int, req.param('UsuarioID'));
                request.execute('GetNotificacionUsuarioID', function(err, recordsets, returnValue, affected) {
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