  var createError = require('http-errors');
  var express = require('express');
  var path = require('path');
  var cookieParser = require('cookie-parser');
  var logger = require('morgan');
  const cors = require('cors');

  var indexRouter = require('./routes/index');
  var usersRouter = require('./routes/users');
  var playerRouter = require('./routes/players.js')
  var squadRouter = require('./routes/squads.js')


  const mongoose = require("mongoose");
  mongoose.set("strictQuery", false);
  const mongoDB = "mongodb+srv://abdullahamin231:eAkqVexVw3DCBSD3@cluster0.cfczsr7.mongodb.net/league?retryWrites=true&w=majority&appName=Cluster0"
  main().catch((err) => console.log(err));
  async function main() {
    console.log("connecting to database");
    await mongoose.connect(mongoDB);
    console.log("connected to database");
  }



  var app = express();


  const corsOptions = { 
    origin: 'https://premierleaguestatistics.netlify.app',
    'Access-Control-Allow-Origin': 'https://premierleaguestatistics.netlify.app',
    methods: 'GET, POST',
    optionsSuccessStatus: 204 // Some legacy browsers choke on 204
};
  app.use(cors(corsOptions))

  // app.use(cors({
  //   origin: ["https://premierleaguestatistics.netlify.app"]
  // }));


  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  app.use('/', indexRouter);
  app.use('/users', usersRouter);
  app.use('/players', playerRouter);
  app.use('/squads', squadRouter)
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
