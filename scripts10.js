// Используйте метод reduce в комбинации с concat для свёртки массива массивов в один массив, у которого 
// 	  есть все элементы входных массивов.
// 	  Например:
// 		var arrays = [[1, 2, 3], [4, 5], [6]];
// 		// Ваш код тут
// 		// → [1, 2, 3, 4, 5, 6]	

var arrays = [[1, 2, 3], [4, 5], [6]];
var arr = arrays.reduce((ap,el) => ap.concat(...el));


// Создайте функцию-конструктор, которая позволяет создавать объект пользователя с полями first_name, second_name, age, city.
// 	  С помощью данной функции создайте два объекта пользователей (два пользователя), имя, фамилию, возраст, город проживания задайте
// 	  сами. 

function users(first_name, second_name, age, city){
    this.first_name = first_name;
    this.second_name = second_name;
    this.age = age;
    this.city = city;
}
let first_user = new users("Максим", "Павлов", 18, "Минск");
let second_user = new users("Никита", "Иванов", 19, "Минск");


// Создайте функцию, которая позовляет вывести полную информацию о каждом из двух пользователей созданных в предыдущем задании.
// 	  Функция должна выполнять вывод информации и не принимать аргументов. По сути нужно одну функцию привязать два объекта. 


function users(first_name, second_name, age, city){
    this.first_name = first_name;
    this.second_name = second_name;
    this.age = age;
    this.city = city;
}
let first_user = new users("Максим", "Павлов", 18, "Минск");
let second_user = new users("Никита", "Иванов", 19, "Минск");

function infoUsers(){
    alert(`${this.first_name} ${this.second_name} ${this.age} ${this.city}`)
}
infoUsers.bind(first_user)();
infoUsers.bind(second_user)();