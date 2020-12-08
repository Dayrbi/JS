// - Напишите функцию func() которая при каждом своем вызове будет возвращать количество своих вызовов (сколько раз ее вызызвали до этого плюс этот вызов)


function func() {
    var call = 1;
    return function funcCall() {
        return call++
    }
}
var caller = func();
console.log(caller());
console.log(caller());

// - Напишите функцию которая будет увеличивать переменную let i = 0, от 0 до 20, при чем переменная будет увеличивать свое значение на еденицу каждые 2 секунды. Когда
// 	  переменная станет равной 20 прекратить увеличение. Попробуйте реализовать через setInterval и через рекурснивный setTimeout

let i = 0;
let timerId = setTimeout (function timer() {
    i <= 20 ? i++ : clearTimeout(timerId)
    alert(i);
    timerId = setTimeout(timer, 2000)
    return i;
    

},2000)


// - Напишите функцию startTimer() которая будет запускать вывод через confirm("Реклама исчезнет счерез 5 секунд, вы согласны ?"),  
// 	  при нажатии "ДА" вывоите alert("Реклама") через 5 секунд, если нажали "НЕТ", то повторить вопрос confirm("Реклама исчезнет счерез 5 секунд, вы согласны ?")
// 	  и так до тех пор пока пользовательне нажмет "ДА" и не увидит эту рекламу через alert.

function startTimer() {
    let ask = confirm("Реклама исчезнет счерез 5 секунд, вы согласны ?");
    ask === true ?  alert("Реклама") :  setTimeout(startTimer,5000);
}
let advertising = setTimeout(startTimer,5000);