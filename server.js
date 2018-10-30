// SERVER FOR ANGULAR SERVE

var express=require('express') ;
var path=require('path');
var bodyParser=require('body-parser') ;
var mongo=require('mongoose') ;

/*
import {express} from 'express' ;
import {path} from 'path' ;
import {bodyParser} from 'body-parser' ;
import {mongo} from 'mongoose' ;
*/

mongo.connect('mongodb://localhost/pyrocrm')
     .then(() => console.log('Connected to MongoDB...'))
     .catch(err => console.error('Could not connect to MongoDB...'));

var app=express() ;


//app.use(bodyParser.urlencoded());
//app.use(bodyParser.json());
app.use(bodyParser.json({limit:'50mb'})) ;
app.use(bodyParser.urlencoded({extended:true})) ;

app.use( function(req,res,next) {
    res.setHeader('Access-Control-Allow-Origin','http://localhost:4200') ;
    res.setHeader('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,PATCH,DELETE') ;
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type') ;
    res.setHeader('Access-Control-Allow-Credentials',true) ;
    next() ;
}) ;

var Schema=mongo.Schema ;

var UsersSchema = new Schema({
    name: {type:String},
    address: {type:String}
}, {versionKey:false}) ;

var model=mongo.model('users', UsersSchema, 'users') ;

app.post("/api/SaveUser", function(req, res){
    var mod=new model(req.body) ;
    if (req.body.mode=="Save") {
        mod.save(function(err,data){
            if (err) {
                res.send(err) ;
            } else {
                res.send({data:"Record has been Inserted..."}) ;
            }
        })
    }
})



app.get("/api/getUser", function(req,res){
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

app.get('/', function(req,res ) {
    res.send('hello world6') ;
})

app.listen( 3000, function() {
    console.log("Example app listening on port 8080") ;
}) ;