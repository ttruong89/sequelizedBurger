var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');
var PORT = process.env.PORT || 3000;
var app = express();

// require models for syncing
var db = require('./models');

// Override with POST having ?_method=DELETE.
app.use(methodOverride("_method"));

// serve static content for the app from the "public/assets" directory
app.use(express.static(__dirname + "/public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));

// Hbs
var exphbs = require("express-handlebars");

app.engine("hbs", exphbs({ defaultLayout: "main", extname: "hbs"}));
app.set("view engine", "hbs");

// Routes
var routes = require("./controllers/burger_controller.js");

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);


// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});