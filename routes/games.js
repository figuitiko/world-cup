const GameController = require("../controllers/game.controller");
const { successResponse } = require("../services/util");

class RoutesGame {
    constructor(router) {
        this.gameController = new  GameController();
        this.router = router;
    }
    getAllGames(){
        this.router.get('/games', async(req, res)=>{        
          try {
            const rsp = await this.gameController.getAllGames(req, res);        
            successResponse(res, rsp); 
          } catch (error) {
            console.log(error);
          }
        });
    }
    addGame(){
        this.router.post('/games', async(req, res)=>{        
          try {
            const rsp = await this.gameController.addGame(req, res);        
            successResponse(res, rsp); 
          } catch (error) {
            console.log(error);
          }
        });
    }
}

module.exports = RoutesGame;