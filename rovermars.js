#!/usr/bin/env node
var prompt = require('prompt');
var readline = require('readline');
var Rover = require('./mars');
var marsRover;

var opts = {
  properties: {
    size: {
      description: 'What size do you want the grid to be?',
      pattern: /^[1-9][0-9]?$|^100$/,
      message: 'Size must be bigger than 1X1 and can be up to 100X100',
      required: true
    },
    obstacles: {
      description: 'How many randomly placed obstacles should be on the grid?',
      required: true
    }
  }
};

function printRoverDetails(rover) {
  var coords = '(' + rover.position.X + ', ' + rover.position.Y + ')';
  var orientation = rover.orientation + ' o clock';
  
  console.log('Rover located at coordinates', coords, 'Current orientation', orientation);
}

console.log('****************** HELLO. I\'M MARC ROVERMARS. ******************');
console.log();
console.log('Let\'s set up your grid before you start moving the Rover around.');

prompt.start();

prompt.get(opts, function (err, result) {
  if (err) {
    process.exit(0);
  } else {
    marsRover = new Rover(result.size, result.obstacles);

    console.log('Setting grid size to', result.size, 'x', result.size, 'with', result.obstacles, 'obstacles at:');
    
    for (var i = result.obstacles - 1; i >= 0; i--) {
      console.log(marsRover.obstacles[i]);
    };

    console.log('Right, where do you want me to go (F, B, L or R)?');
    console.log();

    var repl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: true
    });

    repl.on('line', function (input) {
      var valid = ['F', 'B', 'L', 'R'];

      if (valid.indexOf(input) === -1) {
        console.log('Sorry, I can only go F, B, < or >');
      } else {
        switch (input) {
          case 'F':
            marsRover.moveForwards();
            printRoverDetails(marsRover);
            break;
          case 'B':
            marsRover.moveBackwards();
            printRoverDetails(marsRover);
            break;
          case 'L':
            marsRover.turnLeft();
            printRoverDetails(marsRover);
            break;
          case 'R':
            marsRover.turnRight();
            printRoverDetails(marsRover);
            break;
        }
      }
    });
  }
});