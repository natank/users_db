var express = require("express");



let router = express.Router();
let User = require("../models/user");
let account = require("../public/account");

router.get('/',account.checkSignIn, (req, res) => {
	 
	if(req.session.page_views >= 0){
		req.session.page_views++;
	} else {
		req.session.page_views = 0;
	}

	res.render('newUser', {
		views: req.session.page_views
	} );
	
}) 

router.get("/co", (req, res) => {
	res.cookie('name', 'express').send('cookie set');
	console.log('Cookies: ', req.cookies);
})

router.post('/', (req, res)=> { 
	let userInfo = req.body;
	user = new User(userInfo);
	user.save(function(err, savedUser){
		console.log(`User details are: ${JSON.stringify(savedUser)}`)
	})
	
	res.redirect('/user');
})

router.get("/all",account.checkSignIn, function(req, res){
	User.find(function(err, allUsers){
		console.log(`users: \n ${allUsers}`) 
		res.render('allUsers', {

			users: allUsers
		})
	})
})

router.delete("/:id", function(req, res){
	User.remove({_id:req.params.id}, function(){
		res.redirect('/user/all')
	})
})



module.exports = router;