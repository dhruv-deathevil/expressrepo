const express = require("express")
const router = express.Router()

//import user designed model
const dictController= require("./controller/dict")

//get request
router.get("/",dictController.getHome)
router.get("/test",dictController.getTest)
//router.get("/",(req,res)=>{})

//post request
router.post("/add",dictController.postWord)

module.exports = router
