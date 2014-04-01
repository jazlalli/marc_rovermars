var Mars = require('../mars');

describe('obstacle detection', function () {
  var rover;

  beforeEach(function () {
    rover = new Mars(10);
    rover.obstacles.push({X: 1, Y: 2});
  });

  it('should alert to obstacle when trying to move into occupied space', function (done) {
    // run into the obstacle
    // rover.turnRight();
    // rover.moveForwards();
    // rover.moveForwards();
    // rover.turnLeft();

    // expect it to alert you to the obstacle
    expect(rover.moveForwards()).toBe('OBSTACLE');
    done();
  });

});