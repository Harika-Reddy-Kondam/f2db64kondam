var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config(); 
const connectionString =  
process.env.MONGO_CON 
mongoose = require('mongoose'); 
mongoose.connect(connectionString,  
{useNewUrlParser: true, 
useUnifiedTopology: true}); 
var indexRouter = require('./routes/index');
var novel = require("./models/novel");
var usersRouter = require('./routes/users');
var novelRouter = require('./routes/novel');
var gridbuildRouter = require('./routes/gridbuild');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// We can seed the collection if needed on 
async function recreateDB(){ 
  // Delete everything 
  await novel.deleteMany(); 
 
  let instance1 = new 
novel({novelName :"Cinder",  novelCost : 400, 
novelAuthor: "Marissa"}); 
  instance1.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("First object saved") 
  }); 
  let instance2 = new 
novel({novelName :"Island",  novelCost : 500, 
novelAuthor: "Aldous"}); 
  instance2.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("First object saved") 
  }); 
  let instance3 = new 
  novel({novelName :"Verity",  novelCost : 600, 
  novelAuthor: "Colleen"}); 
    instance3.save( function(err,doc) { 
        if(err) return console.error(err); 
        console.log("First object saved") 
    }); 
} 
 
let reseed = true; 
if (reseed) { recreateDB();} 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/novel', novelRouter);
app.use('/gridbuild', gridbuildRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
