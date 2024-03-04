

//  IIFE

// Immediately Invoked Function Expressions(IIFE)

// imp

// uses --> gloable scope ke pollution se problem hoti hai kai baar toh uss gloable-
//          variable ya jo bhi declartion hai uske pollution ko hatane ke liye IIFE ka use kiya|

// Immediately Invoked databases in function

// syntex of IIFE --> ()

// Named IIFE --> coding

(function coding(){
    console.log("database is connected")
})();

// To write 2 IIFE together then we have to put semicolmn
// b/w them.

// If we do not put semicolomn(;) above function 
// then below code throw error 


// Unamed IIFE

( (name)=> {
    console.log(`${name} database is connected in the system`)
})("Anup")
    
