const Admin = require("../models/login.models")
const Orders = require("../models/order.model")
const bcrypt = require('bcryptjs')



exports.create = (async (req, res) => {

    const orders = new Orders({
        store_name: req.body.store_name,
        route_id: req.body.route_id,
        number_of_items: req.body.number_of_items,
        number_of_boxes: req.body.number_of_boxes,
        vehicle_id: req.body.vehicle_id,
        status: req.body.status

    })

    const order = await Orders.create(orders)

    const password = await bcrypt.hash("password01*",10)
    console.log("p===", password);
    const user = {
      name : "vehicle",
      email : "vehicle@gmail.com",
      password: password,
      avatar: "",
      role: "vehicle",
    }
    console.log("users===", user);
    const admin = await Admin.create(order)
   res.status(201).json({
    success : true,
    order
   })
})