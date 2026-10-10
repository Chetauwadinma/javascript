// document.write("welcome to javascript");

console.log(" i love JavaScript");

// alert("javascript is fun");

let name = "Cheta";
// const, var and let are used to declare variables. const is used to declare a constant variable that cannot be reassigned, while let is used to declare a variable that can be reassigned. var is function-scoped and can be redeclared and updated, but it is generally recommended to use let or const for better scoping and to avoid issues with hoisting.
console.log(name);

name= "John";
console.log(name);
// you cannot overwrite a constant variable or change its value once it is assigned. when you declare with let, you cannot start another vaiable with the same name in the same scope.  
// we have pascal case, camel case and snake case. pascal case is when the first letter of each word is capitalized, camel case is when the first letter of the first word is lowercase and the first letter of each subsequent word is capitalized, and snake case is when words are separated by underscores.
// javaScript is case sensitive, meaning that variables and function names must be used consistently with the same capitalization. For example, "myVariable" and "myvariable" would be considered two different variables.
// javascript statements are instructions that tell the browser to perform a specific action. They can be used to declare variables, define functions, control program flow, and manipulate data. Each statement typically ends with a semicolon, although it is not strictly required in JavaScript.
// javascript expressions are combinations of values, variables, operators, and function calls that produce a value. They can be used in various contexts, such as assignments, comparisons, and calculations. For example, "5 + 3" is an expression that evaluates to the value 8.

// data types in JavaScript include primitive types (such as numbers, strings, booleans, null, and undefined) and reference types (such as objects and arrays). Primitive types are immutable and are compared by value, while reference types are mutable and are compared by reference. Understanding data types is important for writing effective JavaScript code and avoiding type-related errors.
// objects types in JavaScript are used to store collections of data and more complex entities. Objects can contain properties (key-value pairs) and methods (functions associated with the object). They are a fundamental part of JavaScript and are used extensively in programming to represent real-world entities and their behaviors.
// numbers should not be enclosed in quotes, as they are a primitive data type in JavaScript. When numbers are enclosed in quotes, they are treated as strings, which can lead to unexpected behavior when performing mathematical operations. For example, "5" + "3" would result in the string "53" instead of the number 8. Therefore, it is important to use numbers without quotes when performing calculations or comparisons.

// we have numbers, strings, booleans, null, undefined, objects and arrays. numbers are used to represent numeric values, strings are used to represent text, booleans are used to represent true or false values, null represents the intentional absence of any object value, undefined represents a variable that has been declared but has not yet been assigned a value, objects are used to store collections of data and more complex entities, and arrays are used to store ordered lists of values. Understanding these data types is essential for writing effective JavaScript code and manipulating data in various ways.
// booleans are a primitive data type in JavaScript that can have one of two values: true or false. They are often used in conditional statements and logical operations to control the flow of a program based on certain conditions. For example, a boolean variable can be used to determine whether a user is logged in or not, and based on that value, different actions can be taken in the code.
// undefined is a primitive data type in JavaScript that represents a variable that has been declared but has not yet been assigned a value. It is also the default value of uninitialized variables. When a variable is declared but not assigned a value, it is automatically assigned the value of undefined. For example, if you declare a variable like "let x;", and then try to access its value, it will return undefined.
// null is a primitive data type in JavaScript that represents the intentional absence of any object value. It is often used to indicate that a variable should not point to any object or value. For example, if you want to reset a variable to indicate that it no longer holds any meaningful data, you can assign it the value of null.
// NaN stands for "Not-a-Number" and is a special value in JavaScript that indicates that a value is not a valid number. It is typically the result of an invalid mathematical operation, such as dividing zero by zero or attempting to convert a non-numeric string to a number. NaN is considered a falsy value in JavaScript, meaning it evaluates to false in boolean contexts.
// non-primitive data types in JavaScript include objects and arrays. Objects are used to store collections of data and more complex entities, while arrays are used to store ordered lists of values. Non-primitive data types are mutable, meaning their values can be changed after they are created. They are compared by reference, meaning that two different objects or arrays with the same content are considered different entities in memory. Understanding non-primitive data types is important for effectively managing and manipulating data in JavaScript applications.
// arrays are a non-primitive data type in JavaScript that are used to store ordered lists of values. They can contain elements of different data types, including numbers, strings, objects, and even other arrays. Arrays are mutable, meaning their contents can be changed after they are created. They provide various methods for adding, removing, and manipulating elements, making them a versatile tool for managing collections of data in JavaScript applications.


// numbers are a primitive data type in JavaScript that are used to represent numeric values. They can be integers or floating-point numbers and can be used in mathematical operations such as addition, subtraction, multiplication, and division. JavaScript also provides various built-in methods for working with numbers, such as Math.round(), Math.floor(), and Math.random(). Understanding how to work with numbers is essential for performing calculations and manipulating data in JavaScript applications.

// modulus operator (%) is used to find the remainder of a division operation. It returns the remainder after dividing one number by another. For example, 10 % 3 would return 1, because 10 divided by 3 is 3 with a remainder of 1. The modulus operator is often used in programming for tasks such as determining if a number is even or odd, or for wrapping around values in circular data structures.

// number methods in JavaScript are built-in functions that can be used to perform operations on numbers. Some common number methods include:
// - toFixed(): formats a number to a specified number of decimal places.
// - toString(): converts a number to a string representation.
// math object in JavaScript is a built-in object that provides various mathematical functions and constants. It includes methods for performing common mathematical operations such as rounding, trigonometry, exponentiation, and generating random numbers. Some commonly used Math methods include Math.round(), Math.floor(), Math.ceil(), Math.sqrt(), Math.pow(), and Math.random(). The Math object is useful for performing calculations and manipulating numeric data in JavaScript applications.
// strings methods in JavaScript are built-in functions that can be used to manipulate and work with string values. Some common string methods include:
//  STRING METHODS
// - length: returns the number of characters in a string.
// - toUpperCase(): converts a string to uppercase letters.
// - toLowerCase(): converts a string to lowercase letters.
// - indexOf(): returns the index of the first occurrence of a specified value in a string.
// - slice(): extracts a portion of a string and returns it as a new string.
// - replace(): replaces a specified value in a string with another value.
// - split(): splits a string into an array of substrings based on a specified delimiter.
// - trim(): removes whitespace from both ends of a string. 
// concat(): concatenates two or more strings together.
// concatenate is the process of joining two or more strings together to form a single string. In JavaScript, you can concatenate strings using the + operator or the concat() method. For example, "Hello" + " " + "World" would result in the string "Hello World". Concatenation is commonly used to build dynamic strings and display messages in web applications.

let firstName = "Cheta";
let lastName = "Evans";
console.log(firstName + " " + lastName); // Concatenation using the + operator
console.log(firstName.concat(" ", lastName)); // Concatenation using the concat() method
console.log(`my name is ${lastName}, ${firstName} ${lastName}`); // Concatenation using template literal