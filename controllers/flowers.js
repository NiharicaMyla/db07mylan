var flowers = require("../models/flowers");

// List of all flowers
exports.flowers_list = async function(req, res) {
  res.send("NOT IMPLEMENTED: restaurant list");
};
 
// // for a specific flower.
// exports.restaurant_detail = function (req, res) {
//   res.send("NOT IMPLEMENTED: flower detail: " + req.params.id);
// };

exports.flowers_detail = async function (req, res) {
  console.log("detail" + req.params.id);
  try {
    result = await flowers.findById(req.params.id);
    console.log(result);
    res.send(result);
  } catch (error) {
    res.status(500);
    res.send(`{"error": document for id ${req.params.id} not found`);
  }
};

// Handle flowers create on POST.
exports.flowers_create_post = async function (req, res) {
  console.log(req.body)
  let document = new flowers();
  // We are looking for a body, since POST does not have query parameters.
  // Even though bodies can be in many different formats, we will be picky
  // and require that it be a json object
  // {"flower_type":"lobelias, "color":"blue", "cost":35}
  document.flowers_type = req.body.flowers_type;
  document.color = req.body.color;
  document.cost = req.body.cost;
  try {
    let result = await document.save();
    res.send(result);
  }
  catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// Handle flowers delete form on DELETE.
exports.flowers_delete = function (req, res) {
  res.send("NOT IMPLEMENTED: flowers delete DELETE " + req.params.id);
};

// Handle flowers update form on PUT.
exports.flowers_update_put = function (req, res) {
  res.send("NOT IMPLEMENTED: flowers update PUT" + req.params.id);
};

// VIEWS
// Handle all view
exports.flowers_view_all_Page = async function (req, res) {
  try {
    theflowers = await flowers.find();
    res.render("flowers", { title: "flowers Search Results", results: theflowers });
  } 
  catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};
