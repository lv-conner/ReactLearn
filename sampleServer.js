var http = require('http');
var url = require('url');
var source = require("./Source");

// 创建服务器
http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'application/json',
        'Origin': '*',
        'Access-Control-Allow-Origin': '*',
        "dataType":"application/json"
    });
    var options = [1, 3, 4, 5, 6, 7, 8, 8];
    var data = {"data":source.menuItems};
    response.write(JSON.stringify(data));
    response.end();
}).listen(13130);

console.log('Server running at http://127.0.0.1:8081/');