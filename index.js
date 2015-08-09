var http = require('http'),
    url = require("url"),
    fs = require('fs');


http.createServer(function(req, res)
{

    // _get['data']
   
    
   // console.log( req.url);
    
    
    if(req.url == "/" || req.url == "/index.html")
    {
        fs.readFile('index.html',function (err, data)
        {
            res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
            res.write(data);
            res.end();
        });
    }
    else if(req.url == "/spin")
    {
       // console.log("!zxcvzxcv!ok sending out stuff...!!!");
       //   req.on('end', function () 
       // {
            var get = url.parse(req.url, true).query; 
         //   var level = get['level'];


            res.setHeader("Content-Type", "application/json");
         //   res.setHeader("Access-Control-Allow-Origin", "*");
//res.writeHead(200, { 'Content-Type': 'application/json' });
            //res.send(JSON.stringify({ level : level }));
            // Send data and end response. 
            //res.send(JSON.stringify({ level : level })); 
            var test =JSON.stringify({ level : 1 });
            console.log(test);
            res.write(test); 
            res.end(); 
       // }); 
    }
}).listen(8888);