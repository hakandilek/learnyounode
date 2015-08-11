var http = require('http');
var url = require('url');

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (date) {
  return {  unixtime : date.getTime() }
}

var args = process.argv;
if (args.length == 3) {
  var port = args[2]

  var server = http.createServer(function (req, res) {

    var up = url.parse(req.url, true)
    var iso = new Date(up.query.iso)

    switch (up.pathname) {
      case "/api/parsetime":
        res.writeHead(200, { 'content-type': 'application/json' })
        res.end(JSON.stringify(parsetime(iso)))
        break;

      case "/api/unixtime":
        res.writeHead(200, { 'content-type': 'application/json' })
        res.end(JSON.stringify(unixtime(iso)))
        break;

      default:
        res.writeHead(400, { 'content-type': 'application/json' })
        res.end()
    }

  })

  server.listen(port)

}
