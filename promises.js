//Promises


 let myFirstPromise = new Promise((resolve, reject) => {

//   // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
  setTimeout(()=>{ Math.random() > 0.5 ? resolve('Success!') : reject('Error!')
  }, 1000);
});

myFirstPromise
  .then(successMsg => {
    console.log(successMsg)
  })
  .catch(error => {
    console.log(error);
  })

// Promise all

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(function(values) {
  console.log(values);
});


// One more example (single promise vs Promise.all)

const timeOut = (t) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Completed in ${t}`)
    }, t)
  })
}

// Resolving a normal promise.
timeOut(1000)
 .then(result => console.log(result)) // Completed in 1000

// Promise.all
Promise.all([timeOut(1000), timeOut(2000)])
 .then(result => console.log(result)) // ["Completed in 1000", "Completed in 2000]