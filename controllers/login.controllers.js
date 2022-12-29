
const Admin = require("../models/login.models");
const Emailservice = require("../utils/emailService");
const ErrorHandler = require("../utils/ErrorHandler");
const sendToken = require("../utils/jwtToken");
const { GoogleOAuth } = require("../services/GoogleOAuth");



exports.checkUserStatus = (async (user) => {
    let status = 'In Active'
    if (user.role == 'campaign') {
        // status = await DC.checkDCStatus(user.role_id)
        console.log("log===its a campaign");
    } else if (user.role == 'admin') {
        status = 'Active'
    }
    return status
})


exports.loginUser = (async (req, res, next) => {

    try {
        const { email, password } = req.body

        //Check if user entered username and password
        if (!email || !password) {
            return next(new ErrorHandler('Please enter email & password', 400))
        }


        let user = await Admin.findByEmail(email);

        if (!user) {
            return next(new ErrorHandler('Invalid Username or Password', 401))
        }

        user[0].status = await this.checkUserStatus(user[0])

        //Checks if password is correct or not
        const isPasswordMatched = await Admin.comparePassword(password, user[0].password)

        if (!isPasswordMatched) {
            return next(new ErrorHandler('Invalid Email or Password', 401))
        }
        // Emailservice(email,res,next)
        sendToken(user, 201, res)

    } catch (error) {
        console.log("errr=================", error)
    }
})

//get the admin table values
exports.getLoginUser = (async (req, res) => {
    try {
        //return response
        const data = await Admin.getAdminDetails()
        console.log("data==", data);
        res.status(201).send({
            succes: true,
            data
        })
    } catch (error) {
        console.log("erttttt=====", error);
        res.status(401).send({
            message: "something wrong"
        })
    }
})


/// URL generator
exports.googleAuthorize = (req, res) => {
    try {
        const client = GoogleOAuth({
            clientId: "",
            clientSecret: "",
            redirectionUrl: "http://localhost:3000/",
        });

        const url = client.getAuthorizeUrl([
            "https://www.googleapis.com/auth/userinfo.email",
            "https://www.googleapis.com/auth/userinfo.profile",
        ]);
        /// retrun url
        return { code: 200, message: "success", url: url }

    } catch (error) {
        console.error(error);
        throw error;
    }
};
