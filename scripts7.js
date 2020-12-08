// - Дан массив var arr = [1, 2, 3, 4, 4, 5, 2, 9, 4]; На основании этого массива создать новый массив arrUnique который будет представлять собой массив arr но без дублирующихся
// 	  по своим значениям элементам. Использовать методы reduce и indexOf.

var arr = [1, 2, 3, 4, 4, 5, 2, 9, 4];
let arrUnique = arr.filter((item, index) => arr.indexOf(item)===index);
console.log(arrUnique);

// - Дан массив пользователей. var users = [
//     {id: 1, name: "Вася", age: 19},
//      {id: 2, name: "Петя", age: 18},
//      {id: 3, name: "Маша", age: 17},
//      {id: 4, name: "Света", age: 18},
//      {id: 5, name: "Наташа", age: 17},
//    {id: 6, name: "Женя", age: 12},
//    {id: 7, name: "Коля", age: 30},
//    {id: 8, name: "Настя", age: 16},
//    {id: 9, name: "Антон", age: 19},
//    {id: 10, name: "Иван", age: 20},
//    {id: 11, name: "Павел", age: 16},
//    {id: 12, name: "Денис", age: 20}
//  ];
// На основании этого массива сформировать новы массив usersAfterYear где все пользователи повзрсолели на год и являются совершенолетними (повзрослевших на год, но оставшимися
// все еще несовершенолетних пользователей в новый массив usersAfterYear не включать). Сам массив users должен остаться неизменным. Использовать метод map.
// - На основании массива usersAfterYear, полученного на основании предыдущего задания создать новый массив usersAfterYearUniqueAge, 
// 	  в котором нет пользователей с одинаковым возрастом. Если у вас есть два пользователя ({id: 2, name: "Петя", age: 19} и {id: 4, name: "Света", age: 19}, то вы должны оставить
//  	  только Петю или Свету одного а не их двоих). (Это задание похоже на первое задания про массив arr и arrUnique)


var users = [
    {id: 1, name: "Вася", age: 19},
     {id: 2, name: "Петя", age: 18},
     {id: 3, name: "Маша", age: 17},
     {id: 4, name: "Света", age: 18},
     {id: 5, name: "Наташа", age: 17},
   {id: 6, name: "Женя", age: 12},
   {id: 7, name: "Коля", age: 30},
   {id: 8, name: "Настя", age: 16},
   {id: 9, name: "Антон", age: 19},
   {id: 10, name: "Иван", age: 20},
   {id: 11, name: "Павел", age: 16},
   {id: 12, name: "Денис", age: 20}
 ];

var users1 = users.map((person) => {
person.age = person.age + 1;
return person;
})
var usersAfterYear = users1.filter(person => person.age >=18)
var usersAfterYearUniqueAge = usersAfterYear.reduce((ad, user) => {
let index = ad.findIndex(item => item.age === user.age);
if(index === -1){
    ad.push(user);
}
return ad;
},[])


// - Дан объект var users = {
//     first_name: "pavel",
//     second_name: "ivanov",
//     father_name: "ivanovich",
//     city: "minsk",
//     car: "subaru",
//     telephone: "samsung" 
// }
// Необходимо сделать так чтобы все значения полей объекта users начинались с заглавной буквы (например не "pavel" a "Pavel"). 
// Для решения этой задачи рекомендую использовать методы Object.keys или Object.values и методы строк как UpperCase. 


var users = {
        first_name: "pavel",
        second_name: "ivanov",
        father_name: "ivanovich",
        city: "minsk",
        car: "subaru",
        telephone: "samsung" 
    }
    for (let value of Object.values(users)){
      users1 = value[0].toUpperCase() + value.slice(1);
      console.log(users1)
    }

//  Посчитать первые 8 чисел Фибоначчи использую рекурсию. Например: fibonachi(n); (При вызове функции положите n = 8); 

function fibonachi(n) {
        return n <= 1 ? n : fibonachi(n - 1) + fibonachi(n - 2);
}
console.log(fibonachi(8));

// - Посчитать с помощью рекурсии факториал числа 10. Например: factorial(n); (При выозове полжите n = 10); 	


function factorial(n) {
    return n == 1 ? 1 : n + factorial(n - 1);
}
console.log(factorial(10));



