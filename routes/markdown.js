var express = require("express");
var bodyParser = require("body-parser");
var markdown = express.Router();
var marked = require('marked');

markdown.post("/", function(req, res){
  res.send(marked(req.body.Text))
});

module.exports = markdown;