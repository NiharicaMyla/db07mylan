var express = require('express');
const flowers_controlers = require("../controllers/flowers");
var router = express.Router();

///* GET home page. */
// router.get('/', function(req, res, next) {
//  res.render('flowers', { title: 'Search Results flowers' });
// });


/* GET flowers */
router.get("/", flowers_controlers.flowers_view_all_Page);

/* GET detail flowers page */
router.get("/detail", flowers_controlers.flowers_view_one_Page);

/* GET create flowers page */
router.get("/create", flowers_controlers.flowers_create_Page);

/* GET update flowers page */
router.get("/update", flowers_controlers.flowers_update_Page);

/* GET delete flowers page */
router.get("/delete", flowers_controlers.flowers_delete_Page);
module.exports = router;