const express = require("express");
const router = express.Router();
const vehicleMaster = require("../controllers/vehicleMaster.controllers");

router.route("/vehicleMaster/new").post(vehicleMaster.create)
router.route("/vehicleMaster/new/:id").put(vehicleMaster.update)
router.route("/vehicleMaster/:driver_name").get(vehicleMaster.getVehicleMaster)
router.route("/vehicleMaster").get(vehicleMaster.getAll)



module.exports = router