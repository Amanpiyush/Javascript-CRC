let Name = "Tanjiro Kamado";
console.log("Name: " + Name);
let stat = null;
console.log(stat);
let state;
console.log(state);

// Data Types
//Number
//bigint
//string
//boolean
//null
//undefined
//symbol  == Unique
//object

console.log(typeof stat);
 
//NUll is an object
//undefined is an undefined



/***************** DataType ***************/
//js is dynamic typed Languaged

//Primitive
// string | Boolean | Number | BigInt

//Refernce (Non - primitive)
//Array | Object | Functions

const id = Symbol('123');
const anotherId = Symbol('123')
console.log(id == anotherId);
console.log(id === anotherId);



let Fruits = ['Apple', 'Banana', 'Grapes', 'Mango']
console.log(Fruits);
console.log(typeof (Fruits));

let user = {
    Name : 'Tanjiro',
    Age : 19,
    Work : 'Demon slayer'
}

let Number = function Hello (){
    for(let i = 0;i<=10;i++){
        console.log("Demon Slayer");
        
    }
}
Number();

console.log(typeof(Number));
console.log(typeof(id));
