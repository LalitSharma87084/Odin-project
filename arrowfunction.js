const user = {
    username: "Lalit",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} welcome to the website`)
        console.log(this);  
    }
}
// console.log(this)
// user.welcomeMessage()
// user.username = "sam"
// // user.welcomeMessage()
// function chai(){
//     let username = "Lalit"
//     console.log(`${this.username}`)
// }
// chai()


//ARROW function

// const addTwo = (num1,num2) => {
//     return num1 + num2 ;
// }
// console.log(addTwo(3,4))
const addTwo = (num1,num2) =>  ({usernme : "Lalit"})

console.log(addTwo(3,4))