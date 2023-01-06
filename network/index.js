const express = require("express");
const mealsRouter = require("./mealsRouting");
const topicsRouter = require("./topicsRouter")
const todomanagerRouter = require("./todomanagerRouting");
const { authorizationHandler } = require("../middlewares/authHandler");

function routerApi(app) {
        const router = express.Router();
        // app.get("/", express.static("public"));
        app.get("/", (req, res, next) => {
                res.status(200).json({
                        message: "Succeed",
                        data: "Bienvenido"
                })
        } );
        app.use("/api/v1", router);
        //Restaurant
        router.use("/meals", authorizationHandler, mealsRouter);
        router.use("/topics", authorizationHandler, topicsRouter);
        //To Do - Task Manager
        router.use("/todomanager", authorizationHandler, todomanagerRouter);
}

module.exports = routerApi;