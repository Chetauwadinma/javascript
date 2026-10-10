class Person{
    constructor(name, age) {
        this.name = name;
        this.age =age;
    }

    // method
    greet() {
     console.log(`Hi, I am ${this.name} and i am ${this.age} years old`);
    }

}

let person1=new Person("james", 25);
console.log(person1);
person1.greet();

class Car{
    constructor(name, color, price){
        this.name = name;
        this.color = color;
        this.price = price;
    }

    // method
    detail(){
        console.log(`this is a ${this.name} its is ${this.color} in color and it cost ${this.price}`);
    }

    
}

let Car1 = new Car("Toyota", "red", 5000000)
console.log(Car1);
Car1.detail();


// INHERITANCE
class Student extends Person{
    constructor(name, age, course){
        super(name, age);
        this.course = course;
    }

    study() {
        console.log(`My name is ${this.name}, I am ${this.age} years old ans i study ${this.course}`);
    }
}

let Student1 = new Student("Cheta", 22, "Fullstack");
Student1.greet();
Student1.study();


// ENCAPSULATION
class BankAccount{
    #balance = 0;

    getBalance(){
        return this.#balance;
    }

    deposit(amount){
        if (amount<=0){
            console.log("invalid amount");
            return
        }
        this.#balance += amount;
    }

    withdraw(amount){
        if (amount > this.#balance){
            console.log("insufficient Funds");
            return;
        }
        this.#balance -= amount;
    }


}

let balance1 = new BankAccount();
console.log(balance1.getBalance());

balance1.deposit(200000);
console.log(balance1.getBalance());

balance1.withdraw(5000);
console.log(balance1.getBalance());



// ABSTRACTION
class AuthService{
    login(){
        throw new Error("login() must be implemented");
    }
    

    logout(){
        throw new Error ("logout() must be implemented");
    }
}

class JWAuth extends AuthService{
    login() {
        console.log ("you logged in using JWauth");
    }

    logout(){
        console.log("you are logged out");

    }
}

let auth1 = new JWAuth();
auth1.login();
auth1.logout();

// POLYMORPHISM
class CoffeeMachine {
    makeCoffee() {
        this.#boilWater();
        this.#grindBeans();
        console.log("☕ Your coffee is ready!");
    }

    // Hidden internal processes
    #boilWater() {
        console.log("Boiling water...");
    }

    #grindBeans() {
        console.log("Grinding beans...");
    }
}

const machine = new CoffeeMachine();
machine.makeCoffee(); // User calls ONE simple action!

class EmailNotification{
    send(message) {
        console.log(`you have recieved an email: ${message}`);
    }

}

class SMSNotification{
    send(message) {
        console.log(`you have received a sms: ${message}`);
    }
}

class Whasapnotification {
    send(message) {
        console.log(`you have recieved a whatsap message: ${message}`);
    }
}

let notification = [
    new EmailNotification(),
    new SMSNotification(),
    new Whasapnotification()
];

notification.forEach(notification => {
    notification.send("you are pretty!");
})