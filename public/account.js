function checkSignIn(req, res, next){
	if(req.isAuthenticated()){
	  next();
	} else {
		res.redirect("/signin")
	}
}
module.exports = {checkSignIn}