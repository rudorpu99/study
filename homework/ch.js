var client = require('cheerio-httpcli');


var word = 'node.js';

client.fetch('http://www.google.com/search', { q: word }, function (err, $, res, body) {

    console.log(res.headers);


    console.log($('title').text());

    $('a').each(function (idx) {
        console.log($(this).attr('href'));
    });
});