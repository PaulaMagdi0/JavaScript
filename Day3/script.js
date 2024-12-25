// Question one
// --------------

function alphabet(str) {
    var arr = str.toLowerCase().replace(/[^a-z]/g,'').split('');
    return arr.map(char => char.charCodeAt(0) - 96).join(' ');
}

console.log(alphabet("The sunset sets at twelve o' clock."));

// Question two
// --------------

function sort(str) {
    var index = str.replace(/[^1-9 ]/g, '').split(' ');
    var words = str.split(' ');
    var ans = [];

    for (let i = 0; i < index.length; i++) {
        ans[index[i] - 1] = words[i];
    }

    return ans.join(' ');
}

console.log(sort("is2 Thi1s T4est 3a"));
console.log(sort("4of Fo1r pe6ople g3ood th5e the2"));

// Question three
// --------------

function multiply(a, b){
    if(arguments.length === 2){
        return a * b;
    }else if(arguments.length === 1){
        return function(c){
            return a * c;
        };
    }
}

console.log(multiply(3,4)); // 12
console.log(multiply(3)(4)); // 12
console.log(multiply(3)); // function(){}....

// Question four
// --------------

function guessingGame(maxGuesses) {
    var answer = Math.floor(Math.random() * 11);
    var count = 0;
    var gameOver=false;

    return function(guess) {
        if (gameOver) {
            return `The game is over! The answer was ${answer}`;
        }
        count++;
        if (count > maxGuesses) {
            return `No more guesses! The answer was ${answer}`;
        }
        if (guess === answer) {
            gameOver=true;
            return "You got it!";
        } else if (guess > answer) {
            return "Your guess is too high!";
        } else {
            return "Your guess is too low!";
        }
    };
}

// Example usage
var game = guessingGame(5);
console.log(game(1));
console.log(game(8));
console.log(game(5));
console.log(game(7));

var game2 = guessingGame(3);
console.log(game2(5));
console.log(game2(3));
console.log(game2(1));
console.log(game2(2));