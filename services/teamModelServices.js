const TeamModel = require('../models/team/model');

class TeamModelServices {
    constructor() {
        this.teamModel = TeamModel;
    }

    async getTeam(team1, team2, date) {
      try {
        return await this.teamModel.findOne({team1, team2, date});
      } catch (error) {
        console.log(error);
      }
    }
    async getAllTeams() {
      try {
        return await this.teamModel.find();
      } catch (error) {
        console.log(error);
      }
    }
    
    async addTeam(data) {
      try {
        const checkTeam = await this.teamModel.findOne({name: data.name});
        if(checkTeam){
            return {ok: false, error: "Team already exist"};
        }
        return await this.teamModel.create(data);
        
      } catch (error) {
        console.log(error);
      }
    }
    async updateTeam(id, data) {
      try {
        return await this.teamModel.findByIdAndUpdate(id, data, {new: true});
      } catch (error) {
        console.log(error);
      }
    }

    async getTeamByName(name){
      try {
        return await this.teamModel.findOne({name});
      } catch (error) {
        console.log(error);
      }
    }
}

module.exports = TeamModelServices;