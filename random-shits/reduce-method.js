const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("   |   |   ");
console.log("---|---|---");
console.log("   |   |   ");
console.log("---|---|---");
console.log("   |   |   ");
console.log("---|---|---");
console.log("   |   |   ");

const player1Resps = [];

rl.question('In which position do you wanna play? (Player 1) ', (pos1) => {
  player1Resps.push(pos1);

  rl.question('In which position do you wanna play? (Player 2) ', (pos2) => {
    player1Resps.push(pos2);

    console.log(`Player 1 chose position ${player1Resps[0]}`);
    console.log(`Player 2 chose position ${player1Resps[1]}`);

    rl.close();
  });
});
