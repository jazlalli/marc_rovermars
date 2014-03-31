var Mars = function (size) {
  this.size = size;
  this.position = {
    X: 0,
    Y: 0,
    orientation: 0
  };
}

Mars.prototype.moveForward = function() {
  if (this.position === this.size - 1) {
    this.position.X = 0;
  } else {
    this.position.X += 1;
  }
};

// size: 0,
// position: {
//   x: 0,
//   y: 0
// },
// obstacles: { }

module.exports = Mars;