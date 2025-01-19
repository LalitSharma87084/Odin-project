function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    return this
}
const userOne = new User("Lalit",12,true)
// console.log(userOne)

//new keyword generates empty object everytime called instance
//2 then a constructor functions is made that packs all the arguments in object and gives us 
//3 the arguments from the this keyword injects in that
//4 and we get from the function

