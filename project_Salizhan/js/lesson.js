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

//TAB SLIDER 
const tabContentBlocks = document.querySelectorAll(".tab_content_block");
const tabButtons = document.querySelectorAll(".tab_content_item");
const tabButtonsParent = document.querySelector(".tab_content_items");
let index = 0;
let autoTabsInteval = null;

const hideTabContent = () => {
    tabContentBlocks.forEach(block => {
        block.style.display = "none";
    })
    tabButtons.forEach(button => {
        button.classList.remove("active");
    })
}

const showTabContent = (index = 0) => {
    tabContentBlocks[index].style.display = "block";
    tabButtons[index].classList.add("active");
}

const autoShowContent = (i) => { 
    autoTabsInteval = setInterval(() => {
        i++;
        if (i > tabButtons.length - 1) {
            i = 0;
        }
        hideTabContent();
        showTabContent(i);
    }, 3000);
}

hideTabContent();
showTabContent();

tabButtonsParent.onclick = event => {
    if (event.target.classList.contains("tab_content_item")) {
        clearInterval(autoTabsInteval);
        tabButtons.forEach((tab, tabIndex) => {
            if (event.target === tab) {
                hideTabContent();
                showTabContent(tabIndex);
            }
        });
    }
}

autoShowContent(index);


