var cleanString = (str)=>{
    return str
    .replace(/[^\w]/g,"")//removes white spaces
    .toLowerCase()//makes everything lowerCase
    .split("")//turns sting into an array so we can sort it
    .sort()//sorts the array
    .join("");//turns the array back into a string
    
    }
    
    var anagrams = (stringA, stringB)=>{
        console.log(cleanString(stringA))
        console.log(cleanString(stringB))
        if(cleanString(stringA) === cleanString(stringB)) {
            console.log("These are anagrams")
            return true
        }
        else{
            console.log("These are not anagrams")
            return false
        }
    }
    
    anagrams("abc","cba")

    module.exports = anagrams;
