var express = require('express');
var router = express.Router();
const axios = require('axios').default;

const hbs = require('hbs');
const expressHbs = require('express-hbs');
const ejs = require('ejs');
const exhbs = require('express-handlebars')
var app = express();



/*
router.get('/moviesShow', async function(req, res, next) {
    console.log('test:','show is work!');
  
    var tFromUser = req.query.t;
  console.log('req.body:', tFromUser);

    
  await axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=dce24c91")
    
    .then(function (response) {
     var arr = response.data;
     console.log('data:' , arr);
     var temp = ((response.data.main.temp)/10).toFixed(0);
      var description = response.data.weather[0].description;
      var d = new Date();
      var date= d.getDate()+'.'+(d.getMonth()+1)+'.'+d.getFullYear();
      var poster = response.data.poster;
      res.render('moviesShow.hbs', { title: 'אתר הסרטים',_data: arr});   
    }) .catch(function (error) {
    // handle error
    
    console.log(error);
    })
    .then(function () {
    // always executed
    });
});
*/

// GET home listing 
router.get('/moviesShow', async function(req, res, next) {
    var d = new Date();
    var date= d.getDate()+'.'+(d.getMonth()+1)+'.'+d.getFullYear();
    console.log('test:','show is work!');
    res.render('moviesShow.hbs', { title: 'אתר צפייה', _date: date});   
  
  });


// GET home listing 
router.get('/', async function(req, res, next) {
    var d = new Date();
    var date= d.getDate()+'.'+(d.getMonth()+1)+'.'+d.getFullYear();
    console.log('test:','ser is work!');
    res.render('moviesSer.hbs', { title: 'אתר חיפוש', _date: date});   
  
  });
  
  module.exports = router;