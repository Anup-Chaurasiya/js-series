
const user ={
    name:"Hitesh",
    price :999,

    welcome : function (){
        console.log(`${this.name} ,welcome to the website`);
        console.log(this)
    }
}

user.welcome()
user.name="Sam"
user.welcome()

// It shows global keyword in web console

console.log(this)


// important ---> note

// this keyword work only in object it does not work in function
// Ex--> username = "Hitesh"
// can not access in funtion with this keyword 

const chai =function(){
    let username="Hitesh"
    console.log(this.username)
}

chai()

const coughy =()=>{
    console.log(this)
}
coughy()


//  Explicit keyword -->when we use of return key

function harhar(num1,num2){
    return num1+num2
}

console.log(harhar(3,4))


// Implicit keyword --> not using of return keyword


// Note ---> IF we use {} then we use return keyword
//           IF we use () then we don't need to use return keyword

// Most Important for React --> we will use this in react 
// ()

// By arrow function

const sum = (num1,num2,) => num1+num2

console.log(sum(1,2))

// By function 

function substract(num3,num4) {(num3+num4)}

console.log(substract(6,7))