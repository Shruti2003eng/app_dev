// Function to calculate the factorial of a number
function factorial(num) {
    if (num < 0) {
        return undefined;
    }
    else if (num === 0) {
        return 1;
    }
    else {
        var fact = 1;
        for (let i = 1; i <= num; i++) {
            fact *= i;
        }
        return fact;
    }
}
var num = -2;
var r= factorial(num);

console.log("factorial:"+r);