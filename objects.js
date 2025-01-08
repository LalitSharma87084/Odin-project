// function Book(title,author,pages,isRead){
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.isRead = isRead;

//     this.info = function(){
//         return `${this.title}by ${this.author} ${this.pages}pages, ${this.isRead ? "read":  "not read yet"}`;
//     };
// }

// const theHobbit = new Book("The Hobbit","JRR",295,false);

// console.log(theHobbit.info());
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

const obj3 = Object.assign(obj1,obj2)
// console.log(obj3)

const course = {
    coursename : "js in hindi",
    coursePrice : "999",
    courseInstructor : "Lalit"
}

const {courseInstructor} = course
console.log(courseInstructor)