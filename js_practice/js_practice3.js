// файл html на github Okten/js_practice/js_practice.html




// 3 HOMETASK 1 создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

// let book = {
//     title :"World",
//     date : 1999,
//     text : 'big',
// }   

// let picture = {
//     color : 'red',
//     hero : 'Jack',
//     size : 15,
// }

// let toy = {
//     name : 'Bob',
//     weight : '50kg',
//     owner : 'Anna',
// }

// let Nick = {
//     car : false,
//     friends : 5,
//     parents : 'Jack and Marry',
// }

// let TV = {
//     type : 'smart',
//     price : 150,
//     wi_fi : true,
// }

// 3 HOMETASK 2 создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };

// let dog = {
//     color : 'brown',
//     age : {
//         type : 'puppy',
//         months : 2,}, 
//     owners : ['Beckie', 'John']
// };

// let bottle = {
//     volume : [1, 2],
//     inside : {
//         water : 'sparkling',
//         pepsi : 'sweet'},
//     name : 'Morsh'
// };

// let toy = {
//     who : {
//         first : 'Bob',
//         second : 'Ron'},
//     weight : '50kg',
//     owner : ['Anna', 'Nick']
// };

// let Nick = {
//         car : ['BMW', 'Toyota'],
//         friends : 5,
//         parents : {
//             dad : 'Jack',
//             mom : 'Marry',}
// }

// let TV = {
//         type : ['smart', 'functional'],
//         price : {
//             small : 150,
//             large : 250},
//         wi_fi : true,
// } 

//     // 3 HOMETASK 3 При помощи for in вывести все ключи всех объектов из задания 1 и 2

// for (let el in dog) {
//     console.log(el)
// }

// for (let el in bottle) {
//     console.log(el)
// }

// for (let el in toy) {
//     console.log(el)
// }

// for (let el in Nick) {
//     console.log(el)
// }

// for (let el in TV) {
//     console.log(el)
// }

// for (let el in picture) {
//     console.log(el)
// }

// for (let el in book) {
//     console.log(el)
// }


// 3 HOMETASK 4 При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

// console.log(Object.keys(dog))
// console.log(Object.keys(book))
// console.log(Object.keys(picture))
// console.log(Object.keys(bottle))
// console.log(Object.keys(TV))
// console.log(Object.keys(toy))
// console.log(Object.keys(Nick))





// 3 HOMETASK 5 Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)

// let cars = [{model : 'BMW', year : 1999, power : 100, color : 'red'}, 
// {model : 'Toyota', year : 2002, power : 145, color : 'yellow', driver : {name : 'Jack', age : 25, gender : 'm', exp : '45 years'}}, 
// {model : 'Merc', year : 1766, power : 350, color : 'yellow'},
// {model : 'Reno', year : 2019, power : 340, color : 'blue'},
// {model : 'Kia', year : 2018, power : 400, color : 'black'},
// {model : 'Fiat', year : 2017, power : 380, color : 'silver'},
// {model : 'Ford', year : 2016, power : 345, color : 'brown'},
// {model : 'Mitsubishi', year : 2015, power : 410, color : 'orange'},
// {model : 'Audi', year : 2013, power : 455, color : 'dark-red'},
// {model : 'Deiwoo', year : 2012, power : 89, color : 'purple'} ];

// console.log(cars)

// 3 HOMETASK 6 Создать массив объектов cities и заполнить его объектами с полями название, 
// популяция, страна, регион. (Значаения полей могу быть выдуманными)

// let cities = [{name: "London", population: 100000, country: "UK", region: "Europe"},
// {name: "Kyiv", population: 50000, country: "Ukraine", region: "Europe"},
// {name: "Washington", population: 200000, country: "America", region: "USA"},
// {name: "Berlin", population: 30000, country: "Germany", region: "Europe"}]

// console.log(cities)


// 3 HOMETASK 7 Создать массив объектов cars и заполнить его машинами с полями модель, год 
// выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.


// let cars1 = [{model : 'Toyota', year : 2002, power : 145, color : 'yellow', driver : {name : 'Jack', age : 25, gender : 'm', exp : '5 years'}},
// {model : 'Citroen', year : 1987, power : 200, color : 'blue', driver : {name : 'Ben', age : 30, gender : 'm', exp : '7 years'}},
// {model : 'Audi', year : 2010, power : 210, color : 'silver', driver : {name : 'Ann', age : 35, gender : 'f', exp : '3 years'}},
// {model : 'Ford', year : 2012, power : 225, color : 'black', driver : {name : 'Helga', age : 22, gender : 'f', exp : '2 years'}},
// {model : 'Fiat', year : 2011, power : 250, color : 'brown', driver : {name : 'Emma', age : 20, gender : 'm', exp : '4 years'}}]

