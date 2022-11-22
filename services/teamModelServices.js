const TeamModel = require('../models/team/model');

class TeamModelServices {
    constructor() {
        this.teamModel = TeamModel;
    }

    async getTeam(id) {
    return await this.teamModel.findById(id);
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
}

module.exports = TeamModelServices;