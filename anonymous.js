let squared = (arr) => {
  return arr.map(x=>x*x)
}

console.log(squared([1, 2, 3, 4]));

//let squared = [1, 2, 3, 4].map(x=>x*2)
//console.log(squared);

(function(a, b){
  var c = a + b;
  console.log(c);
})(6, 7);

// Make this function an arrow function:
// function timesTwo(number) {
//   return number * 2;
// }	

let timesTwo = num => num * 2;
console.log(timesTwo(2));