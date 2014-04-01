var Mars = require('../mars');

describe('changing orientation', function () {
  var rover;

  beforeEach(function () {
    rover = new Mars(10);
  });

  it('should default to 12 o clock', function (done) {
    expect(rover.orientation).toBe(12);
    done();
  });

  it('should be 3 o clock after receiving one R signal', function (done) {
    rover.turnRight();
    expect(rover.orientation).toBe(3);
    done();
  });

  it('should be 9 o clock after receiving one L signal', function (done) {
    rover.turnLeft();
    expect(rover.orientation).toBe(9);
    done();
  });

  it('should be 6 o clock after receiving two R signals', function (done) {
    rover.turnRight();
    rover.turnRight();
    expect(rover.orientation).toBe(6);
    done();
  });

  it('should be 6 o clock after receiving two L signals', function (done) {
    rover.turnLeft();
    rover.turnLeft();
    expect(rover.orientation).toBe(6);
    done();
  });

  it('should be 9 o clock after receiving three R signals', function (done) {
    rover.turnRight();
    rover.turnRight();
    rover.turnRight();
    expect(rover.orientation).toBe(9);
    done();
  });

  it('should be 3 o clock after receiving three L signals', function (done) {
    rover.turnLeft();
    rover.turnLeft();
    rover.turnLeft();
    expect(rover.orientation).toBe(3);
    done();
  });

  it('should be 12 o clock after receiving four R signals', function (done) {
    rover.turnRight();
    rover.turnRight();
    rover.turnRight();
    rover.turnRight();
    expect(rover.orientation).toBe(12);
    done();
  });

  it('should be 12 o clock after receiving four L signals', function (done) {
    rover.turnLeft();
    rover.turnLeft();
    rover.turnLeft();
    rover.turnLeft();
    expect(rover.orientation).toBe(12);
    done();
  });

});