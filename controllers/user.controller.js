const UserModelServices = require("../services/userModelServices");
const { notFound } = require("../services/util");


 class UserController {
  constructor() {
    this.userModelService = new UserModelServices();
  }

  async getUser(req, res) {   
    
    const user = await this.userModelService.getUser(req.params.id);  
    if(!user){
      return notFound(0, "User does not exist");
    }  
   return Promise.resolve(user);
  }
  async signUp(req, res) {
    // console.log(Object.keys(req));return;
    const {body:{email,name, password}} = req;
    try {
      const user = await this.userModelService.signUp(email,name, password);      
     return Promise.resolve(user);
    } catch (error) {
      console.log(error);
    }     
  }
  async signIn(req, res) {
    const {body:{email, password}} = req;
    try {
      const user = await this.userModelService.signIn(email, password);
      if (!user && user.error) {
        return notFound(0, "User does not exist");
      }
      return Promise.resolve(user);
    } catch (error) {
      console.log(error);
    }     
  }
}
module.exports = UserController;