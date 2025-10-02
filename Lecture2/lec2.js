/*
Lecture-2 
Topic - Operators and Conditional Statements 
*/
                    // "//" this is for command. For multi line command we use /**/ this.

                    /*---------------------OPERATORS----------------------
 1) Arithmetic Operators: + (plus)
                          - (minus)
                          * (multiplication)
                          / (division)
                          % (modulus, returns the remainder of a division operation.)
                          ** (exponent) < a**b -> a^b >
                          ++ (increment)
                          -- (decrement)

 2) Assignment Operators:  =, +=, -=, *=, /=, %=
 3) Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
                   == : checks only value
                  === : checks value + type
 4) Logical Operators: && (AND) <- F+F=F, F+T=F, T+T=T ->
                       || (OR)  <- F+T=T, F+F=F, T+T=T ->
                        ! (NOT) <- T=F, F=T ->
 5) Ternary Operator: condition ? true Output : false Output; (age>18? "adult": "not adult";)                       
---------------------------------------------------------------------------------------------*/

/* ----------------- CONDITIONALS -----------------
if(condition) { ... }
else if(condition) { ... } <- For many conditions ->
else { ... } <- end condition ->
--------------------------------------------------- */

//Question-1: Get user to Input a number using prompt("Enter a number"). Check If the number is a multiple of 5 or not.

   let num = prompt ("Enter a number");    //prompt is a command to get user input
   if (num%5 === 0)  {                    //this is a popup
         console.log(num, "is a multiple of 5");   
} else {
    console.log (num, "is NOT a multiple of 5")
}

//Question-2: Write a code which can give grades to students according to their scores

let score = 75; // you have to fill this score section manually to get the output. we can use prompt here. But we already use once so we cannot use prompt in this section again! 
let grade;         
if (score>= 80 && score<=100) {
    grade = "A+"; 
} else if ( score>=70 && score<= 79 ) {
    grade = "A";
} else if ( score>=60 && score<=69 ) {
    grade = "A-";
} else if (score>=50 && score<=59) {
    grade = "B";
} else if ( score>=40 && score<=49) {
    grade = "C";
} else if (score>=0 && score<=39) {
    grade = "F";
}
console.log ("Your Grade is:", grade);


// Ternary style less code same output-  
/*

let grade = (score >= 80 && score <= 100) ? "A+" :
            (score >= 70) ? "A" :
            (score >= 60) ? "A-" :
            (score >= 50) ? "B" :
            (score >= 40) ? "C" :
            (score >= 0) ? "F" : "Invalid score";
console.log("Your Grade is:", grade);

*/
