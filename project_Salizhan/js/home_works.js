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

//CHARACTERS 
// TODO:Реализовать плавный переход или бесконечный слайдер 

//html elements
const characters = document.querySelector(".characters-list");
const characterCloseButton = document.querySelector(".characters-close-button");

//audio
const uiChooseAudio = document.querySelector("#uiChooseAudio");
const uiSelectAudio = document.querySelector("#uiSelectAudio");

//functions
const cardInfoClose = (cards) => {
    const titles = document.querySelectorAll(".character-title");
    titles.forEach((title) => {
        title.classList.remove("character-active")
    });
    cards.forEach((card) => {
        card.classList.remove("character-active");
    })
}

const cardInfoOpen = (cards, userCardIndex) => {
    document.querySelectorAll(".character-title")[userCardIndex].classList.toggle("character-active");
    cards[userCardIndex].classList.add("character-active");
}

//XMLHTTPRequest
const xhr = new XMLHttpRequest();
xhr.open("GET", "../data/gwent_cards.json");
xhr.setRequestHeader("Content-type", "application/json");
xhr.send();

xhr.onload = () => {
    const cards = JSON.parse(xhr.response);
    const gwentCards = cards.map((card) => {
        return `
            <div class="character-card">
                <div class="character-photo">
                    <img src="${card.image}" alt="">
                </div>
                <div class="character-title">
                    <h4>${card.name}</h4>
                    <p>${card.description}</p>
                </div>
            </div>
        `
    });
    characters.innerHTML = gwentCards.join("");
}

const gaunterRequest = new XMLHttpRequest()
gaunterRequest.open("GET", "../data/gaunter_odimm.json");
gaunterRequest.setRequestHeader("Content-type", "application/json");
gaunterRequest.send();

gaunterRequest.onload = () => {
    console.log(JSON.parse(gaunterRequest.response));
}

//Listeners
characters.addEventListener("mouseover", (event) => {
    if (event.target.closest(".character-card")) {
        audioPlay(uiChooseAudio);
    } 
})

characters.onclick = (event) => {
    //HTML elements
    const characterCards = document.querySelectorAll(".character-card");
    const images = document.querySelectorAll(".character-photo img");
    
    if (event.target.closest(".character-card")) {
        characterCards.forEach((card, cardIndex) => {
            if (event.target === images[cardIndex]) {
                audioPlay(uiSelectAudio);
                cardInfoOpen(characterCards, cardIndex);
            }
        })
    }
}

characterCloseButton.onclick = () => {
    const characterCards = document.querySelectorAll(".character-card");
    audioPlay(uiSelectAudio);
    cardInfoClose(characterCards);
}