const { model } = require('mongoose');
const resultSchema = require('./schema');

const resultModel = model('result', resultSchema);