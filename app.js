const express = require("express");
const routerApi = require("./network");
const { logErrors, boomErrorHandler, mongoErrorHandler, defaultErrorHandler } = require("./middlewares/errorHandler");


const app = express();
const port = process.env.PORT;

app.use(express.json());

routerApi(app);

//Middlewares

app.use(logErrors);
app.use(boomErrorHandler);
app.use(mongoErrorHandler);
app.use(defaultErrorHandler);


app.listen(port, () => {
    console.log("My port: " + port);
});

