"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = 'hello';
console.log(greetings);
var user = 333; //inference it get auto type
console.log(user);
//any type
var hero;
//or
var heroine;
hero = 'batman';
heroine = 'wonder';
console.log(hero, heroine);
hero = 1;
console.log(hero);
//union for two type
var value3 = 'hi';
value3 = 2;
console.log(value3);
function sum(value) {
    return value * value;
}
console.log(sum(1));
function strLower(str) {
    return str.toLocaleLowerCase();
}
strLower('veeru');
//any type
function strupp(str) {
    return str.toLocaleLowerCase();
}
strupp('veeru');
//multiple arguments
function login(name, password, islogin, email) {
    return 0;
}
login('veeru', 1234, true, '@Wemail.com');
//arrow fn
var signin = function (name, islogin) {
    console.log(name, islogin);
};
signin('veeru', false);
//add type for return
function sum1(value) {
    return value * value;
}
console.log(sum1(1));
//void with or without para
function print() {
    console.log('hi');
}
print();
//array auto types of all
var arr = [1, "hello"];
arr.map(function (item) {
    console.log(item); // item: string | number
});
//never
function error(msg) {
    throw new Error(msg);
}
//takes whole obj
function create(user) {
    console.log(user.name, user.age);
}
var obj = { name: "Veeru", age: 25 };
create(obj); // ✔ pass whole object
//enum
var Role;
(function (Role) {
    Role["host"] = "host";
    Role["user"] = "user";
})(Role || (Role = {}));
console.log(typeof Role.host);
console.log(Role.host);
function checkUser(host) {
    return host === 'host';
}
console.log(checkUser(Role.user));
