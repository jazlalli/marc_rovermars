var Mars = function (size, obstacleCount) {
  this.size = size;
  this.orientation = 12;
  this.position = {
    X: 0,
    Y: 0
  };
  
  this.obstacleCount = obstacleCount;
  this.obstacles = [];

  setObstacles.call(this, obstacleCount);
}

function setObstacles(count) {
  var obstacle;

  for (var i = count - 1; i >= 0; i--) {
    obstacle = {
      X: Math.round(Math.random() * (this.size - 1)),
      Y: Math.round(Math.random() * (this.size - 1))
    };

    this.obstacles.push(obstacle);
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

/*
  TODO
  factoring out move functionality so that it returns 
  the new coords rather than just moving straight there.
  needed in order to check for obstacles
*/
function move(currentLocation, axis, direction) {

  if (direction === '+') {
    if (currentLocation[axis] === this.size - 1) {
      currentLocation[axis] = 0;
    } else {
      currentLocation[axis] += 1;
    }
  } else {
    if (this.position[axis] === 0) {
      this.position[axis] = this.size - 1;
    } else {
      this.position[axis] -= 1;
    }
  }
}

/*
  TODO
  will inspect the coords that we're about to move to making
  sure there isn't an obstacle in the way.
*/
function checkForObstacles(axis, direction) {
  for (var i = this.obstacles.length - 1; i >= 0; i--) {
    
  };
};

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

  if (direction === '-') {
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

module.exports = Mars;