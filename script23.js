// Отправьте GET на адресс 'https://jsonplaceholder.typicode.com/posts' после чего извлеките только первые 20 записей 
// 	  и отсортируйте их по убыванию длины title.

// async function getAnswer() {
//     let url = new URL('https://jsonplaceholder.typicode.com/posts');
//     let responce = await fetch(url);
//     let json = await responce.json();
//     let answer = await json.slice(0,21);
//     console.log(answer);
//     answer.sort((a, b) => b.title.length - a.title.length);
//     console.log(answer);
// }
// getAnswer()
// Создайте html документ, в котором подключите script.js. В html файле создайте кнопку (любого вида). 
// 	  По нажатию на кнопку отправляйте с помощтю POST запроса на адресс https://jsonplaceholder.typicode.com/posts объект
// 	  {
//     		title: 'foo',
//     		body: 'bar',
//     		userId: 1,
//   	  }
// 	  В случае получения ответа создайте div, в котором будет храниться информация о полученном ответе (поля title и body ответа).
// 	  Оформление div придумайте сами.
let but = document.querySelector("#post");
console.log(but);
but.onsubmit = function(){postAnswer()};
async function postAnswer(){
    onsubmit.stopPropagation()
    let url = new URL("https://jsonplaceholder.typicode.com/posts");
    console.log(url)
    let responce = await fetch(url,{
        method: "POST",
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    })
    console.log(responce)
    let json = await responce.json();
    console.log(json)
    let div = document.createElement('div');
    div.classList.add("div__answer")
    div.innerHTML = JSON.stringify(json);
    document.body.append(div);
    
}