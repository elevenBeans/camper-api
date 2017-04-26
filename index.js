var express = require('express');
var app = express();

var mongo = require("mongodb").MongoClient;
// dev
// var dbUrl = 'mongodb://localhost:27017/imgsearch'; 
// pro
var dbUrl = 'mongodb://heroku_hx4c8tc8:mdjkdun38sumphditramegul9g@ds119091.mlab.com:19091/heroku_hx4c8tc8';

var request = require('request');
var apiKey = '3452d74b964f4b5392e3e4cf3397ca3e';

app.get('/timestamp/:time?', function (req, res) {
  var date;
  var time = req.params.time;
  var result = {};
  
  if(/\d{10}/.test(time)){
    date = new Date(time*1000);
    result.natural = date;
    result.unix = parseInt(time);
  } else if (typeof(new Date(time)) === 'object'){
    date = new Date(time).getTime();
    result.natural = time;
    result.unix = date/1000;
  } else {
    result.natural = null;
    result.unix = null;
  }
  res.send(result);
})

app.get('/whoami', function (req, res) {

  var result = {};

  result.ipaddress = req.ip;
  result.language = req.headers['accept-language'];
  result.software = req.headers['user-agent'];

  res.send(result);
})

let short_url_obj = {};

app.get('/little-url/:protocol?(\:\/)?/:url?', function (req, res) {

  var isShort = /\d+/.test(req.params.protocol);
  var result = {};

  if(!isShort){

    var original_url = req.params.protocol +  '://' + req.params.url;
    var short_url = Math.floor(Math.random()*10000);

    if(!req.params.protocol){
      result.error = 'no protocol!';
    } else if (!req.params.url){
      result.error = 'url incomplete!';
    } else {
      result.original_url = original_url;
      result.short_url = req.protocol + '://' + req.hostname + '/little-url/' + short_url;
      short_url_obj[short_url] = original_url;
    }
    res.send(result);
    
  } else {
    res.redirect(short_url_obj[req.params.protocol]);
  }

})

app.get('/imgSearch/:name?',function(req,res){
    var num = req.query.offset ? req.query.offset : 1;
    var imgName = req.params.name;
    var date = new Date().toISOString();

    var options = {
      method: 'GET',
      url: 'https://api.cognitive.microsoft.com/bing/v5.0/images/search',
      qs: {
        q: imgName || 'jobs',
        count: num
      },
      headers: {
        'Ocp-Apim-Subscription-Key': apiKey
      }
    };

    request(options, callback);

    function callback(error, response, body) {
      if (!error && response.statusCode === 200) {
        if(body){
          var result = JSON.parse(body).value;

          result = result.map(function(item){
            return keyFilter(item);
          });

          mongo.connect(dbUrl, function(err, db){
            if(err){
              //res.json(JSON.parse(body));
              res.json(err);
            } else {
              var imgSearchList = db.collection('imgSearchList');
              imgSearchList.insert([{term: imgName, when: date}],function(){
                  db.close();
                  res.json(result);
                });
              }
            })
        } else {
          res.json('wtf');
        }
        
      }
    }

    function keyFilter(item){
      delete item['webSearchUrl'];
      delete item['hostPageUrl'];
      delete item['width'];
      delete item['height'];
      delete item['imageInsightsToken'];
      delete item['accentColor'];
      delete item['encodingFormat'];
      delete item['thumbnail'];
      delete item['imageId'];
      delete item['hostPageDisplayUrl'];
      delete item['datePublished'];
      delete item['contentSize'];
      return item;
    }
});

app.get('/imgSearch-latest',function(req,res){
   mongo.connect(dbUrl,function(err,db){
       var imgSearchList = db.collection('imgSearchList');
       imgSearchList.find({},{_id:0}).sort({_id:-1}).limit(10).toArray(function(err,docs){
          if(err){
              db.close()
              res.end('wtf');
          } else {
              db.close();
              res.json(docs);   
          }
       });
   });
});

app.get('/', function(req, res){
  res.send('hello heruko, by elevenbeans');
});

app.listen(process.env.PORT || 8080, function () {
  console.log('Example app listening on', process.env.PORT || 8080)
})