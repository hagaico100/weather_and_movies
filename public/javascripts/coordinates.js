/*
var express = require('express');
var router = express.Router();
const axios = require('axios').default;
const hbs = require('hbs');
const expressHbs = require('express-hbs');
const ejs = require('ejs');
const exhbs = require('express-handlebars')
var app = express();


async function findcord(_name) {
    
    await axios.get("http://api.openweathermap.org/data/2.5/weather?q="+_name +"&APPID=c2152ce33eec94f628bcb40cda3da446&lang=he")
  
    .then(function (response) {
    var coord = response.data.coord;

      console.log('response cord:', response);
      return coord;

    }) .catch(function (error) {
    // handle error
    
    console.log(error);
    })
    .then(function () {
    // always executed
    });
  
  }


module.exports = findcord, router;
*/