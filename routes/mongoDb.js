/*
var express = require('express');
var router = express.Router();
const axios = require('axios').default;
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const hbs = require('hbs');
const expressHbs = require('express-hbs');
const ejs = require('ejs');
const exhbs = require('express-handlebars')
var app = express();



const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';
const connectOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

// Database Name
const dbName = 'dbcity';
const client = new MongoClient(url, connectOptions);



async function findId(_name) {
    

  await client.connect();
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    const collection = db.collection('Citys');
        
  const cityFind= await collection.findOne({name: _name});
  console.log('city find:', cityFind);
  if(cityFind=="null"){
    return "is null";
  }else{
    var idFind = cityFind.id;
    console.log('id find:', idFind);
    client.close();
    return cityFind;
  }
}

module.exports = findId, router;
*/