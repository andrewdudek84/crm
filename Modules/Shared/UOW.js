var UserRepository = require('../Models/User/UserRepository');

function UOW(callback){
    var userRepository = new UserRepository(callback);

    return {
       UserRepository : userRepository
    }
}

module.exports = UOW;