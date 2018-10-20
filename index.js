var express  	   = require('express');
var methodOverride = require('method-override')
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var cookieParser   = require('cookie-parser');
var session        = require('express-session');
var passport 	   = require('./public/passport');
var mongoose 	   = require('mongoose');

var user   = require("./routers/user");
var signup = require("./routers/signup");
var signin = require("./routers/signin");
var Account  = require("./models/account");
var error  = require("./public/errors");
var signout = require("./routers/signout");
var account = require("./public/account")

var app = express();
mongoose.connect("mongodb://natikam1:natikam1@ds123513.mlab.com:23513/users");
app.use(methodOverride('_method'));
app.use('/static', express.static('public'));
app.use(express.static('images'));
app.use(cookieParser())
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: "Shh, its a secret!"}));
app.use(passport.initialize());
app.use(passport.session());



app.set('view engine', 'pug');
app.set('views', './views');

app.use("/user", user);
app.use("/signup", signup)
app.use("/signin", signin)
app.use("/signout", signout)


app.listen('3000', ()=>{console.log( //
	"Server is running on port 3000")})

app.get("/welcome",account.checkSignIn, function(req, res, next){ 
	Account.findById(req.session.passport.user, function(err, account){
		if(err){
			console.log("error in welcome "+err)
			next(err)
		} else {
			res.render("./welcome", {name: account.username});		
		}
	})
	
})

app.use(error.signin); 