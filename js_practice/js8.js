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

// ===============================================================================================================================
// TO DO:

    // HOMETASK 3
    // -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
    // Требование : хранить историю своих изменений (даже после перезагрузки страницы).
    // Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).



// let left = document.getElementById("left-button")
// let right = document.getElementById("right-button")
// let textArea = document.getElementById('text')
// let save = document.getElementById('save')

// save.onclick = () => {
//     localStorage.setItem(localStorage.length + 1, textArea.value)
// }

// left.onclick = () => {
//     let i;
//     for (const key in localStorage) {
//         if (localStorage.hasOwnProperty(key)){
//             if (localStorage.getItem(key) == textArea.value) {
//                 i = key
//             }
//         }
//     }

//     if (i === '1') {
//         left.style.backgroundColor = '#FBFBFB'
//         return

//     }

//     textArea.value = localStorage.getItem(i - 1)
    
// }

// right.onclick = () => {
//     let i;
//     for (const key in localStorage) {
//         if (localStorage.hasOwnProperty(key)){
//             if (localStorage.getItem(key) == textArea.value) {
//                 i = key
//             }
//         }
//     }

//     if (i === localStorage.length.toString()) {
//         right.style.backgroundColor = '#FBFBFB'
//         return
//     }

//     textArea.value = localStorage.getItem(+i + 1)

// }



    // HOMETASK 4

  // - Реализуйте записную книгу, хранящую данные в локальном хранилище.
    // Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
    // Данные вводить через соответсвующую форму.
    // --Каждому контакту добавить кнопку для удаления контакта.
    // --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все 
    // необходимые инпуты для редактирования, которые уже заполнены данными объекта

// const usersArray = 'Array_of_users'
// let tempUser = {}


// const form = document.forms.myform;

// form.submit.onclick = (ev) => {
//    
//     let person = { ... tempUser}
//     tempUser = {}
//     for (let i = 0; i < form.children.length; i++) {
//     const formElement = form.children[i]
//         if (formElement.id !== 'submit') {
//             person[formElement.id] = formElement.value
//         }
//     }

//     if (!person.id){
//     person.id = new Date().getTime()
//     }
//     console.log(person)
//     save(person)
// }

// getData()

// function save (user) {
//     if (localStorage.hasOwnProperty(usersArray)){
//         const array = JSON.parse(localStorage.getItem(usersArray))
//         const find = array.find(value => value.id === user.id)
//         if(find) {

//             const filter = array.filter(value => value.id !== user.id)
//             filter.push(user)
//             localStorage.setItem(usersArray,JSON.stringify(filter))

//         } else {
//             array.push(user)
//             localStorage.setItem(usersArray, JSON.stringify(array))
//         }

//     } else {
//         localStorage.setItem(usersArray, JSON.stringify([user]))
//     }
// }

// function getData() {
//     if (localStorage.hasOwnProperty(usersArray)){
//         const arr = JSON.parse(localStorage.getItem(usersArray))
//         for (const user of arr) {
//             console.log(user)
//             document.body.appendChild(createDiv(user))
//         }
//     }
// }


// function createDiv(user) {

//     const main = document.createElement('div')
//     let flag = true
//     for (const key in user) {
//         if (flag) {
//             const h3 = document.createElement('h3')
//             h3.innerText = `${key} : ${user[key]}`
//             main.appendChild(h3)
//             flag = false     

//         }else {
            
//             const p = document.createElement('p')
//             p.innerText = `${key} : ${user[key]}`
//             main.appendChild(p)


//         }
//     }

//     main.style = 'width: 300px; border: red 1px solid'
//     const edit = document.createElement('button')
//     const delte = document.createElement('button')

//     edit.innerText = 'Edit'
//     delte.innerText = 'Delete'

//     edit.onclick = function () {
//         userEdit(user.id)
        
//     }

//     delte.onclick = function () {
//         userDelete(user.id)
//     }



//     main.appendChild(edit)
//     main.appendChild(delte)



//     return main
// }

// function userDelete (id) {
//     const parsed = JSON.parse(localStorage.getItem(usersArray))
//     const filterred = parsed.filter(user => user.id !== id)
//     localStorage.setItem(usersArray, JSON.stringify(filterred))
//     location.reload()
// }

// function userEdit (id) {
//     const parsed = JSON.parse(localStorage.getItem(usersArray))
//     const foundUser = parsed.find(user => user.id === id)
//     for (let i = 0; i < form.children.length; i++) {
//         const formElement = form.children[i]
//         if (formElement.id !== 'submit'){
//             for (const key in foundUser){
//                 if (formElement.id === key){
//                     formElement.value = foundUser[key]
//                 }
//             }
//         }
//     }
//     tempUser = foundUser

