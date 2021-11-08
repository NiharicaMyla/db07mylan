const mongoose = require("mongoose")
const flowersSchema = mongoose.Schema({
Flower_type: String,
Color: String,
Cost: Number,
});
module.exports = mongoose.model("flowers", flowersSchema);