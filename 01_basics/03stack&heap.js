// stack and heap 


// stack uses in primitive datatype

// and heap uses in non-primitive datatype

// stack 

let insta= "anup chaurasiya";

let watch= insta;
watch="srk";

console.log(watch);
console.log(insta);


// +++++++++++++++++++++++++

// heap

let user = {
    id: 1234,
    name:"anup"
}

user.id=123;

let user1=user;

user1.id=1324;
user.id=1234;

console.table(user);
console.table(user1);
