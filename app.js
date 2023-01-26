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
        if(p1Score == winningPoints) {
            isGameOver = true;
            p1Display.classList = 'has-text-success';
            p2Display.classList = 'has-text-danger';
            p1Btn.setAttribute('disabled', true);
            p2Btn.setAttribute('disabled', true);
        }
        p1Display.textContent = p1Score;
    }
})

p2Btn.addEventListener('click', () => {
    if(!isGameOver) {
        p2Score +=1;
        if(p2Score == winningPoints) {
            isGameOver = true;
            p2Display.classList = 'has-text-success';
            p1Display.classList = 'has-text-danger';
            p1Btn.setAttribute('disabled', true);
            p2Btn.setAttribute('disabled', true);
        }
        p2Display.textContent = p2Score;
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



