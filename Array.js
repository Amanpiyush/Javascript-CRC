let Name = ['Hiro', 'Vivy', 'Diva','Alex', 'AXL']
console.log(Name[0]);
console.log(typeof(Name));

//Array can be resizeable

const Heros = new Array ('vivy', 'Diva', 'Hiro', 'Sakura', 'Inusuke');
// console.log(Heros[0]);
// console.log(typeof(Heros));


//Array Methods
Heros.push('Tanjiro'); //New Element is added in End
console.log(Heros);

Heros.pop() //End Element is Deleted
console.log(Heros);


Heros.unshift('Hello')
console.log(Heros);

Heros.shift('Hello')
console.log(Heros);

console.log(Heros.includes("Hiro"));
console.log(Heros.indexOf("Sakura"));

const Hero = Heros.join();
// console.log(Hero);
// console.log(typeof(Hero));


//slice and Splice

console.log("/***************Difference Between Slice and Splice**************/");
console.log("A : "+ Heros);

let Name1 = Heros.slice(1,4);
console.log("B : " + Heros);
console.log(Name1);

let Name2 = Heros.splice(1,4); // it remove all the element from given range and akeep all remining element in the variable
console.log("C : " + Heros);
console.log(Name2);


////////================Array Part-2=========================//////
// console.log(" ");
// console.log(" ");

const Marvel = ['Ironman', 'capitan America', 'Thor', 'Hulk'];
const DC = ['flash', 'Wondwe Women', 'spiderman', 'Batman'];

Marvel.push(DC);
console.log(Marvel);
console.log(DC);
Marvel.push(DC); //combine the Both the Array //problem : it show array inside Array
console.log(Marvel);

Marvel.pop();
console.log(Marvel);


// let AllHero = Marvel.concat(DC); //It will combine easy
// console.log(AllHero);

let AllHero = [...Marvel, ...DC]; //spread
console.log(AllHero); 
/*[
  'Ironman',
  'capitan America',
  'Thor',
  'Hulk',
  'flash',
  'Wondwe Women',
  'spiderman',
  'Batman'
]
 */


const AnotherArray = [1,2,3,4,[5,6,7,8],9,0,9,6,5,[2,4,5,6,4,[4,5,6,7]]];
console.log(AnotherArray.flat(Infinity))

/*[
  1, 2, 3, 4, 5, 6, 7,
  8, 9, 0, 9, 6, 5, 2,
  4, 5, 6, 4, 4, 5, 6,
  7
] */


console.log(Array.isArray('Hiro'));
console.log(Array.from('Hiro'));


console.log(Array.from({Name : "Hiro"})); //Intersting Case

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));



