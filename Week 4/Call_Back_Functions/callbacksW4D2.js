// const foo = (param, param2) => {
//     param(param2);
// }

// const bar = (param) => {
//     console.log(param);
// }

// foo(bar, 'hi');


// const foo = (param, param2) => {
//     param(param2, 'hello');
// }

// const bar = (param, param2) => {
//     console.log(param2);
// }

// foo(bar, 'hi');

// const baz = (param) => {
//     console.log(param.toUpperCase());

//     foo(baz, 'hello')
// }


// //Electric Mixer

// const electricMixer = (attachment) => {
//     console.log("This mixer is now: " + attachment());
//   }

//   electricMixer(() => {
//     return "spiralizing";
//   });

//   const spiralizer = () => {
//     return "spiralizing";
//   }
  
//   electricMixer(spiralizer);

//   const slicerDicer = () => {
//     return "slicin' and dicin'";
//   }
  
//   electricMixer(spiralizer);
//   electricMixer(slicerDicer);


//   //functionName(CALLBACK, MILLISECONDS)

//   setTimeout(() => {
//     console.log('hi');
//   }, 2000);

//   setInterval(() => {
//     console.log('hi');
//   }, 2000);

//   //Food for thought: Give a real world example of when you would use setTimeout or setInterval:
//   //with a setTimeout, it would be used to delay or time a function or block of code to execute
//   //with setInterval function can be used to automate a task using a regular time based trigger.


// //   Follow the following steps:

// // Create a function called wordReverse that reverses a string.
// // Create a function called toUpperCase that capitalizes every letter in a string.
// // Write a function, called repMaster, that accepts two arguments, input and a function. 
// // Input should be able to be used with the function. The function used as an argument must return a string. 
// // repMaster should take the result of the string, 
// // passed as an argument to the argument function, and return this result with ' proves that I am the rep MASTER!' 
// // concatenated to it.

// repMaster("Never give your heart to a blockhead", wordReverse);
// repMaster("I finished this practice", toUpperCase);