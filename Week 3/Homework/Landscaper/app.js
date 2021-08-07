// //console.log("Test")
// //* Start
//--------------teeth-----------------------------------------------//
var account = 0;

alert("Welcome to the Jungle Landscaper")
// for loop for teeth
for (let counter = 1; counter <= 5; counter++){
    
    alert('Your Balance is $' + account + '. Using just your teeth you can spend the day cutting lawns and make $1. You can do this as much as you want')
    let userInput = prompt("Type 'teeth' to cut the lawn and 'quit' to quit playing.")
   
    if (userInput.toLowerCase() === 'teeth'){
            account += 1
    }
    else if(userInput.toLowerCase()==='quit'){
            break;
    }
}
alert("Congrats you now have $" + account + ".")
alert("Now, your tool has been upgraded to rusty scissors!")
alert("This will cost you $5!")
// userInput = prompt("you may now upgrade your tool to Rusty Scissors \n would you like to upgrade")
// if( userInput.toLowerCase() === 'yes'){
    account = account - 5
//}
//--------------Rusty scissors-----------------------------------------------//
for (let counter = 1; counter <= 5; counter++){
    
    alert('Your Balance is $' + account + '. Using your rusty scissors you can spend the day cutting lawns and make $5. You can do this as much as you want')
    let userInput = prompt("Type 'rusty scissors' to cut the lawn  and 'quit' to quit playing.")
   
    if (userInput.toLowerCase() === 'rusty scissors'){
            account += 5
    }
    else if(userInput.toLowerCase()==='quit'){
            break;
    }
}
alert("Congrats you now have $" + account + ".")
alert("Now, your tool has been upgraded to old-timey!")
alert("This will cost you $25!")
//userInput = prompt("you may now upgrade your tool to old-timey \n would you like to upgrade ?")
//if( userInput.toLowerCase() === 'yes'){
    account = account - 25
//}
//---------------------Old-temely-----------------------------------------//

for(let counter =0; counter <=4; counter++){
    alert('Your Balance is $' + account + '. Using the old-timey push lawnmower, you can spend the day cutting lawns and make $50. You can do this as much as you want.')
    let userInput = prompt("Type 'old-timey' to cut the lawn  and 'quit' to quit playing.")
  
    if (userInput.toLowerCase() === 'old-timey'){
        account += 50
}
else if(userInput.toLowerCase()==='quit'){
        break;
}
}
alert("Congrats you now have $" + account + ".")
alert("Now, your tool has been upgraded to a fancy battery-powered lawnmower!")
alert("This will cost you $250!")
// userInput = prompt("you may now upgrade your tool to a fancy battery-powered lawnmower  \n would you like to upgrade ?")
// if( userInput.toLowerCase() === 'yes'){
    account = account - 250
//}

//_--------------------Battery-powered----------------------------------------/
for(let counter =0; counter <=4; counter++){
    alert('Your Balance is $' + account + '. Using the fancy battery-powered lawnmower, you can spend the day cutting lawns and make $100. You can do this as much as you want.')
    let userInput = prompt("Type 'battery-powered lawnmower' to cut the lawn  and 'quit' to quit playing.")
    if (userInput.toLowerCase() === 'battery-powered lawnmower'){
        account += 100
}
else if(userInput.toLowerCase()==='quit'){
        break;
}
}
alert("Congrats you now have $" + account + ".")
alert("Now, you will be able to hire a team of starving students for $500!")
// userInput = prompt("At any point, if you are currently using the fancy battery-powered lawnmower, you can hire a team of starving students for $500.   \n would you like to upgrade ?")
// if( userInput.toLowerCase() === 'yes'){
    account = account - 500
//}
//--------------------------students----------------------------------
for(let counter =0; counter <=3; counter++){
    alert('Your Balance is $' + account + '. Using the team of starving students, you can spend the day cutting lawns and make $250. You can do this as much as you want.')
    let userInput = prompt("Type 'students' to cut the lawn  and 'quit' to quit playing.")
    if (userInput.toLowerCase() === 'students'){
        account += 250
}
else if(userInput.toLowerCase()==='quit'){
        break;
}
}
alert("Congrats you now have $" + account + ", and a team of 500. You have WON the game!")