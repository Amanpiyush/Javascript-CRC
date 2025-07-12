const user = {
    username : "Hiro",
    paid : 999,
    welcome:function(){
        //console.log(`welcome to wesbite user ${this.username}`);
        // console.log(this);
        
    }
}

user.welcome();
// console.log(this);

// function chai(){
//     const username = "HIro"
//     console.log(this.username); //"this"   keyword use in objects
// }
// chai()


const chai = (num1, num2) =>{ //explicit return
    console.log(this);  // we get the empty Objects
    return num1+num2;
}
console.log(chai(3,5))

//another way to use it 
const code = (num1, num2) => num1 + num2; //Implicit return
console.log(code(8,9));



const codes = (num1, num2) => (num1 + num2); //Implicit return
console.log(code(8,9));


//access object in arrow function

const codess = (num1, num2) =>({username : "Diva"}) ;
console.log(codess(2,5));


