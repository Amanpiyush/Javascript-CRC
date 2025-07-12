// //Functions
// let Number = (num1 , num2) =>{
//     return num1+num2;
// }

// const Result = Number(4, 6);
// // console.log(Result);



// // let Message = (username)=>{
// //     if(username === undefined){
// //         console.log("Please Enter the USername");
// //         return;
// //     }
// //     return `${username} just logged in`;
// // }

// // const result = Message('Hiro'); //Undefined if we don't pass the value
// // console.log(result);


// //Professional Way to write the code
// let Message = (username = 'sam')=>{
//     if(!username){
//         console.log("Please Enter the Username");
//         return;
//     }
//     return `${username} just logged in`;
// }

// const result = Message(); //Undefined if we don't pass the value
// // console.log(result);



// //Shopping cart : create a parameter that user dont know hoe many it can add the 

// function calculatecartprice (...num1){ // Add the Multiple Items
//     return num1
// }

// console.log(calculatecartprice(200, 400, 600, 900 ));


// //==========================Array=======================//

// const myNewArray = [ 200, 400, 600, 800];
// function returnthearray (myarray){
//     return myarray[1];
// }

// console.log(returnthearray(myNewArray));




function one() {
console.log('one')
};

function two(){
    console.log('Two')
}

function three() {
    console.log('Three')
}