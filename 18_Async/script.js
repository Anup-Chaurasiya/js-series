
// const var1=function(){
//     console.log("Good evening")
// }

// const var2=function(){document.querySelector('h1').
// innerHTML="Best javascript series"
// }
// const var3=setTimeout(var2,2000)

// const var4=setTimeout(function(){
//     document.querySelector('h1').
// innerHTML="Best javascript series"
// },3000)


// document.querySelector('#stop').addEventListener('click',function(){
//     clearTimeout(var4)
// })

const star=function(){
    console.log("ANUP")
}

let end;

document.querySelector('#start').addEventListener('click',function(){
    end=setInterval(star,2000)
})

document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(end)
})