// console.log(cars1)


// 3 HOMETASK 8 проитерировать каждый массив из задания 5,6,7 при помощи while.

// let a = 0;
// while (a < cars.length) {
//     console.log(cars[a]);
//     a++;
// }

// while (a < cities.length) {
//     console.log(cities[a]);
//     a++;
// }

// while (a < cars1.length) {
//     console.log(cars1[a]);
//     a++;
// }

    // 3 HOMETASK 9   проитерировать каждый массив из задания 5,6,7 при помощи for .

// for (let a = 0; a < cars.length; a++) {
//     console.log(cars[a]);
// };

// for (let b = 0; b < cities.length; b++) {
//     console.log(cities[b]);
// };

// for (let c = 0; c < cars1.length; c++) {
//     console.log(cars1[c]);
// };


    // 3 HOMETASK 10   проитерировать каждый массив из задания 5,6,7 при помощи  for of.

// for (let a of cars) {
//     console.log(a);
// };

// for (let b of cities) {
//     console.log(b);
// };

// for (let c of cars1) {
//     console.log(c);
// };


        // 3 HOMETASK 11  взять объекты из задания 1 и превратить каждый в json.

// let book = {
//     title :"World",
//     date : 1999,
//     text : 'big',
// }   
                    
// let picture = {
//     color : 'red',
//     hero : 'Jack',
//     size : 15,
// }            
            
// let toy = {
//     name : 'Bob',
//     weight : '50kg',
//     owner : 'Anna',
// }
            
// let Nick = {
//     car : false,
//     friends : 5,
//     parents : 'Jack and Marry',
// }
            
// let TV = {
//     type : 'smart',
//     price : 150,
//     wi_fi : true,
// }

// let book1 = JSON.stringify(book)
// let picture1 = JSON.stringify(picture)
// let toy1 = JSON.stringify(toy)
// let nick1 = JSON.stringify(Nick)
// let tv1  = JSON.stringify(TV)


    // 3 HOMETASK 12 взять json из задания 11 и превратить их обратно в объекты.

// book1 = JSON.parse(book1)
// console.log(book1)
// picture1 = JSON.parse(picture1)
// console.log(picture1)
// toy1 = JSON.parse(toy1)
// console.log(toy1)
// nick1 = JSON.parse(nick1)
// console.log(nick1)
// tv1 = JSON.parse(tv1)
// console.log(tv1)


    // 3 HOMETASK 13 взять массив из задания 5,в цикле перебрать его объекты превратив их в json .

// let cars = [{model : 'BMW', year : 1999, power : 100, color : 'red'}, 
// {model : 'Toyota', year : 2002, power : 145, color : 'yellow', driver : {name : 'Jack', age : 25, gender : 'm', exp : '45 years'}}, 
// {model : 'Merc', year : 1766, power : 350, color : 'yellow'},
// {model : 'Reno', year : 2019, power : 340, color : 'blue'},
// {model : 'Kia', year : 2018, power : 400, color : 'black'},
// {model : 'Fiat', year : 2017, power : 380, color : 'silver'},
// {model : 'Ford', year : 2016, power : 345, color : 'brown'},
// {model : 'Mitsubishi', year : 2015, power : 410, color : 'orange'},
// {model : 'Audi', year : 2013, power : 455, color : 'dark-red'},
// {model : 'Deiwoo', year : 2012, power : 89, color : 'purple'} ];

// for (let a of cars) {
//     let b = JSON.stringify(a);
//     console.log(b)
// }


    // 3 HOMETASK 14 взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

// let cities = [{name: "London", population: 100000, country: "UK", region: "Europe"},
//     {name: "Kyiv", population: 50000, country: "Ukraine", region: "Europe"},
//     {name: "Washington", population: 200000, country: "America", region: "USA"},
//     {name: "Berlin", population: 30000, country: "Germany", region: "Europe"}]

// for (let a of cities) {
//     let b = JSON.stringify(a);
//     console.log(b);
// }


    // 3 HOMETASK 14 взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

