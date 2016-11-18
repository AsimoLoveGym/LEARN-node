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

// TASK 5

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

// TASK 6
// Credit to https://github.com/nodeschool/discussions/issues/1913
// var mymodule = require('./mymodule.js')
//
// function callback(err,data){  //amazing
//   if(err) {
//     console.error(err); // should use .error instead of .log
//   }
//   data.forEach(function(element){
//     console.log(element);
//   })
// }
//
// mymodule(process.argv[2],process.argv[3],callback);

// TASK 7

// var http = require('http');
//
// http.get(process.argv[2],function(response){
//   response.setEncoding("utf8");
//   response.on("data",function(data){
//     console.log(data);
//   });
// });

// TASK 8
var http = require('http');
var bl = require('bl');

http.get(process.argv[2],function(response){
  // response.setEncoding("utf8");
  // response.on("data",function(data){
  //   console.log(data);
  // });
  var result = '';
  response.pipe(bl(function (err, data) {
    if(err) {
      return console.error(err);
    }
    result += data;
    // console.log(data.toString());
  }));

  response.setEncoding("utf8");
  response.on("end",function(data){
    // console.log(data.toString().length);
    // console.log(data);
    console.log(result.length);
    console.log(result);
  });
});
