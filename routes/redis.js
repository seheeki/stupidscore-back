const express = require('express');
var router = express.Router();
const session = require('express-session');
const redis = require('redis');
//const redisStore = require('connect-redis')(session);

// Redis 클라이언트 생성
//const redisClient = redis.createClient({
//  host:'testonpre-ro.8bidbg.ng.0001.apn2.cache.amazonaws.com:6379',
//  port: 6379,
//  //password: 
//});
//redisClient.connect();
//
//// Redis
//redisClient.on("error", (err) => {
//    console.error(err);
//});
//  
//redisClient.on("ready", ()=> {
//    console.log("Redis is Ready");
//});
//
//module.exports = redisClient;

//
//router.get('/', (req, res) => {
//  // Redis 클라이언트 사용 예시
//  redisClient.set('key', 'value', (err, reply) => {
//    if (err) {
//      console.error(err);
//      return res.status(500).json({ message: 'Failed to set value in Redis' });
//    }
//    console.log('Value set in Redis:', reply);
//    res.status(200).json({ message: 'Value set in Redis' });
//  });
//});
//
//module.exports = router;