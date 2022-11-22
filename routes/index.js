const express = require('express');
const RoutesTeam = require('./team');
const  RoutesUser  = require('./users');

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
routesTeam.addTeam();

module.exports = router;