const marvel = ["hulk","thor","strange"]
const dc = ["wonderwomen","batman","flash"]
// marvel.push(dc)
// const allheroes = marvel.concat(dc)
// console.log(allheroes);

const allheroes  = [...marvel,...dc]
// console.log(allheroes);
const anotherarray = [1,2,3,[4,5,6]]
const real_another_array = anotherarray.flat(Infinity)
console.log(real_another_array);

// how to convert string to array

console.log(Array.isArray("lalit"))
console.log(Array.from("lalit"))
// console.log(Array.from{name: "lalit"})

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));

