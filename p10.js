var net = require('net')
var strftime = require('strftime');

var args = process.argv;
if (args.length == 3) {
  var port = args[2]

  var server = net.createServer(function (socket) {
    var data = strftime("%Y-%m-%d %R", new Date())
    socket.end(data)
  })
  server.listen(port)

}
