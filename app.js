// conversion for euros:
//      1 dollar = 1.2 euro
//      1 yen = 127.9 euro
//      1 sterling pound = 0.8 euro
// following functions deliver numbers with two decimals
// made to avoid issues with tests


// conversion from euro to dollar
const fromEuroToDollar = function(valueInEuro){
    // dollar = 1.2 euro
    let valueInDollar = Number((valueInEuro * 1.2).toFixed(2));
    return valueInDollar;
}

// conversion from dollar to yen
const fromDollarToYen = function (valueInDollar) {
    // dollar = 1.2 euro => 1 euro = dollar/1.2
    // yen = 127.9 euro => 1 euro = yen/127.9
    // dollar/1.2 = yen/127.9 => 1 yen = (127.9/1.2) dollar
    let valueInYen = Number(((127.9/1.2) * valueInDollar).toFixed(2));
    return valueInYen;
}

// conversion from yen to pound sterling
const fromYenToPound = function (valueInYen) {
    // yen = 127.9 euro => 1 euro = yen/127.9
    // pound_sterling = 0.8 euro => 1 euro = pound_sterling/0.8
    // yen/127.9 = pound_sterling/0.8 => 1 pound_sterling = (0.8/127.9) yen
    let valueInSterlingPound = Number(((0.8/127.9) * valueInYen).toFixed(2));
    return valueInSterlingPound;
}

//app.js file content as instructed
//console.log("Hello World")

//function that sums two numbers
const sum = (a,b) => {
    return a+b;
}

//console for ourselves
//console.log(sum(7,3));

// export function to be used on other files
// (similar to `export` when using webpack)
// module.exports = {sum};

// fromEuroToDollar needs to be exported
// module.exports = {sum, fromEuroToDollar}

//complete export for sum + 3 functions
module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}