const express = require("express");
const router = express.Router();
const Tutorial = require("../models/tutorialSchema");


router.get("/", (req, res) => {
   Tutorial.find({}, (err, resp) => {
      res.send(resp);
   });
});

// This is just an example of the data we expect
router.post("/", (req, res) => {
   const tutorial = new Tutorial({
      tutorialName: req.body.tutorialName,
      sections: req.body.sections
   });
   tutorial.save();
   res.send("got request");
});

router.delete("/", (req, res) => {
   // Removes all documents :)
   Tutorial.remove().exec();
   res.send(200);
})

module.exports = router;