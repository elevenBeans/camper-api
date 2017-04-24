var express = require('express')
var app = express()

app.get('/timestamp/:time?', function (req, res) {
  var date;
  var time = req.params.time;
  var result = {};
  // console.log(new Date(time*1000));
  
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

    // console.log('1:',isShort);
    // console.log('2:',req.params.url);
    // console.log('3:',original_url);

    if(!req.params.protocol){
      result.error = 'no protocol!';
    } else if (!req.params.url){
      result.error = 'pls fullfill url!';
    } else {
      result.original_url = original_url;
      result.short_url = req.protocol + '://' + req.hostname + '/little-url/' + short_url;
    }
    short_url_obj[short_url] = original_url;
    res.send(result);
    
  } else {
    res.redirect(short_url_obj[req.params.protocol]);
  }

})

app.get('/', function(req, res){
  res.send('hello heruko, by elevenbeans');
});

app.listen(process.env.PORT || 8080, function () {
  console.log('Example app listening on', process.env.PORT || 8080)
})