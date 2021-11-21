const mongoose = require("mongoose");
const { SchemaTypes } = require('mongoose');

const flowersSchema = mongoose.Schema({
flowers_type: String,
color: {
    type: String,
    required: ['white', 'red']
},
cost: {
    type: Number,

        min:[10],
        max:[200]
}

})
module.exports = mongoose.model("flowers", flowersSchema);
