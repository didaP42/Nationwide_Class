console.log("Working")
console.log($)

const $div = $('<div>')

$('body').append($div)
console.log($div)

// create an h3 tag and assign the variable $h3
const $h3 = $('<h3>')
// add text to the h3
$h3.text("Goodnight Moon")

$div.append($h3)

$h3.addClass('colorDiv')

// create an h2 tag and assign the variable $h2
const $h2 = $('<h2>')
// add text to the h3
$h2.text("Good-bye Sun")

$div.append($h2)

$h2.addClass('colorDiv2')



