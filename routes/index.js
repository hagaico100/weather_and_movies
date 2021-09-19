
var express = require('express');
var router = express.Router();
const axios = require('axios').default;

const hbs = require('hbs');
const expressHbs = require('express-hbs');
const ejs = require('ejs');
const exhbs = require('express-handlebars')

var app = express();

/*
const findId = require('./mongoDb');
const mongodb = require('mongodb');
const mongoose = require('mongoose');

//conect to mongoose:
mongoose.connect('mongodb://localhost:27017/dbcity', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
console.log("we conect to mongodb!!!");
  // we're connected!
});
*/


 //GET home listing and send detels to view.  
router.get('/wether', async function(req, res, next) {
  console.log('test:','index1 is work!');


var cityFromUser = req.query.city;
  console.log('req.body:', cityFromUser);
  

await axios.get("http://api.openweathermap.org/data/2.5/weather?q="+cityFromUser+"&APPID=c2152ce33eec94f628bcb40cda3da446&lang=he")
  
  .then(function (response) {
    
   var arr = response.data;
   console.log('data:' , arr);
   var temp = ((response.data.main.temp)/10).toFixed(0);
    var description = response.data.weather[0].description;
    var d = new Date();
    var date= d.getDate()+'.'+(d.getMonth()+1)+'.'+d.getFullYear();
    var icon = response.data.weather[0].icon;
    console.log('date', date);
    res.render('wether.hbs', { title: 'אתר מזג האוויר האישי שלי',_data: arr,_temp: temp, _description: description, _date: date,_icon: icon, _lon: arr.coord.lon, _lat: arr.coord.lat});   
 

  }) .catch(function (error) {
  // handle error
  
  console.log(error);
  })
  .then(function () {
    res.render('notFound.hbs', { title: 'העיר לא נמצאה',});   
  });



});
// GET home listing 
router.get('/', async function(req, res, next) {
  var d = new Date();
  var date= d.getDate()+'.'+(d.getMonth()+1)+'.'+d.getFullYear();
  console.log('date', date);
  console.log('test:','index is work!');
  res.render('index.hbs', { title: 'אתר מזג אוויר וסרטים', _date: date});   

});


// GET movies listing 
router.get('/moviesShow', async function(req, res, next) {
  var rFromUser = req.query.r;
  console.log('req.body:', rFromUser);
    
  await axios.get("http://www.omdbapi.com/?t="+rFromUser+"&apikey=dce24c91")
    
    .then(function (response) {
      
     var arr = response.data;
     console.log('data:' , arr);
      var d = new Date();
      var date= d.getDate()+'.'+(d.getMonth()+1)+'.'+d.getFullYear();
      console.log('test:','show is work!');
      console.log('plot:', arr.Plot);
      console.log('year:', arr.Year);
      console.log('poster:', arr.Poster);
      console.log('name:', arr.Ratings[2].Source);
      console.log('name:', arr.Ratings[1].Source);
      console.log('name:', arr.Ratings[2].Value);
      console.log('name:', arr.Ratings[1].Value);
      
      
      res.render('moviesShow.hbs', { title: 'אתר הסרטים', _date: date, _data: arr, _r0S: arr.Ratings[0].Source, _r0v: arr.Ratings[0].Value, _r1S: arr.Ratings[1].Source, _r1v: arr.Ratings[1].Value, _r2S: arr.Ratings[2].Source, _r2v: arr.Ratings[2].Value});  
    
    }) .catch(function (error) {
    // handle error
    
    console.log(error);
    })
    .then(function () {
      res.render('notFound.hbs', { title: 'הסרט לא נמצא',});   
    });


});

module.exports = router;