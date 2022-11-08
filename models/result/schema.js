const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resultSchema = new Schema({
    game: {type: Schema.Types.ObjectId, ref: 'game'},
    
});