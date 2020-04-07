let person = {
  firstName:'Dusanka',
  lastName:'Karac',
  age: 26
}

let personJSON = {
  "firstName" : "Dusanka",
  "lastName" : "Karac",
  "age" : 26
}

let stringifiedPerson = JSON.stringify(person);
let parsedPerson = JSON.parse(JSON.stringify(personJSON));
//Because personJSON is already an object it cannot be parsed again to an object, so I stringified it in order to be able to parse it correctly, otherwise we get the "Uncaught SyntaxError: Unexpected token o in JSON" error

console.log(stringifiedPerson);
console.log(parsedPerson);

let numbers = [1, 2, 3, 4];
let numbersJSON = {"numbers":[1, 2, 3, 4]};

let parsedNumbers = JSON.parse(JSON.stringify(numbersJSON));
console.log(parsedNumbers); 

for(i in parsedNumbers.numbers)
{
  console.log(parsedNumbers.numbers[i]);
}