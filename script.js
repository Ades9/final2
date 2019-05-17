side = 20;
var socket = io();

function setup() {
    frameRate(5);
    createCanvas(20 * side , 20 * side);
    background('blue');  
 }
 function drawMatrix(matrix) {
    background('#33FFFF'); 

    for (var y = 0; y < matrix.length; y++) {

    }
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 0) {
                fill("#33FFFF");
                rect(x * side, y * side, side, side);
            }
 socket.on("matrix", drawMatrix)
  }
};