// ----Task1 : Using SetTimeout --------

setTimeout(() => {
    console.log("Hello, World!");
}, 3000);

// -----Task2 : Using setInterval --------

const interval = setInterval(() => {
    console.log("Tick");
}, 2000);


// -----Task3 : Using clearInterval --------

let count = 1;
const interval1 = setInterval(() => {
    if(count <= 5){
        console.log("Tick", count);
        count++;
    }else{
        clearInterval(interval);
    }
});

// -----Task4 : Simple Callback Function--------

function greet(name){
    console.log("Hello " + name + "!");
}

const processUserInput = (great) => {
    console.log("welcome");

    greet("Lahari");
}

processUserInput(greet);

// ------Task5 : Using Callbacks and Timing Functions--------

function greet(name){
    console.log(name);
}

const  processUserInput1 = (greet) => {
    setTimeout(() => {
        greet("Hello");
    }, 1000)
    setTimeout(() => {
        greet("World!");
    }, 2000)
}

processUserInput1(greet);

// Reflection Questions :
// 1. What did you learn about JavaScript timing events and callbacks through this task?
// Ans:
// i.Javascript timing events  are handled by using web APIs like setTimeout and setInterval,clearInterval
// setTimeout is used to execute asynchronous actions by event loop in call back queue
// wheras setInterval used to have repeated action as outcopme until heap memory is full in call stack.but we can limit these repeated action using clearInterval.
// ii. In callBack function we learnt how to pass another function as an argument to main function
// so that inner function is invoked without disturbing the main outer function.
// if the multiple call back functions are called within a main function will create a situation of the
// "call back hell"

// 2. How do setTimeout and setInterval differ in their usage?
// Ans:
// settimeout is a asynchronous callback function will execute simulataneously without disturbing main function of program
// settimeout can print a function only once after timer is been set
// the syntax of it is:setTimeout(function(){consolde.log("working")},timeout(secs))
// whereas:
// setInterval is a asynchronous call back function will create an interval of few seconds, So that
// repeated times function will be invoked without interuppting the main thread of the program.
//  the syntax is difeerent from other async call back functions:
// setInterval(function(){console.log("working")},timeinterval(secs))


// 3. What are the advantages of using callbacks in JavaScript? 
// Ans:1. It helps to async events and make the execution faster and simpler
// 2. Using callback function we can intregrate the one function with another function in order to get required outcome
// 3. callback functions are main pillars to understand and will support promises concept 
// in javascript to make Jscript more modular aand easier to implement
