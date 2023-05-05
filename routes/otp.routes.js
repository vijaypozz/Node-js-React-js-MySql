const express = require("express");
const router = express.Router();
const { sendOTP} = require("../controllers/otp.controller");

// v2
router.route("/veroifyOtp").get()
router.route("/v2/sendotp").post(sendOTP)


module.exports = router