const mongoose = require("mongoose");
const { connection } = require("../services/mongodbService");
connection("cook");

//Meal es la base de la receta ej: hamburguesa
const mealsSchema = new mongoose.Schema({
  name: String,
  basePrice: Number,
  healthFilter: {
    meat: Boolean,
    dairy: Boolean,
    flavour: Boolean,
  },
  ingredients: Array,
});

//Topic son los aditivos que se le pueden agregar, ej: bacon, queso, huevo, jamon
const topicsSchema = new mongoose.Schema({
  mealsId: Array,
  name: String,
  price: Number,
  available: Boolean,
  healthFilter: {
    meat: Boolean,
    dairy: Boolean,
    flavour: Boolean,
  },
  ingredients: Array,
})

//Son las salsas disponibles
const sauceSchema = new mongoose.Schema({
  name: String,
  price: Number,
  available: Boolean,
  healthFilter: {
    meat: Boolean,
    dairy: Boolean,
    flavour: Boolean,
  },
  ingredients: Array,
})

//Es el pedido armado de una receta
const recipeSchema = new mongoose.Schema({
  mealId: Number,
  topics: {
    topicId: Number,
    quantity: Number,
  },
  sauce: {
    sauceId: Number,
    quantity: Number,
  },
  total: Number,
});

const ordersSchema = new mongoose.Schema({
  orderNumber: Number,
  menuList: Array,
  total: Number,
})


const todosSchema = new mongoose.Schema({
  text: String,
  completed: Boolean
})

const meals = new mongoose.model("meals", mealsSchema);
const recipe = new mongoose.model("menu", recipeSchema);
const topics = new mongoose.model("topics", topicsSchema);
const sauce = new mongoose.model("sauce", sauceSchema);
const orders = new mongoose.model("orders", ordersSchema);
const todos = new mongoose.model("todos", todosSchema);

module.exports = { meals , topics, sauce, orders, todos, recipe };