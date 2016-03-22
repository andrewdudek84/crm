var http = require('http');
var url = require('url');
var assert = require('assert');
var port = process.env.PORT || 1337;
http.createServer(function (req, res) {
    
    var resStr = "_p(" + JSON.stringify({ message: "Not a valid request!" }) + ")";
    
    if (req.url.indexOf("Request") != -1) {
        
        var param = JSON.parse(url.parse(req.url, true).query.request);
        
        // Could filter this list by param.user
        var users = [
            { UserID: 1, UserName: 'Andy',PhoneNumber:'330-333-9999' },
            { UserID: 2, UserName: 'Adrian', PhoneNumber: '330-222-7777' },
            { UserID: 3, UserName: 'Rory', PhoneNumber: '330-777-3311' }
        ];
        
        var user;
        for(var i = 0, j = users.length; i < j; i++){
            if (param.UserID == users[i].UserID)
                user = users[i];
        }

        var resStr = "_p(" + JSON.stringify({ data: [user] }) + ")";
    }
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(resStr);
    
}).listen(port);
