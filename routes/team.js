const TeamController = require("../controllers/team.controller");
const { successResponse } = require("../services/util");


class RoutesTeam {
    constructor(router) {
      this.teamController = new TeamController();
      this.router = router;        
    }

    getTeam() {
      this.router.get('/team/:id', (req, res) => {
        try {
          const rsp = this.teamController.getUser(req, res);
          successResponse(res, rsp);          
        } catch (error) {
          
        }
      });
    }
    getAllTeams(){
      this.router.get('/teams', async(req, res)=>{        
        try {
          const rsp = await this.teamController.getAllTeams(req, res);        
          successResponse(res, rsp); 
        } catch (error) {
          console.log(error);
        }
      });
    }
    addTeam(){
      this.router.post('/teams', async(req, res)=>{        
        try {
          const rsp = await this.teamController.addTeam(req, res);        
          successResponse(res, rsp); 
        } catch (error) {
          console.log(error);
        }
      });
    }
    updateTeam(){
      this.router.patch('/teams/:id', async(req, res)=>{        
        try {
          const rsp = await this.teamController.updateTeam(req, res);        
          successResponse(res, rsp); 
        } catch (error) {
          console.log(error);
        }
      });
    };
}

module.exports = RoutesTeam;