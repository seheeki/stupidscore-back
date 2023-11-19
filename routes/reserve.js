var express = require('express');
var router = express.Router();

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


var course = JSON.stringify(okay);

/* GET users listing. */
router.get('/', function (req, res, next) {

    let username = req.query.username;

    res.send(okay);
});

module.exports = router;