//  -----Task1-----
 const div = document.createElement("div");
 div.innerHTML = "Hello World!";
 document.body.appendChild(div);

 //  -----Task2-----
const p = document.querySelector("p");
p.innerHTML = "This is updated content.";


// -----Task3-----

const ul = document.createElement("ul");
ul.className = "list";
ul.style.listStyle = "none";
ul.style.color = "blue";
ul.style.fontSize = "30px";
document.body.appendChild(ul);

function newItems(list) {
  const li = document.createElement("li");
  li.innerHTML = list;
  document.querySelector(".list").appendChild(li);
  
}
newItems("Item1");
newItems("Item2");
newItems("Item3");


// -----Task4-----

const image = document.querySelector("img");
image.setAttribute('src','https://img.freepik.com/free-photo/sports-car-driving-asphalt-road-night-generative-ai_188544-8052.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1720656000&semt=ais_user');


// -----Task5-----

const item = document.querySelector(".item");
item.remove();