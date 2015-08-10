var fs = require("fs");
var args = process.argv;
var res = 0;
if (args.length > 2) {
  var fn = args[2];
  var buf = fs.readFile(fn, "utf8", function callback (err, data) {
    var str = data.toString();
    var lines = str.split("\n");
    res = lines.length;
    if (res) res--;
    console.log(res)
  });
}
