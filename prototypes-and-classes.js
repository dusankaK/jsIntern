class Character {
  static counter = 0;

  constructor(name) {
    if(this.constructor === Character) {
      throw new Error("Character can't be instantianted");
    } else {
      this.name = name;
      this.x = Math.round(Math.random()*10);
      this.y = Math.round(Math.random()*10);
      Character.counter++;
    }
  }

  static getCharacterCount () {
    return this.counter;
  };

  setPosition(x,y) {
    if(x < 1 || y < 1 || x > 10 || y > 10) {
      throw Error('Position is out of the range');
    } else {
      this.x = x;
      this.y = y;
      console.log(`Position x is set to ${x} and postion y to ${y}`);
    }
  }

  getPosition() {
    console.log (`${this.name}'s x position is ${this.x} and y position is ${this.y}`);
  }
}

class PlayerCharacter extends Character{}
class NonPlayerCharacter extends Character{}

let player = new PlayerCharacter('Dusanka');
let player1 = new NonPlayerCharacter('Milos');
let player2 = new PlayerCharacter('Bojana');

//player.getPosition();
player.setPosition(5,6);
player.getPosition();
player1.getPosition();
console.log(Character.getCharacterCount());

// Using Prototypes
