const sql = require("./db")

const Orders = function (Orders) {
    this.store_name = Orders.store_name,
        this.route_id = Orders.route_id,
        this.number_of_items = Orders.number_of_items,
        this.number_of_boxes = Orders.number_of_boxes,
        this.vehicle_id = Orders.vehicle_id,
        this.status = Orders.status

}

Orders.create = ((values) => {
    return new Promise((resolve, reject) => {
        sql.query("INSERT INTO orders set ? ", values, (err, res) => {
            if (err) {
                reject(err)
            return;
            }
            console.log("res======", res);
            resolve({ id: res.insertId, ...values})
            return;
        })
    })

})

module.exports = Orders