// class Person{
//     name:string;//public 
//     age:number;
//     constructor(name:string,age:number){
//         this.name=name;
//         this.age=age;
//     }
//     getname(){
//         console.log(this.name)
//     }
// }
// let user = new Person('veeru',2)
// console.log(user)
// export{}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getname = function () {
        console.log('hi', this.name);
    };
    return Person;
}());
var user = new Person('veeru');
console.log(user);
