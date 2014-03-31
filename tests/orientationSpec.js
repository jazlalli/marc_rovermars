var Mars = require('../mars');

describe('orientation', function () {
  var rover;

  beforeEach(function () {
    rover = new Mars(10);
  });

  it('should start off at 12 o clock', function (done) {
    expect(rover.orientation).toBe(12);
    done();
  });

  it('should turn to the right when receiving the > signal', function (done) {
    rover.turnRight();
    expect(rover.orientation).toBe(3);
    done();
  });

  it('should turn to the left when receiving the < signal', function (done) {
    rover.turnLeft();
    expect(rover.orientation).toBe(9);
    done();
  });

});