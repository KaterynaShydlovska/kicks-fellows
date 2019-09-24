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

function orderKicks(name, description) {
    var newShoes = '<div class="shoes1">' +


        '<img src="images (1).jpeg">' +
        '<p>Sneakers</p>' +
        '<p>Brown shoes</p>' +
        '</div>'

    return newShoes;
}

// promt user if they want to add a shoes

var wantsToAddShoes = prompt("Do you want to add a shoes?");

if (wantsToAddShoes === 'yes') {
    // if so, ask for name description
    var shoesName = prompt("What type of shoes do you need ?");

    var shoesDescription = prompt("What is the shoes description?");
    // give name description to the orderShoes function to tell it do its things
    var newShoes = orderKicks(shoesName, shoesDescription);
    //hand the resulting HTML off to document.write

    console.log(newShoes);
    document.write(newShoes);

}