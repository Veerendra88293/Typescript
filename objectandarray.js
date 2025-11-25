"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var username = {
    name: 'veerendra'
};
console.log(username.name);
//multiple value
var sign = {
    name: 'veerendra',
    age: 1
};
console.log(sign);
//method in obj
var methodinfun = {
    name: 'veerendra',
    greet: function greet(a) {
        return a;
    }
};
console.log(methodinfun.greet('ok'));
// or
var methodinfun2 = {
    name: 'veerendra',
    greet: function (a) {
        console.log(a); // prints the value
    }
};
methodinfun2.greet('veeru');
//Obj inside array
var userarray = [{ name: 'hi' }, { name: 'hi' }];
console.log(userarray[0].name);
var multipleobj = [{ name: 'veeru', age: 1 }, { name: 'veeru' }];
console.log(multipleobj[1].age);
var username9 = {
    name: 'veerendra'
};
console.log(username9.name);
//list
var data = ['mango'];
var no = [1, 2, 3]; //or [mango,apple]
var both = [1, 2, 'mango', 'apple'];
var pi = 3.14;
console.log(pi);
//tuples
var tupless = [1, 2, 'veeru']; //strit values should follow order number,number,sr
tupless[0] = 10;
//but exception 
tupless.push(100);
console.log(tupless);
