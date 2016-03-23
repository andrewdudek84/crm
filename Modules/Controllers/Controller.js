var UserController = require('./User/UserController');

function Controller(args){
    var controller;
    if (args.RequestConfig.BaseModel == "User") {
        controller = new UserController();
    }

    if (controller) {
        controller.request(args);
    } 
}

module.exports = Controller;