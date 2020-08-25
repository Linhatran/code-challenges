function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
      return (`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`); 
      //theHobbit.info() // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
    }
} 
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
console.log(theHobbit.info());
