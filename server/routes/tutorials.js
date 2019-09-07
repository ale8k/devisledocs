const express = require('express');
const router = express.Router();
const Tutorial = require("../models/tutorialSchema");

router.get("/", (req, res) => {
   Tutorial.find({}, (err, resp) => {
      res.send(resp);
   });
});

// This is just an example of the data we expect
router.post("/", (req, res) => {
   let tutorial = new Tutorial({
      tutorialName: "Name",
      sections: [
         {
            sectionName: "Section name",
            sectionDetails: [
               {
                  detailHeader: "Header name",
                  detailImages: ["base 64"],
                  detailText: "Paragraph here"
               }
            ]
         }
      ],
   });

   tutorial.save();
   res.sendStatus(200);
});

router.delete("/", (req, res) => {
   // Removes all documents :)
   Tutorial.remove().exec();
   res.send(200);
})

module.exports = router;