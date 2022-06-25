//program for a simple calculator

const operator = prompt('choose operator ( +, -, *, / ): ');

var num1 = prompt("Enter a number");
var num2 = prompt("Enter another number");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

if (operator == '+') {
  result = num1 + num2;
 }
else if (operator == '-') {
    result = num1 - num2;
}
else if (operator == '*') {
    result = num1 * num2;
}
else  {
    result = num1 / num2;
}
// display the result
console.log(`${num1} ${operator} ${num2} = ${result}`);43