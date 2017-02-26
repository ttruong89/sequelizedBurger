var express = require("express");
var db = require("../models");
var router = express.Router();


// get route -> index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

// Get all of the burgers route.
router.get("/burgers", function(req, res) {
  // FindAll returns all entries for a table when used with no options.
  db.Burger.findAll({}).then(function(burgerData) {
    res.render("index", { burger_data: burgerData });
  });
});

// post route -> back to index
router.post("/burgers/create", function(req, res) {
  // Create burger objects.
  db.Burger.create({
    burger_name: req.body.burger_name,
    devoured: false
  });
    res.redirect("/");
});

// put route -> back to index
router.put("/burgers/update", function(req, res) {
  // Update burger objects by id.  Devoured or not.
  db.Burger.update({
    devoured: true
  }, {
    where: {
      id: req.body.burger_id
    }
  });
    res.redirect("/");
});

module.exports = router;
