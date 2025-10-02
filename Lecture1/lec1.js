/*
Lecture-1
Topic - Variable & Data types
*/

/*
 Variable Rules - 1) Variable is case sensitive. A and a is not stand for the same thing. 
                  2) Only Letter, Digits, Underscore(_) and $ is allowed. (NOT EVEN SPACE)
                  3) Only a Letter, Underscore(_) or $ can be First character. 
                  4) Reserved Words cannot be variable. (which are mainly commands in JS) 
 */

/* -----let, const, var- 
let - Variable cannot be re-declared but can be updated. A block scope variable. 
var - it can be re-declared & updated too. A global scope variable. 
const - cannot be re-declared & updated. A block scope variable. */

/* Data types 2 --> 1) Primitive(7) , 2) Non-primitive objects(i.) Arrays (ii) functions 
                     - Number
                     - Strings (names)
                     - Boolean (yes/no, true/false)
                     - undefined (by default)
                     - null (absence of obj) 
                     - BigInt 
                     - Symbol 
 protoype tells us what type of data is it! 
 */

 // Question-1: Create a const object "Product" to store information shown in the picture(amazon product photo)
 
 const product = {        // "=" is assignment operator. a=b means "b" variable saved in "a" variable
Name : "Pen", //string
Rating : 4.4, //number
Price : 10,  // number
Offer : 5,  //number

  }; 
console.log (product); // console.log ( "product" ); Inverted comma is for print the same thing as written inside it.

// Question-2: Create a const obj called "Profile" to store information from a Instagram profile. 

const Profile = {
    username: "rezu0-0",
    isFollow: true,
    Followers: 500, 
    Following: 13, 
};
console.log (Profile); 