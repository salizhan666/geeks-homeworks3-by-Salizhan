//MODAL
const modalOpenButton = document.querySelector("#btn-get");
const modalCloseButton = document.querySelector(".modal_close");
const modal = document.querySelector(".modal");
const modalInput = document.querySelector(".modal input");
const modalSubscribe = document.querySelector(".modal_subscribe");
const questUpdatedAudio = document.querySelector("#questUpdatedAudio");
const modalCheckbox = document.querySelector(".modal_checkbox_button");
const modalCheckboxError = document.querySelector(".modal_checkbox_error"); 

const audioPlay = (audio) => {
    audio.currentTime = 0;
    audio.volume = 0.5;
    audio.play();
}

const openModal = () => {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
} 

const closeModal = () => {
    modal.style.display = "none";
    document.body.style.overflow = "";
} 

const checkGmail = () => {
    const regEx = /^[a-zA-Z]{1,}\w{2,}@gmail\.com$/;

    if (regEx.test(modalInput.value)) {
        modalInput.style.border = "1px solid green";
    } else {
        modalInput.style.border = "1px solid red";
    }
}

const checkboxAppereace = () => {
    if (modalCheckbox.classList.contains("modal_active")) {
        modalCheckbox.style.border = "1px solid var(--orange)";
        modalCheckbox.innerHTML = "&times;";
        modalCheckboxError.innerHTML = "";
    } else {
        modalCheckbox.style.border = "1px solid red";
        modalCheckbox.innerHTML = "";
        modalCheckboxError.innerHTML = "Нужно Ваше согласие";
    }
}

const openModalScroll = (event) => {
    const userScroll = window.scrollY + window.innerHeight;
    const totalHeight = document.documentElement.scrollHeight;
    
    if (userScroll >= totalHeight - 1) {
        openModal();
        audioPlay(questUpdatedAudio);
        document.removeEventListener("scroll", openModalScroll);
    };
} 

document.addEventListener("scroll", openModalScroll);
setTimeout(openModal, 10000);

modalSubscribe.onclick = checkGmail;
modalOpenButton.onclick = openModal;
modalCloseButton.onclick = closeModal;
// modal.onclick = event => event.target === modal ? closeModal() : openModal();
modal.onclick = (event) => {
    if (event.target === modal) closeModal();
}

modalCheckbox.onclick = () => {
    modalCheckbox.classList.toggle("modal_active");
    checkboxAppereace();
}

