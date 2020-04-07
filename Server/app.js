var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const rateLimit = require("express-rate-limit"); //Using for DOS-attack prevention
var helmet = require('helmet')

var indexRouter = require('./routes/index');
const cors = require('cors')
const PORT = process.env.PORT || 5000
var app = express();

app.use(cors({origin: '*'}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(helmet())
//  apply to all requests
app.use(limiter);
app.use(logger('dev'));
app.use(express.json({ limit: '10kb' })); //Dos-attack prevention
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'Client/build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'Client/build', 'index.html'));
});

app.use('/',indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log("404")
  res.status(404).json({errors:["Villa! Fannst ekkert."]})
});

// error handler
app.use(function(err, req, res, next) {
  res.status(500).json({errors:["Villa í kerfinu hjá okkur."]})
});

app.listen(PORT, () => {
  console.log('Listening on port:', PORT);
});
// module.exports = app;
