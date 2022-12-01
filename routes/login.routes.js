const express = require("express");
const router = express.Router();
const {loginUser,getLoginUser} = require("../controllers/login.controllers");

router.route("/auth/login").post(loginUser)

router.route("/loginUser").get(getLoginUser)

module.exports = router