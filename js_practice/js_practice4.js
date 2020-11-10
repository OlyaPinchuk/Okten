    // файл html на github Okten/js_practice/js_practice.html


    // 4 HOMETASK 1  створити функцію яка виводить масив

// let m = []
// function my_func() {
//     console.log(m);
// }

    // 4 HOMETASK 2 створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.


// function my_func(m1) {
//     console.log(m1);
// }

// function my_func2(m) {
//     for (let a = 0; a < 20; a++){
//         m.push(Math.round(Math.random()*20));
//     }
//     my_func(m);
// }
// let my_arr = [];
// my_func2(my_arr);

    // 4 HOMETASK 3  створити функцію яка приймає три числа та виводить та повертає найменьше.

// function numbers(one, two, three) {
//     if (one < two && one < three){
//         console.log(one)
//         return one
//     } else if (two < one && two < three){
//         console.log(two)
//         return two
//     } else {
//         console.log(three)
//         return three
//     }
// }

// numbers(3567, 576, 600)

    // 4 HOMETASK 4  створити функцію яка приймає три числа та виводить та повертає найбільше


// function numbers1(one, two, three) {
//     if (one > two && one > three){
//         console.log(one)
//         return one
//     } else if (two > one && two > three){
//         console.log(two)
//         return two
//     } else {
//         console.log(three)
//         return three
//     }
// }

// numbers1(12, 576, 8000)  


    // 4 HOMETASK 5  створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

// function numbers() {
//     let max = arguments[0]
//     let min = arguments[0]
//     for (let current of arguments){
//         if ( current > max) {
//             max = current;
//         }

//         if ( current < min) {
//             min = current;
//         }
//     }


//      console.log('max: ' + max)
//      return min;
// }

// let min_value = numbers(3,7,1,10,5,2)
// console.log('min: ' + min_value)

// let min_value2 = numbers(20, 30, 107, 384, 15, 78)
// console.log('min: ' + min_value2)




// NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW
// =======================================================================================================================================================================
    // 4 HOMETASK 6 - створити функцію яка виводить масив
// let my_arr = []
// function my_func3(array) {
//     console.log(array)

// }

// my_func3(my_arr)


    // 4 HOMETASK 7  створити функцію яка повертає найбільше число з масиву

// let my_arr = [3, 7,10, 44, 345, 2];
// function my_func3(array) {
//     max = array[0];
//     for (let current of array){
//         if (current > max) {
//             max = current;
//         };
//     };
//     return max;
// };

// console.log(my_func3(my_arr));

    // 4 HOMETASK 8  створити функцію яка повертає найменьше число з масиву

// let my_arr = [3, 7, 10, 44, 345, 2];

// function my_func4(array) {
//     min = array[0];
//     for (let current of array) {
//         if (current < min){
//             min = current;
//         };
//     };
//     return min;
// };

// console.log(my_func4(my_arr));

     // 4 HOMETASK 9 створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.


// let my_arr = [3, 7, 10, 44, 345, 2];

// function my_func5(array) {
//     let previous = array[0];
//     let next = array[1];
//     let sum = previous + next;

//     for (a = 2; a < array.length; a++){
        
//         previous = sum;
//         next = array[a];
//         sum = previous + next;

//     }
//     console.log(sum);
//     return array;
// }

// console.log(my_func5(my_arr))


    // оптимізовано:
// let my_arr = [3, 7, 10, 44, 345, 2];

// function my_func5(array) {
//     let sum = 0

//     for (a = 0; a < array.length; a++){
        
//         sum = sum + array[a];

//     }
//     console.log(sum);
//     return array;
// }

// console.log(my_func5(my_arr))



    // 4 HOMETASK 10 створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.


// let my_arr = [3, 7, 10, 44, 345, 2];

// function my_func6 (array) {
    
//     let previous = array[0];
//     let next = array[1];
//     let sum = previous + next;
    
//     for (a = 2; a < array.length; a++){
//         previous = sum;
//         next = array[a];
//         sum = previous + next;
//     }

//     let divide = sum / array.length;
//     console.log(divide);
// }

// my_func6(my_arr);



    // оптимізовано:
// let my_arr = [3, 7, 10, 44, 345, 2];

// function my_func5(array) {
//     let sum = 0

//     for (a = 0; a < array.length; a++){
        
//         sum = sum + array[a];

//     }
//     console.log(sum/array.length);
// }

// my_func5(my_arr);



    // 4 HOMETASK 11 Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

