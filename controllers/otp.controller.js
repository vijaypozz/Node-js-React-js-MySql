const otpGenerator = require('otp-generator')
const { sendCreate, verifyOTP } = require("../models/otp.models")

exports.sendOTP = (async (req, res, next) => {


    if (req.body.mobile) {
        var OTP = otpGenerator.generate(6, {
            digits: true, lowerCaseAlphabets: false,
            upperCaseAlphabets: false,
            specialChars: false
        });
    }

    const values = {
        otp: OTP,
        mobile: req.body.mobile,
        status: "sent"
    }


    console.log("otp==", OTP);
    const data = await sendCreate(values)
    console.log("data==", data);

    res.json({
        message: "success",
        OTP, data
    })


})



exports.VerifyOtp = (async (req, res) => {
    const { otp, mobile } = req.body

    const data = await verifyOTP(otp, mobile)
})