const express = require("express");
const router = express.Router();
const Tutorial = require("../models/tutorialSchema");

/*
 * GET RESPONSES
 */
router.get("/all", (req, res) => {
   Tutorial.find({}, (err, resp) => {
      console.log("Sending response");
      res.send(resp);
   });
});

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

/*
 * DELETE RESPONSES 
 */
router.delete("/", (req, res) => {
   // Removes all documents :)
   Tutorial.remove().exec();
   res.send(200);
})

module.exports = router;