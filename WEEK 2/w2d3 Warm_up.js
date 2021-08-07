
//SHOPPING LIST

// var shoppingList = ["cool ranch doritos","kings hawaiian sweet bread",
//     "peanut butter oreos",
//     "fruit loops cereal"
//   ];

//   const count = shoppingList.push("Hendricks Gin");
//   console.log(count);
//   console.log(shoppingList);

//   shoppingList.push("Hendricks gin");
//   console.log(shoppingList);



//USE THE FORCE YODA

// var yoda = ["try", "no", "is", "there", "not", "do", "or", "do"];
// console.log(yoda, yoda)

// var reversed = yoda.reverse();
// console.log('reversed:', reversed);


// //waitlist

// var waitList = [
//     "Chance the Rapper",
//     "Khalid",
//     "Tay-Tay",
//     "Barry Manilow",
//     "Piko Taro"
// ];
// var nowServing = ""


reverseString = () => {
    var new_str = ""
    function reverse(string) {
      for (var i = string.length - 1; i >= 0; i--) {
        new_str += string[i];
      }
      return new_str;
    }
    
    console.log(reverse('jag testar'));
    var string = 'ratset gaj';
    console.log(new_str === string);
  };