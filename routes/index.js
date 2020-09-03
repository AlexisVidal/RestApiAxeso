'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    //res.render('index', { title: 'Express' });
    var metodos = ['LISTADO DE METODOS'];
    metodos.push('');
    metodos.push('');
    metodos.push('');
    metodos.push('');
    metodos.push('');
    metodos.push('');
    metodos.push('');
    metodos.push('');
    metodos.push('');
    metodos.push('');
    metodos.push('');
    metodos.push('');
    metodos.push('');
    metodos.push('');
    metodos.push('');
    metodos.push('');
    metodos.push('');
    metodos.push('');
    metodos.push('');
    res.json(metodos);
});

module.exports = router;