const square = document.querySelectorAll('.square');
const avatar = document.querySelectorAll('.avatar');
const timeleft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;
const time= 60;
timeleft.textContent=time;
let currentTime = time;

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('avatar');
    })

    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('avatar');

    hitPosition = randomPosition.id;
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if (id.id == hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
})

function moveAvatar() {
    let timerId = null;
    timerId = setInterval(randomSquare, 500);
}

moveAvatar();

function countDown() {
    currentTime--;
    timeleft.textContent = currentTime;

    if (currentTime === 0) {
        // clearInterval(timerId);
        if(result>0){
            alert(`Time's Up! Congratulations, your final score is ${result}.`);
        }
        else{
            alert("Time's Up! You should try again. Don't let this candidate go!");
        }
        timeleft.textContent=time+1;
        currentTime=time+1;
    }
}

let timerId = setInterval(countDown, 1000);

