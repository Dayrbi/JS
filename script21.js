// function cleanRoom(dirtyLevel) {
//     timeClean = dirtyLevel * 1000
//     return new Promise(resolve => setTimeout(() => resolve(timeClean), timeClean))
//     .then(() => console.log(`Уборка проведена успешно за ${timeClean} секунд`))
// }
function cleanRoom(dirtyLevel){
    return new Promise((resolve, reject) => setTimeout(() => {
        if(dirtyLevel <= 10){
            resolve(dirtyLevel);
            console.log(`Уборка проведена успешно за ${dirtyLevel * 1000} секунд`)
        }else{
            reject(new Error("уборка не выполнена, т.к ваша комната слишком грязная"));
        
        }
    },dirtyLevel * 1000))
}
function cleanRooms(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3){
    return cleanRoom(dirtyLevel_1)
    .then(() =>  cleanRoom(dirtyLevel_2))
    .then(() =>  cleanRoom(dirtyLevel_3))
}





let arr = ["str", "str1", "str2", "str", "str2", "str", "str3", "str1", "str4", "str4"];
let result = {};
let val;
let res;
function countRepeats (arr) {
    arr.forEach(e => {
    if (!result[e]){
        result[e] = 1;
    }else{
        result[e] += 1;
    }
     val = Object.values(result).sort((b, a) => a - b);
     res = Object.assign(...Object.keys(result).map((k, i) => ({[k]: val[i]})));
    return res;
});
 
}
countRepeats(arr);
console.log(res);

