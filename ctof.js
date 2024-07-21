// Function to convert Celsius to Fahrenheit
function celToFa(c) {
    let f = (c * 9/5) + 32;
    return f;
}
let c = 28;
let f = celToFa(c);
console.log( "output faherheit:"+f);