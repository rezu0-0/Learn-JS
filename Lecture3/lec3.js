/*
Lecture-3
Topic - Loops and Strings
*/

/*------------------------------------Loops-----------------------------------------------
 3 types of loops - 1) for loop - for (initialization; condition; increment/decrement) {}
                         Initialization → runs once before the loop starts.
                         Condition → checked before each iteration. If true → run loop, if false → stop.
                        Increment/Decrement → updates the counter after each iteration.
                    2) While Loop - while (condition) {}
                                    Condition checked before each iteration.
                                    If true → run loop.
                                    If false → stop immediately.
                    3) Do-While Loop - do {
                                       code block
                                       } while (condition);
                                    Runs the code block at least once (even if condition is false).
                                    After first run, checks condition → repeats if true.                                      
----------------------------------------------------------------------------------------------------------------- */

// ---------------- Examples of Loops ---------------- //

// 1) For Loop Example → print numbers 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log("For loop:", i);
}

// 2) While Loop Example → print numbers 1 to 5
let j = 1;
while (j <= 5) {
    console.log("While loop:", j);
    j++;
}

// 3) Do-While Loop Example → print numbers 1 to 5
let k = 1;
do {
    console.log("Do-while loop:", k);
    k++;
} while (k <= 5);
//----------------------------------------------------------//
