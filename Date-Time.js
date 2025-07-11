// console.log(Date());

// let mydate = new Date();
// console.log(("Today Date is : " + mydate));
// console.log(typeof(mydate));
// console.log((mydate.toJSON())); //2025-07-11T06:42:57.172Z
// console.log(mydate.toLocaleDateString());  //11/07/2025

// console.log(mydate.toLocaleTimeString());//12:12:57 pm

// let mytimestamp = Date.now()
// // console.log(mytimestamp);

// console.log(Math.floor(Date.now() / 1000));


// let newdate = new Date();
// console.log(newdate.getMonth());
// console.log(newdate.getDay());

// //

// newdate.toLocaleString('')


//Praticle Questions
let date = new Date();
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());
console.log(date.getDay());


console.log(`${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`);


//Write code to calculate the number of days between 2024-01-01 and today.

let TodayDate = new Date();
let Distance = ('2024-01-01' -(`${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`) );
console.log(Distance);

