let state = {
    board: [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    ],
    players: ["", ""],
    counter: 0,
}




// ********** DOM SELECTORS ****************
const board = document.querySelector('.board');
const playerTurn = document.querySelector('.player-turn');



// ********** EVENT LISTENERS ****************
board.addEventListener('click', markBoard)
playerTurn.addEventListener('click', setPlayer) 

// ********** FUNCTIONS ****************
function markBoard(event) {
    if (event.target.innerHTML === "") {
        if (state.counter % 2 === 0) {
            event.target.innerHTML = "X";
            event.target.style.color = "blue";
            state.counter++;
        } else {
            event.target.innerHTML = "O"; 
            event.target.style.color = "brown";
            state.counter++;
        } 

} else alert("That spot is taken, please select an open spot!");
}



// // these two functions below are broken. When I click on the start button, I get undefined. my logic is as follows.

// first, create a renderPlayer function to display the players name and who's turn it is. logic is if we have a playervalue updated in state. players at both index 0 and 1, then display the current player's turn (or in this case I couldn't get a single string to populate on string, instead I get undefined). if there isn't a player value in both indexs, do nothing and leave the page as is with the input boxes

// then the setplayer function. logic is if you click the start button, take the text inputted in the input boxes and assign it to the state.players array to then be used in the render function (see above). I get a typeerror on the classname on event.target.className === "start" and I have no idea why, that is correct and should work 



function renderPlayer() {
    let text;
    // we have two player names inputted and they've been updated in the state.players array 
    if (state.players[0] && state.players[1]) {
      text = "It's currently John's Turn";
    } 

    playerTurn.innerHTML = text;
  };


function setPlayer(event) {
    if (event.target.className === "start") {
        const player1Input = document.querySelector("input[name=player1]");
        const player1Value = player1Input.value;
        state.player[0] = player1Value;

        const player2Input = document.querySelector("input[name=player2]");
        const player2Value = player2Input.value;
        state.player[1] = player2Value;

        console.log("this is my player1 value", player1Value);
        console.log("this is my player2 value", player2Value);

        renderPlayer();
    }
}


setPlayer();
console.log(state.players[0])
// function updateStateBoard(index) {
//     console.log(index);
// }
