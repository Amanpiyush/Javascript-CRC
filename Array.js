let Name = ['Hiro', 'Vivy', 'Diva','Alex', 'AXL']
// console.log(Name[0]);
// console.log(typeof(Name));

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


