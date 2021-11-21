const mongoose = require("mongoose");
const { SchemaTypes } = require('mongoose');

const flowersSchema = mongoose.Schema({
flowers_type: String,
color: String,
cost: {
    type: Number,

        min:[100,"Minimum year for cost"],
        max:[2000,"Maximum year for cost"]
}

})
module.exports = mongoose.model("flowers", flowersSchema);
