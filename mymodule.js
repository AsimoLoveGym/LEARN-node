
var fs = require('fs');


fs.readdir(process.argv[2],function(err,list){
  if(err){
    return console.log(err)
  }

  var filteredFiles = list.filter(function(element,index,array){
    return element.indexOf("." + process.argv[3]) > -1;
  })

  filteredFiles.forEach(function(element){
    console.log(element);
  })

  // console.log(filteredFiles);
})

module.exports = function (args) { /* ... */ }
