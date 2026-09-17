// // Задача 1
// const regExp = /^\d+$/;

// const containsOnlyDigits = (str) => {
//     return regExp.test(str);
// }

// console.log(containsOnlyDigits("1232934823890274845"))
// console.log(containsOnlyDigits("a12's;'df'34a5"));

// // Задача 2
// setInterval(() => {
//     console.log("Прошла секунда");
// }, 1000);

// // Задача 3
// const count = () => {
//     let i = 1;
//     const interval = setInterval(() => {
//         if (i <= 10) {
//             console.log(i++);
//         } else {
//             clearInterval(interval);
//         }
//     }, 1000);
// }

// count();

// // Задача 4
// const block = document.querySelector(".block");

// block.onclick = () => {
//     block.classList.toggle("active");
// }

// // Задача 5
// const xhr = new XMLHttpRequest();
// xhr.open("GET", "any.json");
// xhr.setRequestHeader("Content-type", "application/json");
// xhr.send()

// xhr.onload = () => {
//     console.log(JSON.parse(xhr.response));
    
// }