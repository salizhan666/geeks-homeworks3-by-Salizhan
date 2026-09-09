// GMAIL CHECK 
const userGmailInput = document.querySelector("#gmail_input");
const checkGmailButton = document.querySelector("#gmail_button");
const resultGmailCheck = document.querySelector("#gmail_result");

checkGmailButton.onclick = () => {
    const regEx = /^[a-zA-Z]{1,}\w{2,}@gmail\.com$/;
    
    if (regEx.test(userGmailInput.value)) {
        resultGmailCheck.innerHTML = "OK";
        resultGmailCheck.style.color = "green";
    } else {
        resultGmailCheck.innerHTML = "ERROR";
        resultGmailCheck.style.color = "red";
    }
}

// MOVE BLOCK
const elementChildBlock = document.querySelector(".child_block");

let leftPx = 0;
let topPx = 0;

const moveBlock = () => {
    if (topPx === 0 && leftPx < 449) {
        leftPx++;
        elementChildBlock.style.left = `${leftPx}px`;
        requestAnimationFrame(moveBlock);  
    } else if (leftPx === 449 && topPx < 449) {
        topPx++;
        elementChildBlock.style.top = `${topPx}px`;
        requestAnimationFrame(moveBlock);  
    } else if (topPx === 449 && leftPx > 0) {
        leftPx--;
        elementChildBlock.style.left = `${leftPx}px`;
        requestAnimationFrame(moveBlock);
    } else if (leftPx === 0 && topPx > 0) {
        topPx--;
        elementChildBlock.style.top = `${topPx}px`;
        requestAnimationFrame(moveBlock);
    }
}
moveBlock();

//STOPWATCH 
const stopwatchValue = document.querySelector("#seconds");
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const resetButton = document.querySelector("#reset");

let second = 0;
let stopwatch = null;

const startStopwatch = () => {
    second++;
    stopwatchValue.innerHTML = second;
}

startButton.onclick = () => {
    if (!stopwatch) {
        stopwatch = setInterval(startStopwatch, 1000);
    }
}

stopButton.onclick = () => {
    if (stopwatch) {
        clearInterval(stopwatch);
        stopwatch = null;
    }
}

resetButton.onclick = () => {
    if (stopwatch) {
        stopwatch = null;
        clearInterval(stopwatch);
    }
    second = 0;
    stopwatchValue.innerHTML = 0;
}