//Objects


let key = Symbol('key1')

//Objects Literal
const user = {
    Name : 'Hiro',
    [key] : 'mykey1',
    Age : 21,
    Country : 'In',
    isLoggedIn : true,
    lastworkingday : ['Monday', 'Tuesday'],
    "Company Name " : "Google"
}

//Access Object
console.log(user["Age"]);
// console.log(key);
// console.log(typeof key);
console.log(user.key);
console.log(typeof user.key);
console.log(user[key]); // Important

//Chnage the value
user.Age = 25;
console.log(user.Age);

Object.freeze(user); //freeze the Object
user.Country="Bharat"
console.log(user.Country);

console.log(user);


//Function
user.Greeting = function(){
    console.log(`Hello User ${this.Age}`)
}


// console.log(["Company Name "]);


let MyName = Symbol("Hiro");
//USe this sumbol in the Object and show that it is a Object.

let User = {
    Name : "Sakura",
    Age : 19,
    Country : 'Tokoyo',
    Occupation : 'Fighter',
    School : 'Tokoyo School',
    [MyName] : 'Vivy'
}

console.log(User);
console.log(typeof User);
console.log(User[MyName]);


User.Greeting = function (){
    console.log("Hello HIro");
}

User.Greeting2 = function(){
    console.log(`Hello Hiro, I'm from ${this.Country} and I'm a ${this.Occupation}`);
    
}

console.log(User.Greeting());
console.log(User.Greeting2());


//====================Object Constructor=====================//

const tinderuser = new Object() //Singleton object
const tinderuers = {} //Non-singleton Object

tinderuers.id = '4567AXYZS'
tinderuers.Name = "ALex"
tinderuers.Age = 25

// console.log(tinderuers);

const regularuser = {
    Email : "vivy@google.com",
    fullname : {
        userfullName : {
            firstName : "Vivy",
            LastName : "Alex"
        }
    }
}

// console.log(regularuser);
console.log(regularuser.fullname.userfullName.LastName);
//Optional chaining  -- ? [Future discusstion]


const obj1 = {1 : 'a', 2 : 'b'}
const obj2 = {3 : 'c', 4 : 'd'}

// const obj3 = Object.assign({},obj1, obj2);
const obj3 = {...obj1, ...obj2}
console.log(obj3);



const USER = [
    {
        Id : 2,
        email : 'Hiro@google.com'
    }
    ,{
        Id : 2,
        email : 'Hiro@google2.com'
    },
    {
        Id : 2,
        email : 'Hiro@google3.com'
    },
    {
        Id : 2,
        email : 'Hiro@google4.com'
    }
    
]


console.log(USER[1].email);
console.log(tinderuers);
console.log(Object.keys(tinderuers));
console.log(Object.values(tinderuers));
console.log(Object.entries(tinderuers));
console.log(tinderuers.hasOwnProperty('Name'));



//==============Object De-structuring ==================//
 const course = {
    coursename : 'Chai aur code',
    price : "999",
    courseInstructors : "Hitesh"
 }

 const {courseInstructors} = course
//  console.log(courseInstructors);
 

//======================API====================//
//randomuser API

//================================Pratice=====================//
const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits[2]);

fruits.push('Mango');
console.log(fruits);

fruits.shift();
console.log(fruits);

const Fruit = {...fruits};
console.log(Fruit);

console.log(fruits.indexOf('cherry'));

const nums = [1, 4, 7, 10, 15];
const result = nums.filter((Num) => Num >  5);
console.log(result);

//===========Reduce===========//
//accumulater default value is "0" and you can assign the Value.
//Ex:LIke a calculator in the weigt machine 0.00

const total = nums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(total);

const Value = [7, 9, 10, 27, 30 ];
const Totalsum = Value.reduce((accumulator, currentValue) =>{
   return accumulator + currentValue;
},0);
console.log(Totalsum);


const val1 = [1,2]
const val2 = [3,4]
const val4 = val1.concat(val2);
const val3 = [...val1, ...val2]
console.log(val3);
console.log(val4);


//====================Object Question Prtices ===================//

const user = {
  name: 'Alex',
  address: {
    city: 'New York',
    zip: 10001
  }
};

console.log(user.address.zip);

user.age = 30;
console.log(user);

user.phone = '123-456'
console.log(user);

console.log(user.hasOwnProperty('name'));


console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));


const people = [
  { name: 'A', age: 20 },
  { name: 'B', age: 25 },
  { name: 'C', age: 18 }
];

const Age = people.filter((Aged) => Aged.age > 19 );
console.log(Age);

const Name = people.filter(person => person.age > 19).map(person => person.name);
console.log(Name);





