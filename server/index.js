const express = require("express");
const dbConfig = require("./dbConfig");
require("dotenv").config();
const cors = require('cors')
const router = require("./routes/index");
const cookieParser = require('cookie-parser')
const app = express();

app.use(express.json());
app.use(cookieParser())
app.use(cors(
  {
  origin: 'http://localhost:5173', // Your React app's URL
  credentials: true, // Allow the browser to send/receive cookies
  optionsSuccessStatus: 200,
  }
))
dbConfig();
app.use(router);
 



app.listen(2222, () => {
  console.log("Server is running");
});
