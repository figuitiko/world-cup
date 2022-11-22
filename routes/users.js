const UserController = require("../controllers/user.controller");
const verifyTokenAuth = require("../middleware/verifyTokenAuth");

const { successResponse, notFound, errorResponse } = require("../services/util");


class RoutesUser {
  constructor(router) {
    this.userController = new UserController();
    this.router = router;
  }
  
  getUser() {
    this.router.get('/user/:id', (req, res) => {
     const rsp = this.userController.getUser(req, res);
      successResponse(res, rsp);
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
        if(rsp.error){
          return errorResponse(res, rsp.error);          
        }
        successResponse(res, rsp);
      } catch (error) {
        console.log(error);
         errorResponse(res, error);
       
      }
    });
  };
  checkUser(){
    this.router.get('/users/checkUser',verifyTokenAuth, async(req, res) => {
      if(req.user){
        successResponse(res, req.user);
      }
    });
  }
}
module.exports = RoutesUser;