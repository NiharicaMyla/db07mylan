const mongoose = require("mongoose")
const flowersSchema = mongoose.Schema({
flower_type: String,
color: String,
cost: Number,
});
module.exports = mongoose.model("flowers", flowersSchema);