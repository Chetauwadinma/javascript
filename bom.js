// alert("welcome to BOM!");
// if (confirm('proceed')) {
//     let name= prompt ("What is your name")
//     alert('welcome'   + name)
// }

// //SET TIMEOUT
// setTimeout(() => {
//     document.getElementById('main').style.color = "green";
// }, 5000);

let count = 0;

let timer = setInterval(() => {
  count++;
  console.log(count + "Tick");

  if (count === 10) {
    clearInterval(timer);
    console.log("stopped");
  }
}, 1000);

// Window.SCREEN
// screen.width
// screen.height
// screen.availWidth
// screen.availHeight
// screen.colorDepth

//LOCATION
console.log(location.href);
console.log(location.hostname);
console.log(location.pathname);
console.log(location.protocol);
console.log(location.port);

document.getElementById("bts").onclick = () => {
  location.href = "http://127.0.0.1:5500/dom.html";
};

//LOCAL STORAGE
localStorage.setItem("name", "Cheta");
localStorage.setItem("age", 30); //to store data

let user = localStorage.getItem("name"); // to retrive data
console.log(user);

// localStorage.removeItem("name"); // remove data
// localStorage.clear();

let person = {
  name: "Akin",
  Age: 25,
  skills: ["HTML", "CSS", "jAVAsCRIPT"],
};

localStorage.setItem("user", JSON.stringify(person)); // to display data in the loacal storage
let result = JSON.parse(localStorage.getItem("user"));
console.log(result);

let nameInput = document.getElementById("name");
let saveInput = document.getElementById("save");
let displayInput = document.getElementById("display");
let show = document.getElementById("result");

saveInput.onclick = () => {
  let name = nameInput.value.trim();

  if (name === "") {
    alert("Please enter name");
    return;
  }
  localStorage.setItem("username", name);
  alert("Name saved to local storage!");
  nameInput.value = "";
};

displayInput.onclick = () => {
  let savedName = localStorage.getItem("username");
  if (savedName) {
    show.textContent = `welcome back, ${savedName}`;
  } else {
    show.textContent = "No name Found";
  }
};
