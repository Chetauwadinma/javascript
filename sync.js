// SYCHRONOS CODE
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");

// ASYCNCHRONOS CODE

console.log('Start');

setTimeout(() => {
    console.log("this will run later");
}, 5000);

console.log("end");

const promise = new Promise((resolve, reject) => {
let success = true;

if (success) resolve ("data loaded");
else reject("rejecte errorloading");
});

promise
.then(response => console.log(response))
.catch (error => console.log (error))

async function getData() {
    const data = await new Promise(resolve =>
        setTimeout(() => resolve ("here is your data"), 2000)
    );
    console.log(data);
}

getData();


