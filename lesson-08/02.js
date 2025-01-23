const startButton = document.getElementById('start');
const cancelButton = document.getElementById('cancel');
const countdownDisplay = document.getElementById('countdown');

let isTimerStarted = false;
let timerId;

startButton.addEventListener('click', () => {
  if (isTimerStarted) return; 

  let counter = 3;
  countdownDisplay.textContent = counter;
  isTimerStarted = true;

  timerId = setInterval(() => {
    counter--;
    if (counter > 0) {
      countdownDisplay.textContent = counter;
    } else {
      countdownDisplay.textContent = '🚀';
      clearInterval(timerId);
      isTimerStarted = false;
    }
  }, 1000);
});

cancelButton.addEventListener('click', () => {
  if (isTimerStarted) {
    clearInterval(timerId);
    countdownDisplay.textContent = 'Отменено';
    isTimerStarted = false;
  }
});
