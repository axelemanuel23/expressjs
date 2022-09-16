const express = require("express");
const mealsRouter = require("./mealsRouting");
const drinksRouter = require("./drinksRouting");

function routerApi(app) {
    const router = express.Router();
    app.use("/api/v1", router);
    router.use("/meals", mealsRouter);
    // router.use("/categories", categoriesRouter);
    router.use("/drinks", drinksRouter);
}

module.exports = routerApi;