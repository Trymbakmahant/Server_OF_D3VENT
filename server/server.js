require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const connection = require("./db");
const EventDiscription = require("./routes/EventDiscription");
const CheckAd = require("./routes/CheckAd");
connection();

// middlewares
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());

app.use("/api/event", EventDiscription);
app.use("/api/checkAd", CheckAd);

const port = 8081;
app.listen(port, console.log(`Listening on port ${port}...`));
