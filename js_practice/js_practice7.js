// HTML file =>  js_practice/js_practice.html 
    

    
    // HOMETASK 1
    // Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при 
    // клике на кнопку исчезал элемент с id="text".


// let textEl = document.getElementById('text');
// textEl.style.backgroundColor = 'pink'

// let button = document.createElement('button')
// document.body.appendChild(button);
// button.innerText = "Press me"
// button.onclick = () => {
//     textEl.style.display = 'none'
// }

// ========================================================================================================================================

    // HOMETASK 2
    // Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let button1 = document.createElement('button');
// document.body.appendChild(button1);
// button1.innerText = 'Press here'

// button1.onclick = () => {
//     button1.style.display = 'none'
// }



// ========================================================================================================================================

    // HOMETASK 3
    // створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на 
    // кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та 
    // повідомити про це користувача

// let greeting = document.createElement('div');
// document.body.appendChild(greeting);
// greeting.innerText = 'Enter you age >>';

// let input = document.createElement('input');
// document.body.appendChild(input);
// input.style.backgroundColor = '#D4CCC5';

// let button = document.createElement('button');
// document.body.appendChild(button);
// button.innerText = 'OK';

// button.onclick = () => {
    
//     if (input.value >= 18) {
//         console.log('Welcome')
//     } else {
//         console.log('By by')
//     }
// }



// ========================================================================================================================================

    // HOMETASK 4
    // Создайте меню, которое раскрывается/сворачивается при клике

// let menu = document.getElementById('menu');
// let menuPoints = document.getElementById('menu-points');

// menu.onclick = () => {
//     if (menuPoints.style.maxHeight) {
//         menuPoints.style.maxHeight = null;

//     } else {
//         menuPoints.style.maxHeight = menuPoints.scrollHeight + 'px'
//     }

// };


// ========================================================================================================================================

    // HOMETASK 5
    // Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
    // Вывести список комментариев в документ, каждый в своем блоке.
    // Добавьте каждому комментарию по кнопке для сворачивания его body.

// let list = document.createElement('div')
// document.body.appendChild(list)

// let comments = [
//     {title : 'element1', body:'here is elemen 1'},
//     {title : 'element2', body:'here element2'},
//     {title : 'element3', body:'here is element3'},
//     {title : 'element4', body:'here is element 4'},
//     {title : 'element5', body:'here is element 5'}
// ];


// function draw () {
//     comments.forEach((element, index, array) => {
        
//         let divEl = document.createElement('div');
//         list.appendChild(divEl);
//         divEl.innerText = `title: ${element.title}, body: ${element.body}`
//         divEl.style.backgroundColor = 'pink'
//         divEl.style.margin = '20px'

//         let button = document.createElement('button');
//         divEl.appendChild(button);
//         button.innerText = 'Remove body'

//         button.onclick = () => {

//             comments.splice(index, 1)
//             console.log(comments)
//             list.innerHTML = '';
//             draw()

//         }

//     })

// }

// draw()

   

// ========================================================================================================================================

    // HOMETASK6
    // - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та 
    // виводиться на консоль інформація з цих 2х форм.
    // Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
    // Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.


// let button = document.createElement('button');
// document.body.appendChild(button);
// button.innerText = 'Press'

// let forms = document.getElementsByClassName('my-form')
// let inputs = document.getElementsByName('my-input')

// button.onclick = () => {
//     for (let element of inputs){
//         console.log(element.value)
//     }
// }



// ========================================================================================================================================

    // HOMETASK 7 
    // - Створити функцію, яка генерує таблицю.
    // Перший аргумент визначає кількість строк.
    // Другий параметр визначає кліькіть ячеєк в кожній строці.
    // Третій параметр визначає елемент в який потрібно таблицю додати.

// function drawTable (rows, cells, targetElement) {

//     const domEl = document.createElement(targetElement)
  
//     let table = document.createElement('table')
//     domEl.appendChild(table);
//     table.width = '100%';
//     table.height = '300px'
//     // table.style.border = '2px solid black'

//     for (let i = 0; i <= rows; i++) {
//         let row = table.insertRow(i);
//         // row.innerText = `row ${i}`
        
//         for (let j = 0; j <= cells; j++) {
//             let cell = row.insertCell(j)
//             cell.innerText = `cell ${j}`
//             cell.style.border = '2px solid black'
//             // cell.innerHTML = 'test'
//         }
//     }


//     document.body.appendChild(domEl)
// }


