// Making an app to let people in the club

// Bouncer
// Is the user over 21
// If user age is >=21 then they can enter and drink
// If user age is <18 then the bouncer is coming for you
// If user age >=18 <21 they can enter however no drinks allowed

// If ( condition to be tested){
    //work to be done
// }


// var userAge = 19;

// if(userAge >= 21){
//     console.log("Welcome. Feel free to have a drink!!!")
// }
// else if(userAge >=18 && userAge <21){
//     console.log("Please come in, but NO DRINKING!!!")
// }
// else{
//     console.log("Bouncer calls your parents!!")
// }
     
// >< greater than less than
// && and
// || or
// * multiplication
// / division
// % modulo gives the remainder

// var a = 10;
// var b = 3;

// consule.log(a % b)

// write a program to tell whether a number is odd or even

var numberToBeTested = 2

if (numberToBeTested % 2 == 0){
    console.log("Your number is even");
} 
else {
    console.log("Your number is odd");
}

// for loop from 0-50

for(var counter = 0; counter <= 50; counter++){

  if(counter % 2 == 0){
      console.log(counter =  " This number is even")
}
else{
    console.log( counter + " This number is odd")


}
}