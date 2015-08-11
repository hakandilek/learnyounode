var http = require('http')

var args = process.argv;
if (args.length == 3) {
  var url = args[2];
  http.get(url, function (response) {
    response.setEncoding("utf8");
    response.on("data", function(data) {
      console.log(data);
    })
  })
}
