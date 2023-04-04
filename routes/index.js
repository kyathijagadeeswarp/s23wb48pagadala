var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('shoe', { title: 'Search Results - Shoe' });
});

module.exports = router;
