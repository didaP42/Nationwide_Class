const findWordFrequencies = str => {
   
    
    //   take string and makes all lowercase and splits the sentence into an array
        const stringToArray = str.toLowerCase().split( ' ' );
    //   empty object to be filled 
        const words = {};
    //    loops over each index in the array
        for ( let i = 0; i < stringToArray.length; i++){
            // assigns the index in the array to the key 
            // assigns the frequency to the value
             
            words[stringToArray[i]] = (words[stringToArray[i]] || 0) + 1;
            
        }
    //    console.log the object
        console.log ( words );
      }
      
      
      findWordFrequencies( "i love Love Love Love lamp" );