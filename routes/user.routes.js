const express = require("express");

const router = express.Router();
const user = require("../controllers/user.controller")


const {authorizeRoles} = require("../middlewares/auth")


router.route("/user/create").post(user.create)

router.route("/usersDetail").get(user.getName)

router.route("/usersDetail/:id").get(user.getUserSelectedById)

router.route("/user/update/:id").put(user.update)

router.route("/users/delete/:id").delete(user.delete)





module.exports = router;
