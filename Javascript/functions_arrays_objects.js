//functions
// const items =
// {
//     food: 2000,
//     coolDrinks: 3000
// };

// var cart = 0;

// function addToCart(p, tax = 0) {
//     cart += p + tax;
// }

// var k = items.food;

// addToCart(k, (0.18 * k));

// console.log("Cart:", cart);

// cart = 0;

//These functions(Arrow functions) can't be accessed before declaring
//Cannot be used for hoisting
//These are essentially variables storing functions

// const addCartValue = (item, tax = 0) => cart + item + tax;
// const addToCart2 = (item) => (cart = addCartValue(item, 0.15 * item));
//OR
// const addToCart3 = (item) => {
//     cart = 0;
//     cart = addCartValue(item, 0.12 * item);
//     return cart;
// }

// console.log("Cart:", addToCart2(items.coolDrinks));
// console.log("Cart:", addToCart3(k));

// console.log(this);

// const thisExample =
// {
//     name: "pavan",
//     getThis: function () {
//         console.log(this);
//     }
// }

// thisExample.getThis();

//BUT if we use arrow function

// const thisExample2 =
// {
//     name: "pavan",
//     getThis: () => {
//         console.log(this);
//     }
// }

// thisExample2.getThis();

//Array

const array1 = [1, 2, 3, "blue", "green", "😁", "😍", "🤩","😏"];
// var i = 0;
// console.log(array1);

/*var c="yes";
i=8;
while(c=="yes")
{
    array1[i]=prompt("Enter an emoji");
    c = prompt("Wanna continue");
    i++;
}*/

// array1.unshift("🤣");
// console.log(array1);
// array1.push("🤪");
// console.log(array1);

// while (i < 12) {
//     array1.pop();
//     i++;
// }

// array1.pop();

// console.log(array1);

// array1.push("🤣", 1, 2, 3, "blue", "green", "😁", "😍", "🤩")
// console.log(array1);
// array1.shift();
// console.log(array1);
// array1.unshift(2.728);
// console.log(array1);

// array1.forEach((element) => console.log("forEach:", element + 1));
// array1.map((element) => console.log("map:", element + 2.5));

// var nums = [1,2,3,4,5,6];
// nums = nums.map((num) => num*num);
// console.log(nums);
// nums.forEach((num) => num*num);
// console.log(nums);

// console.log("Now for the difference");

// //call by reference type function with no return value
// const forEachArray = array1.forEach((element) => element + 1);
// console.log(forEachArray);
// //call by value type function with updated array return value
// const mapArray = array1.map((element) => element + 1);
// console.log(mapArray);

// //Objects

// const student =
// {
//     name: "Ankush",
//     isGoodStudent: false
// };

// console.log(Object.keys(student));
// console.log(Object.values(student));
// console.log(Object.entries(student));

// const sensitiveData =
// {
//     BloodGroup: "A+",
//     Allergies: "Dust"
// };
// console.log(sensitiveData);

// sensitiveData.BloodGroup = "O+";
// console.log(sensitiveData);

// //No editing allowed after this
// Object.freeze(sensitiveData);

// sensitiveData.BloodGroup = "AB-";

// console.log(sensitiveData);

// //templates
const name = "Chayanika";
const fullName = `${name} Basak`;
const myName= name + "Basak\" \' ";
console.log(fullName);

var str =`hello
how `
// var p = `Helena
// Maoi
// Alice`

// console.log(p);
//ES6
//Echma Script 