var readlineSync = require('readline-sync');

const readlineSync = newLocal;
const readline = require("readline-sync");
const name = readline.question("What is your name? ").toUpperCase();


console.log("/////////    " + name + " Congratulations! This will be an ADVENTURE of a LIFETIME!!  ///////////////////")
console.log("///////////               Hold on to your HAT                ////////////")
console.log("//////          you are part of the few, the select, the very special                         ////////////")

const lootDrop = ["Shiny Disco Ball", "Turntables" , "Fog Machine", "Laser Lights", "Music notes", "Cocktails"]
let userLoot =[]
let userHP = 100

function newFunction() {
    npm;
    install;
}


//                       User Options

function theList(num){
    console.log("  ")
    console.log("********* YOUR OPTIONS!!!! ***************")
    console.log("**                                      **")
    console.log("**     w ........Walk                **")
    console.log("**     p ....Products          **")
    console.log("**     q ........Quit                **")
    console.log("**                                      **")
    console.log("******************************************")
    console.log("  ")
    let theOption = question("What would you like to do ?: ").toLocaleLowerCase();
    if (theOption === "w"){
        return theOption
    }else if(theOption === "p"){
        return theOption
    }else if (theOption === "q"){
        userQuit()
    }else{
        console.log("oops " + name + " I dont understand")
        theList()
    }

}

//                Attack or Run

function userOptions(){
    console.log("  ")
    console.log("********* What are my options????????*************")
    console.log("**                                **")
    console.log("**      a .... to attack          **")
    console.log("**                                **")
    console.log("**      r .... to run             **")
    console.log("**                                **")
    console.log("************************************")
    console.log("  ")
    let userAction = question( name + " Which option do I choose???? -->  ").toLowerCase()
    if (userAction === "a"){
        return userAction
    }else if(userAction === "r"){
        return userAction
    }else{
        console.log("  ")
        console.log("oops! " + name + " I dont understand")
        userOptions()
    }
}

//                                      Villains involved

function Villains (name, type, hp){
    this.name = name;
    this.type = type;
    this.hp = hp;
};

Villians.prototype.printStats = function(){
    console.log("                           Name : " + this.name);
    console.log("                         MAX HP : " + this.hp);
    console.log("                           Type : " + this.type);
    console.log(" ")
}
const villian0 = new Villians("Parents" , "Daddy", 48);
const villian1 = new Villians("Boyfriend" , "Jason" , 23);
const villian2 = new Villians("ShawdowPeople" , "Ed" , 175);
const villian3 = new Villians("Sunlight", "Bright", 12);
// Find villian function
function randomVillian(){
    let numVillian = (Math.floor(Math.random()* 4))
    if (numVillian === 1){
        return villian1
    }else if (numVillian === 2){
        return villian2
    }else if (numVillian === 3){
        return villian3
    }else{
        return villian0
    }
}
// END of Villians

//                                      User Quit

function userQuit(){
    console.log(name + "CONGRATULATIONS YOU ARE DONE")
    userHP = 0
   
}

//                                      Display User info

function userInventory(){
    console.log(name + "  Your Inventory:")
    for (i=0; i < userLoot.length ; i++){
        console.log(userLoot[i])
    }
}

//                          function of the Game

function theGame(){
    //const userAP = Math.floor(Math.random()* (6 - 2 +1 ) +7)
    let currentVillian = randomVillian()
    let monsterHP = currentVillian.hp

    const userOption = theList()
    if (userOption === "q" ){
        console.log("quit")
        userQuit()
    }else if (userOption === "p"){
        // call function
        userInventory()
    }else if (userOption ==="w" ){
        let odds = Math.random()
        if (odds <= .3){
            console.log("walking...")

        }else if (odds >= .3){
            console.log("  ")
            console.log( name + " you are faced with  ")
            currentVillian.printStats()
           actionLoop:
            while (villianHP > 0 && userHP > 0){ //both alive
                let userPicked = userOptions(); // returns a attack  or r run
                let villianAP = Math.floor(Math.random()* 20)+1
                let userAP = Math.floor(Math.random()* 25) +1
                switch (userPicked){
                    case "r":
                        let userRun = Math.random()
                        if (userRun < .5){
                            console.log("You try to run away but ... " + currentVillian.name + " attacks you for " + monsterAP)
                            continue actionLoop
                        }else{
                            console.log( name + "GOOD JOB YOU ESCAPED")
                            break actionLoop
                        }
                    case "a":
                        currentVillian.hp -= userAP
                        console.log("")
                        console.log("--->" + name + " You landed a hit for " + userAP )
                        console.log("--->" +currentVillian.name + " reamining HP: " + currentVillian.hp)
                        console.log(" ")
                        userHP -= villianAP
                        console.log(" ")
                        console.log("--->" +currentVillian.name + " hit you for " + villianAP )
                        console.log("--->" + name + " Your current HP:  " + userHP)
                        console.log(" ")
                        console.log(" ")
                        if  (userHP <= 0){
                            if(currentVillian.hp <= 0){
                                console.log(" ")
                                console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
                                console.log(name + "Wow that sucks, you are dead" + currentVillian.name + "KILLED")
                                console.log("ALL IS NOT LOST")
                                           
                                console.log( "YOU MURDERED " + currentVillian.name + "YOU HAVE ANOTHER CHANCE")
                                console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
                                break actionLoop
                            }else{
                                console.log(" ")
                                console.log(name + "Wow that sucks, you are dead" + currentVillian.name + "KILLED")
                                console.log("Well, you nade an attempt, right?")
                                console.log(" ")
                                userQuit()
                            }
                        }else if (currentVillian.hp <= 0 ){
                            let drop =  lootDrop[Math.floor(Math.random()* lootDrop.length)];
                            console.log("sure ya tried")
                            console.log("DESTROYED" + currentVillian.name)
                            console.log(" " )
                            console.log("Check out what the villian has on them" + currentVillian.name + "look in gthe pockets...")
                            console.log( "......." + drop + "earned a new product") 
                            console.log(" ")
                            userLoot.push(drop)
                            break actionLoop
                        }

                }
            }
        }// w Odds else if end
    }//userOption else if end

}
while (userHP > 0){
    healUser =function(){
        userHP = 100
    }
    healthUser()
    Game()
} 