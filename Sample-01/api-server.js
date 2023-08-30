const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const { auth } = require("express-oauth2-jwt-bearer");
const authConfig = require("./src/auth_config.json");
const bodyParser = require("body-parser")
require('dotenv').config(); // Load the .env variables

//auth0 management client
const ManagementClient = require("auth0").ManagementClient;

const app = express();

const port = process.env.API_PORT || 3001;
const appPort = process.env.SERVER_PORT || 3000;
const appOrigin = authConfig.appOrigin || `http://localhost:${appPort}`;

if (
  !authConfig.domain ||
  !authConfig.audience ||
  authConfig.audience === "YOUR_API_IDENTIFIER"
) {
  console.log(
    "Exiting: Please make sure that auth_config.json is in place and populated with valid domain and audience values"
  );

  process.exit();
}

app.use(morgan("dev"));
app.use(helmet());
app.use(cors({ origin: appOrigin }));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

var auth0 = new ManagementClient({
  domain: process.env.DOMAIN,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  audience: process.env.MGMNT_AUDIENCE,
  scope: 'read:users update:users',
});

const checkJwt = auth({
  audience: authConfig.audience,
  issuerBaseURL: `https://${authConfig.domain}/`,
  algorithms: ["RS256"],
});

app.get("/api/external", checkJwt, (req, res) => {
  // res.send({
  //   msg: "Your access token was successfully validated!",
  // });
  res.json({ message: `Hello ${req.auth.payload.sub}, your access token was successfully validated!` });

});

app.post('/api/external/nickname', checkJwt, (req, res) => {

  const data = JSON.stringify(req.body)
  console.log(data); 
  
  auth0.users.update({id: req.auth.payload.sub}, data, function (err, user) {
    if (err) {
      console.log(err)
      res.json({message: `Unable to successfully set new nickname! - Check tenant logs for possible errors`})
    } else {
      console.log(user)
      res.json({message: `Your new nickname ${user.nickname} has been set successfully!`})
    }
      
    })
  
  });

app.listen(port, () => console.log(`API Server listening on port ${port}`));
