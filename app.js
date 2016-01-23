'use strict';

var PORT = 4000;

var express = require('express');
var http = require("http");
var router = express.Router();
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var fs = require('fs');
var marked = require('marked');
var markRouter = require("./routes/markdown")


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(logger('dev'));
app.use("/markdown", markRouter);

app.get('/', function(req, res) {
  var html = fs.readFileSync('./index.html').toString();
  res.send(html);
});

app.post('/', function(req, res) {
	res.send(marked(req.body.Text))
	// console.log(marked('I am using __markdown__.'));
})
//app.use('/markdownexpress', require('./routes/markdownexpress'));

app.listen(PORT, function() {
  console.log(`Express server has ears on port `, PORT);
});


// var input = `# header!
// ## header!
// ### header!`;

// console.log(marked(input));