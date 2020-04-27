//  Loop through the following array and count how many "computers" there are. Log the final count:
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]
var count = 0

for (var i = 0; i < officeItems.length; i++){
   if (officeItems[i] === "computer"){
        count++
    }
}
console.log(count)  // -> 4
console.log("----------")


var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    }, {
        name: "Madeline",
        age: 80,
        gender: "female"
    }, {
        name: "Cheryl",
        age: 22,
        gender: "female"
    }, {
        name: "Sam",
        age: 30,
        gender: "male"
    }, {
        name: "Suzy",
        age: 4,
        gender: "female"
    }    

]

//  Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if they aren't 18.
for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 19) {
        console.log("old enough")
    } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 19) {
        console.log("not old enough")
    }

}
    console.log("----------");

//  Log to the console a personalized message with a name
for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 19) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max")
    } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 19) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max")
    }

}
    console.log("----------");
    
    //  Check to see if the movie goer is a male or female for an even more personalized message
    for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 19 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max Fury Road, let HIM in.")
        } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 19 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max Fury Road, let HER in.")    
        }  else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 19 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road, don't let HIM in.")
        } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 19 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road, don't let HER in.")    
        
        }
    
    }
        console.log("----------");

// Create a for loop that iterates through 101 numbers (from 0-100). If the curent iteration is an Odd number, print "Odd" to the console, otherwise print "Even".
for (var i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log("Even")
    } else if (i % 2 !== 0) {
        console.log("Odd")
    }  
}
console.log("----------");

// Extra Credit
// Imagine you have a button that toggles a light on and off. Loop through the following array of numbers and toggle the button the numbers of times for each number. 
var count = 0;
var multibleArrays = [
    [2, 5, 435, 4, 3],
    [1, 1, 1, 1, 3],
    [9, 3, 4, 2]
]
for (var i = 0; i < multibleArrays.length; i++) {
    for (var j = 0; j < multibleArrays[i].length; j++){
        count += (multibleArrays[i][j]);
    }
        if (count % 2 === 0) {
        console.log("The light is off")
    }   else if (count % 2 !== 0) {
        console.log("The light is on")
    }   
    count = 0;
}