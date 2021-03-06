const express = require("express");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");

const app = express();

var PORT = process.env.PORT || 3000;

// middleware
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static("./public"));
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/swm-scraper";
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true
});

// routes
require("./routes/apiroutes.js")(app);

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
