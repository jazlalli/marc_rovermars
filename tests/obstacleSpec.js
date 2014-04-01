var Mars = require('../mars');

describe('obstacle detection', function () {
  var rover;

  beforeEach(function () {
    rover = new Mars(10);
    rover.obstacles.push({X: 1, Y: 2});

    spyOn(console, 'log');
  });

  it('should alert to obstacle when trying to move into occupied space', function (done) {
    // run into the obstacle
    rover.turnRight();
    rover.moveForwards();
    rover.moveForwards();
    rover.turnLeft();
    rover.moveForwards()

    // expect it to alert you to the obstacle
    expect(console.log).toHaveBeenCalledWith('OBSTACLE ALERT. MOVE ABORTED.');
    done();
  });

  it('should mean the rover is adjacent to the obstacle and facing it', function (done) {
    // run into the obstacle
    rover.turnRight();
    rover.moveForwards();
    rover.moveForwards();
    rover.turnLeft();
    rover.moveForwards()

    expect(rover.position.X).toBe(0);
    expect(rover.position.Y).toBe(2);
    expect(rover.orientation).toBe(12);
    done();
  });

});