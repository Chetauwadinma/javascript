function greeting(name) {
  console.log("welcome to function in javascript, " + name);
  
}

greeting('jake');

function add (a, b){
  return a + b;
}

console.log(add(5, 6))

// calculate area of a circle
function area(r) {
  return 3.142 * r**2;
}

console.log (area(3))


//const greet = ()=>{
  //console.log('hello there');
//}

const greet = () => console.log("hello there");
greet();


