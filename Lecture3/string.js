//--------------------STRINGS-----------------------------//  

// TO manage code i've comment out most of them. So, to run them copy and comment them!

//String is a sequence of characters used to represent text.
let str = "JavaScript" //you can type str in the console panale in browser or,
console.log (str); 
console.log(str.length) // type str.length  in browswer console panel you'll get the length 
// In JS counting strat from 0 to ..... like - J a v a S c r i p t  
//                                             0 1 2 3 4 5 6 7 8 9 
console.log( str[0] ); // J 
console.log (str[4]); // S 
// Template Literals----------------------------------           
// A way to have embedded expressions in strings. Here we use `` and ${this called String Interpolation}

let obj = {
    item: "pen",
    price: 10,
};                     /* Without string interpolation- 
                console.log("The coast of",obj.item,"is",obj.price,"dollars") 
                    OUTPUT - The coast of pen is 10 dollars   //where 10 will be a number */
 //string interpoation
 let output = `The coast of ${obj.item} is ${obj.price} dollars` 
 console.log(output);  //10 will be a string here! NOT A NUMBER
 
 //String Methods in Js: These are built in functions to manipulate string.
 // 1) str.toUpperCase()
 let Str = "rezu"; 
 str = Str.toUpperCase()                     // now type Str.toUpperCase();
console.log(str); // REZU                   // it will show 'REZU'

// 2) str.toLowerCase (same as str.toUpperCase())
// 3) str.trim()  to trim before and after spaces 
/*  let str = "           JavaScript           " 
   console.log (str.trim(str));
   OUTPUT - 'JavaScript'
   !! IT WILL NOT TRIM INSIDE SPACES 
 */
// 4) str.slice(start,end?)
/* let str = "0123456";
console.log (str.slice(0,3)); >OUTPUT: 012; end number will not be in count!

let str = "Hello";
console.log (str.slice(2));  >OUTPUT: llo start to until it ends 
*/ 

// 5) str1.conact(str2) 
// we can also do this with str1+str2 

// 6) str.replace(searchValo, newVal) 
/*
let str = "Hello";
console.log(str.replace("lo","p"));    >//Help

let str = "Hellolo";
console.log(str.replace("lo","p"));    >//Helplo 

let str = "Hellolo";
console.log(str.replaceAll("lo","p")); >//Helpp
*/

// 7) str.charAt(idx)
/*
let str = "ILoveJS"   // ILoveJS
                      // 0123456
 console.log (str.charAt(0)); // I
 console.log (str.charAt(1)); // L
 console.log (str.charAt(3)); // v
 console.log (str.charAt(6)); // S 

 !! Space will be count as a number too 
*/

/* 
Qs1 - Prompt the user to enter their full name. Generate a username for them based on their input.
Start username with @, followed by their full name and ending with  fullname length. 
*/

let fullName = prompt("Enter your fullname without spaces");
let username = "@" + (fullName + fullName.length);
console.log(username)
