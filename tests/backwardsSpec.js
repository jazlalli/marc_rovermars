var Mars = require('../mars');

describe('moving backwards', function () {
  var rover;

  beforeEach(function () {
    rover = new Mars(10);
  });

  it('should move backwards when orientation is 12', function (done) {
    rover.position.Y = 5;
    rover.moveBackwards();
    expect(rover.position.Y).toBe(4);
    done();
  });

  it('should wrap back around when orientation is 12 moving beyond the edge', function (done) {
    rover.moveBackwards();
    expect(rover.position.Y).toBe(rover.size - 1);
    done();
  });
});