// Создайте функцию-конструктор houseBuilder, которая позволяет создавать объект дачного дома с параметрами ширины длины и количества этажей.
// 	  Создайте два объекта firstHouse и secondHouse на основании этой функции конструктора. (Длина, ширина, количество этажей - числовой тип данных, 
// 	  значения придумайте сами). 

// 	- Создайте метод calcArea который будет возвращать суммарную площадь всех этажей дома. Данный метод занести в прототип конструктора. Вызвать
// 	  данный метод на каждом созданном объекте и результат записать в поле totalArea каждого объекта.


function houseBuilder(height, width, flour) {
    this.height = height;
    this.width = width;
    this.flour = flour;
    
}

var firstHouse = new houseBuilder(1000, 2300, 3);
var secondHouse = new houseBuilder(1200, 5500, 2);
houseBuilder.prototype.calcArea = function() {
     return this.width * this.height * this.flour;
}
firstHouse.totalArea = firstHouse.calcArea();
secondHouse.totalArea = secondHouse.calcArea();


// Данна функция function askArea(result, resolve, reject) {
//   				let area = result();
//   				if area >= "120") resolve();
//   				else reject();
// 			}
	
// 	  Добавьте в прототип конструктора houseBuilder метод для проверки того что выполнен план по площади checkAreaSuccessfully, которая
// 	  выполняет alert("План по стройке выполнен"). Добавьте также метод для проверки того что не выполнен план по площади checkAreaFail,
// 	  которая выполняет alert("План по стройке не выполнен выполнен"). Попробуйте вызвать:
		
// 		askArea(firstHouse.calcArea, firstHouse.checkAreaSuccessfully, firstHouse.checkAreaFail)
// 		askArea(secondHouse.calcArea, secondHouse.checkAreaSuccessfully, secondHouse.checkAreaFail)

// 	Будет ли такой код работать корректно? Если нет то используйте известные вам механизмы привязки чтобы решить эту задачу. 

	 
function askArea(result, resolve, reject) {
  	let area = result();
  	if (area >= "120") resolve();
  	else reject();
}
houseBuilder.prototype.checkAreaSuccessfully = function() {
    alert("План по стройке выполнен");
}
houseBuilder.prototype.checkAreaFail = function() {
    alert("План по стройке не выполнен выполнен");
}

askArea(firstHouse.calcArea.bind(firstHouse), firstHouse.checkAreaSuccessfully.bind(firstHouse), firstHouse.checkAreaFail.bind(firstHouse));
askArea(secondHouse.calcArea.bind(secondHouse), secondHouse.checkAreaSuccessfully.bind(secondHouse), secondHouse.checkAreaFail.bind(secondHouse));