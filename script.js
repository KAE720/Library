


function Book(id, pages, author ,title, status){
this.id = id;
this.pages = pages;
this.author = author;
this.title = title
this.status = status,
this.toString = function(){
return `${title}\n${author}`;
}
}

let array = [];

function getRandomColor() {
  return 'rgb(' +
         Math.floor(Math.random() * 256) + ',' +
         Math.floor(Math.random() * 256) + ',' +
         Math.floor(Math.random() * 256) + ')';
}

function addBooks(id, pages, author, title, status){
    let generic = new Book(crypto.randomUUID(), pages, author, title, status);
    generic.color = getRandomColor();
array.push(generic);
}


addBooks(1, 281, "Harper Lee", "To Kill a Mockingbird", "not read");
addBooks(2, 328, "George Orwell", "1984", "not read");
addBooks(3, 277, "J.D. Salinger", "The Catcher in the Rye", "not read");
addBooks(4, 310, "F. Scott Fitzgerald", "The Great Gatsby", "not read");
addBooks(5, 412, "J.K. Rowling", "Harry Potter and the Goblet of Fire", "not read");


console.log(array)

let container = document.getElementById("container")


function looper(array){


for(let i = 0; i <array.length; i++){

    let div = document.createElement("div")



    div.style.color = "black";
    div.style.fontSize = "80%";
    div.style.border = "solid black";
    div.style.height = "25%";
    div.style.width = "15%";
    div.style.backgroundColor = array[i].color;

    div.style.display = "flex";
div.style.flexDirection = "column";
div.style.justifyContent = "space-between";
div.style.alignItems = "center";
div.style.padding = "10px";
div.style.boxSizing = "border-box";
div.style.overflow = "hidden";


let titleEl = document.createElement("p");
    titleEl.textContent = array[i].title;
    titleEl.className = "book-title";

    let authorEl = document.createElement("p");
    authorEl.textContent = array[i].author;
    authorEl.className = "book-author";


    div.appendChild(titleEl);
    div.appendChild(authorEl);

     let removebutton = document.createElement("button")
removebutton.textContent = "X"
removebutton.style.backgroundColor = "lightgrey";
removebutton.style.color = "white";
div.appendChild(removebutton)


removebutton.addEventListener("click", function(e){


e.stopPropagation(); // so it doesn't trigger the "show details" click
  const idToRemove = div.getAttribute("data-id");
  array = array.filter(book => book.id !== idToRemove);
  container.innerHTML = "";
  looper(array);

})
    container.appendChild(div)

div.className = "book-card";
div.setAttribute("data-id", array[i].id);


    div.addEventListener("mouseover", function(){
div.style.top = "0%";
    })
 div.addEventListener("mouseout", function(){
div.style.top = "2%";
    })

    div.addEventListener("click", function () {
  const clickedId = div.getAttribute("data-id");
  const book = array.find(b => b.id === clickedId);

 showBookDetails(book);



});
}



}

let addBookButton = document.getElementById("addbook");



addBookButton.addEventListener("click", function(event){
event.preventDefault();
    let id =  crypto.randomUUID();
    let title = document.getElementById("title").value
        let author = document.getElementById("author").value
            let pages = document.getElementById("pages").value
                let status = document.getElementById("status").value

                if (!title || !author || !pages || !status) {
  alert("Please fill in all fields!");
  return;
}

                    addBooks(id, pages, author,title, status);



container.innerHTML = ""
                     looper(array)

form.reset();
})

looper(array)

let button = document.getElementById("button")
let form = document.getElementById("form")



button.addEventListener("click", function (event) {
  event.preventDefault();
  if (window.getComputedStyle(form).display == "none") {
    form.style.display = "block";
  }

  else
  form.style.display = "none"

});



function showBookDetails(book) {
  // Remove old details if already open
  const existing = document.getElementById("bigbook");
  if (existing) existing.remove();

  let bigbook = document.createElement("div");
  bigbook.id = "bigbook"; // for future targeting/removal
  bigbook.style.position = "fixed";
bigbook.style.top = "50%";
bigbook.style.left = "50%";
bigbook.style.transform = "translate(-50%, -50%)";
  bigbook.style.width = "30%";
  bigbook.style.height = "60%";
  bigbook.style.backgroundColor = book.color;

  bigbook.style.border = "3px solid black";
  bigbook.style.boxShadow = "0 0 10px black";
  bigbook.style.padding = "20px";
  bigbook.style.zIndex = "1000";
  bigbook.style.display = "flex";
  bigbook.style.flexDirection = "column";
  bigbook.style.justifyContent = "space-around";
  bigbook.style.alignItems = "center";
  bigbook.style.textAlign = "center";

  // Title
  const title = document.createElement("h2");
  title.textContent = book.title;

  // Author
  const author = document.createElement("p");
  author.textContent = `Author: ${book.author}`;

  // Pages
  const pages = document.createElement("p");
  pages.textContent = `Pages: ${book.pages}`;

  // Status
  const status = document.createElement("p");
  status.textContent = `Status: ${book.status}`;

  // Close Button
  const closeBtn = document.createElement("button");
  closeBtn.textContent = "Close";
  closeBtn.onclick = () => bigbook.remove();

  bigbook.append(title, author, pages, status, closeBtn);
  document.body.appendChild(bigbook);
}







