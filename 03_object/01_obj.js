
// Object

// + Singleton
 Object.create

// + object literals

const jsUser={
    name:"anup",
    sirname:"chaurasiya",
    id:123,
    email:"anupchaurasiya81@gmail.com",
    lastLogin:["Monday","tuesday","wednesday"],
    "full name":"Anup chaurasiya"
}

// console.log(jsUser.email)
console.log(jsUser["email"]);
console.log(jsUser["full name"])

// methods of objects

jsUser.email = "anupchaurasiya@chatpg.com" 
console.log(jsUser["email"])

// object freez 
// Object.freeze(jsUser)
// jsUser.email="anupchaurasiya@gmail.edu.in"
// console.log(jsUser["email"])

jsUser.greeting= function (){
    console.log(`Hello js user ${this.name}`)
}

console.log(jsUser.greeting());

