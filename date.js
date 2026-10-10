let now = new Date();
console.log(now);

let date = new Date ("2000-10-15");
console.log(date);

let spec = new Date(2000, 2, 15);
console.log(spec);

// date parts
console.log(now.getFullYear()); //current year

console.log(now.getMonth()); //current month
console.log(now.getDate()); //current  day of the month

console.log(now.getDay()); //current day of the week

console.log(now.getHours()); //current hour of the day

console.log(now.getMinutes()); //current year

// format date
let formattedDate = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
console.log(formattedDate);

// glet formattedTime=`${now.getTime()}`/${now.getHour() + 1}/${now.getMinutes}

// Format Time 
let formattedTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
console.log(formattedTime);
