var HTTP = require('http'),
    URL = require('url'),
    Assert = require('assert'),
    Port = process.env.PORT || 1337;
    User = require('./Modules/Models/User');

HTTP.createServer(function (req, res) {
 
    var resStr = "_p(" + JSON.stringify({ message: "Not a valid request!" }) + ")";

    if (req.url.indexOf("Request") != -1) {
        
        var param = JSON.parse(URL.parse(req.url, true).query.request);
        
        new User(function (args) {

            var resStr = "_p(" + JSON.stringify({ data: [args.User] }) + ")";
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(resStr);

        }).Get(param.UserID);       
    }
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(resStr);    
       
}).listen(Port);
