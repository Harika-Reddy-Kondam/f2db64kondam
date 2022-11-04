var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('novel', { title: 'Search Results novel' });
});

module.exports = router;