const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resultSchema = new Schema({
    game: {type: Schema.Types.ObjectId, ref: 'game'},
    winner: {type: Schema.Types.ObjectId, ref: 'team'},
    isDraw: { type: Boolean },
    loser: {type: Schema.Types.ObjectId, ref: 'team'},

});