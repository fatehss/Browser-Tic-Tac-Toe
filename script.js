//need to create a module for the gameboard
/**
 * What is the gameboard going to do?
 * 1. It will hold the 3x3 grid
 * 2. It will check the game status to see if it is over
 * 3. It will see which player's turn it is
 * 
 * I could have gamegrid have event listeners for each box which would call playTurn() for gamegrid. playTurn() calls private function which update text content of 
 */

//i need to create a 3x3 array of html div elements





const gameBoard = (() => {
    let _currentPlayer = 0;  //stores current player
    let _gameGrid = []

    const initializeGrid = () =>{
        for (let i =0; i<3; ++i){
            let row = [];
            for (let j=0; j<3; ++j){
                let box = document.createElement('div');
                box.classList.add('box-div');
                box.setAttribute('position', i+''+j);
        
                let board = document.getElementById('game-board');
                //box.addEventListener('click', ()=>{console.log(i+','+j)});
                box.addEventListener('click', ()=>{_playTurn(i,j)});
                box.style.height= '148px';
                box.style.width = '148px';
                box.style.border = '1px solid black';
                board.appendChild(box);
                row.push(box);
            }
            _gameGrid.push(row);
        }
    }
    const _playTurn = (x,y) =>{
        //WHY doesnt this work?
        (_currentPlayer == 0)? _gameGrid[x][y].style.innerText = 'X': _gameGrid[x][y].style.innerText= 'O';
        console.log('hisadflja');
        
        _currentPlayer = (_currentPlayer +1)%2;
    }

    return {initializeGrid}
})();

gameBoard.initializeGrid();



