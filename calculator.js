 function add(num1, num2) {
    return "Adding " + num1 + " and " + num2 + " equals: " + (num1 + num2);
}

function sub(num1, num2) {
    return "Subtracting " + num1 + " from " + num2 + " equals: " + (num1 - num2);
}

function mul(num1, num2) {
    return "Multiplying " + num1 + " and " + num2 + " equals: " + (num1 * num2);
}

function div(num1, num2) {
    return "Dividing " + num1 + " by " + num2 + " equals: " + (num1 / num2);
}



        if (operation == "add") {
            console.log(add(firstNum, secondNum))
        }
        else if (operation == "subtract") {
            console.log(sub(firstNum, secondNum))
        }
        else if (operation == "multiply") {
            console.log(mul(firstNum, secondNum))
        }
        else if (operation == "divide") {
            console.log(div(firstNum, secondNum))
        }
        else if (operation == "quit") {
            console.log("Javascript calculators are sooooo cool:):):)!!!");
        }