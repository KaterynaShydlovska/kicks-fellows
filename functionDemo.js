//Functions have tree parts:

//inputs (parametrs)
//work
//outputs (return value)

//..and then we have to tell them to run.

//inputs/parameters: meat, cheese, bread
//work: assemble our sandwich from these supplied ingredients (parameters)
//output (return value): sandwich

//pseudocode
//parameters: meat - "turkey", ckeese - "pepperjack", bread - "wheat"
// work: "Here is your beautiful sandwich. It has "+ meat +" and "+ cheese+" on "+ bread+". "
// return value: "Here is your beautiful sandwich. It has turkey and chese on wheat. Enjoy!"


function makeSandwich(meat, cheese, bread) {
    // work goes in here
    var newSandwich = "Here is your beautiful sandwich. It has " + meat + " and " + cheese + " on " + bread + ". ";
    // tell  JavaScript to return
    return newSandwich;
}

// "call" (or run) the function with these specific input values (aka "arguments")
var katerynasSandwich = makeSandwich("turkey", "pepperjack", "wheat");
console.log(katerynasSandwich);