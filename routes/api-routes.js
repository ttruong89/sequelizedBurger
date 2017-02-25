var db = require("../models");

module.exports = function(app) {
	// GET route
	app.get("/api/burgers", function(req, res) {
		db.Burger.findAll({}).then(function(dbBurger) {
			res.json(dbBurger);
		});
	});
	// POST route
	app.post("/api/burgers", function(req, res) {
		db.Burger.create({
			burger_name: req.body.burger_name,
			devoured: req.body.devoured
		}).then(function(dbBurger) {
			res.json(dbBurger);
		});
	});
	// PUT route
	app.put("/api/burgers", function(req, res) {
		db.Burger.update({
			burger_name: req.body.burger_name,
			devoured: req.body.devoured
		}).then(function(dbBurger) {
			res.json(dbBurger);
		});
	});
};