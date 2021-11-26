var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.send('respond with a resource');
  // throw new Error("This is Dummy error");
});

module.exports = router;
