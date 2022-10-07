const mongoose = require("mongoose");
const { connection } = require("../services/mongodbService");
connection("cook");

const mealsSchema = new mongoose.Schema({
  name: String,
  price: Number,
  filter: {
    meat: Boolean,
    dairy: Boolean,
    flavour: Boolean,
  },
  ingredients: Array,
});
  
const drinksSchema = new mongoose.Schema({
  name: String,
  price: Number,
  cc: Number,
  alcohol: Boolean,
  ingredients: Array,
});

const ordersSchema = new mongoose.Schema({
  number: Number,
  clientName: String,
  clientEmail: String,
  date: Date,
  productsId: Array,
  total: Number,
});

const todosSchema = new mongoose.Schema({
  text: String,
  completed: Boolean
})

const meals = new mongoose.model("meals", mealsSchema);
const drinks = new mongoose.model("drinks", drinksSchema);
const orders = new mongoose.model("orders", ordersSchema);
const todos = new mongoose.model("todos", todosSchema);

module.exports = { meals , drinks, orders, todos };