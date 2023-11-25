var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const dbconfig = require('./config/database.js');
const connection = mysql.createConnection(dbconfig);
  
const axios = require("axios");
const redis = require("redis");

function fetchDBData () {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * from Courses', async (error, rows) => {
            if (error) throw error;
            resolve(rows);
        });    
    })
};

let redisClient;
(async () => {
  redisClient = redis.createClient({
    host: '127.0.0.1',
    port:6379,
  });

  redisClient.on("error", (error) => console.error(`Error : ${error}`));

  await redisClient.connect();
})();

async function getCourseData(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Request-Methods", "GET");
    const key = 'course';
    let results;
    let isCached = false;

    try{
        const cacheResults = await redisClient.get(key);
        if(cacheResults){
            console.log("is Cached");
            isCached = true;
            results = JSON.parse(cacheResults);
        } else {
            console.log("is not Cached");
            results = await fetchDBData();
            console.log("course info is: ", results);
            await redisClient.set(key, JSON.stringify(results));
        }
        //res.send(results);
        res.send({
            fronCache: isCached,
            data: results
        });
    } catch (error) {
        console.error(error);
    }
}


/* GET users listing. */
router.get('/', getCourseData);

module.exports = router;