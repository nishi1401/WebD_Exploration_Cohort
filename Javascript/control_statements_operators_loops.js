const prompt=require("prompt-sync")({sigint:true});

//control statements
const condition = true;
var a = 3, b = 8, c = 5;


// do {
//     if (a > b) console.log("Yes a is greater.");
//     else if (a == b) console.log("No a is equal");
//     else console.log("No a is lesser");
//     console.log("a is: ", a, "b is: ", b, "c is: ", c);
//     c--;
//     a++;
//     b--;
//     switch (c) {
//         case 0:
//             console.log("Case 0");
//             break;
//         case 1:
//             console.log("Case 1");
//             break;
//         case 2:
//             console.log("Case 2");
//             break;
//         case 3:
//             console.log("Case 3");
//             break;
//         default: console.log("Lol!! You're a lost cause.");
//     }
// } while (c > 0);

// let p = "Chayanika";
// console.log("My name is: ", p);
// let l = 3, q = '3', r = 3;
// if (l === r) console.log("Sahi hai. Data type bhi same hai");
// if (q == r) console.log("Aadha Sahi hai. Data Type to alag hi hai.");

//Operators

//Arithmetic: + - * / %
//Conditional: > < >= <= == ===
//Logical: &&, ||, !
//Assignment: =

// let l=3;
// l += 22; // l=l+22
// console.log("l now is: ", l);

// l -= 22;
// console.log("l now is: ", l);

// l *= 22;
// console.log("l now is: ", l);

// l /= 27;
// console.log("l now is: ", l);

// //ternary operator
//a=3, b=8
// l = a > b ? a : b;
// console.log("l now is: ", l);

// l = a > b ? console.log(a, " because a is greater.") : console.log(b, " because b is greater");

// //loops

// var i,j,color=[];
const net=5000;

// console.log("Enter the color for five dresses.");
// for(i=0; i<5; i++) color[i]=prompt(color[i]);
// for(i=0; i<5; i++) console.log("Dress ", i+1, " of color ", color[i]);

// const budget = 10000;
// var cart = 0;
// const items = {
//     beverages: 1000,
//     food: 5000,
//     groceries: 10000,
//     games: 4000
// };

// console.log(items.beverages);

// for (shopping = 1; cart < budget; shopping++) {
//     cart += items.beverages;
//     cart += items.food;
//     cart += items.groceries;
//     cart += items.games;
//     console.log(cart);
// }

// cart = 0;

// while (cart < budget) {
//     console.log(cart);
//     cart += items.food;
// }

// cart = 0;

// do {
//     cart += items.food;
//     console.log(cart);
// } while (cart < budget);

// a = 6; 
// b = 5; 

// console.log(a++, b++, --a, ++a + a++, --b - b++) // 6, 5, 6, 14, 0
// console.log(a, b); //8 , 6
