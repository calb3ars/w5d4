// Test code
class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
   console.log("Turning on " + this.name);
};

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

Function.prototype.myBind = function(obj) {
  return () => {
    this.apply(obj); // Works with .call
  };
};

// const boundTurnOn = turnOn.bind(lamp);
// const myBoundTurnOn = turnOn.apply(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

// boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"
