for (let x = 1; x <= 5; x++) {
    console.log(x);
    
}
//print i will be a great developer 10 times using a for loop
for (let y = 1; y <=10; y++) {
    console.log('i will be a great developer');
    
}

// print 1 to 10 and indicate which is an even or odd number everytime its printing
for (let z = 1; z <= 10; z++) {
    if (z % 2 === 0) {
        console.log(z + " is an even number.");
    } else {
        console.log(z + " is an odd number.");
    }
}

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

let j = 6;
do {
    console.log(j);
    j++;
} while (j <= 5);


let person ={
    Name: "Cheta",
    Age: 20,
    Country: "Nigeria",
    isDeveloper: true
};
for (let a in person) {
    console.log(a + ":" + person[a]);
}

let fruits=["apple", "banana", "orange", "grape", "kiwi"];
//for (let b of fruits) {
//    console.log(b);
//}

// array methods
//fruits.forEach(function(f) {
  //  console.log(`${f} juice`);
//})

fruits.forEach((f) => console.log(`${f} juice`));

let result = fruits.map((f) => ` sweet ${f}`);
console.log(result);

let char = fruits.filter((f)=> f.length > 5);
console.log(char);