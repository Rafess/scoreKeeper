// import './styles.css';
const p1Btn = document.querySelector('#p1Button');
const p2Btn = document.querySelector('#p2Button');
const resetBtn =  document.querySelector('#reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const maxPoints = document.querySelector('#maxPoints');


let p1Score = 0;
let p2Score = 0;
let isGameOver = false;
let winningPoints = parseInt(maxPoints.value);

maxPoints.addEventListener('change', function () {
    winningPoints = parseInt(this.value);
    reset();
});

p1Btn.addEventListener('click', () => {
    if(!isGameOver) {
        p1Score +=1;
        p1Display.textContent = p1Score;
    }
    if(p1Display.textContent == winningPoints) {
        isGameOver = true;
        p1Display.classList = 'winner';
        p2Score.classList = 'loser';
        p1Btn.setAttribute('disabled', true);
        p2Btn.setAttribute('disabled', true);
    }
})

p2Btn.addEventListener('click', () => {
    if(!isGameOver) {
        p2Score +=1;
        p2Display.textContent = p2Score;
    }
    if(p2Display.textContent == winningPoints) {
        isGameOver = true;
        p2Display.classList = 'winner';
        p1Score.classList = 'loser';
        p1Btn.setAttribute('disabled', true);
        p2Btn.setAttribute('disabled', true);
    }
})

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList = '';
    p2Display.classList = '';
    p1Btn.removeAttribute('disabled', true);
    p2Btn.removeAttribute('disabled', true);
}

resetBtn.addEventListener('click', reset);



