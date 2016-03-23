var DB = require('../../App/db'); inherits = require('util').inherits;
var User = require('./User');

function UserRepository(callback) {
    var self = this;
    DB.call(self);
    
    this.ConvertResult = function (results){
        var users = [];
        results.forEach(function (result) {
            var user = new User();
            for (var property in result) {
                if (result.hasOwnProperty(property)) {
                    user[property] = result[property];
                }
            }
            users.push(user);    
        });

        return users;
    }

    return {
        Get : function (userId) {
            self.select({
                Query: "SELECT * FROM Users where UserID = " + userId + ";", Callback: function (args) {   
                    var users = self.ConvertResult(args.Results);
                    return callback({ Errors: args.Errors, Users: users });
                }
            });
        },
        ListAll : function () {
            self.select({
                Query: "SELECT * FROM Users;", Callback: function (args) {
                    var users = self.ConvertResult(args.Results);
                    return callback({ Errors: args.Errors, Users: users });
                }
            });
        }
    }
}

inherits(UserRepository, DB);

module.exports = UserRepository;


