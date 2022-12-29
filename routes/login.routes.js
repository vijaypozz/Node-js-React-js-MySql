const express = require("express");
const router = express.Router();
const {loginUser,getLoginUser,googleAuthorize} = require("../controllers/login.controllers");

router.route("/auth/login").post(loginUser)

router.route("/loginUser").get(getLoginUser)

// v2
router.route("/login").get(googleAuthorize)

module.exports = router