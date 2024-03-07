// special loops

// for of is use in array and string only

const arr= [1,2,3,4,5];

for(const var1 of arr){

    // console.log(var1);
}

const greeting="Hello world";

for (const greet of greeting) {
    // console.log(greet)
}

// for in use to fetch oblect's key and its value
const object = {
    name:"anup",
    roll:21
}
for (const key in object) {
    console.log(key,"values: -> ",object[key])
}