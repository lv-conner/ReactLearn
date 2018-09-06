var http = require('http');
var url = require('url');

// 创建服务器
http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'application/json',
        'Origin': '*',
        'Access-Control-Allow-Origin': '*'
    });
    var options = [1, 3, 4, 5, 6, 7, 8, 8];
    response.write(JSON.stringify(options));
    response.end();
}).listen(13130);

console.log('Server running at http://127.0.0.1:8081/');