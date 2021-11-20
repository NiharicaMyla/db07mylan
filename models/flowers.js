const mongoose = require("mongoose");
const { SchemaTypes } = require('mongoose');

const flowersSchema = mongoose.Schema({
flowers_type: String,
color: String,
cost: {
    type: Number,

        min:[20,"Minimum cost"],
        max:[60,"Maximum cost"]
}

})

module.exports = mongoose.model("flowers", flowersSchema);
