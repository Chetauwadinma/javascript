let title = document.getElementById("title");

title.style.backgroundColor = "blue";
// title.remove();
title.textContent = "Welcome to my website";

let body = document.getElementById("container");
body.innerHTML = "<p>This is a sample paragraph.</p>";


let p = document.createElement("p");

p.innerText = "This is a new paragraph inside the div.";

document.body.appendChild(p);

let img = document.getElementById("myimg");

console.log(img.getAttribute("src"));

img.setAttribute("src", "./images/Frame 4.png");
console.log(img.getAttribute("src"));

img.removeAttribute("src");

let input = document.getElementById("myinput");
let button = document.getElementById("mybutton");
let display = document.getElementById("display");

button.onclick = () => {
let value = input.value;
display.innerText = `Hello, ${value}!`;
}

let days = document.getElementById("days");
let showdaybtn = document.getElementById("showday");
let result = document.getElementById("result");

showdaybtn.addEventListener("click", () => {
    result.innerText = `You selected ${days.value}`;
})

// title.classList.add('heading');
// title.classList.remove('title')

document.getElementById("toggle").addEventListener('click', () => {
    title.classList.toggle("heading");
})