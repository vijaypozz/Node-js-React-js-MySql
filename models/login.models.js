const sql = require("./db")

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Admin = function (Admin) {
    this.email = Admin.email
    this.password = Admin.password
}


Admin.create = ((admin) => {
    return new Promise((resolve, reject) => {
        sql.query(`INSERT INTO admin set ?`, admin, (err, res) => {

            if (err) {
                reject(err)
                return
            }
            console.log(res, "====");
            resolve(res)
            return

        })
    })
});


//Compare user password
Admin.comparePassword = async function (enteredPassword, pass) {
    return await bcrypt.compare(enteredPassword, pass)
}

//Return JWT token
Admin.getJwtToken = function (email) {
    console.log(process.env.JWT_SECRET)
    return jwt.sign({ email: email }, process.env.JWT_SECRET,{
        expiresIn: "120s"
    })
}

//get the admin table values
Admin.getAdminDetails = (() => {
    return new Promise((resolve, rejected) => {

        sql.query(`SELECT * from admin`, (err, res) => {
            if (err) {
                rejected(err)
            }
            resolve(res)
            return
        })
    })
})

//find the email using using to get ALL the admin table values
Admin.findByEmail = (email) => {
    console.log(email);
    return new Promise((resolve, reject) => {
      sql.query(`SELECT * FROM admin WHERE email = ?`,[email], (err, res) => {
        if (err) {
          return reject(err);
        }
        console.log(res);
        if(res.length == 0){
          resolve(null);
        }
        resolve(res);
      });
    })
  }

module.exports = Admin














