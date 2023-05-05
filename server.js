const express = require("express");
const app = express();
const data = require("./data");
const cors = require("cors");
const env = require("dotenv")
const csvParser = require('csv-parser')
const fs = require('fs')


//google url create file(signin screen)
const { googleAuthorize } = require("./controllers/login.controllers");
const { GoogleOAuth } = require("./services/GoogleOAuth");


env.config({ path: "config/config.env" })

app.use(cors());
// set port, listen for requests
const port = process.env.PORT || 7000
app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */
app.use(express.json());

/// simple server
app.get("/", async (req, res) => {
  const results = [];
   fs.createReadStream('./RCF Revised Contact Number data.csv')
  .pipe(csvParser())
  .on('data', (data) => results.push(data))
  .on('end', async () => {
  let notmatchedlist = await results.filter(
    (mobile) => !results.some((correctmobileno) => correctmobileno.correct_contact_no === mobile.mobile_no)
  );
  console.log("notmatchedlist==", notmatchedlist);
  //  await  reply.send(notmatchedlist)

  });
  res.json({ message: "server connect to local" ,f:notmatchedlist});
});

app.get("/signin", async (req, res) => {
  // Url generate Fun
  const details = await googleAuthorize();
  res.redirect(details.url);
  // res.send('<a href="/api/login">Authenticate with Google</a>');
  console.log("-----------------------", details);
});

// retuen call back url frontend
app.post("/authCallback", async (req, res) => {
  try {
    const client = GoogleOAuth({
      clientId: "",
      clientSecret: "",
      redirectionUrl: "http://localhost:3000/",
    });
    // here get the gl code 
    const code = req.body.code; 

    const token = await client.getAccessToken(code);

    // send the code to token
    console.log("new token---------", token);
    // res.send(token)
    res.status(200).json({
      message: "success",
      token
    })
    // const userInfo = decodeWithoutVerifying(token?.id_token);

    // if (!userInfo.email) {
    //   throw new Error(201, "Something went wrong, please contact admin.");
    // }

    // const email = userInfo.email.toLowerCase();
    // to verify if the email domain belongs to DesignCafe
    // await domainVerification(email);

    // const user = await prisma.dc_users.findFirst({
    //   where: { designcafeemail: { contains: email, mode: "insensitive" } },
    //   include: {
    //     profile: true,


    // const loginToken = sign(
    //   {
    //     id: user?.userid,
    //     designCafeEmail: email,
    //     role: user?.profile?.profile_name,
    //     permissions: createPermissionsJson(user?.profile?.permissions),
    //   },
    //   process.env.jwtSecretAccessToken,
    //   process.env.jwtExpiryAccessToken
    // );

    // const refreshToken = sign(
    //   {
    //     id: user?.userid,
    //     designCafeEmail: email,
    //     role: user?.profile?.profile_name,
    //   },
    //   process.env.jwtSecretRefreshToken,
    //   process.env.jwtExpiryRefreshToken
    // );

    // await prisma.dc_users.update({
    //   where: { userid: user?.userid },
    //   data: {
    //     lastlogindate: new Date(),
    //     refreshtoken: refreshToken,
    //   },
    // });
    // const firstName = user.firstname ? user.firstname.trim() : "";
    // const middleName = user.middlename ? user.middlename.trim() : "";
    // const lastName = user.lastname ? user.lastname.trim() : "";
    // const userName = `${firstName}${
    //   middleName ? " " + middleName + " " : " "
    // }${lastName}`;
    // const data = {
    //   loginToken,
    //   refreshToken,
    //   role: user?.profile?.profile_name,
    //   roleId: user?.profileid,
    //   userName,
    //   email: user?.designcafeemail,
    // };

    // return { code: 200, message: "success", data };
  } catch (error) {
    console.error(error);
    throw error;
  }
});

app.get("/email", async (req, res) => {
  const {email}=req.body
  Emailservice(email,res)
})

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
const vehicleMaster = require("./routes/vehicleMaster.routes")
const order = require("./routes/order.routes");
const otp = require("./routes/otp.routes");
const Emailservice = require("./utils/emailService");




app.use("/api", user);
app.use("/api", vehicleMaster)
app.use("/api", order)


// V2 check
app.use("/api", login)

//new v2 otp login
app.use("/api", otp)

