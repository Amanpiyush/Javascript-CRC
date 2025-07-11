let Name = "Hiro";
let Name2 = "Vivy";
// let FullName = Name + " " + Name2;
// console.log(FullName); //Old way to write the code.


//Modern way string Interpolation
// console.log(`Hello My First Name is ${Name} and my last name is ${Name2}`);
// console.log(`Name : ${Name} ${Name2}`);
// console.log(`Name Two : ${Name + Name2}`);



const GameName = new String ('Hiro Vivy');
// console.log(GameName);
// console.log(typeof(GameName));


// console.log(GameName.toUpperCase());
// console.log(GameName.charAt(6));
// console.log(GameName.indexOf('V'));
// console.log(GameName.charAt(5));


//Comparison String
let num1 = "23";
let num2 = 54;
let num3 = 23
console.log(num1 > num2);
console.log(num2 > num1);
console.log(num1 == num3);
console.log(num1 === num3); //Flase , becuse the datatype or not same.

console.log(GameName.charCodeAt(0));

let Slicing = GameName.substring(2, 5);
console.log(Slicing);

let windbreaker = "     Sakura      ";
console.log(windbreaker.trim());


const url = 'https://hiro.com';
const chnageurl = url.replace('.','-')
console.log(chnageurl);

console.log(url.includes('hiro'));

const str = "The quick brown fox jumps ov/>$er the lazy dog.";
const strsplit  = str.split();
const strsplit2  = str.split('');
const strsplit3  = str.split(' ');

console.log(strsplit);
console.log(strsplit2);
console.log(strsplit3);


//Info & Conversion
console.log(str.toString());
console.log(str.valueOf());

//Character Access & Codes
console.log((str.charAt(4)));
console.log(str.charCodeAt());

console.log(str.codePointAt(32));

//Searching & matching

console.log(str.indexOf('f'));
console.log(str.startsWith());
console.log(str.endsWith());
console.log(str.search("$"));
