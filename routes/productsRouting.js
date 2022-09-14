const express = require("express");
// const faker = require("faker");

const router = express.Router();


const productos = [
    {
        productName : "caramelo",
        productPrice : 2
    },
    {
        productName: "chicle",
        productPrice: 5
    },
    {
        productName: "alfajor",
        productPrice: 7
    }
];

router.get("/", (req, res) => {
    // const { size } = req.query;
    // const limit = size || 10;
    // for (let index = 0; index < limit; index++) {
    //     productos.push({
    //         name: faker.commerce.productName(),
    //         price: parseInt(faker.commerce.price(), 10),
    //         image: faker.image.imageUrl(),
    //     });
    // }
    res.json(productos);
})

router.post("/", (req, res) => {
    const body = req.body;
    res.status(201).json({
        message: "created",
        data: body,
    });
    console.log(body);
})

router.put("/:id", (req, res) =>{
    const { id } = req.params;
    const body = req.body;
    res.json({
        message: "updated",
        data: body,
        id,
    })
})

router.patch("/:id", (req, res) =>{
    const { id } = req.params;
    const body = req.body;
    res.json({
        message: "updated",
        data: body,
        id,
    })
})

router.delete("/:id", (req, res) =>{
    const { id } = req.params;
    res.json({
        message: "deleted",
        id,
    })
})

module.exports = router;