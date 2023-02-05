const TeamModelServices = require("../services/teamModelServices");
const { notFound } = require("../services/util");

class TeamController {
  constructor() {
    this.teamModelService = new TeamModelServices();
  }
  async getTeam(req, res) {
    try {
      const team = this.teamModelService.getTeam(req.params.id);
      if (!team) {
        return notFound(0, "Team does not exist");
      }
      return Promise.resolve(team);
    } catch (error) {
      console.log(error);
    }
  }

  async getAllTeams(req, res) {
    try {
      const teams = await this.teamModelService.getAllTeams();
      if (!teams) {
        return notFound(0, "Teams does not exist");
      }
      return Promise.resolve(teams);
    } catch (error) {
      console.log(error);
    }
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
  async updateTeam(req, res) {
    const { body } = req;
    try {
      const team = await this.teamModelService.updateTeam(req.params.id, body);
      if (!team) {
        return notFound(0, "Team does not exist");
      }
      return Promise.resolve(team);
    } catch (error) {
      console.log(error);
    }
  }
} 

module.exports = TeamController;