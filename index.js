var express = require('express');
var app = express();
var html = '<center><h1>Hello Azure!</h1> <br> <img src="im.gif"/></center>';
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(html);  
  response.end();  
});
var port = process.env.PORT || 1337;
app.listen(port);

console.log("Server running at http://localhost:%d", port);