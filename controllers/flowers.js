var flowers = require("../models/flowers");

// List of all flowers
exports.flowers_list = function (req, res) {
  res.send("NOT IMPLEMENTED: flowers list");
};

// for a specific flower.
exports.flowers_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: flowers detail: " + req.params.id);
};


// Handle flowers delete form on DELETE.
exports.flowers_delete = function (req, res) {
  res.send("NOT IMPLEMENTED: flowers delete DELETE " + req.params.id);
};

// Handle flowers update form on PUT.
exports.flowers_update_put = function (req, res) {
  res.send("NOT IMPLEMENTED: flowers update PUT" + req.params.id);
};

// List of all flowerss
exports.flowers_list = async function (req, res) {
  try {
    theflowers = await flowers.find();
    res.send(theflowers);
  } 
  catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};
