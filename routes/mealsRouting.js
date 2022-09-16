//EndPoint /meals

const express = require("express");
const MealsService = require("../services/mealsService");

const router = express.Router();
const service = new MealsService();

router.get("/", (req, res) => {
     service.find(res);
})

router.get("/filter", (req, res) => {
    const query = req.query;
    service.filter(query, res);
})

router.post("/", (req, res) => {
    const body = req.body;
    service.create(body, res);
})

router.get("/:id", (req, res) => {
    const { id } = req.params;
    service.findOne(id, res);
})

// router.put("/:id", (req, res) =>{
//     const { id } = req.params;
//     const body = req.body;
//     service.update(id, body, res);
// })
/* ----------------------------------- */

router.patch("/:id", (req, res) =>{
    const { id } = req.params;
    const body = req.body;
    service.update(id, body, res);
})

router.delete("/:id", (req, res) =>{
    const { id } = req.params;
    service.delete(id, res);
})

module.exports = router;