//For of
//For in
//For Each

//For of Loop

const Marvel = ['Captain America', 'Ironman', 'Black Widow', 'Hulk', 'Thor'];
for(const Hero of Marvel){
    // console.log(Hero);
    
}

const Hero = "Tanjiro"
for(const Heros of Hero){
    // console.log(Heros);
    
}

const map = new Map();
map.set('IN', 'India')
map.set('USA', 'United State Of America')
map.set('FR', 'Franch')
map.set('BI', 'Bali')

for(const [Maps, value] of map){
    // console.log(Maps + " : "+ value);
    
}

const Breaker = {
    name : "Sakura",
    age : 19,
    country : "Tokoyo"
}

// for(const wind of Breaker){ //in forof loop Object will not work
//console.log(wind);
    
// }

for (const key in Breaker) {
    //console.log(Breaker[key]); // it will print key and values
    //console.log(key, "    :    ", Breaker[key]);
    

    
}


//Is forin loop work in Array

const Programming = ['CPP', 'Java', 'JS', 'C#', 'C']
for(const program in Programming){
    //console.log(program , " : " ,Programming[program]);
    
}

for (const mapping in map){ //we use in loop and it is not iterable 
    //console.log(mapping[map]);
    
}


//for Each Loop 

// const Coding = ['JS', 'HTML', 'CSS', 'MySQL', 'MangoDB']
// Coding.forEach( (item) => { //Callback function doesn't have the name
// console.log(item);

//  });

const Loading = ['Load','Loader', 'Loading', 'Loadinng', 'Loadddinng']
Loading.forEach((element)=> {
    // console.log(element);
});





Loading.forEach((item, index, Array)=>{ //Parameter
   // console.log(item, index, Array);
    
})




//[],[],[],[]
//{},{},{},{
const Leveling = [
    {
        language : 'Javascript',
        lanaguagefilename : 'JS'
    },
    {
        language : 'Python',
        lanaguagefilename : 'py'
    },
    {
        language : 'C++',
        lanaguagefilename : 'CPP'
    },
    {
        language : 'Ruby',
        lanaguagefilename : 'rb'
    },
    {
        language : 'Java',
        lanaguagefilename : 'java'
    }
    
] //example : Buy Smart phone, price, image , description.

//console.log(Leveling);
Leveling.forEach((items)=>{
    
//console.log(items.lanaguagefilename);

})


const Number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let Values = Number.filter((num) => num > 4)
// console.log(Values);
// output : [5, 6, 7, 8, 9, 10]

let Value  = Number.filter((Num) => {
    return Num > 4;
})
// console.log(Value);


// const newNum = [] //It is Little hard compare to Filter
// newNum.forEach((items) => {
// if(items > 4){
//     newNum.push(items)

// }
// })

// console.log(newNum);

const books = [
  {
    title: "The Ethical Hacker’s Handbook",
    genre: "Cybersecurity",
    publish: 2018,
    edition: "2nd"
  },
  {
    title: "JavaScript: The Good Parts",
    genre: "Programming",
    publish: 2008,
    edition: "1st"
  },
  {
    title: "Web Application Hacker’s Handbook",
    genre: "Cybersecurity",
    publish: 2011,
    edition: "2nd"
  },
  {
    title: "Clean Code",
    genre: "Software Engineering",
    publish: 2008,
    edition: "1st"
  },
  {
    title: "Hacking: The Art of Exploitation",
    genre: "Cybersecurity",
    publish: 2003,
    edition: "2nd"
  },
  {
    title: "You Don’t Know JS",
    genre: "Programming",
    publish: 2015,
    edition: "1st"
  },
  {
    title: "Python Crash Course",
    genre: "Programming",
    publish: 2019,
    edition: "2nd"
  },
  {
    title: "The Pragmatic Programmer",
    genre: "Software Engineering",
    publish: 1999,
    edition: "1st"
  },
  {
    title: "Real-World Bug Hunting",
    genre: "Cybersecurity",
    publish: 2020,
    edition: "1st"
  },
  {
    title: "Introduction to Algorithms",
    genre: "Computer Science",
    publish: 2009,
    edition: "3rd"
  }
];


// const userBooking = books.filter((book) => {
//     return book.genre === 'Cybersecurity'
// });
const userBoook = books.filter((book) => {
    return book.publish > 2001, book.genre === 'Computer Science';
});

//u can use the Logical Operator 

//console.log(userBoook);

//console.log(userBooking);

const userBook = books.filter((book) => {
    return book.publish == 2009 | book.genre === 'Computer Science';
});

//console.log(userBook);


const Aank = [1,2,3,4,5,6,7,8,9,10];
const Aankvalue = Aank.map((values) => values + 10)
//console.log(Aankvalue);

//===========================chaining========================//

const myNumber = Aank.map((values) => values  * 10).map((num) => num + 1).filter((values) => {
    return values >= 40;
})

//console.log(myNumber);


//============================Reduce ==============================//

const Single = Aank.reduce((accumulator, currentvalue) => {
    //console.log(`acc: ${accumulator} and curvalu : ${currentvalue}`);
    return accumulator + currentvalue
}, 0);
//example : Shooping Cart


// console.log(Single);


const shoppingCart = [
  {
    id: 1,
    name: "Bug Hunter T-Shirt",
    price: 499,
    quantity: 2,
    category: "Apparel"
  },
  {
    id: 2,
    name: "Web Hacking Handbook",
    price: 1299,
    quantity: 1,
    category: "Books"
  },
  {
    id: 3,
    name: "Pentester Mug",
    price: 299,
    quantity: 3,
    category: "Merchandise"
  },
  {
    id: 4,
    name: "Premium Lab Subscription",
    price: 4999,
    quantity: 1,
    category: "Subscriptions"
  },
  {
    id: 5,
    name: "Sticker Pack",
    price: 99,
    quantity: 5,
    category: "Accessories"
  }
];

const Total = shoppingCart.reduce((acc, item) => {
    
    return acc + (item.price * item.quantity);
}, 0)

console.log(`The Total cart value is :  ${Total}`);
