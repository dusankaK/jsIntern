var outside = "I'm outside of the function";

function loopLog() {
  for(let i = 0; i < 3; i++){
    var inside = "I'm inside"
    let inside2 = "I'm also inside"
  }

  console.log(inside); 
  //console.log(inside2); // inside2 is not defined
  console.log(outside); 

  var fromInside = "I'm from the function"
}

loopLog();
console.log(fromInside); // fromInside is not defined