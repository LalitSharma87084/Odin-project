function addNumbers(num1,num2){
    // let result = num1+num2
    // return result
    
    return num1 + num2 
}
const result = addNumbers(3,4)
// console.log(result)

function loginUserMessage(username){
    if(username == undefined){
        console.log("please enter username")
        return
    }
        return `${username} just logged in  `
    }

    // const message = loginUserMessage("Lalit")
// console.log(loginUserMessage())

//REST operator
function calculateCart(...num1){
    return num1
}
console.log(calculateCart(200,400,600))
