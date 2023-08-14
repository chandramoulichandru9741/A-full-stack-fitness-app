const User = require('../models/userModel');

//login user
const loginUser = async (req, res) => {
    res.json({mssg: 'user login'});
}


//sign up user
const signupUser = async (req, res) => {
    res.json({mssg: 'user signup'});
}


module.exports = { signupUser, loginUser }