var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(path.join(__dirname)));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
var DYNAMICTABLE_FILE = path.join(__dirname, 'server-data','tabledata.json')

app.get('/gettabledata', function(req, res) {
  fs.readFile(DYNAMICTABLE_FILE,function(err,data){
    if (err) {
      console.error(err);
      process.exit(1);
    }
     res.json(JSON.parse(data));
  });
});


var server = app.listen('3000',function(){
  console.log('Server started: http://localhost:3000')
})

