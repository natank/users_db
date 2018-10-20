var express = require("express");

var Account = require("../models/account");

var router = express.Router();

router.get("/", function(req, res){
	res.render("./signup");
})


router.post("/", 
	function(req, res, next){
		var {username, password, email} = req.body;
		Account.create({username, password, email})
			.then(account => 
				req.login(account, err => {
					if(err) next(err)
					else res.redirect('/welcome');
				}))
			.catch(err => {
				if(err.name === "ValidationError") {
					req.flash("Sorry, that username is already taken.");
					res.redirect("/signup");
				} else next(err);
			}
		)
	}
)

module.exports = router;