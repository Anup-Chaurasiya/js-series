
// parent-children 

const parent=document.querySelector('.parent')
console.log(parent)
console.log(parent.children)
console.log(parent.children[1].innerText)

for(let i=0;i<parent.children.length;i++){
    console.log(parent.children[i].innerHTML)
}

const array=Array.from(parent.children)
array.forEach(function(lid){
    lid.style.color='red'
})

const newName=document.createElement('div')
console.log(newName)
newName.className='ram'
newName.id='amit'
newName.id=Math.floor(Math.random()*10+1)
newName.setAttribute("title","generated title")
newName.style.background="green"
newName.innerText="chai aur code" //same work like line 27
const addText=document.createTextNode("chai aur code")
newName.appendChild(addText)

//  add innerText to document body 

document.body.appendChild(newName)
