const { app, BrowserWindow } = require('electron')
const electron = require('electron')
const path = require("path");
const url = require("url");
var express=require('express') ;
//var path=require('path');
var bodyParser=require('body-parser') ;
var mongo=require('mongoose') ;
var server = require('./app');

require('electron-reload')(__dirname);
console.log(__dirname) 
mongo.connect('mongodb://localhost/pyrocrm')
     .then(() => console.log('Connected to MongoDB...'))
     .catch(err => console.error('Could not connect to MongoDB...'));
     var Schema=mongo.Schema ;

var UsersSchema = new Schema({
         name: {type:String},
         address: {type:String}
     }, {versionKey:false}) ;

var model=mongo.model('users', UsersSchema, 'users') ;

let win;

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
  //  fullscreen: true,
    backgroundColor: '#ffffff',
    icon: `file://${__dirname}/src/assets/logo.png`,
    webPreferences: {
      webSecurity: false,
      nodeIntegration: false
    }
  })


  //var r=win.loadURL(`file://${__dirname}/src/index.html`)
  //win.loadURL("http://localhost:4200/") ;
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/index.html`),
      protocol: "file:",
      slashes: true
    })
  );

  //// uncomment below to open the DevTools.
  win.webContents.openDevTools()

  // Event when the window is closed.
  win.on('closed', function () {
    win = null
  })
}

// Create window on electron intialization
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // macOS specific close process
  if (win === null) {
    createWindow()
  }
})