var Mars = require('../mars');
var env = new Mars(10);

describe('position', function () {
  it('should move forward one position when receiving F signal', function (done) {
    env.moveForward();
    expect(env.position.X).toBe(1);
    done();
  });
});