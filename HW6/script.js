/*
1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент
в консоль.
*/
/*
const link = document.querySelectorAll(`#super_link`); 
console.log(link[0].textContent);
*/
/*
2. Внутри всех элементов на странице, которые имеют класс "card-link", 
поменяйте текст внутри элемента на "ссылка".
*/
/*
const link = document.querySelectorAll('.card-link');
link.forEach(i => {
    i.textContent = `ссылка`;
});
console.log(link[0]);
*/
/*
3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" 
и вывести полученную коллекцию в консоль.
*/
/*
const link = document.querySelectorAll('.card-body .card-link');
console.log(link);
*/
/*4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 
и вывести его в консоль.*/
/*
const link = document.querySelector('[data-number="50"]');
console.log(link.textContent);
*/
/*
5. Выведите содержимое тега title в консоль.
*/
/*
const titls = document.querySelector('title');
console.log(titls.textContent);
*/
/*
6.Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
*/
/*
const cardTitle = document.querySelector('.card-title');
console.log(cardTitle.parentNode);
*/
/*
7.Создайте тег p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, 
который имеет класс "card".
*/
/*
const content = document.querySelector('.card');
const newContent = document.createElement ('p');
newContent.innerText = 'Привет';
content.prepend(newContent);
console.log(content.textContent);
*/
/*
8. Удалите тег h6 на странице.
*/
/*
const teg = document.querySelector ('h6');
console.log(teg);
teg.remove(teg);
*/