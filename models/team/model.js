const { model } = require('mongoose');
const teamSchema = require('./schema');

const teamModel = model('team', teamSchema);

module.exports = teamModel;