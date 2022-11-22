const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resultSchema = new Schema({
    game: {type: Schema.Types.ObjectId, ref: 'game'},
    winner: {type: Schema.Types.ObjectId, ref: 'team'},
    isDraw: { type: Boolean },
    loser: {type: Schema.Types.ObjectId, ref: 'team'},
    result: {
        team1: {type: Schema.Types.ObjectId, ref: 'team'},
        goals1: { type: Number },
        team2: {type: Schema.Types.ObjectId, ref: 'team'},
        goals2: { type: Number },
      },

});

module.exports = resultSchema;