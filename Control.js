// const balance = 1000;

// if(balance < 100){
//     console.log("Balance is lessthan 100");

// }else if(balance < 400){
//     console.log("Balance is lessthan 400");
    
// }else if(balance < 700){
//     console.log("Balance is less than 700");
    
// }else if(balance < 900){
//     console.log("Balance is lessthan 900");
    
// }else{
//     console.log("It is 1000");
    
// }

// const balance = 950;

// if(balance < 100){
//     console.log("Balance is lessthan 100");

// }else if(balance < 1000){
//     console.log("Balance is lessthan 1000");
    
// }else if(balance < 700){
//     console.log("Balance is less than 700");
    
// }else if(balance < 900){
//     console.log("Balance is lessthan 900");
    
// }else{
//     console.log("It is 1000");
    
// }


//========================Switch Case======================//

const Month = "";
switch (Month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("June");
        break;
    case 6:
        console.log("July");
        break;
    case 7:
        console.log("August");
        break;

    default:
        console.log("Invalid");
        break;
}


//=====================Turthy & Falsy Value ========================//

//Fasly : flase, 0 , -0, BigInt 0n, "", null, Undefined, NaN

//Truthy : "0", 'false'," ", [ ], {},function(){}

//check Array 
const username = [];
if (username.length == 0){
    console.log("Empty Array");
    
}

const emptyobj = {};
if ( Object.keys(emptyobj).length == 0){
    console.log("Empty Object");
    
}


//==========================?? Operator ===========================//

//Nullish coalescing Operator (??) :  null , undefined

let val1;
// val1 = 7 ?? 10

// val1 = null ?? 10

// val1 = undefined ?? 9

// val1 =9 ?? undefined 

// val1 = null ?? undefined

val1 = undefined ?? null

console.log(val1);


//===============Terniary Operator================//

const iceTeaPrice = 100;


