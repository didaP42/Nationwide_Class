$.ajax({
    url:'http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen',

    success: (data)=>{
        console.log(data)
       
    },
    error: ()=>{
        console.log("Bad Request")
    }

})
// Convert to a promise
// const promise = $.ajax({
//     url:'http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen'
// });

// promise.then(
//     // if successful
//     (data)=>{
//         console.log(data)
//     },
//     // if promise could not be resolved
//     ()=>{
//         console.log("Bad Request")
//     }

// )



$('form').on('submit', (event)=>{

event.preventDefault();

const userInput = $('input[type="text"]').val()


const promise = $.ajax({
    url:'http://www.omdbapi.com/?apikey=53aa2cd6&t='+ userInput
})

promise.then(
    (data)=>{
        $('#title').html(data.Title)
        $('#year').html(data.Year)
        $('#rating').html(data.Rated)

    }
)

})

