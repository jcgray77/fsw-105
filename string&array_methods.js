// Make a function that will return any given string into all caps followed by the same string all lowercase.
function nameUpperLower(str) {
    let strUpper = str.toUpperCase();
    let strLower = str.toLowerCase();
    return "Your word in Upper then Lower case: " + strUpper.concat(strLower)
}
console.log("----------");
console.log(nameUpperLower("hello"));
console.log("----------");

// Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().
function halfLength(str) {
    let middleOfString = Math.floor(str.length/2);
    return "The middle point of the string is: " + middleOfString;
}
console.log(halfLength("Jessica"));
console.log("----------");

// Make a function that uses slice() and the other functions you've written to return the first half of the string.
function returnFirstHalf(str) {
    let firstHalf = str.slice(0, Math.floor(str.length/2));
    return "The first half of the string is: " + firstHalf;
}
console.log(returnFirstHalf("Playdate"));
console.log("----------");

// Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased. (If the string length is odd, capitalize the shorter of the first half.)
function upperLowerEvenOdd(str) {
    if (str % 2 !== 0) {
        let firstHalf = str.slice(0, Math.floor(str.length/2));
        let secondHalf = str.substr(str.length/2, str.length);
        return firstHalf.toUpperCase() + secondHalf.toLowerCase();
    } else if (str % 2 === 0){
        let firstHalf = str.slice(0, str.length/2);
        let secondHalf = str.substr(str.length/2, str.length);
        return firstHalf.toUpperCase() + secondHalf.toLowerCase();
    }
}
    console.log(upperLowerEvenOdd("happyPuppy"));
    console.log(upperLowerEvenOdd("sadPuppy"));
    console.log("----------");

    let fruit = ["banana", "apple", "orange", "watermelon"];
let vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// Remove the last item from the vegetable array.
vegetables.pop();

// Remove the first item from the fruit array.
fruit.shift();

// Find the index of "orange."
let orangeIndex = fruit.indexOf("orange");

// Add that number to the end of the fruit array.
fruit.push(orangeIndex);

// Use the length property to find the length of the vegetable array.
let vegetablesLength = vegetables.length;

// Add that number to the end of the vegetable array.
vegetables.push(vegetablesLength);

// Put the two arrays together into one array. Fruit first. Call the new Array "food".
let food = fruit.concat(vegetables);

// Remove 2 elements from your new array starting at index 4 with one method.
food.splice(4, 2);

// Reverse your array.
food.reverse();

//Turn the array into a string and return it.
let foodString = food.toString();
console.log(foodString);
   
