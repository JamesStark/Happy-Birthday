var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* Crackers page. */
router.get('/happy-birthday', function(req, res, next) {
  res.render('crackers');
});

module.exports = router;
