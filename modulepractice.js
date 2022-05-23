/**** 11.3 ****/

/* In Pyhton

// Simple Python print statement
def print_hello():
    print("Hello there!")

*/

// In JS
// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
}

/* In Python

// Takes two numbers and adds them
def addition(a, b):
    return a + b

*/

// In JS
// Takes two numbers and adds them
function addition(a, b){
    return a + b;
}

// Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c, d)*2
    return total;
}

/****
 11.3.3 From Simple Functions to Arrow Functions
 ****/
// Simple JavaScript log statement
function printHello() {
    return "Hello there!";
}

//Arrow function  
printHello = () => "Hello there!"


// Original addition function
function addition(a, b) {
    return a + b;
}

//Arrow function
addition = (a,b) => a+b;


// Original doubleAddition function
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
}

//Arrow function
doubleAddition = (c,d) => addition(c, d) * 2
//pass variables in it: doubleAddition(32,4)


/****
11.4.1 Use a JavaScript for Loop
****/

let friends = ["Sarah", "Greg", "Cindy", "Jeff"];

function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
      console.log(userList[i]);
    }
}

let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

for (var i = 0; i < vegetables.length; i++){
    console.log("I love " + vegetables[i]);
}

for (var i = 0; i < 5; i++){
    console.log("I am " +i);
}