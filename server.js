const express = require("express");
const data = require("./data");
const app = express();
const cors = require("cors");
const env = require("dotenv")

env.config({path : "/config/config.env"})

app.use(cors());

// set port, listen for requests
const port = process.env.PORT || 6000
app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */
app.use(express.json());

/// simple server
app.get("/", (req, res) => {
  res.json({  message:"server connect to local"});
});

//checking localhost connection
app.listen(port, (error) => {
  if (error) {
    console.log("server not connected");
  } else {
    console.log(`server connected  to localhost ${port}`);
  }
});


//user route
const user = require("./routes/user.routes")
// login route
const login = require("./routes/login.routes")


app.use("/api", user);
app.use("/api",login)



