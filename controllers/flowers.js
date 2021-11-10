var flowers = require("../models/flowers");

// for a specific flower.
exports.flowers_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: flowers detail: " + req.params.id);
};
// Handle flowers create on POST.
exports.flowers_create_post = async function (req, res) {
  console.log(req.body);
  let document = new flowers();
  // We are looking for a body, since POST does not have query parameters.
  // Even though bodies can be in many different formats, we will be picky
  // and require that it be a json object
  // {"flower_type":"lobelias, "color":"blue", "cost":35}
  document.flower_type = req.body.flower_type;
  document.color = req.body.color;
  document.cost = req.body.cost;
  try {
    let result = await document.save();
    res.send(result);
  } catch (err) {
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

// VIEWS
// Handle a show all view
exports.flowers_view_all_Page = async function (req, res) {
  try {
    theflowers = await flowers.find();
    res.render("flowers", {
      title: "flowers Search Results",
      results: theflowers,
    });
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};
