

// //var object = {}
// // curley braces define the object 
// // var/ const define the object 
// // Me Me Me 
// // 1. Create an empty object called me.

// // variable for our me object
// const me = {
//     firstName: "Dida",
//     lastName: " Powell",
//     age:150,
//     email: "didapowell@gmail.com"
// }

// console.log(me)

// //3. Using dot notation access the firstName property in your object.

// console.log(firstName)

// //4. Without writing directly into the object, update the value of age to be 1000 years old
// me.Age = 1000

// //5. Using dot notation, verify that age  has been updated.
// console.log(me.Age)

// //6. Add a key to this object called: "place of residence" and give it a value of your hometown. Note that the key has spaces,
// //therefore you cannot use dot notation.
// me["place of residence"] = "Columbus"

// //7. Access the value of "place of residence"
// console.log(me["place of residence"])

// // variable to hole the string "Greetings"
// const fancyGreetings = "Greetings, "
// // String Concatanation using the object that we created
// console.log(fancyGreetings + me.firstName + me.lastName)


// //Slimer


// const monster = {
//     name: "Slimer",
//     color: "greenish",
//     type: "plasma or ghost or something"
//  };

//  console.log(monster.name)
//  monster.type = 'creature',
//  monster.age = 6
//  console.log(monster.type)
//  console.log(monster.age)




// // Using objects, create models  and have them interact


let adventurer = { 
    name: "Tesla",
    medicine: "Pepto Bismol",
    hitpoints: 5
}
let ogre ={
    name: "Ogre",
    hitpoints: 3
}
while(adventurer.hitpoints > 0 || ogre.hitpoints > 0) {
    console.log("Adventurer ",adventurer.hitpoints)
    console.log("Ogre ", ogre.hitpoints)
    adventurer.hitpoints -=1 // is the same as adventurer.hitpoints = adventurer.hitpoints -1
    if(adventurer.hitpoints === 0){
        console.log("Game Over!!")
        break;
    }
}
while(adventurer.hitpoints > 0 || ogre.hitpoints > 0){
    //* creates random number
    let randNUm = Math.floor(Math.random() * 2)
    console.log(randNUm)
    //* 0 === adventurer | 1 === ogre
    if (randNUm === 0){
        ogre.hitpoints -= 1;
        if (ogre.hitpoints === 0){
            console.log(`Adventurer WINS!`);
            break;
        }
    } else if (randNUm === 1) {
        adventurer.hitpoints -= 1;
        if (adventurer.hitpoints === 0){
            console.log(`Ogre WINS!`);
            break;
        }
    }
    console.log(`Adventurer Points: ${adventurer.hitpoints}`)
    console.log(`Ogre Points: ${ogre.hitpoints}`)
 
}

//Cat Combinator

//Mama Cat
const cat1 = {
   name: "Keiko",
   breed: "MaineCoon",
   age: 3
}

console.log(cat1.name)
console.log(cat1.breed)
console.log(cat1.age)
console.log("_________")

   //Papa Cat
const cat2 = {
    name: "Tesla",
    breed: "Bengal",
    age: 2
   
}
console.log(cat2.name)
console.log(cat2.breed)
console.log(cat2.age)
console.log("_________")

 //Combine Cats!
//  
//  }

 let combineCats = (mama, papa) =>{
     return {
         name: mama.name + papa.name,
         age: 1,
         breed: mama.breed + "-" + papa.breed
     }
    

 }

 console.log(combineCats(cat1, cat2))
//Two Levels

//  combineCats(cat1, cat2)


// combineCats({ name: "Keiko", age: 3, breed: "Maine Coon" }, { name: "Tesla", 
//  age: 2, breed: "Bengal" })


 //Cat Brain Bender



 console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
 //Three levels