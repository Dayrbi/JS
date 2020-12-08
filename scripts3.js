// Создадим шесть переменных, в каждой из которых будет один из восьми изученных типов данных. 
//

let number = 123;
let BigInt = 124553246762571756344652575754n;
let string = "Привет, как жизнь?";
let boolean = 5 > 3;
let leng = null;
let pencil  = undefined;
let user = new Object();
let user = {name: "Ivan", age: 19};
let id = Symbol("id");

// Выводим окно prompt с вопросом о вашем возрасте. В зависимости от ответа выводим alert с текстом “поздравляем, вам n полных лет”, 
// 	  где вместо n надо подставить введенное вами значение. Сделать дополнительно проверку на совершенолетие и 
// 	  выводим в окне alert утверждение совершеннолетний пользователь или нет.

let age = +prompt("Сколько вам лет? ");
alert(`Поздравляем, вам ${age} полных лет`);
if(age >= 18){
    alert("Доступ к пиву разрешен");
}
else {
    alert("Купите себе сок");
}

// - Написать скрипт для суммирования чисел в массиве. Есть массив чисел var numbers = [10, 25, 100].
// 	  На выходе должны получить переменную, в которой будет содержаться сумма этих чисел (135).
// 	  Расширить функционал, так, чтобы скрипт игнорировал другие типы данных.

var numbers = [10, 25, 100];
var sum = 0;
function sumarr(array){
for( i = 0; i < array.length; i++){
    if(typeof array[i] === "number" && !isNaN(array[i])){
    sum += array[i];
    }
}
    console.log(sum)
}


// Задание со звездочкой. Создать массив объектов для юзеров [{name: ‘Ivan’, age: 18}, {name: ‘Petr’, age: 12}, {name: ‘Sidor’, age: 25}, {name: ‘Pavel’, age: 24}, {name: ‘Sasha’, age: 29}]
// Написать скрипт, который будет на выходе отдавать два массива. Первый с совершеннолетними пользователями, второй с несовершеннолетними.
let users = [{name: "Ivan", age: 18},
    {name: "Petr", age: 12},
    {name: "Sidor", age: 25},
    {name: "Pavel", age: 24},
    {name: "Sasha", age: 29}];
   let child = [];
   let old = [];
   for(i = 0; i < users.length; i++){
    if(users[i].age < 18){
        child.push(users[i]);
    }
    else{
        old.push(users[i]);
    }
}