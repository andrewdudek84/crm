function UserController(args) {
    return {
       request: function (args){
            if (args.RequestConfig.Request == "Get") {
                args.UOW.UserRepository.Get(args.RequestConfig.Params[0].UserID);
            }
            else if (args.RequestConfig.Request == "ListAll") {
                args.UOW.UserRepository.ListAll();
            }
        }   
    }
}

module.exports = UserController;