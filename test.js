// import sum from app.js file
const {sum, fromDollarToYen} = require('./app.js');

// first test
test('add 14+9, equal 23', () => {
    // callback to sum function with 2 numbers
    let total= sum (14,9);
    // expected result = 23
    expect(total).toBe(23);
});

// numbers are fixed to two decimals to avoid errors between functions and tests

// test for conversion euro => dollar
test("One euro should be 1.206 dollars", function(){
    // import from app.js
    const { fromEuroToDollar } = require('./app.js')
    // function with argument 3.5(euros)
    const dollars = fromEuroToDollar(3.5)
    // 3.5 euros = (3.5*1.2) = 4.2 dollars
     expect(dollars).toBe(Number((3.5*1.2).toFixed(2))); 
});

// test for conversion dollar => yen
test("One dollar should be (127.9/1.2) yen", function () {
    // import function
    const { fromDollarToYen } = require ('./app.js')
    // function with argument 7(dollar)
    const yen = fromDollarToYen(7)
    // 7 dollars = (127.9*7)/1.2 yen = approx 746.08 yen
    expect(yen).toBe(746.08);
});

// test for conversion yen => pound sterling
test("One yen should be (0.8/127.9) pound sterling", function () {
    // import function
    const {fromYenToPound} = require ('./app.js')
    // function with argument 30(yen)
    const pound = fromYenToPound(30)
    // 30 yen = (0.8*30)/127.9 pound sterling = approx 0.19 pound sterling 
    // comparison for unit test
    expect(pound).toBe(0.19);
});