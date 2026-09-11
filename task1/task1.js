alert("wellcome to calculator");

var num1 = prompt("Enter first number");
var num2 = prompt("Enter second number");

var choice = Number(prompt(" 1. for addition \n 2. for subtraction \n 3. for multiplication \n 4. for division \n 5. for modulus \n Enter your choice:"));

var flag = true;

while (flag) {
switch (choice) {
    case 1:
        alert(`addition of ${num1} and ${num2} is: ${num1 + num2}`);
        break;
    case 2:
        alert(`subtraction of ${num1} and ${num2} is: ${num1 - num2}`);
        break;
    case 3:
        alert(`multiplication of ${num1} and ${num2} is: ${num1 * num2}`);
        break;
    case 4:
        alert(`division of ${num1} and ${num2} is: ${num1 / num2}`);
        break;
    case 5:
        alert(`modulus of ${num1} and ${num2} is: ${num1 % num2}`);
        break;
    default:
        alert("Invalid choice");
 

}
flag = confirm("Do you want to perform another operation?");
}