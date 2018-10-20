var express = require("express");
var router = express.Router();
var users = require("../public/users");
var passport = require("../public/passport");
var bodyParser     = require('body-parser');

router.get("/", function(req, res){ 
	res.render("./signin");
})

router.post('/', 
	passport.authenticate('local',  {
    	successRedirect: "/welcome",
    	failureRedirect: "/login",
    	failureFlash: true
    })
)

module.exports = router;