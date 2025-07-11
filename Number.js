// let score = 400;


// const balance = new Number(100);
// console.log(balance);




// let number = 23.4;
// // console.log(Math.ceil(Number));

// console.log(balance.toString().length); //3
// console.log(balance.toString); // function:string
// console.log(balance.toString()); //100

// console.log(number.toFixed(1));


// const value = 24.7636564;
// console.log(value.toFixed(2));

// console.log(value.toPrecision(2));


// const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));
// console.log(typeof(hundreds));


///==============Math Libray============///

// console.log((Math));
// console.log(Math.abs(-34));

// console.log(Math.round(45.45));
// console.log(Math.min(3,4,8,1,9,3,7,4,7));
// console.log(Math.max(3,4,8,1,9,3,7,4,7));

// console.log(Math.random()*6+1);

const Dice = Math.random()*6+1; //Zeo will no come in the dice
console.log(Math.round(Dice));

const Min = 10;
const Max = 20;
console.log(Math.floor(Math.random()*(Max - Min + 1)) + Min);//avoid Zero

