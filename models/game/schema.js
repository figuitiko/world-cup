const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    team1: {type: Schema.Types.ObjectId, ref: 'team'},
    team2: {type: Schema.Types.ObjectId, ref: 'team'},
    bets: [{type: Schema.Types.ObjectId, ref: 'bet'}],
    winner: {type: Schema.Types.ObjectId, ref: 'team'},
    isDraw: { type: Boolean },
    date: { type: Date, required: true },
}, {  timestamps: true });

module.exports = gameSchema;