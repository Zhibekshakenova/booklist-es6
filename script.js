/* Book Constructor */
// function Book(title, author, isbn) {
//   this.title = title;
//   this.author = author;
//   this.isbn = isbn;
// }

// /* UI Constructor  */
// function UI() {}

/* UI Prototype Methods */
// UI.prototype.addBookToList = function (book) {
//   const list = document.getElementById("book-list");
//   const row = document.createElement("tr");

//   row.innerHTML = `
//     <td>${book.title}</td>
//     <td>${book.author}</td>
//     <td>${book.isbn}</td>
//     <td><a href="#" class="delete">X</a></td>
//   `;

//   list.appendChild(row);
// };

// Show Alert
// UI.prototype.showAlert = function (msg, className) {
//   const div = document.createElement("div");
//   div.className = `alert ${className}`;

//   div.appendChild(document.createTextNode(msg));

//   const container = document.querySelector(".container");
//   const form = document.querySelector("#book-form");

//   container.insertBefore(div, form);

//   setTimeout(function () {
//     document.querySelector(".alert").remove();
//   }, 3000);
// };

// Clear fields
// UI.prototype.clearFields = function () {
//   document.getElementById("title").value = "";
//   document.getElementById("author").value = "";
//   document.getElementById("isbn").value = "";
// };

// delete books method
// UI.prototype.deleteBook = function(el) {
//   if (el.classList.contains("delete")) {
//     const ui = new UI();
//     ui.showAlert("Book deleted", "delete-msg");
//     el.parentElement.parentElement.remove();
//   }
// };

// event listener to delete book
// document.querySelector("#book-list").addEventListener("click", (el) => {
//  const ui = new UI();
//  ui.deleteBook(el.target);
 
// });



// /* Event Listeners */
//   document.getElementById("book-form").addEventListener("submit", (e) => {
//   const title = document.getElementById("title").value,
//     author = document.getElementById("author").value,
//     isbn = document.getElementById("isbn").value;

//   const book = new Book(title, author, isbn);

//   const ui = new UI();

//   // Validate
//   if (title === "" || author === "" || isbn === "") {
//     ui.showAlert("Please fill in all fields!", "error");
//   } else if(isNaN(isbn)){
//     ui.showAlert("ISBN must be a number", "error");
//     document.getElementById("isbn").value = "";
//   } else if(isbn.length != 8) {
//     ui.showAlert("ISBN must have 8 digits", "error");
//     document.getElementById("isbn").value = "";
//   } else {
//     ui.addBookToList(book);
//     ui.showAlert("Book added!", "success");
//     ui.clearFields();
//   }

//   // document.getElementById("book-list").addEventListener("click", (e) => {
//   //   ui.removeBookFromList(e.target);

//   //   // ui.showAlert('Book Removed', 'success');
//   // })

//   e.preventDefault();
//  });

//это новый es6 вариант.


 class Book {
  constructor(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
  }
 }
 class UI {
   addBookToList(book) {
    const list = document.getElementById("book-list");
    const row = document.createElement("tr");
  
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X</a></td>
    `;

    list.appendChild(row);
   }
   showAlert(msg, className) {

    const div = document.createElement("div");
    div.className = `alert ${className}`;
  
    div.appendChild(document.createTextNode(msg));
  
    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");
  
    container.insertBefore(div, form);
  
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
   }
   deleteBook(target) {
    if (el.classList.contains("delete")) {
      const ui = new UI();
      ui.showAlert("Book deleted", "delete-msg");
      el.parentElement.parentElement.remove();
    }
   }
   clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
   }
 }
 // event listener to delete book
 // не удаляет через х промлема здесь
document.querySelector("#book-list").addEventListener("click", (el) => {
  const ui = new UI();
  ui.deleteBook(el.target);
  
 });
/* Event Listeners */
document.getElementById("book-form").addEventListener("submit", (e) => {
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  const book = new Book(title, author, isbn);

  const ui = new UI();

  // Validate
  if (title === "" || author === "" || isbn === "") {
    ui.showAlert("Please fill in all fields!", "error");
  } else if(isNaN(isbn)){
    ui.showAlert("ISBN must be a number", "error");
    document.getElementById("isbn").value = "";
  } else if(isbn.length != 8) {
    ui.showAlert("ISBN must have 8 digits", "error");
    document.getElementById("isbn").value = "";
  } else {
    ui.addBookToList(book);
    ui.showAlert("Book added!", "success");
    ui.clearFields();
  }

  e.preventDefault();
 });



 

  
 