


function Book(id, pages, author ,title){
this.id = id;
this.pages = pages;
this.author = author;
this.title = title;
this.toString = function(){
return `${title}\n${author}`;
}
}

let array = [];

function addBooks(id, pages, author, title){
    let generic = new Book(crypto.randomUUID(), pages, author, title);
array.push(generic);
}


addBooks(1, 281, "Harper Lee", "To Kill a Mockingbird");
addBooks(2, 328, "George Orwell", "1984");
addBooks(3, 277, "J.D. Salinger", "The Catcher in the Rye");
addBooks(4, 310, "F. Scott Fitzgerald", "The Great Gatsby");
addBooks(5, 412, "J.K. Rowling", "Harry Potter and the Goblet of Fire");


console.log(array)

let container = document.getElementById("container")



function looper(array){
for(let i = 0; i <array.length; i++){

    let div = document.createElement("div")
    div.innerText = array[i].toString()
    div.style.color = "red";
    div.style.border = "solid black";
    div.style.height = "25%";
    div.style.width = "15%";
    container.appendChild(div)




    div.addEventListener("mouseover", function(){
div.style.top = "0%";
    })
 div.addEventListener("mouseout", function(){
div.style.top = "4%";
    })
}
}

let addBook = document.getElementById("addbook");

addBook.addEventListener("click", function(){

    
})

looper(array)

let button = document.getElementById("button")
let form = document.getElementById("form")

button.addEventListener("click", function (event) {
  if (window.getComputedStyle(form).display == "none") {
    form.style.display = "block";
  }
  else
  form.style.display = "none"
event.preventDefault();
});




