var http = require('http');
var data = require('./../data.json');

var server = http.createServer(function (req,res) {
    console.log(reqe.url);
    if(req.url ==='/fruits'){
        res.end(JSON.stringify(data[req.url]))

    }
    res.end(JSON.stringify(data));
});

server.listen('3333');