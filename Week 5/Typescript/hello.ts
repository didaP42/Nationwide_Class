function sayHello() {
    console.log("hello! This syntax seems familiar....");

}

sayHello();

function sayPointsScored(points: number): void {

    let lebronJamesMutiplier = 1000;
  
    let pointsScored = points * lebronJamesMutiplier;
  
    let proclamation = `Lebron James scored ${pointsScored} points!`;
  
    console.log(proclamation);
  
  }
  
  
  
  
  let pointsScored = 9000;
  
  
  
  
  sayPointsScored(pointsScored);