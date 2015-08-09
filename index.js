var http = require('http'),
    url = require("url"),
    fs = require('fs');


http.createServer(function(req, res)
{
 //TODO: refactor this into individual node_module's
 //find better way than if/else/substring to swap based on urls, perhaps
 //this works for temporary apps
    if(req.url == "/" || req.url == "/index.html")
    {
        fs.readFile('index.html',function (err, data)
        {
            res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
            res.write(data);
            res.end();
        });
    }
    else if(req.url.substring(0,5) == "/spin")
    {
  
        var get = url.parse(req.url, true).query; 

        var level = parseInt(get['level'])+1;

        res.setHeader("Content-Type", "application/json");

        res.write(JSON.stringify({ level : level })); 
        res.end(); 
 
    }
    else
    {
        fs.readFile('404.html',function (err, data)
        {
            res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
            res.write(data);
            res.end();
        });
    }
}).listen(8888);