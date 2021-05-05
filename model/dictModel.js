const db = require("../database")

var listOfWord =[{word:"apple",
                    meaning:"fruit"}]
class Dictionary{

    SetWord(words, meanings){
        try{
            const result = db.promise().query("Select * from DictList").then((result)=>{
                console.log("Database worked")
                console.log(result[0])
            })
            
        }
        catch(err){
            console.log(err)
        }
        
        const wordAndMeaning = {word:words, meaning:meanings}
        console.log(wordAndMeaning)
        listOfWord.push(wordAndMeaning)
    }
    static FetchAll(){
        if(listOfWord.length == 0){
            return "No any words"
        }
        return listOfWord
    }
}

module.exports = Dictionary