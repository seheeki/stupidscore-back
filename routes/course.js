var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const dbconfig = require('./config/database.js');
const connection = mysql.createConnection(dbconfig);
//const redis = require('redis');
//
//const redisClient = redis.createClient({
//    host: 'ss-dev-redis-ro.8bidbg.ng.0001.apn2.cache.amazonaws.com',
//    port: 6379,
//});

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Request-Methods", "GET");
    
    connection.query('SELECT * from Courses', (error, rows) => {
        if (error) throw error;
        console.log('Course info is: ', rows);
        var course = JSON.stringify(rows);
        console.log('course string', course);
        res.send(course);
    });
    //res.send(course);
});

module.exports = router;