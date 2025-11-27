// function getElement(array:any[]){
//     return array[0]
// }
// let arrayNO = [1,2,3,4]
// let arrayStr = ['a','b']
// console.log(getElement(arrayNO))
//to avoid using any type  like above
//we use generic
function getElement(array) {
    return array;
}
var arrayNO = [1, 2, 3, 4];
var arrayStr = ['a', 'b'];
console.log(getElement(arrayStr));
function identity(value) {
    return value;
}
identity(10);
identity("hello");
var numbers = [1, 2, 3];
var names = ["ram", "sam"];
