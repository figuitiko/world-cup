const UserController = require("../controllers/user.controller");
const { successResponse } = require("../services/util");


class RoutesUser {
  constructor(router) {
    this.userController = new UserController();
    this.router = router;
  }
  
  getUser() {
    this.router.get('/users', (req, res) => {
      this.userController.getUser(req, res);
    });
  }
  signUp(){
    this.router.post('/users/signUp', async(req, res)=>{
      try {
        const rsp = await this.userController.signUp(req, res);    
        successResponse(res, rsp);
      } catch (error) {
        console.log(error);
      }
    });
  }
  signIn(){
    this.router.post('/users/signIn', async(req, res)=>{
      try {
        const rsp = await this.userController.signIn(req, res);    
        successResponse(res, rsp);
      } catch (error) {
        console.log(error);
      }
    });
  };
}
module.exports = RoutesUser;