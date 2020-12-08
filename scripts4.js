function hello1() {
    alert('Привет, JavaScript!');

}

// Напишите функцию hello2(), которая при вызове будет принимать переменную name (например, «Василий») 

var name = "Василий"
function hello2() {
let message = 'Привет,' + name || 'гость';
alert(message);
}

// Напишите функцию mul(n,m), которая принимает два аргумента и возвращает 
// 	  произведение этих аргументов. Проверьте ее работу.

var sum = 0
function mul(n, m){
    sum += n + m;
    let result = 'Сумма равна:' + sum;
    alert(result);
    return(sum); }

console.log(sum)

// Создайте функцию repeat(str, n), которая возвращает строку, состоящую из n повторений строки str.
// 	  n — по умолчанию 2, str — пустая строка.

function repeat(str, n = 2) {
    let message = str.repeat(n);
    alert(message);
    return(message);
    }

    // - Создайте функцию rgb(a, b, c), которая будет принимать три числовых аргумента и возвращать строку вида «rgb(23,100,134)». 
    //   Если аргументы не заданы, считать их равными нулю. Не проверять переменные на тип данных.
    
var a = 0
var b = 0
var c = 0
function  rgb(a, b, c){
let message = `rgb(${a},${b},${c})`;
alert(message)

; return(message);}


// Создайте функцию avg() , которая будет находить среднее значение арифмитическое значение своих аргументов.

function avg(){
var sum = 0;
var result;
var leng = 0;
for(i = 0; i < arguments.length; i++){
    if(typeof arguments[i] === "number" && !isNaN(arguments[i])){
    leng ++;
    sum += arguments[i];
        }
    }
    result = sum / leng;
    return result


}

// Напишите функцию words(n), которая в зависимости от переданного в нее целочисленного аргумента n, будет выводить слово «товар» 
// 	  в нужно форме («12 товаров», но «22 товара»). По умолчанию аргумент n должен иметь значение 0.

function words(n = 0){
    answer1 = n % 10;
    answer2 = n % 100;
    if(answer1 === 1 && answer2 !== 11){
    alert(n + " товар");}
    else if(answer1 === 2 && 3 && 4 && answer2 !== 12 && 13 && 14){
        alert(n + " товара");
    }
    else {
        alert(n + " товаров");
    }
}

// -Задание со звездочкой. Пишем функцию решения квадратного уравнения через дискриминант:
// 		ax² + bx + c = 0 (общий вид уравнения)

// 		D = b2 – 4ac
// 		D > 0
// 		x1 = (-b + √D ) / 2a
// 		x2 = (-b – √D ) / 2a
// 		D = 0
// 		x = -b / 2a
// 		D < 0 - прекращаем решать уравнение;

function square(a, b, c){
    let D = Math.pow(b,2) - 4*a*c;
    if(D < 0){
        return;
    }
    else if(D > 0){
       let x1 = (-b + Math.sqrt(D)) / (2*a);
       let x2 = (-b - Math.sqrt(D)) / (2*a);
        return [x1,x2];

    }
    else {
       let x = -b / (2*a);
        return [x];
    }
}
