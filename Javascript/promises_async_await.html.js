
//PROMISES

/*
json -> javascript object notation
http request for the server
json is asynchronous task
fetch goes and gets data from a server and returns a 
promise
*/
import fetch from "node-fetch";

fetch("https://www.boredapi.com/api/activity/")
    .then( (result) => result.json())
    .then( (data) => console.log(data))
    .catch( (error) => console.log(error));

/*
we are converting the data to json i.e. javascript 
object and then displaying it. 
Whenever we are using asynchronous tasks we have to 
use then
*/

//ASYNC AWAIT - Syntactical sugar for promises, better 
//code, looks cleaner

async function getData() {
    try{
        const result = await fetch("https://www.boredapi.com/api/activity/");
        const data = await result.json();

        console.log(data);
    }

    catch(error){
        console.log(error);
    }
}

getData(); 

//ES6 - let

//window is the parent object in browser

// var name= "Chayanika";
// //name is attached to the window object

// let age=19; //same doesn't happen with let

// console.log(window.name);
// console.log(window.age); //undefined

// function outer() 
// {
//     var mango="Safeda";
//     let apple="Shimla";

//     function inner()
//     {
//         var mango="Chausa";
//         let apple="Darjeeling";

//         console.log("From inner:",mango,apple);
//     }

//     inner();
//     console.log("From outer:",mango,apple);
// }

// outer();

// var grapes="green";
// let banana="yellow";
// var grapes="red"; //no error
// //let banana="rotten"; //error, cannot declare 
// //let variables again

// function outer1() 
// {
//     var mango="Safeda"; //var is global scoped
//     let apple="Shimla"; //let is block scoped

//     function inner1()
//     {
//         let apple="Darjeeling";

//         console.log("From inner:",mango,apple);
//     }

//     inner();
// }

//You should prefer let