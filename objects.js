function Book(title,author,pages,isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;

    this.info = function(){
        return `${this.title}by ${this.author} ${this.pages}pages, ${this.isRead ? "read":  "not read yet"}`;
    };
}

const theHobbit = new Book("The Hobbit","JRR",295,false);

console.log(theHobbit.info());