var fs = require("fs");
var path = require("path");

var args = process.argv;
var res = 0;
if (args.length == 4) {
  var dir = args[2];
  var ext = args[3];
  var extname = "." + ext;
  var buf = fs.readdir(dir, function callback (err, list) {
    for (var i = 0; i < list.length; i++) {
      var fn = list[i];
      if (extname === path.extname(fn)) {
        console.log(fn);
      }
    }
  });
}
