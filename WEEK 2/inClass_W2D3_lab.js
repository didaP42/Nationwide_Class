/* 
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

maxOfTwo = (num1, num2) =>{
  if (num1 > num2){
    return num1;
  }else{
    return num2;
  }
}
console.log(maxOfTwo(5,9))

  
  /*
  2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
  */
//  number 3- 
 maxOfThree = (num1, num2, num3) => {
  
if(num1 > num2 && num1 > num3){
  return num1;
  }else if (num2 > num1 && num2 > num3){
  return num2;
  }else{
  return num3;
  }
}
console.log(maxOfThree(35, 42, 42))

 
//   3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.



isCharacterAVowel = (string) => {
  let vowel = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
    return vowel.includes(string.toLowerCase())
}
console.log(isCharacterAVowel('e'))


  
  // 4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
  
  let testArray = [6, 7, 8, 9]
  sumArray = (array) =>{
    let total = 0
     array.forEach(index =>{total += index})
    return total
  }
  console.log(sumArray(testArray))

  console.log(sumArray(testArray))

  multiplyArray = (array) =>{
    let total = 1       
    array.forEach(index =>{total *= index})
    return total
  }
  console.log(multiplyArray(testArray))

  
  // 5.Write a function that returns the number of arguments passed to the function when called.

  numArgs = (parameter) => {
    return parameter.length   
  }

console.log(numArgs(maxOfThree))

  
  // 6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
  // */
  
  function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("moon drop"));

  
  /*
  7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
  */
  
  longer = (champ, contender) => {
    return (contender.length > champ.length) ? contender : champ;
  }
  longestWord = (str) => {
    var words = str.split(' ');
    return words.reduce(longer);
  }
  console.log(longestWord("The largest galaxy discovered is IC 1101"));
  
  /*
  8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
  */
  filterLongWords = (str) => {
    var filterLongWords = function(array, int){
      var length = array.length;
      var longestWords = [];
      for (i = 0; i < length; i++) {
        if (array[i].length > int) {
          longestWords[longestWords.length] = array[i];
        }
      }
      return longestWords;
    }
    console.log(filterLongWord("moon, saturn, neptune, jupiter"))}
// no error and no output and not sure why