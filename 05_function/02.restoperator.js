
// use of rest operator/spread ---symbol-->(...)

/* we use rest operator when we don't know about how many
argument are coming into the parameter*/ 

function myFunction(...num1){
    return num1;
}

console.log(myFunction(100,200,300,400));

function myHero(val1,val2,...num2){
    return num2;
}

console.log(myHero(10,20,30,40,50));

// In this function 10 and 20 pass to the val1 and val2 
//  and rest argument pass to the num2 and return as array


// object pass to the function 

const user={
    userName:"hitesh",
    price:199
}

function handleObject(handle){
    console.log(`Username is ${handle.userName} and price is ${handle.price}`);
}

handleObject(user)


// array pass to the function

const myarray=[1,2,3,4,5];

function myfunct(radhe){
    return radhe[3];
}

console.log(myfunct(myarray));

