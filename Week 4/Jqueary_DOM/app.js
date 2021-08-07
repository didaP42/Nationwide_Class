
//creating an h2
const addh2 = () => {    
    let h2 = $('<h2>').text("Just getting started")
    $('body').append(h2)
};

//calling addh2 function
const changeH2 = () => {
    let h2 = $('<h2>').text("Getting warmed up")
    $('body').append(h2)
}
addh2()
changeH2()

var generateSquares = (amountOfSquares) => {
    // loop to do an action for so many times
    for(var counter = 1; counter <= amountOfSquares; counter++){
        // create the square
      let square = $('<div>').addClass('square')
    //   add css to the squares
     square.css('background-color', rgbGenerator() )
      // append the square to the body
      $('body').append(square)
      }
    }
    var rgbGenerator = ()=> {
        var red =  Math.floor(Math.random() * 256) 
        var blue = Math.floor(Math.random() * 256) 
        var green = Math.floor(Math.random() * 256) 
        return "rgb(" + red + "," + green + "," + blue + ")"
    }
    generateSquares(152)