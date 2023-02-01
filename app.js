// import './styles.css';

class Player {
    constructor(button, display) {
        this.score = 0;
        this.button = document.querySelector(button);
        this.display = document.querySelector(display);
    }
}

const p1 = new Player("#p1Button", "#p1Display");

const p2 = new Player("#p2Button", "#p2Display");


 const resetBtn =  document.querySelector('#reset');

 const maxPoints = document.querySelector('#maxPoints');
 let isGameOver = false;
 let winningPoints = parseInt(maxPoints.value);


function updateScore(pointer, notPointer) {
    if(!isGameOver) {
        pointer.score +=1;
        if(pointer.score == winningPoints) {
            isGameOver = true;
            pointer.display.classList = 'has-text-success';
            notPointer.display.classList = 'has-text-danger';
            pointer.button.setAttribute('disabled', true);
            notPointer.button.setAttribute('disabled', true);
        }
        pointer.display.textContent = pointer.score;
    }
}
p1.button.addEventListener('click', function() {
    updateScore(p1, p2) 
});
p2.button.addEventListener('click', function() {
    updateScore(p2, p1)
});

maxPoints.addEventListener('change', function () {
    winningPoints = parseInt(this.value);
    reset();
});

function reset() {
    isGameOver = false;
    for(const p of [p1, p2]){
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList = '';
        p.button.removeAttribute('disabled', true);
    }
  
}

resetBtn.addEventListener('click', reset);



