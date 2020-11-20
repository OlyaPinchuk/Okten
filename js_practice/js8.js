// HTML file =>  js_practice/js_practice.html 

// ==================================================================================/

// HOMETASK 1

// let textArea = document.getElementById("textarea");

// textArea.onchange = () => {
//   localStorage.setItem("userText", `${textArea.value}`);
// };

// document.addEventListener("DOMContentLoaded", (ev) => {
//   let user = localStorage.getItem("userText");
//   textArea.value = user;
//   console.log(user);
// });

// HOMETASK 2
// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.

// let myForm = document.getElementById("myForm");
// let textArea = document.getElementById("text");
// let input = document.getElementById("input");
// let checkbox = document.getElementById("checkbox");


// myForm.oninput = (ev) => {
    

//   if (ev.target.id !== "checkbox") {
//     localStorage.setItem(ev.target.id, ev.target.value);
//   }

//   if (ev.target.id === "checkbox") {
      
//     localStorage.setItem(ev.target.id, ev.target.checked)

//   }
// };



// document.addEventListener("DOMContentLoaded", () => {

//     for (let el of myForm){

//         if (el.id === "checkbox") {

//             let status = localStorage.getItem("checkbox");


//             if (status === "true") {
//                 el.checked = true;
//             } 
    
//         } else {

//             el.value = localStorage.getItem(el.id)

//         }
    
//     }
   

// });


