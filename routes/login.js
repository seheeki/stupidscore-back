const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
var router = express.Router();
const dbconfig = require('./config/database.js');
const connection = mysql.createConnection(dbconfig);

// MySQL 연결
connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});

// Body parser 설정
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// 로그인 요청 처리
router.post('/', (req, res) => {
  const { id, password } = req.body;
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Request-Methods", "GET, POST, PUT");
  // ID와 패스워드 검증
  connection.query(
    'SELECT * FROM users WHERE id = ? AND password = ?',
    [id, password],
    (err, results) => {
      if (err) throw err;

      if (results.length > 0) {
        console.log('id/passwd: ', results);
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    }
  );
});

module.exports = router;
