// console.log("HELLO WORLD")
// console.log(process.argv)

// var argumentArray = process.argv.slice(2)
//
// var sum = argumentArray.reduce(function(a,b){
//   return Number(a) + Number(b);
// },0)
//
// console.log(sum);

// sync I/O

// var fs = require('fs');
// var buf = fs.readFile(process.argv[2]);
// var str = buf.toString();
// var strArray = str.split('\n');
// console.log(strArray.length-1);


// var fs = require('fs');
// var strArray = [];
// // console.log(process.argv[2]);
// fs.readFile(process.argv[2],function(err, data){
//   if (err) throw err;
//   // console.log(data);
//   var str = data.toString();
//   strArray = str.split('\n');
//   console.log(strArray.length-1);
// });

var mymodule = require('./mymodule.js')

mymodule(process.argv[2],process.argv[3],function(null,))

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
