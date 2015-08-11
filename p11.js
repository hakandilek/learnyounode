var http = require('http');
var fs = require('fs');

var args = process.argv;
if (args.length == 4) {
  var port = args[2]
  var fn = args[3]

  var server = http.createServer(function (req, res) {

    res.writeHead(200, { 'content-type': 'text/plain' })

    fs.createReadStream(fn).pipe(res)

  })
  server.listen(port)

}
