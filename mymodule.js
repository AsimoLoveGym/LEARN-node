
var fs = require('fs');

module.exports = function (dir, ext, callback) {
  fs.readdir(dir,function(err,list){
    if(err){
      return callback(err);
    }
    var data = list.filter(function(element,index,array){
      return element.indexOf("." + ext) > -1;
    })
    return callback(null,data);
  })
}
