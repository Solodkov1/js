/* Задание 1
Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
*/
/*
function summakub(a, b) {
    console.log(a*a*a+b*b*b);
}
summakub(1, 2)
*/
/*
Задание 2
Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы 
за вычетом налогов равен значение"
*/
/*
function salary (money) {
    if (!isNaN(parseFloat(money)) && isFinite(money)) {
    money = money*0.87;
    console.log(`Размер заработной платы за вычетом налогов равен значение ${money} $`);
    }else {
    console.log(`некоректное значение`);
    }
}
let userMoney = Number(prompt(`Введите свою ЗП`));
salary(userMoney);
*/
/*
Задание 3
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
*/
/*
function max(a, b, c) {
    if (a > b && a > c) {
        console.log(`самое большое 1 число оно =${a}`)
    } else if (b > a && b > c) {
        console.log(`самое большое 2 число оно =${b}`)
    } else if (c > a && c > b){
        console.log(`самое большое 3 число оно =${c}`)
    }
}

let a = Number(prompt(`Введите 1 число`));
let b = Number(prompt(`Введите 2 число`));
let c = Number(prompt(`Введите 3 число`));

max (a, b, c);
*/

/*
Задание 4
Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций 
(каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль 
(sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции 
не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. 
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

*/

function summ(a, b) {
   let sum = a+b;
    console.log(sum);
}
function diff (a, b) {
    let diff;
    if (a > b) {
        diff = a-b;
    } else {
        diff = b-a
    }
    console.log(diff);
}
function mult(a, b) {
    let mult = a*b;
    console.log(mult);   
}
function divide(a, b) {
    let divide = a/b;
    console.log(divide);
}
let a = Number(prompt(`Введите 1 число`));
let b = Number(prompt(`Введите 2 число`));

summ (a, b);
diff(a, b);
mult(a, b);
divide(a, b);