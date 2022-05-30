const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

const nerdleSchema = new Schema({
    squares: {
        type: Number,
        required: true,
    },
    equation: {
        type: String,
        required: true,
    }
});

module.exports = Model('Nerdle', nerdleSchema);