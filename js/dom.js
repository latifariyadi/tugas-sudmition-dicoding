const UNCOMPLETED_LIST_TODO_ID = "incompleteBookshelfList";

var toSelesai = false;
var data = [];
var inData = [];

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

  // const todo = makeTodo(id, judul, penulis, tahun);
  const inComplete = document.getElementById("incompleteBookshelfList");
  const complete = document.getElementById("completeBookshelfList");

  console.log(data);

  if (toSelesai == true) {
    data.push({
      id: id,
      judul: judul,
      penulis: penulis,
      tahun: tahun,
    });
    data.map((e, i) => {
      complete.innerHTML += `
    <article class="book_item" id="${e.id}">
      <p>id : ${e.id}</p>
      <h1>${e.judul}</h1>
      <p>penulis : ${e.penulis}</p>
      <p>tahun : ${e.tahun}</p>
      <div class="action">
        <button class="green" onclick="completeHandle(event)" value="${e.id}">selesai</button>
        <button class="red" onclick="handleDelete(event)" value="${e.id}">hapus</button>
      </div>
    </article>
  `;
    });
  } else {
    inData.push({
      id: id,
      judul: judul,
      penulis: penulis,
      tahun: tahun,
    });
    inComplete.innerHTML += `
    <article class="book_item" id="${id}">
      <p>id : ${id}</p>
      <h1>${judul}</h1>
      <p>penulis : ${penulis}</p>
      <p>tahun : ${tahun}</p>
      <div class="action">
        <button class="green" onclick="completeHandle(event)" value="${id}">selesai</button>
        <button class="red" onclick="handleDelete(event)" value="${id}">hapus</button>
      </div>
    </article>
  `;
  }

  unreadBook.append(todo);
  console.log(todo);
}

window.handleChange = (event) => {
  toSelesai = !toSelesai;
  console.log(toSelesai);
};

window.completeHandle = (event) => {
  const article_id = document.getElementById(event.target.value);
  const book_list = document.getElementById("completeBookshelfList");
  // console.log(`${article_id}`);
  book_list.append(article_id);
};

window.handleDelete = (event) => {
  const article_id = document.getElementById(event.target.value);
  article_id.remove();
};

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
