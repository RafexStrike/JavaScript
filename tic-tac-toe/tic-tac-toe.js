// Import the readline module
const readline = require('readline');
// Create an interface for reading input
const rl = readline.createInterface({
    input: process.stdin, // Where the input is coming from (terminal)
    output: process.stdout // Where the output will be displayed (terminal)
});


console.log("  r0  r1  r2 ");
console.log("    |   |   ");
console.log(" ---|---|---");
console.log("    |   |   ");
console.log(" ---|---|---");
console.log("    |   |   ");
console.log(" ---|---|---");
console.log("    |   |   ");


const player1Res =
    [[null, null, null],
    [null, null, null],
    [null, null, null]];



for (let i = 1; i < 9; i++) {
    if (i % 2 != 0) {

        rl.question('In which row do you wanna play? ', (row) => {
            rl.question('In which column do you wanna play? ', (column) => {
                const rowNum = parseInt(row);
                const colNum = parseInt(column);

                if (player1Res[rowNum][colNum] == null) {
                    player1Res[rowNum][colNum] = 1;
                }
                else {
                    console.log("Already taken. Please input another position.")
                }

                console.log(player1Res);
                // rl.close();
            });
        });
    }
    else {
        rl.question('In which row do you wanna play? ', (row) => {
            rl.question('In which column do you wanna play? ', (column) => {
                const rowNum = parseInt(row);
                const colNum = parseInt(column);

                if (player1Res[rowNum][colNum] == null) {
                    player1Res[rowNum][colNum] = 0;
                }
                else {
                    console.log("Already taken. Please input another position.")
                }

                console.log(player1Res);
                // rl.close();
            });
        });
    }
}



