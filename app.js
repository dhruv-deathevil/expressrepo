const express = require("express");
const app = express();

//user designed import
const route = require("./router")


//use router
app.use(route)



//Listening the port
const port = 3000;
app.listen(port,()=>{console.log("I am listening to port 3000 ")})