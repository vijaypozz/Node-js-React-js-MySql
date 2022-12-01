const catchError = require("../middlewares/catchError");
const User = require("../models/user.model");
let Validator = require("validatorjs");
const ErrorHandling = require("../utils/ErrorHandler");
const bcrypt = require("bcryptjs")

exports.create = (async (req, res, next) => {

  try {

    const password = await bcrypt.hash(req.body.password, 10)
    const user = new User({
      id: req.body.id,
      name: req.body.name,
      email: req.body.email,
      password: password,
    });

    // const checkEmail = await User.findByEmail(req.body.email)
    // if(checkEmail){ 
    //   return next(new ErrorHandling("email already exist",400))
    // }

    //create functions
    const data = User.Create(user)

    //sending data 
    res.status(201).json({
      succes: true,
      message: "User Created Successfully"
    })

  } catch (error) {
    res.status(401).json({
      message: "something went Worng"
    })
  }
});

//get the usertable all values
exports.getName = (async (req, res) => {
  const userDetail = await User.getAllUser()
  const {password,id,...data} = userDetail

  res.status(200).json({
    succes: true,
    data
  })
});

//get single user values
exports.getUserSelectedById = (async (req, res) => {
const user_id = req.params.id
  const userDetails = await User.getsingleId(user_id)
  const {password,id,...data} = userDetails
  res.status(200).json({
    succes: true,
    data
  })

})

//update the list fields

exports.update = (async (req, res, next) => {

  try {
    let user_id = req.params.id
    const userId = await User.getsingleId(user_id)

    if (!userId) {
      return next(new ErrorHandling(`The entered Vendor is invalid`, 400))
    }

    //   const {name,email,password,...rest} = req.body;
    // const keyss = Object.keys(rest)

    // keyss.map(e => {
    //   return next(new ErrorHandling(`Please remove unwanted fields ${e} from request body`, 400))
    // })  

    const data = await User.updateUser(req.body, user_id)
    res.status(201).json({
      succes: true,
      message: "user updated succesfully"
    })

  } catch (error) {
    res.status(401).json({ message: "something error" })
  }
})


exports.delete = (async (req, res, next) => {
  const id = req.params.id
  const detail = User.getsingleId(id)

  if (!detail) {
    return next(new ErrorHandling(`The given id is invalid`, 400))
  }
  const data = await User.deleteUser(id)

  res.status(200).json({
    success: true,
    message: "user detail deleted successfully!"

  })
})