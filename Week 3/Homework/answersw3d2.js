////////////////////////////////
// Easy Going
////////////////////////////////
for (var counter = 1; counter <= 20; counter++) {
    console.log(counter)
}

////////////////////////////////
// Get Even
////////////////////////////////
for (var counter = 0; counter <= 200; counter +=2){
    console.log(counter)
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////
for (var counter = 1; counter <= 100; counter++) {
if(counter%3 ==0 && counter %5 == 0){
        console.log('fizzbuzz');
    }
     else if(counter%3 ==0){
          console.log('fizz')
      }
      else if(counter%5 ==0){
          console.log('buzz') 
      }
      else
      {
        console.log(counter)      
      }
}

////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
plantee[2] = 5001
console.log(plantee[2])
wolfy.splice(3, 1, "Gotham City")
console.log(wolfy)
dart.push("Hawkins")
console.log(dart)
wolfy.fill("Gameboy",1,0)
console.log(wolfy)

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
for (let i of ninjaTurtles) {
    console.log(i.toUpperCase())
}

////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 
'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 
'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 
'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 
'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies.indexOf("Titanic"))
favMovies.sort()
console.log(favMovies)
favMovies.pop()
console.log(favMovies)
favMovies.push("Guardians of the Galaxy")
console.log(favMovies)
favMovies.reverse()
console.log(favMovies)
favMovies.shift(11)
console.log(favMovies)
favMovies.unshift()
console.log(favMovies)
const djangoIndex = favMovies.indexOf("Django Unchained")
favMovies.splice(djangoIndex, 0, "Avatar")
console.log(favMovies)
const halfFavMovies = Math.ceil(favMovies.length / 2);
const lastHalfFavMovies = favMovies.slice(-halfFavMovies)
console.log(lastHalfFavMovies)

////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
whereIsWaldo.splice([1], 1)
console.log(whereIsWaldo)
whereIsWaldo[1][2] = "No One"
console.log(whereIsWaldo)
console.log(whereIsWaldo[2][1][1])

////////////////////////////////
//  Excited Kitten
////////////////////////////////
for (var counter = 1; counter < 21; counter++) {
    if (counter % 2 == 0) {
        console.log("...human...why you taking pictures of me?...")
    } else {
        console.log(" Love me, pet me! HSSSSSS!")
    }
}

////////////////////////////////
//  Find the Median
////////////////////////////////
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,
    12,17,12,71,18,15,12];
const median = arr => {
    const middleOf = Math.floor(arr.length / 2), 
    nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? console.log(nums[middleOf]) : console.log((nums[middleOf - 1] + nums[middleOf]) / 2);
};
median(nums)
