
// use of symbol 

// Take a symbol as key and print in object's value 

// syntex of symbol -- use [] brackets

 // [mysymbol]

const mysymbol= Symbol("key1")

const jsUser={
    // mysymbol:"Hello world",
    [mysymbol]:"mysymbol_Value",
    name:"anup",
    sirname:"chaurasiya",
    id:123,
    email:"anupchaurasiya81@gmail.com",
    lastLogin:["Monday","tuesday","wednesday"],
    "full name":"Anup chaurasiya"
}
// it shows stirng type becoz we not use [] 
console.log(jsUser.mysymbol)
console.log(typeof jsUser.mysymbol)

console.log(jsUser[mysymbol])
console.log(typeof jsUser[mysymbol])
