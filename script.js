"use strict";
const bookContainer = document.querySelector("#table-body");

function Book(title, author, pages, isbn, read) {
  this.id = crypto.randomUUID;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isbn = isbn;
  this.read = read;
}
const myLibrary = [];

function addBookToLibrary(title, author, pages, isbn, read) {
  const book = new Book(title, author, pages, isbn, read);
  myLibrary.push(book);
  return book;
  // Adding 10 books to the library
}
addBookToLibrary(
  "Being and Time",
  "Martin Heidegger",
  589,
  9780060638504,
  false
);
addBookToLibrary(
  "Critique of Pure Reason",
  "Immanuel Kant",
  856,
  9780521657297,
  false
);
addBookToLibrary("The Republic", "Plato", 416, 9780140455113, true);
addBookToLibrary("Nicomachean Ethics", "Aristotle", 400, 9780872204645, false);
addBookToLibrary(
  "Being and Nothingness",
  "Jean-Paul Sartre",
  832,
  9780671867805,
  false
);
addBookToLibrary(
  "Phenomenology of Spirit",
  "G. W. F. Hegel",
  640,
  9780198245971,
  false
);
addBookToLibrary(
  "The World as Will and Representation",
  "Arthur Schopenhauer",
  784,
  9780486217611,
  false
);
addBookToLibrary(
  "Tractatus Logico-Philosophicus",
  "Ludwig Wittgenstein",
  160,
  9780415051867,
  true
);
addBookToLibrary(
  "The Second Sex",
  "Simone de Beauvoir",
  800,
  9780307277787,
  false
);
addBookToLibrary(
  "A Theory of Justice",
  "John Rawls",
  560,
  9780674000780,
  false
);
//
function displayBooks() {
  const container = document.getElementById("table-body");
  myLibrary.forEach((book) => {
    const bookRow = document.createElement("tr");
    bookRow.classList.add("book-row");
    const readStatus = book.read ? "✅" : "❌";
    bookRow.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td>${book.isbn}</td>
      <td>${readStatus}</td>`;
    container.appendChild(bookRow);
  });
}
displayBooks();
// Form
const formOverlay = document.getElementById("form-overlay");
const closeFormBtn = document.getElementById("close-form-btn");
const submitAddBook = document.getElementById("submit-addbook");
const addBookBtn = document.getElementById("addbookbtn");
addBookBtn.addEventListener("click", () => {
  formOverlay.classList.remove("hidden");
});
closeFormBtn.addEventListener("click", () => {
  formOverlay.classList.add("hidden");
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    formOverlay.classList.add("hidden");
  }
});

function renderBookToTable(book) {
  const container = document.getElementById("table-body");

  const bookRow = document.createElement("tr");
  bookRow.classList.add("book-row");

  const readStatus = book.read ? "✅" : "❌";

  bookRow.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td>${book.isbn}</td>
    <td>${readStatus}</td>
  `;

  container.appendChild(bookRow);
}
function addBook(event) {
  event.preventDefault();
  const form = event.target;
  const title = form.title.value.trim();
  const author = form.author.value.trim();
  const pages = parseInt(form.pages.value);
  const isbn = form.isbn.value.trim();
  const read = form.read.checked;
  //
  const newBook = addBookToLibrary(title, author, pages, isbn, read);
  renderBookToTable(newBook);
  form.reset();
  document.getElementById("form-overlay").classList.add("hidden");
}
document.getElementById("book-form").addEventListener("submit", addBook);
