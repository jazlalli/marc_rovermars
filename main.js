#!/usr/bin/env node
var prompt = require('prompt');
var readline = require('readline');
var Mars = require('mars');

var env;

var opts = {
  properties: {
    size: {
      description: 'What size do you want the grid to be?',
      pattern: /^[1-9][0-9]?$|^100$/,
      message: 'Size must be bigger than 1X1 and can be up to 100X100',
      required: true
    }
  }
};

console.log();
console.log('****************** HELLO. I\'M MARC ROVERMARS. ******************');
console.log();
console.log('Let\'s set up your grid before you start moving the Rover around.');

prompt.start();

prompt.get(opts, function (err, results) {
  if (err) {
    console.log();
    process.exit(0);
  } else {
    env = new Mars(result.size);
    console.log('Setting grid size to:', result.size, 'x', result.size);
    console.log();
    console.log('Right, where do you want me to go?');
    console.log();

    var repl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: true
    });

    repl.on('line', function (input) {
      var valid = ['F', 'B', '<', '>'];

      if (valid.indexOf(input) === -1) {
        console.log('Sorry, I can only go F, B, < or >');
      } else {
        switch (input) {
          case 'F':
            console.log('forwards');
            break;
          case 'B':
            console.log('backwards');
            break;
          case '<':
            console.log('left');
            break;
          case '>':
            console.log('right');
            break;
        }
      }
    });
  }
});