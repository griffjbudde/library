const myLibrary = [];

function Book(title, author, length, read) {
    if (!new.target) {
        throw Error("Use new operator")
    }
    this.title = title;
    this.author = author;
    this.length = length;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(Book) {
    myLibrary.push(Book)
}

let theSunAlsoRises = new Book("The Sun Also Rises", "Ernest Hemmingway", "270", "true")

addBookToLibrary(theSunAlsoRises)

let terminalList = new Book("The Terminal List", "Jack Carr", "300", "true")

addBookToLibrary(terminalList)

console.log(myLibrary)