const mongoose = require("mongoose");

const mealsSchema = new mongoose.Schema({
  name: String,
  price: Number,
  ingredients: {
    meat: Boolean,
    dairy: Boolean,
    flour: Boolean,
  }
});
  
const drinksSchema = new mongoose.Schema({
  name: String,
  price: Number,
  cc: Number,
  alcohol: Boolean,
})

const drinks = new mongoose.model("drinks", drinksSchema);
const meals = new mongoose.model("meals", mealsSchema);

module.exports = { meals , drinks };