// drawTable(3, 4, 'div')



// ========================================================================================================================================
    // HOMETASK 8 
    // - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій 
    // вмиіст ячеєк.
    // При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
    // (Додатковачастина для завдання)

// let button = document.createElement('button');
// document.body.appendChild(button);
// button.innerText = 'Press here';
    
// let rows = document.getElementById('rows')
// let cells = document.getElementById('cells')
// let values = document.getElementById('values')
    
// button.onclick = () => {
    
//     let table = document.createElement('table')
//     document.body.appendChild(table)
//     table.style.border = '2px solid black'
     
//     for (let i = 0; i < rows.value; i++){
//         let row = document.createElement('tr')
//         table.appendChild(row);
    
//         for (let k = 0; k < cells.value; k++){
//             let cell = document.createElement('td')
//             row.appendChild(cell)
//             cell.style.border = '1px solid black'
//             cell.innerText = `${values.value}`
//         }
//     }
    
// }



// ========================================================================================================================================


    // HOMETASK 9
    // - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо 
    // нажатием на стрелочки.

// let images = [
//     {id: 1, imgLocation: "capuch.jpg"},
//     {id: 2, imgLocation: "capuch2.jpg"},
//     {id: 3, imgLocation: "coffee.jpg"},
// ]


// let move = 0

// let thisImage = document.createElement('img')
// thisImage.src = `${images[move]['imgLocation']}`;
// thisImage.style.width = '500px'
// thisImage.style.height = '500px'
// thisImage.style.display = 'block'
// document.body.appendChild(thisImage);



// let toLeft = document.createElement('button')
// toLeft.style.backgroundColor = 'white'

// document.body.appendChild(toLeft);
// let leftArr = document.createElement('img');
// leftArr.src = 'leftArr1.png'
// leftArr.style.width = '20px'
// toLeft.appendChild(leftArr);


// let toRight = document.createElement('button')
// toRight.style.backgroundColor = 'white'

// document.body.appendChild(toRight);
// let rightArr = document.createElement('img');
// rightArr.src = 'rightArr.png'
// rightArr.style.width = '20px'
// toRight.appendChild(rightArr);


// toRight.onclick = () => {

//     if (move < images.length -1) {
//         move++;
//         thisImage.src = `${images[move]['imgLocation']}`;
//     }
// }

// toLeft.onclick = () => {

//     if (move <= images.length -1 && move > 0) {
//         move--;
//         thisImage.src = `${images[move]['imgLocation']}`;
//     }

//     // щоб проходило далі по негативним індексам
//     // if (move <= 0) {
//     //     move--;
//     //     thisImage.src = `${images[images.length + move]['imgLocation']}`;
//     // }
// }


// ========================================================================================================================================
// TO DO:

    
    // HOMETASK 10
    // - Сворити масив не цензцрних слів.
    // Сворити інпут текстового типу.
    // Якщо людина вводить слово і воно міститься в масиві не цензурних слів
    // кинути алерт з попередженням.
    // Перевірку робити при натисканні на кнопку
        
    
// ======================================================================================================================================================= 
            
    // Сворити масив не цензцрних слів.
    // Сворити інпут текстового типу.
    // Потрібно перевіряти чи не містить ціле речення в собі погані слова.
    // Кинути алерт з попередженням у випадку якщо містить.
    // Перевірку робити при натисканні на кнопку



    // -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
    // При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

    // -- взять массив пользователей
    // let usersWithAddress = [
    //                 {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    //                 {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    //                 {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    //                 {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    //                 {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    //                 {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    //                 {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    //                 {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    //                 {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    //                 {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    //                 {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
    //             ];
    // Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
    // 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
    // 2й - оставляет старше 29 лет включительно
    // 3й - оставляет тех у кого город киев
    // Данные выводить в документ



    // *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
    // при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
    // НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
    // Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне


    // *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

            
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
     








































        // let table = document.getElementById('table')
    // let row1 = table.insertRow(0)
    // let row2 = table.insertRow(1)
    // row1.innerText = 'row1'
    // row2.innerText = 'row2'
    // // row1.style.borderBottom = '4px solid black'
    // let cell1 = row1.insertCell(0)
    // cell1.innerText = 'cell1'
    // let cell2 = row1.insertCell(1)
    // let cell3 = row1.insertCell(2)
    // cell1.style.width = '30%'
    // cell2.style.width = '30%'
    // cell3.style.width = '30%'
    