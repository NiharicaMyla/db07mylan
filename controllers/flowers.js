var flowers = require("../models/flowers");

// List of all flowers
exports.flowers_list = async function(req, res) {
  res.send("NOT IMPLEMENTED: flowers list");
};
 
// for a specific flower.
// exports.flowers_detail = function (req, res) {
//   res.send("NOT IMPLEMENTED: flower detail: " + req.params.id);
// };

exports.flowers_detail = async function (req, res) {
  console.log("detail" + req.params.id);
  try {
    result = await flowers.findById(req.params.id)
    console.log(result)
    res.send(result)
  } catch (error) {
    res.status(500)
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

// Handle flowers delete on DELETE.
exports.flowers_delete = async function(req, res) {
  console.log("delete " + req.params.id)
  try {
  result = await flowers.findByIdAndDelete( req.params.id)
  console.log("Removed " + result)
  res.send(result)
  } catch (err) {
  res.status(500)
  res.send(`{"error": Error deleting ${err}}`);
  }
  };

// Handle flowers update form on PUT.
// exports.flowers_update_put = function (req, res) {
//  res.send("NOT IMPLEMENTED: flowers update PUT" + req.params.id);
// };

//Handle flowers update form on PUT.
exports.flowers_update_put = async function (req, res) {
  console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`);
  try {
    let toUpdate = await flowers.findById(req.params.id);
    // Do updates of properties
    if (req.body.flowers_type)
      toUpdate.flowers_type = req.body.flowers_type;
    if (req.body.color) toUpdate.color = req.body.color;
    if (req.body.cost) toUpdate.cost = req.body.cost;
    let result = await toUpdate.save();
    console.log("Sucess " + result);
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
  }
};

// List of all flowers
exports.flowers_list = async function (req, res) {
  try {
    theflowers = await flowers.find();
    res.send(theflowers);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
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

// Handle a show one view with id specified by query
exports.flowers_view_one_Page = async function(req, res) {
  console.log("single view for id " + req.query.id)
  try{
  result = await flowers.findById( req.query.id)
  res.render('flowersdetail',
  { title: 'flowers Detail', toShow: result });
  }
  catch(err){
  res.status(500)
  res.send(`{'error': '${err}'}`);
  }
  };


  // Handle building the view for creating a flowers.
  // No body, no in path parameter, no query.
  // Does not need to be async
  exports.flowers_create_Page = function(req, res) {
  console.log("create view")
  try{
  res.render('flowerscreate', { title: 'flowers Create'});
  }
  catch(err){
  res.status(500)
  res.send(`{'error': '${err}'}`);
  }
  };

  // Handle building the view for updating flowers.
// query provides the id
exports.flowers_update_Page = async function(req, res) {
  console.log("update view for item "+req.query.id)
  try{
  let result = await flowers.findById(req.query.id)
  res.render('flowersupdate', { title: 'flowers Update', toShow: result });
  }
  catch(err){
  res.status(500)
  res.send(`{'error': '${err}'}`);
  }
  };

  // Handle a delete one view with id from query
exports.flowers_delete_Page = async function(req, res) {
  console.log("Delete view for id " + req.query.id)
  try{
  result = await flowers.findById(req.query.id)
  res.render('flowersdelete', { title: 'flowers Delete', toShow:
  result });
  }
  catch(err){
  res.status(500)
  res.send(`{'error': '${err}'}`);
  }
  };