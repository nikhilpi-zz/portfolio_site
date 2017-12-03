var express = require('express');
var request = require('request');
var info = require('./info.js');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', info);
});

router.get('/article', function(req, res) {
  res.render('article');
});


module.exports = router;
