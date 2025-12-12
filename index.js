const express = require("express");
const dbConfig = require("./dbConfig");
require("dotenv").config();
const router = require("./routes/index");
const cookieParser = require('cookie-parser')
const app = express();

app.use(express.json());
app.use(cookieParser())
dbConfig();
app.use(router);
 



app.listen(2222, () => {
  console.log("Server is running");
});
