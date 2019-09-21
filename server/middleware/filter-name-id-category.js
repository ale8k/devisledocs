const Tutorial = require("../models/tutorial-schema");

/**
 * Gets all tutorialNames and Ids, then sets
 * the response.payLoad to this.
 */
function filterByNameIdAndCategory(req, res, next) {
    Tutorial.find({}, {tutorialName: 1, tutorialCategory: 1}, (err, resp) => {
        res.payLoad = resp;
        next();
    });
}

module.exports = filterByNameIdAndCategory;