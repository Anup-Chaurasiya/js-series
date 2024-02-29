const marvel_heros = ["Thor","Ironman","Spiderman"];

const dc_heros=["Superman","Flash","Batman"];

marvel_heros.push(dc_heros)

const hero=marvel_heros.concat(dc_heros);
console.log(marvel_heros.concat(dc_heros));
console.log(hero);


// Note ----->
// Spread operator is use to join two or more array
// concat has limitation it can join only two arrays

// spread 

const newarray= [...marvel_heros,...dc_heros];

console.log(newarray)

// array in another array

// flat method

const myarrray= [1,2,3,[4,5,6],[45,67,[34,56]]];

const realarray=myarrray.flat(Infinity);

console.log(realarray)

// String to array

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"Hitesh"}))

let score1= 100;
let score2= 100;
let score3= 100;

console.log(Array.of(score1,score2,score3))