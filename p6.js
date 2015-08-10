var p6 = require('./p6_module')

var args = process.argv;
var dir = args[2];
var ext = args[3];

p6(dir, ext, function (err, list) {
  if (err) {
    return console.log("error occured : " + err)
  }

  for (var i = 0; i < list.length; i++) {
    var file = list[i];
    console.log(file);
  }

});
