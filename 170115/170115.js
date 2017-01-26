var http = require('http');

console.log(require);

var server = http.createServer(function (req,res) {
    res.end('<h1 style="color:red">Hello world!!!</h1>');
})

server.listen('8888');