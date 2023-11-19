var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {

  let username = req.query.username;

  res.send(JSON.stringify({
    code: 200,
    yourname: username
  }));
});


var okay = {
  code: 200,
  Name: "ksh",
  Date: "2023-11-18",
  Reserved: "y"
};

var no = {
  code: 200,
  Name: "ksh",
  Date: "2023-11-18",
  Reserved: "n"
};

var reserve = JSON.stringify(no);
router.get('/reserve', function (req, res, next) {
  let username = req.query.username;

  res.send(reserve);
});

module.exports = router;