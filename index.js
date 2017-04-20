var express = require('express')
var app = express()

app.get('/:time', function (req, res) {

  // console.log(new Date(time*1000));

  res.send(result);
})

app.get('/', function(req, res){
  res.send('hello heruko, by elevenbeans');
});

app.listen(process.env.PORT || 8080, function () {
  console.log('Example app listening!')
})