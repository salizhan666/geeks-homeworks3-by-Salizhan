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
