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
const moveBlock = () => {
    if (leftPx >= 449) return;

    leftPx++;
    elementChildBlock.style.left = `${leftPx}px`;
    requestAnimationFrame(moveBlock);  
}
moveBlock();
