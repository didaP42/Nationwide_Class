// var colors = ["Blue","Red","Yellow","Green"]

// //looping through an array
// for(var counter = 0;counter < colors.length; counter++){
//     console.log(colors[counter])

// }

// // .map
// //takes a function as a callback and does that function to 
// //each items in the array
// colors.map(itemsInTheArray)=>;{
//     console.log(itemsInTheArray + "Hello")

// }

// setTimeout(
//     ()=>{
//         console.log("hello")
//             },   4000)

// var randomFunction=(thing1,thing2)=>{



// callback functions are functions that are passed as an 
// argument to another function\

// var cameraFunction =(callBackFunction)=> {
//     console.log("the camera")
// }


// var lensOne =()=>{
//     return " is now using the macro lens"
// }
// var lensTwo =()=>{
//     return " is now using the super macro lens"
// }

// cameraFunction(lensOne())


//write a function that caitalizes a word

var capitalize = (word)=>{
 var capsWord = word[0].toUpperCase()
console.log(capsWord)
}

var excitedWords =(word)=> {
    var happyWord = word + "!"
    console.log(happyWord)
}

capitalize("dog")

excitedWords("Sup")