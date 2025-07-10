let value = 4;
let negvalue = -value;
// console.log(negvalue);

//Normal +,-,*,/,% operation 

let star1 = "Demaon";
let star2 = 'Slayer';
let star3 = star1 +" "+ star2;
// console.log(star3);

// console.log("1" + 2); //first string and remaining are string 
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// console.log("1" + 2 + 2 + 2);
// console.log(1 + 2 + 2 + "2");

// console.log(3+4);
// console.log(5/25);



// console.log((3 + 4 ) * (5 / 25));

// console.log(+true); //It is not good for production
// console.log(+"");


// let num1 , num2, num3;  // Code Readability is Important
// num1 = num2 = num3 = 2 + 2;


let gamecounter  = 100;
++gamecounter;
// console.log(gamecounter);


let x = 100;
let y = x++;
let z = ++y;
console.log(`x:${x}, y:${y}, z:${z}`);


//postfix
let a = 3;
let b = a++;

//b = 3
//a = 3+1
//a = 4
//so a = 4, b = 3 

//prefix
let c = 3;
let d = ++c;

// d = 1+c
//d = 4;
//c = 1+c
//c = 4
//c == 4, b == 4