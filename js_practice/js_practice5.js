    //  5 HOMETASK 1
   
   // Створити функцію конструктор для об'єкту який описує теги
    // Властивості
    //  -назва тегу
    //  - опис його дій
    //  - масив з атрибутами (2-3 атрибути максимум)
    //  Кожен атрибут описати як окремий який буде містити
    //  -назву атрибуту
    //  -опис дії атрибуту
    //  інформацію брати з htmlbook.ru

    //  Таким чином описати теги
    //  -a
    //  -div
    //  -h1
    //  -span
    //  -input
    //  -form
    //  -option
    //  -select


// function Tag (titleOfTag, actionOfTag, attributes) {

//     this.title = titleOfTag;
//     this.action = actionOfTag;
//     this.attributes = attributes;
// }

// let a = new Tag ('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь.', [{title: 'accesskey', action: 'Активация ссылки с помощью комбинации клавиш.'}, 
// {title: 'coords', action: 'Устанавливает координаты активной области.'}]);

// console.log(a);


    // 5 HOMETASK 2  Створити класс  для об'єкту який описує теги

// class Tag {
//     constructor (titleOfTag = 'a', actionOfTag = 'Some action.', attributes = 'Some attributes.') {
//         this.title = titleOfTag;
//         this.action = actionOfTag;
//         this.attributes = attributes;

//     }
// }

// let div = new Tag ('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.', 
// [{title: 'align', action: 'Задает выравнивание содержимого тега <div>.'}, {title: 'title', action: 'Добавляет всплывающую подсказку к содержимому.'}]);

// console.log(div)



    // 5 HOMETASK 3
    // Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
    // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
    // -- info () - яка виводить всю інформацію про автомобіль
    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    // -- changeYear (newValue) - змінює рік випуску на значення newValue
    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// let car ={
//     model: 'audi',
//     producer: 'Some factory',
//     year: 2001,
//     maxSpeed: 250,
//     volume: 50,
//     drive: function(){
//         console.log(`We drive at ${this.maxSpeed} km per hour`)
//     },

//     info: function(){
//         console.log(this)
//     },
    
//     increaseMaxSpeed: function(newSpeed){
//         this.maxSpeed = this.maxSpeed + newSpeed;
//         console.log(this);
//     },

//     changeYear: function (newValue) {
//         this.year = newValue;
//         console.log(this);
//     },

//     addDriver: function(driver) {
//         this.driver = driver;
//         console.log(this);
//     },
// }
// car.drive();
// car.info();
// car.increaseMaxSpeed(100);
// car.changeYear(2010);
// car.addDriver({name: 'Anna', age: 44});


    // 5 HOMETASK 4
    // Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
    // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
    // -- info () - яка виводить всю інформацію про автомобіль
    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    // -- changeYear (newValue) - змінює рік випуску на значення newValue
    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// function Car (model, producer, year, maxSpeed, volume) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;

//     this.drive = function() {
//         console.log(`We drive at ${this.maxSpeed} km per hour`)
//     }

//     this.info = function() {
//         console.log(this);
//     };

//     this.increaseMaxSpeed = function(newSpeed) {
//         this.maxSpeed = this.maxSpeed + newSpeed;
//         console.log(this);
//     },

//     this.changeYear = function(newValue) {
//         this.year = newValue;
//         console.log(this)
//     },

//     this.addDriver = function(driver) {
//         this.driver = driver;
//         console.log(this);
//     }

// }

// let myCar = new Car ('Toyota', 'Some producer', 2002, 260, 35);
// myCar.drive();
// myCar.info();
// myCar.increaseMaxSpeed(100);
// myCar.changeYear(1999);
// myCar.addDriver({name: 'Jack', age: 55});


    // 5 HOMETASK 5
    // - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
    // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
    // -- info () - яка виводить всю інформацію про автомобіль
    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    // -- changeYear (newValue) - змінює рік випуску на значення newValue
    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// class Car {
//     constructor(model, producer, year, maxSpeed, volume) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//     }

//     drive() {
//         console.log(`We drive at ${this.maxSpeed} km per hour`);
//     }

//     info() {
//         console.log(this);
//     };

//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed = this.maxSpeed + newSpeed;
//         console.log(this);
//     };

//     changeYear (newValue) {
//         this.year = newValue;
//         console.log(this);
//     };

//     addDriver(driver) {
//         this.driver = driver;
//         console.log(this);
//     };

// };

// let myCar = new Car ('BMW', 'Germany', 2015, 200, 40 )
// myCar.drive()
// myCar.info()
// myCar.increaseMaxSpeed(50)
// myCar.changeYear(2020)
// myCar.addDriver({name: 'Nick', age: 30})



    // 5 HOMETASK 6
    // -створити класс попелюшка з полями ім'я, вік, розмір ноги
    // --Створити 10 попелюшок , покласти їх в масив
    // --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
    // -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     };
// };

// let listOfCinderellas = [];
// let girlsNames = ['Emma', 'Anna', 'Ella', 'Jo', 'Jade', 'Fay', 'Some', 'Jay', 'Jordi']
// let girlsAge = 20;
// let girlsFoot = 32;
// for (let i = 0; i < 10; i++){
//     let girl = new Cinderella (girlsNames[i], girlsAge + i, girlsFoot + i);
//     listOfCinderellas.push(girl);
// };
    
    
// class Prince {
//     constructor(name, age, foundShoeSize) {
//         this.name = name;
//         this.age = age;
//         this.foundShoeSize = foundShoeSize;
//     };
// };
    
// let prince = new Prince ('Jack', 33, 35);
    
// for (let outer of listOfCinderellas) {
//     if (outer['footSize'] == prince['foundShoeSize']){
//         console.log(`Found a couple: ${outer.name} and ${prince.name}`)
//     };  
// };
    
    
    
    // 5 HOMETASK 7 
    // --створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
    // --Створити 10 попелюшок , покласти їх в масив
    // --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
    // -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
        
// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     };
// };

// let listOfCinderellas = [];
// let girlsNames = ['Emma', 'Anna', 'Ella', 'Jo', 'Jade', 'Fay', 'Some', 'Jay', 'Jordi']
// let girlsAge = 20;
// let girlsFoot = 32;
// for (let i = 0; i < 10; i++){
//     let girl = new Cinderella (girlsNames[i], girlsAge + i, girlsFoot + i);
//     listOfCinderellas.push(girl);
// };
    
// class Prince {
//     constructor(name, age, foundShoeSize) {
//         this.name = name;
//         this.age = age;
//         this.foundShoeSize = foundShoeSize;
//     };
// };
    
// let prince = new Prince ('Jack', 33, 35);

// function findCinderella(arrayOfCinderellas) {

//     for (let outer of arrayOfCinderellas) {
//         if (outer['footSize'] == prince['foundShoeSize']){
//             console.log(`Found a couple: ${outer.name} and ${prince.name}`)
//         };  
//     };
// };

// findCinderella(listOfCinderellas);
    
     