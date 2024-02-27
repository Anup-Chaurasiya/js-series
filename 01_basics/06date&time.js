
// Date and time

let date= new Date(2024,10,0);
let date1=new Date(2024,11,3);

console.log(date);
console.log(date1.toISOString());
console.log(date1.String());

let time= new Date();

console.log(time.toLocaleString('default',{
    weekday:"long",
    time:"evening"
}))