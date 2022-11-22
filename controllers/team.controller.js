const TeamModelServices = require("../services/teamModelServices");
const { notFound } = require("../services/util");

class TeamController {
  constructor() {
    this.teamModelService = new TeamModelServices();
  }
  getTeam(req, res) {
    const team = this.teamModelService.getUser(req.params.id);
    if(!team){
      return notFound(0, "Team does not exist");
    }
   return Promise.resolve(team);
  }
  async addTeam(req, res) {
    const { body } = req;
       try {
         const team = await this.teamModelService.addTeam(body);
         if(!team && team.error){
           return notFound(0, "Team does not exist");
         }
         return Promise.resolve(team);   
        
       } catch (error) {
        console.log(error);
       }
  }
} 

module.exports = TeamController;