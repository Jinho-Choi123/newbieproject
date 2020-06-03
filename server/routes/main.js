var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("In the router");
  res.status(200);
  res.render('main');
});

module.exports = router;
