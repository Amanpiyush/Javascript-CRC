//scope
function one(){
    const Username = "Hiro"

    function two(){
        const website = "Youtube"
        console.log(Username);
    }
    // console.log(website); //It will throw the Error 
    two();
}
//one();


if(true){
    const user = 'Vivy'
    if(user == 'Vivy'){
        const website = 'Youtube'
        // console.log(user + website);
        
    }
    // console.log(website);  //Error
    
}
// console.log(user); //Error




//===================================Intersting=========================//

function addone (num){  //Functions
    return num + 1;
}

console.log(addone(5));
//it can access before than the declaration


const addTwo = function(num){ //Expression
    return num + 2;
}
console.log(addTwo(6));
//it can't access before the declaration





