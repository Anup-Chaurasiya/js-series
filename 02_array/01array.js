 
// //  ++++++arrays

//  we can declare arrays by 3 types 

//  1

let number =[1,2,3,4,5];
console.table(number)

//  2

let string = ["Anup","chaurasiya"];
console.log(string);

// 3

let arra= new Array(5,6,7,8,9);
console.log(arra.at(4));
console.log(arra.concat(10,11));
console.table(constructor())



// Array methods 


const array= new Array(12,34,5,6,66,7);

console.log(array);

array.push(56);
console.log(array);

array.pop()

console.log(array)

array.unshift(7)
console.log(array);

array.shift()
console.log(array);


console.log(array.includes(6))

console.log(array.indexOf(6))

const myar= array.join();

console.log(array)
console.log(myar)

// Note 
// slice ---> Does not include last index and not change origional array
// splice ---> include last index and change the origional array

//slice 
const myarray= new Array(12,13,14,15,16,17,18);

console.log("A",myarray);

console.log(myarray.slice(1,3))

console.log(myarray);

// splice

console.log("B",myarray)

console.log(myarray.splice(1,3));

console.log(myarray);

