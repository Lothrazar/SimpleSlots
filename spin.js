var http = require('http'),
    url = require("url");


http.createServer(function(req, res)
{
console.log('spin.js');

// Listen on the 8080 port. 
    /*
    var get = url.parse(req.url, true).query; s
    var level = get['level'];
    

        res.setHeader('Content-Type', 'application/json');
       // res.write(data);
        res.send(JSON.stringify({ level : level }));
               //  res.end();
         //      res.end('Here is your data: ' + _get['data']); 
         res.end();
 */
}).listen(8888);