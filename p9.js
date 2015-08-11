var http = require('http')
var bl = require('bl');

var results = []
var count = 0


function collect(url, index, total) {
  http.get(url, function (response) {
    response.setEncoding("utf8");
    response.pipe(bl(function (err, data) {

      if (err) {
        return console.log("error occured : " + err)
      }

      var str = data.toString()
      results[index] = str
      count++

      if (count == total) {
        printResults()
      }
    }))
  })
}

function printResults() {
  for (var i = 0; i < results.length; i++) {
    console.log(results[i])
  }
}

var args = process.argv;
if (args.length > 4) {

  for (var i = 0; i < args.length - 2; i++) {
    var url = args[i + 2]
    collect(url, i, args.length -2)
  }
}
