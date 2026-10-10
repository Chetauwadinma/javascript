let fruits=["apple", "banana", "orange", "grape", "kiwi"];
console.log(fruits); // prints the entire array
console.log(fruits[0]);
console.log(fruits[3]); // prints the fourth element of the array
fruits[1] = "mango"; // updates the second element of the array
console.log(fruits);

fruits.push("pear"); // adds a new element to the end of the array
console.log(fruits);

fruits.pop(); // removes the last element of the array
console.log(fruits);

fruits.shift(); // removes the first element of the array
console.log(fruits);    
fruits.unshift("strawberry"); // adds a new element to the beginning of the array
console.log(fruits);
console.log(fruits.length); // prints the length of the array
console.log(fruits.includes("grape")); // prints the index of the element "grape" in the array
console.log(fruits.slice(0,3)); // prints the elements from index 0 to 2 (3 elements)
console.log(fruits.splice(1,2)); // removes 2 elements starting from index 1 and returns the removed elements
 
console.log(fruits.join("=>")); // joins the elements of the array into a string with "=>" as the separator