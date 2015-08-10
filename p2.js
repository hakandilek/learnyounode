var args = process.argv;
var res = 0;
if (args.length > 2) {
  for (var i = 2; i < args.length; i++) {
    res += Number(args[i]);
  }
}
console.log(res)
