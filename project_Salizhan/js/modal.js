//MODAL
const modalOpenButton = document.querySelector("#btn-get");
const modalCloseButton = document.querySelector(".modal_close");
const modal = document.querySelector(".modal");

const openModal = () => {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
} 

const closeModal = () => {
    modal.style.display = "none";
    document.body.style.overflow = "";
} 

const openModalScroll = (event) => {
    const userScroll = window.scrollY + window.innerHeight;
    const totalHeight = document.documentElement.scrollHeight;
    
    if (userScroll >= totalHeight - 1) {
        openModal();
        document.removeEventListener("scroll", openModalScroll);
    };
} 

document.addEventListener("scroll", openModalScroll);
setTimeout(openModal, 10000);


modalOpenButton.onclick = openModal;
modalCloseButton.onclick = closeModal;
// modal.onclick = event => event.target === modal ? closeModal() : openModal();
modal.onclick = event => {
    if (event.target === modal) closeModal();
}


