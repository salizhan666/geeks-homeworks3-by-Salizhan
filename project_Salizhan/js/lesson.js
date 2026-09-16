let index = 0;

// PHONE CHECKER
const userPhoneInput = document.querySelector("#phone_input");
const checkPhoneButton = document.querySelector("#phone_button");
const resultPhoneCheck = document.querySelector("#phone_result");

checkPhoneButton.onclick = () => {
    const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/;

    if (regExp.test(userPhoneInput.value)) {
        resultPhoneCheck.innerHTML = "OK";
        resultPhoneCheck.style.color = "green";
    } else {
        resultPhoneCheck.innerHTML = "ERROR";
        resultPhoneCheck.style.color = "red";
    }
}

// //TAB SLIDER 
// const tabContentBlocks = document.querySelectorAll(".tab_content_block");
// const tabButtons = document.querySelectorAll(".tab_content_item");
// const tabButtonsParent = document.querySelector(".tab_content_items");
// let autoTabsInteval = null;

// const hideTabContent = () => {
//     tabContentBlocks.forEach(block => {
//         block.style.display = "none";
//     })
//     tabButtons.forEach(button => {
//         button.classList.remove("active");
//     })
// }

// const showTabContent = (index = 0) => {
//     tabContentBlocks[index].style.display = "block";
//     tabButtons[index].classList.add("active");
// }

// const autoShowContent = (i) => { 
//     autoTabsInteval = setInterval(() => {
//         i++;
//         if (i > tabButtons.length - 1) {
//             i = 0;
//         }
//         hideTabContent();
//         showTabContent(i);
//     }, 3000);
// }

// hideTabContent();
// showTabContent();

// tabButtonsParent.onclick = event => {
//     if (event.target.classList.contains("tab_content_item")) {
//         clearInterval(autoTabsInteval);
//         tabButtons.forEach((tab, tabIndex) => {
//             if (event.target === tab) {
//                 hideTabContent();
//                 showTabContent(tabIndex);
//             }
//         });
//     }
// }

// autoShowContent(index);


//INFO
const infoButtons = document.querySelectorAll(".info__content .info__button");
const infoContentDesc = document.querySelectorAll(".info__descption");
const infoBlock = document.querySelector(".info");
const infoButtonsParent = document.querySelector(".info__content__blocks");

const infoCloseContent = () => {
    infoButtons.forEach((button) => {
        button.classList.remove("info__active");
    })
    infoContentDesc.forEach((title) => {
        title.style.display = "none";
    })
}

const infoOpenContent = (index = 0) => {
    infoBlock.style = `background-image: url('../media/images/background/the-withcer-screenshot-${index + 1}.webp');`;
    infoButtons[index].classList.add("info__active");
    infoContentDesc[index].style.display = "block";
}

const autoOpenContent = () => {
    index++;
    if (index > infoButtons.length - 1) {
        index = 0;
    }
    infoCloseContent();
    infoOpenContent(index);
}

const audioPlay = (audio) => {
    audio.volume = 0.3;
    audio.currentTime = 0;
    audio.play();
}

infoCloseContent();
infoOpenContent(index);
const infoOpenInterval = setInterval(autoOpenContent, 3000);

infoButtonsParent.onclick = (event) => {
    const selectUiAudio = document.querySelector("#selectUiAudio");
    if (event.target.classList.contains("info__button")) {
        clearInterval(infoOpenInterval);
        infoButtons.forEach((button, buttonIndex) => {
            if (event.target === button) {
                audioPlay(selectUiAudio);
                infoCloseContent();
                infoOpenContent(buttonIndex);
            }
        })
    }
}
