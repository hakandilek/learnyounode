var http = require('http')
var bl = require('bl');

var args = process.argv;
if (args.length == 3) {
  var url = args[2];
  http.get(url, function (response) {
    response.setEncoding("utf8");
    response.pipe(bl(function (err, data) {

      if (err) {
        return console.log("error occured : " + err)
      }

      var str = data.toString()
      console.log(str.length);
      console.log(str);

    }))
  })
}
