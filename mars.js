var Mars = function (size) {
  this.size = size;
  this.orientation = 12;
  this.position = {
    X: 0,
    Y: 0
  };
}

Mars.prototype.moveForwards = function() {
  if (this.position.X === this.size - 1) {
    this.position.X = 0;
  } else {
    this.position.X += 1;
  }
};

Mars.prototype.moveBackwards = function() {
  if (this.position.Y === 0) {
    this.position.Y = this.size - 1;
  } else {
    this.position.Y -= 1;
  }
};

Mars.prototype.turnRight = function() {
  if (this.orientation === 12) {
    this.orientation = 3;
  } else {
    this.orientation += 3;
  }
};

Mars.prototype.turnLeft = function() {
  if (this.orientation === 3) {
    this.orientation = 12;
  } else {
    this.orientation -= 3;
  }
};

// size: 0,
// position: {
//   x: 0,
//   y: 0
// },
// obstacles: { }

module.exports = Mars;