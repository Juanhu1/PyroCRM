/// SERVER FOR ELECTRON

(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();
    var path = require('path');
  //  var logger = require('morgan');
  //  var cookieParser = require('cookie-parser');
    var bodyParser = require('body-parser');
  

    var app = express();
    var publicPath = path.resolve(__dirname, './dist');
    var port = 3000;

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
    app.use(router) ;
    // point for static assets
    app.use(express.static(publicPath));

    //view engine setup
    app.set('views', path.join(__dirname, './dist'));
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');

  //  app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended:true
    }));

    
    router.get('/', function(req, res) {
        res.render('index', {});
    });

    router.get("/api/getuser", function(req,res){
        console.log('incoming get') ;
        res.send('{"valid":"yes"}') ;
     /*   model.find( {}, function(err,data) {
            res.send("{valid:yes}") ;
            if (err) {
                res.send(err) ;
            } else {
                res.send(data) ;
            }
        }) */
    })
   // app.use(cookieParser());

    var server = app.listen(port, function () {
        console.log('Express server listening on port ' + server.address().port);
    });

    module.exports = app;

}());