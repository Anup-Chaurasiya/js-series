const URL="https://cat-fact.herokuapp.com/facts";

const var1= document.querySelector('#id');
const var2=document.querySelector('#facts');


const getFacts=async ()=>{
    console.log("getting data.....")
    let responce= await fetch(URL);
    console.log(responce);   // JSON formate
    let data= await responce.json();
    console.log(data);
    var1.innerText=data[0].text;
}
var2.addEventListener('click',getFacts);