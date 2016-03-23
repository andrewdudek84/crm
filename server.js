var HTTP = require('http'),
    URL = require('url'),
    Assert = require('assert'),
    Port = 8080,//process.env.PORT || 1337
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
       
}).listen(Port);


//function getUsers(res,param,connection) {
    
//    var users = [
//        { UserID: 1, UserName: 'Andy', PhoneNumber: '330-333-9999' },
//        { UserID: 2, UserName: 'Adrian', PhoneNumber: '330-222-7777' },
//        { UserID: 3, UserName: 'Rory', PhoneNumber: '330-777-3311' }
//    ];
    
    

//    request = new Request("SELECT * FROM Users;", function (err) {
//        if (err) {
//            console.log(err);
//        }
//    });
//    var result = "";
//    request.on('row', function (columns) {
//        columns.forEach(function (column) {
//            if (column.value === null) {
//                console.log('NULL');
//            } else {
//                result += column.value + " ";
//            }
//        });
        
//        var user;
//        for (var i = 0, j = users.length; i < j; i++) {
//            if (param.UserID == users[i].UserID)
//                user = users[i];
//        }
       
//    });
    
//    request.on('done', function (rowCount, more) {
//        console.log(rowCount + ' rows returned');
//    });
//    connection.execSql(request);
//}