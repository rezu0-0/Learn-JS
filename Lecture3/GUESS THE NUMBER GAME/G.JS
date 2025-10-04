alert("🎮 Welcome to the Number Pattern Guess Game!");

let correct = true;
for(let i=1; i<=10; i++) {

    let Question , Answer;  
if(i === 1)  {Question="2,4,6,______", Answer=8;}
if(i === 2)  {Question="3,6,9,______", Answer=12;}
if(i === 3)  {Question="5,10,15,______", Answer=20;}
if(i === 4)  {Question="10,20,30,______", Answer=40;}
if(i === 5)  {Question="7,14,21,______", Answer=28;}
if(i === 6)  {Question="4,8,12,______", Answer=16;}
if(i === 7)  {Question="9,18,27,______", Answer=36;}
if(i === 8)  {Question="11,22,33,______", Answer=44;}
if(i === 9)  {Question="8,16,24,______", Answer=32;}
if(i === 10) {Question="6,12,18,______", Answer=24;}

let Guess = prompt(` Q${i}: ${Question}\nGuess the next number: `) // ${ } this is the engine behind dynamic string in JavaScript
if(Number(Guess) === Answer) {                                     // \n is for next line ( like pressig the enter )         
    alert ("✅ Correct!");
}   else {
     alert("❌ WRONG GUESS!");
     correct = false;
     break;
}                                

}

if(correct){
    alert ("🏆YOU WON THE GAME!");
} else {
    alert ("GAME OVER! Better luck next time!");
}
