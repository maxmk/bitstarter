var express = require('express');
var fs=require("fs"); //declared variable
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var content=fs.readFileSync("index.html","utf8"); //declared variable to read index.html in utf8 encoding
  response.send(content.toString());	//send response in string
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
