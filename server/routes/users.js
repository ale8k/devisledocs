const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    if(req.session.x){
        req.session.x++;
        res.send("You visited this page " + req.session.x + " times");
     } else {
        req.session.x = 1;
        res.send("Welcome to this page for the first time!");
     }
});

module.exports = router;