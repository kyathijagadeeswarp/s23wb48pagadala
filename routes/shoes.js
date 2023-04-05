var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('shoes', { title: 'Search Results - Shoes' });
  });
  

module.exports = router;
