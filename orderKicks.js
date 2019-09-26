// input: name, description
// work: construct an html string that we can hand off to document.write
//output: an html article with placeholder pic, name, and description

//pseudocode
//input: name - "brown Snickers", descriptions - "pink shoes"
//work:
// '<div class="shoes1">' +
// '<img src="images (1).jpeg">' +
// '<p>Brown shoes</p>' +
// '</div>'
// output:
/*
<div>
                <div class="shoes1">
                  

                    <img src="images (1).jpeg">
                    <p>Brown shoes</p>
                </div>

*/

//function orderKicks(name, description) {
// var newShoes = '<div class="shoes1">' +


// '<img src="images (1).jpeg">' +
// '<p>Sneakers</p>' +
// '<p>Brown shoes</p>' +
// '</div>'

// return newShoes;
// }

var sklad = ["Sneakers", "Running", "Athletic", "Slip-on"];

var username = prompt('Welcome! What is your name?');

console.log('Hi' + username + '!');

document.write('<h1>Welcome,' + username + '!' + '</h1>');

var answer = prompt("Do you want to buy shoes ?")

while ("yes" === answer) {

    var shoes = prompt("What kind of shoe do you want ??");

    if (sklad.includes(shoes)) {

        var shoesSize = prompt("what size of shoes do you need?")

        document.write('<p>Your size is ' + shoesSize + '</p>');

        document.write('<p><img src="shoes*/' + shoes + '.jpg"</p > ');
    } else {
        alert("sorry we dont have this shoes");
    }
    answer = prompt("Do you want to buy another shoes ?")
}