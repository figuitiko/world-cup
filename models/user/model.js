const { model } = require('mongoose');
const userSchema = require('./schema');

const userModel = model('user', userSchema);
module.exports = userModel;
