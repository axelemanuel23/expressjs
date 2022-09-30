const express = require("express");
const mealsRouter = require("./mealsRouting");
const drinksRouter = require("./drinksRouting");
const { authorizationHandler } = require("../middlewares/authHandler");

function routerApi(app) {
        const router = express.Router();
        app.get("/", express.static("public"));
        app.use("/api/v1", router);
        router.use("/meals", authorizationHandler, mealsRouter);
        router.use("/drinks", drinksRouter);
}

module.exports = routerApi;