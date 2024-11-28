//NURA,M.JEANNE
function sumArray(numbers) {
    let sum = 0; 
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]; 
    }
    return sum;  
}
let numbers = [1, 5, 7, 12, 25];
console.log(sumArray(numbers)); 
