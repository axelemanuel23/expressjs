//EndPoint /drinks

const express = require("express");
const DrinksService = require("../services/drinksService");

const router = express.Router();
const service = new DrinksService();

//GET
router.get("/", (req, res, next) => service.find(req, res))
router.get("/filter", (req, res, next) => service.filter(req, res))
router.get("/:id", (req, res, next) => service.findOne(req, res))

//POST
router.post("/", (req, res, next) => service.create(req, res))

//PUT
// router.put("/:id", (req, res) => service.update(req, res))

//PATCH
router.patch("/:id", (req, res, next) =>service.update(req, res))

//DELETE
router.delete("/:id", (req, res, next) => service.delete(req, res))

module.exports = router;