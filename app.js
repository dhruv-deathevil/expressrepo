const express = require("express");
const app = express();
const bodyParser = require("body-parser")

//user designed import
const route = require("./router")

app.set("view engine","ejs")
//use router
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(route)




//Listening the port
const port = 3000;
app.listen(port,()=>{console.log("I am listening to port 3000 ")})