// }




    // HOMETASK 5 Розклад дня




    // Promises

// let chance = 0.1

// function myDay(message) {
//     return new Promise((resolve, reject) => {
//         setTimeout( () => {
//             Math.random() > chance
//             ? resolve (message)
//             : reject ('Failed to wake up')
//         }, Math.random() * 4000)
//     })
// }

// function breakfast(food) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() > chance
//             ? resolve (food)
//             : reject ('No food')
//         }, Math.random() * 4000)
//     })
// }


// function makeUP(text) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() > chance
//             ? resolve (text)
//             : reject ('No time')
//         }, Math.random() * 4000)
//     })
// }

// function hair(style) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() > chance
//             ? resolve (style)
//             : reject ('No hairstyle today')
//         }, Math.random() * 4000)
//     })
// }





// myDay('Alarm rings')
//     .then((result) => {
//         console.log(result)
//         return breakfast('Drinking coffee')
//     })
//     .then((result) => {
//         console.log(result)
//         return makeUP('Doing make up')
//     })
//     .then((result) => {
//         console.log(result)
//         return hair('Making a ponytail')
//     })
//     .then((result) => {
//         console.log(result)
//     })
//     .catch(error => {
//         console.log('You have got an error', error)
//     })




        // Callbacks

// let chance = 0.1

// function wakeUp(cb) {
//     console.log('Time to wake up')
    
//     setTimeout(() => {
//         Math.random() > chance
//             ? cb(null, 'Alarm rings')
//             : cb('Did not get up')
//     }, 2000)
// }

// function breakfast(check, cb) {
//    console.log('Time to eat')

//    setTimeout(() =>{
//        check
//        ? cb (null, 'Today you have a sandwitch')
//        : cb ("Don't have time to eat")
//    }, 2000)
// }


// function makeUP(check, cb) {
//     console.log('Time to start getting ready')

//     setTimeout(() => {
//         check
//         ? cb (null, 'Put make up')
//         : cb ('No time for make up today, put it at work')
//     }, 2000)
// }

// function hair(check, cb) {
//     console.log('Time to prep your hair')

//     setTimeout(() => {
//         check
//         ? cb (null, 'Today I curl my hair')
//         : cb ('No hair styling today')
//     }, 2000)

// }
   

// wakeUp((error, data) => {
//     if (error) {
//         console.log('error:', error)
//     } else {
//         console.log(data)
//         breakfast(true, (error, data) => {
//             if (error) {
//                 console.log('error:', error)
//             } else {
//                 console.log(data)
//                 makeUP(true, (error, data) => {
//                     if (error) {
//                         console.log('error:', error)
//                     } else {
//                         console.log(data)
//                         hair(true, (error, data) => {
//                             if (error) {
//                             console.log('error:', error)
//                             } else {
//                                 console.log(data)
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })


       

    // Async await

//console.log('Hooo')

// let chance = 0.1
//
// function myDay(message) {
//     return new Promise((resolve, reject) => {
//         setTimeout( () => {
//             Math.random() > chance
//                 ? resolve (message)
//                 : reject ('Failed to wake up')
//             }, Math.random() * 4000)
//         })
// }
//
// function breakfast(food) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() > chance
//             ? resolve (food)
//             : reject ('No food')
//         }, Math.random() * 4000)
//     })
// }
//
// function makeUP(text) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() > chance
//             ? resolve (text)
//             : reject ('No time')
//         }, Math.random() * 4000)
//     })
// }
//
// function hair(style) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() > chance
//             ? resolve (style)
//             : reject ('No hairstyle today')
//         }, Math.random() * 4000)
//     })
// }
//
//
// async function day() {
//     try {
//     const morning = await myDay('Start the day')
//     console.log(morning)
//
//     const food = await breakfast('I eat a salad')
//     console.log(food)
//
//     const face = await makeUP('Do nice make up')
//     console.log(face)
//
//     const head = await hair('I have curles')
//     console.log(head)
//
//     } catch (e) {
//         console.log(e)
//     }
// }
//
// day()



    // Друкарська машинка


// let paragraph = document.getElementById('text')

// let i = 0
// let text = 'Hello owu'
// let speed = 100

// function typing() {
    
//     if (i < text.length) {
      
//         paragraph.innerHTML += text.charAt(i)
//         i++
//         setTimeout(typing, speed)
//     }
// }

// typing()



