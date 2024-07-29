//Write a function createHelloWorld. It should return a new function that always return Hello World
function createHelloWorld(){
    return newHelloWorld();
}
function newHelloWorld(){
    return console.log("Hello World");
}
let a=createHelloWorld();
return a;