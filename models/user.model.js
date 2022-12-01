const sql = require("./db")

const User = function (User) {
  this.id = User.id
  this.name = User.name
  this.email = User.email
  this.password = User.password
}

User.Create = (newuser) => {
  return new Promise((resolve, reject) => {
    sql.query(`INSERT INTO user SET ?`, newuser, (err, res) => {
      if (err) {
        reject(err)
        return
      }
      resolve(newuser)
    })
  })
}

//get All users
User.getAllUser = () => {
  let query = `SELECT * FROM user`;
  return new Promise(function (resolve, reject) {
    sql.query(query, (err, res) => {
      if (err) {
        reject(err)
      }
      resolve(res)
      return
    })
  }
  )
}

//find the user email id
User.findByEmail = (email) => {
  return new Promise((resolve, reject) => {
    sql.query(`SELECT * FROM user WHERE email = ?`, [email], (err, res) => {
      // console.log("====ressss",res);
      if (err) {
        return reject(err);
      }
      if (res.length == 0) {
        resolve(null);
      }
      resolve(res);
    });
  })
}

//get the single user
User.getsingleId = ((id) => {
  return new Promise((resolve, reject) => {
    sql.query(`select * FROM user where id=?`, [id], (err, res) => {
      if (err) {
        reject(null)
        return
      }
      resolve(res[0])
      return
    })
  })
})

//update the user details
User.updateUser = ((obj, id) => {
  return new Promise((resolve, reject) => {
    sql.query(`UPDATE user SET ? WHERE id = ?`, [obj, id], (err, res) => {
      if (err) {
        reject(err)
        return
      }
      resolve(res)
      return
    })
  })
})

//delete the user
User.deleteUser = (id,) => {
  return new Promise((resolve, reject) => {
    sql.query(`DELETE FROM user WHERE id = ?`, [id], (err, res) => {
      if (err) {
        reject(err)
        return
      }
      resolve(res)
      return
    })
  })
}


module.exports = User