// let cars1 = [{model : 'Toyota', year : 2002, power : 145, color : 'yellow', driver : {name : 'Jack', age : 25, gender : 'm', exp : '5 years'}},
// {model : 'Citroen', year : 1987, power : 200, color : 'blue', driver : {name : 'Ben', age : 30, gender : 'm', exp : '7 years'}},
// {model : 'Audi', year : 2010, power : 210, color : 'silver', driver : {name : 'Ann', age : 35, gender : 'f', exp : '3 years'}},
// {model : 'Ford', year : 2012, power : 225, color : 'black', driver : {name : 'Helga', age : 22, gender : 'f', exp : '2 years'}},
// {model : 'Fiat', year : 2011, power : 250, color : 'brown', driver : {name : 'Emma', age : 20, gender : 'm', exp : '4 years'}}]

// let new_cars1 = [];
// for (let a of cars1) {
//     let b = JSON.stringify(a);
//     new_cars1.push(b);
// };

// console.log(new_cars1);

    // 3 HOMETASK 15 Создать массив пользователей. У каждого пользователя обязательно должено 
    // быть поле skills которое является массивом. Проитерировать массив пользователей и в 
    // каждом пользователе проитерировать его массив skills

// let users = [{name: 'Bob', age: 25, skills: ['python', 'java']},
// {name: 'Emma', age: 20, skills: ['js', 'sql']},
// {name: 'Jack', age: 40, skills: ['c++', 'java']}];

// for (let user of users) {
//     for (let skill of user.skills){
//         console.log(skill);
//     };
// };


    // 3 HOMETASK 16 Создать массив пользователей. У каждого пользователя обязательно должено 
    // быть поле skills которое является массивом. Проитерировать массив пользователей и в 
    // каждом пользователе проитерировать его массив skills. Скопировать все skills всех 
    // пользователей в отедльный массив

// let users = [{name: 'Bob', age: 25, skills: ['python', 'java']},
//     {name: 'Emma', age: 20, skills: ['js', 'sql']},
//     {name: 'Jack', age: 40, skills: ['c++', 'java']}];

// let new_users = []
// for (let user of users) {
//     for (let skill of user.skills) {
//         new_users.push(skill)
//     }
// }

// console.log(new_users)


    // 3 HOMETASK 17  За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.

// let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, 
// {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, 
// {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, 
// {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, 
// {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];

// for(let user of users) {

//     for(let skill of user.skills) {
//         console.log(skill)
//     }
// }


        // 3 HOMETASK 18 З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
// }];


// let users_address = []

// for (let user of users) {
//     users_address.push(user.address)
// }
// console.log(users_address)

        // // За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок 
        // за допомоги document.createElement. Всі данні в одному блоці.

// let parent_div = document.createElement('div');
// document.body.appendChild(parent_div);

// for (let user of users){
//     let div = document.createElement('div');
//     parent_div.appendChild(div);
//     div.innerHTML = '<h1>' + user['name'] + '</h1>';
// }


    // // За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за 
    // допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

// let parent_div = document.createElement('div')
// document.body.appendChild(parent_div)

// for (let user of users){
//     let user_div = document.createElement('div')
//     parent_div.appendChild(user_div)

//     for (let key in user){

//         if (typeof user[key] == 'object') {
//             let address_div = document.createElement('div')
//             user_div.appendChild(address_div)

//             for (let address in user[key]){
//                 let address_piece_div = document.createElement('div')
//                 address_div.appendChild(address_piece_div)
//                 address_piece_div.innerText = address + ': ' + user[key][address]
//             }
//         } else {

//             let key_div = document.createElement('div')
//             user_div.appendChild(key_div)
//             key_div.innerText = key + ': ' + user[key]
//         }
//     }
// }


    // 3 HOMETASK 19 Дано 2 масиви з рівною кількістю об'єктів.
    // З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
    // Записати цей об'єкт в новий масив 
    // Частковий приклад реультату:
    // let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]

// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, 
// {id: 2, name: 'petya', age: 30, status: true}, 
// {id: 3, name: 'kolya', age: 29, status: true}, 
// {id: 4, name: 'olya', age: 28, status: false},];

// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, 
// {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, 
// {user_id: 2, country: 'Poland', city: 'Krakow'}, 
// {user_id: 4, country: 'USA', city: 'Miami'},];

// let usersWithCities = [];

// for (let user of usersWithId) {
//     for (let address of citiesWithId){
//         let a = {user, address}
//         // console.log(a)
//         usersWithCities.push(a)
//     }
// }
// console.log(usersWithCities)

// let user1 = usersWithId[0]
// let add1 = citiesWithId[0]

// console.log(user1)
// user1['adress'] = add1
// console.log(user1)