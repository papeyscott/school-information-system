var auth 	= require("./auth.js");

	exports.signIn = (req, res, next) => {

		var token = auth.signToken(req.user._id);
		res.status(200).json({_token: token});
	}