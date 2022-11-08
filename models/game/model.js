const { model } = require('mongoose');
const gameSchema = require('./schema');

const gameModel = model('game', gameSchema);