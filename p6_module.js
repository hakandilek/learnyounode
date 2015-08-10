var fs = require("fs")
var path = require("path")

module.exports = function (dir, ext, callback) {

  var extname = "." + ext;

  fs.readdir(dir, function (err, list) {

    if (err) {
      return callback(err)
    }

    list = list.filter(function (file) {
      return path.extname(file) === extname      
    })

    callback(null, list)

  })

}
