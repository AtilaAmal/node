require("dotenv").config();
const express = require("express");
const jwt = require('jsonwebtoken');
const app = express();
require("./Database/db_connexion");
const cors = require("cors");
const router = require("./routes/router");

const port = 3001;


app.use(cors());
app.use(express.json());
app.use(router);
app.use("/api", router);

app.listen(port,()=>{
    console.log(`Server is running in port ${port}`)
})