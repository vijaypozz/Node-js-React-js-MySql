const Admin = require("../models/login.models")

// Create and send token and save in the cookie
const sendToken = (user, statuscode, res) => {

    //Create Jwt token
    const token = Admin.getJwtToken(user[0].email)
    console.log("taken===", token);

    //Options for cookie 
    const options = {
        //  expiryDate : new Date(Date.now() + (24 * 60 * 60 * 1000)),
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    }
    console.log("options===", options);


    res.status(statuscode).cookie('token', token, options).json({
        success: true,
        user: {...user[0], token }
    })
}

module.exports = sendToken