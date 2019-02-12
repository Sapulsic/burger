var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// Grab Burger from Database

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// Puts the Burger into the Object

router.post("/burgers", function (req, res) {
    burger.insertOne([
        "burger_name"
    ], [
            req.body.burger_name
        ], function (data) {
            res.redirect("/");
        });
});

// Updates the Burger to devoured

router.put("/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: true
    }, condition, function (data) {
        res.redirect("/");
    });
});

module.exports = router;