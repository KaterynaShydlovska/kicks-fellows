'use strict';

//make variable
var username = prompt('Welcome! What is your name?');

//print out whatewer's in that variable

console.log(username);

//"concatente", or add, a string 
console.log('Hi,' + username + '!')

document.write('<p>Hi,' + username + '</p>');

var wantsToOrder = prompt('We are glad you are here. Are you planing to ordered new shoes?');

if (wantsToOrder === 'yes') {
    document.write('<p>We are so excited!Head over to the order page for details </p>');
} else {
    document.write('<p>Thanks for stopping by. Enjoy our shoes and sure you will find something cool.</p>');

}