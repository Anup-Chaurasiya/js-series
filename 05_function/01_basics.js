
// function

function myFunction(num1,num2){
  
    // let constant= num1+num2;
    // return constant 

    return num1+num2
}

const result=myFunction(2,3)
console.log("rersult ",result)

function loginuserName(user){
    if(user===undefined){
        console.log("Please enter your id")

    }
    return `${user} is logined `
}

const value=loginuserName()

console.log(value) 