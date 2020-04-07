// let colors = ["red", "green", "blue", "yellow", "gray", "white", "black"];

// for(let i = 0; i < colors.length; i++){
//   console.log(colors[i]);
// }

// for(color of colors){
//   console.log(color);
// }

// colors.forEach(function(element){
//   console.log(element);
// })

//jos skracenije prethodni primer
// colors.forEach(el => { 
//   console.log(el);
// })

// var arrOfNum = [1, 2, 3, 4];

// function rotateIt(arr, steps) {
//   for(let i = 0; i < steps; i++)
//   {
//     arr.unshift(arr.pop());
//   }
//   console.log (`The new array is [${arr}] and has been shift by ${steps} steps`);
// }

// rotateIt(arrOfNum, 2);


// let numbers = [1, 2, 3, 4, 5];

// let total = array => 
//   array.reduce((acc, curr) => acc + curr, 50);

// console.log(total(numbers));

function num(number) {
  let arr = [];
  for(let i = 0; i <= number; i++){
    arr.push(i)
  }

  let start = arr.slice();
  let reversed = arr.reverse();
  reversed.shift();
  return [...start, ...reversed];

}

console.log(num(5))

//  Write a function zooInventory that takes a zoo's inventory of animals (represented using nested arrays) and returns an array of strings that describe each animal's name, species, and age.

var myZoo = [
  ["King Kong", ["gorilla", 42]],
  ["Nemo", ["fish", 5]],
  ["Punxsutawney Phil", ["groundhog", 11]]
];

// function zooInventory(myZoo) {
//   for(let i = 0; i < myZoo.length; i++ )
//   {
//     console.log(`${myZoo[i][0]} the ${myZoo[i][1][0]} is ${myZoo[i][1][1]}`);
//   }
// }

// console.log(zooInventory(myZoo));

// ali treba vratiti niz stringova ??

let zooInventory = (inventory) => {
  let animals = [];
  inventory.forEach(animal => {
    animals.push(`${animal[0]} the ${animal[1][0]} is ${animal[1][1]}`)
  });
  console.log(animals);
}

zooInventory(myZoo);
