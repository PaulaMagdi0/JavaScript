// Question one
// --------------

// function sort(x, y, z) {
//   if (x > y && y > z) {
//     alert(x + ", " + y + ", " + z);
//   } else if (y > x && x > z) {
//     alert(y + ", " + x + ", " + z);
//   } else if (z > x && x > y) {
//     alert(z + ", " + x + ", " + y);
//   } else {
//     alert(z + ", " + y + ", " + x);
//   }
// }
// sort(5,10,1)

// Question two
// --------------

// function fizzBuzz() {
//   for(var i=1;i<=100;i++){
//     if(i%3 === 0){
//       console.log(i + " Fizz");
//     }
//     if(i%5 === 0){
//       console.log(i + " Buzz");
//     }
//     if(i%3 === 0 && i%5 === 0){
//       console.log(i + " FizzBuzz");
//     }
//   }
// }
// fizzBuzz();

// Question three
// --------------

// function sumition() {
//   var sum=0;
//   for(var i=1;i<=1000;i++){
//     if(i%3 === 0 && i%5 === 0){
//       sum+=i;
//     }
//   }
//   console.log(sum);
// }
// sumition();

// Question four
// --------------

// var count = 0;

// function guessGame() {
//   var userGuess = prompt("Guess a number between 1 and 10:");
//   userGuess = parseInt(userGuess, 10);
//   if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
//       alert("Please enter a valid number between 1 and 10.");
//       guessGame(); 
//       return;
//   }
//   count++;
//   if (userGuess === 5) { // or use Math.floor(Math.random() * 10) + 1
//       alert("Good Work!");
//   } else {
//       if (count < 3) {
//         var tryAgain = confirm("Wrong guess, wanna try again (y,n)");
//         if (tryAgain == "y") {
//             guessGame();
//         } else {
//             alert("Thanks for playing!"); 
//         }
//       } else {
//           alert("Game over!");
//       }
//   }
// }
// guessGame();