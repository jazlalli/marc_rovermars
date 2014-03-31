var Mars = require('../mars');

describe('moving forwards', function () {
  var rover;

  beforeEach(function () {
    rover = new Mars(10);
  });
  
  it('should move up when orientation is 12', function (done) {
    rover.moveForwards();
    expect(rover.position.X).toBe(1);
    done();
  });

  it('should wrap back around when orientation is 12 and moving beyond the edge', function (done) {
    rover.position.X = rover.size - 1;
    rover.moveForwards();
    expect(rover.position.X).toBe(0);
    done();
  });

  it('should move down when orientation is 6', function (done) {
    rover.orientation = 6;
    rover.position.X = 4;
    rover.moveForwards();
    expect(rover.position.X).toBe(3);
    done();
  });

  it('should wrap back around when orientation is 6 and moving beyond the edge', function (done) {
    rover.orientation = 6;
    rover.moveForwards();
    expect(rover.position.X).toBe(rover.size - 1);
    done();
  });


  it('should move to the right when orientation is 3', function (done) {
    rover.orientation = 3;
    rover.moveForwards();
    expect(rover.position.Y).toBe(1);
    done();
  });

  it('should wrap back around when orientation is 3 and moving beyond the edge', function (done) {
    rover.orientation = 3;
    rover.position.Y = rover.size - 1;
    rover.moveForwards();
    expect(rover.position.Y).toBe(0);
    done();
  });

  it('should move to the left when orientation is 9', function (done) {
    rover.orientation = 9;
    rover.position.Y = 7;
    rover.moveForwards();
    expect(rover.position.Y).toBe(6);
    done();
  });

  it('should wrap back around when orientation is 9 and moving beyond the edge', function (done) {
    rover.orientation = 9;
    rover.moveForwards();
    expect(rover.position.Y).toBe(rover.size - 1);
    done();
  });

});