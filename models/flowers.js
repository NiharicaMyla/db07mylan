const mongoose = require("mongoose");
const { SchemaTypes } = require('mongoose');

const flowersSchema = mongoose.Schema({
Flower_type: String,
color: String,
cost: Number
})

module.exports = mongoose.model("flowers", flowersSchema);
