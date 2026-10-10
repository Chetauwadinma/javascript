let car ={
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Silver"
}
console.log(car.brand); //dot notation
console.log(car["model"]); //bracket notation
console.log(car["year"]); //bracket notation
console.log(car["color"]); //bracket notation

car.price = 25000; //adding a new property to the object

console.log(car);

delete car.color; //deleting a property from the object

console.log(car);


let student = {
    name: "Cheta",
    age: 20,
    address: { "street": "123 Main St", "city": "New York", "state": "NY" },
    courses: ["Math", "Science", "History"]
}
console.log(student.address.city); //dot notation

console.log(Object.keys(car)); //returns an array of the keys of the object
console.log(Object.values(car)); //returns an array of the values of the object
console.log(Object.entries(car)); //returns an array of the key-value pairs of the object


//create and object called person .. it should have name, age country, isdevoloper...
// print each value
// add a new key called email 
// update the age
// delete the country..

let person ={
    Name: "Cheta",
    Age: 20,
    Country: "Nigeria",
    isDeveloper: true
}
console.log(person.Name);
console.log(person.Age);
console.log(person.Country);
console.log(person.isDeveloper);

person.email = "brinncentluv@gmail.com";
console.log(person.email);

person.age = 33;
console.log(person.age);

delete person.Country;
console.log(person);



