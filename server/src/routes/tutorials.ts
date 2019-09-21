// // @ts-ignore
import * as express from "express";
const router = express.Router();
const Tutorial = require("../models/tutorialSchema");

// // Middleware
// const filterByNameIdAndCategory = require("../middleware/filter-name-id-category");
// const filterSpecificId = require("../middleware/filter-specific-id");

// /*
//  * GET RESPONSES
//  */

router.get("/all", (req: express.Request, res: express.Response) => {
   // Figure what these types are...
   Tutorial.find({}, (req: any, resp: any) => {
      res.send(resp);
   });
});


module.exports = router;

// // type our payload, this sucks!
// router.get("/all/names&ids", filterByNameIdAndCategory,  (req: Request, res: Response & {payLoad: any}) => {
//    res.send(res.payLoad)
// });

// router.get("/get-by-id/:tutorialId", filterSpecificId, (req: Request, res: Response & {payLoad: any}) => {
//    res.send(res.payLoad);
// })

// /*
//  * POST RESPONSES 
//  */

// router.post("/save-tutorial", (req: Request, res: Response) => {
//    const tutorial = new Tutorial({
//       tutorialName: req.body.tutorialName,
//       sections: req.body.sections,
//       tutorialCategory: req.body.tutorialCategory
//    });

//    tutorial.save();
//    res.sendStatus(200);
   
// });

// /**
//  * PUT RESPONSES
//  */

// router.put("/", (req: Request, res: Response) => {

// });

// /*
//  * DELETE RESPONSES 
//  */

// router.delete("/all", (req: Request, res: Response) => {
//    // Removes all documents :)
//    Tutorial.remove().exec();
//    res.send(200);
// })
