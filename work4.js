//NURA,M.JEANNE
let num1 = 5;
let num2 = 10;
let operation = "add";  
switch (operation) {
    case "add":
        console.log(num1 + num2);  // Addition
        break;
    case "subtract":
        console.log(num1 - num2);  // Subtraction
        break;
    case "multiply":
        console.log(num1 * num2);  // Multiplication
        break;
    default:
        console.log("Invalid operation");
}
