var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var TestRouter = require('./routes/test');
var CourseRouter = require('./routes/course');
var ReserveRouter = require('./routes/reserve');
var LoginRouter = require('./routes/login');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/test', TestRouter);
app.use('/course', CourseRouter);
app.use('/login', LoginRouter);
app.use('/reserve', ReserveRouter);

module.exports = app;

const cors = require('cors');

let corsOptions = {
    origin: '*',      // 출처 허용 옵션
    credential: true, // 사용자 인증이 필요한 리소스(쿠키 등) 접근
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

