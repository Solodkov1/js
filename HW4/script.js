/*
Урок 4. Циклы и массивы
Скрыть
Задание 1
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/
/*
for (let i = 0; i <= 10; i++) {  
 if (i === 0) {
    console.log(`${i} - это ноль`);
 }  else if (i%2 !== 0) {
    console.log(`${i} - нечётное число`);
 } else {
    console.log(`${i} - чётное число`);
 }
}
*/

/*
Задание 2
Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7]
*/
/*
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
arr.splice(3, 2);
console.log(arr);   
*/
/*
Задание 3
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3
*/
/*
const arr = [...Array(5)];
for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.trunc(Math.random() *10); 
}
console.log(arr); 
const add = arr => arr.reduce((a, b) => a + b, 0);
var sum = add(arr);
console.log(`сумма всех элементов массива = ${sum}`);

let min = arr[0];
for (i = 0; i <= arr.length; i++) {
if (min > arr[i]) {
    min = arr[i];
} 
}
console.log(`минимальный элемент массива = ${min}`);

for (i = 0; i <= arr.length; i++) {
if (arr[i] === 3) {
    console.log(`${i+1} цифра в этом массиве это цифра 3`);
} 
}
*/

/*
*Необязательное задание. *
Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
*/
for( i = 0; i < 20; i++){
     string = "";
    for ( j = 0; j <= i; j++) {
    string = string + "x";
    }
    console.log(string);
}

