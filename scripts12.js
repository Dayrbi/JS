// Создайте класс House, которая позволяет создавать объект здания с параметрами длины(length), ширины(width) и количество этажей(floors)
// Добавьте ему статический метод sortBuyFloors который можно будет использовать для сортировки зданий по возрастанию их высоты. 

class House {
    constructor(length, width, floors){
        this.length = length;
        this.width = width;
        this.floors = floors;
    }
    static sortBuyFloors(){
        House.sort((a, b) => a - b);
    }
}
let firsthouse = new House;

// На основании класса House создайте класс Skyscraper (небоскреб, по сути реализуйте через наследование). Данный класс кроме свойств 
// 	  length, width и floors должен предоставлять дополнительное свойство offices(количество выделенных в офисе задний, можете задать их любым на ваше усмотрение);
// 	  Добавьте свойство fullArea который будет соответствовать суммарной площади всех этажей вашего небоскреба. Данное свойсвто создать через get/set. 
//  	  При этом если площадь небоскреба увеличиась - то это значит что сверху построили еще этажи а длина и ширина не поменялись, площадь может быть только 
// 	  увеличена. Опишите в get как будет осуществляться подсчет площади и вывод этой площадь, а в set определите как будет определяться новое количесвто этажей.
// - Создайте три внебоскреба firstSkyscraper, secondSkyscraper и thirdSkyscraper. Выведите площадь каждого из них используя get fullArea. Попробуйте задать кому-нибудь из
	//   них большую площаь чем первоначальная. Выведите теперь новое количество этажей изменненного внебоскреба. Убедитесь что количество этажей поменялось а длина и ширина - нет.
	//   Если это так - то логика внутри set fullArea реализована правильно.  

class Skyscraper extends House{
    constructor(offices){
        super(13, 15, 4)
        this.offices = offices;
    }
    get fullArea(){
        let area = this.width * this.length * this.floors;
        return area;
    }
    set fullArea(newArea){
        area = newArea
        let floorsRes = newArea / this.width * this.length;
        this.floors = Math.round(floorsRes);
    }
}
let firstSkyscraper = new Skyscraper(13);
let secondSkyscraper = new Skyscraper(15);
let thirdSkyscraper = new Skyscraper(7);

// - Оберните firstSkyscraper, secondSkyscraper и thirdSkyscraper в массив skyscrapers и отсортируйте его по возрастанию высоты небоскребов, 
// 	  используя статический метод класса-родителя sortBuyFloors.
let skyscrapers = [firstSkyscraper, secondSkyscraper, thirdSkyscraper];
skyscrapers.sortBuyFloors();