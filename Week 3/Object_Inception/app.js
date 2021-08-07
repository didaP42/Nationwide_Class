// objects are data sets
// we access elements in objects using dot notation


// //give the entire object
// console.log(adventurer)
// //give the data at the key of belongings
// console.log(adventurer.belongings)
// //give me the sword
// console.log(adventurer.belongings[0])

// iterating over an array

// var colors = ["black","white","purple"]

// for(var counter = 0; counter < colors.length-1; counter++){

//    console.log(colors[counter])

// }

// const adventurer = {
//     name: "Timothy",
//     hitpoints: 10,
//     belongings : ['Sword','Potion','Tums'],
//     companion: {
//         name: "Velma",
//         type: "Bat"
//     }
// }
// // give Velma a companion
// adventurer.companion.companionsCompanion = {
//     name:"Bruce",
//     type: "Parasite",
//     belongings : ["Scuba Tank", "Joe Rogan","Health Insurance"]
// }

// console.log(adventurer.companion.companionsCompanion.belongings[2]
// // access the companion key
// console.log(adventurer.companion)
// access the name of the companion
// console.log(adventurer.companion.name)
// access the type of the companion type
// console.log(adventurer.companion.type)

// access the last element in the array
//     console.log(adventurer.belongings[adventurer.belongings.length-1])

//     use .push add "Vogue" to the belongings array
//     adventurer.belongings.push("Vogue")
//     console.log(adventurer.belongings)

//     write for loop that prints all elements of the belongings array

//     for(var counter = 0; counter < adventurer.belongings.length; counter++){
//         console.log(adventurer.belongings[counter])



// const adventurer = {
//     name: "Timothy",
//     hitpoints: 10,
//     belongings : ['Sword','Potion','Tums'],
//     companion: {
//         name: "Velma",
//         type: "Bat"
//     }
// }
// // change name to susan
// adventurer.companion.name = "Susan"
// // add a companion
// adventurer.companionTwo = {
//     name: "Buzz",
//     type: "Insect"
// }
// // console the outcome
// console.log(adventurer)





// var  movies = [
//     {name : "Titantic"},
//     {name: "Space Jam"},
//     {name: "Trollz"}
// ]
// // access the object in the array
// console.log(movies[2].name)
// // looping over an array and getting the names
// for(var counter = 0; counter < movies.length;counter++){
//     console.log(movies[counter].name)
// }


// //for in loop to print the keys

// for (let keys in movies){
//     console.log(keys)
// }

// //for in loop to print the values
// for(let keys in movies){
//     console.log(movies[keys])
// }

// console.log(Object.keys{movies})

const movie = { title: "Eraserhead", director: "David Lynch", year: 1978}

for (let keys in movie){
    console.log(keys)
}

for (let keys in movie){
    console.log(movie[keys])
}