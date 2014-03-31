var Mars = function (size) {
  this.size = size;
  this.orientation = 12;
  this.position = {
    X: 0,
    Y: 0
  };
}

Mars.prototype.moveForwards = function() {
  var axis = 'X';
  var direction = '+';

  if (this.orientation === 3) {
    axis = 'Y';
  }
    
  if (this.orientation === 9) {
    axis = 'Y';
    direction = '-';
  }

  if (this.orientation === 6) {
    direction = '-';
  }

  if (direction === '+') {
    if (this.position[axis] === this.size - 1) {
      this.position[axis] = 0;
    } else {
      this.position[axis] += 1;
    }
  } else {
    if (this.position[axis] === 0) {
      this.position[axis] = this.size - 1;
    } else {
      this.position[axis] -= 1;
    }
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