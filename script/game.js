let counter = true
const boxes = document.querySelectorAll('.box')

const winStrategies = {
    one: [0, 1, 2, 3, 4],
    two: [5, 6, 7, 8, 9],
    three: [10, 11, 12, 13, 14],
    four: [15, 16, 17, 18, 19],
    five: [20, 21, 22, 23, 24],
    six: [0, 5, 10, 15, 20],
    seven: [1, 6, 11, 16, 21],
    eight: [2, 7, 12, 17, 22],
    nine: [3, 8, 13, 18, 23],
    ten: [4, 9, 14, 19, 24],
    eleven: [0, 6, 12, 18, 24],
    twelve: [4, 8, 12, 16, 20]
}

const movesOne = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const movesTwo = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const move = box => (boxes[box].textContent === 'X' || boxes[box].textContent === 'O') ? false : counter ? playerOne(box) : playerTwo(box)

const playerOne = box => {
    boxes[box].textContent = 'X'
    movesOne[box] = 1;
    checkWin(movesOne)
}

const playerTwo = box => {
    boxes[box].textContent = 'O'
    movesTwo[box] = 1;
    checkWin(movesTwo)
}

const checkWin = moves => {
    for (const [key, strategies] of Object.entries(winStrategies)) {
        let win = strategies.filter(strategy => moves[strategy] === 1)
        if (win.length === 5) {
            return gameEnd()
        }
    }
    counter = !counter
 }

const gameEnd = () => {
    document.querySelector('.main').style.display = 'none'
    document.querySelector('.congrats-div').style.display = 'block'
    document.querySelector('.win-text').textContent = `CONGRATS PLAYER ${counter ? '1' : '2'}!`
}


boxes.forEach((box, idx) => {
    box.addEventListener('click', () => move(idx))
})