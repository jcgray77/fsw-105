function fiveAndGreaterOnly(arr){
    const result = arr.filter(function(num){
        if(num >= 5){
            return num;
        }
    });
    return result;
}
console.log("filter #1 output is: ");
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));
console.log("-------------------------");


// Given an array of numbers, return a new array that only includes the even numbers.

function evenOnly(arr){
    const result = arr.filter(function(num){
        if(num % 2 == 0){
            return num;
        }
    });
    return result;
}
console.log("filter #2 output is: ");
console.log(evenOnly([3, 6, 8, 2]));
console.log("-------------------------");


// Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length.

function fiveCharactersOrFewerOnly(arr){
    const result = arr.filter(function(str){
        if(str.length <= 5){
            return str;
        }
    });
    return result;
}
console.log("filter #3 output is: ");
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]));
console.log("-------------------------");


// Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

function peopleWhoBelongToTheIlluminati(arr){
    const result = arr.filter(function(person){
        if(person.member === true){
            return person;
        }
    });
    return result;
}
console.log("filter #4 output is: ");
console.log(peopleWhoBelongToTheIlluminati([
    {name: "Angelina Jolie", member: true},
    {name: "Eric Jones", member: false},
    {name: "Paris Hilton", member: true},
    {name: "Kayne West", member: false},
    {name: "Bob Ziroll", member: true},
]));
console.log("-------------------------");



// Make a filtered list of all the people who are old enough to see The Matrix (younger than 18).
function ofAge(arr){
    const result = arr.filter(function(age){
        if(age.age >= 18){
            return age;
        }
    });
    return result;
}
console.log("filter #5 output is: ");
console.log(ofAge([
    {name: "Angelina Jolie", age: 80},
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kayne West", age: 16},
    {name: "Bob Ziroll", age: 100},
]));
console.log("-------------------------");



//  Make an array of numbers that are doubles of the first array.
function doubleNumber(arr){
    const result = arr.map(function(num){
          return num * 2;
        
    });
    return result;
}
console.log("map #1 output is: ");
console.log(doubleNumber([2, 5, 100]));
console.log("-------------------------");
