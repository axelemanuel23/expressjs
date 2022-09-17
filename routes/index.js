const express = require("express");
const mealsRouter = require("./mealsRouting");
const drinksRouter = require("./drinksRouting");

function routerApi(app) {
    const router = express.Router();
    app.get("/", (req, res) => {
        res.status(200)
        .send("Bienvenido a esta API!");
    })
    app.use("/api/v1", router);
    router.use("/meals", mealsRouter);
    // router.use("/categories", categoriesRouter);
    router.use("/drinks", drinksRouter);
}

module.exports = routerApi;