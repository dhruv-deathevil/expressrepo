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
const getAddWord = (req,res)=>{
    res.render("addword")
}

const postWord = (req,res)=>{
    
    di.SetWord(req.body.NewWord,req.body.Meaning)
// res.send("This is post word")
res.redirect("/")
}

module.exports = {
    getHome,
    getTest,
    postWord,
    getAddWord
}