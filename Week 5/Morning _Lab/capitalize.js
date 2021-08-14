const capitalize = (string)=>{
    // console.log(typeof String)
    if (typeof string === "string"){
       return string.charAt(0).toUpperCase() + string.slice(1);

    } else {
          return false
        
    }

}

// console.log(capitalize(66))
module.exports = capitalize