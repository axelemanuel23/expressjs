const express = require("express");
const routerApi = require("./routes")
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

routerApi(app);

app.listen(port, () => {
    console.log("My port: " + port);
});

