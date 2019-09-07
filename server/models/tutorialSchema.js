const mongoose = require('mongoose');

const tutSectionDetailSchema = new mongoose.Schema({
    detailHeader: {
        type: String,
        trim: true,
        required: "Detail header field is required"
    },
    detailImages: {
        type: [String],
        default: []
    },
    detailText: {
        type: String,
        trim: true,
        required: "Detail text field is required"
    },
    _id: false
})

const tutSectionSchema = new mongoose.Schema({
    sectionName: {
        type: String,
        trim: true,
        required: "Section name field is required"
    },
    sectionDetails: {
        type: [tutSectionDetailSchema],
        required: "Section details field is required",
        validate: [(input) => input.length > 0, "Section detail array field cannot be empty"]
    },
    _id: false 
})

const tutSchema = new mongoose.Schema({
    tutorialName: {
        type: String,
        trim: true,
        required: "Tutorial name field is required"
    },
    sections: {
        type: [tutSectionSchema],
        trim: true,
        required: "Section field is required",
        validate: [(input) => input.length > 0, "Section array field cannot be empty"],
    },
    dateMade: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("tutorials", tutSchema, "tutorials");