const express = require("express");
const routerApi = require("./routes")
const app = express();
const port = 3000;

app.use(express.json());

routerApi(app);

app.listen(port, () => {
    console.log("My port: " + port);
});
// app.get("/productos", (req,res) =>{
//     res.json(productos);
//     console.log("Peticion desde: " + req.url);
//     res.end();
// });

// app.get("/users", (req, res) => {
//     const { limit, offset } = req.query;
//     if(limit && offset) {
//         res.json({
//             limit,
//             offset,
//         })
//     }else{
//         res.send("No hay parametros");
//     }
// })

// app.get("/categories/:categoryId/products/:productId", (req, res) => {    
//     const { categoryId, productId } = req.params;
//     res.json({
//         categoryId,
//         productId,
//     })
// })

