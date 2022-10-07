const express = require("express");
const mealsRouter = require("./mealsRouting");
// const drinksRouter = require("./drinksRouting");
const todomanagerRouter = require("./todomanagerRouting");
const { authorizationHandler } = require("../middlewares/authHandler");

function routerApi(app) {
        const router = express.Router();
        app.get("/", express.static("public"));
        app.use("/api/v1", router);
        //Restaurant
        router.use("/meals", authorizationHandler, mealsRouter);
        // router.use("/drinks", drinksRouter);
        //To Do - Task Manager
        router.use("/todomanager", authorizationHandler, todomanagerRouter);
}

module.exports = routerApi;