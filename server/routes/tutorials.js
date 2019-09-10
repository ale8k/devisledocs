const express = require("express");
const router = express.Router();
const Tutorial = require("../models/tutorialSchema");

// Middleware
const filterNameAndIds = require("../middleware/filter-name-and-id");
const filterSpecificId = require("../middleware/filter-specific-id");
/*
 * GET RESPONSES
 */
router.get("/all", (req, res) => {
   Tutorial.find({}, (err, resp) => {
      res.send(resp);
   });
});

router.get("/all/names&ids", filterNameAndIds,  (req, res) => {
   res.send(res.payLoad)
});

router.get("/get-by-id/:tutorialId", filterSpecificId, (req, res) => {
   res.send(res.payLoad);
})

/*
 * POST RESPONSES 
 */
router.post("/", (req, res) => {
   const tutorial = new Tutorial({
      tutorialName: req.body.tutorialName,
      sections: req.body.sections
   });

   tutorial.save();
   res.sendStatus(200);
   
});

/**
 * PUT RESPONSES
 */
router.put("/", (req, res) => {

});

/*
 * DELETE RESPONSES 
 */
router.delete("/", (req, res) => {
   // Removes all documents :)
   Tutorial.remove().exec();
   res.send(200);
})

module.exports = router;