var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");


router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var allBurgers = {
      burgers: data
    };
    console.log(allBurgers);
    res.render("index", allBurgers);
  });
});


router.post("/", function(req, res) {
  burger.insertOne([
    "burger_name", "devoured"
  ], [
    req.body.name, false
  ], function() {
    res.redirect("/");
  });
});


router.put("/:id", function(req, res) {
  console.log(req.params.id);
  devourPick = req.params.id; 
  burger.updateOne(devourPick, function() {
   res.redirect("/");
  });
});

module.exports = router;