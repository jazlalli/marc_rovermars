var Mars = function (size) {
  this.size = size;
  this.orientation = 12;
  this.position = {
    X: 0,
    Y: 0
  };
}

function getDirection(orientation) {
  if (!orientation)
    return null;

  if (orientation === 6 || orientation === 9)
    return '-';
  else
    return '+';
}

function getAxis(orientation) {
  if (!orientation)
    return null;

  if (orientation === 12 || orientation === 6)
    return 'X';
  else
    return 'Y';
}

Mars.prototype.moveForwards = function() {
  var axis = getAxis(this.orientation);
  var direction = getDirection(this.orientation);

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
  var axis = getAxis(this.orientation);
  var direction = getDirection(this.orientation);

  if (direction === '+') {
    if (this.position[axis] === 0) {
      this.position[axis] = this.size - 1;
    } else {
      this.position[axis] -= 1;
    }
  } else {
    if (this.position[axis] === this.size - 1) {
      this.position[axis] = 0;
    } else {
      this.position[axis] += 1;
    }
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