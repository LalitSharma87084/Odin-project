const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    // DB calls ,network calls
    setTimeout(function(){
        console.log("Async task is complete")
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    })
}).then(function(){
    console.log("Async task 2 resolved")
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Chai aur Code",email:"chai@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user.username)
})

const promiseFour = new Promise((resolve,reject) => {
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"Lalit",Password:"123"})
        }else{
            reject("Error:something went wrong")
        }
    },1000)
})
promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("The promise is either resolved or rejected")
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"JavaScript",Password:"123"})
        }else{
            reject("Error:JS went wrong")
        }
    },1000)
})
async function consumePromise(){
    try{
        const response = await promiseFive
        console.log(response);
    }catch(error){
        console.log(error)
    }
}
consumePromise()

async function getAllUsers() {
   try{
    const response = await fetch('https://api.github.com/users/LalitSharma87084')
    const data = await response.json()
   }catch(error){
    console.log("e:",error)
   }
}
getAllUsers()



fetch('https://api.github.com/users/LalitSharma87084')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})