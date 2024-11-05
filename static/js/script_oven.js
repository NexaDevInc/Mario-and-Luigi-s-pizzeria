// script.js

function toggleLED(ledCommand) {
    fetch('/toggle_led', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ led_command: ledCommand })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

class Timer {
    constructor(duration, displayElement) {
        this.initialDuration = duration;
        this.remainingTime = duration;
        this.displayElement = displayElement;
        this.timerId = null;
    }

    start() {
        if (this.timerId) return; // Prevent multiple intervals

        const startTime = Date.now();
        this.timerId = setInterval(() => {
            const elapsed = Date.now() - startTime;
            this.remainingTime = this.initialDuration - elapsed;

            if (this.remainingTime <= 0) {
                this.remainingTime = 0;
                this.stop();
            }

            this.updateDisplay();
        }, 1000);
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    reset() {
        this.stop();
        this.remainingTime = this.initialDuration;
        this.updateDisplay();
    }

    updateDisplay() {
        const minutes = Math.floor(this.remainingTime / 1000 / 60);
        const seconds = Math.floor((this.remainingTime / 1000) % 60).toString().padStart(2, '0');
        this.displayElement.textContent = `${minutes}:${seconds}`;
    }
}

// Create timers for each oven
const timers = {
    redTimer: new Timer(15 * 60 * 1000, document.getElementById('redTimer')),
    greenTimer: new Timer(15 * 60 * 1000, document.getElementById('greenTimer')),
    blueTimer: new Timer(15 * 60 * 1000, document.getElementById('blueTimer')),
    yellowTimer: new Timer(15 * 60 * 1000, document.getElementById('yellowTimer'))
};

// Functions to start and stop each timer based on the timer ID
function startTimer(timerId) {
    if (timers[timerId]) {
        timers[timerId].reset(); // Reset the timer to start from 15:00
        timers[timerId].start();
    }
}

function stopTimer(timerId) {
    if (timers[timerId]) timers[timerId].stop();
}

function resetTimer(timerId) {
    if (timers[timerId]) timers[timerId].reset();
}

// Add event listeners for buttons to start each timer
document.getElementById('redButtonStart').addEventListener('click', () => startTimer('redTimer'));
document.getElementById('greenButtonStart').addEventListener('click', () => startTimer('greenTimer'));
document.getElementById('blueButtonStart').addEventListener('click', () => startTimer('blueTimer'));
document.getElementById('yellowButtonStart').addEventListener('click', () => startTimer('yellowTimer'));

document.getElementById('redButtonStop').addEventListener('click', () => stopTimer('redTimer'));
document.getElementById('greenButtonStop').addEventListener('click', () => stopTimer('greenTimer'));
document.getElementById('blueButtonStop').addEventListener('click', () => stopTimer('blueTimer'));
document.getElementById('yellowButtonStop').addEventListener('click', () => stopTimer('yellowTimer'));

document.getElementById('redButtonReset').addEventListener('click', () => resetTimer('redTimer'));
document.getElementById('greenButtonReset').addEventListener('click', () => resetTimer('greenTimer'));
document.getElementById('blueButtonReset').addEventListener('click', () => resetTimer('blueTimer'));
document.getElementById('yellowButtonReset').addEventListener('click', () => resetTimer('yellowTimer'));
