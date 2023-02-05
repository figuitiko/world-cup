const GameModelServices = require("../services/gameModelServices");
const TeamModelServices = require("../services/teamModelServices");
const { notFound } = require("../services/util");


class GameController{
  constructor(){
    this.gameModelService = new GameModelServices();
    this.teamModelService = new TeamModelServices();
  }
 async getAllGames(req, res){
    try {
      const allTeams = await this.gameModelService.getAllGames();
      return Promise.resolve(allTeams);
    } catch (error) {
      console.log(error);
    }
  }
 async addGame(req, res){
    let { body:{team1, team2,date} } = req;   
    console.log(date);
    date = new Date(date);    
    try {
      const team1Exist = await this.teamModelService.getTeamByName(team1);
      const team2Exist = await this.teamModelService.getTeamByName(team2);
      if(!team1Exist || !team2Exist){
        return Promise.reject(notFound("Team not found"));
      }
      const checkGame = await this.gameModelService.getGame(team1Exist['_id'], team2Exist['_id'], date);
      if(checkGame){
        return notFound(0, "Game already exist");
      }
      const newGame = {
        team1: team1Exist['_id'],
        team2: team2Exist['_id'],
        date
      }
      const game = this.gameModelService.addGame(newGame);
      return Promise.resolve(game);
    } catch (error) {
      console.log(error);
    }
  }
 
  
}

module.exports = GameController;