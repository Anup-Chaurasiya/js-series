
Callbacks 

function getData(data,getInput){
    setTimeout(() => {
        console.log("We can go to play",data);
        getInput();
    }, 2000);
    
}

// callbacks hell

getData(2,()=>{
    getData(3);
})

// Promisses

function student(id,studentName){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Data is here",id ,studentName);
            resolve("success");
        }, 4000);
    })
}

let promise=student(21,"Anup");



// async & await  


function student(roll_no,Name){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Hello yadav jii",roll_no,Name);
            resolve("success");
        }, 2000);
    })
}

async function getInputData(){
    console.log("getting data 1....")
    await student(21,"anup");
    console.log("getting data 2....")
    await student(22,"anupam");
    console.log("getting data 3....")
    await student(14,"amit");

}

// -----IIFE ---> it can use only one time  

(async ()=>{
    console.log("getting data 1....")
    await student(21,"anup");
    console.log("getting data 2....")
    await student(22,"anupam");
    console.log("getting data 3....")
    await student(14,"amit");

})();