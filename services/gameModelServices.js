const GameModel  = require('../models/game/model');

class GameModelServices {
    constructor() {
        this.gameModel = GameModel;
    }

  async getAllGames() {
     try {
       return await this.gameModel.find().populate('team1').populate('team2');
     } catch (error) {
       console.log(error);
     }  
   }

   async getGame(team1, team2, date) {
     try {
      return await this.gameModel.findOne({team1, team2, date});
     } catch (error) {
       console.log(error);
     }
   }

  async addGame(data) {    
    try {
      return await this.gameModel.create(data);
    } catch (error) {
      console.log(error);
    }
  }
      
}

module.exports = GameModelServices;