var HTTP = require('http'),
    URL = require('url'),
    Assert = require('assert'),
    Port = process.env.PORT || 1337,
    UOW = require('./Modules/Shared/UOW'),
    Controller = require('./Modules/Controllers/Controller');

HTTP.createServer(function (req, res) {
 
    if (req.url.indexOf("Request") != -1) {
        
        var param = JSON.parse(URL.parse(req.url, true).query.request);
        
        var requestConfig = {BaseModel:"User", Request: "Get",Params:[{UserID:param.UserID}] };

        var uow = new UOW(function (args) {
            var resStr = "_p(" + JSON.stringify({ data: args.Users }) + ")";
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(resStr);
        });
        
        var controller = new Controller({ RequestConfig: requestConfig, UOW: uow });
        
    } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end("_p(" + JSON.stringify({ message: "Not a valid request!" }) + ")");
    }  
       
}).listen(Port);
