var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var MealSchema = new Schema({
  foodItem: String,

  co2: String
});

module.exports = {};
