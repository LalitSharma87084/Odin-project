// const coding = ["js","python","java","cpp"]

// const values = coding.forEach((item) => {
//     // console.log(item)
//     return item
// })
// console.log(values)

// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const value = myNums.filter((num) => {
//           return num > 4
// })

// console.log(value);

// const userbooks = books.filter((bk) => bk.publish > 2000) 
// const newNums = myNums
                    //   .map((num) => num * 10 )
                    //   .map((num) => num + 1)
                    //   console.log(newNums)

//REDUCE method
const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,curval){
//     console.log(`acc:-${acc} and curval:- ${curval}`);
//     return acc+curval
// },0)
// myTotal = myNums.reduce((acc,curval) => acc+curval ,0)
// console.log(myTotal)
const shoppingCart = [
    {
        course : "js course",
        price : 999
    },
    {
        course : "python",
        price : 1999
    },
    {
        course : "mobile dev course",
        price : 2999
    },
]
const pricetoPay = shoppingCart.reduce((acc,item) => acc+item.price,0)
// console.log(pricetoPay)