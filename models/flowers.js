const mongoose = require("mongoose");
const { SchemaTypes } = require('mongoose');

const flowersSchema = mongoose.Schema({
flowers_type: String,
color: String,
cost: Number,

        min:[15,"Minimum year for construction"],
        max:[60,"Maximum year for construction"]

})

module.exports = mongoose.model("flowers", flowersSchema);
