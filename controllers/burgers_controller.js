var express = require("express");
var burger = require("burger.js");
var router = express.Router();

//gets the burger object from the db
router.get("/", function(req,res) {
    burger.all(function(data) {
        var hbsObject = {
            burger: Data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//inserts a burger into the burger object
router.post("/burgers", function (req, res) {
    burger.insertOne([
        "burger_name"
    ],[
        req.body.burger_name
    ], function(data) {
        res.redirect("/");
    });
});

//updates a burgers condition of not devoured to devoured
router.put("/burgers/:id", function(req,res) {
    var condition = "id = " + req.params.id;
    
    console.log("condition", condition);

    burger.updateOne({
        devoured: true
    }, condition, function(data) {
        res.redirect("/");
    });
});

module.exports = router;