console.log("----------");

// Write a function that accepts two numbers as parameters, and returns the sum.
function add2Nums(x, y) {
    return x + y;
}
console.log(add2Nums(2, 2));
console.log("----------");

// Write a function that accepts three numbers as parameters, and returns the largest of those numbers.
function largestNum(a, b, c) {
    return(Math.max(a, b, c));  
      
}
console.log(largestNum(5, 10, 15));
console.log("----------");

// Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd")
function evenOrOdd(Num){
    if (Num % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }    
}
console.log(evenOrOdd(5));
console.log("----------");

// Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.
function stringConcat(myString){
    if (myString.length <= 20) {
        return myString.concat(myString);
}   else {
        return myString.substr(0, myString.length/2);
}
}
console.log(stringConcat("short string "));
console.log(stringConcat("this string is very much longer than the first"));
console.log("----------");

