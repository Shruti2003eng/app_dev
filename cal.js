// Function to perform calculator operations
function cal(oper, num1, num2) {
    let result;

    switch(oper) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case 'x':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                result = 'Cannot divide by zero';
            } else {
                result = num1 / num2;
            }
            break;
        case '%':
            result = num1 % num2;
            break;
        default:
            result = 'Invalid operation';
    }

    return result;
}
let o = '-';
let n = 100;
let n2 = 75;
let result = cal(o, n, n2);

console.log("results:"+result);