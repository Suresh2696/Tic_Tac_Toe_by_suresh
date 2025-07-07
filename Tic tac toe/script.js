let boxx = document.querySelectorAll(".game-box");
let resbtn = document.getElementById("res-game"); 
let newGamebtn = document.getElementById("new-game"); 
let msc = document.querySelector(".tic-tac");
let gmc = document.querySelector("#game-message"); 
let c = 0; 
let turnO = true;  

const array = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO = true;
    c = 0; 
    enableBoxes();
    msc.classList.add("hide"); 
};

boxx.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        c++;

        let isWinner = checkWinner(); 
        if (isWinner) {
            showWinner(isWinner);
        } else if (c == 9) {
            gameDraw();
        }
    });
});

const gameDraw = () => {
    gmc.innerText = "Game was a Draw";
    msc.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = () => {
    for (let box of boxx) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxx) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    gmc.innerText = `Congrats, winner is ${winner}`; 
    msc.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of array) {
        let [a, b, c] = pattern;
        if (
            boxx[a].innerText !== "" &&
            boxx[a].innerText === boxx[b].innerText &&
            boxx[b].innerText === boxx[c].innerText
        ) {
            return boxx[a].innerText;
        }
    }
    return null;
};

newGamebtn.addEventListener("click", resetGame); 
resbtn.addEventListener("click", resetGame); 
