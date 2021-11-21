const mongoose = require("mongoose");
const { SchemaTypes } = require('mongoose');

const flowersSchema = mongoose.Schema({
flowers_type: String,
color: {type: String, enum: ['white', 'red'], required: function() { return this.color;}},
cost: {type: Number, min:[10], max:[200] }})
module.exports = mongoose.model("flowers", flowersSchema);
