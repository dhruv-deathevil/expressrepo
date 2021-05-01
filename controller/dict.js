//import model

const Dictionary = require("../model/dictModel")
const di = new Dictionary()

const getHome = (req,res)=>{
    const result = Dictionary.FetchAll()
    res.send(result)

}

const getTest = (req,res)=>{
    res.send("This is test")

}

const postWord = (req,res)=>{
    di.SetWord("apple","fruit")
res.send("This is post word")
}

module.exports = {
    getHome,
    getTest,
    postWord
}