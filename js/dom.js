const UNCOMPLETED_LIST_TODO_ID = "incompleteBookshelfList";

function makeTodo(id, judul, penulis, tahun) {
  const idBuku = document.createElement("h2");
  idBuku.innerText = id;

  const judulBuku = document.createElement("h3");
  judulBuku.innerText = judul;

  const penulisBuku = document.createElement("p");
  penulisBuku.innerText = penulis;

  const tahunBuku = document.createElement("p");
  tahunBuku.classList.add("tahun-buku");
  tahunBuku.innerText = tahun;

  const bookContainer = document.createElement("article");
  bookContainer.classList = "book_item";
  bookContainer.append(idBuku, judulBuku, penulisBuku, tahunBuku);

  bookContainer.append(createCheckButton());

  return bookContainer;
}

function addTodo() {
  const unreadBook = document.getElementById("incompleteBookshelfList");

  const id = document.getElementById("inputBookId").value;
  const judul = document.getElementById("inputBookTitle").value;
  const penulis = document.getElementById("inputBookAuthor").value;
  const tahun = document.getElementById("inputBookYear").value;

  console.log("todo" + judul);
  console.log("todo" + penulis);
  console.log("todo" + tahun);

  const todo = makeTodo(id, judul, penulis, tahun);
  unreadBook.append(todo);
  console.log(todo);
}

function createButton(buttonClass, eventListener) {
  const button = document.createElement("button");
  button.classList.add(buttonClass);
  button.addEventListener("click", function (event) {
    eventListener(event);
  });
  return button;
}

function addTaskCompleted(taskElement) {
  const idBuku = taskElement.querySelector(".article > h2").innerText;
  const judulBuku = taskElement.querySelector(".article > h3").innerText;
  const penulisBuku = taskElement.querySelector(".article > p").innerText;
  const tahunBuku = taskElement.querySelector(".article > p").innerText;

  const newTodo = makeTodo(idBuku, judulBuku, penulisBuku, tahunBuku);
  const listCompleted = document.getElementById("completeBookshelfList");
  listCompleted.append(newTodo);
  taskElement.remove();
}

function createCheckButton() {
  return createButton("check-button", function (event) {
    addTaskCompleted(event.target.parentElement);
  });
}
