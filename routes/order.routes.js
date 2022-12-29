const express = require("express")
const router = express.Router();
const order = require("../controllers/order.controller");
const { authorizeRoles } = require("../middlewares/auth");

router.route("/order/new").post(order.create)

module.exports = router;