var DB = require('../App/db'); inherits = require('util').inherits;

function User(callback) {
    var self = this;
    DB.call(self);

    var model = {
        UserID: null,
        UserName: null,
        PhoneNumber:null
    },

    obj = {
        Get : function (userId){
            self.select({
                Query: "SELECT * FROM Users where UserID = " + userId, Callback: function (args) {
                    var data = args.Result.split(",");
                    model.UserID = data[0];
                    model.UserName = data[1];
                    model.PhoneNumber = data[2];
                        
                    return callback({ Errors: args.Errors, User: model });
                }
            });
        },

    }
  
    return obj;
}

inherits(User, DB);

module.exports = User;