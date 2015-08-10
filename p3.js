var fs = require("fs");
var args = process.argv;
var res = 0;
if (args.length > 2) {
  var fn = args[2];
  var buf = fs.readFileSync(fn);
  var str = buf.toString();
  var lines = str.split("\n");
  res = lines.length;
  if (res) res--;
}
console.log(res)
