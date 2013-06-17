var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (request, response) {
  var path = url.parse(request.url, true).pathname;
  switch(request.method) {
    case 'POST':
      /*========YOUR CODE HERE=========*/
      if(path === '/hifive'){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.end(fs.FileSync(__dirname+'/index.html'));
      }
      if(path === '/lowfive'){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.end(fs.readFileSync(__dirname+'/index.html'));
      }
      break;
    case 'GET':
      if(path === '/'){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.end(fs.readFileSync(__dirname+'/index.html'));
      }
      break;
    default:
      response.end(404);
  }
}).listen(8080, '127.0.0.1');

console.log('Listening...');
