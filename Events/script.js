
// // there is some meyhod to write apply event listener
// // onclick
// // addEventlistener
// // attachEvent
// // jQuery-on

// const delhi=document.querySelector('#delhi')

// // old approach

// delhi.onclick=function(){
//     alert('delhi clicked')
// }

// // modern approach

// // third parameter false don't need to write becoz default case false hota hai

// document.querySelector('#photoshop').addEventListener('click',function(e){
//     console.log(e)
// },false)

// // Event Propagation has 2 types
// // 1.bubbling
// // 2.capturing

// // Note ---> bubbling (imp)

// document.getElementById('image').addEventListener('click',function(e){
//     console.log("hey Anup how are you ?");
// },false)

// document.getElementById('mumbai').addEventListener('click',function(e){
//     console.log("Goood evening Anup");
// },false)


// // propagation 


// document.getElementById('image').addEventListener('click',function(e){
//     console.log("hey Anup how are you ?");
// },false)

// document.getElementById('mumbai').addEventListener('click',function(e){
//     console.log("Goood evening Anup");
//     stopPropagation();
// },false)

// // capturing

// document.getElementById('image').addEventListener('click',function(e){
//     console.log("hey Anup how are you ?");
// },true)

// document.getElementById('mumbai').addEventListener('click',function(e){
//     console.log("Goood evening Anup");
// },true)




// //Prevent default -- Example-->(given below)Google ko open karne se rok sakte hai ye 

// document.getElementById('google').addEventListener('click',function(e){
//     e.preventDefault()
//     console.log("Hey rahul how are you");
    
// },false)


// // Task --> we have to remove images one by one 
// //  when I clicked that Image should be removed

// // apporach

document.querySelector('#image').addEventListener('click',function(e){
    // console.log(e.target.parentNode)
    console.log(e.target.tagName)
    if(e.target.tagName==='IMG'){
        let removeit=e.target.parentNode;
        removeit.remove();
    }

},false)