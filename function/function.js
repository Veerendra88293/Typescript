var add; //or with argumnets //it is a type only not fn
add = function () {
    console.log('hi i am func of type above add');
};
add();
var multipley;
multipley = function (a, b) {
    return a * b;
};
multipley(1, 2);
// or easy syntac fo fn not type
multipley = function (x, y) { return x * y; };
// using has callback 
function calculate(fn) {
    console.log(fn(10, 20));
}
calculate(multipley);
var add2;
add2 = function (a, b) { return a + b; };
function calculate2(fn) {
    console.log(fn(10, 20));
}
calculate(add2);
var add4;
add4 = function (x, y) { return x + y; };
var dividefunc = function (a) {
    return a;
};
dividefunc(1);
var msg = 'JI';
var str = "hi ".concat(msg).toLowerCase();
console.log(str);
var p = {
    name: "veeru",
    age: 22
};
var role = "admin";
console.log(typeof role);
var a = 1;
a = '2'; // now it works (but unsafe)
console.log(typeof a);
var b = '2';
console.log(typeof b);
function genric(a) {
    return a;
}
console.log(genric([1, 2]));
