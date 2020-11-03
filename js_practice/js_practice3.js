// 3 HOMETASK 1 создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

//  let book = {
//     title = "World",
//     date = 1999,
//     text = 'big',
// }   

// let picture = {
//     color = 'red',
//     hero = 'Jack',
//     size = 15,
// }

// let toy = {
//     name = 'Bob',
//     weight = '50kg',
//     owner = 'Anna',
// }

// let Nick = {
//     car = false,
//     friends = 5,
//     parents = 'Jack and Marry',
// }

// let TV = {
//     type = 'smart',
//     price = 150,
//     wi_fi = true,
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

// 3 HOMETASK 4 При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

// console.log(Object.keys(dog))

// 3 HOMETASK 5 Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)

// let cars = [];
// cars[0] = {
//     model : 'BMW',
//     year : 1999,
//     power : 100,
//     color : 'red'
// }

// cars[1] = {
//     model : 'Toyota',
//     year : 2002,
//     power : 145,
//     color : 'yellow',
//     driver : {
//         name : 'Jack',
//         age : 25,
//         gender : 'm',
//         exp : '45 years'
//     }
// }

// let a = 0
// while (a < cars.length) {
//     console.log(a)
//     // console.log(cars[a])
//     a++
// }

// for (let a = 0; a < cars.length; a++) {
//     console.log(a)
//     console.log(cars[a])
// }

// for (let el of cars){
//     console.log(el)
//     console.log(cars.indexOf(el))
// }

/////
// let dog = {
//     color : 'brown',
//     age : {
//         type : 'puppy',
//         months : 2,}, 
//     owners : ['Beckie', 'John']
// };

// let a = JSON.stringify(dog)
// console.log(a)

// let dog1 = JSON.parse(a)

// console.log(dog1)

////



// За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.

// let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];

// // for(let user of users) {

// //     for(let key in user) {
// //         console.log(key + ': ' + user[key])
// //     }
// // }
// const my_var = 'skills'
// for (let user of users) {
//     // console.log(user.skills)
//     // console.log(user['skills'])
//     for (let skill of user[my_var]) {
//         console.log(skill.toUpperCase())
//     }

// }

// З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
    name: 'max',
    age: 30,
    status: true,
    address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
    name: 'max',
    age: 31,
    status: true,
    address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];


// let users_address = []

// for (let user of users) {
//     users_address.push(user.address)
// }
// console.log(users_address)

// // За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги 
// document.createElement. Всі данні в одному блоці.

// let parent_div = document.createElement('div');
// document.body.appendChild(parent_div);
// let div;
// for (let user of users){
//     div = document.createElement('div');
//     parent_div.appendChild(div);
//     div.innerHTML = '<h1>' + user['name'] + '</h1>';
// }


// // for (let user of users) {
// //     let div = document.createElement('div');
// //     document.body.appendChild(div);
// //     div.innerHTML = `<h1>${user.name}</h1>`

// // }

// // За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги
//  document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

let parent_div = document.createElement('div')
document.body.appendChild(parent_div)

for (let user of users){
    let user_div = document.createElement('div')
    parent_div.appendChild(user_div)

    for (let key in user){

        if (typeof user[key] == 'object') {
            let address_div = document.createElement('div')
            user_div.appendChild(address_div)

            for (let address in user[key]){
                let address_piece_div = document.createElement('div')
                address_div.appendChild(address_piece_div)
                address_piece_div.innerText = address + ': ' + user[key][address]
            }
        } else {

            let key_div = document.createElement('div')
            user_div.appendChild(key_div)
            key_div.innerText = key + ': ' + user[key]
        }

        

        
    }

}








// for (let user of users) {

//     let div_name = document.createElement('div');
//     document.body.appendChild(div_name);
//     div_name.innerHTML = `<h3> ${user.name}</h3>`

//     let div_age = document.createElement('div');
//     document.body.appendChild(div_age);
//     div_age.innerHTML = `<h3> ${user.age}</h3`

//     let div_status = document.createElement('div');
//     document.body.appendChild(div_status);
//     div_name.status = `<h3> ${user.status}</h3>`

//     let div_ = document.createElement('div');
//     document.body.appendChild(div_status);
//     div_name.status = `<h3> ${user.status}</h3>`


// }
