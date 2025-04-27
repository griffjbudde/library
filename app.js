const myLibrary = [];

const newBookButton = document.querySelector("#add-button");
const modal = document.querySelector(".modal");
const submitButton = document.querySelector(".submit-button");
const closeButton = document.querySelector(".close-button");
const gridContainer = document.querySelector(".library-content")


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

function addToGrid() {

    for (let i = 0; i < myLibrary.length; i++) {

    const newCard = document.createElement('div');
    newCard.classList.add('card');
    gridContainer.appendChild(newCard);

    const cardTitle = document.createElement('h2');
    const cardAuthor = document.createElement('p');
    const cardLength = document.createElement('p');
    const cardRead = document.createElement('p');
    const cardDelete = document.createElement('div');
    cardDelete.classList.add('delete-button');
    
    cardRead.classList.add('toggle');

    newCard.appendChild(cardTitle);
    newCard.appendChild(cardAuthor);
    newCard.appendChild(cardLength);
    newCard.appendChild(cardRead);
    newCard.appendChild(cardDelete);

    cardTitle.textContent = myLibrary[i].title;
    cardAuthor.textContent = myLibrary[i].author;
    cardLength.textContent = myLibrary[i].length + ' pages';
    cardRead.textContent = myLibrary[i].read;
    cardDelete.textContent = "Remove from Library";
    
    cardRead.addEventListener('click', () => {
        if (cardRead.textContent === "Read") {
            cardRead.textContent = "Not Read";
        } else if (cardRead.textContent === "Not Read") {
            cardRead.textContent = "Read";
        } else {
            alert('whoops')
        }
    })

    cardDelete.addEventListener('click', () => {
        newCard.remove();
    })

}}

newBookButton.addEventListener('click', () => {
    modal.style.display = "flex";
});

submitButton.addEventListener('click', () => {
    var title = document.querySelector("#title").value;
    var author = document.querySelector("#author").value;
    var length = document.querySelector("#length").value;
    var readRadio = document.querySelector('input[name="read"]:checked')
    var read = "";


    if (readRadio.id == 'read-true') {
        read = "Read";
    }
    else if (readRadio.id == 'read-false') {
        read = "Not Read";
    }

    const inputBook = new Book(title, author, length, read);
    myLibrary.push(inputBook);


    const newCard = document.createElement('div');
    newCard.classList.add('card');
    gridContainer.appendChild(newCard);

    const cardTitle = document.createElement('h2');
    const cardAuthor = document.createElement('p');
    const cardLength = document.createElement('p');
    const cardRead = document.createElement('p');
    const cardDelete = document.createElement('div');
    cardDelete.classList.add('delete-button');
    cardRead.classList.add('toggle');

    newCard.appendChild(cardTitle);
    newCard.appendChild(cardAuthor);
    newCard.appendChild(cardLength);
    newCard.appendChild(cardRead);
    newCard.appendChild(cardDelete);

    cardTitle.textContent = inputBook.title;
    cardAuthor.textContent = inputBook.author;
    cardLength.textContent = inputBook.length + ' pages';
    cardRead.textContent = inputBook.read;
    cardDelete.textContent = "Remove from Library";  

    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#length").value = "";

    modal.style.display = "none";
   
    cardRead.addEventListener('click', () => {
        if (cardRead.textContent === "Read") {
            cardRead.textContent = "Not Read";
        } else if (cardRead.textContent === "Not Read") {
            cardRead.textContent = "Read";
        } else {
            alert('whoops')
        }
    })

    cardDelete.addEventListener('click', () => {
        newCard.remove();
    })


})

closeButton.addEventListener('click', () => {
    modal.style.display = "none";
})



const theSunAlsoRises = new Book("The Sun Also Rises", "Ernest Hemmingway", "270", "Read");
addBookToLibrary(theSunAlsoRises);
addToGrid();