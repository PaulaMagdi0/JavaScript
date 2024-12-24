// Question one
// --------------

var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
arr1.sort((a,b) => a-b);
console.log(arr1);

// Question two
// --------------

function longestWord(sentence){
    var arr = sentence.split(' ');
    var ans = '';
    for (let i = 0; i < arr.length; i++){
        if (arr[i].length > ans.length){
            ans = arr[i];
        }
    }
    console.log(ans);
}
longestWord('Web Development Tutorial');

// Question three
// --------------

function prime(num){
    if (num <= 1){
        console.log('Enter a number greater than 1.');
        return;
    }
    for (let i = 2; i < num; i++){
        if (num % i === 0){
            console.log(num + ' is Not a Prime Number');
            return;
        }
    }
    console.log(num + ' is a Prime Number');
}
prime(1);
prime(2);
prime(3);
prime(4);
prime(5);

// Question four
// --------------

function amountToCoins(amount, coins){
    coins.sort((a, b) => b - a);
    const ans = [];
    for (let i=0; i<coins.length; i++){
        while (amount >= coins[i]){
            amount -= coins[i];
            ans.push(coins[i]);
        }
    }
    console.log(ans);
}
amountToCoins(46,[25,10,5,2,1]);