//1. Convert the string "123" to a number and add 7
// Output Example: 130
let original="123";
let converted=Number(original);
let result=converted+7;
console.log(result);
// 2. Check if the given variable is falsy and return "Invalid" if it is
// • Input Example: 0
// • Output Example: "Invalid"
function checkValue(variable) {
    if (!variable) {
        return "Invalid";
    }
}

console.log(checkValue(0));
// 3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue 
// • Output Example:1, 3, 5, 7, 9
for(let i=1; i<=10; i++){
    if(i%2===0){
        continue;
    }
    console.log(i);
}
// 4. Create an array of numbers and return only the even numbers using filter method
// • Input Example: [1, 2, 3, 4, 5]
// • Output Example: [2,4]
let numbers=[1, 2, 3, 4, 5];
let evenNumbers=numbers.filter(num => num%2===0);
console.log(evenNumbers);
// Use the spread operator to merge two arrays, then return the merged array
// • Input Example: [1, 2, 3], [4, 5, 6]
// • Output Example: [1, 2, 3, 4, 5, 6]
let array1=[1, 2, 3];
let array2=[4, 5, 6];
let mergedArray=[...array1, ...array2];
console.log(mergedArray);
// 6. Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday)
// • Input Example: 2
// • Output Example: “Monday”
let dayNumber=2;
let dayName;
switch(dayNumber){
    case 1:
        dayName="Sunday";
        break;
    case 2:
        dayName="Monday";
        break;
    case 3:
        dayName="Tuesday";
        break;
    case 4:
        dayName="Wednesday";
        break;
    case 5:
        dayName="Thursday";
        break;
    case 6:
        dayName="Friday";
        break;
    case 7:
        dayName="Saturday";
        break;
    default:
        dayName="Invalid day number";
}
console.log(dayName);
// 7. Create an array of strings and return their lengths using map method 
// • Input: ["a", "ab", "abc"]
// • Output Example: [1, 2, 3]
let strings=["a", "ab", "abc"];
let lengths=strings.map(str => str.length);
console.log(lengths);
// 8. Write a function that checks if a number is divisible by 3 and 5
// • Input Example: 15
// • Output Example: “Divisible by both”
function checkDivisibility(num){
    if(num%3===0 && num%5===0){
        return "Divisible by both";
    } else if(num%3===0){
        return "Divisible by 3";
    } else if(num%5===0){
        return "Divisible by 5";
    } else {
        return "Not divisible by 3 or 5";
    }
}
console.log(checkDivisibility(15));
// 9. Write a function using arrow syntax to return the square of a number
// • Input Example: 5
// • Output Example: 25
const square = (num) => num * num;
console.log(square(5));
// 10.Write a function that destructures an object to extract values and returns a formatted string
// • Input Example: const person = {name: 'John', age: 25}
// • Output Example: 'John is 25 years old'
const getFormattedString = (person) => {
    const { name, age } = person;
    return `${name} is ${age} years old`;
};
const person = { name: 'John', age: 25 };
console.log(getFormattedString(person));    
// 11.Write a function that accepts multiple parameters (two or more) and returns their sum. (0.5 Grade)
// • Input Example: 1, 2, 3, 4, 5
// • Output Example: 15

function sumNumbers(...numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

console.log(sumNumbers(1, 2, 3, 4, 5));
// or
// function sum(...numbers) {
//     return numbers.reduce((acc, curr) => acc + curr, 0);
// }
// console.log(sum(1, 2, 3, 4, 5));
// or
// const sumArrow = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0);
// console.log(sumArrow(1, 2, 3, 4, 5));

// 12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message.
// • Output Example: “Success”
function resolveAfter3Seconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Success");
        }, 3000);
    });
}

resolveAfter3Seconds().then((message) => console.log(message));
// 13. Write a function to find the largest number in an array.
// • Input Example: [1, 3, 7, 2, 4]
// • Output Example: 7
function findLargestNumber(arr) {
    return Math.max(...arr);
}

console.log(findLargestNumber([1, 3, 7, 2, 4]));
//or
// function findLargestNumber(arr) {
//     let largest = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }
//     return largest;
// }
// console.log(findLargestNumber([1, 3, 7, 2, 4]));

// 14. Write a function that takes an object and returns an array containing only its keys. 
// • Input Example: name: "John", age: 30}
// • Output Example: ["name", "age"]
function getKeys(obj) {
    return Object.keys(obj);
}

console.log(getKeys({ name: "John", age: 30 }));
// 15. Write a function that splits a string into an array of words based on spaces. 
// • Input: "The quick brown fox"
// • Output: ["The", "quick", "brown", "fox"]
function splitStringIntoWords(str) {
    return str.split(" ");
}
console.log(splitStringIntoWords("The quick brown fox"));
