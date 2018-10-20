var users = []

module.exports = {
	get: ()=> {return users},

	add: (user) => {
		users.push(user); 
	},
	remove: (user) => {
		return
	},
}

