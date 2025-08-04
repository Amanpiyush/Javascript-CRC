
//Promise reprsen the value in a eventual future
const PromiseOne = new Promise ((resolve, reject)=>{
    //This is a promise
    //It will be resolved in the future
    //It can be used to handle asynchronous operations
    setTimeout(()=>{
       console.log("Promise is resolved");
       resolve();
    }, 1000);
  })

  //To connect the "Promiseone" with the "then" method use the resolve method
    PromiseOne.then(()=>{
      console.log('Promise Consumed');
    })

//It is completely asynchronous in single code. 
    new Promise ((resolve, reject)=>{
      setTimeout(()=>{
        console.log("Asynchronous operation completed Two");
        resolve();
      },1000)
    }).then(()=>{
      console.log("Promise Two Consumed");
    })


//
const promiseThree = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve({
      userName : "Beast",
      userAge : 20
    })
  },1000)
})
promiseThree.then((user)=>{
  console.log(`User Name is ${user.userName} and User Age is ${user.userAge}`);
})

//Promise Four
const promiseFour = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    let error = false; //Change this to true to simulate an error
    if(!error){
      resolve({
        userName: "Beast",
        password: 2035473
      })
    }else{
      reject("Error: Something went wrong");
    }
  }, 1000)
});

promiseFour.then((user)=>{
  console.log(user);
  return user.userName;
}).then((userName)=>{
  console.log(`User Name is ${userName}`);
}).catch((error)=>{
  console.log(error);
}).finally(()=>{
  console.log("Promise Four is completed");
})


//Promise Five
const promiseFive = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    let error = true; //Change this to true to simulate an error
    if(!error){
      resolve({
        userName: "Gojo",
        password: 2035473
      })
    }else{
      reject("Error: Something went wrong");
    }
  }, 1000)
});

async function promiseFiveConsueme(){
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
} 
promiseFiveConsueme();


//Syncawait Method
//  async function getAllUser(){
//   try {
//     fetch("https://randomuser.me/api");
//     const data = response.json()
//     console.log(data);
//   } catch (error) {
//     console.log(`Error: ${error}`);
//   }
//  }

//  getAllUser();  



fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
  return response.json()
}).then((data)=>{
  console.log(data);
})
.catch((error)=>{
  console.log(`Error: ${error}`);
})

