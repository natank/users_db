module.exports = {
	signin: function (err, req, res, next)
	{
		if(err){
			console.log("error: "+err);
			res.status(500).send('something broke!')
		}
	}
}
