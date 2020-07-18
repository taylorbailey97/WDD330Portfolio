document.getElementById('r1c1').addEventListener('touchend', fillBoard);
document.getElementById('r1c2').addEventListener('touchend', fillBoard);
document.getElementById('r1c3').addEventListener('touchend', fillBoard);
document.getElementById('r2c1').addEventListener('touchend', fillBoard);
document.getElementById('r2c2').addEventListener('touchend', fillBoard);
document.getElementById('r2c3').addEventListener('touchend', fillBoard);
document.getElementById('r3c1').addEventListener('touchend', fillBoard);
document.getElementById('r3c2').addEventListener('touchend', fillBoard);
document.getElementById('r3c3').addEventListener('touchend', fillBoard);
//document.getElementById('btn').addEventListener('click', reset)


var turnX = true;

function fillBoard() {
    this.innerHTML = getTurn();
    turnX = !turnX;
}

// function reset() {
//     window.location.href('./index.html');
// }

function getTurn() {
    return turnX ? "X" : "O";
}