var http = require('http');
var fs = require('fs');
var url = require('url');
http.createServer(function (req, res) {
  fs.readFile('1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
  });
}).listen(8080);
