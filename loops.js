// for Loop
for(let i = 0; i<10; i++){
    const element = i;
    if(element ==5){
        // console.log("5 is the best number");
    }
    // console.log(element);
}
// for(let i=0; i<=10; i++){
//     console.log(`outer loop ${i}`)
//     for(let j=0; j<=10; j++){
//         console.log(`inner loop ${j}`);
//     }
// }

let myArr = ["flash","batman","superman"]

for(let index = 0; index<myArr.length;index++){
    const element = myArr[index];
    // console.log(element)
}
// break and continue
for(let index = 1; index<=10;index++){

    if(index==5){
        // console.log(`Detected 5 `)
        break;
    }
    // console.log(`value of i is ${index}`)
}
const greetings = "Hello world!"
for(const greet of greetings){
    // console.log(`Each char is ${greet}`)
}
//Map in jss
const map1 = new Map();
map1.set('a',1);
map1.set('b',2);
map1.set('c',3);
// console.log(map1.get('a'));
// const myObject = {
//     'game1':'NFS',
//     'game2': 'PUBG'
// }
// for(const[key,value] of myObject){
//     // console.log(key, ':-', value);
// }

//for in loop
const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'ruby',
    swift :'swift'
}
for (const key in myObject) {
    // console.log(myObject[key])
}
let programming = ['js','ruby','java']
for (const key in programming) {
    // console.log(programming[key])
}
//for each
const mycoding = [
    {
        languageName : "javascript",
        fileName : 'js'
    },
    {
        languageName : "java",
        fileName : 'java'
    },
    {
        languageName : "python",
        fileName : 'py'
    }
]
mycoding.forEach((item) => {
    console.log(item.languageName)
})
