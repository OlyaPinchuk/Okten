
// HOMETASK
    // - создать массив с 20 числами.
    // -- при помощи метода sort и колбека  отсортировать массив.
    // -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
    // -- при помощи filter получить числа кратные 3
    // -- при помощи filter получить числа кратные 10
    // -- перебрать (проитерировать) массив при помощи foreach()
    // -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше


// let numbers = [2, 6, 7, 99, 33, 5, 7, 8 , 55, 67, 98, 0, 3, 6, 7, 8, 60, 30, 100];

// -- при помощи метода sort и колбека  отсортировать массив.
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// let sort = numbers.sort((a, b) => {
//     // return a - b;
//     // return b - a;
// });

// // console.log(sort);


    // -- при помощи filter получить числа кратные 3
// let filter = numbers.filter((value, index, array) => {
//     if (!(value % 3)) {
//         return true;
//     };
// });

// console.log(filter);
// console.log(numbers);


    // -- при помощи filter получить числа кратные 10
// let filter = numbers.filter((value, index, array) => {
//     if (!(value % 10)) {
//         return true;
//     };
// });

// console.log(filter);


    // -- перебрать (проитерировать) массив при помощи foreach()
// let each = numbers.forEach((value, index, array) => {
//     console.log(value);
// });

    // -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

// let newArray = numbers.map((value, index, array) => {
//     return value * 3;
// });

// console.log(newArray);
// console.log(numbers);



// ============================================================================================================================================
    
    // - создать массив со словами на 15-20 элементов.
    // -- отсортировать его по алфавиту в восходящем порядке.
    // -- отсортировать его по алфавиту  в нисходящем порядке.
    // -- отфильтровать слова длиной менее 4х символов
    // -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со 
    // знаком "!" в конце

// let words = ['hi', 'you', 'how', 'are', 'things', 'at', 'your', 'place'];

    // -- отсортировать его по алфавиту в восходящем порядке.
// let sortedWords = words.sort()
// console.log(sortedWords)

    // -- отсортировать его по алфавиту  в нисходящем порядке.
// let sortedWords = words.sort((a, b) => {
//     if (a > b) {
//         return -1;
//     };

//     return 1;
// });

// console.log(sortedWords);


    // -- отфильтровать слова длиной менее 4х символов

// let filteredWords = words.filter((vlaue, index, array) => {
//     if (vlaue.length <= 4) {
//         return true;
//     };
// });

// console.log(filteredWords);
// console.log(words);


    // перебрать массив при помощи map() и получить новый массив в котором все значения будут со 
    // знаком "!" в конце

// let mapWords = words.map((value, index, array) => {
//     return value + '!';

// });

// console.log(mapWords);


// ===============================================================================================================================================
    // Все робити через функції масивів (foreach, map ...тд)
    // Дан масив :
    // let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
    // - відсортувати його за  віком (зростання , а потім окремо спадання)
    // - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
    // - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
    // - відсортувати його за індентифікатором


// let users = [ 
//     {name: 'vasya', age: 31, status: false}, 
//     {name: 'petya', age: 30, status: true}, 
//     {name: 'kolya', age: 29, status: true}, 
//     {name: 'olya', age: 28, status: false}, 
//     {name: 'max', age: 30, status: true}, 
//     {name: 'anya', age: 31, status: false}, 
//     {name: 'oleg', age: 28, status: false}, 
//     {name: 'andrey', age: 29, status: true}, 
//     {name: 'masha', age: 30, status: true}, 
//     {name: 'olya', age: 31, status: false}, 
//     {name: 'max', age: 31, status: true} ];


    // - відсортувати його за  віком (зростання , а потім окремо спадання)

// let sort = users.sort((a, b) => {
//     if (a.age > b.age) {
//         return 1;
//     };

//     return -1;
// });

// console.log(sort);


    // потім окремо спадання)

// let sort = users.sort((a, b) => {
//     if (a.age > b.age) {
//         return -1;
//     };
//     return 1;
// });

// console.log(sort);


    // - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)

// let JSONUsers = JSON.stringify(users);
// let users2 = JSON.parse(JSONUsers);

// let newUsers = [];
// let each = users2.forEach((user, index, array) => {
//     user.id = index+1;
//     newUsers.push(user)
// });

// let anotherUsers = users.map(function(user, index, array) {
//     let JSONUser = JSON.stringify(user);
//     let newUser = JSON.parse(JSONUser);
//     newUser.id = index + 1;
//     return newUser;
// })

// console.log(newUsers);
// console.log(anotherUsers);
// console.log(users);
    // - відсортувати його за індентифікатором

// let sortedNewUsers = newUsers.sort((a, b) => {
//     if (a.id > b.id) {
//         return -1
//     };
//     return 1
// });

// console.log(sortedNewUsers);



    // CLASS

//     let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, {producer:"mercedes",model: "e63",year 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
    // Відфільтрувати масив за наступними крітеріями :
    // - двигун більше 3х літрів
    // - двигун = 2л
    // - виробник мерс
    // - двигун більше 3х літрів + виробник мерседес
    // - двигун більше 3х літрів + виробник субару
    // - сили більше ніж 300
    // - сили більше ніж 300 + виробник субару
    // - мотор серіі ej
    // - сили більше ніж 300 + виробник субару + мотор серіі ej
    // - двигун меньше 3х літрів + виробник мерседес
    // - двигун більше 2л + сили більше 250
    // - сили більше 250  + виробник бмв

// let cars = [ 
//     {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, 
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, 
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, 
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, 
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, 
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, 
//     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, 
//     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, 
//     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, 
//     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, 
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, 
//     {producer:"mercedes",model: "e63", year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, 
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];

    // - двигун більше 3х літрів
// let filter = cars.filter((car, index, array) => {
//     if (car.volume > 3) {
//         return car;  // Here return true instead
//     }
// });

// console.log(filter)

    // - двигун = 2л
