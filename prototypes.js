let characterCount = 0;

function Character(name) {
  this.name = name;
  this.x = Math.round(Math.random()*10);
  this.y = Math.round(Math.random()*10);
  characterCount++;
  console.log('Character created')
}

Character.prototype.getPosition = function() {
    console.log (`${this.name}'s x position is ${this.x} and y position is ${this.y}`);
}

Character.prototype.setPosition = function(x,y) {
  if(x < 1 || y < 1 || x > 10 || y > 10) {
    console.log('Position is out of the range');
  } else {
    this.x = x;
    this.y = y;
    console.log(`Position x is set to ${x} and postion y to ${y}`);
  }
}

Character.getCharacterCount = function() {
  console.log(characterCount);
}

function PlayerCharacter(name){
  Character.call(this, name)
};

function NonPlayerCharacter(name){
  Character.call(this, name)
}

//Extending the properties of the base class
PlayerCharacter.prototype = Object.create(Character.prototype);
NonPlayerCharacter.prototype = Object.create(Character.prototype);

const player = new PlayerCharacter('Dusanka');
const nonplayer = new NonPlayerCharacter('Bojan');
console.log(nonplayer.getPosition());
console.log(player.getPosition(), player.setPosition(0, 2));
console.log(Character.getCharacterCount());



