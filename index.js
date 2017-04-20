var express = require('express')
var app = express()

app.get('/:time', function (req, res) {
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
  // console.log(date);
  res.send(result);
})

app.get('/', function(req, res){
  res.send('hello heruko, by elevenbeans');
});

app.listen(process.env.PORT || 8080, function () {
  console.log('Example app listening!')
})