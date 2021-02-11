// Создайте куку с именем 'name' и значением 'Иван'. Выведите содержимое этой куки на экран.
// 	  Например, создайте div в html и при открытии в него будет занаоситься строка в виде "name: Иван";




// div = document.querySelector(".cook");
// document.cookie = "name:=Иван";
// div.innerHTML = document.cookie;


// Создайте куку с вашем именем и вашим возрастом. При открытии страницы появляется два prompt с просьбой ввести вначале Имя
// 	  и потом возраст. После чего выведите на экран содержимое этих двух кук. Вывести можно как в прошлом задании только создайте два 
// 	  div.

div1 = document.querySelector(".inf");
div2 = document.querySelector(".inf__prompt");
document.cookie = "name: Vladimir age: 52";
div1.innerHTML = document.cookie;
let user = prompt("Введите ваше имя");
let age = +prompt("Введите ваш возраст");
document.cookie = `name: ${user}  age: ${age}`;
div2.innerHTML = document.cookie;