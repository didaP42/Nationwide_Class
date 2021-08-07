
//Function Declaration
// function sayHello () {
//     console.log('hello')
// }

// sayHello() //Invoking a function

// //Function expression -  most commonly used

// const sayHelloJr = function () {
//   console.log('hello from jr')
// }

// sayHelloJr() //invocation remains the same




//const ES6 = `JavaScript Reborn`



// const sayHello = () => {
//     console.log('hello')
// }

// sayHello()



//printSum

// const printSum = () => {
//     console.log(10 + 10)

// }

// printSum()


// const printTriangle = () => {
//     console.log('#')
//     console.log('##')
//     console.log('###')
//     console.log('####')
//     console.log('#####')
// }

// printTriangle()


// const printTriangle = (numRows) => {
//     let f = '#'
//     for(let i = 0; i < numRows; i++){
//         console.log(f)
//         f += '#'

//     }
// }

// printTriangle(22)
// console.log('****************')
// printTriangle(3)
// console.log('****************')
// printTriangle(13)
// console.log('****************')

// /* parameters & args
// var indentifier =  value;
// parameter =  arg

// */

// const add = (num1, num2) => {
//     return num1 + num2

//     console.log(add(8, 7))
// }




// const getLastElement = (arr) => {
//    console.log(arr[arr.length - 1]);
// }

// getLastElement([1, 2, 3])
// getLastElement([4, 7, 5])

/*
const arr= [1, 2, 3]
*/


//The whole purpose of returning a value is so it can be used later


// const calculateArea = (length, width)
//    => {
   
//         return length * width
//     }

// const area = calculateArea(8, 9)

// console.log('area is:', area)


///recursion

// const areAllOdd = (arr) => {
//     if(arr.length <= 0){
//       console.log('Boy thats an empty list');
//       return;
//     }
//     if(arr[0] % 2 === 0){
//       console.log('not odd')
//       arr.shift()
//       return areAllOdd(arr)
//     } else {
//       console.log('this list contains an odd number')
//     }
//   }

//   areAllOdd([2,4,6,8])
// //


const arthursHouse = {
    floors: 'hardwood',
    ceilings: 'tray ceilings'
   }
   const taraleesHouse = arthursHouse 
   arthursHouse === taraleesHouse
   const jadasHouse = {
      floors: 'hardwood',
        ceilings: 'tray ceilings'
   }
   arthursHouse.deck = 'awesome'
   arthursHouse
   taraleesHouse
   jadasHouse