var listOfWord =[{word:"apple",
                    meaning:"fruit"}]
class Dictionary{

    SetWord(words, meanings){
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