/*
1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown",
 необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
*/
/*
const dropdownItems = document.querySelectorAll('.dropdown-item');
dropdownItems.forEach(function (item) {
    item.classList.add('super-dropdown');
});
console.log(dropdownItems);
*/
/*
2.У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у 
этого элемента, либо добавить, если такого класса у элемента не было.
*/
/*
const btnElements = document.querySelector('.btn');
if (btnElements.classList.contains('btn-secondary')) {
    btnElements.classList.remove('btn-secondary');
} else {
    btnElements.classList.add('btn-secondary');
}
console.log(btnElements);
*/
/*
3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
*/
/*
const menu  = document.querySelector('.menu');
document.querySelector('.menu').classList.remove('dropdown-menu');
console.log(menu);
*/
/*
4. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
*/
/*
const menuButton = document.getElementById ('dropdownMenuButton');
document.getElementById('dropdownMenuButton').id = 'superDropdown';
console.log(menuButton)
*/
/*
5. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" 
равный "dropdownMenuButton" используя dataset.
*/
/*
const button = document.querySelector('[aria-labelledby]');
document.querySelector('[aria-labelledby="dropdownMenuButton"]')
    .dataset.dd = "3";
console.log(button);
*/
/*
6. Удалите атрибут type у элемента с классом "dropdown-toggle".
*/
/*
const type = document.querySelector('.dropdown-toggle');
document.querySelector('.dropdown-toggle').removeAttribute('type');
console.log(type);
*/