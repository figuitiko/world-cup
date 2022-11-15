const { model } = require('mongoose');
const userSchema = require('./schema');

const UserModel = model('user', userSchema);
module.exports = UserModel;
