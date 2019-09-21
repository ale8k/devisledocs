const Tutorial = require("../models/tutorialSchema");

/**
 * Gets a single tutorial by Id.
 */
function filterSpecificId(req, res, next) {
    Tutorial.find({_id: req.params.tutorialId}, (err, resp) => {
        res.payLoad = resp;
        next();
    });
}

module.exports = filterSpecificId;