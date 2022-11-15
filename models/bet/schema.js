const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const betSchema = new Schema({
    teamWinner: {
        type: Schema.Types.ObjectId, ref: 'team',      
    },
    isDraw: {
        type: Boolean,
    },    
    user: {type: Schema.Types.ObjectId, ref: 'user'}, 
    game: {type: Schema.Types.ObjectId, ref: 'game'},
    isSuccessful: {
        type: Boolean,
        default: false,
    },  
}, {  timestamps: true });

module.exports = betSchema;