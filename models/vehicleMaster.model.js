const sql = require("./db")


const VehicleMaster = function (VehicleMaster) {
    this.number = VehicleMaster.number,
        this.type = VehicleMaster.type,
        this.driver_name = VehicleMaster.driver_name,
        this.driver_number = VehicleMaster.driver_number
    this.track_link = VehicleMaster.track_link,
        this.status = VehicleMaster.status
}

VehicleMaster.Create = ((values) => {
    return new Promise((resolve, reject) => {
        sql.query("INSERT INTO vehicle_master set ? ", values, (err, res) => {
            if (err) {
                reject(err)
            }
            resolve({ id: res.insertId, ...values})
        })
    })

})

VehicleMaster.update = ((obj,values) => {
    return new Promise((resolve, reject) => {
        sql.query("UPDATE vehicle_master set  ? WHERE id = ? ", [obj,values], (err, res) => {
            if (err) {
                reject(err)
            }
            resolve(res)
        })
    })

})


VehicleMaster.getAllVehicleMaster = ((driver_name) => {
    return new Promise((resolve, reject) => {
        sql.query("Select * from vehicle_master where driver_name = ?",driver_name, (err, res) => {
            if (err) {
                reject(err)
            }
            resolve(res)
        })
    })

})
VehicleMaster.getAllDirverUniqueName = ((driver_name) => {
//   Asending order
 let query = `SELECT * FROM vehicle_master ORDER BY driver_name ASC`
  

    return new Promise((resolve, reject) => {
        sql.query(query, driver_name, (err, res) => {
            if (err) {
                reject(err)
            }
            resolve(res)
        })
    })

})

module.exports = VehicleMaster