const sql = require("./db")

const sendCreate = (values) => {

    return new Promise((resolve, reject) => {

        sql.query(`INSERT INTO otp set ?`, values, (err, res) => {

            if (err) {
                reject(err)
            }
            resolve({ id: res.insertId, ...values })

        })

    })
}

const getOtpStatus = (mobileNum) => {

    return new Promise((resolve, reject) => {

        sql.query(`SELECT * from otp where mobile = ? and status="send"`, [mobileNum], (err, res) => {

            if (err) {
                reject(err)
            }
            resolve({ id: res.insertId, ...values })

        })

    })
}
const verifyOTP = (mobileNum, OTP) => {

    return new Promise((resolve, reject) => {
        sql.query(`SELECT * from otp where mobile = ? and status="send"and otp = ? ORDER BY ID DESC LIMIT 1`, [mobileNum], (err, res) => {

            if (err) {
                reject(err)
            }
            resolve(values)
        })
    })
}


module.exports = { sendCreate, getOtpStatus, verifyOTP };