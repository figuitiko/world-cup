const { model } = require('mongoose');
const betSchema = require('./schema');

const betModel = model('bet', betSchema);
module.exports = betModel;