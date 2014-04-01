var Mars = function (size, obstacleCount) {
  this.size = size;
  this.orientation = 12;
  this.position = {
    X: 0,
    Y: 0
  };
  
  this.obstacleCount = obstacleCount;
  this.obstacles = [];

  this.setObstacles.call(this);

  console.log('i have', obstacleCount, 'obstacles located at', obstacles);
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

function setObstacles(count) {
  var obstacle = {
    X: null,
    Y: null
  };

  for (var i = count - 1; i >= 0; i--) {
    obstacle.X = Math.round(Math.random() * this.size) + 1;
    obstacle.Y = Math.round(Math.random() * this.size) + 1;

    this.obstacles.push(obstacle);
  };
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

module.exports = Mars;