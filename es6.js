// let -block scope
// var - function scope
// const block scope as let but immutable

// let example
//{ let variable = 3 } // Created in local scope (the current block scope)
//console.log(variable) // ReferenceError: variable is not defined

// var example
//{ var variable = 37 } // Created in global scope (the current function scope)
//console.log(variable) // 37

// const example
//const object = {hello: "world"} // Created in local scope (the current block scope)
//object.hello = "earth" // Object properties are mutable, even though the object is a const
//console.log(object) // Object { hello: "earth" }
//object = {different: "object"} // TypeError: invalid assignment to const `object'



// ES6 classes anf function classes
class Vozilo {
  vozi() {
    console.log('vozi');
  }
}

var car = new Vozilo();
car.vozi();

function Vozilo1() {
  this.vozi = function () {
    console.log('vozim drugi')
  }
}

var car1 = new Vozilo1();
car1.vozi();

//arrow
//odds  = evens.map(v => v + 1);
//ES5 
//odds  = evens.map(function (v) { return v + 1; });

function ucitajSliku() {
  return new Promise(resolve => {
      setTimeout(() => {
      resolve('Slika ucitana');
      }, 2000);
  });
}

async function otvoriStranicu() {
  console.log('ucitaj sliku');
  const slika = await ucitajSliku();
  console.log(slika);
}
otvoriStranicu()

async function otvoriStranicuAsync() {
  console.log('ucitaj sliku');
  ucitajSliku().then(slika => console.log(slika))
}
otvoriStranicuAsync()
