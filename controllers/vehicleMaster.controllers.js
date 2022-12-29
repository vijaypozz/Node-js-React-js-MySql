const VehicleMaster = require("../models/vehicleMaster.model");

exports.create =  (async(req, res) => {

    const vehicleMaster = new VehicleMaster({
        number: req.body.number,
        type: req.body.type,
        driver_name: req.body.driver_name,
        driver_number: req.body.driver_number,
        track_link: req.body.track_link,
        status: req.body.status || "Open",
    })
    console.log("vehiclemaster====", vehicleMaster);
    const createVehicleList = await VehicleMaster.Create(vehicleMaster)
console.log("createVehicleList====", createVehicleList);
    res.json({ 
        success: true,
        createVehicleList
    })

})

exports.update = (async(req, res) => {
    const id = req.params.id
    console.log("id==========", id);
    console.log("=======", req.body)
   const data = await VehicleMaster.Update(req.body,id)
//    console.log("data===========", data);
   res.json({
    sucess: true,
    message:"vehicle master updated"
   })
})

exports.getVehicleMaster = (async(req, res) => {
    const driver_name = req.params.driver_name
   const data = await VehicleMaster.getAllVehicleMaster(driver_name)
//    console.log("data===========", data);
   res.json({
    sucess: true,
    data
   })
})

exports.getAll = (async(req, res) => {
    const driver_name = req.query.driver_name
   const data = await VehicleMaster.getAllDirverUniqueName(driver_name)
//    console.log("data===========", data);
   res.json({
    sucess: true,
    data
   })
})