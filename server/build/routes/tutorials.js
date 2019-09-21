"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.express.Router();
const Tutorial = require("../models/tutorialSchema");
const filterByNameIdAndCategory = require("../middleware/filter-name-id-category");
const filterSpecificId = require("../middleware/filter-specific-id");
router.get("/all", (req, res) => {
    Tutorial.find({}, (req, resp) => {
        res.send(resp);
    });
});
router.get("/all/names&ids", filterByNameIdAndCategory, (req, res) => {
    res.send(res.payLoad);
});
router.get("/get-by-id/:tutorialId", filterSpecificId, (req, res) => {
    res.send(res.payLoad);
});
router.post("/save-tutorial", (req, res) => {
    const tutorial = new Tutorial({
        tutorialName: req.body.tutorialName,
        sections: req.body.sections,
        tutorialCategory: req.body.tutorialCategory
    });
    tutorial.save();
    res.sendStatus(200);
});
router.put("/", (req, res) => {
});
router.delete("/all", (req, res) => {
    Tutorial.remove().exec();
    res.send(200);
});
module.exports = router;
