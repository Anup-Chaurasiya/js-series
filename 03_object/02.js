// const tinderuser=new object()

const tinderuser={}

tinderuser.name="Rahul"
tinderuser.email="hello@gmail.com"
tinderuser.isLoggedIn=false

// console.log(tinderuser)

// Object in another object

const regularUser={
    email:"someone@gmail.com",
    fullName:{
        UserName:{
            firstName:"Anup",
            lastName:"chaurasiya"
        }
    }
}

console.log(regularUser.fullName.UserName.firstName)


const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

const object1={obj1,obj2}
console.log(object1)

const object=Object.assign({},obj1,obj2)
console.log(object)

const newkey={...obj1,...obj2}

console.log(newkey)

console.log(tinderuser)

// important 

console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.values(tinderuser))
console.log(tinderuser.hasOwnProperty('isLoggedIn'))
