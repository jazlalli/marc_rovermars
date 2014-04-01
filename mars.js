
var Mars = function (size, obstacleCount) {
  
  // object properties
  this.size = size;
  this.orientation = 12;
  this.position = {
    X: 0,
    Y: 0
  };
  
  this.obstacleCount = obstacleCount;
  this.obstacles = [];

  setupObstacles.call(this, obstacleCount);
}

// setup the desired number of obstacles in random locations
function setupObstacles(count) {
  var obstacle;

  for (var i = count - 1; i >= 0; i--) {
    obstacle = {
      X: Math.round(Math.random() * (this.size - 1)),
      Y: Math.round(Math.random() * (this.size - 1))
    };

    this.obstacles.push(obstacle);
  };
}

// helper to determine whether axis coordinate is incrementing or decrementing
function getDirection(orientation, forwards) {
  if (!orientation)
    return null;

  if (forwards) {
    if (orientation === 6 || orientation === 9)
      return '-';
    else
      return '+';
  } else {
    if (orientation === 12 || orientation === 3)
      return '-';
    else
      return '+';
  }
}

// helper to determine which axis we need to move along
function getAxis(orientation) {
  if (!orientation)
    return null;

  if (orientation === 12 || orientation === 6)
    return 'X';
  else
    return 'Y';
}

// makes the move and returns the new coords
function move(axis, direction) {
  var position = {
    X: this.position.X,
    Y: this.position.Y
  };

  if (direction === '+') {
    if (position[axis] === this.size - 1) {
      position[axis] = 0;
    } else {
      position[axis] += 1;
    }
  } else {
    if (position[axis] === 0) {
      position[axis] = this.size - 1;
    } else {
      position[axis] -= 1;
    }
  }

  return position;
}

function checkForObstacles(coords) {
  for (var i = this.obstacles.length - 1; i >= 0; i--) {
    if (this.obstacles[i].X === coords.X && this.obstacles[i].Y === coords.Y) {
      return true;
    }
  };

  return false;
};

// PUBLIC API
Mars.prototype.moveForwards = function() {
  var axis = getAxis(this.orientation);
  var direction = getDirection(this.orientation, true);

  var newCoords = move.call(this, axis, direction);

  if (checkForObstacles.call(this, newCoords)) {
    console.log('OBSTACLE ALERT. MOVE ABORTED.');
  } else {
    this.position[axis] = newCoords[axis];
  }
};

Mars.prototype.moveBackwards = function() {
  var axis = getAxis(this.orientation);
  var direction = getDirection(this.orientation, false);

  var newCoords = move.call(this, axis, direction);

  if (checkForObstacles.call(this, newCoords)) {
    console.log('OBSTACLE ALERT. MOVE ABORTED.');
  } else {
    this.position[axis] = newCoords[axis];
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