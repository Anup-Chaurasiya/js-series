
let num= 300;
console.log(num);

// object type

// operation on numbers 

let number = new Number(400);

console.log(number);

console.log(typeof number);

// convert number into string 

console.log(number.toString())
console.log(number.toString().length)

let number1= 126.49907;

console.log(number1.toFixed(2))
console.log(number1.toPrecision(3))
console.log(number1.valueOf())


//  ++++++ Math +++++++ 

console.log(Math)
console.log(Math.abs(5));
console.log(Math.round(4.678));
console.log(Math.max(1,4,5,6,7));
console.log(Math.ceil(4.5));
console.log(Math.ceil(5.3));
console.log(Math.min(1,2,3,4,5));
console.log(typeof Math)

console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.random()*10+1);

const max=20;
const min=10;

console.log(Math.floor(Math.random()*(max-min))+min)
