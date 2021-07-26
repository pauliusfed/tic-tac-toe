// TIC TAC TOE

const boxes = document.querySelectorAll('.box');
const text = document.querySelector('#heading');
const restartBtn = document.querySelector('#restart');
const gamebox = document.querySelector('.gamebox');

const spaces = [];
const Os = 'O';
const Xs = 'X';
let currentPlayer = Os;

restartBtn.addEventListener('click', () => {
    spaces.forEach((space, i) => {
        spaces[i] = null;
    });
    boxes.forEach((box) => {
        box.innerText = '';
    });
    text.innerText = `Play`;
    gamebox.style.pointerEvents = '';
});

const boxClicked = (e) => {
    const id = e.target.id;
    if (!spaces[id]) {
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;

        if (playerWon()) {
            text.innerText = `${currentPlayer} has won!  Press restart to play again.`;
            gamebox.style.pointerEvents = 'none';
            return;
        }

        if (playerDraw()) {
            return;
        }
        currentPlayer = currentPlayer === Os ? Xs : Os;
    }
};

const playerWon = () => {
    if (spaces[0] === currentPlayer) {
        if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
            return true;
        }
        if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
            return true;
        }
        if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
            return true;
        }
    }
    if (spaces[8] === currentPlayer) {
        if (spaces[2] === currentPlayer && spaces[5] === currentPlayer) {
            return true;
        }
        if (spaces[6] === currentPlayer && spaces[7] === currentPlayer) {
            return true;
        }
    }
    if (spaces[4] === currentPlayer) {
        if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
            return true;
        }
        if (spaces[3] === currentPlayer && spaces[5] === currentPlayer) {
            return true;
        }
        if (spaces[2] === currentPlayer && spaces[6] === currentPlayer) {
            return true;
        }
    }
};

const playerDraw = () => {
    let draw = 0;
    spaces.forEach((space, i) => {
        if (spaces[i] !== null) draw++;
    });
    if (draw === 9) {
        text.innerText = `Draw! Press restart to play.`;
    }
};

boxes.forEach((box) => {
    box.addEventListener('click', boxClicked);
});