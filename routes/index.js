const express = require('express');
const RoutesTeam = require('./team');
const  RoutesUser  = require('./users');
const RoutesGame  = require('./games');

const router = express.Router();



//users
const routesUser = new RoutesUser(router);
routesUser.getUser();
routesUser.signUp();
routesUser.signIn();
routesUser.checkUser();

//teams
const routesTeam = new RoutesTeam(router);
routesTeam.getTeam();
routesTeam.getAllTeams();
routesTeam.addTeam();
routesTeam.updateTeam();


//games
const routesGame = new RoutesGame(router);
routesGame.getAllGames();
routesGame.addGame();

module.exports = router;