// let my_arr = ['yes', 23, 'no', false, true, [1,2,4], {a: 12, b: 77}, {user: 'me', age: 22. car: false}];

// function my_func7 (array) {
//     console.log(array.length);

// };

// my_func7(my_arr)

    // 4 HOMETASK 12 Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

    // let my_arr = [{a: 12, b: 77}, {user: 'me', age: 22, car: false}, {friend: 'Ann', age: 34}];


    // function my_func8 (array) {
    //     let sum = 0
    //     for (let object of array) {
    //         for (let field in object) {
    //             sum++
    //         }
    //     }
    //     console.log(sum)
    
    // }
    
    // my_func8(my_arr)



    // Унікальне число. при умові, що в масиві лише одне унікальне

// function uniqueNumber(array) {
    
//     for (let outer of array){
//         let counter =0;
    
//         for (let inner of array){
//             if (outer == inner){
//             counter++;
//             }
//         }   

//         if (counter == 1) {
//             unique = outer;
//             return outer;;
//         }
//     }
// }  
    
// console.log(uniqueNumber([1, 2, 3, 6, 1, 2, 3]));



    // якщо в масиві декілька унікальних

// function uniqueNumber(array) {
//     let unique = [];
//     for (let outer of array){
//         let counter = 0;
    
//         for (let inner of array){
//             if (outer == inner){
//             counter++;
//             }
//         }

//         if (counter == 1) {
//             unique.push(outer);
//         }
//     }
//     return unique;
// }
// console.log(uniqueNumber([1, 2, 3, 4, 1, 2, 3, 5, 8, 10, 55]));


    // 4 HOMETASK 13 створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
    //   Приклад
    //   [1,2,3,4]
    //   [2,3,4,5]
    //   результат
    //   [3,5,7,9]


// function arrays_sum (array1, array2) {
//     let sum = [];
//     for (let i = 0; i < array1.length && i < array2.length; i++) {
//         sum.push(array1[i] + array2[i]);
//     };
//     return sum;
// };

// console.log(arrays_sum([1, 2, 3], [4, 5, 7]));


    // якщо різні за довжиною масиви

// function arrays_sum (array1, array2) {
//     let sum = [];
//     for (let i = 0; i < array1.length || i < array2.length; i++) {
            
//         if (i >= array1.length) {
//             sum.push(array2[i]);
//         } else if (i >= array2.length) {
//             sum.push(array1[i]);
//         } else {
//             sum.push(array1[i] + array2[i]);
//         }; 
//     };
//     return sum;
// };

// console.log(arrays_sum([1, 1, 5, 4], [2, 4, 3, 8, 4, 5, 3, 2, 1]));



    // 4 HOMETASK 14 приймає масив та число "i", та міняє місцями об`єкт який знаходиться в 
    // індексі "i" на "i+1"


// function swap (array, index) {

//     if (index < -1*array.length || index >= array.length - 1 || index == -1) {
//         return (`Sorry, no number to swap with. Enter an index number from ${-1*array.length} to ${array.length-2}, but for -1`)  
//     }

//     if (-1*array.length - 1 < index && index < -1) {
//         // for negative indexes
//         let a = array[array.length +index +1]
//         array[array.length+index+1] = array[array.length+index]
//         array[array.length+index] = a
//     } else {
//         // for positive indexes
//         let a = array[index+1]
//         array[index+1] = array[index]
//         array[index] = a
//     }

//     return array;

// }
// console.log([1, 2, 3, 5, 10, 67, 4])
// console.log(swap([1, 2, 3, 5, 10, 67, 4], -3))


    // 4 HOMETASK 15 створити функцію яка буде переносити елементи з значенням 0 у кінець 
    // маисву. Зберігаючи при цьому порядок не нульових значень.
    // Двожина масиву від 2 до 100
    // Приклад
    // [1,0,6,0,3] => [1,6,3,0,0]
    // [0,1,2,3,4] => [1,2,3,4,0]
    // [0,0,1,0]   => [1,0,0,0]

// function move (array) {

//     for (let i = array.length-1; i >= 0; i--){
//         if (array[i] == 0){
//             array.push(array[i]);
//             array.splice(i, 1);
//         };
//     };

//     return array;
// };

// console.log(move([1, 0, 6, 0, 3, 9, 0, 11, 2, 3, 0, 9]));


    // 4 HOMETASK 16 Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"

// function add_text () {
//     let div = document.createElement('div');
//     document.body.appendChild(div);
//     div.innerText = 'Hello owu';
// }

// add_text()

    // 4 HOMETASK 17  Створити функцію яка : Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

