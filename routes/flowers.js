var express = require('express');
const flowers_controlers = require("../controllers/flowers");
var router = express.Router();

///* GET home page. */
// router.get('/', function(req, res, next) {
//  res.render('flowers', { title: 'Search Results flowers' });
// });
// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }

/* GET flowers */
router.get("/", flowers_controlers.flowers_view_all_Page);

/* GET detail flowers page */
router.get("/detail", flowers_controlers.flowers_view_one_Page);

/* GET create flowers page */
router.get("/create", secured, flowers_controlers.flowers_create_Page);

/* GET update flowers page */
router.get("/update", secured, flowers_controlers.flowers_update_Page);

/* GET delete flowers page */
router.get("/delete", secured, flowers_controlers.flowers_delete_Page);
module.exports = router;