/// SERVER FOR BOTH ELECTRON AND ANGULAR


 (function () {
    'use strict';
    const PORT=8712 ;

    var express = require('express');
    var path = require('path');
  //  var logger = require('morgan');
  //  var cookieParser = require('cookie-parser');
    var bodyParser = require('body-parser');
    var mongo=require('mongoose') ;    

    mongo.connect('mongodb://localhost/pyrocrm')
         .then(() => console.log('Connected to MongoDB...'))
         .catch(err => console.error('Could not connect to MongoDB...'));

    var app = express();
    var publicPath = path.resolve(__dirname, './build');
    var port = PORT;

    app.use(bodyParser.json({limit:'50mb'})) ;
    app.use(bodyParser.urlencoded({extended:true})) ;
    app.use(bodyParser.urlencoded({
        extended:true
    }));
    app.use( function(req,res,next) {
        res.setHeader('Access-Control-Allow-Origin','http://localhost:4200') ;
        res.setHeader('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,PATCH,DELETE') ;
        res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type') ;
        res.setHeader('Access-Control-Allow-Credentials',true) ;
        next() ;
    }) ;
    require('./build/startup/routes')(app);
    // point for static assets
    app.use(express.static(publicPath));

    //view engine setup
    app.set('views', path.join(__dirname, './build'));
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');

  //  app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended:true
    }));

    
   // app.use(cookieParser());

    var server = app.listen(port, function () {
        console.log('Express server listening on port ' + server.address().port);
    });

    module.exports = app;

}());