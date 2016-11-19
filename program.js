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
// var http = require('http');
// var bl = require('bl');
//
// http.get(process.argv[2],function(response){
//   // response.setEncoding("utf8");
//   // response.on("data",function(data){
//   //   console.log(data);
//   // });
//   var result = '';
//   response.pipe(bl(function (err, data) {
//     if(err) {
//       return console.error(err);
//     }
//     result += data;
//     // console.log(data.toString());
//   }));
//   !!end在这里并不管用.
//   response.setEncoding("utf8");
//   response.on("end",function(data){
//     // console.log(data.toString().length);
//     // console.log(data);
//     console.log(result.length);
//     console.log(result);
//   });
// });

// TASK 9
// var http = require('http');
// var bl = require('bl');
// var urlArray = [];
// var resultData = [];
// var count = 0;
// urlArray.push(process.argv[2],process.argv[3],process.argv[4]);
// // console.log(urlArray);
//
// urlArray.forEach(function(element,index,array){
//   http.get(element,function(response){
//     var result = '';
//     response.pipe(bl(function (err, data) {
//       if(err) {
//         return console.error(err);
//       }
//       // result += data;
//       resultData[index] = data.toString();
//       count ++;
//       // console.log(data.toString());
//       if(count === 3){
//         printResultData(resultData);
//       }
//     }));
//   })
// })
//
// function printResultData(finalContent){
//   finalContent.forEach(function(element){
//     console.log(element);
//   })
// }

// TASK 10
// var net = require("net");
// var port = process.argv[2];
// var time = new Date();
// var timeStr = '';
// timeStr = time.getFullYear() + '-' + (time.getMonth()+1) + '-' + time.getDate() + ' ' + time.getHours() + ':' + time.getMinutes() + '\n';
// console.log(timeStr);
// var server = net.createServer(function(socket){
//   socket.write(timeStr);
//   socket.end('');
// })
// server.listen(port)

// TASK 11
// var http = require("http");
// var fs = require('fs');
// var port = process.argv[2];
// var locationOfFile = process.argv[3];
// var server = http.createServer(function(req,res){
//   fs.createReadStream(locationOfFile).pipe(res);
// })
//
// server.listen(port);

// TASK 12
// Inspired By
// http://stackoverflow.com/questions/12006417/node-js-server-that-accepts-post-requests
// var http = require("http");
// var map = require('through2-map');
// var port = process.argv[2];
//
// var server = http.createServer(function(req,res){
//   if(req.method !== "POST") {
//     return res.end("Send via POST!")
//   }
//
//   req.pipe(map(function(element){
//     return element.toString().toUpperCase()
//   })).pipe(res)
// })
//
// server.listen(port);

// TASK 13

var http = require("http");
var url = require("url");
var port = process.argv[2];


var server = http.createServer(function(req,res){
  var path = url.parse(req.url, true);
  // console.log(path.pathname);
  // console.log(path);

  if (path.pathname == '/api/parsetime') {
    var date = new Date(Date.parse(path.query.iso));
    var returnedJSON = {};
    returnedJSON.hour = date.getHours();
    returnedJSON.minute = date.getMinutes();
    returnedJSON.second = date.getSeconds();

    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(returnedJSON));
  } else if (path.pathname == '/api/unixtime') {
    // var date = new Date(Date.parse(path.query.iso));
    var returnedJSON = {};
    returnedJSON = {"unixtime": Date.parse(path.query.iso)};
    // console.log(returnedJSON);
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(returnedJSON));
  }
})
server.listen(port);
