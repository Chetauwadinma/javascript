let age = 20
if (age >= 18) {
    console.log("You are an adult.");
 } else {
    console.log("You are a minor.");
}

let score = 85;
if (score >= 90) {
    console.log("You got an A.");
}else if (score >= 80) {
    console.log("You got a B.");
} else if (score >= 70) {
    console.log("You got a C.");    
}else{
    console.log("You failed.");
}

let voterAge = 25;
let country = "USA";
if (country === "USA") {
    console.log("You are eligible to vote in the USA.");
} else{
    console.log("You are not eligible to vote in the USA.");
}
// write a condition to check someones age if hes 18 or older print "you are old enough to drive" if he is not of age print out" you cannot drive yet"

let someoneAge = 15;
if (someoneAge >= 18) {
    console.log("You are old enough to drive.");
} else {
    console.log("You cannot drive yet.");
}

// Buidling a login system

//let username = prompt("Enter your email:");
//let password = prompt("Enter your password:");

//if (username === "a@b.com" && password === "1234") {
//    alert("Login successful!");
//} else {
//    alert("Invalid username or password.");
//}

// let order =" chicken Shawarma";

// switch(order){
//     case "suya":
//         console.log("You ordered suya.");
//         break;
//         case "barbecue":
//         console.log("You ordered barbecue.");
//         break;
//         case "chicken Shawarma":
//         console.log("You ordered chicken Shawarma.");
//         break;
//     default:
//         console.log("We do not have that item on the menu.");
// }



//tenary operator is a shorthand way of writing an if-else statement. It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false. The syntax is: condition ? valueIfTrue : valueIfFalse. For example, let age = 20; let message = age >= 18 ? "You are an adult." : "You are a minor."; console.log(message); // Output: "You are an adult."
let check = age>= 18 ? "You are an adult." : "You are a minor.";
console.log(check);

let wife = 0;

if(wife ===1){
    console.log("you are monogamous")
}
else if (wife>=2){
    console.log("you are a polygamist")
}
else if (wife===0){
    console.log("you are unmarried")
}
else {
    console.log('invalid')
}

let names = 'chet';
let profession = "plumber"

if(names === 'franca', profession === "chef"){
    console.log('she can cook')

}
else if (names=== 'franca'){
    console.log('thats just a name')
}

else{
    console.log('there is no input')
}

let opened = 0;
switch (opened) {
    case 0:    
        console.log('we are getting opened by 9am');
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("we are opened");
        break;
    case 6: 
    console.log('we dont open on weekends')


}
let time = 6
let resumption = time<= '8'? "you are early.": "you are late."
console.log(resumption)

// build a login system,
let user = prompt('Enter your username;');
let code = prompt('Enter your code;');

if (user ==="cheta" && code=== '2345') {
    alert ('login sucessful')
} else{
    alert ('invalid Login')
}


