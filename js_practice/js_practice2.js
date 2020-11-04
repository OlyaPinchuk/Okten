// файл html на github Okten/js_practice/js_practice.html

   
   
   
   
   // 2 HOMETASK 1
    // --створити масив та вивести його в консоль:
    // - з 5 числових значень
    // - з 5 стічкових значень
    // - з 5 значень стрічкового, числового та булевого типу

// let m = [4, 6, 7, 98, 34]
// let m1 = ['Mike', 'Nike', 'Emma', 'Fred', 'me']
// let m2 = [34, 'Paul', false, true, 'USA']

    // 2 HOMETASK 2 -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let m = [];
// m[0] = 'Olya';
// m[1] = 12;
// m[2] = 'Hi';
// m[3] = true;
// m[4] = false;
// m[5] = 'Luis';
// console.log(m);

    // 2 HOMETASK 3 -- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let a = 0; a < 10; a++) {
//     document.write('<div>Hi you!</div>')
// }

    // 2 HOMETASK 4 -- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let a = 0; a < 10; a++) {
//     document.write(`<div>Hi you! ${a} </div>`)
// }

    // 2 HOMETASK 5 -- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let a = 0;
// while (a < 20) {
//     document.write('<h1>Hi guys!</h1>')
//     a++
// }

    // 2 HOMETASK 6 - - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let a = 0;
// while (a < 20) {
//     document.write(`<h1>Welcome ${a} </h1>`)
//     a++
// }

    // 2 HOMETASK 7 -- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let a = [3, 56, 76, 12, 23, 58, 97, 34, 67, 88];
// for (let i of a) {
//     console.log(i)
// }

    // 2 HOMETASK 8 - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let m = ['Paul', 'Anna', 'Jack', 'Mike', 'Emma', 'Ella', 'David', 'Nike', 'Addidas', 'Fake']
// for (let i of m){
//     console.log(i)
// }

    // 2 HOMETASK 9 -- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let m = [5, 9, false, 'Emma', 'Ron', 12, true, [1, 2, 3], 10, 111];
// for (let el of m) {
//     console.log(el)
// }

    // 2 HOMETASK 10 --Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let m = [5, 9, false, 'Emma', 'Ron', 12, true, [1, 2, 3], 10, true];
// for (let el of m) {
//     if (typeof el == 'boolean') {
//         console.log(el)
//     } 
// }

    // 2 HOMETASK 11 -- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let m = [5, 9, false, 'Emma', 'Ron', 12, true, [1, 2, 3], 10, true];
// for (let el of m) {
//     if (typeof el == 'number') {
//         console.log(el)
//     } 
// }

    // 2 HOMETASK 11 -- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let m = [5, 9, false, 'Emma', 'Ron', 12, true, [1, 2, 3], 10, true];
// for (let el of m) {
//     if (typeof el == 'string') {
//         console.log(el)
//     } 
// }

    // 2 HOMETASK 12 -- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let m = [];
// m[0] = 123;
// m[1] = 45;
// m[2] = 'USA';
// m[3] = 'UK';
// m[4] = true;
// m[5] = '34';
// m[6] = 678;
// m[7] = 'Mike';
// m[8] = false;
// m[9] = 999;

// for (let el of m) {
//     console.log(el);
// }

    // 2 HOMETASK 13n -- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let a = 0; a < 10; a++) {
//     console.log(a);
//     document.write(a);
// }

    // Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

// let m = ['a', 'b', 'c']
// for (let a = 1; a <= 3; a++) {
//     m.push(a)

// }
// console.log(m)

    // 2 HOMETASK 14 Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let a = 0; a < 100; a++) {
//         console.log(a);
//         document.write(a);
//     }

    // 2 HOMETASK 15  Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

 // for (let a = 0; a < 100; a = a + 2) {
//         console.log(a);
//         document.write(a);
//     }   

    // 2 HOMETASK 16 Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let a = 0; a < 100; a++){
//     if (a % 2 == 0) {
//         console.log(a);
//         document.write(a);
//     }
// }

    // 2 HOMETASK 17 Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let a = 0; a < 100; a++){
//     if (a % 2 != 0){
//         console.log(a);
//         document.write(a);
//     }
// }

    // 2 HOMETASK 18 Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

// for (let min = 0; min < 3; min++) {
//     for (let sec = 1; sec <= 60; sec++){
//         console.log(min, sec)
//     }
// }    

    // 2 HOMETASK 19 Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

// for (let hour = 0; hour < 24; hour++) {
//     if (hour > 2) {
//         break;
//     }
//     for (let min = 0; min <= 59; min++){
//         if (hour == 2 && min == 20) {
//             console.log(hour, min);
//             break;
//         }
//         for (let sec = 0; sec <= 59; sec++)
//         console.log(hour, min, sec);
//     }
// }