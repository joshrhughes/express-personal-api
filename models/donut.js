const mongoose = require('mongoose');

var Schema = mongoose.Schema;
var DonutSchema = new Schema({
    Resturant: String,
    Address: String,
    Website: String
});
var Donut = mongoose.model('Donut', DonutSchema);

module.exports = Donut;

